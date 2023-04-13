/*~~~~*//*~~~~*/
/* $container.css({:12:20 */
    $container.css({
        "z-index": 1,
        overflow: "hidden",
        width: "740px",
        height: "694px",
        margin: "0px auto 0",
        background: "#fff",
        position: "relative"
    });

/*~~~~*/
/*~~~~*/
/* rhs-method-$overlay:22:22 */
    var $overlay = $container.children("img");

/*~~~~*/
/*~~~~*/
/* $overlay.css({:24:27 */
    $overlay.css({
        background: "transparent",
        position: "relative"
    });

/*~~~~*/
/*~~~~*/
/* rhs-method-offset:41:41 */
    var offset = $container.offset();
    var padding_top = 200;
/*~~~~*/
/*~~~~*/
/* rhs-method-$map:48:48 */
    var $map = $container.children(".map");
    var map_size = [(size[1] + size[3]) * tilesize, (size[0] + size[2]) * tilesize];
/*~~~~*/
/*~~~~*/
/* $map.css({:51:56 */
    $map.css({
        width: map_size[0],
        height: map_size[1],
        position: "absolute",
        zIndex: -1
    });

/*~~~~*/
/*~~~~*/
/* $map.find(".ground").css({:60:67 */
    $map.find(".ground").css({
        top: size[0] * tilesize,
        height: size[2] * tilesize,
        position: "absolute",
        width: "100%",
        zIndex: -1,
        background: "#000"
    });

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* rhs-method-$remove:87:87 */
            var $remove = $map.children().not(".ground");

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* $remove.remove();:112:112 */
            $remove.remove();
        }
/*~~~~*/
/*~~~~*/
/* $container.on("mousedown touchstart", function(e) {:138:147 */
    $container.on("mousedown touchstart", function(e) {
        if (e.button && e.button >= 2) {
            return;
        }

        var pos = eventPos(e);
        scroll_delta = [position[0] - pos.pageX, position[1] - pos.pageY];
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
    });

/*~~~~*/
/*~~~~*/
/* $(document).on("mouseup touchend", function(e) {:149:152 */
    $(document).on("mouseup touchend", function(e) {
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
    });
};
/*~~~~*/
/*~~~~*/
/* $(this).show();:102:102 */
                            $(this).show();
                        }).error(function() {
/*~~~~*/
/*~~~~*/
/* $(this).show();:102:102 */
                            $(this).show();
                        }).error(function() {
/*~~~~*/
/*~~~~*/
/* $(this).show();:102:102 */
                            $(this).show();
                        }).error(function() {
/*~~~~*/
/*~~~~*/
/* $(this).show();:102:102 */
                            $(this).show();
                        }).error(function() {
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* DOM STATUS */
/* DOM LOADED HERE! */
/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* e.preventDefault();:146:146 */
        e.preventDefault();
    });
/*~~~~*/
/*~~~~*/
/* $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:145:145 */
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* e.preventDefault();:146:146 */
        e.preventDefault();
    });
/*~~~~*/
/*~~~~*/
/* $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:145:145 */
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* e.preventDefault();:146:146 */
        e.preventDefault();
    });
/*~~~~*/
/*~~~~*/
/* $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:145:145 */
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* e.preventDefault();:146:146 */
        e.preventDefault();
    });
/*~~~~*/
/*~~~~*/
/* $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:145:145 */
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* rhs-method-$remove:87:87 */
            var $remove = $map.children().not(".ground");

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* $remove.remove();:112:112 */
            $remove.remove();
        }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).show();:102:102 */
                            $(this).show();
                        }).error(function() {
/*~~~~*/
/*~~~~*/
/* $(this).show();:102:102 */
                            $(this).show();
                        }).error(function() {
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* e.preventDefault();:146:146 */
        e.preventDefault();
    });
/*~~~~*/
/*~~~~*/
/* $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:145:145 */
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* e.preventDefault();:146:146 */
        e.preventDefault();
    });
/*~~~~*/
/*~~~~*/
/* $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:145:145 */
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* e.preventDefault();:146:146 */
        e.preventDefault();
    });
/*~~~~*/
/*~~~~*/
/* $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:145:145 */
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* e.preventDefault();:146:146 */
        e.preventDefault();
    });
/*~~~~*/
/*~~~~*/
/* $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:145:145 */
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* rhs-method-$remove:87:87 */
            var $remove = $map.children().not(".ground");

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* $remove.remove();:112:112 */
            $remove.remove();
        }
/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* rhs-method-$remove:87:87 */
            var $remove = $map.children().not(".ground");

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $remove.remove();:112:112 */
            $remove.remove();
        }
/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* e.preventDefault();:146:146 */
        e.preventDefault();
    });
/*~~~~*/
/*~~~~*/
/* $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:145:145 */
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).show();:102:102 */
                            $(this).show();
                        }).error(function() {
/*~~~~*/
/*~~~~*/
/* $(this).show();:102:102 */
                            $(this).show();
                        }).error(function() {
/*~~~~*/
/*~~~~*/
/* $(this).show();:102:102 */
                            $(this).show();
                        }).error(function() {
/*~~~~*/
/*~~~~*/
/* $(this).show();:102:102 */
                            $(this).show();
                        }).error(function() {
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* e.preventDefault();:146:146 */
        e.preventDefault();
    });
/*~~~~*/
/*~~~~*/
/* $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:145:145 */
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* e.preventDefault();:146:146 */
        e.preventDefault();
    });
/*~~~~*/
/*~~~~*/
/* $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:145:145 */
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* rhs-method-$remove:87:87 */
            var $remove = $map.children().not(".ground");

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* $remove.remove();:112:112 */
            $remove.remove();
        }
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).show();:102:102 */
                            $(this).show();
                        }).error(function() {
/*~~~~*/
/*~~~~*/
/* $(this).show();:102:102 */
                            $(this).show();
                        }).error(function() {
/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* e.preventDefault();:146:146 */
        e.preventDefault();
    });
/*~~~~*/
/*~~~~*/
/* $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:145:145 */
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* e.preventDefault();:146:146 */
        e.preventDefault();
    });
/*~~~~*/
/*~~~~*/
/* $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:145:145 */
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* rhs-method-$remove:87:87 */
            var $remove = $map.children().not(".ground");

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $remove.remove();:112:112 */
            $remove.remove();
        }
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* e.preventDefault();:146:146 */
        e.preventDefault();
    });
/*~~~~*/
/*~~~~*/
/* $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:145:145 */
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* e.preventDefault();:146:146 */
        e.preventDefault();
    });
/*~~~~*/
/*~~~~*/
/* $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:145:145 */
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* rhs-method-$remove:87:87 */
            var $remove = $map.children().not(".ground");

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* $remove.remove();:112:112 */
            $remove.remove();
        }
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* e.preventDefault();:146:146 */
        e.preventDefault();
    });
/*~~~~*/
/*~~~~*/
/* $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:145:145 */
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
/*~~~~*/
/* $(this).show();:102:102 */
                            $(this).show();
                        }).error(function() {
/*~~~~*/
/*~~~~*/
/* $(this).show();:102:102 */
                            $(this).show();
                        }).error(function() {
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).show();:102:102 */
                            $(this).show();
                        }).error(function() {
/*~~~~*/
/*~~~~*/
/* $(this).show();:102:102 */
                            $(this).show();
                        }).error(function() {
/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* e.preventDefault();:146:146 */
        e.preventDefault();
    });
/*~~~~*/
/*~~~~*/
/* $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:145:145 */
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* e.preventDefault();:146:146 */
        e.preventDefault();
    });
/*~~~~*/
/*~~~~*/
/* $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:145:145 */
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* e.preventDefault();:146:146 */
        e.preventDefault();
    });
/*~~~~*/
/*~~~~*/
/* $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:145:145 */
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* e.preventDefault();:146:146 */
        e.preventDefault();
    });
/*~~~~*/
/*~~~~*/
/* $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:145:145 */
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-$remove:87:87 */
            var $remove = $map.children().not(".ground");

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* $remove.remove();:112:112 */
            $remove.remove();
        }
/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).show();:102:102 */
                            $(this).show();
                        }).error(function() {
/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* e.preventDefault();:146:146 */
        e.preventDefault();
    });
/*~~~~*/
/*~~~~*/
/* $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:145:145 */
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* e.preventDefault();:146:146 */
        e.preventDefault();
    });
/*~~~~*/
/*~~~~*/
/* $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:145:145 */
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* rhs-method-$remove:87:87 */
            var $remove = $map.children().not(".ground");

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* $remove.remove();:112:112 */
            $remove.remove();
        }
/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).show();:102:102 */
                            $(this).show();
                        }).error(function() {
/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* e.preventDefault();:146:146 */
        e.preventDefault();
    });
/*~~~~*/
/*~~~~*/
/* $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:145:145 */
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* e.preventDefault();:146:146 */
        e.preventDefault();
    });
/*~~~~*/
/*~~~~*/
/* $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:145:145 */
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* e.preventDefault();:146:146 */
        e.preventDefault();
    });
/*~~~~*/
/*~~~~*/
/* $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);:145:145 */
        $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
        e.preventDefault();
/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* drag:118:136 */
    function drag(e) {
        if (scroll_delta) {
            var pos = eventPos(e);

            position[0] = Math.round(clamp(
                pos.pageX + scroll_delta[0],
                -(size[1] + size[3]) * tilesize + container_size[0],
                0
            ));

            position[1] = Math.round(clamp(
                pos.pageY + scroll_delta[1],
                -(size[0] + size[2]) * tilesize + container_size[1],
                0
            ));

            update();
        }
    }

/*~~~~*/
/*~~~~*/
/* eventPos:1:9 */
function eventPos(e) {
    if (e.type.match(/^touch/)) {
        e = e.originalEvent.changedTouches[0];
    }
    return {
        pageX: e.pageX,
        pageY: e.pageY
    };
} // here is a comment

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-$remove:87:87 */
            var $remove = $map.children().not(".ground");

/*~~~~*/
/*~~~~*/
/* clamp:37:39 */
    function clamp(x, min, max) {
        return Math.max(Math.min(x, max), min);
    }

/*~~~~*/
/*~~~~*/
/* update:71:114 */
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
                            "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                        );

                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

                        $map.append($image);
                    }
                }
            }

            $remove.remove();
        }
    }

/*~~~~*/
/*~~~~*/
/* $map.css({:72:75 */
        $map.css({
            left: position[0],
            top: position[1]
        });

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* tile_name:80:84 */
        function tile_name(x, y) {
            x -= size[3];
            y -= size[0];
            return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
        }

/*~~~~*/
/*~~~~*/
/* $image.load(function() {:101:105 */
                        $image.load(function() {
                            $(this).show();
                        }).error(function() {
                            $(this).remove();
                        });

/*~~~~*/
/*~~~~*/
/* rhs-method-tile:92:92 */
                    var tile = $map.find(".tile" + name);

/*~~~~*/
/*~~~~*/
/* $map.append($image);:107:107 */
                        $map.append($image);
                    }
/*~~~~*/
/*~~~~*/
/* $remove.remove();:112:112 */
            $remove.remove();
        }
/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).show();:102:102 */
                            $(this).show();
                        }).error(function() {
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(this).remove();:104:104 */
                            $(this).remove();
                        });
/*~~~~*/
/*~~~~*/
/* $(document).off("mousemove touchmove", drag);:150:150 */
        $(document).off("mousemove touchmove", drag);
        scroll_delta = null;
/*~~~~*/
