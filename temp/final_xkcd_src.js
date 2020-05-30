/* autogen added */

let stateManager = {
    "Program:eventPos:e": null,
    "Program:Map:$container": null,
    "Program:Map:$overlay": null,
    "Program:Map:sign:x": null,
    "Program:Map:pow:x": null,
    "Program:Map:pow:y": null,
    "Program:Map:clamp:x": null,
    "Program:Map:clamp:min": null,
    "Program:Map:clamp:max": null,
    "Program:Map:offset": null,
    "Program:Map:padding_top": null,
    "Program:Map:size": null,
    "Program:Map:tilesize": null,
    "Program:Map:visible": null,
    "Program:Map:container_size": null,
    "Program:Map:scroll_delta": null,
    "Program:Map:$map": null,
    "Program:Map:map_size": null,
    "Program:Map:position": null,
    "Program:Map:centre": null,
    "Program:Map:update:centre_last": null,
    "Program:Map:update:centre": null,
    "Program:Map:update:tile_name:x": null,
    "Program:Map:update:tile_name:y": null,
    "Program:Map:update:$remove": null,
    "Program:Map:update:y": null,
    "Program:Map:update:x": null,
    "Program:Map:update:name": null,
    "Program:Map:update:tile": null,
    "Program:Map:update:$image": null,
    "Program:Map:drag:e": null,
    "Program:Map:drag:pos": null,
    "Program:Map:drag:undefined": null,
    "Program:Map:pos": null,
    "Program:map": null
};
const fxnCallCallback = (fnName, sourceCodeArr, sourceCodeMap) => (stackframes) => {
    const nodeLoc = sourceCodeMap[fnName];
    /** get all lines of the node */
    const nodeCodeLines = sourceCodeArr.slice(nodeLoc.start.line, nodeLoc.end.line + 1);
    /** get the specific characters of the node within the lines */
    nodeCodeLines[0].slice(nodeLoc.start.column);
    nodeCodeLines[length(nodeCodeLines) - 1].slice(0, nodeLoc.end.column + 1);
    const nodeCodeStr = nodeCodeLines.join("\n");
    console.log(fnName, " was called. Source code =", nodeCodeStr);
};
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
    eventPos: { start: { line: 1, column: 0, token: 0 }, end: { line: 9, column: 1, token: 46 } },
    "$container.css({": {
        start: { line: 11, column: 4, token: 52 },
        end: { line: 19, column: 7, token: 87 }
    },
    "$overlay.css({": { start: { line: 23, column: 4, token: 97 }, end: { line: 26, column: 7, token: 112 } },
    sign: { start: { line: 28, column: 4, token: 112 }, end: { line: 30, column: 5, token: 136 } },
    pow: { start: { line: 32, column: 4, token: 136 }, end: { line: 34, column: 5, token: 165 } },
    clamp: { start: { line: 36, column: 4, token: 165 }, end: { line: 38, column: 5, token: 193 } },
    "$map.css({": { start: { line: 71, column: 8, token: 417 }, end: { line: 74, column: 11, token: 438 } },
    '$map.find(".ground").css({': {
        start: { line: 59, column: 4, token: 355 },
        end: { line: 66, column: 7, token: 402 }
    },
    update: { start: { line: 70, column: 4, token: 412 }, end: { line: 123, column: 5, token: 751 } },
    tile_name: { start: { line: 79, column: 8, token: 473 }, end: { line: 83, column: 9, token: 531 } },
    $image: { start: { line: 108, column: 24, token: 695 }, end: { line: 114, column: 31, token: 733 } },
    "$(this).show();": {
        start: { line: 110, column: 32, token: 703 },
        end: { line: 110, column: 47, token: 712 }
    },
    "$(this).remove();": {
        start: { line: 113, column: 32, token: 721 },
        end: { line: 113, column: 49, token: 730 }
    },
    "$map.append($image);": {
        start: { line: 116, column: 24, token: 733 },
        end: { line: 116, column: 44, token: 740 }
    },
    "$remove.remove();": {
        start: { line: 121, column: 12, token: 743 },
        end: { line: 121, column: 29, token: 749 }
    },
    drag: { start: { line: 127, column: 4, token: 755 }, end: { line: 141, column: 5, token: 868 } },
    '$container.on("mousedown touchstart", function (e) {': {
        start: { line: 143, column: 4, token: 868 },
        end: { line: 152, column: 7, token: 954 }
    },
    '$(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);': {
        start: { line: 150, column: 8, token: 925 },
        end: { line: 150, column: 80, token: 945 }
    },
    "e.preventDefault();": {
        start: { line: 151, column: 8, token: 945 },
        end: { line: 151, column: 27, token: 951 }
    },
    '$(document).on("mouseup touchend", function (e) {': {
        start: { line: 154, column: 4, token: 954 },
        end: { line: 157, column: 7, token: 987 }
    },
    '$(document).off("mousemove touchmove", drag);': {
        start: { line: 155, column: 8, token: 968 },
        end: { line: 155, column: 53, token: 980 }
    }
};
/* end autogen added */

/* autogen added */

eventPos = StackTrace.instrument(eventPos, fxnCallCallback(`eventPos`, sourceCodeArr, sourceCodeMap));
/* end autogen added */

function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];

        /* autogen added */

        stateManager["Program:eventPos:e"] = e;
        /* end autogen added */
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
    }, fxnCallCallback(`$container.css({`, sourceCodeArr, sourceCodeMap))();
    /* end autogen added */

    var $overlay = $container.children("img");

    /* autogen added */

    stateManager["Program:Map:$overlay"] = $overlay;
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
        $overlay.css({
            background: "transparent",
            position: "relative"
        });
    }, fxnCallCallback(`$overlay.css({`, sourceCodeArr, sourceCodeMap))();
    /* end autogen added */

    /* autogen added */

    sign = StackTrace.instrument(sign, fxnCallCallback(`sign`, sourceCodeArr, sourceCodeMap));
    /* end autogen added */

    function sign(x) {
        return x > 0 ? +1 : x < 0 ? -1 : 0;
    }

    /* autogen added */

    pow = StackTrace.instrument(pow, fxnCallCallback(`pow`, sourceCodeArr, sourceCodeMap));
    /* end autogen added */

    function pow(x, y) {
        return Math.pow(Math.abs(x), y) * sign(x);
    }

    /* autogen added */

    clamp = StackTrace.instrument(clamp, fxnCallCallback(`clamp`, sourceCodeArr, sourceCodeMap));
    /* end autogen added */

    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

    var offset = $container.offset();

    /* autogen added */

    stateManager["Program:Map:offset"] = offset;
    /* end autogen added */

    var padding_top = 200;

    /* autogen added */

    stateManager["Program:Map:padding_top"] = padding_top;
    /* end autogen added */

    var size = [14, 48, 25, 33];

    /* autogen added */

    stateManager["Program:Map:size"] = size;
    /* end autogen added */

    var tilesize = 2048;

    /* autogen added */

    stateManager["Program:Map:tilesize"] = tilesize;
    /* end autogen added */

    var visible = [];

    /* autogen added */

    stateManager["Program:Map:visible"] = visible;
    /* end autogen added */

    var container_size = [$container.width(), $container.height()];

    /* autogen added */

    stateManager["Program:Map:container_size"] = container_size;
    /* end autogen added */

    var scroll_delta = null;

    /* autogen added */

    stateManager["Program:Map:scroll_delta"] = scroll_delta;
    /* end autogen added */

    var $map = $container.children(".map");

    /* autogen added */

    stateManager["Program:Map:$map"] = $map;
    /* end autogen added */

    var map_size = [(size[1] + size[3]) * tilesize, (size[0] + size[2]) * tilesize];

    /* autogen added */

    stateManager["Program:Map:map_size"] = map_size;
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
        $map.css({
            width: map_size[0],
            height: map_size[1],
            position: "absolute",
            zIndex: -1
        });
    }, fxnCallCallback(`$map.css({`, sourceCodeArr, sourceCodeMap))();
    /* end autogen added */

    var position = [-(size[3] + 0.03) * tilesize, -(size[0] - 0.55) * tilesize];

    /* autogen added */

    stateManager["Program:Map:position"] = position;
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
    }, fxnCallCallback(`$map.find(".ground").css({`, sourceCodeArr, sourceCodeMap))();
    /* end autogen added */

    var centre = [-1, 0];

    /* autogen added */

    stateManager["Program:Map:centre"] = centre;
    /* end autogen added */

    /* autogen added */

    update = StackTrace.instrument(update, fxnCallCallback(`update`, sourceCodeArr, sourceCodeMap));
    /* end autogen added */

    function update() {
        /* autogen added */

        StackTrace.instrument(() => {
            $map.css({
                left: position[0],
                top: position[1]
            });
        }, fxnCallCallback(`$map.css({`, sourceCodeArr, sourceCodeMap))();
        /* end autogen added */

        var centre_last = centre;

        /* autogen added */

        stateManager["Program:Map:update:centre_last"] = centre_last;
        /* end autogen added */

        centre = [Math.floor(-position[0] / tilesize), Math.floor(-position[1] / tilesize)];

        /* autogen added */

        stateManager["Program:Map:update:centre"] = centre;
        /* end autogen added */

        /* autogen added */

        tile_name = StackTrace.instrument(
            tile_name,
            fxnCallCallback(`tile_name`, sourceCodeArr, sourceCodeMap)
        );
        /* end autogen added */

        function tile_name(x, y) {
            x -= size[3];

            /* autogen added */

            stateManager["Program:Map:update:tile_name:x"] = x;
            /* end autogen added */

            y -= size[0];

            /* autogen added */

            stateManager["Program:Map:update:tile_name:y"] = y;
            /* end autogen added */

            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

        if (centre[0] != centre_last[0] || centre[1] != centre_last[1]) {
            var $remove = $map.children().not(".ground");

            /* autogen added */

            stateManager["Program:Map:update:$remove"] = $remove;
            /* end autogen added */

            for (var y = -1; y <= +1; y++) {
                /* autogen added */

                stateManager["Program:Map:update:y"] = y;
                /* end autogen added */

                for (var x = -1; x <= +1; x++) {
                    /* autogen added */

                    stateManager["Program:Map:update:x"] = x;
                    /* end autogen added */

                    var name = tile_name(centre[0] + x, centre[1] + y);

                    /* autogen added */

                    stateManager["Program:Map:update:name"] = name;
                    /* end autogen added */

                    var tile = $map.find(".tile" + name);

                    /* autogen added */

                    stateManager["Program:Map:update:tile"] = tile;
                    /* end autogen added */

                    if (tile.length) {
                        $remove = $remove.not(tile);

                        /* autogen added */

                        stateManager["Program:Map:update:$remove"] = $remove;
                        /* end autogen added */
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

                        /* autogen added */

                        stateManager["Program:Map:update:$image"] = $image;
                        /* end autogen added */

                        /* autogen added */

                        StackTrace.instrument(() => {
                            $image
                                .load(function () {
                                    /* autogen added */

                                    StackTrace.instrument(() => {
                                        $(this).show();
                                    }, fxnCallCallback(`$(this).show();`, sourceCodeArr, sourceCodeMap))();
                                    /* end autogen added */
                                })
                                .error(function () {
                                    /* autogen added */

                                    StackTrace.instrument(() => {
                                        $(this).remove();
                                    }, fxnCallCallback(`$(this).remove();`, sourceCodeArr, sourceCodeMap))();
                                    /* end autogen added */
                                });
                        }, fxnCallCallback(`$image`, sourceCodeArr, sourceCodeMap))();
                        /* end autogen added */

                        /* autogen added */

                        StackTrace.instrument(() => {
                            $map.append($image);
                        }, fxnCallCallback(`$map.append($image);`, sourceCodeArr, sourceCodeMap))();
                        /* end autogen added */
                    }
                }
            }

            /* autogen added */

            StackTrace.instrument(() => {
                $remove.remove();
            }, fxnCallCallback(`$remove.remove();`, sourceCodeArr, sourceCodeMap))();
            /* end autogen added */
        }
    }

    update();

    /* autogen added */

    drag = StackTrace.instrument(drag, fxnCallCallback(`drag`, sourceCodeArr, sourceCodeMap));
    /* end autogen added */

    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            /* autogen added */

            stateManager["Program:Map:drag:pos"] = pos;
            /* end autogen added */

            position[0] = Math.round(
                clamp(pos.pageX + scroll_delta[0], -(size[1] + size[3]) * tilesize + container_size[0], 0)
            );

            /* autogen added */

            stateManager["Program:Map:drag:position"] = position;
            /* end autogen added */

            position[1] = Math.round(
                clamp(pos.pageY + scroll_delta[1], -(size[0] + size[2]) * tilesize + container_size[1], 0)
            );

            /* autogen added */

            stateManager["Program:Map:drag:position"] = position;
            /* end autogen added */

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

            /* autogen added */

            stateManager["Program:Map:pos"] = pos;
            /* end autogen added */

            scroll_delta = [position[0] - pos.pageX, position[1] - pos.pageY];

            /* autogen added */

            stateManager["Program:Map:scroll_delta"] = scroll_delta;
            /* end autogen added */

            /* autogen added */

            StackTrace.instrument(() => {
                $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);

                /* autogen added */

                StackTrace.instrument(() => {},
                fxnCallCallback(`$(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);`, sourceCodeArr, sourceCodeMap))();
                /* end autogen added */
                e.preventDefault();
            }, fxnCallCallback(`e.preventDefault();`, sourceCodeArr, sourceCodeMap))();
            /* end autogen added */
        });
    }, fxnCallCallback(
        `$container.on("mousedown touchstart", function (e) {`,
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
            }, fxnCallCallback(`$(document).off("mousemove touchmove", drag);`, sourceCodeArr, sourceCodeMap))();
            /* end autogen added */
            scroll_delta = null;

            /* autogen added */

            stateManager["Program:Map:scroll_delta"] = scroll_delta;
            /* end autogen added */
        });
    }, fxnCallCallback(`$(document).on("mouseup touchend", function (e) {`, sourceCodeArr, sourceCodeMap))();
    /* end autogen added */
}

/* 50:72:6f:50:75:6b:65:20:69:73:20:61:77:65:73:6f:6d:65 */

$(function () {
    var map = new Map($("#comic"));

    /* autogen added */

    stateManager["Program:map"] = map;
    /* end autogen added */
});
