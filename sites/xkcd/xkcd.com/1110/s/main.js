/* autogen added */

let verbosePrint = false;

let stateManager = {
    "Program:eventPos:e": [null, null],
    "Program:Map:$container": [null, null],
    "Program:Map:$overlay": [null, null],
    "Program:Map:sign:x": [null, null],
    "Program:Map:pow:x": [null, null],
    "Program:Map:pow:y": [null, null],
    "Program:Map:clamp:x": [null, null],
    "Program:Map:clamp:min": [null, null],
    "Program:Map:clamp:max": [null, null],
    "Program:Map:offset": [null, null],
    "Program:Map:padding_top": [null, null],
    "Program:Map:size": [null, null],
    "Program:Map:tilesize": [null, null],
    "Program:Map:visible": [null, null],
    "Program:Map:container_size": [null, null],
    "Program:Map:scroll_delta": [null, null],
    "Program:Map:$map": [null, null],
    "Program:Map:map_size": [null, null],
    "Program:Map:position": [null, null],
    "Program:Map:centre": [null, null],
    "Program:Map:update:centre_last": [null, null],
    "Program:Map:update:centre": [null, null],
    "Program:Map:update:tile_name:x": [null, null],
    "Program:Map:update:tile_name:y": [null, null],
    "Program:Map:update:$remove": [null, null],
    "Program:Map:update:y": [null, null],
    "Program:Map:update:x": [null, null],
    "Program:Map:update:name": [null, null],
    "Program:Map:update:tile": [null, null],
    "Program:Map:update:$image": [null, null],
    "Program:Map:drag:e": [null, null],
    "Program:Map:drag:pos": [null, null],
    "Program:Map:drag:undefined": [null, null],
    "Program:Map:pos": [null, null],
    "Program:map": [null, null]
};

let domObjects = [];

const updateStateManager = function (key, node) {
    if (stateManager[key]) {
        stateManager[key][1] = node;
    } else {
        let scopeOptions = key.split(":");
        let s = scopeOptions.length - 2;
        let currKey = key;
        while (stateManager[currKey] === undefined && s >= 0) {
            scopeOptions.splice(s, 1);
            currKey = scopeOptions.join(":");
            s--;
        }
        if (stateManager[currKey]) {
            stateManager[currKey][1] = node;
        } else {
            /** if the variable wasn't previously declared but the developer didn't put
             * a variable declarator keyword in front of it (var, let, const), add the new
             * variable to the stateManager. This shouldn't happen because an error like this
             * should have been fixed in the linting process */
            console.log(`ERROR: New variable declaration ${key} without keyword.`);
            stateManager[key] = [null, node];
        }
    }
};

let callCounts = {};

const fxnCallCallback = (fnName, sourceCodeArr, sourceCodeMap) => (stackframes) => {
    if (callCounts[fnName] === undefined) {
        callCounts[fnName] = 1;
    } else {
        callCounts[fnName] += 1;
    }
    const nodeLoc = sourceCodeMap[fnName];
    /** get all lines of the node */
    const nodeCodeLines = sourceCodeArr.slice(nodeLoc.start.line - 1, nodeLoc.end.line + 1);
    /** get the specific characters of the node within the lines */
    nodeCodeLines[0].slice(nodeLoc.start.column);
    nodeCodeLines[nodeCodeLines.length - 1].slice(0, nodeLoc.end.column + 1);
    const nodeCodeStr = nodeCodeLines.join("\n");
    if (verbosePrint) {
        console.log(fnName, " was called. Source code =", nodeCodeStr);
    }
    fetch("/1110/log", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ data: nodeCodeStr, name: fnName })
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
};

const makeId = function (len) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var charactersLen = characters.length;
    for (var i = 0; i < len; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLen));
    }
    return result;
};

/* TODO - maybe take out if can use same fxn in observers.js */

const postLogInfo2 = function (name, data) {
    fetch("/1110/log", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: name, data: data })
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
};
let domObjInfo = {};

const postDomObjInfo = function (id, name, data) {
    domObjInfo[id] = { name: name, data: data };
};
document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        postLogInfo2("DOM STATUS", "/* DOM LOADED HERE! */");
    }
};
document.getElementById("readytolearnbtn").addEventListener("click", () => {
    fetch("/1110/exercisedata", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ callCounts: callCounts, stateManager: stateManager, domObjInfo: domObjInfo })
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.getElementById("readytolearnbtn").innerText =
                "Scaffolded Exercises: Play with the page one more time then click here";
            $("#mainjs").replaceWith('<script id="mainjs" src="./s/main2.js"></script>');
        });
});

const sourceCode = `function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
}
function Map($container) {
    $container.css({
        "z-index": 1,
        overflow: "hidden",
        width: "740px",
        height: "694px",
        margin: "0px auto 0",
        background: "#fff",
        position: "relative"
    });

    var $overlay = $container.children("img");

    $overlay.css({
        background: "transparent",
        position: "relative"
    });

    function sign(x) {
        return x > 0 ? +1 : x < 0 ? -1 : 0;
    }

    function pow(x, y) {
        return Math.pow(Math.abs(x), y) * sign(x);
    }

    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

    var offset = $container.offset();
    var padding_top = 200;
    var size = [14, 48, 25, 33];
    var tilesize = 2048;
    var visible = [];
    var container_size = [$container.width(), $container.height()];
    var scroll_delta = null;
    var $map = $container.children(".map");
    var map_size = [(size[1] + size[3]) * tilesize, (size[0] + size[2]) * tilesize];

    $map.css({
        width: map_size[0],
        height: map_size[1],
        position: "absolute",
        zIndex: -1
    });

    var position = [-(size[3] + 0.03) * tilesize, -(size[0] - 0.55) * tilesize];

    $map.find(".ground").css({
        top: size[0] * tilesize,
        height: size[2] * tilesize,
        position: "absolute",
        width: "100%",
        zIndex: -1,
        background: "#000"
    });

    var centre = [-1, 0];

    function update() {
        $map.css({
            left: position[0],
            top: position[1]
        });

        var centre_last = centre;
        centre = [Math.floor(-position[0] / tilesize), Math.floor(-position[1] / tilesize)];

        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

        if (centre[0] != centre_last[0] || centre[1] != centre_last[1]) {
            var $remove = $map.children().not(".ground");

            for (var y = -1; y <= +1; y++) {
                for (var x = -1; x <= +1; x++) {
                    var name = tile_name(centre[0] + x, centre[1] + y);
                    var tile = $map.find(".tile" + name);

                    if (tile.length) {
                        $remove = $remove.not(tile);
                    } else {
                        var $image = $(
                            '<img class="tile' +
                                name +
                                '" src="http://imgs.xkcd.com/clickdrag/' +
                                name +
                                '.png" style="top:' +
                                (centre[1] + y) * tilesize +
                                "px;left:" +
                                (centre[0] + x) * tilesize +
                                'px; z-index: -1; position: absolute;;" style="display:none" />'
                        );

                        $image
                            .load(function () {
                                $(this).show();
                            })
                            .error(function () {
                                $(this).remove();
                            });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

    update();

    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(
                clamp(pos.pageX + scroll_delta[0], -(size[1] + size[3]) * tilesize + container_size[0], 0)
            );

            position[1] = Math.round(
                clamp(pos.pageY + scroll_delta[1], -(size[0] + size[2]) * tilesize + container_size[1], 0)
            );

            update();
        }
    }

    $container.on("mousedown touchstart", function (e) {
        if (e.button && e.button >= 2) {
            return;
        }

        var pos = eventPos(e);
        scroll_delta = [position[0] - pos.pageX, position[1] - pos.pageY];
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
    });

    $(document).on("mouseup touchend", function (e) {
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
    });
}

/* 50:72:6f:50:75:6b:65:20:69:73:20:61:77:65:73:6f:6d:65 */

$(function () {
    var map = new Map($("#comic"));
});
`;

const sourceCodeArr = sourceCode.split("\n");

const sourceCodeMap = {
    "eventPos:1:9": { start: { line: 1, column: 0, token: 0 }, end: { line: 9, column: 1, token: 46 } },
    "$container.css({:11:19": {
        start: { line: 11, column: 4, token: 52 },
        end: { line: 19, column: 7, token: 87 }
    },
    "rhs-method-$overlay:21:21": {
        start: { line: 21, column: 8, token: 88 },
        end: { line: 21, column: 45, token: 96 }
    },
    "$overlay.css({:23:26": {
        start: { line: 23, column: 4, token: 97 },
        end: { line: 26, column: 7, token: 112 }
    },
    "sign:28:30": { start: { line: 28, column: 4, token: 112 }, end: { line: 30, column: 5, token: 136 } },
    "pow:32:34": { start: { line: 32, column: 4, token: 136 }, end: { line: 34, column: 5, token: 165 } },
    "clamp:36:38": { start: { line: 36, column: 4, token: 165 }, end: { line: 38, column: 5, token: 193 } },
    "rhs-method-offset:40:40": {
        start: { line: 40, column: 8, token: 194 },
        end: { line: 40, column: 36, token: 201 }
    },
    "rhs-method-$map:47:47": {
        start: { line: 47, column: 8, token: 254 },
        end: { line: 47, column: 42, token: 262 }
    },
    "$map.css({:50:55": {
        start: { line: 50, column: 4, token: 296 },
        end: { line: 55, column: 7, token: 326 }
    },
    '$map.find(".ground").css({:59:66': {
        start: { line: 59, column: 4, token: 355 },
        end: { line: 66, column: 7, token: 402 }
    },
    "update:70:123": {
        start: { line: 70, column: 4, token: 412 },
        end: { line: 123, column: 5, token: 751 }
    },
    "$map.css({:71:74": {
        start: { line: 71, column: 8, token: 417 },
        end: { line: 74, column: 11, token: 438 }
    },
    "tile_name:79:83": {
        start: { line: 79, column: 8, token: 473 },
        end: { line: 83, column: 9, token: 531 }
    },
    "rhs-method-$remove:86:86": {
        start: { line: 86, column: 16, token: 555 },
        end: { line: 86, column: 56, token: 567 }
    },
    "rhs-method-tile:91:91": {
        start: { line: 91, column: 24, token: 623 },
        end: { line: 91, column: 56, token: 633 }
    },
    "$image:108:114": {
        start: { line: 108, column: 24, token: 695 },
        end: { line: 114, column: 31, token: 733 }
    },
    "$(this).show();:110:110": {
        start: { line: 110, column: 32, token: 703 },
        end: { line: 110, column: 47, token: 712 }
    },
    "$(this).remove();:113:113": {
        start: { line: 113, column: 32, token: 721 },
        end: { line: 113, column: 49, token: 730 }
    },
    "$map.append($image);:116:116": {
        start: { line: 116, column: 24, token: 733 },
        end: { line: 116, column: 44, token: 740 }
    },
    "$remove.remove();:121:121": {
        start: { line: 121, column: 12, token: 743 },
        end: { line: 121, column: 29, token: 749 }
    },
    "drag:127:141": {
        start: { line: 127, column: 4, token: 755 },
        end: { line: 141, column: 5, token: 868 }
    },
    '$container.on("mousedown touchstart", function (e) {:143:152': {
        start: { line: 143, column: 4, token: 868 },
        end: { line: 152, column: 7, token: 954 }
    },
    '$(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:150:150': {
        start: { line: 150, column: 8, token: 925 },
        end: { line: 150, column: 80, token: 945 }
    },
    "e.preventDefault();:151:151": {
        start: { line: 151, column: 8, token: 945 },
        end: { line: 151, column: 27, token: 951 }
    },
    '$(document).on("mouseup touchend", function (e) {:154:157': {
        start: { line: 154, column: 4, token: 954 },
        end: { line: 157, column: 7, token: 987 }
    },
    '$(document).off("mousemove touchmove", drag);:155:155': {
        start: { line: 155, column: 8, token: 968 },
        end: { line: 155, column: 53, token: 980 }
    }
};
/* end autogen added */

/* autogen added */
eventPos = StackTrace.instrument(eventPos, fxnCallCallback(`eventPos:1:9`, sourceCodeArr, sourceCodeMap));
/* end autogen added */

function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
        /* autogen added */ updateStateManager("Program:eventPos:e", e); /* end autogen added */
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
}
function Map($container) {
    /* autogen added */

    StackTrace.instrument(() => {
        $container.css({
            "z-index": 1,
            overflow: "hidden",
            width: "740px",
            height: "694px",
            margin: "0px auto 0",
            background: "#fff",
            position: "relative"
        });
    }, fxnCallCallback(`$container.css({:11:19`, sourceCodeArr, sourceCodeMap))();
    /* end autogen added */

    /* autogen added */
    $overlay = StackTrace.instrument(() => {
        $container.children("img");
    }, fxnCallCallback(`rhs-method-$overlay:21:21`, sourceCodeArr, sourceCodeMap))();
    /* end autogen added */

    var $overlay = $container.children("img");
    /* autogen added */ updateStateManager("Program:Map:$overlay", $overlay); /* end autogen added */

    /* autogen added */

    let isDomObj_$overlay = $overlay instanceof jQuery || $overlay instanceof HTMLElement;
    stateManager["Program:Map:$overlay"][0] = isDomObj_$overlay;
    if (isDomObj_$overlay) {
        if ($overlay instanceof jQuery) {
            for (let c = 0; c < $overlay.length; c++) {
                let child = $overlay[c];
                if (!child.id || child.id === "") {
                    child.id = makeId(7);
                    postDomObjInfo(child.id, "$overlay", child);
                    domObjects.push(child);
                }
            }
        } else {
            // html elem, not jQuery elem
            $overlay.id = makeId(7);
            postDomObjInfo($overlay.id, "$overlay", $overlay);
            domObjects.push($overlay);
        }
    }
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
        $overlay.css({
            background: "transparent",
            position: "relative"
        });
    }, fxnCallCallback(`$overlay.css({:23:26`, sourceCodeArr, sourceCodeMap))();
    /* end autogen added */

    /* autogen added */
    sign = StackTrace.instrument(sign, fxnCallCallback(`sign:28:30`, sourceCodeArr, sourceCodeMap));
    /* end autogen added */

    function sign(x) {
        return x > 0 ? +1 : x < 0 ? -1 : 0;
    }

    /* autogen added */
    pow = StackTrace.instrument(pow, fxnCallCallback(`pow:32:34`, sourceCodeArr, sourceCodeMap));
    /* end autogen added */

    function pow(x, y) {
        return Math.pow(Math.abs(x), y) * sign(x);
    }

    /* autogen added */
    clamp = StackTrace.instrument(clamp, fxnCallCallback(`clamp:36:38`, sourceCodeArr, sourceCodeMap));
    /* end autogen added */

    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

    /* autogen added */
    offset = StackTrace.instrument(() => {
        $container.offset();
    }, fxnCallCallback(`rhs-method-offset:40:40`, sourceCodeArr, sourceCodeMap))();
    /* end autogen added */

    var offset = $container.offset();
    /* autogen added */ updateStateManager("Program:Map:offset", offset); /* end autogen added */

    /* autogen added */

    let isDomObj_offset = offset instanceof jQuery || offset instanceof HTMLElement;
    stateManager["Program:Map:offset"][0] = isDomObj_offset;
    if (isDomObj_offset) {
        if (offset instanceof jQuery) {
            for (let c = 0; c < offset.length; c++) {
                let child = offset[c];
                if (!child.id || child.id === "") {
                    child.id = makeId(7);
                    postDomObjInfo(child.id, "offset", child);
                    domObjects.push(child);
                }
            }
        } else {
            // html elem, not jQuery elem
            offset.id = makeId(7);
            postDomObjInfo(offset.id, "offset", offset);
            domObjects.push(offset);
        }
    }
    /* end autogen added */

    var padding_top = 200;
    /* autogen added */ updateStateManager("Program:Map:padding_top", padding_top); /* end autogen added */

    /* autogen added */

    let isDomObj_padding_top = padding_top instanceof jQuery || padding_top instanceof HTMLElement;
    stateManager["Program:Map:padding_top"][0] = isDomObj_padding_top;
    if (isDomObj_padding_top) {
        if (padding_top instanceof jQuery) {
            for (let c = 0; c < padding_top.length; c++) {
                let child = padding_top[c];
                if (!child.id || child.id === "") {
                    child.id = makeId(7);
                    postDomObjInfo(child.id, "padding_top", child);
                    domObjects.push(child);
                }
            }
        } else {
            // html elem, not jQuery elem
            padding_top.id = makeId(7);
            postDomObjInfo(padding_top.id, "padding_top", padding_top);
            domObjects.push(padding_top);
        }
    }
    /* end autogen added */

    var size = [14, 48, 25, 33];
    /* autogen added */ updateStateManager("Program:Map:size", size); /* end autogen added */

    /* autogen added */

    let isDomObj_size = size instanceof jQuery || size instanceof HTMLElement;
    stateManager["Program:Map:size"][0] = isDomObj_size;
    if (isDomObj_size) {
        if (size instanceof jQuery) {
            for (let c = 0; c < size.length; c++) {
                let child = size[c];
                if (!child.id || child.id === "") {
                    child.id = makeId(7);
                    postDomObjInfo(child.id, "size", child);
                    domObjects.push(child);
                }
            }
        } else {
            // html elem, not jQuery elem
            size.id = makeId(7);
            postDomObjInfo(size.id, "size", size);
            domObjects.push(size);
        }
    }
    /* end autogen added */

    var tilesize = 2048;
    /* autogen added */ updateStateManager("Program:Map:tilesize", tilesize); /* end autogen added */

    /* autogen added */

    let isDomObj_tilesize = tilesize instanceof jQuery || tilesize instanceof HTMLElement;
    stateManager["Program:Map:tilesize"][0] = isDomObj_tilesize;
    if (isDomObj_tilesize) {
        if (tilesize instanceof jQuery) {
            for (let c = 0; c < tilesize.length; c++) {
                let child = tilesize[c];
                if (!child.id || child.id === "") {
                    child.id = makeId(7);
                    postDomObjInfo(child.id, "tilesize", child);
                    domObjects.push(child);
                }
            }
        } else {
            // html elem, not jQuery elem
            tilesize.id = makeId(7);
            postDomObjInfo(tilesize.id, "tilesize", tilesize);
            domObjects.push(tilesize);
        }
    }
    /* end autogen added */

    var visible = [];
    /* autogen added */ updateStateManager("Program:Map:visible", visible); /* end autogen added */

    /* autogen added */

    let isDomObj_visible = visible instanceof jQuery || visible instanceof HTMLElement;
    stateManager["Program:Map:visible"][0] = isDomObj_visible;
    if (isDomObj_visible) {
        if (visible instanceof jQuery) {
            for (let c = 0; c < visible.length; c++) {
                let child = visible[c];
                if (!child.id || child.id === "") {
                    child.id = makeId(7);
                    postDomObjInfo(child.id, "visible", child);
                    domObjects.push(child);
                }
            }
        } else {
            // html elem, not jQuery elem
            visible.id = makeId(7);
            postDomObjInfo(visible.id, "visible", visible);
            domObjects.push(visible);
        }
    }
    /* end autogen added */

    var container_size = [$container.width(), $container.height()];
    /* autogen added */ updateStateManager(
        "Program:Map:container_size",
        container_size
    ); /* end autogen added */

    /* autogen added */

    let isDomObj_container_size = container_size instanceof jQuery || container_size instanceof HTMLElement;
    stateManager["Program:Map:container_size"][0] = isDomObj_container_size;
    if (isDomObj_container_size) {
        if (container_size instanceof jQuery) {
            for (let c = 0; c < container_size.length; c++) {
                let child = container_size[c];
                if (!child.id || child.id === "") {
                    child.id = makeId(7);
                    postDomObjInfo(child.id, "container_size", child);
                    domObjects.push(child);
                }
            }
        } else {
            // html elem, not jQuery elem
            container_size.id = makeId(7);
            postDomObjInfo(container_size.id, "container_size", container_size);
            domObjects.push(container_size);
        }
    }
    /* end autogen added */

    var scroll_delta = null;

    /* autogen added */
    $map = StackTrace.instrument(() => {
        $container.children(".map");
    }, fxnCallCallback(`rhs-method-$map:47:47`, sourceCodeArr, sourceCodeMap))();
    /* end autogen added */

    /* autogen added */ updateStateManager("Program:Map:scroll_delta", scroll_delta); /* end autogen added */

    /* autogen added */

    let isDomObj_scroll_delta = scroll_delta instanceof jQuery || scroll_delta instanceof HTMLElement;
    stateManager["Program:Map:scroll_delta"][0] = isDomObj_scroll_delta;
    if (isDomObj_scroll_delta) {
        if (scroll_delta instanceof jQuery) {
            for (let c = 0; c < scroll_delta.length; c++) {
                let child = scroll_delta[c];
                if (!child.id || child.id === "") {
                    child.id = makeId(7);
                    postDomObjInfo(child.id, "scroll_delta", child);
                    domObjects.push(child);
                }
            }
        } else {
            // html elem, not jQuery elem
            scroll_delta.id = makeId(7);
            postDomObjInfo(scroll_delta.id, "scroll_delta", scroll_delta);
            domObjects.push(scroll_delta);
        }
    }
    /* end autogen added */

    var $map = $container.children(".map");
    /* autogen added */ updateStateManager("Program:Map:$map", $map); /* end autogen added */

    /* autogen added */

    let isDomObj_$map = $map instanceof jQuery || $map instanceof HTMLElement;
    stateManager["Program:Map:$map"][0] = isDomObj_$map;
    if (isDomObj_$map) {
        if ($map instanceof jQuery) {
            for (let c = 0; c < $map.length; c++) {
                let child = $map[c];
                if (!child.id || child.id === "") {
                    child.id = makeId(7);
                    postDomObjInfo(child.id, "$map", child);
                    domObjects.push(child);
                }
            }
        } else {
            // html elem, not jQuery elem
            $map.id = makeId(7);
            postDomObjInfo($map.id, "$map", $map);
            domObjects.push($map);
        }
    }
    /* end autogen added */

    var map_size = [(size[1] + size[3]) * tilesize, (size[0] + size[2]) * tilesize];
    /* autogen added */ updateStateManager("Program:Map:map_size", map_size); /* end autogen added */

    /* autogen added */

    let isDomObj_map_size = map_size instanceof jQuery || map_size instanceof HTMLElement;
    stateManager["Program:Map:map_size"][0] = isDomObj_map_size;
    if (isDomObj_map_size) {
        if (map_size instanceof jQuery) {
            for (let c = 0; c < map_size.length; c++) {
                let child = map_size[c];
                if (!child.id || child.id === "") {
                    child.id = makeId(7);
                    postDomObjInfo(child.id, "map_size", child);
                    domObjects.push(child);
                }
            }
        } else {
            // html elem, not jQuery elem
            map_size.id = makeId(7);
            postDomObjInfo(map_size.id, "map_size", map_size);
            domObjects.push(map_size);
        }
    }
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
        $map.css({
            width: map_size[0],
            height: map_size[1],
            position: "absolute",
            zIndex: -1
        });
    }, fxnCallCallback(`$map.css({:50:55`, sourceCodeArr, sourceCodeMap))();
    /* end autogen added */

    var position = [-(size[3] + 0.03) * tilesize, -(size[0] - 0.55) * tilesize];
    /* autogen added */ updateStateManager("Program:Map:position", position); /* end autogen added */

    /* autogen added */

    let isDomObj_position = position instanceof jQuery || position instanceof HTMLElement;
    stateManager["Program:Map:position"][0] = isDomObj_position;
    if (isDomObj_position) {
        if (position instanceof jQuery) {
            for (let c = 0; c < position.length; c++) {
                let child = position[c];
                if (!child.id || child.id === "") {
                    child.id = makeId(7);
                    postDomObjInfo(child.id, "position", child);
                    domObjects.push(child);
                }
            }
        } else {
            // html elem, not jQuery elem
            position.id = makeId(7);
            postDomObjInfo(position.id, "position", position);
            domObjects.push(position);
        }
    }
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
        $map.find(".ground").css({
            top: size[0] * tilesize,
            height: size[2] * tilesize,
            position: "absolute",
            width: "100%",
            zIndex: -1,
            background: "#000"
        });
    }, fxnCallCallback(`$map.find(".ground").css({:59:66`, sourceCodeArr, sourceCodeMap))();
    /* end autogen added */

    var centre = [-1, 0];
    /* autogen added */ updateStateManager("Program:Map:centre", centre); /* end autogen added */

    /* autogen added */

    let isDomObj_centre = centre instanceof jQuery || centre instanceof HTMLElement;
    stateManager["Program:Map:centre"][0] = isDomObj_centre;
    if (isDomObj_centre) {
        if (centre instanceof jQuery) {
            for (let c = 0; c < centre.length; c++) {
                let child = centre[c];
                if (!child.id || child.id === "") {
                    child.id = makeId(7);
                    postDomObjInfo(child.id, "centre", child);
                    domObjects.push(child);
                }
            }
        } else {
            // html elem, not jQuery elem
            centre.id = makeId(7);
            postDomObjInfo(centre.id, "centre", centre);
            domObjects.push(centre);
        }
    }
    /* end autogen added */

    /* autogen added */
    update = StackTrace.instrument(update, fxnCallCallback(`update:70:123`, sourceCodeArr, sourceCodeMap));
    /* end autogen added */

    function update() {
        /* autogen added */

        StackTrace.instrument(() => {
            $map.css({
                left: position[0],
                top: position[1]
            });
        }, fxnCallCallback(`$map.css({:71:74`, sourceCodeArr, sourceCodeMap))();
        /* end autogen added */

        var centre_last = centre;
        /* autogen added */ updateStateManager(
            "Program:Map:update:centre_last",
            centre_last
        ); /* end autogen added */

        /* autogen added */

        let isDomObj_centre_last = centre_last instanceof jQuery || centre_last instanceof HTMLElement;
        stateManager["Program:Map:update:centre_last"][0] = isDomObj_centre_last;
        if (isDomObj_centre_last) {
            if (centre_last instanceof jQuery) {
                for (let c = 0; c < centre_last.length; c++) {
                    let child = centre_last[c];
                    if (!child.id || child.id === "") {
                        child.id = makeId(7);
                        postDomObjInfo(child.id, "centre_last", child);
                        domObjects.push(child);
                    }
                }
            } else {
                // html elem, not jQuery elem
                centre_last.id = makeId(7);
                postDomObjInfo(centre_last.id, "centre_last", centre_last);
                domObjects.push(centre_last);
            }
        }
        /* end autogen added */

        centre = [Math.floor(-position[0] / tilesize), Math.floor(-position[1] / tilesize)];
        /* autogen added */ updateStateManager("Program:Map:update:centre", centre); /* end autogen added */

        /* autogen added */
        tile_name = StackTrace.instrument(
            tile_name,
            fxnCallCallback(`tile_name:79:83`, sourceCodeArr, sourceCodeMap)
        );
        /* end autogen added */

        function tile_name(x, y) {
            x -= size[3];
            /* autogen added */ updateStateManager(
                "Program:Map:update:tile_name:x",
                x
            ); /* end autogen added */

            y -= size[0];
            /* autogen added */ updateStateManager(
                "Program:Map:update:tile_name:y",
                y
            ); /* end autogen added */

            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

        if (centre[0] != centre_last[0] || centre[1] != centre_last[1]) {
            /* autogen added */
            $remove = StackTrace.instrument(() => {
                $map.children().not(".ground");
            }, fxnCallCallback(`rhs-method-$remove:86:86`, sourceCodeArr, sourceCodeMap))();
            /* end autogen added */

            var $remove = $map.children().not(".ground");
            /* autogen added */ updateStateManager(
                "Program:Map:update:$remove",
                $remove
            ); /* end autogen added */

            /* autogen added */

            let isDomObj_$remove = $remove instanceof jQuery || $remove instanceof HTMLElement;
            stateManager["Program:Map:update:$remove"][0] = isDomObj_$remove;
            if (isDomObj_$remove) {
                if ($remove instanceof jQuery) {
                    for (let c = 0; c < $remove.length; c++) {
                        let child = $remove[c];
                        if (!child.id || child.id === "") {
                            child.id = makeId(7);
                            postDomObjInfo(child.id, "$remove", child);
                            domObjects.push(child);
                        }
                    }
                } else {
                    // html elem, not jQuery elem
                    $remove.id = makeId(7);
                    postDomObjInfo($remove.id, "$remove", $remove);
                    domObjects.push($remove);
                }
            }
            /* end autogen added */

            for (var y = -1; y <= +1; y++) {
                /* autogen added */ updateStateManager("Program:Map:update:y", y); /* end autogen added */

                /* autogen added */

                let isDomObj_y = y instanceof jQuery || y instanceof HTMLElement;
                stateManager["Program:Map:update:y"][0] = isDomObj_y;
                if (isDomObj_y) {
                    if (y instanceof jQuery) {
                        for (let c = 0; c < y.length; c++) {
                            let child = y[c];
                            if (!child.id || child.id === "") {
                                child.id = makeId(7);
                                postDomObjInfo(child.id, "y", child);
                                domObjects.push(child);
                            }
                        }
                    } else {
                        // html elem, not jQuery elem
                        y.id = makeId(7);
                        postDomObjInfo(y.id, "y", y);
                        domObjects.push(y);
                    }
                }
                /* end autogen added */

                for (var x = -1; x <= +1; x++) {
                    /* autogen added */ updateStateManager("Program:Map:update:x", x); /* end autogen added */

                    /* autogen added */

                    let isDomObj_x = x instanceof jQuery || x instanceof HTMLElement;
                    stateManager["Program:Map:update:x"][0] = isDomObj_x;
                    if (isDomObj_x) {
                        if (x instanceof jQuery) {
                            for (let c = 0; c < x.length; c++) {
                                let child = x[c];
                                if (!child.id || child.id === "") {
                                    child.id = makeId(7);
                                    postDomObjInfo(child.id, "x", child);
                                    domObjects.push(child);
                                }
                            }
                        } else {
                            // html elem, not jQuery elem
                            x.id = makeId(7);
                            postDomObjInfo(x.id, "x", x);
                            domObjects.push(x);
                        }
                    }
                    /* end autogen added */

                    var name = tile_name(centre[0] + x, centre[1] + y);

                    /* autogen added */
                    tile = StackTrace.instrument(() => {
                        $map.find(".tile" + name);
                    }, fxnCallCallback(`rhs-method-tile:91:91`, sourceCodeArr, sourceCodeMap))();
                    /* end autogen added */

                    /* autogen added */ updateStateManager(
                        "Program:Map:update:name",
                        name
                    ); /* end autogen added */

                    /* autogen added */

                    let isDomObj_name = name instanceof jQuery || name instanceof HTMLElement;
                    stateManager["Program:Map:update:name"][0] = isDomObj_name;
                    if (isDomObj_name) {
                        if (name instanceof jQuery) {
                            for (let c = 0; c < name.length; c++) {
                                let child = name[c];
                                if (!child.id || child.id === "") {
                                    child.id = makeId(7);
                                    postDomObjInfo(child.id, "name", child);
                                    domObjects.push(child);
                                }
                            }
                        } else {
                            // html elem, not jQuery elem
                            name.id = makeId(7);
                            postDomObjInfo(name.id, "name", name);
                            domObjects.push(name);
                        }
                    }
                    /* end autogen added */

                    var tile = $map.find(".tile" + name);
                    /* autogen added */ updateStateManager(
                        "Program:Map:update:tile",
                        tile
                    ); /* end autogen added */

                    /* autogen added */

                    let isDomObj_tile = tile instanceof jQuery || tile instanceof HTMLElement;
                    stateManager["Program:Map:update:tile"][0] = isDomObj_tile;
                    if (isDomObj_tile) {
                        if (tile instanceof jQuery) {
                            for (let c = 0; c < tile.length; c++) {
                                let child = tile[c];
                                if (!child.id || child.id === "") {
                                    child.id = makeId(7);
                                    postDomObjInfo(child.id, "tile", child);
                                    domObjects.push(child);
                                }
                            }
                        } else {
                            // html elem, not jQuery elem
                            tile.id = makeId(7);
                            postDomObjInfo(tile.id, "tile", tile);
                            domObjects.push(tile);
                        }
                    }
                    /* end autogen added */

                    if (tile.length) {
                        $remove = $remove.not(tile);
                        /* autogen added */ updateStateManager(
                            "Program:Map:update:$remove",
                            $remove
                        ); /* end autogen added */
                    } else {
                        var $image = $(
                            '<img class="tile' +
                                name +
                                '" src="http://imgs.xkcd.com/clickdrag/' +
                                name +
                                '.png" style="top:' +
                                (centre[1] + y) * tilesize +
                                "px;left:" +
                                (centre[0] + x) * tilesize +
                                'px; z-index: -1; position: absolute;;" style="display:none" />'
                        );
                        /* autogen added */ updateStateManager(
                            "Program:Map:update:$image",
                            $image
                        ); /* end autogen added */

                        /* autogen added */

                        let isDomObj_$image = $image instanceof jQuery || $image instanceof HTMLElement;
                        stateManager["Program:Map:update:$image"][0] = isDomObj_$image;
                        if (isDomObj_$image) {
                            if ($image instanceof jQuery) {
                                for (let c = 0; c < $image.length; c++) {
                                    let child = $image[c];
                                    if (!child.id || child.id === "") {
                                        child.id = makeId(7);
                                        postDomObjInfo(child.id, "$image", child);
                                        domObjects.push(child);
                                    }
                                }
                            } else {
                                // html elem, not jQuery elem
                                $image.id = makeId(7);
                                postDomObjInfo($image.id, "$image", $image);
                                domObjects.push($image);
                            }
                        }
                        /* end autogen added */

                        /* autogen added */

                        StackTrace.instrument(() => {
                            $image
                                .load(function () {
                                    /* autogen added */

                                    StackTrace.instrument(() => {
                                        $(this).show();
                                    }, fxnCallCallback(`$(this).show();:110:110`, sourceCodeArr, sourceCodeMap))();
                                    /* end autogen added */
                                })
                                .error(function () {
                                    /* autogen added */

                                    StackTrace.instrument(() => {
                                        $(this).remove();
                                    }, fxnCallCallback(`$(this).remove();:113:113`, sourceCodeArr, sourceCodeMap))();
                                    /* end autogen added */
                                });
                        }, fxnCallCallback(`$image:108:114`, sourceCodeArr, sourceCodeMap))();
                        /* end autogen added */

                        /* autogen added */

                        StackTrace.instrument(() => {
                            $map.append($image);
                        }, fxnCallCallback(`$map.append($image);:116:116`, sourceCodeArr, sourceCodeMap))();
                        /* end autogen added */
                    }
                }
            }

            /* autogen added */

            StackTrace.instrument(() => {
                $remove.remove();
            }, fxnCallCallback(`$remove.remove();:121:121`, sourceCodeArr, sourceCodeMap))();
            /* end autogen added */
        }
    }

    update();

    /* autogen added */
    drag = StackTrace.instrument(drag, fxnCallCallback(`drag:127:141`, sourceCodeArr, sourceCodeMap));
    /* end autogen added */

    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);
            /* autogen added */ updateStateManager("Program:Map:drag:pos", pos); /* end autogen added */

            /* autogen added */

            let isDomObj_pos = pos instanceof jQuery || pos instanceof HTMLElement;
            stateManager["Program:Map:drag:pos"][0] = isDomObj_pos;
            if (isDomObj_pos) {
                if (pos instanceof jQuery) {
                    for (let c = 0; c < pos.length; c++) {
                        let child = pos[c];
                        if (!child.id || child.id === "") {
                            child.id = makeId(7);
                            postDomObjInfo(child.id, "pos", child);
                            domObjects.push(child);
                        }
                    }
                } else {
                    // html elem, not jQuery elem
                    pos.id = makeId(7);
                    postDomObjInfo(pos.id, "pos", pos);
                    domObjects.push(pos);
                }
            }
            /* end autogen added */

            position[0] = Math.round(
                clamp(pos.pageX + scroll_delta[0], -(size[1] + size[3]) * tilesize + container_size[0], 0)
            );
            /* autogen added */ updateStateManager(
                "Program:Map:drag:position",
                position
            ); /* end autogen added */

            position[1] = Math.round(
                clamp(pos.pageY + scroll_delta[1], -(size[0] + size[2]) * tilesize + container_size[1], 0)
            );
            /* autogen added */ updateStateManager(
                "Program:Map:drag:position",
                position
            ); /* end autogen added */

            update();
        }
    }

    /* autogen added */

    StackTrace.instrument(() => {
        $container.on("mousedown touchstart", function (e) {
            if (e.button && e.button >= 2) {
                return;
            }

            var pos = eventPos(e);
            /* autogen added */ updateStateManager("Program:Map:pos", pos); /* end autogen added */

            /* autogen added */

            let isDomObj_pos = pos instanceof jQuery || pos instanceof HTMLElement;
            stateManager["Program:Map:pos"][0] = isDomObj_pos;
            if (isDomObj_pos) {
                if (pos instanceof jQuery) {
                    for (let c = 0; c < pos.length; c++) {
                        let child = pos[c];
                        if (!child.id || child.id === "") {
                            child.id = makeId(7);
                            postDomObjInfo(child.id, "pos", child);
                            domObjects.push(child);
                        }
                    }
                } else {
                    // html elem, not jQuery elem
                    pos.id = makeId(7);
                    postDomObjInfo(pos.id, "pos", pos);
                    domObjects.push(pos);
                }
            }
            /* end autogen added */

            scroll_delta = [position[0] - pos.pageX, position[1] - pos.pageY];
            /* autogen added */ updateStateManager(
                "Program:Map:scroll_delta",
                scroll_delta
            ); /* end autogen added */

            /* autogen added */

            StackTrace.instrument(() => {
                $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);

                /* autogen added */

                StackTrace.instrument(() => {},
                fxnCallCallback(`$(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:150:150`, sourceCodeArr, sourceCodeMap))();
                /* end autogen added */
                e.preventDefault();
            }, fxnCallCallback(`e.preventDefault();:151:151`, sourceCodeArr, sourceCodeMap))();
            /* end autogen added */
        });
    }, fxnCallCallback(
        `$container.on("mousedown touchstart", function (e) {:143:152`,
        sourceCodeArr,
        sourceCodeMap
    ))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
        $(document).on("mouseup touchend", function (e) {
            /* autogen added */

            StackTrace.instrument(() => {
                $(document).off("mousemove touchmove", drag);
            }, fxnCallCallback(`$(document).off("mousemove touchmove", drag);:155:155`, sourceCodeArr, sourceCodeMap))();
            /* end autogen added */
            scroll_delta = null;
            /* autogen added */ updateStateManager(
                "Program:Map:scroll_delta",
                scroll_delta
            ); /* end autogen added */
        });
    }, fxnCallCallback(
        `$(document).on("mouseup touchend", function (e) {:154:157`,
        sourceCodeArr,
        sourceCodeMap
    ))();
    /* end autogen added */
}

/* 50:72:6f:50:75:6b:65:20:69:73:20:61:77:65:73:6f:6d:65 */

$(function () {
    var map = new Map($("#comic"));
    /* autogen added */ updateStateManager("Program:map", map); /* end autogen added */

    /* autogen added */

    let isDomObj_map = map instanceof jQuery || map instanceof HTMLElement;
    stateManager["Program:map"][0] = isDomObj_map;
    if (isDomObj_map) {
        if (map instanceof jQuery) {
            for (let c = 0; c < map.length; c++) {
                let child = map[c];
                if (!child.id || child.id === "") {
                    child.id = makeId(7);
                    postDomObjInfo(child.id, "map", child);
                    domObjects.push(child);
                }
            }
        } else {
            // html elem, not jQuery elem
            map.id = makeId(7);
            postDomObjInfo(map.id, "map", map);
            domObjects.push(map);
        }
    }
    /* end autogen added */
});
