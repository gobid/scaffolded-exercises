/* autogen added */

let stateManager = {
  "Program:Message": null,
  "Program:undefined": null,
  "Program:d": null,
  "Program:e": null,
  "Program:a": null,
  "Program:LocationSearch": null,
  "Program:Game": null,
  "Program:b": null,
  "Program:a:h": null,
  "Program:a:e": null,
  "Program:a:d": null,
  "Program:a:g": null,
  "Program:a:c": null,
  "Program:a:f": null,
  "Program:copyrightNode": null,
  "Program:c": null,
  "Program:GameInterface": null,
  "Program:f": null,
  "Program:g": null,
  "Program:k": null,
  "Program:l": null,
  "Program:j": null,
  "Program:n": null,
  "Program:p:q": null,
  "Program:p:xPos": null,
  "Program:p:yPos": null,
  "Program:o": null,
  "Program:m": null,
  "Program:iconX": null,
  "Program:iconY": null,
  "Program:controlSize": null,
  "Program:i": null,
  "Program:t": null,
  "Program:s": null,
  "Program:u": null,
  "Program:q": null,
  "Program:upgradeValue": null,
  "Program:RouteBuilder": null,
  "Program:RoutePath": null,
  "Program:Route": null,
  "Program:p": null,
  "Program:r": null,
  "Program:v": null,
  "Program:response": null,
  "Program:Creep": null,
  "Program:CreepAlpha": null,
  "Program:CreepBravo": null,
  "Program:CreepCharlie": null,
  "Program:CreepDelta": null,
  "Program:CreepEcho": null,
  "Program:CreepFoxtrot": null,
  "Program:CreepGolf": null,
  "Program:CreepHotel": null,
  "Program:CreepIndia": null,
  "Program:Tower": null,
  "Program:TowerAlpha": null,
  "Program:TowerBravo": null,
  "Program:TowerCharlie": null,
  "Program:TowerDelta": null,
  "Program:TowerEcho": null,
  "Program:TowerFoxtrot": null,
  "Program:Timer": null,
  "Program:GameRound": null,
  "Program:GameRoundRoute": null,
  "Program:Rounds": null,
  "Program:roundNum": null,
  "Program:roundData": null,
  "Program:creepType": null,
  "Program:times": null,
  "Program:routeIndex": null,
  "Program:timerCount": null,
  "Program:creeps": null,
  "Program:twitter:e": null,
  "Program:twitter:a": null,
  "Program:twitter:f": null,
  "Program:twitter:c": null,
  "Program:twitter:b": null,
  "Program:twitter:undefined": null,
  "Program:_gaq": null,
};
const fxnCallCallback = (fnName) => (stackframes) => {
  console.log(fnName, " was called");
};
/* end autogen added */

var Message = new Class({
  Implements: [Events, Options],
  container: null,
  action: null,
  position: "top",
  initialize: function (a, c, e, b) {
    /* autogen added */

    StackTrace.instrument(() => {
      this.setOptions(b);
    }, fxnCallCallback("this.setOptions"))();
    /* end autogen added */
    this.position = a;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    this.container = $("message-element").clone();

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    /* autogen added */

    StackTrace.instrument(() => {
      this.container.addClass(a);
    }, fxnCallCallback("this.container.addClass"))();
    /* end autogen added */
    var d = this.container.getElement(".content");

    /* autogen added */

    stateManager["Program:d"] = d;

    /* autogen added */

    StackTrace.instrument(() => {
      d.addClass(c);
    }, fxnCallCallback("d.addClass"))();
    /* end autogen added */
    if (typeof e == "string") {
      e = new Element("div").set("html", e);

      /* autogen added */

      stateManager["Program:e"] = e;
    }

    /* autogen added */

    StackTrace.instrument(() => {
      e.inject(d);
    }, fxnCallCallback("e.inject"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this._addEvents();
    }, fxnCallCallback("this._addEvents"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.container.inject(document.body);
    }, fxnCallCallback("this.container.inject"))();
    /* end autogen added */
    if (this.container.hasClass("fullscreen")) {
      /* autogen added */

      StackTrace.instrument(() => {
        d.setStyle("margin-top", Math.max(10, document.body.getSize().y / 2 - d.getSize().y / 2 - 50) + "px");
      }, fxnCallCallback("d.setStyle"))();
      /* end autogen added */
      if (d.getSize().y > document.body.getSize().y - 100 && e.getElement(".page-content")) {
        /* autogen added */

        StackTrace.instrument(() => {
          e.getElement(".page-content").setStyles({
            overflow: "auto",
            height: Math.max(10, document.body.getSize().y - 100) + "px",
          });
        }, fxnCallCallback("e.getElement"))();
        /* end autogen added */
      }
    }
    if (a == "top") {
      this.action = new Fx.Slide(d, { hideOverflow: false });

      /* autogen added */

      StackTrace.instrument(() => {
        /* autogen added */

        stateManager["Program:undefined"] = undefined;

        this.action.hide();

        /* autogen added */

        StackTrace.instrument(() => {}, fxnCallCallback("this.action.hide"))();
        /* end autogen added */
        this.action.slideIn();
      }, fxnCallCallback("this.action.slideIn"))();
      /* end autogen added */
    } else {
      this.action = new Fx.Tween(this.container, { property: "opacity" });

      /* autogen added */

      StackTrace.instrument(() => {
        /* autogen added */

        stateManager["Program:undefined"] = undefined;

        this.action.set(0);

        /* autogen added */

        StackTrace.instrument(() => {}, fxnCallCallback("this.action.set"))();
        /* end autogen added */
        this.action.start(1);
      }, fxnCallCallback("this.action.start"))();
      /* end autogen added */
    }
    if (this.options.autoHide) {
      /* autogen added */

      StackTrace.instrument(() => {
        this.close.delay(this.options.autoHide, this);
      }, fxnCallCallback("this.close.delay"))();
      /* end autogen added */
    }
    if (this.options.noCloseButton) {
      /* autogen added */

      StackTrace.instrument(() => {
        this.container.addClass("no-default-close-button");
      }, fxnCallCallback("this.container.addClass"))();
      /* end autogen added */
    }
  },
  _addEvents: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.container.getElements(".close").addEvent("click", this.close.bind(this));

      /* autogen added */

      StackTrace.instrument(() => {}, fxnCallCallback("this.container.getElements"))();
      /* end autogen added */
      this.container.getElements(".action").addEvent(
        "click",
        function () {
          /* autogen added */

          StackTrace.instrument(() => {
            this.fireEvent("action", this.container);
          }, fxnCallCallback("this.fireEvent"))();
          /* end autogen added */
        }.bind(this)
      );
    }, fxnCallCallback("this.container.getElements"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.container.getElements(".action-enter").addEvent(
        "keyup",
        function (a) {
          if (a.key == "enter") {
            /* autogen added */

            StackTrace.instrument(() => {
              this.fireEvent("action", this.container);
            }, fxnCallCallback("this.fireEvent"))();
            /* end autogen added */
          }
        }.bind(this)
      );
    }, fxnCallCallback("this.container.getElements"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.container.getElements(".action-click").addEvent(
        "click",
        function (a) {
          /* autogen added */

          StackTrace.instrument(() => {
            this.fireEvent("action", [this.container, a.target]);
          }, fxnCallCallback("this.fireEvent"))();
          /* end autogen added */
        }.bind(this)
      );
    }, fxnCallCallback("this.container.getElements"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.container.getElements(".action-facebook").addEvent(
        "click",
        function (a) {
          /* autogen added */

          StackTrace.instrument(() => {
            this.fireEvent("social", "facebook");
          }, fxnCallCallback("this.fireEvent"))();
          /* end autogen added */
        }.bind(this)
      );
    }, fxnCallCallback("this.container.getElements"))();
    /* end autogen added */
  },
  close: function () {
    var a;

    /* autogen added */

    stateManager["Program:a"] = a;

    if (this.position == "top") {
      a = this.action.slideOut();

      /* autogen added */

      stateManager["Program:a"] = a;
    } else {
      a = this.action.start(1, 0);

      /* autogen added */

      stateManager["Program:a"] = a;
    }

    /* autogen added */

    StackTrace.instrument(() => {
      a.chain(
        function () {
          /* autogen added */

          StackTrace.instrument(() => {
            this.container.destroy();
          }, fxnCallCallback("this.container.destroy"))();
          /* end autogen added */
        }.bind(this)
      );
    }, fxnCallCallback("a.chain"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.fireEvent("closed");
    }, fxnCallCallback("this.fireEvent"))();
    /* end autogen added */
  },
});

/* autogen added */

stateManager["Program:Message"] = Message;

var LocationSearch = new Class({
  g: null,
  image: {
    creeps: "images/markers.png",
    towers: "images/markers.png",
    home: "images/markers.png",
    routeend: "images/markers.png",
  },
  initialize: function (a) {
    this.g = a;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;
  },
  search: function (a) {
    switch (a.toLowerCase()) {
      case "blubolt":
      case "blu bolt":
      case "bluebolt":
      case "blue bolt":
        this.image.home = this.image.towers = "images/markers/blubolt.png";

        /* autogen added */

        stateManager["Program:undefined"] = undefined;

        return new google.maps.LatLng(51.38355, -2.363772);
      case "riot":
      case "riothq":
      case "riot hq":
      case "theriothq":
        this.image.home = this.image.towers = "images/markers/riot.png";

        /* autogen added */

        stateManager["Program:undefined"] = undefined;

        return new google.maps.LatLng(51.383366, -2.36249);
      case "buckingham palace":
        this.image.home = "images/markers/buckingham-palace.png";

        /* autogen added */

        stateManager["Program:undefined"] = undefined;

        return new google.maps.LatLng(51.501994, -0.139952);
      case "the white house":
        this.image.home = "images/markers/white-house.png";

        /* autogen added */

        stateManager["Program:undefined"] = undefined;

        return new google.maps.LatLng(38.897702, -77.036522);
      case "the vatican":
        this.image.home = "images/markers/vatican.png";

        /* autogen added */

        stateManager["Program:undefined"] = undefined;

        return new google.maps.LatLng(41.9022573, 12.4581314);
      case "tower of london":
        return new google.maps.LatLng(51.509116, -0.076947);
      case "bath abbey":
        return new google.maps.LatLng(51.381416, -2.358924);
      case "taj mahal":
        return new google.maps.LatLng(27.173024, 78.042101);
      case "giza":
        return new google.maps.LatLng(29.976111, 31.132778);
      case "eiffel tower":
        return new google.maps.LatLng(48.85819, 2.294585);
      case "hagia sophia":
        return new google.maps.LatLng(41.008611, 28.98);
      case "stonehenge":
        return new google.maps.LatLng(51.17889, -1.825278);
      case "jerusalem":
        return new google.maps.LatLng(31.767784, 35.213845);
      case "ibrox":
      case "ibrox stadium":
      case "rangers fc":
        this.image.home = "images/markers/ibrox.png";

        /* autogen added */

        stateManager["Program:undefined"] = undefined;

        return new google.maps.LatLng(55.853206, -4.309256);
      case "cats":
      case "kittens":
      case "trolls":
      case "cat":
      case "kitten":
      case "troll":
        this.image.towers = "images/markers/cats.png";

        /* autogen added */

        stateManager["Program:undefined"] = undefined;

        return new google.maps.LatLng(51.381416, -2.358924);
      case "cheezburger":
      case "cheez burger":
      case "failblog":
      case "fail blog":
        this.image.towers = "images/markers/cats.png";

        /* autogen added */

        stateManager["Program:undefined"] = undefined;

        this.image.home = "images/markers/cheezburger.png";

        /* autogen added */

        stateManager["Program:undefined"] = undefined;

        return new google.maps.LatLng(47.62104, -122.35935);
      case "olympic stadium":
      case "olympic stadium london":
      case "olympic stadium, london":
        this.image.towers = "images/markers/olympics.png";

        /* autogen added */

        stateManager["Program:undefined"] = undefined;

        this.image.home = "images/markers/olympics.png";

        /* autogen added */

        stateManager["Program:undefined"] = undefined;

        return new google.maps.LatLng(51.5386, -0.01645);
    }
    return false;
  },
  setLocation: function (a, b) {
    /* autogen added */

    StackTrace.instrument(() => {
      this.g.ui.updateTowerImages();
    }, fxnCallCallback("this.g.ui.updateTowerImages"))();
    /* end autogen added */
  },
});

/* autogen added */

stateManager["Program:LocationSearch"] = LocationSearch;

var Game = new Class({
  container: null,
  ui: null,
  stronghold: null,
  routes: [],
  towers: [],
  map: null,
  timer: null,
  lives: 0,
  money: 0,
  currentRound: -1,
  moneyRounds: 0,
  rounds: null,
  foundRoutes: null,
  hasWon: false,
  search: null,
  difficultyMultiplier: 1,
  initialize: function (a) {
    this.timer = new Timer().pause();

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    this.container = $(a);

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    /* autogen added */

    StackTrace.instrument(() => {
      this.initMap();
    }, fxnCallCallback("this.initMap"))();
    /* end autogen added */
    this.search = new LocationSearch(this);

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    this.ui = new GameInterface(this, this.container);

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    /* autogen added */

    StackTrace.instrument(() => {
      this.updateCopyrights();
    }, fxnCallCallback("this.updateCopyrights"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.ui.startGame(
        function (d, c, b) {
          /* autogen added */

          StackTrace.instrument(() => {
            this.search.setLocation(c, d);
          }, fxnCallCallback("this.search.setLocation"))();
          /* end autogen added */
          this.stronghold = d;

          /* autogen added */

          stateManager["Program:undefined"] = undefined;

          this.foundRoutes = b;

          /* autogen added */

          StackTrace.instrument(() => {
            /* autogen added */

            stateManager["Program:undefined"] = undefined;

            this.showStronghold();
          }, fxnCallCallback("this.showStronghold"))();
          /* end autogen added */
          this.rounds = new Rounds(b);

          /* autogen added */

          StackTrace.instrument(() => {
            /* autogen added */

            stateManager["Program:undefined"] = undefined;

            this.nextRound();

            /* autogen added */

            StackTrace.instrument(() => {}, fxnCallCallback("this.nextRound"))();
            /* end autogen added */
            _gaq.push(["_trackEvent", "game", "play", d.lat() + "," + d.lng()]);
          }, fxnCallCallback("_gaq.push"))();
          /* end autogen added */
        }.bind(this)
      );
    }, fxnCallCallback("this.ui.startGame"))();
    /* end autogen added */
  },
  nextRound: function () {
    var a = this.rounds.get(++this.currentRound);

    /* autogen added */

    stateManager["Program:a"] = a;

    if (!a) {
      /* autogen added */

      StackTrace.instrument(() => {
        this.win();
      }, fxnCallCallback("this.win"))();
      /* end autogen added */
      return;
    }
    a.g = this;

    /* autogen added */

    stateManager["Program:a"] = a;

    /* autogen added */

    StackTrace.instrument(() => {
      a.addEvent("roundOver", this.nextRound.bind(this));
    }, fxnCallCallback("a.addEvent"))();
    /* end autogen added */
    if (a.type == "normal") {
      if (this.moneyRounds++ && !this.hasWon) {
        /* autogen added */

        StackTrace.instrument(() => {
          this.addMoney(this.moneyRounds * 4 + 50);
        }, fxnCallCallback("this.addMoney"))();
        /* end autogen added */
      }

      /* autogen added */

      StackTrace.instrument(() => {
        this.routes.each(function (c) {
          c.creeps = [];

          /* autogen added */

          stateManager["Program:c"] = c;
        });

        /* autogen added */

        StackTrace.instrument(() => {}, fxnCallCallback("this.routes.each"))();
        /* end autogen added */
        this.ui.nextRound();

        /* autogen added */

        StackTrace.instrument(() => {}, fxnCallCallback("this.ui.nextRound"))();
        /* end autogen added */
        this.ui.fastForwardOff();

        /* autogen added */

        StackTrace.instrument(() => {}, fxnCallCallback("this.ui.fastForwardOff"))();
        /* end autogen added */
        this.timer.pause();
      }, fxnCallCallback("this.timer.pause"))();
      /* end autogen added */
    }
    if (this.currentRound == 54) {
      /* autogen added */

      StackTrace.instrument(() => {
        this.win();
      }, fxnCallCallback("this.win"))();
      /* end autogen added */
    }
    var b = this.currentRound - 54;

    /* autogen added */

    stateManager["Program:b"] = b;

    if (b > 0 && b % 5 == 0) {
      this.difficultyMultiplier += 0.2;

      /* autogen added */

      stateManager["Program:undefined"] = undefined;
    }

    /* autogen added */

    StackTrace.instrument(() => {
      a.run();
    }, fxnCallCallback("a.run"))();
    /* end autogen added */
  },
  geocode: function (b, e, c) {
    var a = this.search.search(b);

    /* autogen added */

    stateManager["Program:a"] = a;

    if (a) {
      return e(a, b);
    }
    var d = new google.maps.Geocoder();

    /* autogen added */

    stateManager["Program:d"] = d;

    /* autogen added */

    StackTrace.instrument(() => {
      d.geocode({ address: b }, function (g, f) {
        if (f == google.maps.GeocoderStatus.OK) {
          e(g[0].geometry.location, b);
        } else {
          c();
        }
      });
    }, fxnCallCallback("d.geocode"))();
    /* end autogen added */
  },
  addRoute: function (a) {
    /* autogen added */

    StackTrace.instrument(() => {
      this.routes.push(a);
    }, fxnCallCallback("this.routes.push"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.towers.each(function (c) {
        /* autogen added */

        StackTrace.instrument(() => {
          c.calculateRouteOverlap();

          /* autogen added */

          StackTrace.instrument(() => {}, fxnCallCallback("c.calculateRouteOverlap"))();
          /* end autogen added */
          c.removePathEvents();

          /* autogen added */

          StackTrace.instrument(() => {}, fxnCallCallback("c.removePathEvents"))();
          /* end autogen added */
          c.addPathEvents();
        }, fxnCallCallback("c.addPathEvents"))();
        /* end autogen added */
      });
    }, fxnCallCallback("this.towers.each"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      a.enable();
    }, fxnCallCallback("a.enable"))();
    /* end autogen added */
    if (a.addMessage) {
      new Message(a.addMessage[0], a.addMessage[1], a.addMessage[2], a.addMessage[3]);
    }
    var b = new google.maps.LatLngBounds();

    /* autogen added */

    stateManager["Program:b"] = b;

    /* autogen added */

    StackTrace.instrument(() => {
      this.routes.each(function (c) {
        /* autogen added */

        StackTrace.instrument(() => {
          c.path.each(function (d) {
            /* autogen added */

            StackTrace.instrument(() => {
              b.extend(d.latLng);
            }, fxnCallCallback("b.extend"))();
            /* end autogen added */
          });
        }, fxnCallCallback("c.path.each"))();
        /* end autogen added */
      });
    }, fxnCallCallback("this.routes.each"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.map.fitBounds(b);
    }, fxnCallCallback("this.map.fitBounds"))();
    /* end autogen added */
    return a;
  },
  initMap: function () {
    var a = this._getMapTypes();

    /* autogen added */

    stateManager["Program:a"] = a;

    this.map = new google.maps.Map(this.container.getElement(".map"), {
      center: new google.maps.LatLng(54.5, -3.2),
      zoom: 6,
      mapTypeId: a[0],
      streetViewControl: false,
      mapTypeControlOptions: { mapTypeIds: a },
    });

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    /* autogen added */

    StackTrace.instrument(() => {
      this._addMapTypes();
    }, fxnCallCallback("this._addMapTypes"))();
    /* end autogen added */
  },
  _getMapTypes: function () {
    return [google.maps.MapTypeId.ROADMAP, "watercolor", google.maps.MapTypeId.SATELLITE];
  },
  _addMapTypes: function () {
    /* autogen added */

    a = StackTrace.instrument(a, fxnCallCallback("a"));
    function a(h, e, d) {
      var g = h.y;

      /* autogen added */

      stateManager["Program:a:g"] = g;

      var c = h.x;

      /* autogen added */

      stateManager["Program:a:c"] = c;

      var f = 1 << e;

      /* autogen added */

      stateManager["Program:a:f"] = f;

      if (g < 0 || g >= f) {
        return null;
      }

      if (c < 0 || c >= f) {
        c = ((c % f) + f) % f;

        /* autogen added */

        stateManager["Program:a:c"] = c;
      }

      return d(
        {
          x: c,
          y: g,
        },
        e
      );
    }
    var b = {
      getTileUrl: function (d, c) {
        return a(d, c, function (f, e) {
          return "http://tile.stamen.com/watercolor/" + e + "/" + f.x + "/" + f.y + ".jpg";
        });
      },
      tileSize: new google.maps.Size(256, 256),
      isPng: false,
      maxZoom: 16,
      minZoom: 0,
      radius: 1738000,
      name: "Watercolour",
      credit: "Stamen",
    };

    /* autogen added */

    StackTrace.instrument(() => {
      /* autogen added */

      stateManager["Program:b"] = b;

      this.map.mapTypes.set("watercolor", new google.maps.ImageMapType(b));
    }, fxnCallCallback("this.map.mapTypes.set"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      google.maps.event.addListener(this.map, "maptypeid_changed", this.updateCopyrights.bind(this));
    }, fxnCallCallback("google.maps.event.addListener"))();
    /* end autogen added */
    copyrightNode = document.createElement("div");

    /* autogen added */

    stateManager["Program:copyrightNode"] = copyrightNode;

    /* autogen added */

    StackTrace.instrument(() => {
      copyrightNode.set("id", "copyright-control");
    }, fxnCallCallback("copyrightNode.set"))();
    /* end autogen added */
    copyrightNode.index = 0;

    /* autogen added */

    stateManager["Program:copyrightNode"] = copyrightNode;

    this.copyright = copyrightNode;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    /* autogen added */

    StackTrace.instrument(() => {
      this.map.controls[google.maps.ControlPosition.BOTTOM_RIGHT].push(copyrightNode);
    }, fxnCallCallback("this.map.controls[google.maps.ControlPosition.BOTTOM_RIGHT].push"))();
    /* end autogen added */
    var b = {
      getTileUrl: function (d, c) {
        return a(d, c, function (f, e) {
          return "http://khmdbs0.google.com/pm?v=8&src=app&x=" + f.x + "&y=" + f.y + "&z=" + e + "&s=";
        });
      },
      tileSize: new google.maps.Size(256, 256),
      isPng: false,
      maxZoom: 14,
      minZoom: 0,
      radius: 1738000,
      name: "Treasure",
      credit: "Google",
    };

    /* autogen added */

    StackTrace.instrument(() => {
      /* autogen added */

      stateManager["Program:b"] = b;

      this.map.mapTypes.set("treasure", new google.maps.ImageMapType(b));
    }, fxnCallCallback("this.map.mapTypes.set"))();
    /* end autogen added */
  },
  updateCopyrights: function () {
    var a = "Game &copy; Duncan Barclay. ";

    /* autogen added */

    stateManager["Program:a"] = a;

    switch (this.map.getMapTypeId()) {
      case "watercolor":
        a +=
          'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.';

        /* autogen added */

        stateManager["Program:a"] = a;

        break;
    }
    a += ' <a class="copyright-link">(full info)</a>';

    /* autogen added */

    stateManager["Program:a"] = a;

    /* autogen added */

    StackTrace.instrument(() => {
      this.copyright.set("html", a);
    }, fxnCallCallback("this.copyright.set"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.ui.initMiscButtons(this.copyright);
    }, fxnCallCallback("this.ui.initMiscButtons"))();
    /* end autogen added */
  },
  showStronghold: function () {
    new google.maps.Marker({
      position: this.stronghold,
      map: this.map,
      icon: new google.maps.MarkerImage(
        this.search.image.home,
        new google.maps.Size(32, 32),
        new google.maps.Point(0, 0),
        new google.maps.Point(16, 16)
      ),
    });
    return this;
  },
  addLives: function (a) {
    this.lives += a;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    /* autogen added */

    StackTrace.instrument(() => {
      this.container.getElements(".controls .lives .count").set("text", this.lives);
    }, fxnCallCallback("this.container.getElements"))();
    /* end autogen added */
  },
  removeLife: function (a) {
    this.lives -= a;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    /* autogen added */

    StackTrace.instrument(() => {
      this.container.getElements(".controls .lives .count").set("text", this.lives);
    }, fxnCallCallback("this.container.getElements"))();
    /* end autogen added */
    if (this.lives <= 0) {
      /* autogen added */

      StackTrace.instrument(() => {
        this.lose();
      }, fxnCallCallback("this.lose"))();
      /* end autogen added */
    }
  },
  win: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.ui.win();
    }, fxnCallCallback("this.ui.win"))();
    /* end autogen added */
    this.hasWon = true;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    /* autogen added */

    StackTrace.instrument(() => {
      this.analytics("win", this.moneyRounds);
    }, fxnCallCallback("this.analytics"))();
    /* end autogen added */
  },
  lose: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.gameOver();
    }, fxnCallCallback("this.gameOver"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.ui.lose();
    }, fxnCallCallback("this.ui.lose"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.analytics("lose", this.moneyRounds);
    }, fxnCallCallback("this.analytics"))();
    /* end autogen added */
  },
  gameOver: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.timer.pause();
    }, fxnCallCallback("this.timer.pause"))();
    /* end autogen added */
  },
  addMoney: function (b, a) {
    if (this.hasWon && !a) {
      var c = Math.max(10, 25 - (this.moneyRounds - 54)) / 100;

      /* autogen added */

      stateManager["Program:c"] = c;

      b = Math.floor(b * c);

      /* autogen added */

      stateManager["Program:b"] = b;
    }
    this.money += b;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    /* autogen added */

    StackTrace.instrument(() => {
      this.ui.updateMoney();
    }, fxnCallCallback("this.ui.updateMoney"))();
    /* end autogen added */
    return this;
  },
  removeMoney: function (a) {
    if (this.money >= a) {
      this.money -= a;

      /* autogen added */

      StackTrace.instrument(() => {
        /* autogen added */

        stateManager["Program:undefined"] = undefined;

        this.ui.updateMoney();
      }, fxnCallCallback("this.ui.updateMoney"))();
      /* end autogen added */
      return true;
    } else {
      return false;
    }
  },
  analytics: function (a, b) {
    /* autogen added */

    StackTrace.instrument(() => {
      _gaq.push(["_trackEvent", "game", a, "", b]);
    }, fxnCallCallback("_gaq.push"))();
    /* end autogen added */
  },
  restart: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.towers.each(function (b) {
        /* autogen added */

        StackTrace.instrument(() => {
          b.remove();
        }, fxnCallCallback("b.remove"))();
        /* end autogen added */
      });
    }, fxnCallCallback("this.towers.each"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.routes.each(function (b) {
        /* autogen added */

        StackTrace.instrument(() => {
          b.remove();
        }, fxnCallCallback("b.remove"))();
        /* end autogen added */
      });
    }, fxnCallCallback("this.routes.each"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.ui.restart();
    }, fxnCallCallback("this.ui.restart"))();
    /* end autogen added */
    var a = new this.gameClass(this.container);

    /* autogen added */

    stateManager["Program:a"] = a;

    a.gameClass = this.gameClass;

    /* autogen added */

    stateManager["Program:a"] = a;
  },
});

/* autogen added */

stateManager["Program:Game"] = Game;

var GameInterface = new Class({
  g: null,
  content: null,
  container: null,
  timerMultiplier: 4,
  openTowerInfoWin: null,
  initialize: function (b, a) {
    this.g = b;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    this.container = a;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    this.content = this.container.get("html");

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    /* autogen added */

    StackTrace.instrument(() => {
      this._addDocumentPauseEvents();
    }, fxnCallCallback("this._addDocumentPauseEvents"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this._initTowers();
    }, fxnCallCallback("this._initTowers"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this._initPause();
    }, fxnCallCallback("this._initPause"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this._initFastForward();
    }, fxnCallCallback("this._initFastForward"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this._initNextRound();
    }, fxnCallCallback("this._initNextRound"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.initMiscButtons(this.container);
    }, fxnCallCallback("this.initMiscButtons"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.updateLives();
    }, fxnCallCallback("this.updateLives"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.updateMoney();
    }, fxnCallCallback("this.updateMoney"))();
    /* end autogen added */
  },
  startGame: function (b) {
    var a = this._fullscreenPopup("info", "startup", { noCloseButton: true });

    /* autogen added */

    stateManager["Program:a"] = a;

    this.startLock = false;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    /* autogen added */

    StackTrace.instrument(() => {
      a.addEvent(
        "action",
        function (c, e) {
          if (this.startLock) {
            return;
          }
          this.startLock = true;

          /* autogen added */

          stateManager["Program:undefined"] = undefined;

          var f = function (i, h) {
            var g = new RouteBuilder(this.g, i);

            /* autogen added */

            StackTrace.instrument(() => {
              /* autogen added */

              stateManager["Program:g"] = g;

              g.generate(
                function () {
                  /* autogen added */

                  StackTrace.instrument(() => {
                    a.close();
                  }, fxnCallCallback("a.close"))();
                  /* end autogen added */
                  for (var k = g.routes.length; k-- > 0; ) {
                    /* autogen added */

                    StackTrace.instrument(() => {
                      /* autogen added */

                      stateManager["Program:k"] = k;

                      g.routes[k].show();
                    }, fxnCallCallback("g.routes[k].show"))();
                    /* end autogen added */
                  }
                  var l = 200;

                  /* autogen added */

                  stateManager["Program:l"] = l;

                  var j = 100;

                  /* autogen added */

                  stateManager["Program:j"] = j;

                  switch (a.container.getElement(".difficulty-picker").get("value").toLowerCase()) {
                    case "insane":
                      j = 10;

                      /* autogen added */

                      stateManager["Program:j"] = j;

                    case "hard":
                      this.g.difficultyMultiplier = 1.6;

                      /* autogen added */

                      stateManager["Program:undefined"] = undefined;

                      break;
                    case "medium":
                      this.g.difficultyMultiplier = 1.3;

                      /* autogen added */

                      stateManager["Program:undefined"] = undefined;

                      break;
                  }

                  /* autogen added */

                  StackTrace.instrument(() => {
                    this.g.addMoney(l);

                    /* autogen added */

                    StackTrace.instrument(() => {}, fxnCallCallback("this.g.addMoney"))();
                    /* end autogen added */
                    this.g.addLives(j);
                  }, fxnCallCallback("this.g.addLives"))();
                  /* end autogen added */
                  b(i, h, g);
                }.bind(this),
                function () {
                  this.startLock = false;

                  /* autogen added */

                  StackTrace.instrument(() => {
                    /* autogen added */

                    stateManager["Program:undefined"] = undefined;

                    c.getElement(".error").set(
                      "html",
                      "We couldn't find any roads around that location for creeps to move along.  Please try somewhere else."
                    );

                    /* autogen added */

                    StackTrace.instrument(() => {}, fxnCallCallback("c.getElement"))();
                    /* end autogen added */
                    c.getElement(".error").show();
                  }, fxnCallCallback("c.getElement"))();
                  /* end autogen added */
                }.bind(this)
              );
            }, fxnCallCallback("g.generate"))();
            /* end autogen added */
          }.bind(this);

          /* autogen added */

          stateManager["Program:f"] = f;

          var d = "";

          /* autogen added */

          stateManager["Program:d"] = d;

          if (e && e.hasClass("known-location")) {
            d = e.get("text");

            /* autogen added */

            stateManager["Program:d"] = d;

            if (this.g.map.getMapTypeId() == google.maps.MapTypeId.ROADMAP) {
              /* autogen added */

              StackTrace.instrument(() => {
                this.g.map.setMapTypeId(google.maps.MapTypeId.HYBRID);
              }, fxnCallCallback("this.g.map.setMapTypeId"))();
              /* end autogen added */
            }
          } else {
            d = c.getElement(".search").get("value");

            /* autogen added */

            stateManager["Program:d"] = d;
          }

          /* autogen added */

          StackTrace.instrument(() => {
            this.g.geocode(
              d,
              f,
              function () {
                this.startLock = false;

                /* autogen added */

                StackTrace.instrument(() => {
                  /* autogen added */

                  stateManager["Program:undefined"] = undefined;

                  c.getElement(".error").set(
                    "html",
                    "We couldn't find that location.  Please try to be more specific, or search for somewhere else."
                  );

                  /* autogen added */

                  StackTrace.instrument(() => {}, fxnCallCallback("c.getElement"))();
                  /* end autogen added */
                  c.getElement(".error").show();
                }, fxnCallCallback("c.getElement"))();
                /* end autogen added */
              }.bind(this)
            );
          }, fxnCallCallback("this.g.geocode"))();
          /* end autogen added */
        }.bind(this)
      );
    }, fxnCallCallback("a.addEvent"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.initMiscButtons(a.container);
    }, fxnCallCallback("this.initMiscButtons"))();
    /* end autogen added */
    if (window.location.hash) {
      /* autogen added */

      StackTrace.instrument(() => {
        a.container.getElement(".search").set("value", window.location.hash.substring(1));

        /* autogen added */

        StackTrace.instrument(() => {}, fxnCallCallback("a.container.getElement"))();
        /* end autogen added */
        a.container.getElement(".action").fireEvent("click");
      }, fxnCallCallback("a.container.getElement"))();
      /* end autogen added */
    }
  },
  _addDocumentPauseEvents: function () {
    var a = "";

    /* autogen added */

    stateManager["Program:a"] = a;

    if (typeof document.hidden !== "undefined") {
      a = "visibilitychange";

      /* autogen added */

      stateManager["Program:a"] = a;
    } else {
      if (typeof document.mozHidden !== "undefined") {
        a = "mozvisibilitychange";

        /* autogen added */

        stateManager["Program:a"] = a;
      } else {
        if (typeof document.msHidden !== "undefined") {
          a = "msvisibilitychange";

          /* autogen added */

          stateManager["Program:a"] = a;
        } else {
          if (typeof document.webkitHidden !== "undefined") {
            a = "webkitvisibilitychange";

            /* autogen added */

            stateManager["Program:a"] = a;
          }
        }
      }
    }

    /* autogen added */

    StackTrace.instrument(() => {
      document.addEventListener(
        a,
        function () {
          /* autogen added */

          StackTrace.instrument(() => {
            this.pause();
          }, fxnCallCallback("this.pause"))();
          /* end autogen added */
        }.bind(this)
      );
    }, fxnCallCallback("document.addEventListener"))();
    /* end autogen added */
  },
  _initPause: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.container.getElement(".controls .pause").addEvent(
        "click",
        function (a) {
          if (this.g.timer.paused) {
            /* autogen added */

            StackTrace.instrument(() => {
              this.g.timer.resume();

              /* autogen added */

              StackTrace.instrument(() => {}, fxnCallCallback("this.g.timer.resume"))();
              /* end autogen added */
              this._stopPause();
            }, fxnCallCallback("this._stopPause"))();
            /* end autogen added */
          } else {
            /* autogen added */

            StackTrace.instrument(() => {
              this.pause();
            }, fxnCallCallback("this.pause"))();
            /* end autogen added */
          }
        }.bind(this)
      );
    }, fxnCallCallback("this.container.getElement"))();
    /* end autogen added */
  },
  _stopPause: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.container.getElement(".controls .pause").removeClass("on");
    }, fxnCallCallback("this.container.getElement"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.container.getElement(".controls .pause").set("text", "Pause");
    }, fxnCallCallback("this.container.getElement"))();
    /* end autogen added */
  },
  pause: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.g.timer.pause();
    }, fxnCallCallback("this.g.timer.pause"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.container.getElement(".controls .pause").addClass("on");
    }, fxnCallCallback("this.container.getElement"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.container.getElement(".controls .pause").set("text", "Resume");
    }, fxnCallCallback("this.container.getElement"))();
    /* end autogen added */
  },
  fastForwardOff: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.g.timer.setMultiplier(1);
    }, fxnCallCallback("this.g.timer.setMultiplier"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.container.getElement(".controls .fast-forward").removeClass("on");
    }, fxnCallCallback("this.container.getElement"))();
    /* end autogen added */
  },
  _initFastForward: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.container.getElement(".controls .fast-forward").addEvent(
        "click",
        function (a) {
          if (this.g.timer.multiplier > 1) {
            /* autogen added */

            StackTrace.instrument(() => {
              this.fastForwardOff();
            }, fxnCallCallback("this.fastForwardOff"))();
            /* end autogen added */
          } else {
            /* autogen added */

            StackTrace.instrument(() => {
              this.g.timer.setMultiplier(this.timerMultiplier);

              /* autogen added */

              StackTrace.instrument(() => {}, fxnCallCallback("this.g.timer.setMultiplier"))();
              /* end autogen added */
              a.target.addClass("on");
            }, fxnCallCallback("a.target.addClass"))();
            /* end autogen added */
          }
        }.bind(this)
      );
    }, fxnCallCallback("this.container.getElement"))();
    /* end autogen added */
  },
  updateLives: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.container.getElements(".controls .lives .count").set("text", this.g.lives);
    }, fxnCallCallback("this.container.getElements"))();
    /* end autogen added */
  },
  updateRound: function (a) {
    /* autogen added */

    StackTrace.instrument(() => {
      this.container.getElements(".controls .round .count").set("text", a);
    }, fxnCallCallback("this.container.getElements"))();
    /* end autogen added */
  },
  updateMoney: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.container.getElements(".controls .money .amount").set("text", this.g.money);

      /* autogen added */

      StackTrace.instrument(() => {}, fxnCallCallback("this.container.getElements"))();
      /* end autogen added */
      this.container.getElements(".controls .create-tower").each(
        function (b) {
          var a = this._getTowerType(b);

          /* autogen added */

          stateManager["Program:a"] = a;

          if (a.prototype.cost > this.g.money) {
            /* autogen added */

            StackTrace.instrument(() => {
              b.addClass("disabled");
            }, fxnCallCallback("b.addClass"))();
            /* end autogen added */
          } else {
            /* autogen added */

            StackTrace.instrument(() => {
              b.removeClass("disabled");
            }, fxnCallCallback("b.removeClass"))();
            /* end autogen added */
          }
        }.bind(this)
      );
    }, fxnCallCallback("this.container.getElements"))();
    /* end autogen added */
    if (this.openTowerInfoWin) {
      /* autogen added */

      StackTrace.instrument(() => {
        this.updateTowerInfoWin();
      }, fxnCallCallback("this.updateTowerInfoWin"))();
      /* end autogen added */
    }
  },
  _initNextRound: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.container
        .getElement(".controls .next-round")
        .set("slide", { duration: 1, transition: false })
        .slide("out");
    }, fxnCallCallback("this.containe"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.container.getElement(".controls .next-round .button").addEvent(
        "click",
        function () {
          /* autogen added */

          StackTrace.instrument(() => {
            this.container.getElement(".controls .next-round-popup").hide();

            /* autogen added */

            StackTrace.instrument(() => {}, fxnCallCallback("this.container.getElement"))();
            /* end autogen added */
            this.container
              .getElement(".controls .next-round")
              .set("slide", { duration: "short", transition: "expo:out" });

            /* autogen added */

            StackTrace.instrument(() => {}, fxnCallCallback("this.containe"))();
            /* end autogen added */
            this.container.getElement(".controls .next-round").slide("out");

            /* autogen added */

            StackTrace.instrument(() => {}, fxnCallCallback("this.container.getElement"))();
            /* end autogen added */
            this.g.timer.resume();

            /* autogen added */

            StackTrace.instrument(() => {}, fxnCallCallback("this.g.timer.resume"))();
            /* end autogen added */
            this._stopPause();
          }, fxnCallCallback("this._stopPause"))();
          /* end autogen added */
          if ((this.g.moneyRounds + 1) % 2) {
            /* autogen added */

            StackTrace.instrument(() => {
              this.g.analytics("nextRound", this.g.moneyRounds);
            }, fxnCallCallback("this.g.analytics"))();
            /* end autogen added */
          }
        }.bind(this)
      );
    }, fxnCallCallback("this.container.getElement"))();
    /* end autogen added */
  },
  nextRound: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.container
        .getElement(".controls .next-round")
        .setStyle("visibility", "visible")
        .set("slide", { duration: "long", transition: "bounce:out" });
    }, fxnCallCallback("this.containe"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.container.getElement(".controls .next-round").slide("in");
    }, fxnCallCallback("this.container.getElement"))();
    /* end autogen added */
    if (this.g.currentRound == 1) {
      /* autogen added */

      StackTrace.instrument(() => {
        this.container.getElement(".controls .next-round-popup").show();

        /* autogen added */

        StackTrace.instrument(() => {}, fxnCallCallback("this.container.getElement"))();
        /* end autogen added */
        this.container.getElement(".tower-info-popup").show();
      }, fxnCallCallback("this.container.getElement"))();
      /* end autogen added */
    }
  },
  _getTowerType: function (b) {
    var a = false;

    /* autogen added */

    stateManager["Program:a"] = a;

    switch (b.get("name")) {
      case "alpha":
        a = TowerAlpha;

        /* autogen added */

        stateManager["Program:a"] = a;

        break;
      case "bravo":
        a = TowerBravo;

        /* autogen added */

        stateManager["Program:a"] = a;

        break;
      case "charlie":
        a = TowerCharlie;

        /* autogen added */

        stateManager["Program:a"] = a;

        break;
      case "delta":
        a = TowerDelta;

        /* autogen added */

        stateManager["Program:a"] = a;

        break;
      case "echo":
        a = TowerEcho;

        /* autogen added */

        stateManager["Program:a"] = a;

        break;
      case "foxtrot":
        a = TowerFoxtrot;

        /* autogen added */

        stateManager["Program:a"] = a;

        break;
    }
    return a;
  },
  _initTowers: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.updateTowerImages();

      /* autogen added */

      b = StackTrace.instrument(b, fxnCallCallback("b"));
    }, fxnCallCallback("this.updateTowerImages"))();
    /* end autogen added */
    function b() {}
    b.prototype = new google.maps.OverlayView();

    /* autogen added */

    stateManager["Program:b"] = b;

    b.prototype.onAdd = function () {};

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    b.prototype.onRemove = function () {};

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    b.prototype.draw = function () {};

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    var a = new b();

    /* autogen added */

    stateManager["Program:a"] = a;

    /* autogen added */

    StackTrace.instrument(() => {
      this.container.getElements(".controls .create-tower").each(
        function (h) {
          var f = this._getTowerType(h);

          /* autogen added */

          stateManager["Program:f"] = f;

          if (!f) {
            return;
          }
          var e = this.container.getElement(".hidden-elements .control-tower-mouseover .content").clone();

          /* autogen added */

          StackTrace.instrument(() => {
            /* autogen added */

            stateManager["Program:e"] = e;

            e.inject(h.getSiblings(".popup")[0]);

            /* autogen added */

            StackTrace.instrument(() => {}, fxnCallCallback("e.inject"))();
            /* end autogen added */
            e.getElements(".value").each(function (i) {
              if (i.getAttribute("data-name") && f.prototype[i.getAttribute("data-name")]) {
                /* autogen added */

                StackTrace.instrument(() => {
                  i.set("text", f.prototype[i.getAttribute("data-name")]);
                }, fxnCallCallback("i.set"))();
                /* end autogen added */
              }
            });
          }, fxnCallCallback("e.getElements"))();
          /* end autogen added */
          var d = function (i) {
            /* autogen added */

            StackTrace.instrument(() => {
              h.getSiblings(".popup").show();
            }, fxnCallCallback("h.getSiblings"))();
            /* end autogen added */
          }.bind(this);

          /* autogen added */

          stateManager["Program:d"] = d;

          var c = function (i) {
            /* autogen added */

            StackTrace.instrument(() => {
              h.getSiblings(".popup").hide();
            }, fxnCallCallback("h.getSiblings"))();
            /* end autogen added */
          }.bind(this);

          /* autogen added */

          StackTrace.instrument(() => {
            /* autogen added */

            stateManager["Program:c"] = c;

            h.addEvent("mouseenter", d);

            /* autogen added */

            StackTrace.instrument(() => {}, fxnCallCallback("h.addEvent"))();
            /* end autogen added */
            h.addEvent("mouseout", c);
          }, fxnCallCallback("h.addEvent"))();
          /* end autogen added */
          var g = function (l) {
            /* autogen added */

            StackTrace.instrument(() => {
              l.stop();
            }, fxnCallCallback("l.stop"))();
            /* end autogen added */
            c();

            /* autogen added */

            StackTrace.instrument(() => {
              h.removeEvent("mouseenter", d);

              /* autogen added */

              StackTrace.instrument(() => {}, fxnCallCallback("h.removeEvent"))();
              /* end autogen added */
              a.setMap(this.g.map);
            }, fxnCallCallback("a.setMap"))();
            /* end autogen added */
            var n = new f(this.g, this.g.stronghold);

            /* autogen added */

            stateManager["Program:n"] = n;

            var j = this.g.map.getDiv().getPosition();

            /* autogen added */

            stateManager["Program:j"] = j;

            var k = this.g.map.getDiv().getSize();

            /* autogen added */

            p = StackTrace.instrument(p, fxnCallCallback("p"));

            /* autogen added */

            stateManager["Program:k"] = k;

            function p(q) {
              xPos = q.event.clientX - j.x;

              /* autogen added */

              stateManager["Program:p:xPos"] = xPos;

              yPos = q.event.clientY - j.y;

              /* autogen added */

              stateManager["Program:p:yPos"] = yPos;

              return xPos > 0 && xPos < k.x && yPos > 0 && yPos < k.y;
            }
            var o = l.event.clientX || l.event.touches[0].clientX;

            /* autogen added */

            stateManager["Program:o"] = o;

            var m = l.event.clientY || l.event.touches[0].clientY;

            /* autogen added */

            stateManager["Program:m"] = m;

            iconX = o - h.getPosition().x;

            /* autogen added */

            stateManager["Program:iconX"] = iconX;

            iconY = m - h.getPosition().y;

            /* autogen added */

            stateManager["Program:iconY"] = iconY;

            controlSize = h.getSize();

            /* autogen added */

            stateManager["Program:controlSize"] = controlSize;

            var i = {};

            /* autogen added */

            stateManager["Program:i"] = i;

            i = {
              mouseup: function (q) {
                /* autogen added */

                StackTrace.instrument(() => {
                  document.removeEvents(i);

                  /* autogen added */

                  StackTrace.instrument(() => {}, fxnCallCallback("document.removeEvents"))();
                  /* end autogen added */
                  h.setStyles({ position: "static", visibility: "visible" });

                  /* autogen added */

                  StackTrace.instrument(() => {}, fxnCallCallback("h.setStyles"))();
                  /* end autogen added */
                  h.addEvent("mouseenter", d);

                  /* autogen added */

                  StackTrace.instrument(() => {}, fxnCallCallback("h.addEvent"))();
                  /* end autogen added */
                  a.setMap(null);
                }, fxnCallCallback("a.setMap"))();
                /* end autogen added */
                if (!p(q) || !n.checkDroppable()) {
                  /* autogen added */

                  StackTrace.instrument(() => {
                    n.remove();
                  }, fxnCallCallback("n.remove"))();
                  /* end autogen added */
                } else {
                  /* autogen added */

                  StackTrace.instrument(() => {
                    n.drop();

                    /* autogen added */

                    StackTrace.instrument(() => {}, fxnCallCallback("n.drop"))();
                    /* end autogen added */
                    this.g.towers.push(n);
                  }, fxnCallCallback("this.g.towers.push"))();
                  /* end autogen added */
                }
              }.bind(this),
              mousemove: function (r) {
                /* autogen added */

                StackTrace.instrument(() => {
                  r.stop();
                }, fxnCallCallback("r.stop"))();
                /* end autogen added */
                var t = r.event.clientX || r.event.touches[0].clientX;

                /* autogen added */

                stateManager["Program:t"] = t;

                var s = r.event.clientY || r.event.touches[0].clientY;

                /* autogen added */

                stateManager["Program:s"] = s;

                var u = a
                  .getProjection()
                  .fromContainerPixelToLatLng(
                    new google.maps.Point(
                      t - j.x + (controlSize.x / 2 - iconX),
                      s - j.y + (controlSize.y - iconY)
                    )
                  );

                /* autogen added */

                StackTrace.instrument(() => {
                  /* autogen added */

                  stateManager["Program:u"] = u;

                  n.move(u).show().showAttackRadius();

                  /* autogen added */

                  StackTrace.instrument(() => {}, fxnCallCallback("n.move"))();
                  /* end autogen added */
                  n.checkDroppable();
                }, fxnCallCallback("n.checkDroppable"))();
                /* end autogen added */
                var q = {
                  position: "absolute",
                  left: t - iconX,
                  top: s - iconY,
                  zIndex: 100,
                  visibility: p(r) ? "hidden" : "visible",
                };

                /* autogen added */

                StackTrace.instrument(() => {
                  /* autogen added */

                  stateManager["Program:q"] = q;

                  h.setStyles(q);
                }, fxnCallCallback("h.setStyles"))();
                /* end autogen added */
              }.bind(this),
            };

            /* autogen added */

            StackTrace.instrument(() => {
              /* autogen added */

              stateManager["Program:i"] = i;

              document.addEvent("mouseup", i.mouseup);

              /* autogen added */

              StackTrace.instrument(() => {}, fxnCallCallback("document.addEvent"))();
              /* end autogen added */
              document.addEvent("mousemove", i.mousemove);

              /* autogen added */

              StackTrace.instrument(() => {}, fxnCallCallback("document.addEvent"))();
              /* end autogen added */
              document.addEvent("touchend", i.mouseup);

              /* autogen added */

              StackTrace.instrument(() => {}, fxnCallCallback("document.addEvent"))();
              /* end autogen added */
              document.addEvent("touchmove", i.mousemove);
            }, fxnCallCallback("document.addEvent"))();
            /* end autogen added */
            if (this.container.getElement(".tower-info-popup")) {
              /* autogen added */

              StackTrace.instrument(() => {
                this.container.getElement(".tower-info-popup").destroy();
              }, fxnCallCallback("this.container.getElement"))();
              /* end autogen added */
            }
          }.bind(this);

          /* autogen added */

          StackTrace.instrument(() => {
            /* autogen added */

            stateManager["Program:g"] = g;

            h.addEvent("mousedown", g);

            /* autogen added */

            StackTrace.instrument(() => {}, fxnCallCallback("h.addEvent"))();
            /* end autogen added */
            h.addEvent("touchstart", g);

            /* autogen added */

            StackTrace.instrument(() => {}, fxnCallCallback("h.addEvent"))();
            /* end autogen added */
            h.addEvent("mouseup", function (i) {
              /* autogen added */

              StackTrace.instrument(() => {
                h.addEvent("mouseenter", d);
              }, fxnCallCallback("h.addEvent"))();
              /* end autogen added */
            });
          }, fxnCallCallback("h.addEvent"))();
          /* end autogen added */
        }.bind(this)
      );
    }, fxnCallCallback("this.container.getElements"))();
    /* end autogen added */
  },
  showTowerInfoWin: function (b) {
    if (this.openTowerInfoWin) {
      /* autogen added */

      StackTrace.instrument(() => {
        this.openTowerInfoWin.deselected();
      }, fxnCallCallback("this.openTowerInfoWin.deselected"))();
      /* end autogen added */
    }
    this.openTowerInfoWin = b;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    var a = this.container.getElement(".hidden-elements .control-tower-infowin .content").clone();

    /* autogen added */

    stateManager["Program:a"] = a;

    /* autogen added */

    StackTrace.instrument(() => {
      a.getElements(".value").each(function (c) {
        if (c.getAttribute("data-name") && b[c.getAttribute("data-name")]) {
          /* autogen added */

          StackTrace.instrument(() => {
            c.set("text", b[c.getAttribute("data-name")]);
          }, fxnCallCallback("c.set"))();
          /* end autogen added */
        }
      });
    }, fxnCallCallback("a.getElements"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      a.getElements(".special-value").each(function (c) {
        var e = "";

        /* autogen added */

        stateManager["Program:e"] = e;

        switch (c.getAttribute("data-name")) {
          case "sell-cost":
            e = b.getSellCost();

            /* autogen added */

            stateManager["Program:e"] = e;

            break;
        }

        /* autogen added */

        StackTrace.instrument(() => {
          c.set("text", e);
        }, fxnCallCallback("c.set"))();
        /* end autogen added */
      });
    }, fxnCallCallback("a.getElements"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      a.getElement(".sell").addEvent("click", function (c) {
        /* autogen added */

        StackTrace.instrument(() => {
          b.sell();
        }, fxnCallCallback("b.sell"))();
        /* end autogen added */
      });
    }, fxnCallCallback("a.getElement"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      a.getElements(".upgrade").each(
        function (c, e) {
          if (!b.upgrades[e]) {
            return;
          }
          var g = { attackRadius: b.attackRadius, damage: b.damage, attackSpeed: b.attackSpeed };

          /* autogen added */

          stateManager["Program:g"] = g;

          var f = true;

          /* autogen added */

          StackTrace.instrument(() => {
            /* autogen added */

            stateManager["Program:f"] = f;

            b.upgrades[e].each(
              function (h) {
                if (h.applied) {
                  return;
                }
                var i = this.container
                  .getElement(".hidden-elements .control-tower-infowin-upgrade .content")
                  .clone();

                /* autogen added */

                StackTrace.instrument(() => {
                  /* autogen added */

                  stateManager["Program:i"] = i;

                  i.getElements(".value").each(function (j) {
                    if (j.getAttribute("data-name") && h[j.getAttribute("data-name")]) {
                      /* autogen added */

                      StackTrace.instrument(() => {
                        j.set("text", h[j.getAttribute("data-name")]);
                      }, fxnCallCallback("j.set"))();
                      /* end autogen added */
                    }
                  });

                  /* autogen added */

                  StackTrace.instrument(() => {}, fxnCallCallback("i.getElements"))();
                  /* end autogen added */
                  i.getElements(".add-value").each(function (j) {
                    if (j.getAttribute("data-name") && b[j.getAttribute("data-name")]) {
                      upgradeValue = h[j.getAttribute("data-name")];

                      /* autogen added */

                      stateManager["Program:upgradeValue"] = upgradeValue;

                      if (!upgradeValue) {
                        upgradeValue = 0;

                        /* autogen added */

                        stateManager["Program:upgradeValue"] = upgradeValue;
                      }
                      g[j.getAttribute("data-name")] += upgradeValue;

                      /* autogen added */

                      StackTrace.instrument(() => {
                        /* autogen added */

                        stateManager["Program:g"] = g;

                        j.set("text", g[j.getAttribute("data-name")]);
                      }, fxnCallCallback("j.set"))();
                      /* end autogen added */
                    }
                  });
                }, fxnCallCallback("i.getElements"))();
                /* end autogen added */
                if (h.applied) {
                  /* autogen added */

                  StackTrace.instrument(() => {
                    i.addClass("applied");
                  }, fxnCallCallback("i.addClass"))();
                  /* end autogen added */
                }

                /* autogen added */

                StackTrace.instrument(() => {
                  i.getElement(".button").addClass("disabled").set("disabled", true);
                }, fxnCallCallback("i.getElement"))();
                /* end autogen added */
                if (f) {
                  /* autogen added */

                  StackTrace.instrument(() => {
                    i.getElement(".button").setAttribute("data-cost", h.cost);

                    /* autogen added */

                    StackTrace.instrument(() => {}, fxnCallCallback("i.getElement"))();
                    /* end autogen added */
                    i.getElement(".button").addEvent(
                      "click",
                      function (j) {
                        /* autogen added */

                        StackTrace.instrument(() => {
                          b.upgrade(h);
                        }, fxnCallCallback("b.upgrade"))();
                        /* end autogen added */
                      }.bind(this)
                    );
                  }, fxnCallCallback("i.getElement"))();
                  /* end autogen added */
                  f = false;

                  /* autogen added */

                  stateManager["Program:f"] = f;
                } else {
                  /* autogen added */

                  StackTrace.instrument(() => {
                    i.getElement(".button").setAttribute("data-cost", 0);
                  }, fxnCallCallback("i.getElement"))();
                  /* end autogen added */
                }

                /* autogen added */

                StackTrace.instrument(() => {
                  i.inject(c);
                }, fxnCallCallback("i.inject"))();
                /* end autogen added */
              }.bind(this)
            );
          }, fxnCallCallback("b.upgrades[e].each"))();
          /* end autogen added */
        }.bind(this)
      );
    }, fxnCallCallback("a.getElements"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      a.getElements(".upgrade").each(function (c, e) {
        if (!c.getChildren().length) {
          /* autogen added */

          StackTrace.instrument(() => {
            c.destroy();
          }, fxnCallCallback("c.destroy"))();
          /* end autogen added */
        }
      });
    }, fxnCallCallback("a.getElements"))();
    /* end autogen added */
    if (!a.getElements(".upgrade").length) {
      /* autogen added */

      StackTrace.instrument(() => {
        a.getElement(".upgrade-message").set("text", "No upgrades available");
      }, fxnCallCallback("a.getElement"))();
      /* end autogen added */
    }

    /* autogen added */

    StackTrace.instrument(() => {
      b.selected();
    }, fxnCallCallback("b.selected"))();
    /* end autogen added */
    var d = this.container.getElement(".tower-infowin-container");

    /* autogen added */

    stateManager["Program:d"] = d;

    /* autogen added */

    StackTrace.instrument(() => {
      a.getElements(".close").addEvent(
        "click",
        function (c) {
          /* autogen added */

          StackTrace.instrument(() => {
            this.closeTowerInfoWin(b);
          }, fxnCallCallback("this.closeTowerInfoWin"))();
          /* end autogen added */
        }.bind(this)
      );
    }, fxnCallCallback("a.getElements"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      d.set("html", "");
    }, fxnCallCallback("d.set"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      a.inject(d);
    }, fxnCallCallback("a.inject"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      d.show();
    }, fxnCallCallback("d.show"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.updateTowerInfoWin();
    }, fxnCallCallback("this.updateTowerInfoWin"))();
    /* end autogen added */
  },
  updateTowerInfoWin: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.container.getElements(".tower-infowin-container .upgrade .button").each(
        function (a) {
          var b = a.getAttribute("data-cost");

          /* autogen added */

          stateManager["Program:b"] = b;

          if (b <= 0) {
            return;
          }
          if (this.g.money >= b) {
            if (a.hasClass("disabled")) {
              /* autogen added */

              StackTrace.instrument(() => {
                a.removeClass("disabled").set("disabled", false);
              }, fxnCallCallback("a.removeClass"))();
              /* end autogen added */
            }
          } else {
            if (!a.hasClass("disabled")) {
              /* autogen added */

              StackTrace.instrument(() => {
                a.addClass("disabled").set("disabled", true);
              }, fxnCallCallback("a.addClass"))();
              /* end autogen added */
            }
          }
        }.bind(this)
      );
    }, fxnCallCallback("this.container.getElements"))();
    /* end autogen added */
  },
  closeTowerInfoWin: function (a) {
    if (this.openTowerInfoWin != a) {
      return;
    }

    /* autogen added */

    StackTrace.instrument(() => {
      this.openTowerInfoWin.deselected();
    }, fxnCallCallback("this.openTowerInfoWin.deselected"))();
    /* end autogen added */
    this.openTowerInfoWin = null;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    /* autogen added */

    StackTrace.instrument(() => {
      this.container.getElement(".tower-infowin-container").hide();
    }, fxnCallCallback("this.container.getElement"))();
    /* end autogen added */
  },
  win: function () {
    var a = this._fullscreenPopup("success", "win");

    /* autogen added */

    stateManager["Program:a"] = a;

    /* autogen added */

    StackTrace.instrument(() => {
      a.addEvent(
        "action",
        function () {
          /* autogen added */

          StackTrace.instrument(() => {
            this.g.restart();

            /* autogen added */

            StackTrace.instrument(() => {}, fxnCallCallback("this.g.restart"))();
            /* end autogen added */
            a.close();
          }, fxnCallCallback("a.close"))();
          /* end autogen added */
        }.bind(this)
      );
    }, fxnCallCallback("a.addEvent"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      a.container
        .getElement(".action-twitter")
        .set("data-text", "I made it to round 50 on #MapsTowerDefence!")
        .addClass("twitter-share-button");
    }, fxnCallCallback("a.containe"))();
    /* end autogen added */
    twitter(document, "script", "twitter-wjs-" + new Date());

    /* autogen added */

    StackTrace.instrument(() => {
      a.addEvent(
        "social",
        function (b) {
          switch (b) {
            case "facebook":
              /* autogen added */

              StackTrace.instrument(() => {
                this.publishFacebook("I made it to round 50 on Maps Tower Defence!");
              }, fxnCallCallback("this.publishFacebook"))();
              /* end autogen added */
              break;
          }
        }.bind(this)
      );
    }, fxnCallCallback("a.addEvent"))();
    /* end autogen added */
  },
  lose: function () {
    var a = this._fullscreenPopup("error", "game-over");

    /* autogen added */

    stateManager["Program:a"] = a;

    /* autogen added */

    StackTrace.instrument(() => {
      a.addEvent(
        "action",
        function () {
          /* autogen added */

          StackTrace.instrument(() => {
            this.g.restart();

            /* autogen added */

            StackTrace.instrument(() => {}, fxnCallCallback("this.g.restart"))();
            /* end autogen added */
            a.close();
          }, fxnCallCallback("a.close"))();
          /* end autogen added */
        }.bind(this)
      );
    }, fxnCallCallback("a.addEvent"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      a.container
        .getElement(".action-twitter")
        .set("data-text", "I made it to round " + this.g.moneyRounds + " on #MapsTowerDefence!")
        .addClass("twitter-share-button");
    }, fxnCallCallback("a.containe"))();
    /* end autogen added */
    twitter(document, "script", "twitter-wjs-" + new Date());

    /* autogen added */

    StackTrace.instrument(() => {
      a.addEvent(
        "social",
        function (b) {
          switch (b) {
            case "facebook":
              /* autogen added */

              StackTrace.instrument(() => {
                this.publishFacebook("I made it to round " + this.g.moneyRounds + " on Maps Tower Defence!");
              }, fxnCallCallback("this.publishFacebook"))();
              /* end autogen added */
              break;
          }
        }.bind(this)
      );
    }, fxnCallCallback("a.addEvent"))();
    /* end autogen added */
  },
  _fullscreenPopup: function (b, c, a) {
    return new Message(
      "fullscreen",
      b,
      this.container
        .getElement(".hidden-elements")
        .getChildren("." + c)[0]
        .clone(),
      a
    );
  },
  initMiscButtons: function (a) {
    /* autogen added */

    StackTrace.instrument(() => {
      a.getElements(".button.help").addEvent(
        "click",
        function (b) {
          /* autogen added */

          StackTrace.instrument(() => {
            this.pause();

            /* autogen added */

            StackTrace.instrument(() => {}, fxnCallCallback("this.pause"))();
            /* end autogen added */
            this._fullscreenPopup("info", "help");
          }, fxnCallCallback("this._fullscreenPopup"))();
          /* end autogen added */
        }.bind(this)
      );
    }, fxnCallCallback("a.getElements"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      a.getElements(".button.about").addEvent(
        "click",
        function (b) {
          /* autogen added */

          StackTrace.instrument(() => {
            this.pause();

            /* autogen added */

            StackTrace.instrument(() => {}, fxnCallCallback("this.pause"))();
            /* end autogen added */
            this._fullscreenPopup("info", "about");
          }, fxnCallCallback("this._fullscreenPopup"))();
          /* end autogen added */
        }.bind(this)
      );
    }, fxnCallCallback("a.getElements"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      a.getElements(".button.feedback").addEvent(
        "click",
        function (b) {
          /* autogen added */

          StackTrace.instrument(() => {
            this.pause();

            /* autogen added */

            StackTrace.instrument(() => {}, fxnCallCallback("this.pause"))();
            /* end autogen added */
            this._fullscreenPopup("info", "feedback");
          }, fxnCallCallback("this._fullscreenPopup"))();
          /* end autogen added */
        }.bind(this)
      );
    }, fxnCallCallback("a.getElements"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      a.getElements(".button.chat").addEvent(
        "click",
        function (b) {
          var c = window.open(
            "http://webchat.quakenet.org/?channels=MapsTD&uio=d4",
            "MapsTD Chat",
            "width=647,height=400"
          );

          /* autogen added */

          stateManager["Program:c"] = c;

          if (window.focus) {
            /* autogen added */

            StackTrace.instrument(() => {
              c.focus();
            }, fxnCallCallback("c.focus"))();
            /* end autogen added */
          }
        }.bind(this)
      );
    }, fxnCallCallback("a.getElements"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      a.getElements(".copyright-link").addEvent(
        "click",
        function (b) {
          /* autogen added */

          StackTrace.instrument(() => {
            b.stop();

            /* autogen added */

            StackTrace.instrument(() => {}, fxnCallCallback("b.stop"))();
            /* end autogen added */
            this.pause();

            /* autogen added */

            StackTrace.instrument(() => {}, fxnCallCallback("this.pause"))();
            /* end autogen added */
            this._fullscreenPopup("info", "copyright-popup");
          }, fxnCallCallback("this._fullscreenPopup"))();
          /* end autogen added */
        }.bind(this)
      );
    }, fxnCallCallback("a.getElements"))();
    /* end autogen added */
  },
  updateTowerImages: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.container.getElements(".controls .create-tower").each(
        function (b) {
          var a = this._getTowerType(b);

          /* autogen added */

          stateManager["Program:a"] = a;

          if (!a) {
            return;
          }

          /* autogen added */

          StackTrace.instrument(() => {
            b.setStyles({
              "background-image": 'url("' + this.g.search.image.towers + '")',
              "background-position": "0 -" + (a.prototype.markerOffset + 2) * 32 + "px",
              width: "32px",
              height: "32px",
              border: "0",
            });
          }, fxnCallCallback("b.setStyles"))();
          /* end autogen added */
        }.bind(this)
      );
    }, fxnCallCallback("this.container.getElements"))();
    /* end autogen added */
  },
  restart: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.container.set("html", this.content);
    }, fxnCallCallback("this.container.set"))();
    /* end autogen added */
  },
  publishFacebook: function (b) {
    /* autogen added */

    StackTrace.instrument(() => {
      FB.init({ appId: "267555096654594", status: true, cookie: true });
    }, fxnCallCallback("FB.init"))();
    /* end autogen added */
    var a = {
      method: "feed",
      link: "http://www.mapstd.com/",
      picture: "http://www.mapstd.com/images/avatar.png",
      name: b,
      description:
        "Maps Tower Defence is a tower defence game on Google Maps. Defend your home from enemies!",
      redirect_uri: "http://www.mapstd.com/close.html",
    };

    /* autogen added */

    StackTrace.instrument(() => {
      /* autogen added */

      stateManager["Program:a"] = a;

      FB.ui(a, function () {});
    }, fxnCallCallback("FB.ui"))();
    /* end autogen added */
  },
  publishTwitter: function (a) {},
});

/* autogen added */

stateManager["Program:GameInterface"] = GameInterface;

var RouteBuilder = new Class({
  routes: [],
  g: null,
  start: null,
  searchedRoutes: 0,
  addedRoutes: 0,
  actions: {},
  initialize: function (a, b) {
    this.g = a;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    this.start = b;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;
  },
  generate: function (b, a) {
    this.actions = { success: b, failure: a };

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    this.searchedRoutes += 4;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    this.tmpRoutes = {};

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    new Route(
      this.g,
      this.start,
      new google.maps.LatLng(this.start.lat() + 0.02, this.start.lng()),
      function (c) {
        /* autogen added */

        StackTrace.instrument(() => {
          this._add(c, "north");
        }, fxnCallCallback("this._add"))();
        /* end autogen added */
      }.bind(this),
      function () {
        /* autogen added */

        StackTrace.instrument(() => {
          this._fail();
        }, fxnCallCallback("this._fail"))();
        /* end autogen added */
      }.bind(this)
    );
    new Route(
      this.g,
      this.start,
      new google.maps.LatLng(this.start.lat(), this.start.lng() + 0.04),
      function (c) {
        /* autogen added */

        StackTrace.instrument(() => {
          this._add(c, "east");
        }, fxnCallCallback("this._add"))();
        /* end autogen added */
      }.bind(this),
      function () {
        /* autogen added */

        StackTrace.instrument(() => {
          this._fail();
        }, fxnCallCallback("this._fail"))();
        /* end autogen added */
      }.bind(this)
    );
    new Route(
      this.g,
      this.start,
      new google.maps.LatLng(this.start.lat() - 0.02, this.start.lng()),
      function (c) {
        /* autogen added */

        StackTrace.instrument(() => {
          this._add(c, "south");
        }, fxnCallCallback("this._add"))();
        /* end autogen added */
      }.bind(this),
      function () {
        /* autogen added */

        StackTrace.instrument(() => {
          this._fail();
        }, fxnCallCallback("this._fail"))();
        /* end autogen added */
      }.bind(this)
    );
    new Route(
      this.g,
      this.start,
      new google.maps.LatLng(this.start.lat(), this.start.lng() - 0.04),
      function (c) {
        /* autogen added */

        StackTrace.instrument(() => {
          this._add(c, "west");
        }, fxnCallCallback("this._add"))();
        /* end autogen added */
      }.bind(this),
      function () {
        /* autogen added */

        StackTrace.instrument(() => {
          this._fail();
        }, fxnCallCallback("this._fail"))();
        /* end autogen added */
      }.bind(this)
    );
  },
  _add: function (a, b) {
    this.tmpRoutes[b] = a;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    a.compass = b;

    /* autogen added */

    stateManager["Program:a"] = a;

    /* autogen added */

    StackTrace.instrument(() => {
      this._addedRoute();
    }, fxnCallCallback("this._addedRoute"))();
    /* end autogen added */
  },
  _fail: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this._addedRoute();
    }, fxnCallCallback("this._addedRoute"))();
    /* end autogen added */
  },
  _addedRoute: function () {
    this.searchedRoutes--;
    if (this.searchedRoutes) {
      return;
    }
    if (this.tmpRoutes.north) {
      /* autogen added */

      StackTrace.instrument(() => {
        this.routes.push(this.tmpRoutes.north);
      }, fxnCallCallback("this.routes.push"))();
      /* end autogen added */
    }
    if (this.tmpRoutes.east) {
      /* autogen added */

      StackTrace.instrument(() => {
        this.routes.push(this.tmpRoutes.east);
      }, fxnCallCallback("this.routes.push"))();
      /* end autogen added */
    }
    if (this.tmpRoutes.south) {
      /* autogen added */

      StackTrace.instrument(() => {
        this.routes.push(this.tmpRoutes.south);
      }, fxnCallCallback("this.routes.push"))();
      /* end autogen added */
    }
    if (this.tmpRoutes.west) {
      /* autogen added */

      StackTrace.instrument(() => {
        this.routes.push(this.tmpRoutes.west);
      }, fxnCallCallback("this.routes.push"))();
      /* end autogen added */
    }
    if (!this.routes.length) {
      return this.actions.failure();
    }
    for (var a = 1; a < this.routes.length; a++) {
      /* autogen added */

      stateManager["Program:a"] = a;

      this.routes[a].addMessage = [
        "top",
        "success",
        "Let's make this a bit harder.  <b>New route added to the " + this.routes[a].compass + ".</b>",
        { autoHide: 15000 },
      ];

      /* autogen added */

      stateManager["Program:undefined"] = undefined;
    }
    var a = 0;

    /* autogen added */

    stateManager["Program:a"] = a;

    while (this.routes.length < 4) {
      var b = this.routes[a++].clone();

      /* autogen added */

      stateManager["Program:b"] = b;

      b.addMessage = [
        "top",
        "error",
        "We couldn't find another route to add to the map, so we've made the " +
          b.compass +
          " path harder.  Have fun :)",
        { autoHide: 10000 },
      ];

      /* autogen added */

      StackTrace.instrument(() => {
        /* autogen added */

        stateManager["Program:b"] = b;

        this.routes.push(b);
      }, fxnCallCallback("this.routes.push"))();
      /* end autogen added */
    }
    return this.actions.success();
  },
  getNextRoute: function () {
    return this.routes[this.addedRoutes++];
  },
});

/* autogen added */

stateManager["Program:RouteBuilder"] = RouteBuilder;

var RoutePath = new Class({
  latLng: null,
  creeps: [],
  towers: [],
  initialize: function (a) {
    this.latLng = a;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;
  },
  addTower: function (a) {
    /* autogen added */

    StackTrace.instrument(() => {
      this.towers.push(a);
    }, fxnCallCallback("this.towers.push"))();
    /* end autogen added */
  },
  removeTower: function (a) {
    /* autogen added */

    StackTrace.instrument(() => {
      this.towers.erase(a);
    }, fxnCallCallback("this.towers.erase"))();
    /* end autogen added */
  },
  addCreep: function (a) {
    /* autogen added */

    StackTrace.instrument(() => {
      this.creeps.push(a);
    }, fxnCallCallback("this.creeps.push"))();
    /* end autogen added */
    if (this.towers.length) {
      var b = this.towers[0];

      /* autogen added */

      StackTrace.instrument(() => {
        /* autogen added */

        stateManager["Program:b"] = b;

        b.removePathEvents();

        /* autogen added */

        StackTrace.instrument(() => {}, fxnCallCallback("b.removePathEvents"))();
        /* end autogen added */
        b.attack();
      }, fxnCallCallback("b.attack"))();
      /* end autogen added */
    }
  },
  removeCreep: function (a) {
    /* autogen added */

    StackTrace.instrument(() => {
      this.creeps.erase(a);
    }, fxnCallCallback("this.creeps.erase"))();
    /* end autogen added */
  },
});

/* autogen added */

stateManager["Program:RoutePath"] = RoutePath;

var Route = new Class({
  g: null,
  start: null,
  end: null,
  path: [],
  serviceResponse: null,
  creeps: [],
  totalPoints: 200,
  marker: null,
  addMessage: null,
  compass: "",
  maxRouteLength: 20000,
  directionsRenderer: null,
  initialize: function (b, h, a, d, c) {
    if (!b) {
      return;
    }
    this.g = b;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    var f = new google.maps.DirectionsService();

    /* autogen added */

    stateManager["Program:f"] = f;

    var e = { origin: a, destination: h, travelMode: google.maps.TravelMode.DRIVING };

    /* autogen added */

    stateManager["Program:e"] = e;

    var g = function (l, j) {
      var q = [];

      /* autogen added */

      stateManager["Program:q"] = q;

      var p = null;

      /* autogen added */

      stateManager["Program:p"] = p;

      for (var m = 0; m < j.path.length; m++) {
        /* autogen added */

        stateManager["Program:m"] = m;

        var r = j.path[m];

        /* autogen added */

        stateManager["Program:r"] = r;

        if (p) {
          /* autogen added */

          StackTrace.instrument(() => {
            q.push({
              distance: google.maps.geometry.spherical.computeDistanceBetween(p, r),
              start: p,
              end: r,
            });
          }, fxnCallCallback("q.push"))();
          /* end autogen added */
        }
        p = r;

        /* autogen added */

        stateManager["Program:p"] = p;
      }
      var k = j.distance / this.totalPoints;

      /* autogen added */

      stateManager["Program:k"] = k;

      var o = k;

      /* autogen added */

      stateManager["Program:o"] = o;

      for (var m = 0; m < q.length; m++) {
        /* autogen added */

        stateManager["Program:m"] = m;

        var s = q[m];

        /* autogen added */

        stateManager["Program:s"] = s;

        var u = (s.start.lat() - s.end.lat()) / s.distance;

        /* autogen added */

        stateManager["Program:u"] = u;

        var t = (s.start.lng() - s.end.lng()) / s.distance;

        /* autogen added */

        stateManager["Program:t"] = t;

        var r = s.start;

        /* autogen added */

        stateManager["Program:r"] = r;

        var n = s.distance;

        /* autogen added */

        stateManager["Program:n"] = n;

        while (o + n >= k) {
          var v = k - o;

          /* autogen added */

          stateManager["Program:v"] = v;

          if (v != 0) {
            r = new google.maps.LatLng(r.lat() - u * v, r.lng() - t * v);

            /* autogen added */

            stateManager["Program:r"] = r;

            n -= v;

            /* autogen added */

            stateManager["Program:n"] = n;
          }

          /* autogen added */

          StackTrace.instrument(() => {
            this.path.push(new RoutePath(r));
          }, fxnCallCallback("this.path.push"))();
          /* end autogen added */
          o = 0;

          /* autogen added */

          stateManager["Program:o"] = o;
        }
        o += n;

        /* autogen added */

        stateManager["Program:o"] = o;
      }

      /* autogen added */

      StackTrace.instrument(() => {
        this.path.push(new RoutePath(q[q.length - 1].end));
      }, fxnCallCallback("this.path.push"))();
      /* end autogen added */
      this.start = this.path[0];

      /* autogen added */

      stateManager["Program:undefined"] = undefined;

      this.end = this.path[this.path.length - 1];

      /* autogen added */

      stateManager["Program:undefined"] = undefined;

      this.serviceResponse = l;

      /* autogen added */

      stateManager["Program:undefined"] = undefined;

      if (d) {
        d(this);
      }
    }.bind(this);

    /* autogen added */

    stateManager["Program:g"] = g;

    /* autogen added */

    StackTrace.instrument(() => {
      new Request({
        url:
          "https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf62488d20864d79704057b53a3dd46ed49c46&start=" +
          a.lng() +
          "," +
          a.lat() +
          "&end=" +
          h.lng() +
          "," +
          h.lat(),
        urlEncoded: false,
        method: "GET",
        headers: { "content-type": "application/json;charset=UTF-8" },
        onSuccess: function (o) {
          var n = JSON.parse(o);

          /* autogen added */

          stateManager["Program:n"] = n;

          if (!n || !n.features || !n.features.length) {
            return c(this);
          }
          var m = n.features[0];

          /* autogen added */

          stateManager["Program:m"] = m;

          var k = {
            bounds: new google.maps.LatLngBounds(
              new google.maps.LatLng(m.bbox[1], m.bbox[0]),
              new google.maps.LatLng(m.bbox[3], m.bbox[2])
            ),
            copyrights: n.metadata["attribution"],
            legs: [
              {
                distance: m.properties["summary"]["distance"],
                start_location: a,
                end_location: h,
                steps: [
                  {
                    distance: m.properties["summary"]["distance"],
                    start_location: a,
                    end_location: h,
                    instructions: "",
                    path: [],
                    travel_mode: google.maps.TravelMode.DRIVING,
                  },
                ],
              },
            ],
            overview_path: [],
            overview_polyline: "",
            warnings: [],
            waypoint_order: [],
          };

          /* autogen added */

          stateManager["Program:k"] = k;

          for (var l in m.geometry["coordinates"]) {
            /* autogen added */

            stateManager["Program:l"] = l;

            var j = m.geometry["coordinates"][l];

            /* autogen added */

            stateManager["Program:j"] = j;

            if (isNaN(j[0]) || isNaN(j[1])) {
              continue;
            }

            /* autogen added */

            StackTrace.instrument(() => {
              k.overview_path.push(new google.maps.LatLng(j[1], j[0]));
            }, fxnCallCallback("k.overview_path.push"))();
            /* end autogen added */
          }
          k.legs[0]["steps"][0]["path"] = k.overview_path;

          /* autogen added */

          stateManager["Program:undefined"] = undefined;

          response = {
            routes: [k],
            request: {
              travelMode: google.maps.TravelMode.DRIVING,
              end_location: h,
              start_location: a,
            },
          };

          /* autogen added */

          stateManager["Program:response"] = response;

          var p = { path: k.overview_path, distance: m.properties["summary"]["distance"] };

          /* autogen added */

          stateManager["Program:p"] = p;

          return g(response, p);
        }.bind(this),
        onFailure: function () {
          /* autogen added */

          StackTrace.instrument(() => {
            console.log("Using Google Maps for directions");

            /* autogen added */

            StackTrace.instrument(() => {}, fxnCallCallback("console.log"))();
            /* end autogen added */
            f.route(e, function (j, i) {
              var k = {};

              /* autogen added */

              stateManager["Program:k"] = k;

              switch (i) {
                case google.maps.DirectionsStatus.OK:
                  k = {
                    path: j.routes[0].overview_path,
                    distance: j.routes[0].legs[0].distance.value,
                  };

                  /* autogen added */

                  stateManager["Program:k"] = k;

                  if (k.distance > this.maxRouteLength) {
                    return c(this);
                  }
                  break;
                case google.maps.DirectionsStatus.ZERO_RESULTS:
                default:
                  return c(this);
              }
              return g(j, k);
            });
          }, fxnCallCallback("f.route"))();
          /* end autogen added */
        }.bind(this),
      }).send();
    }, fxnCallCallback("new Request"))();
    /* end autogen added */
  },
  clone: function () {
    var a = new Route();

    /* autogen added */

    stateManager["Program:a"] = a;

    a.g = this.g;

    /* autogen added */

    stateManager["Program:a"] = a;

    a.start = this.start;

    /* autogen added */

    stateManager["Program:a"] = a;

    a.end = this.end;

    /* autogen added */

    stateManager["Program:a"] = a;

    a.serviceResponse = this.serviceResponse;

    /* autogen added */

    stateManager["Program:a"] = a;

    a.compass = this.compass;

    /* autogen added */

    stateManager["Program:a"] = a;

    /* autogen added */

    StackTrace.instrument(() => {
      this.path.each(function (b) {
        /* autogen added */

        StackTrace.instrument(() => {
          a.path.push(new RoutePath(b.latLng));
        }, fxnCallCallback("a.path.push"))();
        /* end autogen added */
      });
    }, fxnCallCallback("this.path.each"))();
    /* end autogen added */
    return a;
  },
  show: function () {
    this.directionsRenderer = new google.maps.DirectionsRenderer({
      suppressMarkers: true,
      preserveViewport: true,
      polylineOptions: { strokeColor: "#0000ff", strokeOpacity: 0.5 },
    });

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    /* autogen added */

    StackTrace.instrument(() => {
      this.directionsRenderer.setMap(this.g.map);
    }, fxnCallCallback("this.directionsRenderer.setMap"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.directionsRenderer.setDirections(this.serviceResponse);
    }, fxnCallCallback("this.directionsRenderer.setDirections"))();
    /* end autogen added */
  },
  enable: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.directionsRenderer.setOptions({
        polylineOptions: { strokeColor: "#0000ff", strokeOpacity: 1, strokeWeight: 5 },
      });
    }, fxnCallCallback("this.directionsRenderer.setOptions"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.directionsRenderer.setMap(this.g.map);
    }, fxnCallCallback("this.directionsRenderer.setMap"))();
    /* end autogen added */
    this.marker = new google.maps.Marker({
      position: this.start.latLng,
      map: this.g.map,
      icon: new google.maps.MarkerImage(
        this.g.search.image.routeend,
        new google.maps.Size(32, 32),
        new google.maps.Point(0, 32),
        new google.maps.Point(16, 32)
      ),
    });

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    return this;
  },
  remove: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.creeps.each(function (a) {
        /* autogen added */

        StackTrace.instrument(() => {
          a.remove();
        }, fxnCallCallback("a.remove"))();
        /* end autogen added */
      });
    }, fxnCallCallback("this.creeps.each"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.marker.setMap(null);
    }, fxnCallCallback("this.marker.setMap"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.directionsRenderer.setMap(null);
    }, fxnCallCallback("this.directionsRenderer.setMap"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.g.routes.erase(this);
    }, fxnCallCallback("this.g.routes.erase"))();
    /* end autogen added */
  },
  addCreep: function (b) {
    var a = new b(this.g, this);

    /* autogen added */

    stateManager["Program:a"] = a;

    /* autogen added */

    StackTrace.instrument(() => {
      this.creeps.push(a);
    }, fxnCallCallback("this.creeps.push"))();
    /* end autogen added */
    return a;
  },
});

/* autogen added */

stateManager["Program:Route"] = Route;

var Creep = new Class({
  Implements: [Events],
  g: null,
  route: null,
  marker: null,
  markerOffset: 0,
  distanceTravelled: 0,
  health: 100,
  speed: 100,
  reward: 1,
  maxHealth: 100,
  showMoveModulus: 1,
  initialize: function (b, a) {
    this.g = b;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    this.route = a;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    this.health = Math.floor(this.health * this.g.difficultyMultiplier);

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    this.maxHealth = this.health;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;
  },
  show: function () {
    this.marker = new google.maps.Marker({
      position: this.route.start.latLng,
      icon: new google.maps.MarkerImage(
        this.g.search.image.creeps,
        new google.maps.Size(32, 32),
        new google.maps.Point(0, (this.markerOffset + 12) * 32),
        new google.maps.Point(16, 32)
      ),
      map: this.g.map,
      shadow: new google.maps.MarkerImage(
        "images/creep-health.png",
        new google.maps.Size(16, 8),
        new google.maps.Point(0, 0),
        new google.maps.Point(8, 32)
      ),
    });

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    return this;
  },
  move: function () {
    if (this.health <= 0) {
      return;
    }

    /* autogen added */

    StackTrace.instrument(() => {
      this.route.path[this.distanceTravelled].removeCreep(this);
    }, fxnCallCallback("this.route.path[this.distanceTravelled].removeCreep"))();
    /* end autogen added */
    if (this.distanceTravelled >= this.route.path.length - 1) {
      /* autogen added */

      StackTrace.instrument(() => {
        this.endOfRoute();
      }, fxnCallCallback("this.endOfRoute"))();
      /* end autogen added */
      return this;
    }
    this.distanceTravelled++;

    /* autogen added */

    StackTrace.instrument(() => {
      this.route.path[this.distanceTravelled].addCreep(this);
    }, fxnCallCallback("this.route.path[this.distanceTravelled].addCreep"))();
    /* end autogen added */
    if (this.g.timer.multiplier == 1 || !(this.distanceTravelled % this.showMoveModulus)) {
      /* autogen added */

      StackTrace.instrument(() => {
        this.marker.setPosition(this.route.path[this.distanceTravelled].latLng);
      }, fxnCallCallback("this.marker.setPosition"))();
      /* end autogen added */
    }

    /* autogen added */

    StackTrace.instrument(() => {
      this.g.timer.start(this, this.move, this.speed * 2);
    }, fxnCallCallback("this.g.timer.start"))();
    /* end autogen added */
    return this;
  },
  remove: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.route.path[this.distanceTravelled].removeCreep(this);
    }, fxnCallCallback("this.route.path[this.distanceTravelled].removeCreep"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.marker.setMap(null);
    }, fxnCallCallback("this.marker.setMap"))();
    /* end autogen added */
  },
  endOfRoute: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.remove();
    }, fxnCallCallback("this.remove"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.g.removeLife(1);
    }, fxnCallCallback("this.g.removeLife"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.fireEvent("killed");
    }, fxnCallCallback("this.fireEvent"))();
    /* end autogen added */
  },
  hit: function (b) {
    this.health -= b;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    var a = this.marker.getShadow();

    /* autogen added */

    stateManager["Program:a"] = a;

    a.origin.y = Math.round((1 - this.health / this.maxHealth) * 14, 0) * 8;

    /* autogen added */

    StackTrace.instrument(() => {
      /* autogen added */

      stateManager["Program:undefined"] = undefined;

      this.marker.setShadow(a);
    }, fxnCallCallback("this.marker.setShadow"))();
    /* end autogen added */
    if (this.health <= 0) {
      /* autogen added */

      StackTrace.instrument(() => {
        this.g.addMoney(this.reward);

        /* autogen added */

        StackTrace.instrument(() => {}, fxnCallCallback("this.g.addMoney"))();
        /* end autogen added */
        this.remove();

        /* autogen added */

        StackTrace.instrument(() => {}, fxnCallCallback("this.remove"))();
        /* end autogen added */
        this.fireEvent("killed");
      }, fxnCallCallback("this.fireEvent"))();
      /* end autogen added */
    }
  },
});

/* autogen added */

stateManager["Program:Creep"] = Creep;

var CreepAlpha = new Class({ Extends: Creep, markerOffset: 0, health: 150, speed: 50, reward: 1 });

/* autogen added */

stateManager["Program:CreepAlpha"] = CreepAlpha;

var CreepBravo = new Class({ Extends: Creep, markerOffset: 1, health: 250, speed: 50, reward: 3 });

/* autogen added */

stateManager["Program:CreepBravo"] = CreepBravo;

var CreepCharlie = new Class({ Extends: Creep, markerOffset: 2, health: 500, speed: 40, reward: 6 });

/* autogen added */

stateManager["Program:CreepCharlie"] = CreepCharlie;

var CreepDelta = new Class({ Extends: Creep, markerOffset: 3, health: 1000, speed: 50, reward: 12 });

/* autogen added */

stateManager["Program:CreepDelta"] = CreepDelta;

var CreepEcho = new Class({ Extends: Creep, markerOffset: 4, health: 2000, speed: 60, reward: 20 });

/* autogen added */

stateManager["Program:CreepEcho"] = CreepEcho;

var CreepFoxtrot = new Class({ Extends: Creep, markerOffset: 5, health: 3000, speed: 70, reward: 30 });

/* autogen added */

stateManager["Program:CreepFoxtrot"] = CreepFoxtrot;

var CreepGolf = new Class({ Extends: Creep, markerOffset: 6, health: 5000, speed: 90, reward: 35 });

/* autogen added */

stateManager["Program:CreepGolf"] = CreepGolf;

var CreepHotel = new Class({ Extends: Creep, markerOffset: 7, health: 8000, speed: 100, reward: 35 });

/* autogen added */

stateManager["Program:CreepHotel"] = CreepHotel;

var CreepIndia = new Class({ Extends: Creep, markerOffset: 8, health: 75000, speed: 150, reward: 35 });

/* autogen added */

stateManager["Program:CreepIndia"] = CreepIndia;

var Tower = new Class({
  g: null,
  marker: null,
  infoWindow: null,
  infoWindowOpen: null,
  attackRadius: 500,
  attackRadiusCircle: null,
  sizeCircle: null,
  size: 100,
  routeOverlap: [],
  damage: 100,
  attackSpeed: 5,
  cost: 105,
  name: "",
  markerOffset: 0,
  upgrades: [],
  removed: false,
  initialize: function (a, b) {
    this.g = a;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    this.marker = new google.maps.Marker({
      icon: new google.maps.MarkerImage(
        this.g.search.image.towers,
        new google.maps.Size(32, 32),
        new google.maps.Point(0, (this.markerOffset + 2) * 32),
        new google.maps.Point(16, 32)
      ),
      position: b,
      visible: false,
      map: this.g.map,
    });

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    this.attackRadiusCircle = new google.maps.Circle({
      center: b,
      radius: this.attackRadius,
      clickable: false,
      map: this.g.map,
      visible: false,
      fillColor: "#0000AA",
      fillOpacity: 0.1,
      strokeOpacity: 0.2,
    });

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    this.sizeCircle = new google.maps.Circle({
      center: b,
      radius: this.size,
      clickable: false,
      map: this.g.map,
      visible: false,
      fillColor: "#000000",
      fillOpacity: 0.7,
      strokeOpacity: 0.4,
    });

    /* autogen added */

    stateManager["Program:undefined"] = undefined;
  },
  show: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.marker.setVisible(true);
    }, fxnCallCallback("this.marker.setVisible"))();
    /* end autogen added */
    return this;
  },
  hide: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.marker.setVisible(false);
    }, fxnCallCallback("this.marker.setVisible"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.hideAttackRadius();
    }, fxnCallCallback("this.hideAttackRadius"))();
    /* end autogen added */
    return this;
  },
  move: function (a) {
    /* autogen added */

    StackTrace.instrument(() => {
      this.marker.setPosition(a);
    }, fxnCallCallback("this.marker.setPosition"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.attackRadiusCircle.setCenter(a);
    }, fxnCallCallback("this.attackRadiusCircle.setCenter"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.sizeCircle.setCenter(a);
    }, fxnCallCallback("this.sizeCircle.setCenter"))();
    /* end autogen added */
    return this;
  },
  remove: function () {
    this.removed = true;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    /* autogen added */

    StackTrace.instrument(() => {
      this.marker.setMap(null);
    }, fxnCallCallback("this.marker.setMap"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.attackRadiusCircle.setMap(null);
    }, fxnCallCallback("this.attackRadiusCircle.setMap"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.sizeCircle.setMap(null);
    }, fxnCallCallback("this.sizeCircle.setMap"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.g.timer.stopAll(this);
    }, fxnCallCallback("this.g.timer.stopAll"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.g.ui.closeTowerInfoWin(this);
    }, fxnCallCallback("this.g.ui.closeTowerInfoWin"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.g.towers.erase(this);
    }, fxnCallCallback("this.g.towers.erase"))();
    /* end autogen added */
  },
  showAttackRadius: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.attackRadiusCircle.setVisible(true);
    }, fxnCallCallback("this.attackRadiusCircle.setVisible"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.sizeCircle.setVisible(true);
    }, fxnCallCallback("this.sizeCircle.setVisible"))();
    /* end autogen added */
    return this;
  },
  hideAttackRadius: function () {
    return this;

    /* autogen added */

    StackTrace.instrument(() => {
      this.attackRadiusCircle.setVisible(false);
    }, fxnCallCallback("this.attackRadiusCircle.setVisible"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.sizeCircle.setVisible(false);
    }, fxnCallCallback("this.sizeCircle.setVisible"))();
    /* end autogen added */
    return this;
  },
  selected: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.sizeCircle.setOptions({ fillColor: "#ffffff" });
    }, fxnCallCallback("this.sizeCircle.setOptions"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.attackRadiusCircle.setOptions({ strokeOpacity: 0.8 });
    }, fxnCallCallback("this.attackRadiusCircle.setOptions"))();
    /* end autogen added */
  },
  deselected: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.sizeCircle.setOptions({ fillColor: "#000000" });
    }, fxnCallCallback("this.sizeCircle.setOptions"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.attackRadiusCircle.setOptions({ strokeOpacity: 0.2 });
    }, fxnCallCallback("this.attackRadiusCircle.setOptions"))();
    /* end autogen added */
  },
  attack: function (d) {
    if (this.removed) {
      return;
    }

    /* autogen added */

    StackTrace.instrument(() => {
      this.g.timer.stopAll(this);
    }, fxnCallCallback("this.g.timer.stopAll"))();
    /* end autogen added */
    var c = [];

    /* autogen added */

    stateManager["Program:c"] = c;

    /* autogen added */

    StackTrace.instrument(() => {
      this.routeOverlap.each(
        function (e) {
          /* autogen added */

          StackTrace.instrument(() => {
            e.each(
              function (f) {
                /* autogen added */

                StackTrace.instrument(() => {
                  f.creeps.each(
                    function (g) {
                      /* autogen added */

                      StackTrace.instrument(() => {
                        c.push(g);
                      }, fxnCallCallback("c.push"))();
                      /* end autogen added */
                    }.bind(this)
                  );
                }, fxnCallCallback("f.creeps.each"))();
                /* end autogen added */
              }.bind(this)
            );
          }, fxnCallCallback("e.each"))();
          /* end autogen added */
        }.bind(this)
      );
    }, fxnCallCallback("this.routeOverlap.each"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      c.sort(function (f, e) {
        return f.route.path.length - f.distanceTravelled - (e.route.path.length - e.distanceTravelled);
      });
    }, fxnCallCallback("c.sort"))();
    /* end autogen added */
    var b = 0;

    /* autogen added */

    stateManager["Program:b"] = b;

    /* autogen added */

    StackTrace.instrument(() => {
      c.each(
        function (e) {
          if (b >= 1) {
            return;
          }
          b++;

          /* autogen added */

          StackTrace.instrument(() => {
            e.hit(this.damage);
          }, fxnCallCallback("e.hit"))();
          /* end autogen added */
        }.bind(this)
      );
    }, fxnCallCallback("c.each"))();
    /* end autogen added */
    var a = (10 - this.attackSpeed + 1) * 200;

    /* autogen added */

    stateManager["Program:a"] = a;

    if (b) {
      /* autogen added */

      StackTrace.instrument(() => {
        this.g.timer.start(this, this.attack, a);
      }, fxnCallCallback("this.g.timer.start"))();
      /* end autogen added */
    } else {
      if (d && d.failAddEvents) {
        /* autogen added */

        StackTrace.instrument(() => {
          this.addPathEvents();
        }, fxnCallCallback("this.addPathEvents"))();
        /* end autogen added */
      } else {
        /* autogen added */

        StackTrace.instrument(() => {
          this.g.timer.start(this, this.attack, a, { failAddEvents: true });
        }, fxnCallCallback("this.g.timer.start"))();
        /* end autogen added */
      }
    }
  },
  addPathEvents: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.routeOverlap.each(
        function (a) {
          /* autogen added */

          StackTrace.instrument(() => {
            a.each(
              function (b) {
                /* autogen added */

                StackTrace.instrument(() => {
                  b.addTower(this);
                }, fxnCallCallback("b.addTower"))();
                /* end autogen added */
              }.bind(this)
            );
          }, fxnCallCallback("a.each"))();
          /* end autogen added */
        }.bind(this)
      );
    }, fxnCallCallback("this.routeOverlap.each"))();
    /* end autogen added */
  },
  removePathEvents: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.routeOverlap.each(
        function (a) {
          /* autogen added */

          StackTrace.instrument(() => {
            a.each(
              function (b) {
                /* autogen added */

                StackTrace.instrument(() => {
                  b.removeTower(this);
                }, fxnCallCallback("b.removeTower"))();
                /* end autogen added */
              }.bind(this)
            );
          }, fxnCallCallback("a.each"))();
          /* end autogen added */
        }.bind(this)
      );
    }, fxnCallCallback("this.routeOverlap.each"))();
    /* end autogen added */
  },
  drop: function () {
    if (!this.g.removeMoney(this.cost)) {
      /* autogen added */

      StackTrace.instrument(() => {
        this.remove();
      }, fxnCallCallback("this.remove"))();
      /* end autogen added */
      return;
    }

    /* autogen added */

    StackTrace.instrument(() => {
      this.hideAttackRadius();
    }, fxnCallCallback("this.hideAttackRadius"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this._addClickEvent();
    }, fxnCallCallback("this._addClickEvent"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.calculateRouteOverlap();
    }, fxnCallCallback("this.calculateRouteOverlap"))();
    /* end autogen added */
    if (this.g.ui.openTowerInfoWin) {
      /* autogen added */

      StackTrace.instrument(() => {
        this.g.ui.closeTowerInfoWin(this.g.ui.openTowerInfoWin);
      }, fxnCallCallback("this.g.ui.closeTowerInfoWin"))();
      /* end autogen added */
    }

    /* autogen added */

    StackTrace.instrument(() => {
      this.g.timer.start(this, this.attack, 0);
    }, fxnCallCallback("this.g.timer.start"))();
    /* end autogen added */
    if (this.g.towers.length == 0) {
      new Message("top", "info", "Click on the tower to view upgrade options.", { autoHide: 30000 });
    }
  },
  _addClickEvent: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      google.maps.event.addListener(
        this.marker,
        "click",
        function () {
          /* autogen added */

          StackTrace.instrument(() => {
            this.g.ui.showTowerInfoWin(this);
          }, fxnCallCallback("this.g.ui.showTowerInfoWin"))();
          /* end autogen added */
        }.bind(this)
      );
    }, fxnCallCallback("google.maps.event.addListener"))();
    /* end autogen added */
  },
  calculateRouteOverlap: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.g.routes.each(
        function (b, a) {
          /* autogen added */

          StackTrace.instrument(() => {
            this.routeOverlap.push([]);

            /* autogen added */

            StackTrace.instrument(() => {}, fxnCallCallback("this.routeOverlap.push"))();
            /* end autogen added */
            b.path.each(
              function (c) {
                if (
                  google.maps.geometry.spherical.computeDistanceBetween(c.latLng, this.marker.getPosition()) <
                  this.attackRadius
                ) {
                  /* autogen added */

                  StackTrace.instrument(() => {
                    this.routeOverlap[a].push(c);
                  }, fxnCallCallback("this.routeOverlap[a].push"))();
                  /* end autogen added */
                }
              }.bind(this)
            );
          }, fxnCallCallback("b.path.each"))();
          /* end autogen added */
        }.bind(this)
      );
    }, fxnCallCallback("this.g.routes.each"))();
    /* end autogen added */
  },
  checkDroppable: function () {
    var a = true;

    /* autogen added */

    stateManager["Program:a"] = a;

    if (this.g.money < this.cost) {
      a = false;

      /* autogen added */

      stateManager["Program:a"] = a;
    }
    if (a) {
      /* autogen added */

      StackTrace.instrument(() => {
        this.g.towers.each(
          function (b) {
            if (b.removed) {
              return;
            }
            if (
              google.maps.geometry.spherical.computeDistanceBetween(
                b.marker.getPosition(),
                this.marker.getPosition()
              ) <
              this.size + b.size
            ) {
              a = false;

              /* autogen added */

              stateManager["Program:a"] = a;
            }
          }.bind(this)
        );
      }, fxnCallCallback("this.g.towers.each"))();
      /* end autogen added */
    }
    if (a) {
      /* autogen added */

      StackTrace.instrument(() => {
        this.g.foundRoutes.routes.each(
          function (b) {
            /* autogen added */

            StackTrace.instrument(() => {
              b.path.each(
                function (c) {
                  if (
                    google.maps.geometry.spherical.computeDistanceBetween(
                      c.latLng,
                      this.marker.getPosition()
                    ) < this.size
                  ) {
                    a = false;

                    /* autogen added */

                    stateManager["Program:a"] = a;
                  }
                }.bind(this)
              );
            }, fxnCallCallback("b.path.each"))();
            /* end autogen added */
          }.bind(this)
        );
      }, fxnCallCallback("this.g.foundRoutes.routes.each"))();
      /* end autogen added */
    }

    /* autogen added */

    StackTrace.instrument(() => {
      this.attackRadiusCircle.setOptions({
        fillColor: a ? "#0000AA" : "#AA0000",
        fillOpacity: a ? 0.1 : 0.7,
      });
    }, fxnCallCallback("this.attackRadiusCircle.setOptions"))();
    /* end autogen added */
    return a;
  },
  upgrade: function (d) {
    var c = [];

    /* autogen added */

    stateManager["Program:c"] = c;

    for (var b = 0; b < this.upgrades.length; b++) {
      /* autogen added */

      stateManager["Program:b"] = b;

      for (var a = 0; a < this.upgrades[b].length; a++) {
        /* autogen added */

        stateManager["Program:a"] = a;

        if (this.upgrades[b][a].applied) {
          continue;
        }

        /* autogen added */

        StackTrace.instrument(() => {
          c.push(this.upgrades[b][a]);
        }, fxnCallCallback("c.push"))();
        /* end autogen added */
        break;
      }
    }
    for (var b = 0; b < c.length; b++) {
      /* autogen added */

      stateManager["Program:b"] = b;

      if (c[b] == d) {
        return this._applyUpgrade(c[b]);
      }
    }
    return false;
  },
  _applyUpgrade: function (a) {
    if (!this.g.removeMoney(a.cost)) {
      return false;
    }
    this.cost += a.cost;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    a.applied = true;

    /* autogen added */

    stateManager["Program:a"] = a;

    if (a.damage) {
      this.damage += a.damage;

      /* autogen added */

      stateManager["Program:undefined"] = undefined;
    }
    if (a.attackSpeed) {
      this.attackSpeed += a.attackSpeed;

      /* autogen added */

      stateManager["Program:undefined"] = undefined;
    }
    if (a.attackRadius) {
      this.attackRadius += a.attackRadius;

      /* autogen added */

      StackTrace.instrument(() => {
        /* autogen added */

        stateManager["Program:undefined"] = undefined;

        this.attackRadiusCircle.setRadius(this.attackRadius);

        /* autogen added */

        StackTrace.instrument(() => {}, fxnCallCallback("this.attackRadiusCircle.setRadius"))();
        /* end autogen added */
        this.calculateRouteOverlap();
      }, fxnCallCallback("this.calculateRouteOverlap"))();
      /* end autogen added */
    }

    /* autogen added */

    StackTrace.instrument(() => {
      this.g.ui.showTowerInfoWin(this);
    }, fxnCallCallback("this.g.ui.showTowerInfoWin"))();
    /* end autogen added */
    return true;
  },
  getSellCost: function () {
    return Math.round(this.cost * 0.7, 0);
  },
  sell: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.g.addMoney(this.getSellCost(), true);
    }, fxnCallCallback("this.g.addMoney"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.remove();
    }, fxnCallCallback("this.remove"))();
    /* end autogen added */
  },
});

/* autogen added */

stateManager["Program:Tower"] = Tower;

var TowerAlpha = new Class({
  Extends: Tower,
  attackRadius: 700,
  size: 80,
  damage: 90,
  attackSpeed: 5,
  cost: 110,
  name: "Blue Tower",
  markerOffset: 0,
  upgrades: [
    [
      { name: "More Damage 1", damage: 50, cost: 50 },
      { name: "More Damage 2", damage: 100, cost: 100 },
      { name: "More Damage 3", damage: 200, cost: 200 },
    ],
    [
      { name: "Faster 1", attackSpeed: 1, cost: 70 },
      { name: "Faster 2", attackSpeed: 1, cost: 200 },
    ],
  ],
});

/* autogen added */

stateManager["Program:TowerAlpha"] = TowerAlpha;

var TowerBravo = new Class({
  Extends: Tower,
  attackRadius: 500,
  size: 120,
  damage: 100,
  attackSpeed: 7,
  cost: 180,
  name: "Green Tower",
  markerOffset: 1,
  upgrades: [
    [
      { name: "More Damage 1", damage: 60, cost: 70 },
      { name: "More Damage 2", damage: 70, cost: 80 },
      { name: "More Damage 3", damage: 90, cost: 120 },
      { name: "More Damage 4", damage: 200, cost: 300 },
    ],
    [
      { name: "Range 1", attackRadius: 150, cost: 150 },
      { name: "Range 2", attackRadius: 300, cost: 200 },
    ],
  ],
});

/* autogen added */

stateManager["Program:TowerBravo"] = TowerBravo;

var TowerCharlie = new Class({
  Extends: Tower,
  attackRadius: 400,
  size: 120,
  damage: 700,
  attackSpeed: 6,
  cost: 1000,
  name: "Red Tower",
  markerOffset: 2,
  upgrades: [
    [
      { name: "More Damage 1", damage: 250, cost: 500 },
      { name: "More Damage 2", damage: 250, cost: 500 },
      { name: "More Damage 3", damage: 600, cost: 1200 },
    ],
    [
      { name: "Range 1", attackRadius: 150, cost: 1000 },
      { name: "Range 2", attackRadius: 300, cost: 1500 },
    ],
  ],
});

/* autogen added */

stateManager["Program:TowerCharlie"] = TowerCharlie;

var TowerDelta = new Class({
  Extends: Tower,
  attackRadius: 700,
  size: 175,
  damage: 500,
  attackSpeed: 9,
  cost: 1500,
  name: "Yellow Tower",
  markerOffset: 3,
  upgrades: [
    [
      { name: "More Damage 1", damage: 200, cost: 750 },
      { name: "More Damage 2", damage: 400, cost: 2000 },
      { name: "More Damage 3", damage: 400, cost: 2000 },
    ],
    [
      { name: "Range 1", attackRadius: 150, cost: 1000 },
      { name: "Range 2", attackRadius: 200, cost: 1500 },
    ],
  ],
});

/* autogen added */

stateManager["Program:TowerDelta"] = TowerDelta;

var TowerEcho = new Class({
  Extends: Tower,
  attackRadius: 500,
  size: 200,
  damage: 3500,
  attackSpeed: 7,
  cost: 4000,
  name: "Orange Tower",
  markerOffset: 4,
  upgrades: [
    [
      { name: "Faster 1", attackSpeed: 1, cost: 4000 },
      { name: "Faster 2", attackSpeed: 1, cost: 4000 },
    ],
    [
      { name: "Range 1", attackRadius: 150, cost: 2500 },
      { name: "Range 2", attackRadius: 200, cost: 4000 },
    ],
  ],
});

/* autogen added */

stateManager["Program:TowerEcho"] = TowerEcho;

var TowerFoxtrot = new Class({
  Extends: Tower,
  attackRadius: 600,
  size: 300,
  damage: 5000,
  attackSpeed: 3,
  cost: 4000,
  name: "Purple Tower",
  markerOffset: 5,
  upgrades: [
    [
      { name: "More Damage 1", damage: 2000, cost: 3000 },
      { name: "More Damage 2", damage: 2500, cost: 3000 },
    ],
    [
      { name: "Faster 1", attackSpeed: 1, cost: 2500 },
      { name: "Faster 2", attackSpeed: 1, cost: 2500 },
    ],
  ],
});

/* autogen added */

stateManager["Program:TowerFoxtrot"] = TowerFoxtrot;

var Timer = new Class({
  timers: [],
  paused: false,
  multiplier: 1,
  start: function (a, f, c, d) {
    f = f.bind(a);

    /* autogen added */

    stateManager["Program:f"] = f;

    var e = { object: a, callback: f, duration: c, params: d, start: new Date().getTime(), timer: null };

    /* autogen added */

    stateManager["Program:e"] = e;

    if (!this.paused) {
      var b = setTimeout(
        function () {
          /* autogen added */

          StackTrace.instrument(() => {
            this.timers.erase(e);

            /* autogen added */

            StackTrace.instrument(() => {}, fxnCallCallback("this.timers.erase"))();
            /* end autogen added */
            e.callback(e.params);
          }, fxnCallCallback("e.callback"))();
          /* end autogen added */
        }.bind(this),
        c / this.multiplier
      );

      /* autogen added */

      stateManager["Program:b"] = b;

      e.timer = b;

      /* autogen added */

      stateManager["Program:e"] = e;
    }

    /* autogen added */

    StackTrace.instrument(() => {
      this.timers.push(e);
    }, fxnCallCallback("this.timers.push"))();
    /* end autogen added */
  },
  stopAll: function (a) {
    for (var b = 0; b < this.timers.length; b++) {
      /* autogen added */

      stateManager["Program:b"] = b;

      var c = this.timers[b];

      /* autogen added */

      stateManager["Program:c"] = c;

      if (c.object == a) {
        clearTimeout(c.timer);

        /* autogen added */

        StackTrace.instrument(() => {
          this.timers.erase(c);
        }, fxnCallCallback("this.timers.erase"))();
        /* end autogen added */
        b--;
      }
    }
  },
  pause: function () {
    if (this.paused) {
      return this;
    }
    this.paused = true;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    var a = new Date().getTime();

    /* autogen added */

    stateManager["Program:a"] = a;

    /* autogen added */

    StackTrace.instrument(() => {
      this.timers.each(function (b) {
        clearTimeout(b.timer);
      });
    }, fxnCallCallback("this.timers.each"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.timers.each(
        function (d, c) {
          var b = d.duration - (a - d.start) * this.multiplier;

          /* autogen added */

          stateManager["Program:b"] = b;

          if (b <= 0) {
            b = 1;

            /* autogen added */

            stateManager["Program:b"] = b;
          }
          this.timers[c].duration = b;

          /* autogen added */

          stateManager["Program:undefined"] = undefined;
        }.bind(this)
      );
    }, fxnCallCallback("this.timers.each"))();
    /* end autogen added */
    return this;
  },
  resume: function () {
    if (!this.paused) {
      return this;
    }
    var a = this.timers;

    /* autogen added */

    stateManager["Program:a"] = a;

    this.timers = [];

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    this.paused = false;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    /* autogen added */

    StackTrace.instrument(() => {
      a.each(
        function (b) {
          /* autogen added */

          StackTrace.instrument(() => {
            this.start(b.object, b.callback, b.duration, b.params);
          }, fxnCallCallback("this.start"))();
          /* end autogen added */
        }.bind(this)
      );
    }, fxnCallCallback("a.each"))();
    /* end autogen added */
    return this;
  },
  setMultiplier: function (a) {
    if (this.paused) {
      this.multiplier = a;

      /* autogen added */

      stateManager["Program:undefined"] = undefined;

      return this;
    }

    /* autogen added */

    StackTrace.instrument(() => {
      this.pause();
    }, fxnCallCallback("this.pause"))();
    /* end autogen added */
    this.multiplier = a;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;

    /* autogen added */

    StackTrace.instrument(() => {
      this.resume();
    }, fxnCallCallback("this.resume"))();
    /* end autogen added */
    return this;
  },
});

/* autogen added */

stateManager["Program:Timer"] = Timer;

var GameRound = new Class({
  Implements: [Events],
  g: null,
  run: null,
  type: "normal",
  creeps: 0,
  allCreeps: [],
  showMoveModulus: 1,
  initialize: function (a) {
    this.run = function () {
      a.bind(this)();
      this.showMoveModulus = Math.min(3, Math.max(1, Math.ceil((this.creeps - 20) / 30)));

      /* autogen added */

      stateManager["Program:undefined"] = undefined;
    }.bind(this);

    /* autogen added */

    stateManager["Program:undefined"] = undefined;
  },
  addCreep: function (a, c, b) {
    this.creeps++;

    /* autogen added */

    StackTrace.instrument(() => {
      this.g.timer.start(
        this,
        function () {
          var d = a.addCreep(c);

          /* autogen added */

          StackTrace.instrument(() => {
            /* autogen added */

            stateManager["Program:d"] = d;

            d.addEvent("killed", this.removeCreep.bind(this));
          }, fxnCallCallback("d.addEvent"))();
          /* end autogen added */
          d.showMoveModulus = this.showMoveModulus;

          /* autogen added */

          StackTrace.instrument(() => {
            /* autogen added */

            stateManager["Program:d"] = d;

            d.show().move();
          }, fxnCallCallback("d.show"))();
          /* end autogen added */
        }.bind(this),
        b
      );
    }, fxnCallCallback("this.g.timer.start"))();
    /* end autogen added */
  },
  removeCreep: function () {
    this.creeps--;
    if (this.creeps <= 0) {
      /* autogen added */

      StackTrace.instrument(() => {
        this.g.timer.stopAll(this);
      }, fxnCallCallback("this.g.timer.stopAll"))();
      /* end autogen added */
      if (this.g.lives > 0) {
        /* autogen added */

        StackTrace.instrument(() => {
          this.fireEvent("roundOver");
        }, fxnCallCallback("this.fireEvent"))();
        /* end autogen added */
      }
    }
  },
});

/* autogen added */

stateManager["Program:GameRound"] = GameRound;

var GameRoundRoute = new Class({
  Extends: GameRound,
  type: "auto",
  completionMoney: 0,
  routeBuilder: null,
  initialize: function (a) {
    this.routeBuilder = a;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;
  },
  run: function () {
    /* autogen added */

    StackTrace.instrument(() => {
      this.g.addRoute(this.routeBuilder.getNextRoute());
    }, fxnCallCallback("this.g.addRoute"))();
    /* end autogen added */

    /* autogen added */

    StackTrace.instrument(() => {
      this.fireEvent("roundOver");
    }, fxnCallCallback("this.fireEvent"))();
    /* end autogen added */
  },
});

/* autogen added */

stateManager["Program:GameRoundRoute"] = GameRoundRoute;

var Rounds = new Class({
  roundNumModifier: 0,
  routeBuilder: null,
  creepTypes: [CreepAlpha, CreepBravo, CreepCharlie, CreepDelta, CreepEcho],
  initialize: function (a) {
    this.routeBuilder = a;

    /* autogen added */

    stateManager["Program:undefined"] = undefined;
  },
  get: function (roundNum) {
    switch (roundNum) {
      case 0:
        return new GameRoundRoute(this.routeBuilder);
      case 11:
        this.roundNumModifier++;
        return new GameRoundRoute(this.routeBuilder);
      case 22:
        this.roundNumModifier++;
        return new GameRoundRoute(this.routeBuilder);
      case 33:
        this.roundNumModifier++;
        return new GameRoundRoute(this.routeBuilder);
    }
    roundNum -= this.roundNumModifier;

    /* autogen added */

    stateManager["Program:roundNum"] = roundNum;

    var roundData = this.getRoundData(roundNum);

    /* autogen added */

    stateManager["Program:roundData"] = roundData;

    if (roundData) {
      return new GameRound(function () {
        /* autogen added */

        StackTrace.instrument(() => {
          this.g.ui.updateRound(roundNum);

          /* autogen added */

          StackTrace.instrument(() => {}, fxnCallCallback("this.g.ui.updateRound"))();
          /* end autogen added */
          Object.each(
            roundData,
            function (timerData, creepType) {
              creepType = eval("Creep" + creepType);

              /* autogen added */

              stateManager["Program:creepType"] = creepType;

              var times = this.g.rounds.parseTimer(timerData);

              /* autogen added */

              StackTrace.instrument(() => {
                /* autogen added */

                stateManager["Program:times"] = times;

                times.each(
                  function (time) {
                    for (var routeIndex = 0; routeIndex < this.g.routes.length; routeIndex++) {
                      /* autogen added */

                      StackTrace.instrument(() => {
                        /* autogen added */

                        stateManager["Program:routeIndex"] = routeIndex;

                        this.addCreep(this.g.routes[routeIndex], creepType, 500 * time);
                      }, fxnCallCallback("this.addCreep"))();
                      /* end autogen added */
                    }
                  }.bind(this)
                );
              }, fxnCallCallback("times.each"))();
              /* end autogen added */
            }.bind(this)
          );
        }, fxnCallCallback("Object.each"))();
        /* end autogen added */
      });
    }
    return new GameRound(function () {
      /* autogen added */

      StackTrace.instrument(() => {
        this.g.ui.updateRound(roundNum + 1);
      }, fxnCallCallback("this.g.ui.updateRound"))();
      /* end autogen added */
      var timerCount = [0, 0, 0, 0];

      /* autogen added */

      stateManager["Program:timerCount"] = timerCount;

      for (var creepType = 1; creepType <= this.g.rounds.creepTypes.length; creepType++) {
        /* autogen added */

        stateManager["Program:creepType"] = creepType;

        if (roundNum < (creepType - 1) * 5) {
          continue;
        }
        var creeps = Math.max(
          0,
          Math.round(
            (Math.sin(
              (Math.PI * (roundNum + 5 - this.g.rounds.roundNumModifier * 2)) / 40 -
                (Math.PI * (creepType - 1)) / 5
            ) *
              30) /
              this.g.rounds.roundNumModifier
          ),
          0
        );

        /* autogen added */

        stateManager["Program:creeps"] = creeps;

        for (var routeIndex = 0; routeIndex < this.g.routes.length; routeIndex++) {
          /* autogen added */

          stateManager["Program:routeIndex"] = routeIndex;

          for (var i = 0; i < creeps; i++) {
            /* autogen added */

            StackTrace.instrument(() => {
              /* autogen added */

              stateManager["Program:i"] = i;

              this.addCreep(
                this.g.routes[routeIndex],
                this.g.rounds.creepTypes[creepType - 1],
                500 * ++timerCount[routeIndex]
              );
            }, fxnCallCallback("this.addCreep"))();
            /* end autogen added */
          }
        }
      }
    });
  },
  getRoundData: function (a) {
    switch (a) {
      case 1:
        return { Alpha: "5@3" };
      case 2:
        return { Alpha: "10@3" };
      case 3:
        return { Alpha: "20@3" };
      case 4:
        return { Alpha: "10@2" };
      case 5:
        return { Alpha: "20@2" };
      case 6:
        return { Alpha: "30@1" };
      case 7:
        return { Alpha: "10@2", Bravo: "2@4+22" };
      case 8:
        return { Alpha: "20@2", Bravo: "5@3+22" };
      case 9:
        return { Alpha: "20@2", Bravo: "10@3+22" };
      case 10:
        return { Alpha: "20@1", Bravo: "15@2+20" };
      case 11:
        return { Alpha: "30@2" };
      case 12:
        return { Alpha: "10@2", Bravo: "15@3+20" };
      case 13:
        return { Alpha: "10@1", Bravo: "20@3+5" };
      case 14:
        return { Bravo: "10@2", Charlie: "4@4+15" };
      case 15:
        return { Bravo: "20@2", Charlie: "6@4+15" };
      case 16:
        return { Bravo: "10@1", Charlie: "10@3+10" };
      case 17:
        return { Bravo: "10@1", Charlie: "20@3" };
      case 18:
        return { Charlie: "30@2" };
      case 19:
        return { Bravo: "10@1", Charlie: "20@1+5" };
      case 20:
        return { Alpha: "20@1", Bravo: "20@1+20", Charlie: "20@1+40" };
      case 21:
        return { Delta: "10@3" };
      case 22:
        return { Charlie: "10@2", Delta: "10@2+20" };
      case 23:
        return { Delta: "20@2" };
      case 24:
        return { Charlie: "15@2", Delta: "20@2+10" };
      case 25:
        return { Delta: "15@1" };
      case 26:
        return { Bravo: "10@1", Charlie: "10@1+10", Delta: "10@1+20" };
      case 27:
        return { Delta: "20@2", Echo: "5@4+40" };
      case 28:
        return { Delta: "10@2", Echo: "10@3+40" };
      case 29:
        return { Echo: "15@2" };
      case 30:
        return { Alpha: "5@1", Bravo: "5@1+5", Charlie: "10@1+10", Delta: "5@1+20", Echo: "5@2+30" };
      case 31:
        return { Foxtrot: "5@4" };
      case 32:
        return { Foxtrot: "10@4" };
      case 33:
        return { Foxtrot: "10@2" };
      case 34:
        return { Foxtrot: "20@3", Golf: "2@6+60" };
      case 35:
        return { Foxtrot: "20@2", Golf: "5@4+30" };
      case 36:
        return { Foxtrot: "10@2", Golf: "10@4+20" };
      case 37:
        return { Golf: "20@3" };
      case 38:
        return { Foxtrot: "10@2", Golf: "20@4+20" };
      case 39:
        return { Echo: "10@1", Foxtrot: "10@2+10", Golf: "10@2+30" };
      case 40:
        return { Echo: "10@1", Foxtrot: "20@1+20", Golf: "10@2+50", Hotel: "1@1 2@10+70" };
      case 41:
        return { Golf: "10@2", Hotel: "3@8+20" };
      case 42:
        return { Golf: "20@2", Hotel: "5@7+30" };
      case 43:
        return { Golf: "20@2", Hotel: "5@5+30" };
      case 44:
        return { Foxtrot: "20@1", Golf: "10@2+20", Hotel: "8@5+35" };
      case 45:
        return {
          Alpha: "5@1 5@1+30",
          Bravo: "5@1 5@1+30",
          Charlie: "5@1 5@1+30",
          Delta: "5@1 5@1+30",
          Echo: "5@1 5@1+30",
          Foxtrot: "5@1 5@1+30",
        };
      case 46:
        return { Hotel: "20@5" };
      case 47:
        return { Golf: "10@2", Hotel: "10@3+20" };
      case 48:
        return { Golf: "10@1", Hotel: "15@4+10" };
      case 49:
        return { Foxtrot: "20@1", Golf: "10@2+20", Hotel: "20@4+35" };
      case 50:
        return {
          Alpha: "5@1 5@1+90",
          Bravo: "5@1 5@1+90",
          Charlie: "5@1 5@1+90",
          Delta: "5@1 5@1+90",
          Echo: "5@1 5@1+90",
          Foxtrot: "5@1 5@1+90",
          Golf: "10@1+5 5@1+90",
          Hotel: "20@3+15 2@3+90",
          India: "2@15+75",
        };
      default:
        return {
          Alpha: this._calc(a, 1),
          Bravo: this._calc(a, 2),
          Charlie: this._calc(a, 3),
          Delta: this._calc(a, 4),
          Echo: this._calc(a, 5),
          Foxtrot: this._calc(a, 6),
          Golf: this._calc(a, 7),
          Hotel: this._calc(a, 8),
          India: this._calc(a, 9),
        };
    }
    return false;
  },
  _calc: function (b, a) {
    return (
      Math.round(
        (Math.sin((((b - a) % 10) * 6) / a) + 1) * (b / Math.pow(a + 1, 1.7)) +
          (1.3 ^ (b / (13 - (a % 10)) / 10))
      ) + "@2"
    );
  },
  parseTimer: function (a) {
    var c = [];

    /* autogen added */

    stateManager["Program:c"] = c;

    if (!a) {
      return c;
    }
    var b = a.match(/([0-9]+@[0-9]+(\+[0-9]+)?)/g);

    /* autogen added */

    stateManager["Program:b"] = b;

    /* autogen added */

    StackTrace.instrument(() => {
      b.each(function (e) {
        var g = e.match(/([0-9]+)@([0-9]+)(\+([0-9]+))?/);

        /* autogen added */

        stateManager["Program:g"] = g;

        for (var f = 0; f < g[1]; f++) {
          /* autogen added */

          stateManager["Program:f"] = f;

          var d = 0;

          /* autogen added */

          stateManager["Program:d"] = d;

          if (g[4]) {
            d = parseInt(g[4]);

            /* autogen added */

            stateManager["Program:d"] = d;
          }

          /* autogen added */

          StackTrace.instrument(() => {
            c.push(f * g[2] + d);
          }, fxnCallCallback("c.push"))();
          /* end autogen added */
        }
      });
    }, fxnCallCallback("b.each"))();
    /* end autogen added */
    return c;
  },
});

/* autogen added */

StackTrace.instrument(() => {
  /* autogen added */

  stateManager["Program:Rounds"] = Rounds;

  window.addEvent("load", function () {
    var a = new Game($("game"));

    /* autogen added */

    stateManager["Program:a"] = a;

    a.gameClass = Game;

    /* autogen added */

    stateManager["Program:a"] = a;

    Game = null;

    /* autogen added */

    stateManager["Program:Game"] = Game;
  });
}, fxnCallCallback("window.addEvent"))()(
  /* end autogen added */
  function (e, a, f) {
    var c,
      b = e.getElementsByTagName(a)[0];

    /* autogen added */

    stateManager["Program:c"] = c;

    /* autogen added */

    stateManager["Program:b"] = b;

    if (e.getElementById(f)) {
      return;
    }
    c = e.createElement(a);

    /* autogen added */

    stateManager["Program:c"] = c;

    c.id = f;

    /* autogen added */

    stateManager["Program:c"] = c;

    c.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=267555096654594";

    /* autogen added */

    StackTrace.instrument(() => {
      /* autogen added */

      stateManager["Program:c"] = c;

      b.parentNode.insertBefore(c, b);
    }, fxnCallCallback("b.parentNode.insertBefore"))();
    /* end autogen added */
  }
)(document, "script", "facebook-jssdk");
window.___gcfg = { lang: "en-GB" };

/* autogen added */

twitter = StackTrace.instrument(twitter, fxnCallCallback("twitter"));

/* autogen added */

stateManager["Program:window"] = window;

function twitter(e, a, f) {
  var c,
    b = e.getElementsByTagName(a)[0];

  /* autogen added */

  stateManager["Program:twitter:b"] = b;

  /* autogen added */

  stateManager["Program:twitter:c"] = c;

  if (!e.getElementById(f)) {
    c = e.createElement(a);

    /* autogen added */

    stateManager["Program:twitter:c"] = c;

    c.id = f;

    /* autogen added */

    stateManager["Program:twitter:c"] = c;

    c.src = "//platform.twitter.com/widgets.js";

    /* autogen added */

    stateManager["Program:twitter:c"] = c;

    /* autogen added */

    StackTrace.instrument(() => {
      b.parentNode.insertBefore(c, b);
    }, fxnCallCallback("b.parentNode.insertBefore"))();
    /* end autogen added */
  }
}
twitter(document, "script", "twitter-wjs");
var _gaq = _gaq || [];

/* autogen added */

StackTrace.instrument(() => {
  /* autogen added */

  stateManager["Program:_gaq"] = _gaq;

  _gaq.push(["_setAccount", "UA-29746608-1"]);

  /* autogen added */

  StackTrace.instrument(() => {}, fxnCallCallback("_gaq.push"))();
  /* end autogen added */
  _gaq.push(["_trackPageview"]);
}, fxnCallCallback("_gaq.push"))()(
  /* end autogen added */
  function () {
    var b = document.createElement("script");

    /* autogen added */

    stateManager["Program:b"] = b;

    b.type = "text/javascript";

    /* autogen added */

    stateManager["Program:b"] = b;

    b.async = true;

    /* autogen added */

    stateManager["Program:b"] = b;

    b.src =
      ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";

    /* autogen added */

    stateManager["Program:b"] = b;

    var a = document.getElementsByTagName("script")[0];

    /* autogen added */

    StackTrace.instrument(() => {
      /* autogen added */

      stateManager["Program:a"] = a;

      a.parentNode.insertBefore(b, a);
    }, fxnCallCallback("a.parentNode.insertBefore"))();
    /* end autogen added */
  }
)();
