[
  ExerciseInfo {
    code: '\n' +
      '/* $map.css({:72:75 */\n' +
      '        $map.css({\n' +
      '            left: position[0],\n' +
      '            top: position[1]\n' +
      '        });\n' +
      '\n',
    arrayLoc: 594,
    prevExArrayLoc: null,
    domObj: '$map',
    reason: 'most recent DOM object modified in run log',
    codeType: 'modifier',
    otherElemsIncluded: [ '$map', '$image', 'tile', '$remove', '$overlay' ]
  },
  ExerciseInfo {
    code: [
      '\n' +
        '/* rhs-method-$map:48:48 */\n' +
        '    var $map = $container.children(".map");\n' +
        '    var map_size = [(size[1] + size[3]) * tilesize, (size[0] + size[2]) * tilesize];\n',
      '\n' +
        '/* $map.css({:51:56 */\n' +
        '    $map.css({\n' +
        '        width: map_size[0],\n' +
        '        height: map_size[1],\n' +
        '        position: "absolute",\n' +
        '        zIndex: -1\n' +
        '    });\n' +
        '\n',
      '\n' +
        '/* $map.find(".ground").css({:60:67 */\n' +
        '    $map.find(".ground").css({\n' +
        '        top: size[0] * tilesize,\n' +
        '        height: size[2] * tilesize,\n' +
        '        position: "absolute",\n' +
        '        width: "100%",\n' +
        '        zIndex: -1,\n' +
        '        background: "#000"\n' +
        '    });\n' +
        '\n'
    ],
    arrayLoc: [ 4, 5, 8 ],
    prevExArrayLoc: 594,
    domObj: '$map',
    reason: 'setup code for DOM object $map, which was included in previous exercise',
    codeType: 'initializer',
    otherElemsIncluded: []
  },
  ExerciseInfo {
    code: '\n' +
      '/* $map.append($image);:107:107 */\n' +
      '                        $map.append($image);\n' +
      '                    }\n',
    arrayLoc: 486,
    prevExArrayLoc: 594,
    domObj: '$map',
    reason: 'most recent time current DOM obj was modified in run log',
    codeType: 'modifier',
    otherElemsIncluded: [ '$map', '$image', 'tile', '$remove', '$overlay' ]
  },
  ExerciseInfo {
    code: '\n' +
      '/* rhs-method-tile:92:92 */\n' +
      '                    var tile = $map.find(".tile" + name);\n' +
      '\n',
    arrayLoc: 484,
    prevExArrayLoc: 486,
    domObj: '$map',
    reason: 'most recent time current DOM obj was modified in run log',
    codeType: 'modifier',
    otherElemsIncluded: [ '$map', '$image', 'tile', '$remove', '$overlay' ]
  },
  ExerciseInfo {
    code: '\n' +
      '/* rhs-method-$remove:87:87 */\n' +
      '            var $remove = $map.children().not(".ground");\n' +
      '\n',
    arrayLoc: 454,
    prevExArrayLoc: 484,
    domObj: '$map',
    reason: 'most recent time current DOM obj was modified in run log',
    codeType: 'modifier',
    otherElemsIncluded: [ '$map', '$image', 'tile', '$remove', '$overlay' ]
  },
  ExerciseInfo {
    code: '\n' +
      '/* $image.load(function() {:101:105 */\n' +
      '                        $image.load(function() {\n' +
      '                            $(this).show();\n' +
      '                        }).error(function() {\n' +
      '                            $(this).remove();\n' +
      '                        });\n' +
      '\n',
    arrayLoc: 485,
    prevExArrayLoc: 454,
    domObj: '$image',
    reason: 'most recent time current DOM obj was modified in run log',
    codeType: 'modifier',
    otherElemsIncluded: [ '$map', '$image', 'tile', '$remove', '$overlay' ]
  },
  ExerciseInfo {
    code: '\n' +
      '/* $overlay.css({:24:27 */\n' +
      '    $overlay.css({\n' +
      '        background: "transparent",\n' +
      '        position: "relative"\n' +
      '    });\n' +
      '\n',
    arrayLoc: 2,
    prevExArrayLoc: null,
    domObj: '$overlay',
    reason: 'most recent DOM object modified in run log',
    codeType: 'modifier',
    otherElemsIncluded: [ '$map', '$image', 'tile', '$remove', '$overlay' ]
  },
  ExerciseInfo {
    code: [
      '\n' +
        '/* rhs-method-$overlay:22:22 */\n' +
        '    var $overlay = $container.children("img");\n' +
        '\n'
    ],
    arrayLoc: [ 1 ],
    prevExArrayLoc: 2,
    domObj: '$overlay',
    reason: 'setup code for DOM object $overlay, which was included in previous exercise',
    codeType: 'initializer',
    otherElemsIncluded: []
  }
]
