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

/** @TODO : get this from the exercise data */
let domElems = ["$overlay", "$map", "$remove", "tile", "$image"];

const fileKey = "xkcd_src";
const scriptString = fs.readFileSync(path.resolve(__dirname, `./temp/updated_${fileKey}.js`)).toString();
const ast = recast.parse(scriptString, { range: true });
let scriptUpdates = [];

function secondInstrumentation() {
    traverseTree();
    let uniqueScriptUpdates = new Set(scriptUpdates);
    let finScriptUpdates = Array.from(uniqueScriptUpdates);
    /** sort in descending order so we are modifying the file from the end to the beginning so
     * we don't mess up the recorded locations for updates downstream */
    finScriptUpdates = finScriptUpdates.sort((a, b) => b["loc"] - a["loc"]);
    let sourceArr = scriptString.split("\n");
    for (let update of finScriptUpdates) {
        const locs = update["loc"].split(".");
        const line = locs[0];
        /* insert the update into the correct position */
        sourceArr.splice(line, 0, update["autoStr"]);
    }

    const areSameDomElems = function (prevNodeNameStr, prevNodeName, currNodeNameStr, currNodeName) {
        if (prevNodeName instanceof jQuery) {
            console.log(
                `${currNodeNameStr} same node as "${prevNodeNameStr}"?: `,
                (prevNodeName.length == currNodeName.length &&
                    currNodeName.length == currNodeName.filter(prevNodeName).length) ||
                    prevNodeName === undefined
            );
            /** else prevNodeName instanceof HTMLElement, not jQuery element */
        } else {
            console.log(
                `"${currNodeNameStr}" same node as "${prevNodeNameStr}"?: `,
                prevNodeName === currNodeName || prevNodeName === undefined
            );
        }
    };
    let finalScript = `const areSameDomElems = ${areSameDomElems.toString()}
        \n${sourceArr.join("\n")}`;

    fs.writeFileSync(`./temp/second_instrumentation_${fileKey}.js`, finalScript);
    fs.writeFileSync("./sites/xkcd/xkcd.com/1110/s/main2.js", finalScript);
}

function traverseTree() {
    estraverse.traverse(ast.program, {
        enter: enter
    });
}

function enter(node) {
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

module.exports = { secondInstrumentation };

// let updates = addScriptUpdates();
// fs.writeFileSync(`./temp/second_instrumentation_${fileKey}.js`, updates);
