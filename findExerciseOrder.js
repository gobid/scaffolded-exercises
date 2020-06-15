const fs = require("fs");
const path = require("path");

/** Load in data collected from instrumented code */
const timestampKey = "1591811153191";
/** load in data collected from second instrumentation */
const secondaryTimestampKey = "1592253184657";
const stateManager = require(path.resolve(__dirname, `./exercise-data/${timestampKey}/stateManager.json`));
const callCounts = require(path.resolve(__dirname, `./exercise-data/${timestampKey}/callCounts.json`));
const runLogString = fs
    .readFileSync(path.resolve(__dirname, `./exercise-data/${timestampKey}/runLog.js`))
    .toString();
const codeTypes = require(path.resolve(
    __dirname,
    `./exercise-data/codetypeinfo-${secondaryTimestampKey}.json`
));

/** will be full of runLog keys with: true or false */
let visited = {};

/** just push exercises onto this */
let exerciseOrder = [];

/** Create an array of all code components that are modifiers/users */
let modifiers = [];
let users = [];
for (let c in codeTypes) {
    if (codeTypes[c] === true) {
        /** c looks like "currStatus_$overlay_21_21", so slice off currStatus */
        modifiers.push(c.slice(11));
    } else {
        users.push(c.slice(11));
    }
}

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
// let firstExerciseInitCode = getInitializerCode(firstExerciseInfo.domObj);
let secondExercise = getNextExercise(firstExerciseInfo);
console.log(secondExercise);
let thirdExercise = getNextExercise(secondExercise);
console.log("third exercise: ", thirdExercise);

/** Find out the most recently run snippet (the latest in the array) to have been run that modifies a DOM object. */
function getFirstExercise(snippets, domObjects) {
    let exerciseInfo = {};
    for (let s = snippets.length - 1; s >= 0; s--) {
        for (let o = 0; o < domObjects.length; o++) {
            if (snippets[s].includes(domObjects[o])) {
                /** snippets look like: 
                 * '\n' +
                    '/ * $map.css({:71:74 * /\n' +
                    '        $map.css({\n' +
                    '            left: position[0],\n' +
                    '            top: position[1]\n' +
                    '        });\n' +
                    '\n' 
                below we are extracting the start/end line numbers from the 
                value at the top of the snippet in block comments to compare its 
                unique key to the keys present in codeTypes (which are based on the 
                same source code line location data), which look like: "$remove_121_121"

                @TODO possible problem (figure out if this could actually ever happen since
                we are using the same location data to create both keys...) is that these 
                numbers have to be exact matches and they may not be.. so you basically 
                need to use the larger numbers of the two keys as bounding numbers to 
                search through instances with. 
                EX: if a key from the runLog code snippet was "$map.css({:70:75" and the 
                key from the codeType modifer array was "$map_71_74", this is still the
                correct element to be in the exercise. 
                */
                let currSnippetKey = parseSnippetKey(snippets[s]);
                let currCodeTypeKey = parseCodeTypeKey(domObjects[o], currSnippetKey, true);
                if (modifiers.includes(currCodeTypeKey)) {
                    exerciseInfo["code"] = snippets[s];
                    exerciseInfo["arrayLoc"] = s;
                    exerciseInfo["domObj"] = domObjects[o];
                    exerciseInfo["reason"] = "most recent DOM object modified in run log";
                    exerciseInfo["codeType"] = "modifier";
                    visited[currSnippetKey] = true;
                    return exerciseInfo;
                }
            }
        }
    }
}

function getNextExercise(prevEx) {
    let initCode = [];
    for (let obj of domObjects) {
        /** If a new dom object is introduced in the current exercise,
         * get that new object's init code
         * @TODO what if there are more than one new objects introduced
         */
        if (prevEx.code.includes(obj) && prevEx.domObj !== obj) {
            let newRefInit = getInitializerCode(obj);
            if (newRefInit !== null) {
                initCode.push(newRefInit);
            }
        }
    }
    if (initCode.length) {
        /** @TODO order by earlier one set up??? */
        return initCode;
    }

    let exInfo = {
        code: null,
        arrayLoc: null,
        prevExArrayLoc: prevEx.arrayLoc,
        domObj: prevEx.domObj,
        reason: null,
        codeType: null
    };
    let arrayStartLoc = null;
    if (prevEx.codeType === "initializer") {
        arrayStartLoc = prevEx.prevExArrayLoc - 1;
    } else {
        arrayStartLoc = prevEx.arrayLoc - 1;
    }

    for (let a = arrayStartLoc; a > domContentLoadedAt; a--) {
        if (allSnippets[a].includes(prevEx.domObj)) {
            let currSnippetKey = parseSnippetKey(allSnippets[a]);
            let currCodeTypeKey = parseCodeTypeKey(prevEx.domObj, currSnippetKey, true);
            if (!visited[currSnippetKey]) {
                if (modifiers.includes(currCodeTypeKey)) {
                    visited[currSnippetKey] = true;
                    exInfo["code"] = allSnippets[a];
                    exInfo["arrayLoc"] = a;
                    exInfo["reason"] = "most recent time current DOM obj was modified in run log";
                    exInfo["codeType"] = "modifier";
                    return exInfo;
                }
            }
            /** check if it's been visited, then whether it's a user or a modifier */
        }
    }

    /** If we find no modifer nodes, look for user nodes */
    for (let b = allSnippets.length; b > domContentLoadedAt; a--) {
        if (allSnippets[b].includes(prevEx.domObj)) {
            let currSnippetKey = parseSnippetKey(allSnippets[b]);
            let currCodeTypeKey = parseCodeTypeKey(prevEx.domObj, currSnippetKey, true);
            if (!visited[currSnippetKey]) {
                if (modifiers.includes(currCodeTypeKey)) {
                    visited[currSnippetKey] = true;
                    exInfo["code"] = snippets[b];
                    exInfo["arrayLoc"] = b;
                    exInfo["reason"] = "most recent time current DOM obj was used in run log";
                    exInfo["codeType"] = "user";
                    return exInfo;
                }
            }
        }
    }

    console.log("cant find next exercise.. look for next dom object");
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
function getInitializerCode(prevEx, domObj) {
    let exInfo = {
        code: [],
        arrayLoc: [],
        prevExArrayLoc: prevEx.arrayLoc,
        domObj: domObj,
        reason: `setup code for DOM object ${domObj}, which was included in previous exercise`,
        codeType: "initializer"
    };

    /** @TODO check if init code has already been visited. if yes or if there is no
     * init code for current dom object, return NULL.
     */
    for (let i = 0; i < initCode.length; i++) {
        if (initCode[i].includes(domObj)) {
            let currSnippetKey = parseSnippetKey(initCode[i]);
            if (!visited[currSnippetKey]) {
                if (callCounts[currSnippetKey] === 1) {
                    visited[currSnippetKey] = true;
                    exInfo.code.push(initCode[i]);
                    exInfo.arrayLoc.push(i);
                }
            }
        }
    }
    if (!exInfo.code.length) return null;
    else return exInfo;
}

/** in the runLog, code snippets are added with their associated key as a comment so that 
 * we can get the information we've stored about that code using the key. Example:
 *  '/* $map.append($image);:116:116 * / \n' 
                       $map.append($image);\n'
 * parseSnippetKey returns `$map.append($image);:116:116` when given that whole code snippet
  */
function parseSnippetKey(snippet) {
    const keyComment = snippet.trim().split("\n")[0];
    let key = keyComment.split("*")[1]; /** ['/', ' $map.append($image);:116:116 ', '/' ] */
    return key.trim();
}

function parseCodeTypeKey(domObj, snippet, isParsed) {
    if (!isParsed) {
        snippet = parseSnippetKey(snippet);
    }
    let splitSnippet = snippet.split(":");
    let start = splitSnippet[splitSnippet.length - 2];
    let end = splitSnippet[splitSnippet.length - 1];
    return `${domObj}_${start}_${end}`;
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
