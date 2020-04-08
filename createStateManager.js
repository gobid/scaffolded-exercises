/*
    Traverse through a program's AST and create a stateManager with an entry for each variable
    in the program.
*/

// to handle typescript error :https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam
const estraverse = require("estraverse");
const recast = require("recast");
const stringify = require("json-stringify-safe");
const fs = require("fs");

/* ************************ Setup ******************************* */

/* Initialize state manager */
let stateManager = {};

/* Initialize scope collector */
let scopeList = []; // TODO: RENAME VAR

/* turn on/off debug printing */
let printSpecialPrint = true;

/* Special console log formatting */
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

const fileKey = "xkcd_src";
const scriptString = fs.readFileSync(`./updated_${fileKey}.js`).toString();
const ast = recast.parse(scriptString);

/* ********************** End setup ***************************** */

/* referenced: https://github.com/airportyh/esprima_fun/blob/master/scope_chain.js. Creating a list of scopes where 0th item in each scope list is the function name or null if function is anonymous. Initialized with global 'Program' scope */
let scopeChain = [["Program"]];

estraverse.traverse(ast.program, {
    enter: enter,
    leave: leave
});
console.log(stateManager);
console.log(scopeList);

let stateManagerStr = JSON.stringify(stateManager);
fs.writeFileSync(`./state_manager_${fileKey}.json`, stateManagerStr);

let scopeListStr = JSON.stringify(scopeList);
fs.writeFileSync(`./scope_list_${fileKey}.json`, scopeListStr);

function enter(node) {
    let scopedFxnName = null;
    let currentScope = scopeChain[scopeChain.length - 1];

    if (isAnonymizedFunction(node)) {
        spprint(
            `ERROR: function ${node.id.name} not deanonymized. Handle error in deanonymization script (rewriteCode.js).`
        );
    }
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

    if (node.type === "VariableDeclarator") {
        currentScope.push(node.id.name);
        addVarsToStateManager(node, currentScope);
    }
    if (node.type === "AssignmentExpression") {
        addVarsToStateManager(node, currentScope);
    }
}

function leave(node) {
    if (createsNewScope(node)) {
        let currentScope = scopeChain.pop();
        printScope(currentScope, node);
        scopeList.push(currentScope);
    }
}

function printScope(scope, node) {
    const declaredVars = scope.slice(1);
    const varsDisplay =
        declaredVars.length === 0 ? "NONE" : declaredVars.join(", ");
    if (node.type === "Program") {
        spprint(
            "printScope",
            `Variables declared in the global scope: ${varsDisplay}`
        );
    } else {
        if (node.id && node.id.name) {
            spprint(
                "printScope",
                `Variables declared in the function ${node.id.name}(): ${varsDisplay}`
            );
        } else {
            spprint(
                "printScope",
                `Variables declared in anonymous function: ${varsDisplay}`
            );
        }
    }
}

function createsNewScope(node) {
    return (
        node.type === "FunctionDeclaration" ||
        isAnonymizedFunction(node) ||
        node.type === "Program"
    );
}

function addInputsToStateManager(node, fxnName) {
    const params = isAnonymizedFunction(node) ? node.init.params : node.params;

    for (let param of params) {
        stateManager[`${fxnName}:${param.name}`] = null;
    }
}

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

function isAnonymizedFunction(node) {
    return (
        (node.type === "VariableDeclarator" &&
            node.init.type === "FunctionExpression") ||
        (node.type === "ExpressionStatement" &&
            node.expression === "AssignmentExpression" &&
            node.expression.right === "FunctionExpression")
    );
}
