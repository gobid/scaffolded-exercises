const fondue = require("fondue");
const vm = require("vm");
const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);

const scriptString = fs
    .readFileSync(path.resolve(__dirname, "./../xkcd_src.js"))
    .toString();
// var src = fondue.instrument("function foo(a) { return a * 2 }; foo(4)");
var src = fondue.instrument(scriptString);
var sandbox = {
    __tracer: undefined,
    console: console,
    require: require,
    $: $
};
var output = vm.runInNewContext(src, sandbox);
var tracer = sandbox.__tracer; // created by fondue when instrumented code is run
console.log("tracer", tracer);
