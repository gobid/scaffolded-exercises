const areSameDomElems = function (prevNodeNameStr, prevNodeName, currNodeNameStr, currNodeName) {
        if (prevNodeName instanceof jQuery) {
            console.log(
                `${currNodeNameStr} same node as "${prevNodeNameStr}"?: `,
                (prevNodeName.length == currNodeName.length &&
                    currNodeName.length == currNodeName.filter(prevNodeName).length) ||
                    prevNodeName === undefined
            );
            /** else prevNodeName instanceof HTMLElement, not jQuery element */
        } else {
            console.log(
                `"${currNodeNameStr}" same node as "${prevNodeNameStr}"?: `,
                prevNodeName === currNodeName || prevNodeName === undefined
            );
        }
    }
        
function eventPos(e) {
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

/* autogen added */
let prevStatus_$overlay_21_21 = $overlay;
/* end autogen added */

/* autogen added */
let prevStatus_$overlay_21_21 = $overlay;
/* end autogen added */

    var $overlay = $container.children("img");
/* autogen added */
let currStatus_$overlay_21_21 = $overlay;
areSameDomElems("prevStatus_$overlay_21_21", prevStatus_$overlay_21_21, "currStatus_$overlay_21_21", currStatus_$overlay_21_21)

/* end autogen added */

/* autogen added */
let currStatus_$overlay_21_21 = $overlay;
areSameDomElems("prevStatus_$overlay_21_21", prevStatus_$overlay_21_21, "currStatus_$overlay_21_21", currStatus_$overlay_21_21)

/* end autogen added */


/* autogen added */
let prevStatus_$overlay_23_26 = $overlay;
/* end autogen added */

/* autogen added */
let prevStatus_$overlay_23_26 = $overlay;
/* end autogen added */

    $overlay.css({
        background: "transparent",
        position: "relative"
    });
/* autogen added */
let currStatus_$overlay_23_26 = $overlay;
areSameDomElems("prevStatus_$overlay_23_26", prevStatus_$overlay_23_26, "currStatus_$overlay_23_26", currStatus_$overlay_23_26)

/* end autogen added */

/* autogen added */
let currStatus_$overlay_23_26 = $overlay;
areSameDomElems("prevStatus_$overlay_23_26", prevStatus_$overlay_23_26, "currStatus_$overlay_23_26", currStatus_$overlay_23_26)

/* end autogen added */


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
/* autogen added */
let prevStatus_$map_47_47 = $map;
/* end autogen added */

/* autogen added */
let prevStatus_$map_47_47 = $map;
/* end autogen added */

    var $map = $container.children(".map");
/* autogen added */
let currStatus_$map_47_47 = $map;
areSameDomElems("prevStatus_$map_47_47", prevStatus_$map_47_47, "currStatus_$map_47_47", currStatus_$map_47_47)

/* end autogen added */

/* autogen added */
let currStatus_$map_47_47 = $map;
areSameDomElems("prevStatus_$map_47_47", prevStatus_$map_47_47, "currStatus_$map_47_47", currStatus_$map_47_47)

/* end autogen added */

    var map_size = [(size[1] + size[3]) * tilesize, (size[0] + size[2]) * tilesize];

/* autogen added */
let prevStatus_$map_50_55 = $map;
/* end autogen added */

/* autogen added */
let prevStatus_$map_50_55 = $map;
/* end autogen added */

    $map.css({
        width: map_size[0],
        height: map_size[1],
        position: "absolute",
        zIndex: -1
    });
/* autogen added */
let currStatus_$map_50_55 = $map;
areSameDomElems("prevStatus_$map_50_55", prevStatus_$map_50_55, "currStatus_$map_50_55", currStatus_$map_50_55)

/* end autogen added */

/* autogen added */
let currStatus_$map_50_55 = $map;
areSameDomElems("prevStatus_$map_50_55", prevStatus_$map_50_55, "currStatus_$map_50_55", currStatus_$map_50_55)

/* end autogen added */


    var position = [-(size[3] + 0.03) * tilesize, -(size[0] - 0.55) * tilesize];

/* autogen added */
let prevStatus_$map_59_66 = $map;
/* end autogen added */

/* autogen added */
let prevStatus_$map_59_66 = $map;
/* end autogen added */

    $map.find(".ground").css({
        top: size[0] * tilesize,
        height: size[2] * tilesize,
        position: "absolute",
        width: "100%",
        zIndex: -1,
        background: "#000"
    });
/* autogen added */
let currStatus_$map_59_66 = $map;
areSameDomElems("prevStatus_$map_59_66", prevStatus_$map_59_66, "currStatus_$map_59_66", currStatus_$map_59_66)

/* end autogen added */

/* autogen added */
let currStatus_$map_59_66 = $map;
areSameDomElems("prevStatus_$map_59_66", prevStatus_$map_59_66, "currStatus_$map_59_66", currStatus_$map_59_66)

/* end autogen added */


    var centre = [-1, 0];

    function update() {
/* autogen added */
let prevStatus_$map_71_74 = $map;
/* end autogen added */

/* autogen added */
let prevStatus_$map_71_74 = $map;
/* end autogen added */

        $map.css({
            left: position[0],
            top: position[1]
        });
/* autogen added */
let currStatus_$map_71_74 = $map;
areSameDomElems("prevStatus_$map_71_74", prevStatus_$map_71_74, "currStatus_$map_71_74", currStatus_$map_71_74)

/* end autogen added */

/* autogen added */
let currStatus_$map_71_74 = $map;
areSameDomElems("prevStatus_$map_71_74", prevStatus_$map_71_74, "currStatus_$map_71_74", currStatus_$map_71_74)

/* end autogen added */


        var centre_last = centre;
        centre = [Math.floor(-position[0] / tilesize), Math.floor(-position[1] / tilesize)];

        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

        if (centre[0] != centre_last[0] || centre[1] != centre_last[1]) {
/* autogen added */
let prevStatus_$map_86_86 = $map;
let prevStatus_$remove_86_86 = $remove;
/* end autogen added */

/* autogen added */
let prevStatus_$map_86_86 = $map;
let prevStatus_$remove_86_86 = $remove;
/* end autogen added */

            var $remove = $map.children().not(".ground");
/* autogen added */
let currStatus_$map_86_86 = $map;
areSameDomElems("prevStatus_$map_86_86", prevStatus_$map_86_86, "currStatus_$map_86_86", currStatus_$map_86_86)

let currStatus_$remove_86_86 = $remove;
areSameDomElems("prevStatus_$remove_86_86", prevStatus_$remove_86_86, "currStatus_$remove_86_86", currStatus_$remove_86_86)

/* end autogen added */

/* autogen added */
let currStatus_$map_86_86 = $map;
areSameDomElems("prevStatus_$map_86_86", prevStatus_$map_86_86, "currStatus_$map_86_86", currStatus_$map_86_86)

let currStatus_$remove_86_86 = $remove;
areSameDomElems("prevStatus_$remove_86_86", prevStatus_$remove_86_86, "currStatus_$remove_86_86", currStatus_$remove_86_86)

/* end autogen added */


            for (var y = -1; y <= +1; y++) {
                for (var x = -1; x <= +1; x++) {
                    var name = tile_name(centre[0] + x, centre[1] + y);
/* autogen added */
let prevStatus_$map_91_91 = $map;
/* end autogen added */

/* autogen added */
let prevStatus_$map_91_91 = $map;
/* end autogen added */

                    var tile = $map.find(".tile" + name);
/* autogen added */
let currStatus_$map_91_91 = $map;
areSameDomElems("prevStatus_$map_91_91", prevStatus_$map_91_91, "currStatus_$map_91_91", currStatus_$map_91_91)

/* end autogen added */

/* autogen added */
let currStatus_$map_91_91 = $map;
areSameDomElems("prevStatus_$map_91_91", prevStatus_$map_91_91, "currStatus_$map_91_91", currStatus_$map_91_91)

/* end autogen added */


                    if (tile.length) {
/* autogen added */
let prevStatus_$remove_94_94 = $remove;
/* end autogen added */

/* autogen added */
let prevStatus_$remove_94_94 = $remove;
/* end autogen added */

                        $remove = $remove.not(tile);
/* autogen added */
let currStatus_$remove_94_94 = $remove;
areSameDomElems("prevStatus_$remove_94_94", prevStatus_$remove_94_94, "currStatus_$remove_94_94", currStatus_$remove_94_94)

/* end autogen added */

/* autogen added */
let currStatus_$remove_94_94 = $remove;
areSameDomElems("prevStatus_$remove_94_94", prevStatus_$remove_94_94, "currStatus_$remove_94_94", currStatus_$remove_94_94)

/* end autogen added */

                    } else {
/* autogen added */
let prevStatus_$image_96_106 = $image;
/* end autogen added */

/* autogen added */
let prevStatus_$image_96_106 = $image;
/* end autogen added */

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
let currStatus_$image_96_106 = $image;
areSameDomElems("prevStatus_$image_96_106", prevStatus_$image_96_106, "currStatus_$image_96_106", currStatus_$image_96_106)

/* end autogen added */

/* autogen added */
let currStatus_$image_96_106 = $image;
areSameDomElems("prevStatus_$image_96_106", prevStatus_$image_96_106, "currStatus_$image_96_106", currStatus_$image_96_106)

/* end autogen added */


/* autogen added */
let prevStatus_$image_108_114 = $image;
/* end autogen added */

/* autogen added */
let prevStatus_$image_108_114 = $image;
/* end autogen added */

                        $image
                            .load(function () {
                                $(this).show();
                            })
                            .error(function () {
                                $(this).remove();
                            });
/* autogen added */
let currStatus_$image_108_114 = $image;
areSameDomElems("prevStatus_$image_108_114", prevStatus_$image_108_114, "currStatus_$image_108_114", currStatus_$image_108_114)

/* end autogen added */

/* autogen added */
let currStatus_$image_108_114 = $image;
areSameDomElems("prevStatus_$image_108_114", prevStatus_$image_108_114, "currStatus_$image_108_114", currStatus_$image_108_114)

/* end autogen added */


/* autogen added */
let prevStatus_$map_116_116 = $map;
let prevStatus_$image_116_116 = $image;
/* end autogen added */

/* autogen added */
let prevStatus_$map_116_116 = $map;
let prevStatus_$image_116_116 = $image;
/* end autogen added */

                        $map.append($image);
/* autogen added */
let currStatus_$map_116_116 = $map;
areSameDomElems("prevStatus_$map_116_116", prevStatus_$map_116_116, "currStatus_$map_116_116", currStatus_$map_116_116)

let currStatus_$image_116_116 = $image;
areSameDomElems("prevStatus_$image_116_116", prevStatus_$image_116_116, "currStatus_$image_116_116", currStatus_$image_116_116)

/* end autogen added */

/* autogen added */
let currStatus_$map_116_116 = $map;
areSameDomElems("prevStatus_$map_116_116", prevStatus_$map_116_116, "currStatus_$map_116_116", currStatus_$map_116_116)

let currStatus_$image_116_116 = $image;
areSameDomElems("prevStatus_$image_116_116", prevStatus_$image_116_116, "currStatus_$image_116_116", currStatus_$image_116_116)

/* end autogen added */

                    }
                }
            }

/* autogen added */
let prevStatus_$remove_121_121 = $remove;
/* end autogen added */

/* autogen added */
let prevStatus_$remove_121_121 = $remove;
/* end autogen added */

            $remove.remove();
/* autogen added */
let currStatus_$remove_121_121 = $remove;
areSameDomElems("prevStatus_$remove_121_121", prevStatus_$remove_121_121, "currStatus_$remove_121_121", currStatus_$remove_121_121)

/* end autogen added */

/* autogen added */
let currStatus_$remove_121_121 = $remove;
areSameDomElems("prevStatus_$remove_121_121", prevStatus_$remove_121_121, "currStatus_$remove_121_121", currStatus_$remove_121_121)

/* end autogen added */

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
