/** Reinstrument the code one more time to identify DOM modifiers vs.
 * DOM users.
 * After the first run, I know what all the DOM elements are + I have
 * their unique selectors. So the next run, any code that includes the
 * DOM element I want to compare the state of the DOM element before
 * and after that code runs.. This is risky for async code, but I think
 * it's actually fine for non-async code.
 */

const estraverse = require("estraverse");
const recast = require("recast");
const stringify = require("json-stringify-safe");
const fs = require("fs");
const path = require("path");

/** which exercise-data download to get information from */
const timestampKey = "1671582723497";
const stateManager = require(path.resolve(__dirname, `./exercise-data/${timestampKey}/stateManager.json`));
/** Get all the DOM objects from the downloaded exercise data */
let domElems = [];
for (let key in stateManager) {
    if (stateManager[key][0] === true) {
        /* key looks like 'Program:Map:$overlay'. Need to get the last item, which is the
         * DOM object name */
        const domObjNameArr = key.split(":");
        const domObjName = domObjNameArr[domObjNameArr.length - 1];
        domElems.push(domObjName);
    }
}

const fileKey = "xkcd_src";
const scriptString = fs.readFileSync(path.resolve(__dirname, `./temp/updated_${fileKey}.js`)).toString();
const ast = recast.parse(scriptString, { range: true });

let scriptUpdates = [];

function addScriptUpdates(source, scriptUpdates) {
    console.log("in addScriptUpdates");
    /* sort in descending order so we are modifying the file from the end to the beginning so we don't mess up the recorded locations for updates downstream */
    let uniqueScriptUpdates = new Set(scriptUpdates);
    let finScriptUpdates = Array.from(uniqueScriptUpdates);
    finScriptUpdates = finScriptUpdates.sort((a, b) => b["loc"] - a["loc"]);
    let sourceArr = source.split("\n");
    for (let update of finScriptUpdates) {
        const locs = update["loc"].split(".");
        const line = locs[0];
        /* insert the update into the correct position */
        sourceArr.splice(line, 0, update["autoStr"]);
    }

    const areSameDomElems = function (prevNodeNameStr, prevNodeName, currNodeNameStr, currNodeName) {
        console.log("in areSameDomElems");
        let areSame = false;
        if (prevNodeName instanceof jQuery) {
            areSame =
                prevNodeName.length == currNodeName.length &&
                currNodeName.length == currNodeName.filter(prevNodeName).length;
            console.log(`${currNodeNameStr} same node as "${prevNodeNameStr}"?: ${areSame}`);
            /** prevNodeName instanceof HTMLElement */
        } else {
            areSame = prevNodeName === currNodeName;
            console.log(`"${currNodeNameStr}" same node as "${prevNodeNameStr}"?: ${areSame}`);
        }
        /** If you want to write out log info to a file instead of an object
    fetch("/1110/codetypes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ data: areSame, name: currNodeNameStr })
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
    */
        if (codeTypes[currNodeNameStr] === undefined || codeTypes[currNodeNameStr] !== areSame) {
            codeTypes[currNodeNameStr] = areSame;
        }
    };

    return `
        let codeTypes = {};
        \nconst areSameDomElems = ${areSameDomElems.toString()}
        document.getElementById("readytolearnbtn").addEventListener("click", () => {
            fetch("/1110/codetypes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ codeTypeInfo: codeTypes })
            })
                .then((response) => response.json())
                .then((data) => console.log(data));
        });
        \n${sourceArr.join("\n")}`;
}

estraverse.traverse(ast.program, {
    enter: enter
});

function enter(node) {
    // console.log("in enter");
    if (isCorrectNodeType(node)) {
        let updateStartStr = "/* autogen added */";
        let updateEndStr = "/* autogen added */";

        let nodeStr = recast.print(node).code;
        const startLoc = node.loc.start;
        const endLoc = node.loc.end;

        /** Adding this to avoid adding an empty comment if no
         * DOM object is in the current code snippet
         */
        let foundElem = false;
        for (let elem of domElems) {
            if (nodeStr.includes(elem)) {
                if (elem === "tile") {
                    if (
                        !nodeStr.includes("(tile)") ||
                        !nodeStr.includes("tile.") ||
                        !nodeStr.includes(" tile ")
                    ) {
                        continue;
                    }
                }
                foundElem = true;
                let prevName = `prevStatus_${elem}_${startLoc.line}_${endLoc.line}`;
                let currName = `currStatus_${elem}_${startLoc.line}_${endLoc.line}`;
                updateStartStr += `\nlet ${prevName} = ${elem};`;
                updateEndStr += `\nlet ${currName} = ${elem};`;
                updateEndStr += `\nareSameDomElems("${prevName}", ${prevName}, "${currName}", ${currName})\n`;
            }
        }
        if (foundElem) {
            updateStartStr += "\n/* end autogen added */\n";
            updateEndStr += "\n/* end autogen added */\n";

            const startLocKey = `${startLoc["line"] - 1}.${startLoc["column"]}`;
            scriptUpdates.push({
                loc: startLocKey,
                autoStr: updateStartStr
            });

            const endLocKey = `${endLoc["line"]}.${endLoc["column"]}`;
            scriptUpdates.push({
                loc: endLocKey,
                autoStr: updateEndStr
            });
        }
    }
}

function isCorrectNodeType(node) {
    return (
        isLibraryMethodCall(node) ||
        isRHSMethod(node) ||
        // (node.type === "AssignmentExpression" ||
        isVariableUpdate(node)
    );
}

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

/** Check if the node creates a new scope */
function createsNewScope(node) {
    console.log("in createsNewScope");
    return (
        node.type === "FunctionDeclaration" ||
        isAnonymizedFunction(node) ||
        node.type === "Program" ||
        (node.type === "Property" && node.value.type === "FunctionExpression") /** class method */
    );
}

function isAnonymizedFunction(node) {
    return (
        (node.type === "VariableDeclarator" && node.init && node.init.type === "FunctionExpression") ||
        (node.type === "ExpressionStatement" &&
            node.expression === "AssignmentExpression" &&
            node.expression.right === "FunctionExpression")
    );
}

let updates = addScriptUpdates(scriptString, scriptUpdates);
fs.writeFileSync(`./temp/second_instrumentation_${fileKey}.js`, updates);
