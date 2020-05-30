/** trying to ID code by adding the id as a comment alongside each node using estraverse.replace */
const estraverse = require("estraverse");
const recast = require("recast");
const fs = require("fs");
const path = require("path");

const fileKey = "xkcd_src";
const scriptString = fs.readFileSync(path.resolve(__dirname, `./temp/updated_${fileKey}.js`)).toString();
const ast = recast.parse(scriptString, { range: true });

let counter = 0;
let treeWithIds = estraverse.replace(ast.program, {
    enter: function (node) {
        let nodeReplacer = copyNodeAndAddId(node, counter);
        counter++;
        return nodeReplacer;
    }
});

function copyNodeAndAddId(node, id) {
    /** idea: just add an ID identifier to every node's body. then can prune it when showing the orig code.  */
    console.log(typeof node);
    let nodeAsString = recast.print(node).code;
    node.body.push();
    console.log(id);
    return node;
}

console.log(treeWithIds);

/* trying to ID code by modifying esprima meta object .. doesn't stick
const recast = require("recast");
const b = recast.types.builders;
const fs = require("fs");
const esprima = require("esprima");

const fileKey = "xkcd_src";
const srcScriptString = fs.readFileSync(`./temp/${fileKey}.js`).toString();

function addIdsToNodeMetaInfo(source) {
    let counter = 1;
    esprima.parseScript(source, {}, function (node, meta) {
        meta.nodeId = counter;
        node.nodeId = counter;
        counter++;
    });
    fs.writeFileSync(`./temp/id_${fileKey}.js`, source);
}

addIdsToNodeMetaInfo(srcScriptString);

const idScriptString = fs.readFileSync(`./temp/id_${fileKey}.js`).toString();

function checkForIds(source) {
    esprima.parseScript(source, {}, function (node, meta) {
        console.log(meta);
    });
}

checkForIds(idScriptString); */
