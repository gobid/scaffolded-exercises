const fs = require("fs");
const path = require("path");

/** Load in data collected from instrumented code */
const timestampKey = "1671582723497";
/** load in data collected from second instrumentation */
const secondaryTimestampKey = "1671584153301";
const stateManager = require(path.resolve(__dirname, `./exercise-data/${timestampKey}/stateManager.json`));
const callCounts = require(path.resolve(__dirname, `./exercise-data/${timestampKey}/callCounts.json`));
const runLogString = fs
    .readFileSync(path.resolve(__dirname, `./exercise-data/${timestampKey}/runLog.js`))
    .toString();
const codeTypes = require(path.resolve(
    __dirname,
    `./exercise-data/codetypeinfo-${secondaryTimestampKey}.json`
));

class ExerciseInfo {
    constructor(prevEx = null) {
        this.code = "";
        this.arrayLoc = -1;
        this.prevExArrayLoc = prevEx ? prevEx.arrayLoc : null;
        this.domObj = "";
        this.reason = "";
        this.codeType = "";
        this.otherElemsIncluded = [];
    }
}

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
let domContentLoadedAt = allSnippets.indexOf("\n/* DOM STATUS */\n/* DOM LOADED HERE! */\n");

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

/** Generate exercise order */
let currExercise = getDomObjExercise();
while (currExercise !== null) {
    exerciseOrder.push(currExercise);
    currExercise = getNextExercise(currExercise);
}
console.log("exercise order: ", exerciseOrder);

/** Find out the most recently run snippet (the latest in the array) to have been run that modifies a DOM object. */
function getDomObjExercise(prevEx = null, exType = "modifier") {
    console.log("in getDomObjExercise");
    let exInfo = new ExerciseInfo();
    let arrToCheck = null;
    if (exType === "modifier") {
        exInfo.reason = "most recent DOM object modified in run log";
        exInfo.codeType = "modifier";
        arrToCheck = modifiers;
    } else { /** exercise type === user */
        exInfo.reason = "most recent DOM object used in run log";
        exInfo.codeType = "user";
        arrToCheck = users;
    }

    for (let s = allSnippets.length - 1; s >= 0; s--) {
        for (let o = 0; o < domObjects.length; o++) {
            if (allSnippets[s].includes(domObjects[o])) {
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
                let currSnippetKey = parseSnippetKey(allSnippets[s]);
                let currCodeTypeKey = parseCodeTypeKey(domObjects[o], currSnippetKey, true);
                if (arrToCheck.includes(currCodeTypeKey) && !visited[currSnippetKey]) {
                    exInfo.code = allSnippets[s];
                    exInfo.arrayLoc = s;
                    exInfo.domObj = domObjects[o];
                    let currElems = prevEx ? prevEx.otherElemsIncluded : [];
                    exInfo.otherElemsIncluded = findIncludedDomElems(allSnippets[s], currElems);
                    visited[currSnippetKey] = true;
                    return exInfo;
                }
            }
        }
    }
    /** if we never find another dom object exercise */
    return null;
}

function getNextExercise(prevEx) {
    console.log("in getNextExercise");
    /** If a new dom object is introduced in the current exercise,
     * get that new object's init code. If there is more than one new
     * object introduced, add all the initializers to the exercises
     */
    for (let elem of prevEx.otherElemsIncluded) {
        let newRefInit = getInitializerCode(prevEx, elem);
        if (newRefInit !== null) {
            exerciseOrder.push(newRefInit);
        }
    }

    let arrayStartLoc = null;
    if (prevEx.codeType === "initializer") {
        arrayStartLoc = prevEx.prevExArrayLoc - 1;
    } else {
        arrayStartLoc = prevEx.arrayLoc - 1;
    }

    /** Find any univisited modifying code of the current DOM object */
    for (let a = arrayStartLoc; a > domContentLoadedAt; a--) {
        if (allSnippets[a].includes(prevEx.domObj)) {
            let currSnippetKey = parseSnippetKey(allSnippets[a]);
            let currCodeTypeKey = parseCodeTypeKey(prevEx.domObj, currSnippetKey, true);
            if (!visited[currSnippetKey]) {
                if (modifiers.includes(currCodeTypeKey)) {
                    visited[currSnippetKey] = true;
                    let exInfo = new ExerciseInfo(prevEx);
                    exInfo.code = allSnippets[a];
                    exInfo.arrayLoc = a;
                    exInfo.domObj = prevEx.domObj;
                    exInfo.reason = "most recent time current DOM obj was modified in run log";
                    exInfo.codeType = "modifier";
                    exInfo.otherElemsIncluded = findIncludedDomElems(
                        allSnippets[a],
                        prevEx.otherElemsIncluded
                    );
                    return exInfo;
                }
            }
        }
    }

    /** Check for any modifying code of any other DOM objects included in previous exercises */
    let otherModifierOptions = [];
    if (prevEx.otherElemsIncluded.length) {
        for (let elem of prevEx.otherElemsIncluded) {
            /** Don't go looping through looking for a modifier again if there are none
             * left for the current DOM object
             */
            if (elem === prevEx.domObj) continue;

            for (let b = allSnippets.length - 1; b > domContentLoadedAt; b--) {
                if (allSnippets[b].includes(elem)) {
                    let currSnippetKey = parseSnippetKey(allSnippets[b]);
                    let currCodeTypeKey = parseCodeTypeKey(elem, currSnippetKey, true);
                    if (!visited[currSnippetKey]) {
                        if (modifiers.includes(currCodeTypeKey)) {
                            visited[currSnippetKey] = true;
                            let exInfo = new ExerciseInfo(prevEx);
                            exInfo.code = allSnippets[b];
                            exInfo.arrayLoc = b;
                            exInfo.domObj = elem;
                            exInfo.reason = "most recent time current DOM obj was modified in run log";
                            exInfo.codeType = "modifier";
                            exInfo.otherElemsIncluded = findIncludedDomElems(
                                allSnippets[b],
                                prevEx.otherElemsIncluded
                            );
                            otherModifierOptions.push(exInfo);
                        }
                    }
                }
            }
        }
    }
    /** if there are DOM objects introduced in previous exercises that have been modified,
     * the next exercise is the  modifier code that ran most recently
     */
    if (otherModifierOptions.length) {
        otherModifierOptions.sort((a, b) => a.arrayLoc > b.arrayLoc);
        return otherModifierOptions[0];
    }

    /** If we find no modifer nodes for any involved DOM objects, look for user nodes for
     * the current DOM object.
     */
    for (let c = allSnippets.length - 1; c > domContentLoadedAt; c--) {
        if (allSnippets[c].includes(prevEx.domObj)) {
            let currSnippetKey = parseSnippetKey(allSnippets[c]);
            let currCodeTypeKey = parseCodeTypeKey(prevEx.domObj, currSnippetKey, true);
            if (!visited[currSnippetKey]) {
                if (users.includes(currCodeTypeKey)) {
                    visited[currSnippetKey] = true;
                    let exInfo = new ExerciseInfo(prevEx);
                    exInfo.code = snippets[c];
                    exInfo.arrayLoc = c;
                    exInfo.domObj = prevEx.domObj;
                    exInfo.reason = "most recent time current DOM obj was used in run log";
                    exInfo.codeType = "user";
                    return exInfo;
                }
            }
        }
    }

    /** If we find no modifer nodes for any involved DOM objects, and no user node for the
     * current DOM object, look for user nodes for other involved DOM objects.
     */
    let otherUserOptions = [];
    if (prevEx.otherElemsIncluded.length) {
        for (let elem of prevEx.otherElemsIncluded) {
            /** Don't go looping through looking for user code again if there are none
             * left for the current DOM object
             */
            if (elem === prevEx.domObj) continue;

            for (let d = allSnippets.length - 1; d > domContentLoadedAt; d--) {
                if (allSnippets[d].includes(elem)) {
                    let currSnippetKey = parseSnippetKey(allSnippets[d]);
                    let currCodeTypeKey = parseCodeTypeKey(elem, currSnippetKey, true);
                    if (!visited[currSnippetKey]) {
                        if (users.includes(currCodeTypeKey)) {
                            visited[currSnippetKey] = true;
                            let exInfo = new ExerciseInfo(prevEx);
                            exInfo.code = allSnippets[d];
                            exInfo.arrayLoc = d;
                            exInfo.domObj = elem;
                            exInfo.reason = "most recent time current DOM obj was used in run log";
                            exInfo.codeType = "user";
                            exInfo.otherElemsIncluded = findIncludedDomElems(
                                allSnippets[d],
                                prevEx.otherElemsIncluded
                            );
                            otherUserOptions.push(exInfo);
                        }
                    }
                }
            }
        }
    }
    /** if there are DOM objects introduced in previous exercises that have been used,
     * the next exercise is the  user code that ran most recently
     */
    if (otherUserOptions.length) {
        otherUserOptions.sort((a, b) => a.arrayLoc > b.arrayLoc);
        return otherUserOptions[0];
    }
    
    let newDomObjEx = getDomObjExercise(prevEx, "modifier");
    if (newDomObjEx) {
        return newDomObjEx;
    } else {
        newDomObjEx = getDomObjExercise(prevEx, "user");
        if (newDomObjEx) {
            return newDomObjEx;
        }
    }

    /** Fallthrough if all exercises have been found / visisted */
    console.log("cant find next exercise.");
    return null;
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
    console.log("in getInitializerCode");
    let exInfo = new ExerciseInfo(prevEx);
    exInfo.code = []; /** show all initializer code for an elem in the same exercise */
    exInfo.arrayLoc = [];
    exInfo.domObj = domObj;
    exInfo.reason = `setup code for DOM object ${domObj}, which was included in previous exercise`;
    exInfo.codeType = "initializer";

    for (let i = 0; i < domContentLoadedAt; i++) {
        if (allSnippets[i].includes(domObj)) {
            let currSnippetKey = parseSnippetKey(allSnippets[i]);
            if (!visited[currSnippetKey] && callCounts[currSnippetKey] === 1) {
                visited[currSnippetKey] = true;
                exInfo.code.push(allSnippets[i]);
                exInfo.arrayLoc.push(i);
            }
        }
    }
    if (!exInfo.code.length) return null;
    else return exInfo;
}

/** Figure out if there are other DOM elements included in a new exercise and merge
 * the two lists
 */
function findIncludedDomElems(snippet, currElemsIncluded) {
    console.log("in findIncludedDomElems");
    let newElemsIncluded = [];
    for (let obj of domObjects) {
        if (snippet.includes(obj)) {
            newElemsIncluded.push(obj);
        }
    }
    for (var i = 0; i < newElemsIncluded.length; i++) {
        if (currElemsIncluded.indexOf(newElemsIncluded[i]) === -1) {
            currElemsIncluded.push(newElemsIncluded[i]);
        }
    }
    return currElemsIncluded;
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
