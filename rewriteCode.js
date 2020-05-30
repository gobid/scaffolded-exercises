/*
    Makes the following modifications to source code before rewriting it to `updated_<orig_file_name>.js`:
        - deanonymizes anonymous functions with variable declarators
*/

const recast = require("recast");
const b = recast.types.builders;
const fs = require("fs");
const esprima = require("esprima");

const fileKey = "xkcd_src";
const scriptString = fs.readFileSync(`./temp/${fileKey}.js`).toString();

function deanonymizeFunctionExpressions(source) {
    let prevUpdated,
        updatedSrc = source;
    let isTraveralComplete = false;
    /** parseTreeAndUpdate makes one change at a time since it shifts around the locations/features
     * of different items in the source code, so need to call it iteratively until all changes are made.
     * Traversal is complete when the previous version of the code is the same as current version of the code;
     * i.e. when no more changes need to be made. */
    while (!isTraveralComplete) {
        prevUpdated = updatedSrc;
        updatedSrc = parseTreeAndUpdate(updatedSrc);
        isTraveralComplete = prevUpdated === updatedSrc;
    }
    return updatedSrc;
}

function parseTreeAndUpdate(source) {
    /* make one update then stop so that the next update is done on the newly updated tree. Inefficicent but consistent. */
    let updates = false;
    esprima.parseScript(source, {}, function (node, meta) {
        if (isAnonymizedFunction(node) && updates === false) {
            let startLoc = meta.start.offset;
            let endLoc = meta.end.offset;

            /* check to see if there is a variable declarator (var, let, const) and remove it if so */
            let possibleDeclaratorStartLoc = startLoc - 4 > 0 ? startLoc - 4 : 0;
            let possibleDeclarator = source.slice(possibleDeclaratorStartLoc, startLoc).trim();

            if (possibleDeclarator.includes("var") || possibleDeclarator.includes("let")) {
                startLoc = possibleDeclaratorStartLoc;
            } else {
                possibleDeclaratorStartLoc = startLoc - 6 > 0 ? startLoc - 6 : 0;
                possibleDeclarator = source.slice(possibleDeclaratorStartLoc, startLoc).trim();
                if (possibleDeclarator.includes("const")) {
                    startLoc = possibleDeclaratorStartLoc;
                }
            }

            const deanonymizedFunction = deanonymizeFunctionExpr(node);
            const deanonymizedFunctionStr = recast.print(deanonymizedFunction).code;
            /** replaces the anonymous function with the deanonymized function; this happens recursively
             * so the most up to date souce script is always modified
             */
            source = source.slice(0, startLoc) + deanonymizedFunctionStr + source.slice(endLoc);
            updates = true;
        }
        /* Source script example (pseudocode):
            function..
            function..
            variable..
            CURR NODE TO BE REPLACED
            variable...
            function...
        */
    });
    return source;
}

function isAnonymizedFunction(node) {
    return (
        (node.type === "VariableDeclarator" && node.init && node.init.type === "FunctionExpression") ||
        (node.init && node.init.type === "ArrowFunctionExpression") ||
        (node.type === "ExpressionStatement" &&
            node.expression === "AssignmentExpression" &&
            node.expression.right === "FunctionExpression")
    );
}
/** Some functions should be deanonymied, but some should stay anonymous. Example:
 * var foo = function() {
 *      ...
 * }
 * We want to turn ^this variable declaration with an anonymous function as the assignment
 * into a function declaration that looks like:
 * function foo() {
 *      ...
 * }
 *
 * However, we want to keep the following function how it is since it is not a named function:
 * (function() {
 *      ...
 * })
 */
function deanonymizeFunctionExpr(node) {
    const functionName = node.id.name ? node.id.name : "REAL_ANON_SOS";
    const newId = b.identifier(functionName);
    const newNode = b.functionDeclaration(newId, node.init.params, node.init.body);
    /** next three lines for debugging purposes only (to be able to see the deanonymized function printed) */
    const recastNode = recast.print(newNode).code;
    const recastNodeFunctionDeclaration = recastNode.split("\n")[0];
    console.log("deanonymizeFunctionExpr: function deanonymized! ", recastNodeFunctionDeclaration);
    return newNode;
}

/** calls the functions above in order to write the updated source code to a file */
let finalUpdate = deanonymizeFunctionExpressions(scriptString);
console.log("updated src");
console.log(finalUpdate);
fs.writeFileSync(`./temp/updated_${fileKey}.js`, finalUpdate);
