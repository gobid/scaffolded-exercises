const fs = require("fs");
const path = require("path");

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

/** Find out the most recently run snippet (the latest in the array) to have been run that modifies
 * a DOM object.
 * DONE BELOW: INTERMEDIATE STEP TODO FIRST: find the most recenty run snippet that includes a DOM object */
let firstExercise = null;
let firstExerciseLoc = null;
let firstExerciseDomObj = null;
for (let s = allSnippets.length  - 1; s >= 0; s--) {
    for (let o = 0; o < domObjects.length; o++) {
        if (allSnippets[s].includes(domObjects[o])) {
            firstExercise = allSnippets[s];
            firstExerciseLoc = s;
            firstExerciseDomObj = domObjects[o];
            break;
        }
    }
    /** Need to break out of both for-loops once the first exercise is assigned */
    if (firstExercise !== null) {
        break;
    }
}
console.log(firstExercise)


/** input: string name of dom object, initializer code array.
 * Output: all setup code that touches the domObj in question
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

let firstExerciseInitCode = getInitializerCode(firstExerciseDomObj, initCode, callCounts);
console.log(firstExerciseInitCode);

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