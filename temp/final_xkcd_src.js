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
const fxnCallCallback = (fnName) => (stackframes) => {
    console.log(fnName, " was called");
};
/* end autogen added */

/* autogen added */

eventPos = StackTrace.instrument(eventPos, fxnCallCallback("eventPos"));
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
    }, fxnCallCallback("$container.css"))();
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
    }, fxnCallCallback("$overlay.css"))();
    /* end autogen added */

    /* autogen added */

    sign = StackTrace.instrument(sign, fxnCallCallback("sign"));
    /* end autogen added */

    function sign(x) {
        return x > 0 ? +1 : x < 0 ? -1 : 0;
    }

    /* autogen added */

    pow = StackTrace.instrument(pow, fxnCallCallback("pow"));
    /* end autogen added */

    function pow(x, y) {
        return Math.pow(Math.abs(x), y) * sign(x);
    }

    /* autogen added */

    clamp = StackTrace.instrument(clamp, fxnCallCallback("clamp"));
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
    }, fxnCallCallback("$map.css"))();
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
    }, fxnCallCallback("$map.find"))();
    /* end autogen added */

    var centre = [-1, 0];

    /* autogen added */

    stateManager["Program:Map:centre"] = centre;
    /* end autogen added */

    /* autogen added */

    update = StackTrace.instrument(update, fxnCallCallback("update"));
    /* end autogen added */

    function update() {
        /* autogen added */

        StackTrace.instrument(() => {
            $map.css({
                left: position[0],
                top: position[1]
            });
        }, fxnCallCallback("$map.css"))();
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

        tile_name = StackTrace.instrument(tile_name, fxnCallCallback("tile_name"));
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
                                    }, fxnCallCallback("$"))();
                                    /* end autogen added */
                                })
                                .error(function () {
                                    /* autogen added */

                                    StackTrace.instrument(() => {
                                        $(this).remove();
                                    }, fxnCallCallback("$"))();
                                    /* end autogen added */
                                });
                        }, fxnCallCallback("$imag"))();
                        /* end autogen added */

                        /* autogen added */

                        StackTrace.instrument(() => {
                            $map.append($image);
                        }, fxnCallCallback("$map.append"))();
                        /* end autogen added */
                    }
                }
            }

            /* autogen added */

            StackTrace.instrument(() => {
                $remove.remove();
            }, fxnCallCallback("$remove.remove"))();
            /* end autogen added */
        }
    }

    update();

    /* autogen added */

    drag = StackTrace.instrument(drag, fxnCallCallback("drag"));
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

                StackTrace.instrument(() => {}, fxnCallCallback("$"))();
                /* end autogen added */
                e.preventDefault();
            }, fxnCallCallback("e.preventDefault"))();
            /* end autogen added */
        });
    }, fxnCallCallback("$container.on"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
        $(document).on("mouseup touchend", function (e) {
            /* autogen added */

            StackTrace.instrument(() => {
                $(document).off("mousemove touchmove", drag);
            }, fxnCallCallback("$"))();
            /* end autogen added */
            scroll_delta = null;

            /* autogen added */

            stateManager["Program:Map:scroll_delta"] = scroll_delta;
            /* end autogen added */
        });
    }, fxnCallCallback("$"))();
    /* end autogen added */
}

/* 50:72:6f:50:75:6b:65:20:69:73:20:61:77:65:73:6f:6d:65 */

$(function () {
    var map = new Map($("#comic"));

    /* autogen added */

    stateManager["Program:map"] = map;
    /* end autogen added */
});
