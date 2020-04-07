function eventPos(e) {
  return {
    pageX: e.pageX,
    pageY: e.pageY
  };
}

var Map = function ($map) {
  var size = [14, 48, 25, 33]; // integers help define the size of the container element
  var tilesize = 2048;
  var scroll_delta = null;

  $map.css({
    position: 'absolute'
  });

  var position = [-(size[3] + 0.03) * tilesize, -(size[0] - 0.55) * tilesize];
  var centre = [-1, 0];

  var update = function () {
    $map.css({
      left: position[0],
      top: position[1]
    });

    var centre_last = centre;
    centre = [Math.floor(-position[0] / tilesize), Math.floor(-position[1] / tilesize)];

    var tile_name = function (x, y) { // TILE_NAME
      x -= size[3];
      y -= size[0];

      return (y >= 0 ? (y + 1) + 's' : -y + 'n') + (x >= 0 ? (x + 1) + 'e' : -x + 'w');
    };

    if (centre[0] != centre_last[0] || centre[1] != centre_last[1]) {
      var $remove = $map.children();

      for (var y = -1; y <= +1; y++) {
        for (var x = -1; x <= +1; x++) {
          var name = tile_name(centre[0] + x, centre[1] + y);
          var tile = $map.find('.tile' + name);
          if (tile.length) {
            $remove = $remove.not(tile);
          } else {
            $image = $('<img class="img-tile tile' + name + '" src="http://imgs.xkcd.com/clickdrag/' + name + '.png" style="top:' + ((centre[1] + y) * tilesize) + 'px;left:' + ((centre[0] + x) * tilesize) + 'px; z-index: -1; position: absolute;;" style="display:none" />');
            $image.load(function () {
              $(this).show()
            }).error(function () {
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
      position[0] = Math.round(pos.pageX + scroll_delta[0]);
      position[1] = Math.round(pos.pageY + scroll_delta[1]);
      update();
    }
  }

  $(document)
    .on('mousedown', function (e) {
      var pos = eventPos(e);
      scroll_delta = [position[0] - pos.pageX, position[1] - pos.pageY];

      $(document).on('mousemove', drag);
      e.preventDefault();
    });
  $(document)
    .on('mouseup', function (e) {
      $(document).off('mousemove', drag)
      scroll_delta = null;
    });
};

$(function () {
  var map = new Map($('.map'));
});