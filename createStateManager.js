/*
    Traverse through a program's AST and create a stateManager with an entry for each variable in the program. Insert code in the original source code that updates the state manager whenever a variable value is changed.
*/

// to handle typescript error :https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam
const estraverse = require("estraverse");
const recast = require("recast");
const stringify = require("json-stringify-safe");
const fs = require("fs");
const path = require("path");

/* Initialize state manager. This will be inserted into the source code at the very end of its creation/the source code's modification (see scriptUpdates array comment) and will be the definitive source for every variable's value in the program. */
let stateManager = {};

/* Initialize scope collector. This will be an array of arrays. Each inner array corresponds to a new scope (a function or a class). The 0th item in each inner array is the current scope. The remaining items in each inner array are list of variables defined in that scope. Example for XKCD `update` function: ["Program:Map:update", "centre_last", "$remove", ...] */
let programScopes = [];

/* Initialize script update collector. This will be an array of objects representing the lines to be added to the original source code in order to update the stateManager in real time. Each entry will have the location that the update should go as well as the update itself. EX: {loc: "3.46", autoStr: ""} 

Each time a variable value is updated, we want to update the stateManager to reflect that value change. This array collects the places where code should be added (i.e. where the variable changes in the source code) in order to update the stateManager.
*/
let scriptUpdates = [];

/* turn on/off debug printing */
let printSpecialPrint = true;

/* Special printing formatting */
const spprint = function (caller, info, isObj = false) {
    if (printSpecialPrint) {
        let specialPrint = `~~~~~~${caller}:`.padEnd(35, " ");
        if (isObj) {
            /* using json-stringify-safe to safeguard against circular paths */
            console.log(`${specialPrint + stringify(info, undefined, 2)}`);
        } else {
            console.log(`${specialPrint + info}`);
        }
    }
};

/** change the file key to load in different source code */
// const fileKey = "mapstd_src";
const fileKey = "xkcd_src";
const scriptString = fs.readFileSync(path.resolve(__dirname, `./updated_${fileKey}.js`)).toString();
const ast = recast.parse(scriptString, { range: true });

/* referenced: https://github.com/airportyh/esprima_fun/blob/master/scope_chain.js. Creating a list of scopes where 0th item in each scope list is the function name or null if function is anonymous. Initialized with global 'Program' scope. TEMP OBJECT used to track CURRENT program scopes AS YOU TRAVERSE. @TODO: update for clarity */
let scopeChain = [["Program"]];

/* traverse the AST, do something to each node on enter and on exit */
estraverse.traverse(ast.program, {
    enter: enter,
    leave: leave
});
spprint("traversal results", stateManager);
spprint("traversal results", programScopes);

let stateManagerStr = JSON.stringify(stateManager);

/* update the source code with the state manager */
const finalSource = addStateManagerUpdates(scriptString, scriptUpdates, stateManagerStr);
fs.writeFileSync(`./final_${fileKey}.js`, finalSource); // @TODO: should these modifications be on the orig script so that anonymous functions are still accurately represented? or could re-anonymize functions at the very end of this so that the script runs in the exact same way it did before just with the state manager added

/* after traversing through the source code's AST representation and collecting information about the places where variable updates are made, modify the source code so that it updates the stateManager every time a variable gets updated. */
function addStateManagerUpdates(source, scriptUpdates, stateManagerStr) {
    /* sort in descending order so we are modifying the file from the end to the beginning so we don't mess up the recorded locations for updates downstream */
    scriptUpdates = scriptUpdates.sort((a, b) => b["loc"] - a["loc"]);
    let sourceArr = source.split("\n");
    for (let update of scriptUpdates) {
        const locs = update["loc"].split(".");
        const line = locs[0];
        /* insert the update into the correct position */
        sourceArr.splice(line, 0, update["autoStr"]);
    }
    /* compile the updated source code and add the state manager object to it */

    const fxnCallCallback = (fnName) => (stackframes) => {
        console.log(fnName, " was called");
    };

    const fxnCallCallbackStr = `const fxnCallCallback = ${fxnCallCallback.toString()};`;

    return `\n/* autogen added */ \nlet stateManager = ${stateManagerStr}\n ${fxnCallCallbackStr}\n/* end autogen added */\n\n${sourceArr.join(
        "\n"
    )}`;
}

function enter(node) {
    let scopedFxnName = null;
    let currentScope = scopeChain[scopeChain.length - 1];

    /** Handling errors from rewriteCode.js */
    if (isAnonymizedFunction(node)) {
        spprint(
            `ERROR: function ${node.id.name} not deanonymized. Handle error in deanonymization script (rewriteCode.js).`
        );
    }
    /** adding stacktrace instrumentation to functions */
    if (isFunctionDeclaration(node)) {
        const fxnName = node.id.name;
        const updateStr = `\n/* autogen added */ \n ${fxnName} = StackTrace.instrument(${fxnName}, fxnCallCallback("${fxnName}"));\n/* end autogen added */\n`;

        /** Add the autogenerated code one line before the start of the function */
        const startLine = node.loc.start.line - 1;
        /** lockey = <startLine>.<positionInLine to start> */
        const locKey = `${startLine}.0`;

        scriptUpdates.push({
            loc: locKey,
            autoStr: updateStr
        });
    }
    /** WIP @TODO MAXINE CLARIFY. adding stacktrace documentation to program-defined (non-library) methods */
    if (isClassMethodDeclaration(node)) {
        console.log(`class method definition of: ${node.key.name}`);
    }
    /** WIP @TODO MAXINE clarify nested method issue. adding stacktrace instrumentation to library methods (ex: $map.css)
     *
     * WiP explanation of limitation: can instrument over functions, can instrument over methods within classes, can't instrument over nested methods / methods called on attributes of classes.
     * EXAMPLE: works on $map.css, not on $map.position.auto
     */
    if (isLibraryMethodCall(node)) {
        if (node.type === "ExpressionStatement") {
            /** EX:  
             * $map.css({
                left: position[0],
                top: position[1]
            }); */
            /** Grabs the stringified node by its position */
            const stringifiedNode = scriptString.slice(node.range[0], node.range[1]);
            let methodName = stringifiedNode.split("\n")[0];
            /** @TODO Maxine is there ever a case where there is a curly brace w/o a paren? if not, remove */
            const methodNameEnd =
                methodName.indexOf("(") > 0 ? methodName.indexOf("(") : methodName.indexOf("{");
            methodName = methodName.slice(0, methodNameEnd);

            const updateStartStr = `\n/* autogen added */ \n StackTrace.instrument(() => {`;
            const updateEndStr = `\n }, fxnCallCallback("${methodName}"))() \n /* end autogen added */`;

            const startLoc = node.loc.start;
            const startLocKey = `${startLoc["line"] - 1}.${startLoc["column"]}`;
            scriptUpdates.push({
                loc: startLocKey,
                autoStr: updateStartStr
            });

            const endLoc = node.loc.end;
            const endLocKey = `${endLoc["line"]}.${endLoc["column"]}`;
            scriptUpdates.push({
                loc: endLocKey,
                autoStr: updateEndStr
            });
        } else if (node.type === "VariableDeclarator") {
            /** @TODO handle this */
        }
    }

    /** If the node creates a new scope, add it as a new element in the scopeChain array, which
     * maintains information about the current program scope we are in as we are traversing through the AST.
     */
    if (createsNewScope(node)) {
        /* initialized the scopeChain to include the global "Program" state, so don't add it twice */
        if (node.type !== "Program") {
            /* create the stateManager key for the current function scope if not yet created */
            if (scopedFxnName === null) {
                const fxnName = node.id.name;
                scopedFxnName = `${currentScope[0]}:${fxnName}`;
            }
            /* add the new scope to the scopeChain with fxnName as 0th elem */
            scopeChain.push([scopedFxnName]);
            /* update current scope */
            currentScope = scopeChain[scopeChain.length - 1];
            /* add any function inputs into the state manager */
            addInputsToStateManager(node, scopedFxnName); // @TODO: add to scopechain as well
            spprint("enter", `new scope created: ${scopedFxnName}`);
        }
    } else {
        spprint("enter", `curr scope: ${currentScope[0]}`);
    }
    /** If the node is a variable declaration, add the variable to the current scope and update
     * the state manager */
    if (node.type === "VariableDeclarator") {
        currentScope.push(node.id.name);
        addVarsToStateManager(node, currentScope);
    }
    /** MAXINE @TODO explain this case */
    if (node.type === "AssignmentExpression") {
        addVarsToStateManager(node, currentScope);
    }
    if (isVariableUpdate(node)) {
        /* nodes from an AST parsed by recast have location objects that specify their location in the source code by line and column. This creates unique location keys from the given information so that when it comes time to rewrite the code with the stateManager update lines, we know where those lines should go. */
        const endLoc = node.loc.end;
        const locKey = `${endLoc["line"]}.${endLoc["column"]}`;

        /* find var in state manager */
        let nodeName = getVarName(node);
        // MAXINE @TODO: make sure that this still works when you're updating the
        // value of a variable that is outside of your current scope (ex:
        // updating the value of `position` in the drag function...)
        let stateManagerKey = `${currentScope[0]}:${nodeName}`;
        /* add code in src to update the state manager */
        const updateStr = `\n/* autogen added */ \nstateManager["${stateManagerKey}"] = ${nodeName}\n/* end autogen added */\n`;

        /* add updates to the update collector so that we can insert all the updates to the source code at the same time at the end of the traversal */
        scriptUpdates.push({
            loc: locKey,
            autoStr: updateStr
        });
    }
}

/** if we're leaving a node that created a new scope, update the scopeChain so that
 * the current scope is always represented by the last item in the scopeChain array. */
function leave(node) {
    if (createsNewScope(node)) {
        let currentScope = scopeChain.pop();
        printScope(currentScope, node);
        programScopes.push(currentScope);
    }
}

/** pretty printing for scope information */
function printScope(scope, node) {
    const declaredVars = scope.slice(1);
    const varsDisplay = declaredVars.length === 0 ? "NONE" : declaredVars.join(", ");
    if (node.type === "Program") {
        spprint("printScope", `Variables declared in the global scope: ${varsDisplay}`);
    } else {
        if (node.id && node.id.name) {
            spprint("printScope", `Variables declared in the function ${node.id.name}(): ${varsDisplay}`);
        } else {
            spprint("printScope", `Variables declared in anonymous function: ${varsDisplay}`);
        }
    }
}

/** checking if an expression statement updates a variable value */
function isVariableUpdate(node) {
    return (
        (node.type === "ExpressionStatement" && node.expression.type === "AssignmentExpression") ||
        node.type === "VariableDeclarator"
    );
}

/** Check if a node is a function declaration, not an es5 class definition */
function isFunctionDeclaration(node) {
    return node.type === "FunctionDeclaration" && !/[A-Z]/.test(node.id.name);
}

/** check if a node is a class method declaration */
function isClassMethodDeclaration(node) {
    return node.type === "Property" && node.value.type === "FunctionExpression";
}

/** Check for instrumenting Stacktrace.js */
function isLibraryMethodCall(node) {
    return (
        (node.type === "ExpressionStatement" &&
            node.expression.type === "CallExpression" &&
            node.expression.callee.type === "MemberExpression") ||
        (node.type === "VariableDeclarator" &&
            node.init &&
            node.init.type === "CallExpression" &&
            node.init.callee.type === "MemberExpression")
    );
}

/** the name of a variable is located in different spots depending on
 * the AST node type. This helper function accesses the name of a variable
 * depending on the node type. */
function getVarName(node) {
    let varName = null;

    switch (node.type) {
        case "AssignmentExpression":
            varName = node.left.name;
            break;
        case "VariableDeclarator":
            varName = node.id.name;
            break;
        case "ExpressionStatement":
            if (node.expression.left.type === "MemberExpression") {
                if (typeof node.expression.left.name === "string") {
                    varName = node.expression.left.name;
                } else {
                    varName = node.expression.left.object.name;
                }
                break;
            } else {
                varName = node.expression.left.name;
                break;
            }
        default:
            varName = `"DIDN'T CATCH CASE for type ${node.type}"`;
    }
    return varName;
}

/** Check if the node creates a new scope */
function createsNewScope(node) {
    return (
        node.type === "FunctionDeclaration" ||
        isAnonymizedFunction(node) ||
        node.type === "Program" ||
        (node.type === "Property" && node.value.type === "FunctionExpression") /** class method */
    );
}

/** add function inputs to the state manager object. The changing values of
 * inputs needs to be tracked as well as the changing values of variables! */
function addInputsToStateManager(node, fxnName) {
    const params = isAnonymizedFunction(node) ? node.init.params : node.params;

    for (let param of params) {
        stateManager[`${fxnName}:${param.name}`] = null;
    }
}

/** Add variables to the state manager object. */
function addVarsToStateManager(node, scope) {
    let varName = null;
    spprint("addVarsToStateManager", `node val type ${node.type}`);

    if (node.type === "AssignmentExpression") {
        varName = node.left.name;
    } else {
        varName = node.id.name;
    }

    const stateManagerVarName = `${scope[0]}:${varName}`;
    if (stateManager[stateManagerVarName] === undefined) {
        stateManager[stateManagerVarName] = null;
    }
}

/**
 * This check purposefully excludes "truly" anonymous functions like (function() {
 *      ...
 * })
 * because these functions do not have variable declarators or expression statements as their
 * LHS declarators
 */
function isAnonymizedFunction(node) {
    return (
        (node.type === "VariableDeclarator" && node.init && node.init.type === "FunctionExpression") ||
        (node.type === "ExpressionStatement" &&
            node.expression === "AssignmentExpression" &&
            node.expression.right === "FunctionExpression")
    );
}
