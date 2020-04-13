const express = require("express");
const path = require("path");
const fondue = require("fondue");

const app = express();
app.use(express.static(path.join(__dirname, "xkcd/xkcd.com")));
app.use(express.static(path.join(__dirname, "xkcd/imgs.xkcd.com")));
app.use(express.static(path.join(__dirname, "xkcd")));
app.use(require("fondue-middleware")()); // // @TODO: 17 in fondue-middleware. Try to update
const PORT = 3000;

app.get("/", (req, res) => {
    res.set("Content-Type", "text/html");
    res.send(
        Buffer.from(
            "<p>home page at <a href='localhost:3000/1110/index.html'>localhost:3000/1110/index.html</a></p>"
        )
    );
});

// app.get("/", (req, res, next) => {
//     window.fondue = fondue;
//     console.log("res", res);

//     let sandbox = { __tracer: undefined, console: console, require: require };
//     let tracer = sandbox.__tracer;

//     let functions = {};
//     let nodesHandle = tracer.trackNodes();
//     tracer.newNodes(nodesHandle).forEach(function (n) {
//         if (n.type === "function") {
//             functions[n.name] = n;
//         }
//     });

//     let fooNode = functions["foo"];
//     console.log("foo started at", fooNode.start, "and ended at", fooNode.end);
// });

app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);
