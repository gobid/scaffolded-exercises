[{
	"code": "\n/* $remove.remove();:112:112 */\n            $remove.remove();\n        }\n",
	"arrayLoc": 797,
	"prevExArrayLoc": null,
	"domObj": "$remove",
	"reason": "most recent DOM object modified in run log",
	"codeType": "modifier",
	"otherElemsIncluded": ["$remove"],
	"variables": []
}, {
	"code": "\n/* rhs-method-$remove:87:87 */\n            var $remove = $map.children().not(\".ground\");\n\n",
	"arrayLoc": 766,
	"prevExArrayLoc": 797,
	"domObj": "$remove",
	"reason": "most recent time current DOM obj was used in run log",
	"codeType": "user",
	"otherElemsIncluded": ["$map", "$image", "tile", "$overlay"],
	"variables": []
}, {
	"code": "\n/* $map.append($image);:107:107 */\n                        $map.append($image);\n                    }\n",
	"arrayLoc": 796,
	"prevExArrayLoc": null,
	"domObj": "$map",
	"reason": "most recent DOM object modified in run log",
	"codeType": "modifier",
	"otherElemsIncluded": ["$map", "$image", "tile", "$overlay"],
	"variables": []
}, {
	"code": ["\n/* rhs-method-$map:48:48 */\n    var $map = $container.children(\".map\");\n    var map_size = [(size[1] + size[3]) * tilesize, (size[0] + size[2]) * tilesize];\n", "\n/* $map.css({:51:56 */\n    $map.css({\n        width: map_size[0],\n        height: map_size[1],\n        position: \"absolute\",\n        zIndex: -1\n    });\n\n", "\n/* $map.find(\".ground\").css({:60:67 */\n    $map.find(\".ground\").css({\n        top: size[0] * tilesize,\n        height: size[2] * tilesize,\n        position: \"absolute\",\n        width: \"100%\",\n        zIndex: -1,\n        background: \"#000\"\n    });\n\n"],
	"arrayLoc": [4, 5, 6],
	"prevExArrayLoc": 796,
	"domObj": "$map",
	"reason": "setup code for DOM object $map, which was included in previous exercise",
	"codeType": "initializer",
	"otherElemsIncluded": [],
	"variables": []
}, {
	"code": "\n/* rhs-method-tile:92:92 */\n                    var tile = $map.find(\".tile\" + name);\n\n",
	"arrayLoc": 795,
	"prevExArrayLoc": 796,
	"domObj": "$map",
	"reason": "most recent time current DOM obj was modified in run log",
	"codeType": "modifier",
	"otherElemsIncluded": ["$map", "$image", "tile", "$overlay"],
	"variables": []
}, {
	"code": "\n/* $map.css({:72:75 */\n        $map.css({\n            left: position[0],\n            top: position[1]\n        });\n\n",
	"arrayLoc": 769,
	"prevExArrayLoc": 795,
	"domObj": "$map",
	"reason": "most recent time current DOM obj was modified in run log",
	"codeType": "modifier",
	"otherElemsIncluded": ["$map", "$image", "tile", "$overlay"],
	"variables": []
}, {
	"code": "\n/* $image.load(function() {:101:105 */\n                        $image.load(function() {\n                            $(this).show();\n                        }).error(function() {\n                            $(this).remove();\n                        });\n\n",
	"arrayLoc": 794,
	"prevExArrayLoc": 769,
	"domObj": "$image",
	"reason": "most recent time current (other) DOM obj was modified in run log",
	"codeType": "modifier",
	"otherElemsIncluded": ["$map", "$image", "tile", "$overlay"],
	"variables": []
}, {
	"code": "\n/* $overlay.css({:24:27 */\n    $overlay.css({\n        background: \"transparent\",\n        position: \"relative\"\n    });\n\n",
	"arrayLoc": 2,
	"prevExArrayLoc": null,
	"domObj": "$overlay",
	"reason": "most recent DOM object modified in run log",
	"codeType": "modifier",
	"otherElemsIncluded": ["$map", "$image", "tile", "$overlay"],
	"variables": []
}, {
	"code": ["\n/* rhs-method-$overlay:22:22 */\n    var $overlay = $container.children(\"img\");\n\n"],
	"arrayLoc": [1],
	"prevExArrayLoc": 2,
	"domObj": "$overlay",
	"reason": "setup code for DOM object $overlay, which was included in previous exercise",
	"codeType": "initializer",
	"otherElemsIncluded": [],
	"variables": []
}, {
	"code": ["\n/* update:71:114 */\n    function update() {\n        $map.css({\n            left: position[0],\n            top: position[1]\n        });\n\n        var centre_last = centre;\n        centre = [Math.floor(-position[0] / tilesize), Math.floor(-position[1] / tilesize)];\n\n        function tile_name(x, y) {\n            x -= size[3];\n            y -= size[0];\n            return (y >= 0 ? y + 1 + \"s\" : -y + \"n\") + (x >= 0 ? x + 1 + \"e\" : -x + \"w\");\n        }\n\n        if (centre[0] != centre_last[0] || centre[1] != centre_last[1]) {\n            var $remove = $map.children().not(\".ground\");\n\n            for (var y = -1; y <= +1; y++) {\n                for (var x = -1; x <= +1; x++) {\n                    var name = tile_name(centre[0] + x, centre[1] + y);\n                    var tile = $map.find(\".tile\" + name);\n\n                    if (tile.length) {\n                        $remove = $remove.not(tile);\n                    } else {\n                        var $image = $(\n                            \"<img class=\\\"tile\" + name + \"\\\" src=\\\"http://imgs.xkcd.com/clickdrag/\" + name + \".png\\\" style=\\\"top:\" + (centre[1] + y) * tilesize + \"px;left:\" + (centre[0] + x) * tilesize + \"px; z-index: -1; position: absolute;;\\\" style=\\\"display:none\\\" />\"\n                        );\n\n                        $image.load(function() {\n                            $(this).show();\n                        }).error(function() {\n                            $(this).remove();\n                        });\n\n                        $map.append($image);\n                    }\n                }\n            }\n\n            $remove.remove();\n        }\n    }\n\n"],
	"arrayLoc": 768,
	"prevExArrayLoc": null,
	"domObj": null,
	"reason": "variable $remove and possibly others were defined, modified or used in this exercise, and it was introduced in previous exercise",
	"codeType": "precursor-variable-exercise",
	"otherElemsIncluded": [],
	"variables": ["$map", "position", "centre_last", "centre", "tilesize", "x", "y", "size", "$remove", "name", "tile", "$image"]
}, {
	"code": ["\n/* tile_name:80:84 */\n        function tile_name(x, y) {\n            x -= size[3];\n            y -= size[0];\n            return (y >= 0 ? y + 1 + \"s\" : -y + \"n\") + (x >= 0 ? x + 1 + \"e\" : -x + \"w\");\n        }\n\n"],
	"arrayLoc": 793,
	"prevExArrayLoc": null,
	"domObj": null,
	"reason": "variable size and possibly others were defined, modified or used in this exercise, and it was introduced in previous exercise",
	"codeType": "precursor-variable-exercise",
	"otherElemsIncluded": [],
	"variables": ["x", "y", "size"]
}, {
	"code": ["\n/* drag:118:136 */\n    function drag(e) {\n        if (scroll_delta) {\n            var pos = eventPos(e);\n\n            position[0] = Math.round(clamp(\n                pos.pageX + scroll_delta[0],\n                -(size[1] + size[3]) * tilesize + container_size[0],\n                0\n            ));\n\n            position[1] = Math.round(clamp(\n                pos.pageY + scroll_delta[1],\n                -(size[0] + size[2]) * tilesize + container_size[1],\n                0\n            ));\n\n            update();\n        }\n    }\n\n"],
	"arrayLoc": 762,
	"prevExArrayLoc": null,
	"domObj": null,
	"reason": "variable size and possibly others were defined, modified or used in this exercise, and it was introduced in previous exercise",
	"codeType": "precursor-variable-exercise",
	"otherElemsIncluded": [],
	"variables": ["e", "scroll_delta", "pos", "position", "size", "tilesize", "container_size"]
}]