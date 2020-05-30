var Message = new Class({
    Implements: [Events, Options],
    container: null,
    action: null,
    position: "top",
    initialize: function (a, c, e, b) {
        this.setOptions(b);
        this.position = a;
        this.container = $("message-element").clone();
        this.container.addClass(a);
        var d = this.container.getElement(".content");
        d.addClass(c);
        if (typeof e == "string") {
            e = new Element("div").set("html", e);
        }
        e.inject(d);
        this._addEvents();
        this.container.inject(document.body);
        if (this.container.hasClass("fullscreen")) {
            d.setStyle(
                "margin-top",
                Math.max(10, document.body.getSize().y / 2 - d.getSize().y / 2 - 50) + "px"
            );
            if (d.getSize().y > document.body.getSize().y - 100 && e.getElement(".page-content")) {
                e.getElement(".page-content").setStyles({
                    overflow: "auto",
                    height: Math.max(10, document.body.getSize().y - 100) + "px"
                });
            }
        }
        if (a == "top") {
            this.action = new Fx.Slide(d, { hideOverflow: false });
            this.action.hide();
            this.action.slideIn();
        } else {
            this.action = new Fx.Tween(this.container, { property: "opacity" });
            this.action.set(0);
            this.action.start(1);
        }
        if (this.options.autoHide) {
            this.close.delay(this.options.autoHide, this);
        }
        if (this.options.noCloseButton) {
            this.container.addClass("no-default-close-button");
        }
    },
    _addEvents: function () {
        this.container.getElements(".close").addEvent("click", this.close.bind(this));
        this.container.getElements(".action").addEvent(
            "click",
            function () {
                this.fireEvent("action", this.container);
            }.bind(this)
        );
        this.container.getElements(".action-enter").addEvent(
            "keyup",
            function (a) {
                if (a.key == "enter") {
                    this.fireEvent("action", this.container);
                }
            }.bind(this)
        );
        this.container.getElements(".action-click").addEvent(
            "click",
            function (a) {
                this.fireEvent("action", [this.container, a.target]);
            }.bind(this)
        );
        this.container.getElements(".action-facebook").addEvent(
            "click",
            function (a) {
                this.fireEvent("social", "facebook");
            }.bind(this)
        );
    },
    close: function () {
        var a;
        if (this.position == "top") {
            a = this.action.slideOut();
        } else {
            a = this.action.start(1, 0);
        }
        a.chain(
            function () {
                this.container.destroy();
            }.bind(this)
        );
        this.fireEvent("closed");
    }
});
var LocationSearch = new Class({
    g: null,
    image: {
        creeps: "images/markers.png",
        towers: "images/markers.png",
        home: "images/markers.png",
        routeend: "images/markers.png"
    },
    initialize: function (a) {
        this.g = a;
    },
    search: function (a) {
        switch (a.toLowerCase()) {
            case "blubolt":
            case "blu bolt":
            case "bluebolt":
            case "blue bolt":
                this.image.home = this.image.towers = "images/markers/blubolt.png";
                return new google.maps.LatLng(51.38355, -2.363772);
            case "riot":
            case "riothq":
            case "riot hq":
            case "theriothq":
                this.image.home = this.image.towers = "images/markers/riot.png";
                return new google.maps.LatLng(51.383366, -2.36249);
            case "buckingham palace":
                this.image.home = "images/markers/buckingham-palace.png";
                return new google.maps.LatLng(51.501994, -0.139952);
            case "the white house":
                this.image.home = "images/markers/white-house.png";
                return new google.maps.LatLng(38.897702, -77.036522);
            case "the vatican":
                this.image.home = "images/markers/vatican.png";
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
                return new google.maps.LatLng(55.853206, -4.309256);
            case "cats":
            case "kittens":
            case "trolls":
            case "cat":
            case "kitten":
            case "troll":
                this.image.towers = "images/markers/cats.png";
                return new google.maps.LatLng(51.381416, -2.358924);
            case "cheezburger":
            case "cheez burger":
            case "failblog":
            case "fail blog":
                this.image.towers = "images/markers/cats.png";
                this.image.home = "images/markers/cheezburger.png";
                return new google.maps.LatLng(47.62104, -122.35935);
            case "olympic stadium":
            case "olympic stadium london":
            case "olympic stadium, london":
                this.image.towers = "images/markers/olympics.png";
                this.image.home = "images/markers/olympics.png";
                return new google.maps.LatLng(51.5386, -0.01645);
        }
        return false;
    },
    setLocation: function (a, b) {
        this.g.ui.updateTowerImages();
    }
});
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
        this.container = $(a);
        this.initMap();
        this.search = new LocationSearch(this);
        this.ui = new GameInterface(this, this.container);
        this.updateCopyrights();
        this.ui.startGame(
            function (d, c, b) {
                this.search.setLocation(c, d);
                this.stronghold = d;
                this.foundRoutes = b;
                this.showStronghold();
                this.rounds = new Rounds(b);
                this.nextRound();
                _gaq.push(["_trackEvent", "game", "play", d.lat() + "," + d.lng()]);
            }.bind(this)
        );
    },
    nextRound: function () {
        var a = this.rounds.get(++this.currentRound);
        if (!a) {
            this.win();
            return;
        }
        a.g = this;
        a.addEvent("roundOver", this.nextRound.bind(this));
        if (a.type == "normal") {
            if (this.moneyRounds++ && !this.hasWon) {
                this.addMoney(this.moneyRounds * 4 + 50);
            }
            this.routes.each(function (c) {
                c.creeps = [];
            });
            this.ui.nextRound();
            this.ui.fastForwardOff();
            this.timer.pause();
        }
        if (this.currentRound == 54) {
            this.win();
        }
        var b = this.currentRound - 54;
        if (b > 0 && b % 5 == 0) {
            this.difficultyMultiplier += 0.2;
        }
        a.run();
    },
    geocode: function (b, e, c) {
        var a = this.search.search(b);
        if (a) {
            return e(a, b);
        }
        var d = new google.maps.Geocoder();
        d.geocode({ address: b }, function (g, f) {
            if (f == google.maps.GeocoderStatus.OK) {
                e(g[0].geometry.location, b);
            } else {
                c();
            }
        });
    },
    addRoute: function (a) {
        this.routes.push(a);
        this.towers.each(function (c) {
            c.calculateRouteOverlap();
            c.removePathEvents();
            c.addPathEvents();
        });
        a.enable();
        if (a.addMessage) {
            new Message(a.addMessage[0], a.addMessage[1], a.addMessage[2], a.addMessage[3]);
        }
        var b = new google.maps.LatLngBounds();
        this.routes.each(function (c) {
            c.path.each(function (d) {
                b.extend(d.latLng);
            });
        });
        this.map.fitBounds(b);
        return a;
    },
    initMap: function () {
        var a = this._getMapTypes();
        this.map = new google.maps.Map(this.container.getElement(".map"), {
            center: new google.maps.LatLng(54.5, -3.2),
            zoom: 6,
            mapTypeId: a[0],
            streetViewControl: false,
            mapTypeControlOptions: { mapTypeIds: a }
        });
        this._addMapTypes();
    },
    _getMapTypes: function () {
        return [google.maps.MapTypeId.ROADMAP, "watercolor", google.maps.MapTypeId.SATELLITE];
    },
    _addMapTypes: function () {
        function a(h, e, d) {
    var g = h.y;
    var c = h.x;
    var f = 1 << e;

    if (g < 0 || g >= f) {
        return null;
    }

    if (c < 0 || c >= f) {
        c = (c % f + f) % f;
    }

    return d({
        x: c,
        y: g
    }, e);
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
            credit: "Stamen"
        };
        this.map.mapTypes.set("watercolor", new google.maps.ImageMapType(b));
        google.maps.event.addListener(this.map, "maptypeid_changed", this.updateCopyrights.bind(this));
        copyrightNode = document.createElement("div");
        copyrightNode.set("id", "copyright-control");
        copyrightNode.index = 0;
        this.copyright = copyrightNode;
        this.map.controls[google.maps.ControlPosition.BOTTOM_RIGHT].push(copyrightNode);
        var b = {
            getTileUrl: function (d, c) {
                return a(d, c, function (f, e) {
                    return (
                        "http://khmdbs0.google.com/pm?v=8&src=app&x=" + f.x + "&y=" + f.y + "&z=" + e + "&s="
                    );
                });
            },
            tileSize: new google.maps.Size(256, 256),
            isPng: false,
            maxZoom: 14,
            minZoom: 0,
            radius: 1738000,
            name: "Treasure",
            credit: "Google"
        };
        this.map.mapTypes.set("treasure", new google.maps.ImageMapType(b));
    },
    updateCopyrights: function () {
        var a = "Game &copy; Duncan Barclay. ";
        switch (this.map.getMapTypeId()) {
            case "watercolor":
                a +=
                    'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.';
                break;
        }
        a += ' <a class="copyright-link">(full info)</a>';
        this.copyright.set("html", a);
        this.ui.initMiscButtons(this.copyright);
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
            )
        });
        return this;
    },
    addLives: function (a) {
        this.lives += a;
        this.container.getElements(".controls .lives .count").set("text", this.lives);
    },
    removeLife: function (a) {
        this.lives -= a;
        this.container.getElements(".controls .lives .count").set("text", this.lives);
        if (this.lives <= 0) {
            this.lose();
        }
    },
    win: function () {
        this.ui.win();
        this.hasWon = true;
        this.analytics("win", this.moneyRounds);
    },
    lose: function () {
        this.gameOver();
        this.ui.lose();
        this.analytics("lose", this.moneyRounds);
    },
    gameOver: function () {
        this.timer.pause();
    },
    addMoney: function (b, a) {
        if (this.hasWon && !a) {
            var c = Math.max(10, 25 - (this.moneyRounds - 54)) / 100;
            b = Math.floor(b * c);
        }
        this.money += b;
        this.ui.updateMoney();
        return this;
    },
    removeMoney: function (a) {
        if (this.money >= a) {
            this.money -= a;
            this.ui.updateMoney();
            return true;
        } else {
            return false;
        }
    },
    analytics: function (a, b) {
        _gaq.push(["_trackEvent", "game", a, "", b]);
    },
    restart: function () {
        this.towers.each(function (b) {
            b.remove();
        });
        this.routes.each(function (b) {
            b.remove();
        });
        this.ui.restart();
        var a = new this.gameClass(this.container);
        a.gameClass = this.gameClass;
    }
});
var GameInterface = new Class({
    g: null,
    content: null,
    container: null,
    timerMultiplier: 4,
    openTowerInfoWin: null,
    initialize: function (b, a) {
        this.g = b;
        this.container = a;
        this.content = this.container.get("html");
        this._addDocumentPauseEvents();
        this._initTowers();
        this._initPause();
        this._initFastForward();
        this._initNextRound();
        this.initMiscButtons(this.container);
        this.updateLives();
        this.updateMoney();
    },
    startGame: function (b) {
        var a = this._fullscreenPopup("info", "startup", { noCloseButton: true });
        this.startLock = false;
        a.addEvent(
            "action",
            function (c, e) {
                if (this.startLock) {
                    return;
                }
                this.startLock = true;
                var f = function (i, h) {
                    var g = new RouteBuilder(this.g, i);
                    g.generate(
                        function () {
                            a.close();
                            for (var k = g.routes.length; k-- > 0; ) {
                                g.routes[k].show();
                            }
                            var l = 200;
                            var j = 100;
                            switch (a.container.getElement(".difficulty-picker").get("value").toLowerCase()) {
                                case "insane":
                                    j = 10;
                                case "hard":
                                    this.g.difficultyMultiplier = 1.6;
                                    break;
                                case "medium":
                                    this.g.difficultyMultiplier = 1.3;
                                    break;
                            }
                            this.g.addMoney(l);
                            this.g.addLives(j);
                            b(i, h, g);
                        }.bind(this),
                        function () {
                            this.startLock = false;
                            c.getElement(".error").set(
                                "html",
                                "We couldn't find any roads around that location for creeps to move along.  Please try somewhere else."
                            );
                            c.getElement(".error").show();
                        }.bind(this)
                    );
                }.bind(this);
                var d = "";
                if (e && e.hasClass("known-location")) {
                    d = e.get("text");
                    if (this.g.map.getMapTypeId() == google.maps.MapTypeId.ROADMAP) {
                        this.g.map.setMapTypeId(google.maps.MapTypeId.HYBRID);
                    }
                } else {
                    d = c.getElement(".search").get("value");
                }
                this.g.geocode(
                    d,
                    f,
                    function () {
                        this.startLock = false;
                        c.getElement(".error").set(
                            "html",
                            "We couldn't find that location.  Please try to be more specific, or search for somewhere else."
                        );
                        c.getElement(".error").show();
                    }.bind(this)
                );
            }.bind(this)
        );
        this.initMiscButtons(a.container);
        if (window.location.hash) {
            a.container.getElement(".search").set("value", window.location.hash.substring(1));
            a.container.getElement(".action").fireEvent("click");
        }
    },
    _addDocumentPauseEvents: function () {
        var a = "";
        if (typeof document.hidden !== "undefined") {
            a = "visibilitychange";
        } else {
            if (typeof document.mozHidden !== "undefined") {
                a = "mozvisibilitychange";
            } else {
                if (typeof document.msHidden !== "undefined") {
                    a = "msvisibilitychange";
                } else {
                    if (typeof document.webkitHidden !== "undefined") {
                        a = "webkitvisibilitychange";
                    }
                }
            }
        }
        document.addEventListener(
            a,
            function () {
                this.pause();
            }.bind(this)
        );
    },
    _initPause: function () {
        this.container.getElement(".controls .pause").addEvent(
            "click",
            function (a) {
                if (this.g.timer.paused) {
                    this.g.timer.resume();
                    this._stopPause();
                } else {
                    this.pause();
                }
            }.bind(this)
        );
    },
    _stopPause: function () {
        this.container.getElement(".controls .pause").removeClass("on");
        this.container.getElement(".controls .pause").set("text", "Pause");
    },
    pause: function () {
        this.g.timer.pause();
        this.container.getElement(".controls .pause").addClass("on");
        this.container.getElement(".controls .pause").set("text", "Resume");
    },
    fastForwardOff: function () {
        this.g.timer.setMultiplier(1);
        this.container.getElement(".controls .fast-forward").removeClass("on");
    },
    _initFastForward: function () {
        this.container.getElement(".controls .fast-forward").addEvent(
            "click",
            function (a) {
                if (this.g.timer.multiplier > 1) {
                    this.fastForwardOff();
                } else {
                    this.g.timer.setMultiplier(this.timerMultiplier);
                    a.target.addClass("on");
                }
            }.bind(this)
        );
    },
    updateLives: function () {
        this.container.getElements(".controls .lives .count").set("text", this.g.lives);
    },
    updateRound: function (a) {
        this.container.getElements(".controls .round .count").set("text", a);
    },
    updateMoney: function () {
        this.container.getElements(".controls .money .amount").set("text", this.g.money);
        this.container.getElements(".controls .create-tower").each(
            function (b) {
                var a = this._getTowerType(b);
                if (a.prototype.cost > this.g.money) {
                    b.addClass("disabled");
                } else {
                    b.removeClass("disabled");
                }
            }.bind(this)
        );
        if (this.openTowerInfoWin) {
            this.updateTowerInfoWin();
        }
    },
    _initNextRound: function () {
        this.container
            .getElement(".controls .next-round")
            .set("slide", { duration: 1, transition: false })
            .slide("out");
        this.container.getElement(".controls .next-round .button").addEvent(
            "click",
            function () {
                this.container.getElement(".controls .next-round-popup").hide();
                this.container
                    .getElement(".controls .next-round")
                    .set("slide", { duration: "short", transition: "expo:out" });
                this.container.getElement(".controls .next-round").slide("out");
                this.g.timer.resume();
                this._stopPause();
                if ((this.g.moneyRounds + 1) % 2) {
                    this.g.analytics("nextRound", this.g.moneyRounds);
                }
            }.bind(this)
        );
    },
    nextRound: function () {
        this.container
            .getElement(".controls .next-round")
            .setStyle("visibility", "visible")
            .set("slide", { duration: "long", transition: "bounce:out" });
        this.container.getElement(".controls .next-round").slide("in");
        if (this.g.currentRound == 1) {
            this.container.getElement(".controls .next-round-popup").show();
            this.container.getElement(".tower-info-popup").show();
        }
    },
    _getTowerType: function (b) {
        var a = false;
        switch (b.get("name")) {
            case "alpha":
                a = TowerAlpha;
                break;
            case "bravo":
                a = TowerBravo;
                break;
            case "charlie":
                a = TowerCharlie;
                break;
            case "delta":
                a = TowerDelta;
                break;
            case "echo":
                a = TowerEcho;
                break;
            case "foxtrot":
                a = TowerFoxtrot;
                break;
        }
        return a;
    },
    _initTowers: function () {
        this.updateTowerImages();
        function b() {}
        b.prototype = new google.maps.OverlayView();
        b.prototype.onAdd = function () {};
        b.prototype.onRemove = function () {};
        b.prototype.draw = function () {};
        var a = new b();
        this.container.getElements(".controls .create-tower").each(
            function (h) {
                var f = this._getTowerType(h);
                if (!f) {
                    return;
                }
                var e = this.container
                    .getElement(".hidden-elements .control-tower-mouseover .content")
                    .clone();
                e.inject(h.getSiblings(".popup")[0]);
                e.getElements(".value").each(function (i) {
                    if (i.getAttribute("data-name") && f.prototype[i.getAttribute("data-name")]) {
                        i.set("text", f.prototype[i.getAttribute("data-name")]);
                    }
                });
                var d = function (i) {
                    h.getSiblings(".popup").show();
                }.bind(this);
                var c = function (i) {
                    h.getSiblings(".popup").hide();
                }.bind(this);
                h.addEvent("mouseenter", d);
                h.addEvent("mouseout", c);
                var g = function (l) {
                    l.stop();
                    c();
                    h.removeEvent("mouseenter", d);
                    a.setMap(this.g.map);
                    var n = new f(this.g, this.g.stronghold);
                    var j = this.g.map.getDiv().getPosition();
                    var k = this.g.map.getDiv().getSize();
                    function p(q) {
    xPos = q.event.clientX - j.x;
    yPos = q.event.clientY - j.y;
    return xPos > 0 && xPos < k.x && yPos > 0 && yPos < k.y;
}
                    var o = l.event.clientX || l.event.touches[0].clientX;
                    var m = l.event.clientY || l.event.touches[0].clientY;
                    iconX = o - h.getPosition().x;
                    iconY = m - h.getPosition().y;
                    controlSize = h.getSize();
                    var i = {};
                    i = {
                        mouseup: function (q) {
                            document.removeEvents(i);
                            h.setStyles({ position: "static", visibility: "visible" });
                            h.addEvent("mouseenter", d);
                            a.setMap(null);
                            if (!p(q) || !n.checkDroppable()) {
                                n.remove();
                            } else {
                                n.drop();
                                this.g.towers.push(n);
                            }
                        }.bind(this),
                        mousemove: function (r) {
                            r.stop();
                            var t = r.event.clientX || r.event.touches[0].clientX;
                            var s = r.event.clientY || r.event.touches[0].clientY;
                            var u = a
                                .getProjection()
                                .fromContainerPixelToLatLng(
                                    new google.maps.Point(
                                        t - j.x + (controlSize.x / 2 - iconX),
                                        s - j.y + (controlSize.y - iconY)
                                    )
                                );
                            n.move(u).show().showAttackRadius();
                            n.checkDroppable();
                            var q = {
                                position: "absolute",
                                left: t - iconX,
                                top: s - iconY,
                                zIndex: 100,
                                visibility: p(r) ? "hidden" : "visible"
                            };
                            h.setStyles(q);
                        }.bind(this)
                    };
                    document.addEvent("mouseup", i.mouseup);
                    document.addEvent("mousemove", i.mousemove);
                    document.addEvent("touchend", i.mouseup);
                    document.addEvent("touchmove", i.mousemove);
                    if (this.container.getElement(".tower-info-popup")) {
                        this.container.getElement(".tower-info-popup").destroy();
                    }
                }.bind(this);
                h.addEvent("mousedown", g);
                h.addEvent("touchstart", g);
                h.addEvent("mouseup", function (i) {
                    h.addEvent("mouseenter", d);
                });
            }.bind(this)
        );
    },
    showTowerInfoWin: function (b) {
        if (this.openTowerInfoWin) {
            this.openTowerInfoWin.deselected();
        }
        this.openTowerInfoWin = b;
        var a = this.container.getElement(".hidden-elements .control-tower-infowin .content").clone();
        a.getElements(".value").each(function (c) {
            if (c.getAttribute("data-name") && b[c.getAttribute("data-name")]) {
                c.set("text", b[c.getAttribute("data-name")]);
            }
        });
        a.getElements(".special-value").each(function (c) {
            var e = "";
            switch (c.getAttribute("data-name")) {
                case "sell-cost":
                    e = b.getSellCost();
                    break;
            }
            c.set("text", e);
        });
        a.getElement(".sell").addEvent("click", function (c) {
            b.sell();
        });
        a.getElements(".upgrade").each(
            function (c, e) {
                if (!b.upgrades[e]) {
                    return;
                }
                var g = { attackRadius: b.attackRadius, damage: b.damage, attackSpeed: b.attackSpeed };
                var f = true;
                b.upgrades[e].each(
                    function (h) {
                        if (h.applied) {
                            return;
                        }
                        var i = this.container
                            .getElement(".hidden-elements .control-tower-infowin-upgrade .content")
                            .clone();
                        i.getElements(".value").each(function (j) {
                            if (j.getAttribute("data-name") && h[j.getAttribute("data-name")]) {
                                j.set("text", h[j.getAttribute("data-name")]);
                            }
                        });
                        i.getElements(".add-value").each(function (j) {
                            if (j.getAttribute("data-name") && b[j.getAttribute("data-name")]) {
                                upgradeValue = h[j.getAttribute("data-name")];
                                if (!upgradeValue) {
                                    upgradeValue = 0;
                                }
                                g[j.getAttribute("data-name")] += upgradeValue;
                                j.set("text", g[j.getAttribute("data-name")]);
                            }
                        });
                        if (h.applied) {
                            i.addClass("applied");
                        }
                        i.getElement(".button").addClass("disabled").set("disabled", true);
                        if (f) {
                            i.getElement(".button").setAttribute("data-cost", h.cost);
                            i.getElement(".button").addEvent(
                                "click",
                                function (j) {
                                    b.upgrade(h);
                                }.bind(this)
                            );
                            f = false;
                        } else {
                            i.getElement(".button").setAttribute("data-cost", 0);
                        }
                        i.inject(c);
                    }.bind(this)
                );
            }.bind(this)
        );
        a.getElements(".upgrade").each(function (c, e) {
            if (!c.getChildren().length) {
                c.destroy();
            }
        });
        if (!a.getElements(".upgrade").length) {
            a.getElement(".upgrade-message").set("text", "No upgrades available");
        }
        b.selected();
        var d = this.container.getElement(".tower-infowin-container");
        a.getElements(".close").addEvent(
            "click",
            function (c) {
                this.closeTowerInfoWin(b);
            }.bind(this)
        );
        d.set("html", "");
        a.inject(d);
        d.show();
        this.updateTowerInfoWin();
    },
    updateTowerInfoWin: function () {
        this.container.getElements(".tower-infowin-container .upgrade .button").each(
            function (a) {
                var b = a.getAttribute("data-cost");
                if (b <= 0) {
                    return;
                }
                if (this.g.money >= b) {
                    if (a.hasClass("disabled")) {
                        a.removeClass("disabled").set("disabled", false);
                    }
                } else {
                    if (!a.hasClass("disabled")) {
                        a.addClass("disabled").set("disabled", true);
                    }
                }
            }.bind(this)
        );
    },
    closeTowerInfoWin: function (a) {
        if (this.openTowerInfoWin != a) {
            return;
        }
        this.openTowerInfoWin.deselected();
        this.openTowerInfoWin = null;
        this.container.getElement(".tower-infowin-container").hide();
    },
    win: function () {
        var a = this._fullscreenPopup("success", "win");
        a.addEvent(
            "action",
            function () {
                this.g.restart();
                a.close();
            }.bind(this)
        );
        a.container
            .getElement(".action-twitter")
            .set("data-text", "I made it to round 50 on #MapsTowerDefence!")
            .addClass("twitter-share-button");
        twitter(document, "script", "twitter-wjs-" + new Date());
        a.addEvent(
            "social",
            function (b) {
                switch (b) {
                    case "facebook":
                        this.publishFacebook("I made it to round 50 on Maps Tower Defence!");
                        break;
                }
            }.bind(this)
        );
    },
    lose: function () {
        var a = this._fullscreenPopup("error", "game-over");
        a.addEvent(
            "action",
            function () {
                this.g.restart();
                a.close();
            }.bind(this)
        );
        a.container
            .getElement(".action-twitter")
            .set("data-text", "I made it to round " + this.g.moneyRounds + " on #MapsTowerDefence!")
            .addClass("twitter-share-button");
        twitter(document, "script", "twitter-wjs-" + new Date());
        a.addEvent(
            "social",
            function (b) {
                switch (b) {
                    case "facebook":
                        this.publishFacebook(
                            "I made it to round " + this.g.moneyRounds + " on Maps Tower Defence!"
                        );
                        break;
                }
            }.bind(this)
        );
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
        a.getElements(".button.help").addEvent(
            "click",
            function (b) {
                this.pause();
                this._fullscreenPopup("info", "help");
            }.bind(this)
        );
        a.getElements(".button.about").addEvent(
            "click",
            function (b) {
                this.pause();
                this._fullscreenPopup("info", "about");
            }.bind(this)
        );
        a.getElements(".button.feedback").addEvent(
            "click",
            function (b) {
                this.pause();
                this._fullscreenPopup("info", "feedback");
            }.bind(this)
        );
        a.getElements(".button.chat").addEvent(
            "click",
            function (b) {
                var c = window.open(
                    "http://webchat.quakenet.org/?channels=MapsTD&uio=d4",
                    "MapsTD Chat",
                    "width=647,height=400"
                );
                if (window.focus) {
                    c.focus();
                }
            }.bind(this)
        );
        a.getElements(".copyright-link").addEvent(
            "click",
            function (b) {
                b.stop();
                this.pause();
                this._fullscreenPopup("info", "copyright-popup");
            }.bind(this)
        );
    },
    updateTowerImages: function () {
        this.container.getElements(".controls .create-tower").each(
            function (b) {
                var a = this._getTowerType(b);
                if (!a) {
                    return;
                }
                b.setStyles({
                    "background-image": 'url("' + this.g.search.image.towers + '")',
                    "background-position": "0 -" + (a.prototype.markerOffset + 2) * 32 + "px",
                    width: "32px",
                    height: "32px",
                    border: "0"
                });
            }.bind(this)
        );
    },
    restart: function () {
        this.container.set("html", this.content);
    },
    publishFacebook: function (b) {
        FB.init({ appId: "267555096654594", status: true, cookie: true });
        var a = {
            method: "feed",
            link: "http://www.mapstd.com/",
            picture: "http://www.mapstd.com/images/avatar.png",
            name: b,
            description:
                "Maps Tower Defence is a tower defence game on Google Maps. Defend your home from enemies!",
            redirect_uri: "http://www.mapstd.com/close.html"
        };
        FB.ui(a, function () {});
    },
    publishTwitter: function (a) {}
});
var RouteBuilder = new Class({
    routes: [],
    g: null,
    start: null,
    searchedRoutes: 0,
    addedRoutes: 0,
    actions: {},
    initialize: function (a, b) {
        this.g = a;
        this.start = b;
    },
    generate: function (b, a) {
        this.actions = { success: b, failure: a };
        this.searchedRoutes += 4;
        this.tmpRoutes = {};
        new Route(
            this.g,
            this.start,
            new google.maps.LatLng(this.start.lat() + 0.02, this.start.lng()),
            function (c) {
                this._add(c, "north");
            }.bind(this),
            function () {
                this._fail();
            }.bind(this)
        );
        new Route(
            this.g,
            this.start,
            new google.maps.LatLng(this.start.lat(), this.start.lng() + 0.04),
            function (c) {
                this._add(c, "east");
            }.bind(this),
            function () {
                this._fail();
            }.bind(this)
        );
        new Route(
            this.g,
            this.start,
            new google.maps.LatLng(this.start.lat() - 0.02, this.start.lng()),
            function (c) {
                this._add(c, "south");
            }.bind(this),
            function () {
                this._fail();
            }.bind(this)
        );
        new Route(
            this.g,
            this.start,
            new google.maps.LatLng(this.start.lat(), this.start.lng() - 0.04),
            function (c) {
                this._add(c, "west");
            }.bind(this),
            function () {
                this._fail();
            }.bind(this)
        );
    },
    _add: function (a, b) {
        this.tmpRoutes[b] = a;
        a.compass = b;
        this._addedRoute();
    },
    _fail: function () {
        this._addedRoute();
    },
    _addedRoute: function () {
        this.searchedRoutes--;
        if (this.searchedRoutes) {
            return;
        }
        if (this.tmpRoutes.north) {
            this.routes.push(this.tmpRoutes.north);
        }
        if (this.tmpRoutes.east) {
            this.routes.push(this.tmpRoutes.east);
        }
        if (this.tmpRoutes.south) {
            this.routes.push(this.tmpRoutes.south);
        }
        if (this.tmpRoutes.west) {
            this.routes.push(this.tmpRoutes.west);
        }
        if (!this.routes.length) {
            return this.actions.failure();
        }
        for (var a = 1; a < this.routes.length; a++) {
            this.routes[a].addMessage = [
                "top",
                "success",
                "Let's make this a bit harder.  <b>New route added to the " +
                    this.routes[a].compass +
                    ".</b>",
                { autoHide: 15000 }
            ];
        }
        var a = 0;
        while (this.routes.length < 4) {
            var b = this.routes[a++].clone();
            b.addMessage = [
                "top",
                "error",
                "We couldn't find another route to add to the map, so we've made the " +
                    b.compass +
                    " path harder.  Have fun :)",
                { autoHide: 10000 }
            ];
            this.routes.push(b);
        }
        return this.actions.success();
    },
    getNextRoute: function () {
        return this.routes[this.addedRoutes++];
    }
});
var RoutePath = new Class({
    latLng: null,
    creeps: [],
    towers: [],
    initialize: function (a) {
        this.latLng = a;
    },
    addTower: function (a) {
        this.towers.push(a);
    },
    removeTower: function (a) {
        this.towers.erase(a);
    },
    addCreep: function (a) {
        this.creeps.push(a);
        if (this.towers.length) {
            var b = this.towers[0];
            b.removePathEvents();
            b.attack();
        }
    },
    removeCreep: function (a) {
        this.creeps.erase(a);
    }
});
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
        var f = new google.maps.DirectionsService();
        var e = { origin: a, destination: h, travelMode: google.maps.TravelMode.DRIVING };
        var g = function (l, j) {
            var q = [];
            var p = null;
            for (var m = 0; m < j.path.length; m++) {
                var r = j.path[m];
                if (p) {
                    q.push({
                        distance: google.maps.geometry.spherical.computeDistanceBetween(p, r),
                        start: p,
                        end: r
                    });
                }
                p = r;
            }
            var k = j.distance / this.totalPoints;
            var o = k;
            for (var m = 0; m < q.length; m++) {
                var s = q[m];
                var u = (s.start.lat() - s.end.lat()) / s.distance;
                var t = (s.start.lng() - s.end.lng()) / s.distance;
                var r = s.start;
                var n = s.distance;
                while (o + n >= k) {
                    var v = k - o;
                    if (v != 0) {
                        r = new google.maps.LatLng(r.lat() - u * v, r.lng() - t * v);
                        n -= v;
                    }
                    this.path.push(new RoutePath(r));
                    o = 0;
                }
                o += n;
            }
            this.path.push(new RoutePath(q[q.length - 1].end));
            this.start = this.path[0];
            this.end = this.path[this.path.length - 1];
            this.serviceResponse = l;
            if (d) {
                d(this);
            }
        }.bind(this);
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
                if (!n || !n.features || !n.features.length) {
                    return c(this);
                }
                var m = n.features[0];
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
                                    travel_mode: google.maps.TravelMode.DRIVING
                                }
                            ]
                        }
                    ],
                    overview_path: [],
                    overview_polyline: "",
                    warnings: [],
                    waypoint_order: []
                };
                for (var l in m.geometry["coordinates"]) {
                    var j = m.geometry["coordinates"][l];
                    if (isNaN(j[0]) || isNaN(j[1])) {
                        continue;
                    }
                    k.overview_path.push(new google.maps.LatLng(j[1], j[0]));
                }
                k.legs[0]["steps"][0]["path"] = k.overview_path;
                response = {
                    routes: [k],
                    request: {
                        travelMode: google.maps.TravelMode.DRIVING,
                        end_location: h,
                        start_location: a
                    }
                };
                var p = { path: k.overview_path, distance: m.properties["summary"]["distance"] };
                return g(response, p);
            }.bind(this),
            onFailure: function () {
                console.log("Using Google Maps for directions");
                f.route(e, function (j, i) {
                    var k = {};
                    switch (i) {
                        case google.maps.DirectionsStatus.OK:
                            k = {
                                path: j.routes[0].overview_path,
                                distance: j.routes[0].legs[0].distance.value
                            };
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
            }.bind(this)
        }).send();
    },
    clone: function () {
        var a = new Route();
        a.g = this.g;
        a.start = this.start;
        a.end = this.end;
        a.serviceResponse = this.serviceResponse;
        a.compass = this.compass;
        this.path.each(function (b) {
            a.path.push(new RoutePath(b.latLng));
        });
        return a;
    },
    show: function () {
        this.directionsRenderer = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
            preserveViewport: true,
            polylineOptions: { strokeColor: "#0000ff", strokeOpacity: 0.5 }
        });
        this.directionsRenderer.setMap(this.g.map);
        this.directionsRenderer.setDirections(this.serviceResponse);
    },
    enable: function () {
        this.directionsRenderer.setOptions({
            polylineOptions: { strokeColor: "#0000ff", strokeOpacity: 1, strokeWeight: 5 }
        });
        this.directionsRenderer.setMap(this.g.map);
        this.marker = new google.maps.Marker({
            position: this.start.latLng,
            map: this.g.map,
            icon: new google.maps.MarkerImage(
                this.g.search.image.routeend,
                new google.maps.Size(32, 32),
                new google.maps.Point(0, 32),
                new google.maps.Point(16, 32)
            )
        });
        return this;
    },
    remove: function () {
        this.creeps.each(function (a) {
            a.remove();
        });
        this.marker.setMap(null);
        this.directionsRenderer.setMap(null);
        this.g.routes.erase(this);
    },
    addCreep: function (b) {
        var a = new b(this.g, this);
        this.creeps.push(a);
        return a;
    }
});
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
        this.route = a;
        this.health = Math.floor(this.health * this.g.difficultyMultiplier);
        this.maxHealth = this.health;
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
            )
        });
        return this;
    },
    move: function () {
        if (this.health <= 0) {
            return;
        }
        this.route.path[this.distanceTravelled].removeCreep(this);
        if (this.distanceTravelled >= this.route.path.length - 1) {
            this.endOfRoute();
            return this;
        }
        this.distanceTravelled++;
        this.route.path[this.distanceTravelled].addCreep(this);
        if (this.g.timer.multiplier == 1 || !(this.distanceTravelled % this.showMoveModulus)) {
            this.marker.setPosition(this.route.path[this.distanceTravelled].latLng);
        }
        this.g.timer.start(this, this.move, this.speed * 2);
        return this;
    },
    remove: function () {
        this.route.path[this.distanceTravelled].removeCreep(this);
        this.marker.setMap(null);
    },
    endOfRoute: function () {
        this.remove();
        this.g.removeLife(1);
        this.fireEvent("killed");
    },
    hit: function (b) {
        this.health -= b;
        var a = this.marker.getShadow();
        a.origin.y = Math.round((1 - this.health / this.maxHealth) * 14, 0) * 8;
        this.marker.setShadow(a);
        if (this.health <= 0) {
            this.g.addMoney(this.reward);
            this.remove();
            this.fireEvent("killed");
        }
    }
});
var CreepAlpha = new Class({ Extends: Creep, markerOffset: 0, health: 150, speed: 50, reward: 1 });
var CreepBravo = new Class({ Extends: Creep, markerOffset: 1, health: 250, speed: 50, reward: 3 });
var CreepCharlie = new Class({ Extends: Creep, markerOffset: 2, health: 500, speed: 40, reward: 6 });
var CreepDelta = new Class({ Extends: Creep, markerOffset: 3, health: 1000, speed: 50, reward: 12 });
var CreepEcho = new Class({ Extends: Creep, markerOffset: 4, health: 2000, speed: 60, reward: 20 });
var CreepFoxtrot = new Class({ Extends: Creep, markerOffset: 5, health: 3000, speed: 70, reward: 30 });
var CreepGolf = new Class({ Extends: Creep, markerOffset: 6, health: 5000, speed: 90, reward: 35 });
var CreepHotel = new Class({ Extends: Creep, markerOffset: 7, health: 8000, speed: 100, reward: 35 });
var CreepIndia = new Class({ Extends: Creep, markerOffset: 8, health: 75000, speed: 150, reward: 35 });
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
        this.marker = new google.maps.Marker({
            icon: new google.maps.MarkerImage(
                this.g.search.image.towers,
                new google.maps.Size(32, 32),
                new google.maps.Point(0, (this.markerOffset + 2) * 32),
                new google.maps.Point(16, 32)
            ),
            position: b,
            visible: false,
            map: this.g.map
        });
        this.attackRadiusCircle = new google.maps.Circle({
            center: b,
            radius: this.attackRadius,
            clickable: false,
            map: this.g.map,
            visible: false,
            fillColor: "#0000AA",
            fillOpacity: 0.1,
            strokeOpacity: 0.2
        });
        this.sizeCircle = new google.maps.Circle({
            center: b,
            radius: this.size,
            clickable: false,
            map: this.g.map,
            visible: false,
            fillColor: "#000000",
            fillOpacity: 0.7,
            strokeOpacity: 0.4
        });
    },
    show: function () {
        this.marker.setVisible(true);
        return this;
    },
    hide: function () {
        this.marker.setVisible(false);
        this.hideAttackRadius();
        return this;
    },
    move: function (a) {
        this.marker.setPosition(a);
        this.attackRadiusCircle.setCenter(a);
        this.sizeCircle.setCenter(a);
        return this;
    },
    remove: function () {
        this.removed = true;
        this.marker.setMap(null);
        this.attackRadiusCircle.setMap(null);
        this.sizeCircle.setMap(null);
        this.g.timer.stopAll(this);
        this.g.ui.closeTowerInfoWin(this);
        this.g.towers.erase(this);
    },
    showAttackRadius: function () {
        this.attackRadiusCircle.setVisible(true);
        this.sizeCircle.setVisible(true);
        return this;
    },
    hideAttackRadius: function () {
        return this;
        this.attackRadiusCircle.setVisible(false);
        this.sizeCircle.setVisible(false);
        return this;
    },
    selected: function () {
        this.sizeCircle.setOptions({ fillColor: "#ffffff" });
        this.attackRadiusCircle.setOptions({ strokeOpacity: 0.8 });
    },
    deselected: function () {
        this.sizeCircle.setOptions({ fillColor: "#000000" });
        this.attackRadiusCircle.setOptions({ strokeOpacity: 0.2 });
    },
    attack: function (d) {
        if (this.removed) {
            return;
        }
        this.g.timer.stopAll(this);
        var c = [];
        this.routeOverlap.each(
            function (e) {
                e.each(
                    function (f) {
                        f.creeps.each(
                            function (g) {
                                c.push(g);
                            }.bind(this)
                        );
                    }.bind(this)
                );
            }.bind(this)
        );
        c.sort(function (f, e) {
            return f.route.path.length - f.distanceTravelled - (e.route.path.length - e.distanceTravelled);
        });
        var b = 0;
        c.each(
            function (e) {
                if (b >= 1) {
                    return;
                }
                b++;
                e.hit(this.damage);
            }.bind(this)
        );
        var a = (10 - this.attackSpeed + 1) * 200;
        if (b) {
            this.g.timer.start(this, this.attack, a);
        } else {
            if (d && d.failAddEvents) {
                this.addPathEvents();
            } else {
                this.g.timer.start(this, this.attack, a, { failAddEvents: true });
            }
        }
    },
    addPathEvents: function () {
        this.routeOverlap.each(
            function (a) {
                a.each(
                    function (b) {
                        b.addTower(this);
                    }.bind(this)
                );
            }.bind(this)
        );
    },
    removePathEvents: function () {
        this.routeOverlap.each(
            function (a) {
                a.each(
                    function (b) {
                        b.removeTower(this);
                    }.bind(this)
                );
            }.bind(this)
        );
    },
    drop: function () {
        if (!this.g.removeMoney(this.cost)) {
            this.remove();
            return;
        }
        this.hideAttackRadius();
        this._addClickEvent();
        this.calculateRouteOverlap();
        if (this.g.ui.openTowerInfoWin) {
            this.g.ui.closeTowerInfoWin(this.g.ui.openTowerInfoWin);
        }
        this.g.timer.start(this, this.attack, 0);
        if (this.g.towers.length == 0) {
            new Message("top", "info", "Click on the tower to view upgrade options.", { autoHide: 30000 });
        }
    },
    _addClickEvent: function () {
        google.maps.event.addListener(
            this.marker,
            "click",
            function () {
                this.g.ui.showTowerInfoWin(this);
            }.bind(this)
        );
    },
    calculateRouteOverlap: function () {
        this.g.routes.each(
            function (b, a) {
                this.routeOverlap.push([]);
                b.path.each(
                    function (c) {
                        if (
                            google.maps.geometry.spherical.computeDistanceBetween(
                                c.latLng,
                                this.marker.getPosition()
                            ) < this.attackRadius
                        ) {
                            this.routeOverlap[a].push(c);
                        }
                    }.bind(this)
                );
            }.bind(this)
        );
    },
    checkDroppable: function () {
        var a = true;
        if (this.g.money < this.cost) {
            a = false;
        }
        if (a) {
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
                    }
                }.bind(this)
            );
        }
        if (a) {
            this.g.foundRoutes.routes.each(
                function (b) {
                    b.path.each(
                        function (c) {
                            if (
                                google.maps.geometry.spherical.computeDistanceBetween(
                                    c.latLng,
                                    this.marker.getPosition()
                                ) < this.size
                            ) {
                                a = false;
                            }
                        }.bind(this)
                    );
                }.bind(this)
            );
        }
        this.attackRadiusCircle.setOptions({
            fillColor: a ? "#0000AA" : "#AA0000",
            fillOpacity: a ? 0.1 : 0.7
        });
        return a;
    },
    upgrade: function (d) {
        var c = [];
        for (var b = 0; b < this.upgrades.length; b++) {
            for (var a = 0; a < this.upgrades[b].length; a++) {
                if (this.upgrades[b][a].applied) {
                    continue;
                }
                c.push(this.upgrades[b][a]);
                break;
            }
        }
        for (var b = 0; b < c.length; b++) {
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
        a.applied = true;
        if (a.damage) {
            this.damage += a.damage;
        }
        if (a.attackSpeed) {
            this.attackSpeed += a.attackSpeed;
        }
        if (a.attackRadius) {
            this.attackRadius += a.attackRadius;
            this.attackRadiusCircle.setRadius(this.attackRadius);
            this.calculateRouteOverlap();
        }
        this.g.ui.showTowerInfoWin(this);
        return true;
    },
    getSellCost: function () {
        return Math.round(this.cost * 0.7, 0);
    },
    sell: function () {
        this.g.addMoney(this.getSellCost(), true);
        this.remove();
    }
});
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
            { name: "More Damage 3", damage: 200, cost: 200 }
        ],
        [
            { name: "Faster 1", attackSpeed: 1, cost: 70 },
            { name: "Faster 2", attackSpeed: 1, cost: 200 }
        ]
    ]
});
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
            { name: "More Damage 4", damage: 200, cost: 300 }
        ],
        [
            { name: "Range 1", attackRadius: 150, cost: 150 },
            { name: "Range 2", attackRadius: 300, cost: 200 }
        ]
    ]
});
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
            { name: "More Damage 3", damage: 600, cost: 1200 }
        ],
        [
            { name: "Range 1", attackRadius: 150, cost: 1000 },
            { name: "Range 2", attackRadius: 300, cost: 1500 }
        ]
    ]
});
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
            { name: "More Damage 3", damage: 400, cost: 2000 }
        ],
        [
            { name: "Range 1", attackRadius: 150, cost: 1000 },
            { name: "Range 2", attackRadius: 200, cost: 1500 }
        ]
    ]
});
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
            { name: "Faster 2", attackSpeed: 1, cost: 4000 }
        ],
        [
            { name: "Range 1", attackRadius: 150, cost: 2500 },
            { name: "Range 2", attackRadius: 200, cost: 4000 }
        ]
    ]
});
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
            { name: "More Damage 2", damage: 2500, cost: 3000 }
        ],
        [
            { name: "Faster 1", attackSpeed: 1, cost: 2500 },
            { name: "Faster 2", attackSpeed: 1, cost: 2500 }
        ]
    ]
});
var Timer = new Class({
    timers: [],
    paused: false,
    multiplier: 1,
    start: function (a, f, c, d) {
        f = f.bind(a);
        var e = { object: a, callback: f, duration: c, params: d, start: new Date().getTime(), timer: null };
        if (!this.paused) {
            var b = setTimeout(
                function () {
                    this.timers.erase(e);
                    e.callback(e.params);
                }.bind(this),
                c / this.multiplier
            );
            e.timer = b;
        }
        this.timers.push(e);
    },
    stopAll: function (a) {
        for (var b = 0; b < this.timers.length; b++) {
            var c = this.timers[b];
            if (c.object == a) {
                clearTimeout(c.timer);
                this.timers.erase(c);
                b--;
            }
        }
    },
    pause: function () {
        if (this.paused) {
            return this;
        }
        this.paused = true;
        var a = new Date().getTime();
        this.timers.each(function (b) {
            clearTimeout(b.timer);
        });
        this.timers.each(
            function (d, c) {
                var b = d.duration - (a - d.start) * this.multiplier;
                if (b <= 0) {
                    b = 1;
                }
                this.timers[c].duration = b;
            }.bind(this)
        );
        return this;
    },
    resume: function () {
        if (!this.paused) {
            return this;
        }
        var a = this.timers;
        this.timers = [];
        this.paused = false;
        a.each(
            function (b) {
                this.start(b.object, b.callback, b.duration, b.params);
            }.bind(this)
        );
        return this;
    },
    setMultiplier: function (a) {
        if (this.paused) {
            this.multiplier = a;
            return this;
        }
        this.pause();
        this.multiplier = a;
        this.resume();
        return this;
    }
});
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
        }.bind(this);
    },
    addCreep: function (a, c, b) {
        this.creeps++;
        this.g.timer.start(
            this,
            function () {
                var d = a.addCreep(c);
                d.addEvent("killed", this.removeCreep.bind(this));
                d.showMoveModulus = this.showMoveModulus;
                d.show().move();
            }.bind(this),
            b
        );
    },
    removeCreep: function () {
        this.creeps--;
        if (this.creeps <= 0) {
            this.g.timer.stopAll(this);
            if (this.g.lives > 0) {
                this.fireEvent("roundOver");
            }
        }
    }
});
var GameRoundRoute = new Class({
    Extends: GameRound,
    type: "auto",
    completionMoney: 0,
    routeBuilder: null,
    initialize: function (a) {
        this.routeBuilder = a;
    },
    run: function () {
        this.g.addRoute(this.routeBuilder.getNextRoute());
        this.fireEvent("roundOver");
    }
});
var Rounds = new Class({
    roundNumModifier: 0,
    routeBuilder: null,
    creepTypes: [CreepAlpha, CreepBravo, CreepCharlie, CreepDelta, CreepEcho],
    initialize: function (a) {
        this.routeBuilder = a;
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
        var roundData = this.getRoundData(roundNum);
        if (roundData) {
            return new GameRound(function () {
                this.g.ui.updateRound(roundNum);
                Object.each(
                    roundData,
                    function (timerData, creepType) {
                        creepType = eval("Creep" + creepType);
                        var times = this.g.rounds.parseTimer(timerData);
                        times.each(
                            function (time) {
                                for (var routeIndex = 0; routeIndex < this.g.routes.length; routeIndex++) {
                                    this.addCreep(this.g.routes[routeIndex], creepType, 500 * time);
                                }
                            }.bind(this)
                        );
                    }.bind(this)
                );
            });
        }
        return new GameRound(function () {
            this.g.ui.updateRound(roundNum + 1);
            var timerCount = [0, 0, 0, 0];
            for (var creepType = 1; creepType <= this.g.rounds.creepTypes.length; creepType++) {
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
                for (var routeIndex = 0; routeIndex < this.g.routes.length; routeIndex++) {
                    for (var i = 0; i < creeps; i++) {
                        this.addCreep(
                            this.g.routes[routeIndex],
                            this.g.rounds.creepTypes[creepType - 1],
                            500 * ++timerCount[routeIndex]
                        );
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
                    Foxtrot: "5@1 5@1+30"
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
                    India: "2@15+75"
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
                    India: this._calc(a, 9)
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
        if (!a) {
            return c;
        }
        var b = a.match(/([0-9]+@[0-9]+(\+[0-9]+)?)/g);
        b.each(function (e) {
            var g = e.match(/([0-9]+)@([0-9]+)(\+([0-9]+))?/);
            for (var f = 0; f < g[1]; f++) {
                var d = 0;
                if (g[4]) {
                    d = parseInt(g[4]);
                }
                c.push(f * g[2] + d);
            }
        });
        return c;
    }
});
window.addEvent("load", function () {
    var a = new Game($("game"));
    a.gameClass = Game;
    Game = null;
});
(function (e, a, f) {
    var c,
        b = e.getElementsByTagName(a)[0];
    if (e.getElementById(f)) {
        return;
    }
    c = e.createElement(a);
    c.id = f;
    c.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=267555096654594";
    b.parentNode.insertBefore(c, b);
})(document, "script", "facebook-jssdk");
window.___gcfg = { lang: "en-GB" };
function twitter(e, a, f) {
    var c, b = e.getElementsByTagName(a)[0];

    if (!e.getElementById(f)) {
        c = e.createElement(a);
        c.id = f;
        c.src = "//platform.twitter.com/widgets.js";
        b.parentNode.insertBefore(c, b);
    }
}
twitter(document, "script", "twitter-wjs");
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-29746608-1"]);
_gaq.push(["_trackPageview"]);
(function () {
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = true;
    b.src =
        ("https:" == document.location.protocol ? "https://ssl" : "http://www") +
        ".google-analytics.com/ga.js";
    var a = document.getElementsByTagName("script")[0];
    a.parentNode.insertBefore(b, a);
})();
