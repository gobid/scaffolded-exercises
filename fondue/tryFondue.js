/*
To compile: 
$ ./node_modules/fondue/bin/fondue <filename>.js > <filename>.fondue.js
$ node <filename>.fondue.js
*/
const fs = require("fs");
const path = require("path");
const fondue = require("fondue");

const scriptString = fs
    .readFileSync(path.resolve(__dirname, "./../xkcd_src.js"))
    .toString();

require("fondue").instrument(scriptString);

var nodesHandle = __tracer.trackNodes();
__tracer.newNodes(nodesHandle).forEach(printNode);

function printNode(node) {
    if (node.type === "function") {
        console.log(
            "found a function: " +
                node.name +
                " at " +
                node.path +
                ":" +
                node.start.line +
                " with id " +
                node.id
        );
    }
}
