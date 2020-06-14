const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const { secondInstrumentation } = require("./../identifyCodeClassification.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "xkcd/xkcd.com")));
app.use(express.static(path.join(__dirname, "xkcd/imgs.xkcd.com")));
app.use(express.static(path.join(__dirname, "xkcd")));
app.use(express.static(path.join(__dirname, "mapstd")));
app.use(express.static(path.join(__dirname, "mapstd/MapsTD_files")));
const PORT = 3000;

app.get("/", function (req, res) {
    res.set("Content-Type", "text/html");
    res.send(
        Buffer.from(
            "<p>XCKD home page at <a href='/1110/index.html'>localhost:3000/1110/index.html</a></p><p>MapsTD home page at <a href='/MapsTD.htm'>localhost:3000/MapsTD.htm</a></p>"
        )
    );
});

function writeToFile(name, codeStr) {
    const timestamp = Date.now();
    /** If I want to write each function with a timestamp to its own file */
    // fs.writeFile(`./logs/${timestamp}.js`, str, () => console.log(`${timestamp} done`));
    /** If I want to write each function to the same log file */
    let codeSnippet = { time: timestamp, code: codeStr };
    fs.appendFileSync("./logs/runLog.js", `/*~~~~*/\n/* ${name} */\n${codeStr}\n/*~~~~*/\n`, (err) => {
        if (err) {
            console.log("Error: ", err);
        } else {
            console.log("wahoo!");
        }
    });
}

app.post("/1110/log", function (req, res) {
    writeToFile(req.body.name, req.body.data);
    res.send({ message: "wrote to file" });
});

app.post("/1110/exercisedata", function (req, res) {
    const timestamp = Date.now();
    const dir = `./exercise-data/${timestamp}`;
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    fs.copyFileSync("./logs/runLog.js", `${dir}/runLog.js`);
    /** Copy HTML file with IDs added to all DOM attributes. Will run
     * second instrumentation with this HTML.
     */
    fs.copyFileSync("./sites/xkcd/xkcd.com/1110/index.html", `${dir}/index.html`);
    fs.writeFileSync(`${dir}/domObjInfo.json`, JSON.stringify(req.body.domObjInfo));
    fs.writeFileSync(`${dir}/stateManager.json`, JSON.stringify(req.body.stateManager));
    fs.writeFileSync(`${dir}/callCounts.json`, JSON.stringify(req.body.callCounts));

    /** Run the new script and load in the new HTML */
    secondInstrumentation();

    res.send({ message: `data in directory: ${dir}` });
});

app.listen(PORT, function () {
    // clear out log file before new run
    fs.writeFileSync(`./logs/runLog.js`, "/*~~~~*/");
    console.log("Example app listening at http://localhost:" + "3000");
});
