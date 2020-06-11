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

/**
 * Creating this object to track the original source code so that when the stacktrace.js function
 * callback runs, it can give the location of the code being run in the "original" source code for
 * exercise creation. Everytime something is identified as needing a tracer, its unique name is added
 * to this object as the key with the value being the location in the "original" source code
 * Note: not actual the original source code, the deanonymized code created by `rewriteCode.js. This
 * is a limitation/issue to eventually address... @TODO ... although -- is it a problem to show lightly
 * linted / reformatted code as "source" code? It by definition doesn't change the meaning of the code,
 * just imposes different styleguide rules, which I actually do not this is a problem so maybe this is not
 * a todo.
 */
let sourceCodeMap = {};

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
const scriptString = fs.readFileSync(path.resolve(__dirname, `./temp/updated_${fileKey}.js`)).toString();
const scriptArr = scriptString.split("\n");
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

/* Final step: update the source code with the state manager */
const finalSource = addStateManagerUpdates(scriptString, scriptUpdates, stateManagerStr);
console.log(sourceCodeMap);
fs.writeFileSync(`./temp/final_${fileKey}.js`, finalSource); // @TODO: should these modifications be on the orig script so that anonymous functions are still accurately represented? or could re-anonymize functions at the very end of this so that the script runs in the exact same way it did before just with the state manager added

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

    /** find the scope that the variable is defined in by removing one scope item at a time
     * until there is corresponding value in the stateManager. EX: updating `position` var
     * in drag will lead to a key of "Program:Map:drag:position", but the `position` variable
     * is actually defined one scope up and the correct entry to update in the stateManager
     * is "Program:Map:position".
     * s = scopeOptions.length - 2 because we don't want to splice the current variable's
     * name, which is the last item in the array
     */
    const updateStateManager = function (key, node) {
        if (stateManager[key]) {
            stateManager[key][1] = node;
        } else {
            let scopeOptions = key.split(":");
            let s = scopeOptions.length - 2;
            let currKey = key;
            while (stateManager[currKey] === undefined && s >= 0) {
                scopeOptions.splice(s, 1);
                currKey = scopeOptions.join(":");
                s--;
            }
            if (stateManager[currKey]) {
                stateManager[currKey][1] = node;
            } else {
                /** if the variable wasn't previously declared but the developer didn't put
                 * a variable declarator keyword in front of it (var, let, const), add the new
                 * variable to the stateManager. This shouldn't happen because an error like this
                 * should have been fixed in the linting process */
                console.log(`ERROR: New variable declaration ${key} without keyword.`);
                stateManager[key] = [null, node];
            }
        }
    };
    /* compile the updated source code and add the state manager object to it */
    const fxnCallCallback = (fnName, sourceCodeArr, sourceCodeMap) => (stackframes) => {
        if (callCounts[fnName] === undefined) {
            callCounts[fnName] = 1;
        } else {
            callCounts[fnName] += 1;
        }
        const nodeLoc = sourceCodeMap[fnName];
        /** get all lines of the node */
        const nodeCodeLines = sourceCodeArr.slice(nodeLoc.start.line - 1, nodeLoc.end.line + 1);
        /** get the specific characters of the node within the lines */
        nodeCodeLines[0].slice(nodeLoc.start.column);
        nodeCodeLines[nodeCodeLines.length - 1].slice(0, nodeLoc.end.column + 1);
        const nodeCodeStr = nodeCodeLines.join("\n");
        if (verbosePrint) {
            console.log(fnName, " was called. Source code =", nodeCodeStr);
        }
        fetch("/1110/log", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ data: nodeCodeStr, name: fnName })
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    };

    return `\n/* autogen added */ 
    \nlet verbosePrint = false;
    \nlet stateManager = ${stateManagerStr}
    \nlet domObjects = [];
    \nconst updateStateManager = ${updateStateManager.toString()}
    \nlet callCounts = {};
    \nconst fxnCallCallback = ${fxnCallCallback.toString()} 
    document.onreadystatechange = () => {
        if (document.readyState === "complete") {
            fetch("/1110/log", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ data: "/* DOM LOADED HERE! */" })
            })
            .then((response) => response.json())
            .then((data) => console.log(data));
        }
    };
    document.getElementById("readytolearnbtn").addEventListener("click", () => {
        fetch("/1110/exercisedata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ callCounts: callCounts, stateManager: stateManager })
        })
        .then((response) => response.json())
        .then((data) => console.log(data));
    });
    \nconst sourceCode = \`${scriptString}\`;
    \nconst sourceCodeArr = sourceCode.split("\\n");
    \nconst sourceCodeMap = ${JSON.stringify(sourceCodeMap)}
    /* end autogen added */
    \n${sourceArr.join("\n")}`;
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
        const fxnKey = `${fxnName}:${node.loc.start.line}:${node.loc.end.line}`;
        sourceCodeMap[fxnKey] = { start: node.loc.start, end: node.loc.end };
        const updateStr = `
        \n/* autogen added */
        ${fxnName} = StackTrace.instrument(${fxnName}, fxnCallCallback(\`${fxnKey}\`, sourceCodeArr, sourceCodeMap));
        /* end autogen added */\n`;

        /** Add the autogenerated code one line before the start of the function */
        const startLine = node.loc.start.line - 1;
        /** locKey format = <startLine>.<positionInLine to start> */
        const locKey = `${startLine}.0`;

        scriptUpdates.push({
            loc: locKey,
            autoStr: updateStr
        });
    }
    /** @TODO/WiP: Adding tracing to non-library methods (i.e. methods on classes written by the site developers) */
    if (isClassMethodDeclaration(node)) {
        console.log(`class method definition of: ${node.key.name}`);
    }
    /** Adding tracing library methods (i.e. methods created by an imported code library, for example: `$map.css`
     *
     * _Important Implementation Detail/Limitation_: currently cannot  instrument over "nested" methods. For example,
     * `$map.children().not(".ground")` will be traced for its call to `.children()`, but a separate trace will NOT
     * be created for the call to `.not("ground")`.
     * In other words, SE traces functions and methods, but it cannot trace nested methods / methods called on
     * attributes of classes.
     **/
    if (isLibraryMethodCall(node)) {
        /** Expression Statement Example:
         * $map.css({
         *   left: position[0],
         *   top: position[1]
         * });
         **/
        if (node.type === "ExpressionStatement") {
            /** Grabs the stringified node by its position in the source code */
            const stringifiedNode = scriptString.slice(node.range[0], node.range[1]);
            let methodName = `${stringifiedNode.split("\n")[0]}:${node.loc.start.line}:${node.loc.end.line}`;
            sourceCodeMap[methodName] = { start: node.loc.start, end: node.loc.end };

            /** Creating two update strings to wrap the instrumented expression in, so creating two entries
             * in the scriptUpdates object to add additional lines above AND below the expression. Here is what
             * that would look like in practice, including the `autogen added` comments: */
            /* autogen added */
            /* StackTrace.instrument(() => {
                    $map.css({
                        width: map_size[0],
                        height: map_size[1],
                        position: "absolute",
                        zIndex: -1
                    });
                }, fxnCallCallback("$map.css"))(); */
            /* end autogen added */
            const updateStartStr = `\n/* autogen added */ \n StackTrace.instrument(() => {`;
            const updateEndStr = `\n }, fxnCallCallback(\`${methodName}\`, sourceCodeArr, sourceCodeMap))() \n /* end autogen added */`;

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
        }
        // else if (node.type === "VariableDeclarator") {
        //  /** what would this case look like? is this ever a thing? */
        // }
    }

    /** If a method is called when assigning a value to a variable, it also should be traced.
     * Example:  `var $overlay = $container.children("img");` should be traced to become
     * `var $overlay =  StackTrace.instrument(() => {
     *      $container.children("img")
     * }, , fxnCallCallback("$container.children"))();`
     */
    if (isRHSMethod(node)) {
        const varName = node.id.name;
        const varKey = `rhs-method-${varName}:${node.loc.start.line}:${node.loc.end.line}`;
        sourceCodeMap[varKey] = { start: node.loc.start, end: node.loc.end };
        const defn = scriptString.slice(node.init.range[0], node.init.range[1]);
        const updateStr = `\n/* autogen added */
        ${varName} = StackTrace.instrument(() => {
            ${defn}
        }, fxnCallCallback(\`${varKey}\`, sourceCodeArr, sourceCodeMap))();
        /* end autogen added */\n`;

        /** Add the autogenerated code one line before the start of the function */
        const startLine = node.loc.start.line - 1;
        /** locKey format = <startLine>.<positionInLine to start> */
        const locKey = `${startLine}.0`;

        scriptUpdates.push({
            loc: locKey,
            autoStr: updateStr
        });
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
    /** If the node is a variable declaration, chceck if the item is a DOM object, add the variable to
     * the current scope and update the state manager */
    if (node.type === "VariableDeclarator") {
        const nodeName = node.id.name;
        currentScope.push(nodeName);
        addVarsToStateManager(node, currentScope);

        /** Add updates in the script that check whether the variable is a DOM object and update the
         * state manager accordingly. UPDATE: The stateManager entry is an array where the 0th value is
         * a boolean indicating whether the item is a dom object or not and the 1st value is the actual value
         * current value of the variable.
         */
        const endLoc = node.loc.end;
        const locKey = `${endLoc["line"]}.${endLoc["column"]}`;
        const stateManagerKey = `${currentScope[0]}:${nodeName}`;
        const updateStr = `
            \n/* autogen added */ 
            let isDomObj_${nodeName} = ${nodeName} instanceof jQuery || ${nodeName} instanceof HTMLElement;
            stateManager["${stateManagerKey}"][0] = isDomObj_${nodeName};
            if (isDomObj_${nodeName}) domObjects.push(${nodeName})
            /* end autogen added */\n`;
        scriptUpdates.push({
            loc: locKey,
            autoStr: updateStr
        });
    }
    /**
     * @TODO: how is this different than `isVariableUpdate`?
     */
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
        const updateStr = `/* autogen added */ updateStateManager("${stateManagerKey}", ${nodeName}); /* end autogen added */\n`;

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

/** @TODO add all possible cases. Checking if a method is assigned a variable value to make
 * sure that method call still gets traced. Example: `var $overlay = $container.children("img");` */
function isRHSMethod(node) {
    return (
        node.type === "VariableDeclarator" &&
        node.init.type === "CallExpression" &&
        node.init.callee.type === "MemberExpression"
    );
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
    return node.type === "FunctionDeclaration" && !/[A-Z]/.test(node.id.name[0]);
}

/** check if a node is a class method declaration */
function isClassMethodDeclaration(node) {
    return node.type === "Property" && node.value.type === "FunctionExpression";
}

/** Check for instrumenting Stacktrace.js */
// @TODO: does this hold for user-defined class methods? do MemberExpressions only capture
// library expressions?
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
        stateManager[`${fxnName}:${param.name}`] = [null, null];
    }
    /** @TODO MAXINE: add checks for each input right under the function definition to see if any input
     * is a variable value
     */
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
        stateManager[stateManagerVarName] = [null, null]; // @todo: set init vals in statemanager to be init vals of vars
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
