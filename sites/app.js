const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

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

let idKeyCounter = 1;
function addObserver(name, data) {
    let selector = null;
    let objId = name; // data[0].id;
    if (objId !== undefined && objId !== "") {
        selector = `document.getElementById(${objId})`;
    } else {
        console.log("ERROR: no ID on DOM element: ", data);
        return;
    }
    let observer = `
        const ${objId}_targetNode = document.getElementById("${objId}")
        const ${objId}_observer = new MutationObserver(callback);
        ${objId}_observer.observe(${objId}_targetNode, config);
    `;
    fs.appendFileSync("./sites/xkcd/xkcd.com/1110/s/observers.js", observer, (err) => {
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

app.post("/1110/dominfo", function (req, res) {
    addObserver(req.body.name, req.body.data);
    res.send({ message: "added observer" });
});

app.post("/1110/exercisedata", function (req, res) {
    const timestamp = Date.now();
    const dir = `./exercise-data/${timestamp}`;
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    // let runLog = fs.readFileSync("./logs/runLog.js", "utf8").split("~~~~\n\n~~~~");
    // const codeRun = runLog.map((r) => r.replace(/^\s+|\s+$/g, ""));
    fs.copyFileSync("./logs/runLog.js", `${dir}/runLog.js`);
    /** Copy HTML file with IDs added to all DOM attributes */
    fs.copyFileSync("./sites/xkcd/xkcd.com/1110/index.html", `${dir}/index.html`);
    fs.copyFileSync("./sites/xkcd/xkcd.com/1110/s/observers.js", `${dir}/observers.js`);
    fs.writeFileSync(`${dir}/stateManager.json`, JSON.stringify(req.body.stateManager));
    fs.writeFileSync(`${dir}/callCounts.json`, JSON.stringify(req.body.callCounts));

    res.send({ message: `data in directory: ${dir}` });
});

app.listen(PORT, function () {
    // clear out log file before new run
    fs.writeFileSync(`./logs/runLog.js`, "/*~~~~*/");
    fs.writeFileSync(
        `./sites/xkcd/xkcd.com/1110/s/observers.js`,
        `function postLogInfo(name, data) {
            fetch("/1110/log", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: name, data: data })
            })
            .then((response) => response.json())
            .then((data) => console.log(data));
            }
            const callback = function (mutationsList, observer) {
                for (let mutation of mutationsList) {
                    postLogInfo("FOUND MUTATION", mutation.type);
                }
            };
            const config = { attributes: true, childList: true, subtree: true };`
    );
    console.log("Example app listening at http://localhost:" + "3000");
});
