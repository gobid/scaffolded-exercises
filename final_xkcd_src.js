/* autogen added */

let stateManager = {
    "Program:eventPos:e": null,
    "Program:Map:$map": null,
    "Program:Map:size": null,
    "Program:Map:tilesize": null,
    "Program:Map:scroll_delta": null,
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
/* end autogen added */

function eventPos(e) {
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
}
function Map($map) {
    var size = [14, 48, 25, 33];

    /* autogen added */

    stateManager["Program:Map:size"] = size;

    var tilesize = 2048;

    /* autogen added */

    stateManager["Program:Map:tilesize"] = tilesize;

    var scroll_delta = null;

    /* autogen added */

    stateManager["Program:Map:scroll_delta"] = scroll_delta;

    $map.css({
        position: "absolute"
    });

    var position = [-(size[3] + 0.03) * tilesize, -(size[0] - 0.55) * tilesize];

    /* autogen added */

    stateManager["Program:Map:position"] = position;

    var centre = [-1, 0];

    /* autogen added */

    stateManager["Program:Map:centre"] = centre;

    function update() {
        $map.css({
            left: position[0],
            top: position[1]
        });

        var centre_last = centre;

        /* autogen added */

        stateManager["Program:Map:update:centre_last"] = centre_last;

        centre = [
            Math.floor(-position[0] / tilesize),
            Math.floor(-position[1] / tilesize)
        ];

        /* autogen added */

        stateManager["Program:Map:update:centre"] = centre;

        function tile_name(x, y) {
            x -= size[3];

            /* autogen added */

            stateManager["Program:Map:update:tile_name:x"] = x;

            y -= size[0];

            /* autogen added */

            stateManager["Program:Map:update:tile_name:y"] = y;

            return (
                (y >= 0 ? y + 1 + "s" : -y + "n") +
                (x >= 0 ? x + 1 + "e" : -x + "w")
            );
        }

        if (centre[0] != centre_last[0] || centre[1] != centre_last[1]) {
            var $remove = $map.children();

            /* autogen added */

            stateManager["Program:Map:update:$remove"] = $remove;

            for (var y = -1; y <= +1; y++) {
                /* autogen added */

                stateManager["Program:Map:update:y"] = y;

                for (var x = -1; x <= +1; x++) {
                    /* autogen added */

                    stateManager["Program:Map:update:x"] = x;

                    var name = tile_name(centre[0] + x, centre[1] + y);

                    /* autogen added */

                    stateManager["Program:Map:update:name"] = name;

                    var tile = $map.find(".tile" + name);

                    /* autogen added */

                    stateManager["Program:Map:update:tile"] = tile;

                    if (tile.length) {
                        $remove = $remove.not(tile);

                        /* autogen added */

                        stateManager["Program:Map:update:$remove"] = $remove;
                    } else {
                        $image = $(
                            '<img class="img-tile tile' +
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

                $remove.remove();
            }
        }
    }

    update();

    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            /* autogen added */

            stateManager["Program:Map:drag:pos"] = pos;

            position[0] = Math.round(pos.pageX + scroll_delta[0]);

            /* autogen added */

            stateManager["Program:Map:drag:position"] = position;

            position[1] = Math.round(pos.pageY + scroll_delta[1]);

            /* autogen added */

            stateManager["Program:Map:drag:position"] = position;

            update();
        }
    }

    $(document).on("mousedown", function (e) {
        var pos = eventPos(e);

        /* autogen added */

        stateManager["Program:Map:pos"] = pos;

        scroll_delta = [position[0] - pos.pageX, position[1] - pos.pageY];

        /* autogen added */

        stateManager["Program:Map:scroll_delta"] = scroll_delta;

        $(document).on("mousemove", drag);
        e.preventDefault();
    });

    $(document).on("mouseup", function (e) {
        $(document).off("mousemove", drag);
        scroll_delta = null;

        /* autogen added */

        stateManager["Program:Map:scroll_delta"] = scroll_delta;
    });
}

$(function () {
    var map = new Map($(".map"));

    /* autogen added */

    stateManager["Program:map"] = map;
});
