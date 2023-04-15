const fs = require("fs");
const path = require("path");
const recast = require("recast");

/** load in data collected from instrumented code */
const timestampKey = "1681214183347";
/** load in data collected from second instrumentation */
const secondaryTimestampKey = "1681218909292";
const stateManager = require(path.resolve(__dirname, `./exercise-data/${timestampKey}/stateManager.json`));

/* collect relevant variables */
let variables = []
for (let sm_key in stateManager) {
    console.log("sm_key:", sm_key);
    let scope_parts = sm_key.split(":"); 
    variables.push(scope_parts[scope_parts.length-1]);
}
// console.log("variables:", variables);

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
        this.variables = [];
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

// console.log("modifiers:", modifiers);
// console.log("users:", users);

/** Split the runLog into an array since each code snippet is separated by the squiggly comments */
const allSnippets = runLogString.split("/*~~~~*/\n/*~~~~*/");
/** Find the DOM Content Loaded message. Anything before this could be initializer code */
let domContentLoadedAt = allSnippets.indexOf("\n/* DOM STATUS */\n/* DOM LOADED HERE! */\n");

// console.log("allSnippets:", allSnippets.length, "items");
// console.log("domContentLoadedAt:", domContentLoadedAt);

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
// console.log("stateManager:", stateManager);
// console.log(domObjects);

/** Generate exercise order */
let currExercise = getDomObjExercise();

while (currExercise !== null) {
    // console.log("currExercise", currExercise);
    exerciseOrder.push(currExercise);
    currExercise = getNextExercise(currExercise);
}
// console.log("exercise order: ", exerciseOrder);

/** Find out the most recently run snippet (the latest in the array) to have been run that modifies a DOM object. */
function getDomObjExercise(prevEx = null, exType = "modifier") {
    // console.log("in getDomObjExercise");
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
                // console.log("found a recent runlog snippet with a DOM element, ", currSnippetKey, currCodeTypeKey);
                if (arrToCheck.includes(currCodeTypeKey) && !visited[currSnippetKey]) {
                    exInfo.code = allSnippets[s];
                    exInfo.arrayLoc = s;
                    exInfo.domObj = domObjects[o];
                    let currElems = prevEx ? prevEx.otherElemsIncluded : [];
                    exInfo.otherElemsIncluded = findIncludedDomElems(allSnippets[s], currElems);
                    visited[currSnippetKey] = true;
                    // console.log("exInfo:", exInfo);
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
    if (prevEx.codeType === "initializer") { // depending on whether
        arrayStartLoc = prevEx.prevExArrayLoc - 1;
    } else {
        arrayStartLoc = prevEx.arrayLoc - 1;
    }
    // console.log("prevEx.prevExArrayLoc - 1", prevEx.prevExArrayLoc - 1);
    // console.log("prevEx.arrayLoc - 1", prevEx.arrayLoc - 1);
    // console.log("arrayStartLoc", arrayStartLoc);

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
                    // console.log("curr DOM exInfo:", exInfo);
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
                            exInfo.reason = "most recent time current (other) DOM obj was modified in run log";
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
        // console.log("other DOM exInfo:", otherModifierOptions[0]);
        return otherModifierOptions[0];
    }

    /** If we find no modifier nodes for any involved DOM objects, look for user nodes for
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
                    exInfo.code = allSnippets[c];
                    exInfo.arrayLoc = c;
                    exInfo.domObj = prevEx.domObj;
                    exInfo.reason = "most recent time current DOM obj was used in run log";
                    exInfo.codeType = "user";
                    // console.log("curr DOM user", exInfo);
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
                            exInfo.reason = "most recent time current (other) DOM obj was used in run log";
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
     * the next exercise is the user code that ran most recently
     */
    if (otherUserOptions.length) {
        otherUserOptions.sort((a, b) => a.arrayLoc > b.arrayLoc);
        // console.log("other DOM user", exInfo);
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
    // console.log("exInfo", exInfo);
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
    // console.log("newElemsIncluded:", newElemsIncluded);
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

/* Handle context and scope - variable dependencies */
var eio = exerciseOrder.length;
for (var ei = 0; ei < eio; ei++) {
    var ex = exerciseOrder[ei];
    // console.log("ex:", ex);
    // console.log("ex.code: ", ex.code);
    let vars_in_ex = [];
    var ex_asts = getASTs(ex.code);

    /* parse out variables */
    for (var ex_ast of ex_asts) {
        // console.log("ex_ast:", ex_ast);
        vars_to_add = varsInAST(ex_ast);
        for (let var_to_add of vars_to_add) {
            if (!vars_in_ex.includes(var_to_add)) {
                vars_in_ex.push(var_to_add);
            }
        }
    }
    // console.log("vars_in_ex", vars_in_ex);

    /* iterate through runlog and add exercises for code dealing with relevant vars */
    for (var var_in_ex of vars_in_ex) {
        // console.log("var_in_ex", var_in_ex);
        for (let e = allSnippets.length - 1; e > domContentLoadedAt; e--) {
            allSnippets_asts = getASTs(allSnippets[e]);
            for (var aS_asts of allSnippets_asts) {
                var aS_ast_vars = varsInAST(aS_asts);
                // console.log("aS_ast_vars:", aS_ast_vars);
                if (aS_ast_vars.includes(var_in_ex)) {
                    let currSnippetKey = parseSnippetKey(allSnippets[e]);
                    let currCodeTypeKey = parseCodeTypeKey(var_in_ex, currSnippetKey, true);
                    // console.log("currSnippetKey:", currSnippetKey);
                    if (!visited[currSnippetKey]) {
                        let exInfo = new ExerciseInfo(ex=null);
                        exInfo.code = [allSnippets[e]]; 
                        exInfo.arrayLoc = e;
                        exInfo.domObj = null;
                        exInfo.reason = `variable ${var_in_ex} and possibly others were defined, modified or used in this exercise, and it was introduced in previous exercise`;
                        exInfo.codeType = "precursor-variable-exercise";
                        exInfo.variables = Array.from(new Set(aS_ast_vars));
                        // console.log("exercise to add:", exInfo);
                        exerciseOrder.push(exInfo);
                        visited[currSnippetKey] = true;                    
                    }
                }
            }
        }
    }
}

function varsInAST(ex_ast) {
    vars_in_ast = [];
    if ("tokens" in ex_ast) {
        // console.log("ex_ast.tokens", ex_ast.tokens)
        for (var token of ex_ast.tokens) {
            // console.log("token", token);
            // console.log("variables", variables);
            if (token.type == "Identifier" && variables.includes(token.value)) {
                // console.log("token.value: ", token.value);
                vars_in_ast.push(token.value);
            }
        }
    }
    // console.log("vars_in_ast", vars_in_ast);
    return vars_in_ast;
}

function getASTs(code) {
    let codes_to_parse = [];

    /* sometimes the exercises' code can be an array of "codes" */
    // console.log("type of code", typeof code);
    if (typeof code == "string") {
        codes_to_parse.push(code);
    }
    else { 
        for (var code_to_parse of code){
            codes_to_parse.push(code_to_parse);
        }
    }
    // console.log("codes_to_parse:", codes_to_parse);

    /* sometimes the runlog includes wrong syntax with the last line being an end brace */
    ex_asts = [];
    for (var excode of codes_to_parse) {
        try {
            ex_asts.push(recast.parse(excode, { range: true }));
        }
        catch (err) { // 
            let code_arr = excode.split("\n");
            // console.log("code_arr:", code_arr);
            code_arr.pop(); // the ''
            code_arr.pop(); // the '\n'
            // console.log("code_arr:", code_arr);
            let fixed_code = code_arr.join("\n");
            // console.log("fixed_code:", fixed_code);
            // console.log("fixed_code.toString()", fixed_code.toString());
            ex_ast = recast.parse(fixed_code.toString(), { range: true });
            ex_asts.push(ex_ast);
        }
    }
    return ex_asts;
}

console.log("exerciseOrder:", exerciseOrder);