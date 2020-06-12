const fs = require("fs");
const path = require("path");

/** Load in data collected from instrumented code */
const timestampKey = "1591811153191";
const stateManager = require(path.resolve(__dirname, `./exercise-data/${timestampKey}/stateManager.json`));
const callCounts = require(path.resolve(__dirname, `./exercise-data/${timestampKey}/callCounts.json`));
const runLogString = fs
    .readFileSync(path.resolve(__dirname, `./exercise-data/${timestampKey}/runLog.js`))
    .toString();

/** Split the runLog into an array since each code snippet is separated by the squiggly comments */
const allSnippets = runLogString.split("/*~~~~*/\n/*~~~~*/");
/** Find the DOM Content Loaded message. Anything before this could be initializer code */
let domContentLoadedAt = allSnippets.indexOf("\n/* undefined */\n/* DOM LOADED HERE! */\n");
let initCode = allSnippets.slice(0, domContentLoadedAt);
let runCode = allSnippets.slice(domContentLoadedAt + 1);

/** Get all the DOM objects from the stateManager */
let domObjects = [];
for (let key in stateManager) {
    if (stateManager[key][0] === true) {
        /* key looks like 'Program:Map:$overlay'. Need to get the last item, which is the
         * DOM object name */
        const domObjNameArr = key.split(":");
        const domObjName = domObjNameArr[domObjNameArr.length - 1];
        domObjects.push(domObjName);
    }
}

console.log(domObjects);

let firstExerciseInfo = getFirstExercise(allSnippets, domObjects);
console.log(firstExerciseInfo);
let firstExerciseInitCode = getInitializerCode(firstExerciseInfo.domObj, initCode, callCounts);
console.log(firstExerciseInitCode);

/** @TODO Find out the most recently run snippet (the latest in the array) to have been run that modifies
 * a DOM object.
 * @TODO how to know if something uses or modifies a DOM object?
 * DONE BELOW: find the most recenty run code snippet that includes a DOM object */
function getFirstExercise(snippets, domObjects) {
    let exerciseInfo = {};
    for (let s = snippets.length - 1; s >= 0; s--) {
        for (let o = 0; o < domObjects.length; o++) {
            if (snippets[s].includes(domObjects[o])) {
                exerciseInfo["code"] = snippets[s];
                exerciseInfo["arrayLoc"] = s;
                exerciseInfo["domObj"] = domObjects[o];
                return exerciseInfo;
            }
        }
    }
}

/** Input: string name of dom object, initializer code array.
 * Output: all setup code that touches the domObj in question as long
 * as it is only run once
 * @TODO run # may be a shaky metric to generalize because
 * what if you need to run the same setup code on different elements? For example, if image
 * loading onto the map only happened at the beginning of the site loading (but still loaded
 * nine images) the image loading setup code would still not be included. That feels like a
 * problem.
 */
function getInitializerCode(domObj, initCode, callCounts) {
    let currObjInitCode = [];
    for (let i = 0; i < initCode.length; i++) {
        if (initCode[i].includes(domObj)) {
            let codeKey = parseCodeKey(initCode[i]);
            if (callCounts[codeKey] === 1) {
                currObjInitCode.push(initCode[i]);
            }
        }
    }
    return currObjInitCode;
}

/** in the runLog, code snippets are added with their associated key as a comment so that 
 * we can get the information we've stored about that code using the key. Example:
 *  '/* $map.append($image);:116:116 * / \n' 
                       $map.append($image);\n'
 * parseCodeKey returns `$map.append($image);:116:116` when given that whole code snippet
  */
function parseCodeKey(snippet) {
    const keyComment = snippet.trim().split("\n")[0];
    let key = keyComment.split("*")[1]; /** ['/', ' $map.append($image);:116:116 ', '/' ] */
    return key.trim();
}

/** TODO MAYBE: Create an object whose keys are the same as the callCounts key and values is the
 * corresponding code snippets index in the array AND the code snippet itself. Example:
 * {
 *  "$container.css({:11:19": [
 *                              {arrLoc: 52, code: "... code str .."},
 *                              {arrLoc: 75, code: "... code str ..."}
 *                            ],
 *  ...
 *  }
 */
