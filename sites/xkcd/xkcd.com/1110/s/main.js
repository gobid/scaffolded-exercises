
        let codeTypes = {};
        
        const areSameDomElems = function (prevNodeNameStr, prevNodeName, currNodeNameStr, currNodeName) {
                console.log("in areSameDomElems");
                let areSame = false;
                if (prevNodeName instanceof jQuery) {
                    areSame =
                        prevNodeName.length == currNodeName.length &&
                        currNodeName.length == currNodeName.filter(prevNodeName).length;
                    console.log(`${currNodeNameStr} same node as "${prevNodeNameStr}"?: ${areSame}`);
                    /** prevNodeName instanceof HTMLElement */
                } else {
                    areSame = prevNodeName === currNodeName;
                    console.log(`"${currNodeNameStr}" same node as "${prevNodeNameStr}"?: ${areSame}`);
                }
                /** If you want to write out log info to a file instead of an object
            fetch("/1110/codetypes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ data: areSame, name: currNodeNameStr })
            })
                .then((response) => response.json())
                .then((data) => console.log(data));
            */
                if (codeTypes[currNodeNameStr] === undefined || codeTypes[currNodeNameStr] !== areSame) {
                    codeTypes[currNodeNameStr] = areSame;
                }
            }
                document.getElementById("readytolearnbtn").addEventListener("click", () => {
                    fetch("/1110/codetypes", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ codeTypeInfo: codeTypes })
                    })
                        .then((response) => response.json())
                        .then((data) => console.log(data));
                });
                
        function eventPos(e) {
            if (e.type.match(/^touch/)) {
                e = e.originalEvent.changedTouches[0];
            }
            return {
                pageX: e.pageX,
                pageY: e.pageY
            };
        } // here is a comment
        
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
        let prevStatus_$overlay_22_22 = $overlay;
        /* end autogen added */
        
            var $overlay = $container.children("img");
        /* autogen added */
        let currStatus_$overlay_22_22 = $overlay;
        areSameDomElems("prevStatus_$overlay_22_22", prevStatus_$overlay_22_22, "currStatus_$overlay_22_22", currStatus_$overlay_22_22)
        
        /* end autogen added */
        
        
        /* autogen added */
        let prevStatus_$overlay_24_27 = $overlay;
        /* end autogen added */
        
            $overlay.css({
                background: "transparent",
                position: "relative"
            });
        /* autogen added */
        let currStatus_$overlay_24_27 = $overlay;
        areSameDomElems("prevStatus_$overlay_24_27", prevStatus_$overlay_24_27, "currStatus_$overlay_24_27", currStatus_$overlay_24_27)
        
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
        let prevStatus_$map_48_48 = $map;
        /* end autogen added */
        
            var $map = $container.children(".map");
        /* autogen added */
        let currStatus_$map_48_48 = $map;
        areSameDomElems("prevStatus_$map_48_48", prevStatus_$map_48_48, "currStatus_$map_48_48", currStatus_$map_48_48)
        
        /* end autogen added */
        
            var map_size = [(size[1] + size[3]) * tilesize, (size[0] + size[2]) * tilesize];
        
        /* autogen added */
        let prevStatus_$map_51_56 = $map;
        /* end autogen added */
        
            $map.css({
                width: map_size[0],
                height: map_size[1],
                position: "absolute",
                zIndex: -1
            });
        /* autogen added */
        let currStatus_$map_51_56 = $map;
        areSameDomElems("prevStatus_$map_51_56", prevStatus_$map_51_56, "currStatus_$map_51_56", currStatus_$map_51_56)
        
        /* end autogen added */
        
        
            var position = [-(size[3] + 0.03) * tilesize, -(size[0] - 0.55) * tilesize];
        
        /* autogen added */
        let prevStatus_$map_60_67 = $map;
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
        let currStatus_$map_60_67 = $map;
        areSameDomElems("prevStatus_$map_60_67", prevStatus_$map_60_67, "currStatus_$map_60_67", currStatus_$map_60_67)
        
        /* end autogen added */
        
        
            var centre = [-1, 0];
        
            function update() {
        /* autogen added */
        let prevStatus_$map_72_75 = $map;
        /* end autogen added */
        
                $map.css({
                    left: position[0],
                    top: position[1]
                });
        /* autogen added */
        let currStatus_$map_72_75 = $map;
        areSameDomElems("prevStatus_$map_72_75", prevStatus_$map_72_75, "currStatus_$map_72_75", currStatus_$map_72_75)
        
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
        let prevStatus_$map_87_87 = $map;
        let prevStatus_$remove_87_87 = $remove;
        /* end autogen added */
        
                    var $remove = $map.children().not(".ground");
        /* autogen added */
        let currStatus_$map_87_87 = $map;
        areSameDomElems("prevStatus_$map_87_87", prevStatus_$map_87_87, "currStatus_$map_87_87", currStatus_$map_87_87)
        
        let currStatus_$remove_87_87 = $remove;
        areSameDomElems("prevStatus_$remove_87_87", prevStatus_$remove_87_87, "currStatus_$remove_87_87", currStatus_$remove_87_87)
        
        /* end autogen added */
        
        
                    for (var y = -1; y <= +1; y++) {
                        for (var x = -1; x <= +1; x++) {
                            var name = tile_name(centre[0] + x, centre[1] + y);
        /* autogen added */
        let prevStatus_$map_92_92 = $map;
        /* end autogen added */
        
                            var tile = $map.find(".tile" + name);
        /* autogen added */
        let currStatus_$map_92_92 = $map;
        areSameDomElems("prevStatus_$map_92_92", prevStatus_$map_92_92, "currStatus_$map_92_92", currStatus_$map_92_92)
        
        /* end autogen added */
        
        
                            if (tile.length) {
        /* autogen added */
        let prevStatus_$remove_95_95 = $remove;
        /* end autogen added */
        
                                $remove = $remove.not(tile);
        /* autogen added */
        let currStatus_$remove_95_95 = $remove;
        areSameDomElems("prevStatus_$remove_95_95", prevStatus_$remove_95_95, "currStatus_$remove_95_95", currStatus_$remove_95_95)
        
        /* end autogen added */
        
                            } else {
        /* autogen added */
        let prevStatus_$image_97_99 = $image;
        /* end autogen added */
        
                                var $image = $(
                                    "<img class=\"tile" + name + "\" src=\"http://imgs.xkcd.com/clickdrag/" + name + ".png\" style=\"top:" + (centre[1] + y) * tilesize + "px;left:" + (centre[0] + x) * tilesize + "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                                );
        /* autogen added */
        let currStatus_$image_97_99 = $image;
        areSameDomElems("prevStatus_$image_97_99", prevStatus_$image_97_99, "currStatus_$image_97_99", currStatus_$image_97_99)
        
        /* end autogen added */
        
        
        /* autogen added */
        let prevStatus_$image_101_105 = $image;
        /* end autogen added */
        
                                $image.load(function() {
                                    $(this).show();
                                }).error(function() {
                                    $(this).remove();
                                });
        /* autogen added */
        let currStatus_$image_101_105 = $image;
        areSameDomElems("prevStatus_$image_101_105", prevStatus_$image_101_105, "currStatus_$image_101_105", currStatus_$image_101_105)
        
        /* end autogen added */
        
        
        /* autogen added */
        let prevStatus_$map_107_107 = $map;
        let prevStatus_$image_107_107 = $image;
        /* end autogen added */
        
                                $map.append($image);
        /* autogen added */
        let currStatus_$map_107_107 = $map;
        areSameDomElems("prevStatus_$map_107_107", prevStatus_$map_107_107, "currStatus_$map_107_107", currStatus_$map_107_107)
        
        let currStatus_$image_107_107 = $image;
        areSameDomElems("prevStatus_$image_107_107", prevStatus_$image_107_107, "currStatus_$image_107_107", currStatus_$image_107_107)
        
        /* end autogen added */
        
                            }
                        }
                    }
        
        /* autogen added */
        let prevStatus_$remove_112_112 = $remove;
        /* end autogen added */
        
                    $remove.remove();
        /* autogen added */
        let currStatus_$remove_112_112 = $remove;
        areSameDomElems("prevStatus_$remove_112_112", prevStatus_$remove_112_112, "currStatus_$remove_112_112", currStatus_$remove_112_112)
        
        /* end autogen added */
        
                }
            }
        
            update();
        
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
        
            $container.on("mousedown touchstart", function(e) {
                if (e.button && e.button >= 2) {
                    return;
                }
        
                var pos = eventPos(e);
                scroll_delta = [position[0] - pos.pageX, position[1] - pos.pageY];
                $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
                e.preventDefault();
            });
        
            $(document).on("mouseup touchend", function(e) {
                $(document).off("mousemove touchmove", drag);
                scroll_delta = null;
            });
        };
        
        /* 50:72:6f:50:75:6b:65:20:69:73:20:61:77:65:73:6f:6d:65 */
        
        $(function () {
            var map = new Map($("#comic"));
        });
        