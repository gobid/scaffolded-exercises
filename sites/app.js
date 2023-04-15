const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "xkcd")));
app.use(express.static(path.join(__dirname, "xkcd/imgs.xkcd.com")));
app.use(express.static(path.join(__dirname, "mapstd")));
app.use(express.static(path.join(__dirname, "mapstd/MapsTD_files")));
app.use(express.static(path.join(__dirname, "xkcd-exercises")));
const PORT = 3000;

app.get("/", function (req, res) {
    res.set("Content-Type", "text/html");
    res.send(
        Buffer.from(
            "<p>XCKD home page at <a href='/xkcd.com/1110/index.html'>localhost:3000/xkcd.com/1110/index.html</a></p><p>MapsTD home page at <a href='/MapsTD.htm'>localhost:3000/MapsTD.htm</a></p>"
        )
    );
});

app.get("/xkcd-exercise", function(req, res) {
    res.set("Content-Type", "text/html");
    res.sendFile("xkcd-exercises/index.html", {root: __dirname });
});

function writeToFile(name, codeStr, filePath) {
    fs.appendFileSync(filePath, `/*~~~~*/\n/* ${name} */\n${codeStr}\n/*~~~~*/\n`, (err) => {
        if (err) {
            console.log("Error: ", err);
        } else {
            console.log("wahoo!");
        }
    });
}

app.post("/1110/log", function (req, res) {
    writeToFile(req.body.name, req.body.data, "./logs/runLog.js");
    res.send({ message: "wrote to file" });
});

app.post("/1110/codetypes", function (req, res) {
    // writeToFile(req.body.name, req.body.data, "./logs/codeTypes.txt");
    // res.send({ message: "wrote to codetypes file" });
    const fileName = `./exercise-data/codetypeinfo-${Date.now()}.json`;
    fs.writeFileSync(fileName, JSON.stringify(req.body.codeTypeInfo));
    res.send({ message: `data in file: ${fileName}` });
});

app.post("/1110/exercisedata", function (req, res) {
    const timestamp = Date.now();
    console.log("in exercisedata post");
    const dir = `./exercise-data/${timestamp}`;
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    fs.copyFileSync("./logs/runLog.js", `${dir}/runLog.js`);
    fs.writeFileSync(`${dir}/domObjInfo.json`, JSON.stringify(req.body.domObjInfo));
    fs.writeFileSync(`${dir}/stateManager.json`, JSON.stringify(req.body.stateManager));
    fs.writeFileSync(`${dir}/callCounts.json`, JSON.stringify(req.body.callCounts));

    res.send({ message: `data in directory: ${dir}` });
});

app.listen(PORT, function () {
    // clear out log file before new run
    fs.writeFileSync(`./logs/runLog.js`, "/*~~~~*/");
    console.log("Example app listening at http://localhost:" + "3000");
});
