const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "xkcd/xkcd.com")));
app.use(express.static(path.join(__dirname, "xkcd/imgs.xkcd.com")));
app.use(express.static(path.join(__dirname, "xkcd")));
const PORT = 3000;

app.get("/", function (req, res) {
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
