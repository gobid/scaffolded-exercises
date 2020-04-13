/** Using es5 syntax because it seems that Theseus (related to Fondue) can't parse es6 */

const express = require("express");
const path = require("path");
const fondue = require("fondue");

const app = express();
app.use(express.static(path.join(__dirname, "xkcd/xkcd.com")));
app.use(express.static(path.join(__dirname, "xkcd/imgs.xkcd.com")));
app.use(express.static(path.join(__dirname, "xkcd")));
const PORT = 3000;

app.get("/", function (req, res) {
    app.use(require("fondue-middleware")()); // // @TODO: 17 security issues in fondue-middleware. Try to update
    res.set("Content-Type", "text/html");
    res.send(
        Buffer.from(
            "<p>home page at <a href='localhost:3000/1110/index.html'>localhost:3000/1110/index.html</a></p>"
        )
    );
});

app.listen(PORT, function () {
    console.log("Example app listening at http://localhost:" + "3000");
});
