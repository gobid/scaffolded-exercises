/*1588305114,,JIT Construction: v1002068558,en_GB*/

/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Platform Policy
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
try {
  (window.FB && !window.FB.__buffer) ||
    (function (window, fb_fif_window) {
      var apply = Function.prototype.apply;
      function bindContext(fn, thisArg) {
        return function _sdkBound() {
          return apply.call(fn, thisArg, arguments);
        };
      }
      var global = { __type: "JS_SDK_SANDBOX", window: window, document: window.document };
      var sandboxWhitelist = ["setTimeout", "setInterval", "clearTimeout", "clearInterval"];
      for (var i = 0; i < sandboxWhitelist.length; i++) {
        global[sandboxWhitelist[i]] = bindContext(window[sandboxWhitelist[i]], window);
      }
      (function () {
        var self = window;
        var __DEV__ = 0;
        function emptyFunction() {}
        var __transform_includes = {};
        var __annotator, __bodyWrapper;
        var __buffer = window.FB && window.FB.__buffer;
        var __w, __t;
        var undefined;
        var __p;
        with (this) {
          (function () {
            var a = {},
              b = function (a, b) {
                if (!a && !b) return null;
                var c = {};
                typeof a !== "undefined" && (c.type = a);
                typeof b !== "undefined" && (c.signature = b);
                return c;
              },
              c = function (a, c) {
                return b(
                  a && /^[A-Z]/.test(a) ? a : void 0,
                  c && ((c.params && c.params.length) || c.returns)
                    ? "function(" +
                        (c.params
                          ? c.params
                              .map(function (a) {
                                return /\?/.test(a) ? "?" + a.replace("?", "") : a;
                              })
                              .join(",")
                          : "") +
                        ")" +
                        (c.returns ? ":" + c.returns : "")
                    : void 0
                );
              },
              d = function (a, b, c) {
                return a;
              },
              e = function (a, b, d) {
                "sourcemeta" in __transform_includes && (a.__SMmeta = b);
                if ("typechecks" in __transform_includes) {
                  b = c(b ? b.name : void 0, d);
                  b && __w(a, b);
                }
                return a;
              },
              f = function (a, b, c) {
                return c.apply(a, b);
              },
              g = function (a, b, c, d) {
                d && d.params && __t.apply(a, d.params);
                c = c.apply(a, b);
                d && d.returns && __t([c, d.returns]);
                return c;
              };
            g = function (b, c, d, e, f) {
              if (f) {
                f.callId || (f.callId = f.module + ":" + (f.line || 0) + ":" + (f.column || 0));
                e = f.callId;
                a[e] = (a[e] || 0) + 1;
              }
              return d.apply(b, c);
            };
            typeof __transform_includes === "undefined"
              ? ((__annotator = d), (__bodyWrapper = f))
              : ((__annotator = e),
                "codeusage" in __transform_includes
                  ? ((__annotator = d),
                    (__bodyWrapper = g),
                    (__bodyWrapper.getCodeUsage = function () {
                      return a;
                    }),
                    (__bodyWrapper.clearCodeUsage = function () {
                      a = {};
                    }))
                  : "typechecks" in __transform_includes
                  ? (__bodyWrapper = f)
                  : (__bodyWrapper = f));
          })();
          (__t = function (a) {
            return a[0];
          }),
            (__w = function (a) {
              return a;
            });
          var require, __d;
          (function (a) {
            var b = {},
              c = {},
              d = ["global", "require", "requireDynamic", "requireLazy", "module", "exports"];
            require = function (d, e) {
              if (Object.prototype.hasOwnProperty.call(c, d)) return c[d];
              if (!Object.prototype.hasOwnProperty.call(b, d)) {
                if (e) return null;
                throw new Error("Module " + d + " has not been defined");
              }
              e = b[d];
              var f = e.deps,
                g = e.factory.length,
                h,
                i = [];
              for (var j = 0; j < g; j++) {
                switch (f[j]) {
                  case "module":
                    h = e;
                    break;
                  case "exports":
                    h = e.exports;
                    break;
                  case "global":
                    h = a;
                    break;
                  case "require":
                    h = require;
                    break;
                  case "requireDynamic":
                    h = null;
                    break;
                  case "requireLazy":
                    h = null;
                    break;
                  default:
                    h = require.call(null, f[j]);
                }
                i.push(h);
              }
              e.factory.apply(a, i);
              c[d] = e.exports;
              return e.exports;
            };
            __d = function (a, e, f, g) {
              typeof f === "function"
                ? ((b[a] = { factory: f, deps: d.concat(e), exports: {} }), g === 3 && require.call(null, a))
                : (c[a] = f);
            };
            a.$RefreshReg$ = function () {};
            a.$RefreshSig$ = function () {
              return function (a) {
                return a;
              };
            };
          })(this);
          __d(
            "ES5Array",
            [],
            function (a, b, c, d, e, f) {
              a = {};
              a.isArray = function (a) {
                return Object.prototype.toString.call(a) == "[object Array]";
              };
              e.exports = a;
            },
            null
          );
          __d(
            "ES5ArrayPrototype",
            [],
            function (a, b, c, d, e, f) {
              var g = {};
              g.map = function (a, b) {
                if (typeof a !== "function") throw new TypeError();
                var c,
                  d = this.length,
                  e = new Array(d);
                for (c = 0; c < d; ++c) c in this && (e[c] = a.call(b, this[c], c, this));
                return e;
              };
              g.forEach = function (a, b) {
                g.map.call(this, a, b);
              };
              g.filter = function (a, b) {
                if (typeof a !== "function") throw new TypeError();
                var c,
                  d,
                  e = this.length,
                  f = [];
                for (c = 0; c < e; ++c) c in this && ((d = this[c]), a.call(b, d, c, this) && f.push(d));
                return f;
              };
              g.every = function (a, b) {
                if (typeof a !== "function") throw new TypeError();
                var c = new Object(this),
                  d = c.length;
                for (var e = 0; e < d; e++) if (e in c && !a.call(b, c[e], e, c)) return !1;
                return !0;
              };
              g.some = function (a, b) {
                if (typeof a !== "function") throw new TypeError();
                var c = new Object(this),
                  d = c.length;
                for (var e = 0; e < d; e++) if (e in c && a.call(b, c[e], e, c)) return !0;
                return !1;
              };
              g.indexOf = function (a, b) {
                var c = this.length;
                b |= 0;
                b < 0 && (b += c);
                for (; b < c; b++) if (b in this && this[b] === a) return b;
                return -1;
              };
              e.exports = g;
            },
            null
          );
          __d(
            "ES5Date",
            [],
            function (a, b, c, d, e, f) {
              a = {};
              a.now = function () {
                return new Date().getTime();
              };
              e.exports = a;
            },
            null
          );
          __d(
            "ES5FunctionPrototype",
            [],
            function (a, b, c, d, e, f) {
              a = {};
              a.bind = function (a) {
                if (typeof this !== "function") throw new TypeError("Bind must be called on a function");
                var b = this,
                  c = Array.prototype.slice.call(arguments, 1);
                function d() {
                  return b.apply(a, c.concat(Array.prototype.slice.call(arguments)));
                }
                d.displayName = "bound:" + (b.displayName || b.name || "(?)");
                d.toString = function () {
                  return "bound: " + b;
                };
                return d;
              };
              e.exports = a;
            },
            null
          );
          __d(
            "ie8DontEnum",
            [],
            function (a, b, c, d, e, f) {
              var g = [
                  "toString",
                  "toLocaleString",
                  "valueOf",
                  "hasOwnProperty",
                  "isPrototypeOf",
                  "prototypeIsEnumerable",
                  "constructor",
                ],
                h = {}.hasOwnProperty;
              a = function () {};
              ({ toString: !0 }.propertyIsEnumerable("toString") &&
                (a = function (a, b) {
                  for (var c = 0; c < g.length; c++) {
                    var d = g[c];
                    h.call(a, d) && b(d);
                  }
                }));
              e.exports = a;
            },
            null
          );
          __d(
            "ES5Object",
            ["ie8DontEnum"],
            function (a, b, c, d, e, f) {
              var g = {}.hasOwnProperty;
              a = {};
              function h() {}
              a.create = function (a) {
                var b = typeof a;
                if (b != "object" && b != "function")
                  throw new TypeError("Object prototype may only be a Object or null");
                h.prototype = a;
                return new h();
              };
              a.keys = function (a) {
                var c = typeof a;
                if ((c != "object" && c != "function") || a === null)
                  throw new TypeError("Object.keys called on non-object");
                var d = [];
                for (var e in a) g.call(a, e) && d.push(e);
                b("ie8DontEnum")(a, function (a) {
                  return d.push(a);
                });
                return d;
              };
              a.freeze = function (a) {
                return a;
              };
              a.isFrozen = function () {
                return !1;
              };
              a.seal = function (a) {
                return a;
              };
              e.exports = a;
            },
            null
          );
          __d(
            "ES5StringPrototype",
            [],
            function (a, b, c, d, e, f) {
              a = {};
              a.trim = function () {
                if (this == null) throw new TypeError("String.prototype.trim called on null or undefined");
                return String.prototype.replace.call(this, /^\s+|\s+$/g, "");
              };
              a.startsWith = function (a) {
                var b = String(this);
                if (this == null)
                  throw new TypeError("String.prototype.startsWith called on null or undefined");
                var c = arguments.length > 1 ? Number(arguments[1]) : 0;
                isNaN(c) && (c = 0);
                var d = Math.min(Math.max(c, 0), b.length);
                return b.indexOf(String(a), c) == d;
              };
              a.endsWith = function (a) {
                var b = String(this);
                if (this == null)
                  throw new TypeError("String.prototype.endsWith called on null or undefined");
                var c = b.length,
                  d = String(a),
                  e = arguments.length > 1 ? Number(arguments[1]) : c;
                isNaN(e) && (e = 0);
                var f = Math.min(Math.max(e, 0), c),
                  g = f - d.length;
                return g < 0 ? !1 : b.lastIndexOf(d, g) == g;
              };
              a.includes = function (a) {
                if (this == null)
                  throw new TypeError("String.prototype.contains called on null or undefined");
                var b = String(this),
                  c = arguments.length > 1 ? Number(arguments[1]) : 0;
                isNaN(c) && (c = 0);
                return b.indexOf(String(a), c) != -1;
              };
              a.contains = a.includes;
              a.repeat = function (a) {
                if (this == null) throw new TypeError("String.prototype.repeat called on null or undefined");
                var b = String(this);
                a = a ? Number(a) : 0;
                isNaN(a) && (a = 0);
                if (a < 0 || a === Infinity) throw RangeError();
                if (a === 1) return b;
                if (a === 0) return "";
                var c = "";
                while (a) a & 1 && (c += b), (a >>= 1) && (b += b);
                return c;
              };
              e.exports = a;
            },
            null
          );
          __d(
            "ES6Array",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              a = {
                from: function (a) {
                  if (a == null) throw new TypeError("Object is null or undefined");
                  var b = arguments[1],
                    c = arguments[2],
                    d = this,
                    e = Object(a),
                    f =
                      typeof Symbol === "function"
                        ? typeof Symbol === "function"
                          ? Symbol.iterator
                          : "@@iterator"
                        : "@@iterator",
                    g = typeof b === "function",
                    h = typeof e[f] === "function",
                    i = 0,
                    j,
                    k;
                  if (h) {
                    j = typeof d === "function" ? new d() : [];
                    var l = e[f](),
                      m;
                    while (!(m = l.next()).done)
                      (k = m.value), g && (k = b.call(c, k, i)), (j[i] = k), (i += 1);
                    j.length = i;
                    return j;
                  }
                  var n = e.length;
                  (isNaN(n) || n < 0) && (n = 0);
                  j = typeof d === "function" ? new d(n) : new Array(n);
                  while (i < n) (k = e[i]), g && (k = b.call(c, k, i)), (j[i] = k), (i += 1);
                  j.length = i;
                  return j;
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "ES6ArrayPrototype",
            [],
            function (a, b, c, d, e, f) {
              var g = {
                find: function (a, b) {
                  if (this == null) throw new TypeError("Array.prototype.find called on null or undefined");
                  if (typeof a !== "function") throw new TypeError("predicate must be a function");
                  a = g.findIndex.call(this, a, b);
                  return a === -1 ? void 0 : this[a];
                },
                findIndex: function (a, b) {
                  if (this == null)
                    throw new TypeError("Array.prototype.findIndex called on null or undefined");
                  if (typeof a !== "function") throw new TypeError("predicate must be a function");
                  var c = Object(this),
                    d = c.length >>> 0;
                  for (var e = 0; e < d; e++) if (a.call(b, c[e], e, c)) return e;
                  return -1;
                },
                fill: function (a) {
                  if (this == null) throw new TypeError("Array.prototype.fill called on null or undefined");
                  var b = Object(this),
                    c = b.length >>> 0,
                    d = arguments[1],
                    e = d >> 0,
                    f = e < 0 ? Math.max(c + e, 0) : Math.min(e, c),
                    g = arguments[2],
                    h = g === void 0 ? c : g >> 0,
                    i = h < 0 ? Math.max(c + h, 0) : Math.min(h, c);
                  while (f < i) (b[f] = a), f++;
                  return b;
                },
              };
              e.exports = g;
            },
            null
          );
          __d(
            "ES6DatePrototype",
            [],
            function (a, b, c, d, e, f) {
              function g(a) {
                return (a < 10 ? "0" : "") + a;
              }
              a = {
                toISOString: function () {
                  if (!isFinite(this)) throw new Error("Invalid time value");
                  var a = this.getUTCFullYear();
                  a =
                    (a < 0 ? "-" : a > 9999 ? "+" : "") +
                    ("00000" + Math.abs(a)).slice(0 <= a && a <= 9999 ? -4 : -6);
                  return (
                    a +
                    "-" +
                    g(this.getUTCMonth() + 1) +
                    "-" +
                    g(this.getUTCDate()) +
                    "T" +
                    g(this.getUTCHours()) +
                    ":" +
                    g(this.getUTCMinutes()) +
                    ":" +
                    g(this.getUTCSeconds()) +
                    "." +
                    (this.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) +
                    "Z"
                  );
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "ES6Number",
            [],
            function (a, b, c, d, e, f) {
              a = Math.pow(2, -52);
              b = Math.pow(2, 53) - 1;
              c = -1 * b;
              d = {
                isFinite: (function (a) {
                  function b(b) {
                    return a.apply(this, arguments);
                  }
                  b.toString = function () {
                    return a.toString();
                  };
                  return b;
                })(function (a) {
                  return typeof a === "number" && isFinite(a);
                }),
                isNaN: (function (a) {
                  function b(b) {
                    return a.apply(this, arguments);
                  }
                  b.toString = function () {
                    return a.toString();
                  };
                  return b;
                })(function (a) {
                  return typeof a === "number" && isNaN(a);
                }),
                isInteger: function (a) {
                  return this.isFinite(a) && Math.floor(a) === a;
                },
                isSafeInteger: function (a) {
                  return (
                    this.isFinite(a) &&
                    a >= this.MIN_SAFE_INTEGER &&
                    a <= this.MAX_SAFE_INTEGER &&
                    Math.floor(a) === a
                  );
                },
                EPSILON: a,
                MAX_SAFE_INTEGER: b,
                MIN_SAFE_INTEGER: c,
              };
              e.exports = d;
            },
            null
          );
          __d(
            "ES6Object",
            ["ie8DontEnum"],
            function (a, b, c, d, e, f) {
              var g = {}.hasOwnProperty;
              a = {
                assign: function (a) {
                  if (a == null) throw new TypeError("Object.assign target cannot be null or undefined");
                  a = Object(a);
                  for (var c = 0; c < (arguments.length <= 1 ? 0 : arguments.length - 1); c++) {
                    var d = c + 1 < 1 || arguments.length <= c + 1 ? void 0 : arguments[c + 1];
                    if (d == null) continue;
                    d = Object(d);
                    for (var e in d) g.call(d, e) && (a[e] = d[e]);
                    b("ie8DontEnum")(d, function (b) {
                      return (a[b] = d[b]);
                    });
                  }
                  return a;
                },
                is: function (a, b) {
                  if (a === b) return a !== 0 || 1 / a === 1 / b;
                  else return a !== a && b !== b;
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "ES7ArrayPrototype",
            ["ES5Array", "ES5ArrayPrototype"],
            function (a, b, c, d, e, f) {
              var g = b("ES5Array").isArray,
                h = b("ES5ArrayPrototype").indexOf;
              function i(a) {
                return Math.min(Math.max(j(a), 0), Number.MAX_SAFE_INTEGER);
              }
              function j(a) {
                a = Number(a);
                return isFinite(a) && a !== 0 ? k(a) * Math.floor(Math.abs(a)) : a;
              }
              function k(a) {
                return a >= 0 ? 1 : -1;
              }
              a = {
                includes: function (a) {
                  "use strict";
                  if (a !== void 0 && g(this) && !(typeof a === "number" && isNaN(a)))
                    return h.apply(this, arguments) !== -1;
                  var b = Object(this),
                    c = b.length ? i(b.length) : 0;
                  if (c === 0) return !1;
                  var d = arguments.length > 1 ? j(arguments[1]) : 0,
                    e = d < 0 ? Math.max(c + d, 0) : d,
                    f = isNaN(a) && typeof a === "number";
                  while (e < c) {
                    var k = b[e];
                    if (k === a || (typeof k === "number" && f && isNaN(k))) return !0;
                    e++;
                  }
                  return !1;
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "ES7Object",
            ["ie8DontEnum"],
            function (a, b, c, d, e, f) {
              var g = {}.hasOwnProperty;
              a = {};
              a.entries = function (a) {
                if (a == null) throw new TypeError("Object.entries called on non-object");
                var c = [];
                for (var d in a) g.call(a, d) && c.push([d, a[d]]);
                b("ie8DontEnum")(a, function (b) {
                  return c.push([b, a[b]]);
                });
                return c;
              };
              a.values = function (a) {
                if (a == null) throw new TypeError("Object.values called on non-object");
                var c = [];
                for (var d in a) g.call(a, d) && c.push(a[d]);
                b("ie8DontEnum")(a, function (b) {
                  return c.push(a[b]);
                });
                return c;
              };
              e.exports = a;
            },
            null
          );
          __d(
            "ES7StringPrototype",
            [],
            function (a, b, c, d, e, f) {
              a = {};
              a.trimLeft = function () {
                return this.replace(/^\s+/, "");
              };
              a.trimRight = function () {
                return this.replace(/\s+$/, "");
              };
              e.exports = a;
            },
            null
          );
          /**
           * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
           */
          __d(
            "json3-3.3.2",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = {},
                h = { exports: g },
                i;
              function j() {
                (function () {
                  var b = typeof i === "function" && i.amd,
                    c = { "function": !0, object: !0 },
                    d = c[typeof g] && g && !g.nodeType && g,
                    e = (c[typeof window] && window) || this,
                    j = d && c[typeof h] && h && !h.nodeType && typeof a == "object" && a;
                  j && (j.global === j || j.window === j || j.self === j) && (e = j);
                  function k(b, a) {
                    b || (b = e.Object());
                    a || (a = e.Object());
                    var d = b.Number || e.Number,
                      g = b.String || e.String,
                      h = b.Object || e.Object,
                      i = b.Date || e.Date,
                      j = b.SyntaxError || e.SyntaxError,
                      l = b.TypeError || e.TypeError,
                      m = b.Math || e.Math;
                    b = b.JSON || e.JSON;
                    typeof b == "object" && b && ((a.stringify = b.stringify), (a.parse = b.parse));
                    b = h.prototype;
                    var n = b.toString,
                      o,
                      p,
                      q,
                      r = new i(-3509827334573292);
                    try {
                      r =
                        r.getUTCFullYear() == -109252 &&
                        r.getUTCMonth() === 0 &&
                        r.getUTCDate() === 1 &&
                        r.getUTCHours() == 10 &&
                        r.getUTCMinutes() == 37 &&
                        r.getUTCSeconds() == 6 &&
                        r.getUTCMilliseconds() == 708;
                    } catch (a) {}
                    function s(b) {
                      if (s[b] !== q) return s[b];
                      var c;
                      if (b == "bug-string-char-index") c = "a"[0] != "a";
                      else if (b == "json") c = s("json-stringify") && s("json-parse");
                      else {
                        var e,
                          f = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                        if (b == "json-stringify") {
                          var h = a.stringify,
                            j = typeof h == "function" && r;
                          if (j) {
                            (e = function () {
                              return 1;
                            }).toJSON = e;
                            try {
                              j =
                                h(0) === "0" &&
                                h(new d()) === "0" &&
                                h(new g()) == '""' &&
                                h(n) === q &&
                                h(q) === q &&
                                h() === q &&
                                h(e) === "1" &&
                                h([e]) == "[1]" &&
                                h([q]) == "[null]" &&
                                h(null) == "null" &&
                                h([q, n, null]) == "[null,null,null]" &&
                                h({ a: [e, !0, !1, null, "\0\b\n\f\r\t"] }) == f &&
                                h(null, e) === "1" &&
                                h([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
                                h(new i(-864e13)) == '"-271821-04-20T00:00:00.000Z"' &&
                                h(new i(864e13)) == '"+275760-09-13T00:00:00.000Z"' &&
                                h(new i(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
                                h(new i(-1)) == '"1969-12-31T23:59:59.999Z"';
                            } catch (a) {
                              j = !1;
                            }
                          }
                          c = j;
                        }
                        if (b == "json-parse") {
                          h = a.parse;
                          if (typeof h == "function")
                            try {
                              if (h("0") === 0 && !h(!1)) {
                                e = h(f);
                                var k = e.a.length == 5 && e.a[0] === 1;
                                if (k) {
                                  try {
                                    k = !h('"\t"');
                                  } catch (a) {}
                                  if (k)
                                    try {
                                      k = h("01") !== 1;
                                    } catch (a) {}
                                  if (k)
                                    try {
                                      k = h("1.") !== 1;
                                    } catch (a) {}
                                }
                              }
                            } catch (a) {
                              k = !1;
                            }
                          c = k;
                        }
                      }
                      return (s[b] = !!c);
                    }
                    if (!s("json")) {
                      var t = "[object Function]",
                        u = "[object Date]",
                        v = "[object Number]",
                        w = "[object String]",
                        x = "[object Array]",
                        y = "[object Boolean]",
                        z = s("bug-string-char-index");
                      if (!r)
                        var A = m.floor,
                          B = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                          C = function (a, b) {
                            return (
                              B[b] +
                              365 * (a - 1970) +
                              A((a - 1969 + (b = +(b > 1))) / 4) -
                              A((a - 1901 + b) / 100) +
                              A((a - 1601 + b) / 400)
                            );
                          };
                      (o = b.hasOwnProperty) ||
                        (o = function (a) {
                          var b = {},
                            c;
                          ((b.__proto__ = null), (b.__proto__ = { toString: 1 }), b).toString != n
                            ? (o = function (a) {
                                var b = this.__proto__;
                                a = a in ((this.__proto__ = null), this);
                                this.__proto__ = b;
                                return a;
                              })
                            : ((c = b.constructor),
                              (o = function (a) {
                                var b = (this.constructor || c).prototype;
                                return a in this && !(a in b && this[a] === b[a]);
                              }));
                          return o.call(this, a);
                        });
                      p = function (a, b) {
                        var d = 0,
                          e,
                          f;
                        (e = function () {
                          this.valueOf = 0;
                        }).prototype.valueOf = 0;
                        f = new e();
                        for (e in f) o.call(f, e) && d++;
                        f = null;
                        !d
                          ? ((f = [
                              "valueOf",
                              "toString",
                              "toLocaleString",
                              "propertyIsEnumerable",
                              "isPrototypeOf",
                              "hasOwnProperty",
                              "constructor",
                            ]),
                            (p = function (a, b) {
                              var d = n.call(a) == t,
                                e,
                                g =
                                  (!d &&
                                    typeof a.constructor != "function" &&
                                    c[typeof a.hasOwnProperty] &&
                                    a.hasOwnProperty) ||
                                  o;
                              for (e in a) !(d && e == "prototype") && g.call(a, e) && b(e);
                              for (d = f.length; (e = f[--d]); g.call(a, e) && b(e));
                            }))
                          : d == 2
                          ? (p = function (a, b) {
                              var c = {},
                                d = n.call(a) == t,
                                e;
                              for (e in a)
                                !(d && e == "prototype") &&
                                  !o.call(c, e) &&
                                  (c[e] = 1) &&
                                  o.call(a, e) &&
                                  b(e);
                            })
                          : (p = function (a, b) {
                              var c = n.call(a) == t,
                                d,
                                e;
                              for (d in a)
                                !(c && d == "prototype") &&
                                  o.call(a, d) &&
                                  !(e = d === "constructor") &&
                                  b(d);
                              (e || o.call(a, (d = "constructor"))) && b(d);
                            });
                        return p(a, b);
                      };
                      if (!s("json-stringify")) {
                        var D = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t",
                          },
                          E = "000000",
                          F = function (a, b) {
                            return (E + (b || 0)).slice(-a);
                          },
                          G = "\\u00",
                          H = function (a) {
                            var b = '"',
                              c = 0,
                              d = a.length,
                              e = !z || d > 10,
                              f = e && (z ? a.split("") : a);
                            for (; c < d; c++) {
                              var g = a.charCodeAt(c);
                              switch (g) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                  b += D[g];
                                  break;
                                default:
                                  if (g < 32) {
                                    b += G + F(2, g.toString(16));
                                    break;
                                  }
                                  b += e ? f[c] : a.charAt(c);
                              }
                            }
                            return b + '"';
                          },
                          I = function (a, b, c, d, e, f, g) {
                            var h, i, j, k, m, r, s, t, z, B;
                            try {
                              h = b[a];
                            } catch (a) {}
                            if (typeof h == "object" && h) {
                              i = n.call(h);
                              if (i == u && !o.call(h, "toJSON"))
                                if (h > -1 / 0 && h < 1 / 0) {
                                  if (C) {
                                    m = A(h / 864e5);
                                    for (j = A(m / 365.2425) + 1970 - 1; C(j + 1, 0) <= m; j++);
                                    for (k = A((m - C(j, 0)) / 30.42); C(j, k + 1) <= m; k++);
                                    m = 1 + m - C(j, k);
                                    r = ((h % 864e5) + 864e5) % 864e5;
                                    s = A(r / 36e5) % 24;
                                    t = A(r / 6e4) % 60;
                                    z = A(r / 1e3) % 60;
                                    r = r % 1e3;
                                  } else
                                    (j = h.getUTCFullYear()),
                                      (k = h.getUTCMonth()),
                                      (m = h.getUTCDate()),
                                      (s = h.getUTCHours()),
                                      (t = h.getUTCMinutes()),
                                      (z = h.getUTCSeconds()),
                                      (r = h.getUTCMilliseconds());
                                  h =
                                    (j <= 0 || j >= 1e4
                                      ? (j < 0 ? "-" : "+") + F(6, j < 0 ? -j : j)
                                      : F(4, j)) +
                                    "-" +
                                    F(2, k + 1) +
                                    "-" +
                                    F(2, m) +
                                    "T" +
                                    F(2, s) +
                                    ":" +
                                    F(2, t) +
                                    ":" +
                                    F(2, z) +
                                    "." +
                                    F(3, r) +
                                    "Z";
                                } else h = null;
                              else
                                typeof h.toJSON == "function" &&
                                  ((i != v && i != w && i != x) || o.call(h, "toJSON")) &&
                                  (h = h.toJSON(a));
                            }
                            c && (h = c.call(b, a, h));
                            if (h === null) return "null";
                            i = n.call(h);
                            if (i == y) return "" + h;
                            else if (i == v) return h > -1 / 0 && h < 1 / 0 ? "" + h : "null";
                            else if (i == w) return H("" + h);
                            if (typeof h == "object") {
                              for (j = g.length; j--; ) if (g[j] === h) throw l();
                              g.push(h);
                              B = [];
                              k = f;
                              f += e;
                              if (i == x) {
                                for (m = 0, j = h.length; m < j; m++)
                                  (s = I(m, h, c, d, e, f, g)), B.push(s === q ? "null" : s);
                                t = B.length
                                  ? e
                                    ? "[\n" + f + B.join(",\n" + f) + "\n" + k + "]"
                                    : "[" + B.join(",") + "]"
                                  : "[]";
                              } else
                                p(d || h, function (a) {
                                  var b = I(a, h, c, d, e, f, g);
                                  b !== q && B.push(H(a) + ":" + (e ? " " : "") + b);
                                }),
                                  (t = B.length
                                    ? e
                                      ? "{\n" + f + B.join(",\n" + f) + "\n" + k + "}"
                                      : "{" + B.join(",") + "}"
                                    : "{}");
                              g.pop();
                              return t;
                            }
                          };
                        a.stringify = function (a, b, d) {
                          var e, f, g, h;
                          if (c[typeof b] && b)
                            if ((h = n.call(b)) == t) f = b;
                            else if (h == x) {
                              g = {};
                              for (
                                var i = 0, j = b.length, k;
                                i < j;
                                k = b[i++], ((h = n.call(k)), h == w || h == v) && (g[k] = 1)
                              );
                            }
                          if (d)
                            if ((h = n.call(d)) == v) {
                              if ((d -= d % 1) > 0) for (e = "", d > 10 && (d = 10); e.length < d; e += " ");
                            } else h == w && (e = d.length <= 10 ? d : d.slice(0, 10));
                          return I("", ((k = {}), (k[""] = a), k), f, g, e, "", []);
                        };
                      }
                      if (!s("json-parse")) {
                        var J = g.fromCharCode,
                          K = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "\t",
                            110: "\n",
                            102: "\f",
                            114: "\r",
                          },
                          L,
                          M,
                          N = function () {
                            L = M = null;
                            throw j();
                          },
                          O = function () {
                            var a = M,
                              b = a.length,
                              c,
                              d,
                              e,
                              f,
                              g;
                            while (L < b) {
                              g = a.charCodeAt(L);
                              switch (g) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                  L++;
                                  break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                  c = z ? a.charAt(L) : a[L];
                                  L++;
                                  return c;
                                case 34:
                                  for (c = "@", L++; L < b; ) {
                                    g = a.charCodeAt(L);
                                    if (g < 32) N();
                                    else if (g == 92) {
                                      g = a.charCodeAt(++L);
                                      switch (g) {
                                        case 92:
                                        case 34:
                                        case 47:
                                        case 98:
                                        case 116:
                                        case 110:
                                        case 102:
                                        case 114:
                                          c += K[g];
                                          L++;
                                          break;
                                        case 117:
                                          d = ++L;
                                          for (e = L + 4; L < e; L++)
                                            (g = a.charCodeAt(L)),
                                              (g >= 48 && g <= 57) ||
                                                (g >= 97 && g <= 102) ||
                                                (g >= 65 && g <= 70) ||
                                                N();
                                          c += J("0x" + a.slice(d, L));
                                          break;
                                        default:
                                          N();
                                      }
                                    } else {
                                      if (g == 34) break;
                                      g = a.charCodeAt(L);
                                      d = L;
                                      while (g >= 32 && g != 92 && g != 34) g = a.charCodeAt(++L);
                                      c += a.slice(d, L);
                                    }
                                  }
                                  if (a.charCodeAt(L) == 34) {
                                    L++;
                                    return c;
                                  }
                                  N();
                                default:
                                  d = L;
                                  g == 45 && ((f = !0), (g = a.charCodeAt(++L)));
                                  if (g >= 48 && g <= 57) {
                                    g == 48 && ((g = a.charCodeAt(L + 1)), g >= 48 && g <= 57) && N();
                                    f = !1;
                                    for (; L < b && ((g = a.charCodeAt(L)), g >= 48 && g <= 57); L++);
                                    if (a.charCodeAt(L) == 46) {
                                      e = ++L;
                                      for (; e < b && ((g = a.charCodeAt(e)), g >= 48 && g <= 57); e++);
                                      e == L && N();
                                      L = e;
                                    }
                                    g = a.charCodeAt(L);
                                    if (g == 101 || g == 69) {
                                      g = a.charCodeAt(++L);
                                      (g == 43 || g == 45) && L++;
                                      for (e = L; e < b && ((g = a.charCodeAt(e)), g >= 48 && g <= 57); e++);
                                      e == L && N();
                                      L = e;
                                    }
                                    return +a.slice(d, L);
                                  }
                                  f && N();
                                  if (a.slice(L, L + 4) == "true") {
                                    L += 4;
                                    return !0;
                                  } else if (a.slice(L, L + 5) == "false") {
                                    L += 5;
                                    return !1;
                                  } else if (a.slice(L, L + 4) == "null") {
                                    L += 4;
                                    return null;
                                  }
                                  N();
                              }
                            }
                            return "$";
                          },
                          P = function (a) {
                            var b, c;
                            a == "$" && N();
                            if (typeof a == "string") {
                              if ((z ? a.charAt(0) : a[0]) == "@") return a.slice(1);
                              if (a == "[") {
                                b = [];
                                for (; ; c || (c = !0)) {
                                  a = O();
                                  if (a == "]") break;
                                  c && (a == "," ? ((a = O()), a == "]" && N()) : N());
                                  a == "," && N();
                                  b.push(P(a));
                                }
                                return b;
                              } else if (a == "{") {
                                b = {};
                                for (; ; c || (c = !0)) {
                                  a = O();
                                  if (a == "}") break;
                                  c && (a == "," ? ((a = O()), a == "}" && N()) : N());
                                  (a == "," ||
                                    typeof a != "string" ||
                                    (z ? a.charAt(0) : a[0]) != "@" ||
                                    O() != ":") &&
                                    N();
                                  b[a.slice(1)] = P(O());
                                }
                                return b;
                              }
                              N();
                            }
                            return a;
                          },
                          Q = function (a, b, c) {
                            c = R(a, b, c);
                            c === q ? delete a[b] : (a[b] = c);
                          },
                          R = function (a, b, c) {
                            var d = a[b],
                              e;
                            if (typeof d == "object" && d)
                              if (n.call(d) == x) for (e = d.length; e--; ) Q(d, e, c);
                              else
                                p(d, function (a) {
                                  Q(d, a, c);
                                });
                            return c.call(a, b, d);
                          };
                        a.parse = function (a, b) {
                          var c;
                          L = 0;
                          M = "" + a;
                          a = P(O());
                          O() != "$" && N();
                          L = M = null;
                          return b && n.call(b) == t ? R(((c = {}), (c[""] = a), c), "", b) : a;
                        };
                      }
                    }
                    a.runInContext = k;
                    return a;
                  }
                  if (d && !b) k(e, d);
                  else {
                    var l = e.JSON,
                      m = e.JSON3,
                      n = !1,
                      o = k(
                        e,
                        (e.JSON3 = {
                          noConflict: function () {
                            n || ((n = !0), (e.JSON = l), (e.JSON3 = m), (l = m = null));
                            return o;
                          },
                        })
                      );
                    e.JSON = { parse: o.parse, stringify: o.stringify };
                  }
                  b &&
                    i(function () {
                      return o;
                    });
                }.call(this));
              }
              var k = !1,
                l = function () {
                  k || ((k = !0), j());
                  return h.exports;
                };
              b = function (a) {
                switch (a) {
                  case void 0:
                    return l();
                }
              };
              e.exports = b;
            },
            null
          );
          __d(
            "json3",
            ["json3-3.3.2"],
            function (a, b, c, d, e, f) {
              e.exports = b("json3-3.3.2")();
            },
            null
          );
          __d(
            "ES",
            [
              "ES5Array",
              "ES5ArrayPrototype",
              "ES5Date",
              "ES5FunctionPrototype",
              "ES5Object",
              "ES5StringPrototype",
              "ES6Array",
              "ES6ArrayPrototype",
              "ES6DatePrototype",
              "ES6Number",
              "ES6Object",
              "ES7ArrayPrototype",
              "ES7Object",
              "ES7StringPrototype",
              "json3",
            ],
            function (a, b, c, d, e, f) {
              var g = {}.toString,
                h = { "JSON.stringify": b("json3").stringify, "JSON.parse": b("json3").parse };
              d = {
                "Array.prototype": b("ES5ArrayPrototype"),
                "Function.prototype": b("ES5FunctionPrototype"),
                "String.prototype": b("ES5StringPrototype"),
                Object: b("ES5Object"),
                Array: b("ES5Array"),
                Date: b("ES5Date"),
              };
              f = {
                Object: b("ES6Object"),
                "Array.prototype": b("ES6ArrayPrototype"),
                "Date.prototype": b("ES6DatePrototype"),
                Number: b("ES6Number"),
                Array: b("ES6Array"),
              };
              b = {
                Object: b("ES7Object"),
                "String.prototype": b("ES7StringPrototype"),
                "Array.prototype": b("ES7ArrayPrototype"),
              };
              function a(a) {
                for (var b in a) {
                  if (!Object.prototype.hasOwnProperty.call(a, b)) continue;
                  var c = a[b],
                    d = b.split(".");
                  if (d.length === 2) {
                    var e = d[0],
                      f = d[1];
                    if (!e || !f || !window[e] || !window[e][f]) {
                      var g = e ? window[e] : "-",
                        i = e && window[e] && f ? window[e][f] : "-";
                      throw new Error(
                        "Unexpected state (t11975770): " + (e + ", " + f + ", " + g + ", " + i + ", " + b)
                      );
                    }
                  }
                  e = d.length === 2 ? window[d[0]][d[1]] : window[b];
                  for (var j in c) {
                    if (!Object.prototype.hasOwnProperty.call(c, j)) continue;
                    if (typeof c[j] !== "function") {
                      h[b + "." + j] = c[j];
                      continue;
                    }
                    f = e[j];
                    h[b + "." + j] = f && /\{\s+\[native code\]\s\}/.test(f) ? f : c[j];
                  }
                }
              }
              a(d);
              a(f);
              a(b);
              function c(a, b, c) {
                var d = c ? g.call(a).slice(8, -1) + ".prototype" : a,
                  e = h[d + "." + b] || a[b];
                if (typeof e === "function") {
                  for (var f = arguments.length, i = new Array(f > 3 ? f - 3 : 0), j = 3; j < f; j++)
                    i[j - 3] = arguments[j];
                  return e.apply(a, i);
                } else if (e) return e;
                throw new Error("Polyfill " + d + " does not have implementation of " + b);
              }
              e.exports = c;
            },
            null
          );
          __d(
            "sdk.babelHelpers",
            ["ES5FunctionPrototype", "ES5Object", "ES6Object"],
            function (a, b, c, d, e, f) {
              var g = {},
                h = Object.prototype.hasOwnProperty;
              g.inheritsLoose = function (a, c) {
                b("ES6Object").assign(a, c);
                a.prototype = b("ES5Object").create(c && c.prototype);
                a.prototype.constructor = a;
                a.__superConstructor__ = c;
                return c;
              };
              g.inherits = g.inheritsLoose;
              g.wrapNativeSuper = function (a) {
                var b = typeof Map === "function" ? new Map() : void 0;
                g.wrapNativeSuper = function (a) {
                  if (a === null) return null;
                  if (typeof a !== "function")
                    throw new TypeError("Super expression must either be null or a function");
                  if (b !== void 0) {
                    if (b.has(a)) return b.get(a);
                    b.set(a, c);
                  }
                  g.inheritsLoose(c, a);
                  function c() {
                    a.apply(this, arguments);
                  }
                  return c;
                };
                return g.wrapNativeSuper(a);
              };
              g.assertThisInitialized = function (a) {
                if (a === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return a;
              };
              g._extends = b("ES6Object").assign;
              g["extends"] = g._extends;
              g.construct = function (a, b) {
                var c = [null];
                c.push.apply(c, b);
                return new (Function.prototype.bind.apply(a, c))();
              };
              g.objectWithoutPropertiesLoose = function (a, b) {
                var c = {};
                for (var d in a) {
                  if (!h.call(a, d) || b.indexOf(d) >= 0) continue;
                  c[d] = a[d];
                }
                return c;
              };
              g.objectWithoutProperties = g.objectWithoutPropertiesLoose;
              g.taggedTemplateLiteralLoose = function (a, b) {
                b || (b = a.slice(0));
                a.raw = b;
                return a;
              };
              g.bind = b("ES5FunctionPrototype").bind;
              e.exports = g;
            },
            null
          );
          var ES = require("ES");
          var babelHelpers = require("sdk.babelHelpers");
          (function (a, b) {
            var c = "keys",
              d = "values",
              e = "entries",
              f = (function () {
                var a = h(Array),
                  b;
                a ||
                  (b = (function () {
                    "use strict";
                    function a(a, b) {
                      (this.$1 = a), (this.$2 = b), (this.$3 = 0);
                    }
                    var b = a.prototype;
                    b.next = function () {
                      if (this.$1 == null) return { value: void 0, done: !0 };
                      var a = this.$1,
                        b = this.$1.length,
                        f = this.$3,
                        g = this.$2;
                      if (f >= b) {
                        this.$1 = void 0;
                        return { value: void 0, done: !0 };
                      }
                      this.$3 = f + 1;
                      if (g === c) return { value: f, done: !1 };
                      else if (g === d) return { value: a[f], done: !1 };
                      else if (g === e) return { value: [f, a[f]], done: !1 };
                    };
                    b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function () {
                      return this;
                    };
                    return a;
                  })());
                return {
                  keys: a
                    ? function (a) {
                        return a.keys();
                      }
                    : function (a) {
                        return new b(a, c);
                      },
                  values: a
                    ? function (a) {
                        return a.values();
                      }
                    : function (a) {
                        return new b(a, d);
                      },
                  entries: a
                    ? function (a) {
                        return a.entries();
                      }
                    : function (a) {
                        return new b(a, e);
                      },
                };
              })(),
              g = (function () {
                var a = h(String),
                  b;
                a ||
                  (b = (function () {
                    "use strict";
                    function a(a) {
                      (this.$1 = a), (this.$2 = 0);
                    }
                    var b = a.prototype;
                    b.next = function () {
                      if (this.$1 == null) return { value: void 0, done: !0 };
                      var a = this.$2,
                        b = this.$1,
                        c = b.length;
                      if (a >= c) {
                        this.$1 = void 0;
                        return { value: void 0, done: !0 };
                      }
                      var d = b.charCodeAt(a);
                      if (d < 55296 || d > 56319 || a + 1 === c) d = b[a];
                      else {
                        c = b.charCodeAt(a + 1);
                        c < 56320 || c > 57343 ? (d = b[a]) : (d = b[a] + b[a + 1]);
                      }
                      this.$2 = a + d.length;
                      return { value: d, done: !1 };
                    };
                    b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function () {
                      return this;
                    };
                    return a;
                  })());
                return {
                  keys: function () {
                    throw TypeError("Strings default iterator doesn't implement keys.");
                  },
                  values: a
                    ? function (a) {
                        return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                      }
                    : function (a) {
                        return new b(a);
                      },
                  entries: function () {
                    throw TypeError("Strings default iterator doesn't implement entries.");
                  },
                };
              })();
            function h(a) {
              return (
                typeof a.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] ===
                  "function" &&
                typeof a.prototype.values === "function" &&
                typeof a.prototype.keys === "function" &&
                typeof a.prototype.entries === "function"
              );
            }
            var i = (function () {
                "use strict";
                function a(a, b) {
                  (this.$1 = a), (this.$2 = b), (this.$3 = ES("Object", "keys", !1, a)), (this.$4 = 0);
                }
                var b = a.prototype;
                b.next = function () {
                  var a = this.$3.length,
                    b = this.$4,
                    f = this.$2,
                    g = this.$3[b];
                  if (b >= a) {
                    this.$1 = void 0;
                    return { value: void 0, done: !0 };
                  }
                  this.$4 = b + 1;
                  if (f === c) return { value: g, done: !1 };
                  else if (f === d) return { value: this.$1[g], done: !1 };
                  else if (f === e) return { value: [g, this.$1[g]], done: !1 };
                };
                b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function () {
                  return this;
                };
                return a;
              })(),
              j = {
                keys: function (a) {
                  return new i(a, c);
                },
                values: function (a) {
                  return new i(a, d);
                },
                entries: function (a) {
                  return new i(a, e);
                },
              };
            function k(a, b) {
              if (typeof a === "string") return g[b || d](a);
              else if (ES("Array", "isArray", !1, a)) return f[b || d](a);
              else if (a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"])
                return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
              else return j[b || e](a);
            }
            ES("Object", "assign", !1, k, {
              KIND_KEYS: c,
              KIND_VALUES: d,
              KIND_ENTRIES: e,
              keys: function (a) {
                return k(a, c);
              },
              values: function (a) {
                return k(a, d);
              },
              entries: function (a) {
                return k(a, e);
              },
              generic: j.entries,
            });
            a.FB_enumerate = k;
          })(typeof global === "undefined" ? this : global);
          __d("cr:717822", [], function (g, r, rd, rl, m, e) {
            m.exports = require("TimeSliceImpl");
          });
          __d("cr:806696", [], function (g, r, rd, rl, m, e) {
            m.exports = require("clearTimeoutBlue");
          });
          __d("cr:986633", [], function (g, r, rd, rl, m, e) {
            m.exports = require("setTimeoutAcrossTransitionsBlue");
          });
          __d("cr:807042", [], function (g, r, rd, rl, m, e) {
            m.exports = require("setTimeoutBlue");
          });
          __d("cr:1003267", [], function (g, r, rd, rl, m, e) {
            m.exports = require("clearIntervalBlue");
          });
          __d("cr:896462", [], function (g, r, rd, rl, m, e) {
            m.exports = require("setIntervalAcrossTransitionsBlue");
          });
          __d("cr:696703", [], function (g, r, rd, rl, m, e) {
            m.exports = null;
          });
          __d("cr:692209", [], function (g, r, rd, rl, m, e) {
            m.exports = require("cancelIdleCallbackBlue");
          });
          __d("cr:925100", [], function (g, r, rd, rl, m, e) {
            m.exports = require("RunBlue");
          });
          __d("cr:1268308", [], function (g, r, rd, rl, m, e) {
            m.exports = require("BanzaiNew");
          });
          __d("CurrentEnvironment", [], {
            "facebookdotcom": true,
            "messengerdotcom": false,
            "workplacedotcom": false,
          });
          __d("UriNeedRawQuerySVConfig", [], {
            "uris": [
              "dms.netmng.com",
              "doubleclick.net",
              "r.msn.com",
              "watchit.sky.com",
              "graphite.instagram.com",
              "www.kfc.co.th",
              "learn.pantheon.io",
              "www.landmarkshops.in",
              "www.ncl.com",
              "s0.wp.com",
              "www.tatacliq.com",
              "bs.serving-sys.com",
              "kohls.com",
              "lazada.co.th",
              "xg4ken.com",
              "technopark.ru",
              "officedepot.com.mx",
              "bestbuy.com.mx",
              "booking.com",
            ],
          });
          __d("CometAltpayJsSdkIframeAllowedDomains", [], {
            "allowed_domains": [
              "https://live.adyen.com",
              "https://integration-facebook.payu.in",
              "https://facebook.payulatam.com",
              "https://facebook.dlocal.com",
              "https://altpay-pe-test.herokuapp.com",
            ],
          });
          __d("KSConfig", [], {
            "killed": {
              "__set": [
                "POCKET_MONSTERS_CREATE",
                "POCKET_MONSTERS_DELETE",
                "VIDEO_DIMENSIONS_FROM_PLAYER_IN_UPLOAD_DIALOG",
                "STO_AD_DELIVERY_PAUSE",
                "POCKET_MONSTERS_UPDATE_NAME",
                "ADS_PLACEMENT_FIX_PUBLISHER_PLATFORMS_MUTATION",
                "MOBILITY_KILL_OLD_VISIBILITY_POSITION_SETTING",
                "WORKPLACE_DISPLAY_TEXT_EVIDENCE_REPORTING",
                "DYNAMIC_ADS_SET_CATALOG_AND_PRODUCT_SET_TOGETHER",
                "BUSINESS_GRAPH_SETTING_APP_ASSIGNED_USERS_NEW_API",
                "BUSINESS_GRAPH_SETTING_WABA_ASSIGNED_USERS_NEW_API",
                "BUSINESS_GRAPH_SETTING_ESG_ASSIGNED_USERS_NEW_API",
                "BUSINESS_GRAPH_SETTING_PRODUCT_CATALOG_ASSIGNED_USERS_NEW_API",
                "BUSINESS_MANAGER_SHOW_UI_HIDDEN_TASK_FOR_ASSET",
                "BUSINESS_GRAPH_SETTING_BU_ASSIGNED_USERS_NEW_API",
                "BUSINESS_GRAPH_SETTING_SESG_ASSIGNED_USERS_NEW_API",
                "RECRUITING_REQUISITION_VALIDATE_COMPANY_GROUPING_ON_LINK",
                "CALENDAR_WEEKVIEW_NEW_BADGE",
                "POST_INSIGHTS_CAPITALIZE_BREAKDOWNS_FOR_ACTION_TYPE",
                "WORKPLACE_PLATFORM_SECURE_APPS_MAILBOXES",
                "BUY_AT_COVID_PUNCHOUT_CHECKOUT_MODAL",
                "DISABLE_HEARTBEAT_POLLING",
                "LAB_NET_NEW_UI_RELEASE",
                "WIT_DEPRECATE_GITHUB",
                "WIT_DEPRECATE_OLD_UX",
                "EO_SRT_HELPDESK_DASHBOARD_DISABLE_UNUSED_TAB_IN_RIGHT_PANEL",
              ],
            },
            "ko": {
              "__set": [
                "acrJTh9WGdp",
                "1oOE64fL4wO",
                "2dhqRnqXGLQ",
                "3GaiM9xYkM2",
                "7r6mSP7ofr2",
                "1ntjZ2zgf03",
                "3oh5Mw86USj",
                "8NAceEy9JZo",
                "5mNEXob0nTj",
                "4j36SVzvP3w",
                "8PlKuowafe8",
                "53gCxKq281G",
                "3yzzwBY7Npj",
                "4NbCsulUUI3",
                "4NSq3ZC4ScE",
                "1onzIv0jH6H",
                "5LSlJUj3BnT",
                "7EZACZMulOj",
                "6ra3sC1PDFj",
                "5XCz1h9Iaw3",
                "7cwY7xv5s7H",
                "1GgWO1oFyLN",
                "DDZhogI19W",
                "9k7Y5kmDD1A",
                "4jkC8ia3PYA",
                "6fHw06UmAMW",
              ],
            },
          });
          __d("CSSLoaderConfig", [], {
            "timeout": 5000,
            "modulePrefix": "BLCSS:",
            "loadEventSupported": true,
          });
          __d("ImmediateImplementationExperiments", [], { "prefer_message_channel": true });
          __d("PromiseUsePolyfillSetImmediateGK", [], { "www_always_use_polyfill_setimmediate": false });
          __d("TrustedTypesConfig", [], { "useTrustedTypes": false, "reportOnly": true });
          __d("BootloaderConfig", [], {
            "jsRetries": [200, 500],
            "jsRetryAbortNum": 2,
            "jsRetryAbortTime": 5,
            "payloadEndpointURI": { "thing": "https://connect.facebook.net/ajax/bootloader-endpoint/" },
            "preloadBE": { "thing": true },
            "shouldCoalesceModuleRequestsMadeInSameTick": { "thing": true },
            "retryQueuedBootloads": false,
            "silentDups": false,
          });
          __d("BootloaderEndpointConfig", [], {
            "endpointURI": "https://connect.facebook.net/ajax/bootloader-endpoint/",
            "debugNoBatching": false,
          });
          __d("CurrentCommunityInitialData", [], {});
          __d("CurrentUserInitialData", [], {
            "USER_ID": "0",
            "ACCOUNT_ID": "0",
            "NAME": "",
            "SHORT_NAME": null,
            "IS_MESSENGER_ONLY_USER": false,
            "IS_DEACTIVATED_ALLOWED_ON_MESSENGER": false,
            "APP_ID": null,
          });
          __d("DTSGInitialData", [], {});
          __d("SprinkleConfig", [], { "param_name": "jazoest", "version": 2, "should_randomize": false });
          __d("DTSGInitData", [], { "token": "", "async_get_token": "" });
          __d("ISB", [], {});
          __d("LSD", [], {});
          __d("SiteData", [], {
            "server_revision": 1002068558,
            "client_revision": 1002068558,
            "tier": "",
            "push_phase": "C3",
            "pkg_cohort": "PHASED:DEFAULT",
            "pr": 1,
            "haste_site": "www",
            "be_one_ahead": false,
            "ir_on": true,
            "is_rtl": false,
            "is_comet": false,
            "hsi": "6821718521411648824-0",
            "spin": 0,
            "__spin_r": 1002068558,
            "__spin_b": "trunk",
            "__spin_t": 1588305114,
            "vip": "157.240.26.27",
          });
          __d("WebConnectionClassServerGuess", [], { "connectionClass": "UNKNOWN" });
          __d("ServerNonce", [], { "ServerNonce": "YXb_N1H4wbEcgvaTLdOzzm" });
          __d("InitialCookieConsent", [], {
            "deferCookies": false,
            "noCookies": true,
            "shouldShowCookieBanner": false,
          });
          __d("CookieCoreLoggingConfig", [], {
            "maximumIgnorableStallMs": 16.67,
            "sampleRate": 9.7e-5,
            "sampleRateClassic": 1.0e-10,
            "sampleRateFastStale": 1.0e-8,
          });
          __d("CookieCoreConfig", [], {});
          __d("UserAgentData", [], {
            "browserArchitecture": "64",
            "browserFullVersion": "18.18363",
            "browserMinorVersion": 18363,
            "browserName": "Edge",
            "browserVersion": 18,
            "deviceName": "Unknown",
            "engineName": "EdgeHTML",
            "engineVersion": "18.18363",
            "platformArchitecture": "64",
            "platformName": "Windows",
            "platformVersion": "10",
            "platformFullVersion": "10",
          });
          __d("ZeroRewriteRules", [], {
            "rewrite_rules": {},
            "whitelist": {
              "/hr/r": 1,
              "/hr/p": 1,
              "/zero/unsupported_browser/": 1,
              "/zero/policy/optin": 1,
              "/zero/optin/write/": 1,
              "/zero/optin/legal/": 1,
              "/zero/optin/free/": 1,
              "/about/privacy/": 1,
              "/about/privacy/update/": 1,
              "/about/privacy/update": 1,
              "/zero/toggle/welcome/": 1,
              "/zero/toggle/nux/": 1,
              "/fup/interstitial/": 1,
              "/work/landing": 1,
              "/work/login/": 1,
              "/work/email/": 1,
              "/ai.php": 1,
              "/js_dialog_resources/dialog_descriptions_android.json": 0,
              "/connect/jsdialog/MPlatformAppInvitesJSDialog/": 0,
              "/connect/jsdialog/MPlatformOAuthShimJSDialog/": 0,
              "/connect/jsdialog/MPlatformLikeJSDialog/": 0,
              "/qp/interstitial/": 1,
              "/qp/action/redirect/": 1,
              "/qp/action/close/": 1,
              "/zero/support/ineligible/": 1,
              "/zero_balance_redirect/": 1,
              "/zero_balance_redirect": 1,
              "/zero_balance_redirect/l/": 1,
              "/l.php": 1,
              "/lsr.php": 1,
              "/ajax/dtsg/": 1,
              "/checkpoint/block/": 1,
              "/exitdsite": 1,
              "/zero/balance/pixel/": 1,
              "/zero/balance/": 1,
              "/zero/balance/carrier_landing/": 1,
              "/zero/flex/logging/": 1,
              "/tr": 1,
              "/tr/": 1,
              "/sem_campaigns/sem_pixel_test/": 1,
              "/bookmarks/flyout/body/": 1,
              "/zero/subno/": 1,
              "/confirmemail.php": 1,
              "/policies/": 1,
              "/mobile/internetdotorg/classifier/": 1,
              "/zero/dogfooding": 1,
              "/xti.php": 1,
              "/zero/fblite/config/": 1,
              "/hr/zsh/wc/": 1,
              "/ajax/bootloader-endpoint/": 1,
              "/4oh4.php": 1,
              "/autologin.php": 1,
              "/birthday_help.php": 1,
              "/checkpoint/": 1,
              "/contact-importer/": 1,
              "/cr.php": 1,
              "/legal/terms/": 1,
              "/login.php": 1,
              "/login/": 1,
              "/mobile/account/": 1,
              "/n/": 1,
              "/remote_test_device/": 1,
              "/upsell/buy/": 1,
              "/upsell/buyconfirm/": 1,
              "/upsell/buyresult/": 1,
              "/upsell/promos/": 1,
              "/upsell/continue/": 1,
              "/upsell/h/promos/": 1,
              "/upsell/loan/learnmore/": 1,
              "/upsell/purchase/": 1,
              "/upsell/promos/upgrade/": 1,
              "/upsell/buy_redirect/": 1,
              "/upsell/loan/buyconfirm/": 1,
              "/upsell/loan/buy/": 1,
              "/upsell/sms/": 1,
              "/wap/a/channel/reconnect.php": 1,
              "/wap/a/nux/wizard/nav.php": 1,
              "/wap/appreg.php": 1,
              "/wap/birthday_help.php": 1,
              "/wap/c.php": 1,
              "/wap/confirmemail.php": 1,
              "/wap/cr.php": 1,
              "/wap/login.php": 1,
              "/wap/r.php": 1,
              "/zero/datapolicy": 1,
              "/a/timezone.php": 1,
              "/a/bz": 1,
              "/bz/reliability": 1,
              "/r.php": 1,
              "/mr/": 1,
              "/reg/": 1,
              "/registration/log/": 1,
              "/terms/": 1,
              "/f123/": 1,
              "/expert/": 1,
              "/experts/": 1,
              "/terms/index.php": 1,
              "/terms.php": 1,
              "/srr/": 1,
              "/msite/redirect/": 1,
              "/fbs/pixel/": 1,
              "/contactpoint/preconfirmation/": 1,
              "/contactpoint/cliff/": 1,
              "/contactpoint/confirm/submit/": 1,
              "/contactpoint/confirmed/": 1,
              "/contactpoint/login/": 1,
              "/preconfirmation/contactpoint_change/": 1,
              "/help/contact/": 1,
              "/survey/": 1,
              "/upsell/loyaltytopup/accept/": 1,
              "/settings/": 1,
              "/lite/": 1,
              "/zero_status_update/": 1,
            },
          });
          __d("BanzaiConfig", [], {
            "EXPIRY": 86400000,
            "MAX_SIZE": 10000,
            "MAX_WAIT": 150000,
            "RESTORE_WAIT": 150000,
            "blacklist": ["time_spent"],
            "gks": {
              "boosted_component": true,
              "boosted_pagelikes": true,
              "jslogger": true,
              "mercury_send_error_logging": true,
              "platform_oauth_client_events": true,
              "xtrackable_clientview_batch": true,
              "visibility_tracking": true,
              "graphexplorer": true,
              "gqls_web_logging": true,
              "sticker_search_ranking": true,
            },
          });
          __d("JSSDKRuntimeConfig", [], {
            "locale": "en_GB",
            "revision": "1002068558",
            "rtl": false,
            "sdkab": null,
            "sdkns": "FB",
            "sdkurl": "https://connect.facebook.net/en_GB/all.js",
          });
          __d("UrlMapConfig", [], {
            "www": "www.facebook.com",
            "m": "m.facebook.com",
            "business": "business.facebook.com",
            "api": "api.facebook.com",
            "api_read": "api-read.facebook.com",
            "graph": "graph.facebook.com",
            "an": "an.facebook.com",
            "fbcdn": "static.xx.fbcdn.net",
            "cdn": "staticxx.facebook.com",
            "graph_facebook": "graph.facebook.com",
            "graph_gaming": "graph.fb.gg",
          });
          __d("JSSDKConfig", [], {
            "features": {
              "allow_non_canvas_app_events": false,
              "error_handling": { "rate": 4 },
              "e2e_ping_tracking": { "rate": 0.1 },
              "xd_timeout": { "rate": 1, "value": 60000 },
              "use_bundle": false,
              "should_log_response_error": true,
              "popup_blocker_scribe_logging": { "rate": 100 },
              "https_only_enforce_starting": 2538809200000,
              "https_only_learn_more":
                "https://developers.facebook.com/blog/post/2018/06/08/enforce-https-facebook-login/",
              "https_only_scribe_logging": { "rate": 1 },
              "log_perf": { "rate": 0.001 },
              "use_cors_oauth_status": { "rate": 100 },
              "xd_arbiter_register_new": { "rate": 100 },
              "xd_arbiter_handle_message_new": { "rate": 100 },
              "legacy_xd_init": { "rate": 0 },
            },
          });
          __d("JSSDKCssConfig", [], {
            "rules":
              '.fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:"lucida grande", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}\u0040keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}\n.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}.fb_dialog_advanced{border-radius:8px;padding:10px}.fb_dialog_content{background:#fff;color:#373737}.fb_dialog_close_icon{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}.fb_dialog_mobile .fb_dialog_close_icon{left:5px;right:auto;top:5px}.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}.fb_dialog_close_icon:hover{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent}.fb_dialog_close_icon:active{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent}.fb_dialog_iframe{line-height:0}.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #365899;color:#fff;font-size:14px;font-weight:bold;margin:0}.fb_dialog_content .dialog_title>span{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Cou7n-nqK52.gif) no-repeat 5px 50\u0025;float:left;padding:5px 0 7px 26px}body.fb_hidden{height:100\u0025;left:0;margin:0;overflow:visible;position:absolute;top:-10000px;transform:none;width:100\u0025}.fb_dialog.fb_dialog_mobile.loading{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/3rhSv5V8j3o.gif) white no-repeat 50\u0025 50\u0025;min-height:100\u0025;min-width:100\u0025;overflow:hidden;position:absolute;top:0;z-index:10001}.fb_dialog.fb_dialog_mobile.loading.centered{background:none;height:auto;min-height:initial;min-width:initial;width:auto}.fb_dialog.fb_dialog_mobile.loading.centered #fb_dialog_loader_spinner{width:100\u0025}.fb_dialog.fb_dialog_mobile.loading.centered .fb_dialog_content{background:none}.loading.centered #fb_dialog_loader_close{clear:both;color:#fff;display:block;font-size:18px;padding-top:20px}#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .4);bottom:0;left:0;min-height:100\u0025;position:absolute;right:0;top:0;width:100\u0025;z-index:10000}#fb-root #fb_dialog_ipad_overlay.hidden{display:none}.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}.fb_dialog_mobile .fb_dialog_iframe{position:sticky;top:0}.fb_dialog_content .dialog_header{background:linear-gradient(from(#738aba), to(#2c4987));border-bottom:1px solid;border-color:#043b87;box-shadow:white 0 1px 1px -1px inset;color:#fff;font:bold 14px Helvetica, sans-serif;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}.fb_dialog_content .dialog_header table{height:43px;width:100\u0025}.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px}.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px}.fb_dialog_content .touchable_button{background:linear-gradient(from(#4267B2), to(#2a4887));background-clip:padding-box;border:1px solid #29487d;border-radius:3px;display:inline-block;line-height:18px;margin-top:3px;max-width:85px;padding:4px 12px;position:relative}.fb_dialog_content .dialog_header .touchable_button input{background:none;border:none;color:#fff;font:bold 12px Helvetica, sans-serif;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}.fb_dialog_content .dialog_content{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif) no-repeat 50\u0025 50\u0025;border:1px solid #4a4a4a;border-bottom:0;border-top:0;height:150px}.fb_dialog_content .dialog_footer{background:#f5f6f7;border:1px solid #4a4a4a;border-top-color:#ccc;height:40px}#fb_dialog_loader_close{float:left}.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}#fb_dialog_loader_spinner{animation:rotateSpinner 1.2s linear infinite;background-color:transparent;background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/t-wz8gw1xG1.png);background-position:50\u0025 50\u0025;background-repeat:no-repeat;height:24px;width:24px}\u0040keyframes rotateSpinner{0\u0025{transform:rotate(0deg)}100\u0025{transform:rotate(360deg)}}\n.fb_iframe_widget{display:inline-block;position:relative}.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}.fb_iframe_widget iframe{position:absolute}.fb_iframe_widget_fluid_desktop,.fb_iframe_widget_fluid_desktop span,.fb_iframe_widget_fluid_desktop iframe{max-width:100\u0025}.fb_iframe_widget_fluid_desktop iframe{min-width:220px;position:relative}.fb_iframe_widget_lift{z-index:1}.fb_iframe_widget_fluid{display:inline}.fb_iframe_widget_fluid span{width:100\u0025}',
            "components": ["css:fb.css.base", "css:fb.css.dialog", "css:fb.css.iframewidget"],
          });
          __d("JSSDKXDConfig", [], {
            "XdUrl": "/connect/xd_arbiter.php?version=46",
            "XdBundleUrl": "/connect/xd_arbiter/r/hdCCDMOB0Ms.js?version=46",
            "useCdn": true,
          });
          __d("JSSDKCanvasPrefetcherConfig", [], {
            "blacklist": [144959615576466, 768691303149786, 320528941393723],
            "sampleRate": 500,
          });
          __d(
            "ExecutionContextObservers",
            [],
            function (a, b, c, d, e, f) {
              a = {
                MUTATION_COUNTING: 0,
                PROFILING_COUNTERS: 1,
                REFERENCE_COUNTING: 2,
                HEARTBEAT: 3,
                CALL_STACK: 4,
                TIMESLICE_EXECUTION_LOGGER: 5,
                FLUX_PERF_TOOL: 6,
              };
              b = {
                MUTATION_COUNTING: 0,
                REFERENCE_COUNTING: 1,
                PROFILING_COUNTERS: 2,
                HEARTBEAT: 3,
                CALL_STACK: 4,
                TIMESLICE_EXECUTION_LOGGER: 5,
                FLUX_PERF_TOOL: 6,
              };
              c = { beforeIDs: a, afterIDs: b };
              e.exports = c;
            },
            null
          );
          __d(
            "ifRequired",
            [],
            function (a, b, c, d, e, f) {
              function a(a, b, c) {
                var e;
                d &&
                  d.call(null, [a], function (a) {
                    e = a;
                  });
                if (e && b) return b(e);
                else if (!e && c) return c();
              }
              e.exports = a;
            },
            null
          );
          __d(
            "uniqueID",
            [],
            function (a, b, c, d, e, f) {
              var g = "js_",
                h = 36,
                i = 0;
              function a() {
                return g + (i++).toString(h);
              }
              e.exports = a;
            },
            null
          );
          __d(
            "CallStackExecutionObserver",
            ["ExecutionContextObservers", "ifRequired", "uniqueID"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g,
                h = null;
              function i(a, b) {
                if (b) {
                  var c = b.id,
                    d = b.name;
                  b = b.interactions;
                  var e = Error.stackTraceLimit;
                  Error.stackTraceLimit = 1e3;
                  var f = new Error().stack;
                  Error.stackTraceLimit = e;
                  b.forEach(function (b) {
                    b.inform(a + ":" + d, { rawStackTrace: f }).addStringAnnotation("id", c);
                  });
                }
              }
              a = {
                onNewContextCreated: function (a, c, d) {
                  a = b("ifRequired")("TimeSliceAutoclosedInteraction", function (a) {
                    return a;
                  });
                  a = a ? a.getInteractionsActiveRightNow() : [];
                  a = a.filter(function (a) {
                    return a.isEnabledForMode("full");
                  });
                  if (d && d.isContinuation && a.length) {
                    var e = b("uniqueID")();
                    d = Error.stackTraceLimit;
                    Error.stackTraceLimit = 1e3;
                    var f = new Error().stack;
                    Error.stackTraceLimit = d;
                    a.forEach(function (a) {
                      var b = a
                        .inform("created_continuation:" + c, { rawStackTrace: f })
                        .addStringAnnotation("id", e);
                      h && b.addStringAnnotation("parentID", h);
                      a.trace().addStringAnnotation("has_stack_trace", "1");
                    });
                    return { id: e, parentID: h, name: c, interactions: a };
                  }
                  return null;
                },
                onContextCanceled: function (a, b) {
                  i("cancelling_continuation", b);
                },
                onBeforeContextStarted: function (a, b, c) {
                  a = h;
                  b && b.id && (h = b.id);
                  return { executionParentID: a };
                },
                onAfterContextStarted: function (a, b, c, d) {
                  i("executing_continuation", b);
                  return c;
                },
                onAfterContextEnded: function (a, b, c, d) {
                  c && (h = c.executionParentID), i("executing_continuation_end", b);
                },
                getBeforeID: function () {
                  return (g || (g = b("ExecutionContextObservers"))).beforeIDs.CALL_STACK;
                },
                getAfterID: function () {
                  return (g || (g = b("ExecutionContextObservers"))).afterIDs.CALL_STACK;
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "ErrorSerializer",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = { debug: 1, info: 2, warn: 3, error: 4, fatal: 5 };
              function h(a) {
                try {
                  var b = o(a, /^([\s\S]*)<\!\[EX\[(\[.*\])\]\]>([\s\S]*)$/);
                  if (!b) return n(a);
                  var c = b[0],
                    d = b[1];
                  b = b[2];
                  d = ES("JSON", "parse", !1, d);
                  var e = d[0];
                  d = d.slice(1);
                  e = n(e);
                  e.message = c + e.message + b;
                  d &&
                    d.length > 0 &&
                    (e.params = ES(d, "map", !0, function (a) {
                      return String(a);
                    }));
                  return e;
                } catch (b) {
                  return { message: "Unable to parse error message %s because %s", params: [a, b.message] };
                }
              }
              function b(a) {
                return "<![EX[" + ES("JSON", "stringify", !1, k(a)) + "]]>";
              }
              function i(a) {
                if (a.messageFormat == null) return h(a.message);
                var b = { message: a.messageFormat };
                a.messageParams && (b.params = [].concat(a.messageParams));
                b.forcedKey = a.forcedKey;
                a.taalOpcodes && (b.taalOpcodes = a.taalOpcodes);
                return b;
              }
              function c(a, b) {
                var c = i(a);
                if (ES("Object", "isFrozen", !1, a)) return;
                b.type && (!a.type || g[a.type] > g[b.type]) && (a.type = b.type);
                if (b.fbloggerMetadata != null) {
                  var d = a.fbloggerMetadata || [];
                  d.push.apply(d, b.fbloggerMetadata);
                  a.fbloggerMetadata = d;
                }
                b.project != null && (a.project = b.project);
                b.errorName != null && (a.errorName = b.errorName);
                b.componentStack != null && (a.componentStack = b.componentStack);
                d = c.message;
                var e = m(c.params);
                if (b.messageFormat != null) {
                  var f;
                  d += " [Caught in: " + b.messageFormat + "]";
                  e.push.apply(e, (f = b.messageParams) != null ? f : []);
                }
                a.messageFormat = d;
                a.messageParams = e;
                f = b.forcedKey;
                d = c.forcedKey;
                b = f != null && d != null ? f + "_" + d : (e = f) != null ? e : d;
                a.forcedKey = b;
                c.taalOpcodes != null && (a.taalOpcodes = c.taalOpcodes);
              }
              function j(a, b) {
                var c = 0;
                a = a.replace(/%s/g, function () {
                  return c < b.length ? b[c++] : "NOPARAM";
                });
                c < b.length && (a += " PARAMS" + ES("JSON", "stringify", !1, b.slice(c)));
                return a;
              }
              function d(a) {
                var b = a.message || "",
                  c = m(a.params);
                return j(b, c) + l(a);
              }
              function k(a) {
                return [a.message + l(a)].concat(m(a.params));
              }
              function l(a) {
                var b = a.taalOpcodes;
                a = a.forcedKey;
                var c = [];
                b && c.push.apply(c, b);
                a && c.push("4" + a.replace(/[^\d\w]/g, "_"));
                return c.length > 0 ? " TAAL[" + c.join(";") + "]" : "";
              }
              function m(a) {
                return ES((a = a) != null ? a : [], "map", !0, function (a) {
                  return String(a);
                });
              }
              function n(a) {
                var b = o(a, /^([\s\S]*) TAAL\[(.*)\]$/);
                b = (b = b) != null ? b : [a, null];
                var c = b[0];
                b = b[1];
                c = { message: c };
                if (b) {
                  var d = [];
                  for (
                    var b = b.split(";"),
                      e = ES("Array", "isArray", !1, b),
                      f = 0,
                      b = e ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                    ;

                  ) {
                    var g;
                    if (e) {
                      if (f >= b.length) break;
                      g = b[f++];
                    } else {
                      f = b.next();
                      if (f.done) break;
                      g = f.value;
                    }
                    g = g;
                    if (g === "1" || g === "2" || g === "3") d.push(parseInt(g, 10));
                    else if (g[0] === "4" && g.length > 1) c.forcedKey = g.substring(1);
                    else return { message: a };
                  }
                  d.length > 0 && (c.taalOpcodes = d);
                }
                return c;
              }
              function o(a, b) {
                if (typeof a === "string") {
                  a = a.match(b);
                  if (a && a.length > 0) return a.slice(1);
                }
              }
              e.exports = a.ErrorSerializer = {
                aggregateError: c,
                parseFromError: i,
                stringify: b,
                toFormattedMessage: d,
                toReadableMessage: j,
                toMessageWithParams: k,
                toStringParams: m,
              };
            },
            3
          );
          __d(
            "FBLoggerMetadata",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = [];
              a = (function () {
                function a() {
                  this.metadata = [].concat(g);
                }
                var b = a.prototype;
                b.addMetadata = function (a, b, c) {
                  this.metadata.push([a, b, c]);
                  return this;
                };
                b.isEmpty = function () {
                  return this.metadata.length === 0;
                };
                b.formatMetadata = function () {
                  var a = [];
                  ES(this.metadata, "forEach", !0, function (b) {
                    if (b && b.length) {
                      b = ES(b, "map", !0, function (a) {
                        return a != null ? String(a).replace(/:/g, "_") : "";
                      }).join(":");
                      a.push(b);
                    }
                  });
                  return a;
                };
                a.addGlobalMetadata = function (a, b, c) {
                  g.push([a, b, c]);
                };
                a.getGlobalMetadata = function () {
                  return g;
                };
                a.unsetGlobalMetadata = function (a, b) {
                  g = ES(g, "filter", !0, function (c) {
                    return !(ES("Array", "isArray", !1, c) && c[0] === a && c[1] === b);
                  });
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "TAALOpcodes",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              a = { PREVIOUS_FILE: 1, PREVIOUS_FRAME: 2, PREVIOUS_DIR: 3, FORCED_KEY: 4 };
              e.exports = a;
            },
            null
          );
          __d(
            "getSimpleHash",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = "abcdefghijklmnopqrstuvwxyz012345";
              function a() {
                var a = 0;
                for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++) c[d] = arguments[d];
                for (var e = 0; e < c.length; e++) {
                  var f = c[e];
                  if (f != null) {
                    var h = f.length;
                    for (var i = 0; i < h; i++) a = (a << 5) - a + f.charCodeAt(i);
                  }
                }
                var j = "";
                for (var k = 0; k < 6; k++) (j = g.charAt(a & 31) + j), (a >>= 5);
                return j;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "performance",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              b = a.performance || a.msPerformance || a.webkitPerformance || {};
              e.exports = b;
            },
            null
          );
          __d(
            "performanceNow",
            ["performance"],
            function (a, b, c, d, e, f) {
              var g;
              if ((g || (g = b("performance"))).now)
                c = function () {
                  return (g || (g = b("performance"))).now();
                };
              else {
                d = a._cstart;
                f = ES("Date", "now", !1);
                var h = typeof d === "number" && d < f ? d : f,
                  i = 0;
                c = function () {
                  var a = ES("Date", "now", !1),
                    b = a - h;
                  b < i && ((h -= i - b), (b = a - h));
                  i = b;
                  return b;
                };
              }
              e.exports = c;
            },
            null
          );
          __d(
            "ErrorNormalizeUtils",
            ["ErrorSerializer", "FBLoggerMetadata", "TAALOpcodes", "getSimpleHash", "performanceNow"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g,
                h = [
                  /\(([^\s\)\()]+):(\d+):(\d+)\)$/,
                  /@([^\s\)\()]+):(\d+):(\d+)$/,
                  /^([^\s\)\()]+):(\d+):(\d+)$/,
                  /^at ([^\s\)\()]+):(\d+):(\d+)$/,
                ];
              Error.stackTraceLimit != null && Error.stackTraceLimit < 40 && (Error.stackTraceLimit = 40);
              function i(a) {
                var b = a.name,
                  c = a.message;
                a = a.stack;
                if (a == null) return null;
                if (b != null && c != null && c !== "") {
                  var d = b + ": " + c + "\n";
                  if (ES(a, "startsWith", !0, d)) return a.substr(d.length);
                }
                if (b != null) {
                  d = b + "\n";
                  if (ES(a, "startsWith", !0, d)) return a.substr(d.length);
                }
                if (c != null && c !== "") {
                  b = ": " + c + "\n";
                  d = ES(a, "indexOf", !0, b);
                  c = a.substring(0, d);
                  if (/^\w+$/.test(c)) return a.substring(d + b.length);
                }
                return a;
              }
              function j(a) {
                a = ES(a, "trim", !0);
                var b;
                a;
                var c, d, e;
                if (ES(a, "includes", !0, "charset=utf-8;base64,")) b = "<inlined-file>";
                else {
                  var f;
                  for (var g = 0; g < h.length; g++) {
                    var i = h[g];
                    f = a.match(i);
                    if (f != null) break;
                  }
                  f != null && f.length === 4
                    ? ((c = f[1]),
                      (d = parseInt(f[2], 10)),
                      (e = parseInt(f[3], 10)),
                      (b = a.substring(0, a.length - f[0].length)))
                    : (b = a);
                  b = ES(b.replace(/^at /, ""), "trim", !0);
                }
                i = { identifier: b, script: c, line: d, column: e };
                i.text = k(i);
                return i;
              }
              function k(a) {
                var b = a.identifier,
                  c = a.script,
                  d = a.line;
                a = a.column;
                b = "    at " + ((b = b) != null ? b : "<unknown>");
                c != null && d != null && a != null && (b += " (" + c + ":" + d + ":" + a + ")");
                return b;
              }
              function l(a) {
                return a == null || a === "" ? [] : ES(a.split(/\n\n/)[0].split("\n"), "map", !0, j);
              }
              function m(a) {
                a = i(a);
                return l(a);
              }
              function n(a) {
                if (a == null || a === "") return null;
                a = a.split("\n");
                a.splice(0, 1);
                return ES(a, "map", !0, function (a) {
                  return ES(a, "trim", !0);
                });
              }
              function o(c) {
                var d,
                  e,
                  f,
                  h = m(c),
                  i = b("ErrorSerializer").parseFromError(c),
                  k = c.framesToPop;
                if (k != null) {
                  var l;
                  k = Math.min(k, h.length);
                  i.taalOpcodes = (l = i.taalOpcodes) != null ? l : [];
                  while (k-- > 0) i.taalOpcodes.unshift(b("TAALOpcodes").PREVIOUS_FRAME);
                }
                l = n(c.componentStack);
                k = l == null ? null : ES(l, "map", !0, j);
                var p = c.fbloggerMetadata ? c.fbloggerMetadata : [],
                  q = ES(b("FBLoggerMetadata").getGlobalMetadata(), "map", !0, function (a) {
                    return a.join(":");
                  });
                p = [].concat(p, q);
                p.length === 0 && (p = void 0);
                q = ES(h, "map", !0, function (a) {
                  return a.text;
                }).join("\n");
                d = (d = c.errorName) != null ? d : c.name;
                var r = c.type || "error",
                  s = c.loggingSource,
                  t = c.project;
                e = (e = c.lineNumber) != null ? e : c.line;
                f = (f = c.columnNumber) != null ? f : c.column;
                f = {
                  column: f == null ? null : String(f),
                  clientTime: Math.floor(ES("Date", "now", !1) / 1e3),
                  componentStackFrames: k,
                  deferredSource: c.deferredSource != null ? o(c.deferredSource) : null,
                  extra: (f = c.extra) != null ? f : {},
                  fbloggerMetadata: p,
                  fbtrace_id: c.fbtrace_id,
                  guard: (k = c.guard) != null ? k : "",
                  guardList: (f = c.guardList) != null ? f : [],
                  hash: b("getSimpleHash")(d, q, r, t, s),
                  isNormalizedError: !0,
                  line: e == null ? null : String(e),
                  loggingSource: s,
                  message: b("ErrorSerializer").toFormattedMessage(i),
                  messageFormat: i.message,
                  messageParams: ES((p = i.params) != null ? p : [], "map", !0, function (a) {
                    return String(a);
                  }),
                  name: d,
                  page_time: Math.floor((g || (g = b("performanceNow")))()),
                  project: t,
                  reactComponentStack: l,
                  script: (k = c.fileName) != null ? k : c.sourceURL,
                  serverHash: c.serverHash,
                  stack: q,
                  stackFrames: h,
                  type: r,
                };
                i.forcedKey != null && (f.forcedKey = i.forcedKey);
                i.taalOpcodes && (f.taalOpcodes = i.taalOpcodes);
                e = a.location;
                e && (f.windowLocationURL = e.href);
                for (var u in f) f[u] == null && delete f[u];
                return f;
              }
              e.exports = { normalizeError: o, formatStackFrame: k };
            },
            null
          );
          __d(
            "ErrorBrowserConsole",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = !1,
                h = a.console;
              function b(a) {
                var b = h[a.type] ? a.type : "error";
                if (b === "error" && !g) {
                  b = a.message;
                  h.error(
                    "ErrorUtils caught an error:\n\n" +
                      b +
                      "\n\nSubsequent errors won't be logged; see https://fburl.com/debugjs."
                  );
                  g = !0;
                }
              }
              e.exports = { errorListener: b };
            },
            null
          );
          __d(
            "ErrorGuardState",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = [];
              a = {
                pushGuard: function (a) {
                  g.unshift(a);
                },
                popGuard: function () {
                  g.shift();
                },
                inGuard: function () {
                  return g.length !== 0;
                },
                cloneGuardList: function () {
                  return ES(g, "map", !0, function (a) {
                    return a.name;
                  });
                },
                findDeferredSource: function () {
                  for (var a = 0; a < g.length; a++) {
                    var b = g[a];
                    if (b.deferredSource != null) return b.deferredSource;
                  }
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "err",
            ["TAALOpcodes"],
            function (a, b, c, d, e, f) {
              "use strict";
              function a(a) {
                var c = new Error(a);
                if (c.stack === void 0)
                  try {
                    throw c;
                  } catch (a) {}
                c.messageFormat = a;
                for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++)
                  e[f - 1] = arguments[f];
                c.messageParams = ES(e, "map", !0, function (a) {
                  return String(a);
                });
                c.taalOpcodes = [b("TAALOpcodes").PREVIOUS_FRAME];
                return c;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "getErrorSafe",
            ["TAALOpcodes", "err"],
            function (a, b, c, d, e, f) {
              "use strict";
              function a(a) {
                if (a != null && typeof a === "object" && typeof a.message === "string")
                  if (Object.isExtensible && Object.isExtensible(a)) return a;
                  else {
                    var c = b("err")("Non-extensible thrown: %s", String(a.message));
                    c.taalOpcodes = c.taalOpcodes || [];
                    c.taalOpcodes.push(b("TAALOpcodes").PREVIOUS_FRAME);
                    return c;
                  }
                else {
                  c = b("err")("Non-object thrown: %s", String(a));
                  c.taalOpcodes = c.taalOpcodes || [];
                  c.taalOpcodes.push(b("TAALOpcodes").PREVIOUS_FRAME);
                  return c;
                }
              }
              e.exports = a;
            },
            null
          );
          __d(
            "ErrorUnhandledRejectionHandler",
            ["ErrorNormalizeUtils", "err", "getErrorSafe"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = null,
                h = !1,
                i = {
                  onunhandledrejection: function (a) {
                    if (!g) return;
                    var c = a.reason;
                    if (
                      c != null &&
                      typeof c === "object" &&
                      (c.name == null || c.name === "" || c.message == null || c.message === "")
                    )
                      try {
                        var d = b("err")("UnhandledRejection: %s", ES("JSON", "stringify", !1, c));
                        d = b("ErrorNormalizeUtils").normalizeError(d);
                      } catch (a) {
                        var e = b("err")(
                          "UnhandledRejection: (circular) %s",
                          ES("Object", "keys", !1, c).join(",")
                        );
                        d = b("ErrorNormalizeUtils").normalizeError(e);
                      }
                    else d = b("ErrorNormalizeUtils").normalizeError(b("getErrorSafe")(c));
                    d.loggingSource || (d.loggingSource = "ONUNHANDLEDREJECTION");
                    g.reportNormalizedError(d);
                    a.preventDefault();
                  },
                  setup: function (b) {
                    (g = b),
                      typeof a.addEventListener === "function" &&
                        !h &&
                        ((h = !0), a.addEventListener("unhandledrejection", i.onunhandledrejection));
                  },
                };
              e.exports = i;
            },
            null
          );
          __d(
            "removeFromArray",
            [],
            function (a, b, c, d, e, f) {
              function a(a, b) {
                b = ES(a, "indexOf", !0, b);
                b !== -1 && a.splice(b, 1);
              }
              e.exports = a;
            },
            null
          );
          __d(
            "ErrorPubSub",
            [
              "ErrorBrowserConsole",
              "ErrorGuardState",
              "ErrorNormalizeUtils",
              "ErrorUnhandledRejectionHandler",
              "removeFromArray",
            ],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = typeof window === "undefined" ? "<self.onerror>" : "<window.onerror>",
                h = "<global.react>",
                i = [],
                j = [],
                k = 50,
                l = !1,
                m = {
                  history: j,
                  addListener: function (a, b) {
                    b === void 0 && (b = !1),
                      i.push(a),
                      b ||
                        ES(j, "forEach", !0, function (b) {
                          return a(b, (b = b.loggingSource) != null ? b : "DEPRECATED");
                        });
                  },
                  unshiftListener: function (a) {
                    i.unshift(a);
                  },
                  removeListener: function (a) {
                    b("removeFromArray")(i, a);
                  },
                  onerror: function (a, b, c, d, e) {
                    e = (e = e) != null ? e : new Error(a || "");
                    e.fileName == null && b != null && (e.fileName = b);
                    e.line == null && c != null && (e.line = c);
                    e.column == null && d != null && (e.column = d);
                    e.guard = g;
                    e.guardList = [g];
                    e.loggingSource = "ONERROR";
                    m.reportError(e);
                  },
                  reportError: function (a) {
                    a = b("ErrorNormalizeUtils").normalizeError(a);
                    m.reportNormalizedError(a);
                  },
                  reportNormalizedError: function (a) {
                    if (l) return !1;
                    var c = b("ErrorGuardState").cloneGuardList();
                    a.componentStackFrames && c.unshift(h);
                    c.length > 0 && ((a.guard = a.guard || c[0]), (a.guardList = c));
                    if (a.deferredSource == null) {
                      c = b("ErrorGuardState").findDeferredSource();
                      c != null && (a.deferredSource = b("ErrorNormalizeUtils").normalizeError(c));
                    }
                    j.length > k && j.splice(k / 2, 1);
                    j.push(a);
                    l = !0;
                    for (var c = 0; c < i.length; c++)
                      try {
                        var d;
                        i[c](a, (d = a.loggingSource) != null ? d : "DEPRECATED");
                      } catch (a) {}
                    l = !1;
                    return !0;
                  },
                };
              m.addListener(b("ErrorBrowserConsole").errorListener);
              a.onerror = m.onerror;
              b("ErrorUnhandledRejectionHandler").setup(m);
              e.exports = m;
            },
            3
          );
          __d(
            "FBLogMessage",
            ["ErrorNormalizeUtils", "ErrorPubSub", "ErrorSerializer", "FBLoggerMetadata", "TAALOpcodes"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g;
              a = (function () {
                function a(a) {
                  (this.project = a),
                    (this.events = []),
                    (this.metadata = new (b("FBLoggerMetadata"))()),
                    (this.taalOpcodes = []);
                }
                var c = a.prototype;
                c.$1 = function (c, d) {
                  var e = this.error,
                    f = this.events,
                    h = this.project,
                    i = this.metadata,
                    j = this.forcedKey,
                    k;
                  for (var l = arguments.length, m = new Array(l > 2 ? l - 2 : 0), n = 2; n < l; n++)
                    m[n - 2] = arguments[n];
                  if (this.normalizedError) {
                    var o = {
                      message: this.normalizedError.messageFormat + " [Caught in: " + d + "]",
                      params: [].concat(this.normalizedError.messageParams, m),
                      forcedKey: j,
                    };
                    k = ES("Object", "assign", !1, {}, this.normalizedError, {
                      message: b("ErrorSerializer").toFormattedMessage(o),
                      messageFormat: o.message,
                      messageParams: b("ErrorSerializer").toStringParams(o.params),
                      project: h,
                      type: c,
                    });
                  } else if (e)
                    this.taalOpcodes.length > 0 &&
                      new a("fblogger")
                        .blameToPreviousFrame()
                        .blameToPreviousFrame()
                        .warn("Blame helpers do not work with catching"),
                      b("ErrorSerializer").aggregateError(e, {
                        messageFormat: d,
                        messageParams: b("ErrorSerializer").toStringParams(m),
                        errorName: e.name,
                        forcedKey: j,
                        project: h,
                        type: c,
                      }),
                      (k = b("ErrorNormalizeUtils").normalizeError(e));
                  else {
                    var p = new Error(String(d));
                    if (p.stack === void 0)
                      try {
                        throw p;
                      } catch (a) {}
                    p.messageFormat = d;
                    p.messageParams = b("ErrorSerializer").toStringParams(m);
                    p.forcedKey = j;
                    p.project = h;
                    p.name = "FBLogger";
                    p.type = c;
                    p.taalOpcodes = [b("TAALOpcodes").PREVIOUS_FRAME, b("TAALOpcodes").PREVIOUS_FRAME].concat(
                      this.taalOpcodes
                    );
                    k = b("ErrorNormalizeUtils").normalizeError(p);
                  }
                  k.loggingSource = "FBLOGGER";
                  i.isEmpty() || (k.fbloggerMetadata = i.formatMetadata());
                  if (f.length > 0)
                    if (k.events != null) {
                      var q;
                      (q = k.events).push.apply(q, f);
                    } else k.events = f;
                  (g || (g = b("ErrorPubSub"))).reportNormalizedError(k);
                };
                c.fatal = function (a) {
                  for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++)
                    c[d - 1] = arguments[d];
                  this.$1.apply(this, ["fatal", a].concat(c));
                };
                c.mustfix = function (a) {
                  for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++)
                    c[d - 1] = arguments[d];
                  this.$1.apply(this, ["error", a].concat(c));
                };
                c.warn = function (a) {
                  for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++)
                    c[d - 1] = arguments[d];
                  this.$1.apply(this, ["warn", a].concat(c));
                };
                c.info = function (a) {
                  for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++)
                    c[d - 1] = arguments[d];
                  this.$1.apply(this, ["info", a].concat(c));
                };
                c.debug = function (a) {};
                c.catching = function (b) {
                  !(b instanceof Error)
                    ? new a("fblogger")
                        .blameToPreviousFrame()
                        .warn("Catching non-Error object is not supported")
                    : (this.error = b);
                  return this;
                };
                c.catchingNormalizedError = function (a) {
                  this.normalizedError = a;
                  return this;
                };
                c.event = function (a) {
                  this.events.push(a);
                  return this;
                };
                c.blameToPreviousFile = function () {
                  this.taalOpcodes.push(b("TAALOpcodes").PREVIOUS_FILE);
                  return this;
                };
                c.blameToPreviousFrame = function () {
                  this.taalOpcodes.push(b("TAALOpcodes").PREVIOUS_FRAME);
                  return this;
                };
                c.blameToPreviousDirectory = function () {
                  this.taalOpcodes.push(b("TAALOpcodes").PREVIOUS_DIR);
                  return this;
                };
                c.addToCategoryKey = function (a) {
                  this.forcedKey = a;
                  return this;
                };
                c.addMetadata = function (a, b, c) {
                  this.metadata.addMetadata(a, b, c);
                  return this;
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "FBLogger",
            ["FBLoggerMetadata", "FBLogMessage"],
            function (a, b, c, d, e, f) {
              "use strict";
              a = function (a, c) {
                var d = new (b("FBLogMessage"))(a);
                return c != null ? d.event(a + "." + c) : d;
              };
              a.addGlobalMetadata = function (a, c, d) {
                b("FBLoggerMetadata").addGlobalMetadata(a, c, d);
              };
              e.exports = a;
            },
            null
          );
          __d(
            "unrecoverableViolation",
            ["ErrorSerializer", "FBLogger", "TAALOpcodes"],
            function (a, b, c, d, e, f) {
              "use strict";
              function a(a, c, d) {
                d = d === void 0 ? {} : d;
                d = d.error;
                c = b("FBLogger")(c);
                var e;
                d
                  ? ((e = d),
                    (c = c.catching(d)),
                    b("ErrorSerializer").aggregateError(d, { messageFormat: a }))
                  : ((e = new Error(a)), (e.taalOpcodes = [b("TAALOpcodes").PREVIOUS_FRAME]));
                c.blameToPreviousFrame().mustfix(a);
                throw e;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "CircularBuffer",
            ["unrecoverableViolation"],
            function (a, b, c, d, e, f) {
              a = (function () {
                "use strict";
                function a(a) {
                  if (a <= 0)
                    throw b("unrecoverableViolation")(
                      "Buffer size should be a positive integer",
                      "comet_infra"
                    );
                  this.$1 = a;
                  this.$2 = 0;
                  this.$3 = [];
                  this.$4 = [];
                }
                var c = a.prototype;
                c.write = function (a) {
                  var b = this;
                  this.$3.length < this.$1
                    ? this.$3.push(a)
                    : (this.$4.forEach(function (a) {
                        return a(b.$3[b.$2]);
                      }),
                      (this.$3[this.$2] = a),
                      this.$2++,
                      (this.$2 %= this.$1));
                  return this;
                };
                c.onEvict = function (a) {
                  this.$4.push(a);
                  return this;
                };
                c.read = function () {
                  return this.$3.slice(this.$2).concat(this.$3.slice(0, this.$2));
                };
                c.expand = function (a) {
                  if (a > this.$1) {
                    var b = this.read();
                    this.$2 = 0;
                    this.$3 = b;
                    this.$1 = a;
                  }
                  return this;
                };
                c.dropFirst = function (a) {
                  if (a <= this.$1) {
                    var b = this.read();
                    this.$2 = 0;
                    b.splice(0, a);
                    this.$3 = b;
                  }
                  return this;
                };
                c.clear = function () {
                  this.$2 = 0;
                  this.$3 = [];
                  return this;
                };
                c.currentSize = function () {
                  return this.$3.length;
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "Env",
            [],
            function (a, b, c, d, e, f) {
              b = {
                ajaxpipe_token: null,
                compat_iframe_token: null,
                iframeKey: "",
                iframeTarget: "",
                iframeToken: "",
                isCQuick: !1,
                start: ES("Date", "now", !1),
                nocatch: !1,
              };
              a.Env && ES("Object", "assign", !1, b, a.Env);
              a.Env = b;
              e.exports = b;
            },
            null
          );
          __d(
            "ErrorGuard",
            ["Env", "ErrorGuardState", "ErrorNormalizeUtils", "ErrorPubSub", "ErrorSerializer"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g,
                h,
                i = "<anonymous guard>";
              b("ErrorGuardState");
              b("ErrorNormalizeUtils");
              g || (g = b("ErrorPubSub"));
              var j = {
                applyWithGuard: function (a, c, d, e) {
                  b("ErrorGuardState").pushGuard({
                    name: (e == null ? void 0 : e.name) || (a.name ? "func_name:" + a.name : null) || i,
                    deferredSource: e == null ? void 0 : e.deferredSource,
                  });
                  if ((h || (h = b("Env"))).nocatch)
                    try {
                      return a.apply(c, d);
                    } finally {
                      b("ErrorGuardState").popGuard();
                    }
                  try {
                    return Function.prototype.apply.call(a, c, d);
                  } catch (h) {
                    c = (c = e) != null ? c : {};
                    var f = c.deferredSource,
                      j = c.onError;
                    c = c.onNormalizedError;
                    var k =
                      h != null && typeof h === "object" ? h : new Error("applyWithGuard caught non-object");
                    f && (k.deferredSource = f);
                    b("ErrorSerializer").aggregateError(k, {
                      project: "ErrorGuard",
                      type: (f = e == null ? void 0 : e.errorType) != null ? f : "fatal",
                    });
                    e = b("ErrorNormalizeUtils").normalizeError(k);
                    e.loggingSource = "GUARDED";
                    if (k == null && a)
                      try {
                        (e.extra[a.toString().substring(0, 100)] = "function"),
                          d != null &&
                            d.length &&
                            (e.extra[Array.from(d).toString().substring(0, 100)] = "args");
                      } catch (a) {}
                    f = b("ErrorGuardState").cloneGuardList();
                    e.guard = f[0];
                    e.guardList = f;
                    j && j(k);
                    c && c(e);
                    (g || (g = b("ErrorPubSub"))).reportNormalizedError(e);
                  } finally {
                    b("ErrorGuardState").popGuard();
                  }
                },
                guard: function (a, b) {
                  function c() {
                    for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++) d[e] = arguments[e];
                    return j.applyWithGuard(a, this, d, b);
                  }
                  a.__SMmeta && (c.__SMmeta = a.__SMmeta);
                  return c;
                },
                inGuard: function () {
                  return b("ErrorGuardState").inGuard();
                },
              };
              e.exports = a.ErrorGuard = j;
            },
            3
          );
          __d(
            "IntervalTrackingBoundedBuffer",
            ["CircularBuffer", "ErrorPubSub"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g,
                h = 5e3;
              a = (function () {
                function a(a) {
                  var c = this;
                  this.$6 = 0;
                  if (a != null) {
                    if (a <= 0) throw new Error("Size for a buffer must be greater than zero.");
                  } else a = h;
                  this.$4 = a;
                  this.$1 = new (b("CircularBuffer"))(a);
                  this.$1.onEvict(function () {
                    c.$6++;
                  });
                  this.$2 = [];
                  this.$3 = 1;
                  this.$5 = 0;
                }
                var c = a.prototype;
                c.open = function () {
                  var a = this,
                    b = this.$3++,
                    c = !1,
                    d,
                    e = this.$5,
                    f = {
                      id: b,
                      startIdx: e,
                      hasOverflown: function () {
                        return f.getOverflowSize() > 0;
                      },
                      getOverflowSize: function () {
                        return d != null ? d : Math.max(a.$6 - e, 0);
                      },
                      close: function () {
                        if (c) return [];
                        else {
                          c = !0;
                          d = a.$6 - e;
                          return a.$7(b);
                        }
                      },
                    };
                  this.$2.push(f);
                  return f;
                };
                c.pushElement = function (a) {
                  this.$2.length > 0 && (this.$1.write(a), this.$5++);
                  return this;
                };
                c.isActive = function () {
                  return this.$2.length > 0;
                };
                c.$8 = function (a) {
                  return Math.max(a - this.$6, 0);
                };
                c.$7 = function (a) {
                  var c, d, e, f;
                  for (var h = 0; h < this.$2.length; h++) {
                    var i = this.$2[h],
                      j = i.startIdx;
                    i = i.id;
                    i === a ? ((e = h), (f = j)) : (d == null || j < d) && (d = j);
                    (c == null || j < c) && (c = j);
                  }
                  if (e == null || c == null || f == null) {
                    (g || (g = b("ErrorPubSub"))).reportError(
                      new Error("messed up state inside IntervalTrackingBoundedBuffer")
                    );
                    return [];
                  }
                  this.$2.splice(e, 1);
                  i = this.$8(f);
                  j = this.$1.read().slice(i);
                  h = this.$8(d == null ? this.$5 : d) - this.$8(c);
                  h > 0 && (this.$1.dropFirst(h), (this.$6 += h));
                  return j;
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "WorkerUtils",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              function b() {
                try {
                  return "WorkerGlobalScope" in a && a instanceof a.WorkerGlobalScope;
                } catch (a) {
                  return !1;
                }
              }
              e.exports = { isWorkerContext: b };
            },
            null
          );
          __d(
            "getReusableTimeSliceContinuation",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              function a(a, b, c) {
                var d = !1,
                  e = a.getGuardedContinuation(c),
                  f = function (b) {
                    e(function () {
                      d || (e = a.getGuardedContinuation(c)), b();
                    });
                  };
                f.last = function (a) {
                  var b = e;
                  g();
                  b(a);
                };
                f[b] = {
                  cancel: function () {
                    d || (a.cancel(e), g(), (d = !0));
                  },
                  tokens: [],
                  invoked: !1,
                };
                function g() {
                  (d = !0),
                    (e = function (a) {
                      a();
                    });
                }
                return f;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "TAAL",
            ["TAALOpcodes"],
            function (a, b, c, d, e, f) {
              "use strict";
              a = {
                blameToPreviousFile: function (a) {
                  return this.applyOpcodes(a, [b("TAALOpcodes").PREVIOUS_FILE]);
                },
                blameToPreviousFrame: function (a) {
                  return this.applyOpcodes(a, [b("TAALOpcodes").PREVIOUS_FRAME]);
                },
                blameToPreviousDirectory: function (a) {
                  return this.applyOpcodes(a, [b("TAALOpcodes").PREVIOUS_DIR]);
                },
                applyOpcodes: function (a, b) {
                  return b && b.length ? a + " TAAL[" + b.join(";") + "]" : a;
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "ex",
            ["ErrorSerializer"],
            function (a, b, c, d, e, f) {
              function a(a) {
                for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++)
                  d[e - 1] = arguments[e];
                var f = ES(d, "map", !0, function (a) {
                  return String(a);
                });
                return b("ErrorSerializer").stringify({ message: a, params: f });
              }
              e.exports = a;
            },
            null
          );
          __d(
            "sprintf",
            [],
            function (a, b, c, d, e, f) {
              function a(a) {
                for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++)
                  c[d - 1] = arguments[d];
                var e = 0;
                return a.replace(/%s/g, function () {
                  return String(c[e++]);
                });
              }
              e.exports = a;
            },
            null
          );
          __d(
            "invariant",
            ["Env", "TAAL", "ex", "sprintf"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g,
                h = b("ex");
              function a(a, c) {
                if (!a) {
                  var d = c;
                  for (var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), g = 2; g < e; g++)
                    f[g - 2] = arguments[g];
                  if (typeof d === "number") {
                    var j = i(d, f),
                      k = j.message,
                      l = j.decoderLink;
                    d = k;
                    f.unshift(l);
                  } else if (d === void 0) {
                    d = "Invariant: ";
                    for (var m = 0; m < f.length; m++) d += "%s,";
                  }
                  d = b("TAAL").blameToPreviousFrame(d);
                  var n = new Error(h.apply(void 0, [d].concat(f)));
                  n.name = "Invariant Violation";
                  n.messageWithParams = [d].concat(f);
                  throw n;
                }
              }
              function i(a, c) {
                var d = "Minified invariant #" + a + "; %s";
                c.length > 0 &&
                  (d +=
                    " Params: " +
                    ES(c, "map", !0, function (a) {
                      return "%s";
                    }).join(", "));
                a =
                  (g || (g = b("Env"))).show_invariant_decoder === !0
                    ? "visit " + j(a, c) + " to see the full message."
                    : "";
                return { message: d, decoderLink: a };
              }
              function j(a, b) {
                a = "https://our.intern.facebook.com/intern/invariant/" + a + "/";
                b.length > 0 &&
                  (a +=
                    "?" +
                    ES(b, "map", !0, function (a, b) {
                      return "args[" + b + "]=" + encodeURIComponent(String(a));
                    }).join("&"));
                return a;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "nullthrows",
            [],
            function (a, b, c, d, e, f) {
              a = function (a, b) {
                b === void 0 && (b = "Got unexpected null or undefined");
                if (a != null) return a;
                a = new Error(b);
                a.framesToPop = 1;
                throw a;
              };
              e.exports = a;
            },
            null
          );
          __d(
            "performanceAbsoluteNow",
            ["performance"],
            function (a, b, c, d, e, f) {
              var g;
              if (
                (g || (g = b("performance"))).now &&
                (g || (g = b("performance"))).timing &&
                (g || (g = b("performance"))).timing.navigationStart
              ) {
                var h = (g || (g = b("performance"))).timing.navigationStart;
                a = function () {
                  return (g || (g = b("performance"))).now() + h;
                };
              } else
                a = function () {
                  return Date.now();
                };
              e.exports = a;
            },
            null
          );
          __d(
            "wrapFunction",
            [],
            function (a, b, c, d, e, f) {
              var g = {};
              a = function (a, b, c) {
                var d = b in g ? g[b](a, c) : a;
                return function () {
                  for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
                  return d.apply(this, b);
                };
              };
              a.setWrapper = function (a, b) {
                g[b] = a;
              };
              e.exports = a;
            },
            null
          );
          __d(
            "TimeSliceImpl",
            [
              "invariant",
              "CallStackExecutionObserver",
              "CircularBuffer",
              "Env",
              "ErrorGuard",
              "FBLogger",
              "IntervalTrackingBoundedBuffer",
              "WorkerUtils",
              "getReusableTimeSliceContinuation",
              "nullthrows",
              "performanceAbsoluteNow",
              "wrapFunction",
            ],
            function (a, b, c, d, e, f, g) {
              var h,
                i,
                j,
                k = [],
                l = [],
                m = "key" + Math.random(),
                n = 1,
                o = !1,
                p = 0,
                q = 1,
                r = 2,
                s = {},
                t = p,
                u = new (b("CircularBuffer"))(100),
                v = 0,
                w = 0;
              c = (h || (h = b("Env"))).timesliceBufferSize;
              c == null && (c = 5e3);
              var x = new (b("IntervalTrackingBoundedBuffer"))(c),
                y = "stackTraceLimit" in Error,
                z = [],
                A = [],
                B = [];
              function C() {
                return D(z);
              }
              function D(a) {
                return a.length > 0 ? a[a.length - 1] : null;
              }
              function E(a, c) {
                var d = {};
                (i || (i = b("ErrorGuard"))).applyWithGuard(I, null, [a, c, d]);
                i.applyWithGuard(J, null, [a, c, d]);
                z.push(a);
                A.push(c);
                B.push(d);
              }
              function F(a, b, c) {
                k.forEach(function (d) {
                  var e = d.onNewContextCreated(C(), b, c);
                  a[d.getBeforeID()] = e;
                });
              }
              function G(a, b) {
                k.forEach(function (c) {
                  c.onContextCanceled(a, b[c.getBeforeID()]);
                });
              }
              function H(a, b, c) {
                l.forEach(function (d) {
                  d.onAfterContextEnded(a, b[d.getBeforeID()], c[d.getBeforeID()], a.meta);
                });
              }
              function I(a, b, c) {
                k.forEach(function (d) {
                  var e = d.onBeforeContextStarted(a, b[d.getBeforeID()], a.meta);
                  c[d.getBeforeID()] = e;
                });
              }
              function J(a, b, c) {
                k.forEach(function (d) {
                  var e = d.onAfterContextStarted(a, b[d.getBeforeID()], c[d.getBeforeID()], a.meta);
                  c[d.getBeforeID()] = e;
                });
              }
              function K() {
                var a = C(),
                  c = D(A),
                  d = D(B);
                if (a == null || c == null || d == null) {
                  b("FBLogger")("TimeSlice").mustfix("popped too many times off the timeslice stack");
                  o = !1;
                  return;
                }
                (i || (i = b("ErrorGuard"))).applyWithGuard(H, null, [a, c, d]);
                o = !a.isRoot;
                z.pop();
                A.pop();
                B.pop();
              }
              var L = {
                PropagationType: { CONTINUATION: 0, EXECUTION: 1, ORPHAN: 2 },
                guard: function (a, c, d) {
                  var e;
                  typeof a === "function" || g(0, 3725);
                  typeof c === "string" || g(0, 3726);
                  var f = M(d);
                  if (a[m]) return a;
                  f.root || L.checkCoverage();
                  var k;
                  o && (k = C());
                  var l = {},
                    p = 0,
                    q = void 0;
                  e = (e = (h || (h = b("Env"))).deferred_stack_trace_rate) != null ? e : 0;
                  d &&
                    d.registerCallStack &&
                    e > 0 &&
                    Math.random() < 1 / e &&
                    (q = new Error("deferred execution source"));
                  var r = {
                    cancel: function () {
                      r.invoked || (i || (i = b("ErrorGuard"))).applyWithGuard(G, null, [c, l]);
                    },
                    tokens: [],
                    invoked: !1,
                  };
                  d = function () {
                    var d = (j || (j = b("performanceAbsoluteNow")))(),
                      e = n++,
                      g = {
                        contextID: e,
                        name: c,
                        isRoot: !o,
                        executionNumber: p++,
                        meta: f,
                        absBeginTimeMs: d,
                      };
                    r.invoked ||
                      ((r.invoked = !0),
                      r.tokens.length &&
                        (r.tokens.forEach(function (a) {
                          delete s[a];
                        }),
                        (r.tokens = [])));
                    E(g, l);
                    if (k != null) {
                      var h = !!f.isContinuation;
                      k.isRoot
                        ? ((g.indirectParentID = k.contextID), (g.isEdgeContinuation = h))
                        : ((g.indirectParentID = k.indirectParentID),
                          (g.isEdgeContinuation = !!(h && k.isEdgeContinuation)));
                    }
                    var m = b("WorkerUtils").isWorkerContext();
                    o = !0;
                    try {
                      for (var t = arguments.length, u = new Array(t), v = 0; v < t; v++) u[v] = arguments[v];
                      if (!g.isRoot || m) return a.apply(this, u);
                      else
                        return (i || (i = b("ErrorGuard"))).applyWithGuard(a, this, u, {
                          name: "TimeSlice" + (c ? ": " + c : ""),
                          deferredSource: q,
                        });
                    } finally {
                      var y = C();
                      if (y == null)
                        b("FBLogger")("TimeSlice").mustfix(
                          "timeslice stack misaligned, not logging the block"
                        ),
                          (o = !1);
                      else {
                        var z = y.isRoot,
                          A = y.contextID,
                          B = y.indirectParentID,
                          D = y.isEdgeContinuation,
                          F = (j || (j = b("performanceAbsoluteNow")))();
                        y.absEndTimeMs = F;
                        if (z && d != null) {
                          w += F - d;
                          var G = babelHelpers["extends"](
                            {
                              begin: d,
                              end: F,
                              id: A,
                              indirectParentID: B,
                              representsExecution: !0,
                              isEdgeContinuation: k && D,
                              guard: c,
                            },
                            f,
                            a.__SMmeta
                          );
                          x.pushElement(G);
                        }
                        K();
                      }
                    }
                  };
                  d[m] = r;
                  (i || (i = b("ErrorGuard"))).applyWithGuard(F, null, [l, c, f]);
                  return d;
                },
                copyGuardForWrapper: function (a, b) {
                  a && a[m] && (b[m] = a[m]);
                  return b;
                },
                cancel: function (a) {
                  a = a ? a[m] : null;
                  a &&
                    !a.invoked &&
                    (a.cancel(),
                    a.tokens.forEach(function (a) {
                      delete s[a];
                    }),
                    (a.invoked = !0));
                },
                cancelWithToken: function (a) {
                  s[a] && L.cancel(s[a]);
                },
                registerForCancelling: function (a, b) {
                  a && b[m] && (s[a] || b[m].invoked || ((s[a] = b), b[m].tokens.push(a)));
                },
                inGuard: function () {
                  return o;
                },
                checkCoverage: function () {
                  var a;
                  if (t !== r && !o) {
                    y && ((a = Error.stackTraceLimit), (Error.stackTraceLimit = 50));
                    var c = new Error("Missing TimeSlice coverage");
                    y && (Error.stackTraceLimit = a);
                    t === q && Math.random() < v
                      ? b("FBLogger")("TimeSlice").catching(c).debug("Missing TimeSlice coverage")
                      : t === p && b("nullthrows")(u).write(c);
                  }
                },
                setLogging: function (a, c) {
                  if (t !== p) return;
                  v = c;
                  a
                    ? ((t = q),
                      b("nullthrows")(u)
                        .read()
                        .forEach(function (a) {
                          Math.random() < v &&
                            b("FBLogger")("TimeSlice").catching(a).warn("error from logging buffer");
                        }))
                    : (t = r);
                  b("nullthrows")(u).clear();
                  u = void 0;
                },
                getContext: function () {
                  return C();
                },
                getTotalTime: function () {
                  return w;
                },
                getGuardedContinuation: function (a) {
                  function b(a) {
                    for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++)
                      c[d - 1] = arguments[d];
                    return a.apply(this, c);
                  }
                  return L.guard(b, a, { propagationType: L.PropagationType.CONTINUATION });
                },
                getReusableContinuation: function (a) {
                  return b("getReusableTimeSliceContinuation")(L, m, a);
                },
                getPlaceholderReusableContinuation: function () {
                  var a = function (a) {
                    return a();
                  };
                  a.last = a;
                  return a;
                },
                getGuardNameStack: function () {
                  return z.map(function (a) {
                    return a.name;
                  });
                },
                registerExecutionContextObserver: function (a) {
                  var b = !1;
                  for (var c = 0; c < k.length; c++)
                    if (k[c].getBeforeID() > a.getBeforeID()) {
                      k.splice(c, 0, a);
                      b = !0;
                      break;
                    }
                  b || k.push(a);
                  for (var c = 0; c < l.length; c++)
                    if (l[c].getAfterID() > a.getAfterID()) {
                      l.splice(c, 0, a);
                      return;
                    }
                  l.push(a);
                },
                catchUpOnDemandExecutionContextObservers: function (a) {
                  for (var b = 0; b < z.length; b++) {
                    var c = z[b],
                      d = A[b],
                      e = B[b] || {};
                    d = a.onBeforeContextStartedWhileEnabled(c, d[a.getBeforeID()], c.meta);
                    e[a.getBeforeID()] = d;
                    B[b] = e;
                  }
                },
                getBuffer: function () {
                  return x;
                },
              };
              function M(a) {
                var b = {};
                a &&
                  a.propagateCounterAttribution !== void 0 &&
                  (b.propagateCounterAttribution = a.propagateCounterAttribution);
                a && a.root !== void 0 && (b.root = a.root);
                switch (a && a.propagationType) {
                  case L.PropagationType.CONTINUATION:
                    b.isContinuation = !0;
                    b.extendsExecution = !0;
                    break;
                  case L.PropagationType.ORPHAN:
                    b.isContinuation = !1;
                    b.extendsExecution = !1;
                    break;
                  case L.PropagationType.EXECUTION:
                  default:
                    (b.isContinuation = !1), (b.extendsExecution = !0);
                }
                return b;
              }
              (h || (h = b("Env"))).sample_continuation_stacktraces &&
                L.registerExecutionContextObserver(b("CallStackExecutionObserver"));
              b("wrapFunction").setWrapper(function (a, b) {
                return L.guard(a, b, { registerCallStack: !0 });
              }, "entry");
              a.TimeSlice = L;
              e.exports = L;
            },
            6
          );
          __d(
            "requireCond",
            [],
            function (a, b, c, d, e, f) {
              function a(a, b, c) {
                throw new Error("Cannot use raw untransformed requireCond.");
              }
              e.exports = a;
            },
            null
          );
          __d(
            "TimeSlice",
            ["requireCond", "cr:717822"],
            function (a, b, c, d, e, f) {
              e.exports = b("cr:717822");
            },
            null
          );
          __d(
            "TimerStorage",
            [],
            function (a, b, c, d, e, f) {
              a = {
                ANIMATION_FRAME: "ANIMATION_FRAME",
                IDLE_CALLBACK: "IDLE_CALLBACK",
                IMMEDIATE: "IMMEDIATE",
                INTERVAL: "INTERVAL",
                TIMEOUT: "TIMEOUT",
              };
              var g = {};
              ES(ES("Object", "keys", !1, a), "forEach", !0, function (a) {
                return (g[a] = {});
              });
              b = babelHelpers["extends"]({}, a, {
                set: function (a, b) {
                  g[a][b] = !0;
                },
                unset: function (a, b) {
                  delete g[a][b];
                },
                clearAll: function (a, b) {
                  ES(ES("Object", "keys", !1, g[a]), "forEach", !0, b), (g[a] = {});
                },
                getStorages: function () {
                  return {};
                },
              });
              e.exports = b;
            },
            null
          );
          __d(
            "clearTimeoutBlue",
            ["TimerStorage", "TimeSlice"],
            function (a, b, c, d, e, f) {
              var g = a.__fbNativeClearTimeout || a.clearTimeout,
                h = b("TimerStorage").TIMEOUT;
              function c(a) {
                if (a != null) {
                  b("TimerStorage").unset(h, a);
                  var c = h + String(a);
                  b("TimeSlice").cancelWithToken(c);
                }
                g(a);
              }
              e.exports = c;
            },
            null
          );
          __d(
            "setTimeoutAcrossTransitionsBlue",
            ["TimerStorage", "TimeSlice"],
            function (a, b, c, d, e, f) {
              var g = a.__fbNativeSetTimeout || a.setTimeout,
                h = b("TimerStorage").TIMEOUT;
              function c(c, d) {
                var e = b("TimeSlice").guard(c, "setTimeout", {
                  propagationType: b("TimeSlice").PropagationType.CONTINUATION,
                  registerCallStack: !0,
                });
                for (var f = arguments.length, i = new Array(f > 2 ? f - 2 : 0), j = 2; j < f; j++)
                  i[j - 2] = arguments[j];
                var k = Function.prototype.apply.call(g, a, [e, d].concat(i)),
                  l = h + k;
                b("TimeSlice").registerForCancelling(l, e);
                return k;
              }
              e.exports = c;
            },
            null
          );
          __d(
            "setTimeoutAcrossTransitions",
            ["requireCond", "cr:986633"],
            function (a, b, c, d, e, f) {
              e.exports = b("cr:986633");
            },
            null
          );
          __d(
            "setTimeoutBlue",
            ["TimerStorage", "TimeSlice", "setTimeoutAcrossTransitions"],
            function (a, b, c, d, e, f) {
              function a(a, c) {
                var d,
                  e = function () {
                    b("TimerStorage").unset(b("TimerStorage").TIMEOUT, d);
                    for (var c = arguments.length, e = new Array(c), f = 0; f < c; f++) e[f] = arguments[f];
                    Function.prototype.apply.call(a, this, e);
                  };
                b("TimeSlice").copyGuardForWrapper(a, e);
                for (var f = arguments.length, g = new Array(f > 2 ? f - 2 : 0), h = 2; h < f; h++)
                  g[h - 2] = arguments[h];
                d = b("setTimeoutAcrossTransitions").apply(void 0, [e, c].concat(g));
                b("TimerStorage").set(b("TimerStorage").TIMEOUT, d);
                return d;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "clearIntervalBlue",
            ["TimerStorage", "TimeSlice"],
            function (a, b, c, d, e, f) {
              var g = a.__fbNativeClearTimeout || a.clearTimeout;
              function c(a) {
                if (a != null) {
                  b("TimerStorage").unset(b("TimerStorage").INTERVAL, a);
                  var c = b("TimerStorage").TIMEOUT + String(a);
                  b("TimeSlice").cancelWithToken(c);
                }
                g(a);
              }
              e.exports = c;
            },
            null
          );
          __d(
            "setIntervalAcrossTransitionsBlue",
            ["TimeSlice"],
            function (a, b, c, d, e, f) {
              var g = a.__fbNativeSetInterval || a.setInterval;
              function c(c, d) {
                var e = b("TimeSlice").guard(c, "setInterval");
                for (var f = arguments.length, h = new Array(f > 2 ? f - 2 : 0), i = 2; i < f; i++)
                  h[i - 2] = arguments[i];
                return Function.prototype.apply.call(g, a, [e, d].concat(h));
              }
              e.exports = c;
            },
            null
          );
          __d(
            "nativeRequestAnimationFrame",
            [],
            function (a, b, c, d, e, f) {
              b =
                a.__fbNativeRequestAnimationFrame ||
                a.requestAnimationFrame ||
                a.webkitRequestAnimationFrame ||
                a.mozRequestAnimationFrame ||
                a.oRequestAnimationFrame ||
                a.msRequestAnimationFrame;
              e.exports = b;
            },
            null
          );
          __d(
            "requestAnimationFramePolyfill",
            ["nativeRequestAnimationFrame", "performanceNow"],
            function (a, b, c, d, e, f) {
              var g,
                h = 0;
              c =
                b("nativeRequestAnimationFrame") ||
                function (c) {
                  var d = (g || (g = b("performanceNow")))(),
                    e = Math.max(0, 16 - (d - h));
                  h = d + e;
                  return a.setTimeout(function () {
                    c((g || (g = b("performanceNow")))());
                  }, e);
                };
              e.exports = c;
            },
            null
          );
          __d(
            "IdleCallbackImplementation",
            ["performanceNow", "requestAnimationFramePolyfill"],
            function (a, b, c, d, e, f) {
              var g,
                h = [],
                i = 0,
                j = 0,
                k = -1,
                l = !1,
                m = 1e3 / 60,
                n = 2;
              function o(a) {
                return a;
              }
              function p(a) {
                return a;
              }
              function c(b, c) {
                var d = j++;
                h[d] = b;
                r();
                if (c != null && c.timeout > 0) {
                  var e = o(d);
                  a.setTimeout(function () {
                    return x(e);
                  }, c.timeout);
                }
                return o(d);
              }
              function q(a) {
                a = p(a);
                h[a] = null;
              }
              function r() {
                l ||
                  ((l = !0),
                  b("requestAnimationFramePolyfill")(function (a) {
                    (l = !1), t((g || (g = b("performanceNow")))() - a);
                  }));
              }
              function s(a) {
                var b = m - n;
                if (a < b) return b - a;
                a = a % m;
                if (a > b || a < n) return 0;
                else return b - a;
              }
              function t(a) {
                var c = (g || (g = b("performanceNow")))();
                if (c > k) {
                  a = s(a);
                  if (a > 0) {
                    c = c + a;
                    w(c);
                    k = c;
                  }
                }
                u() && r();
              }
              function u() {
                return i < h.length;
              }
              function v() {
                while (u()) {
                  var a = h[i];
                  i++;
                  if (a) return a;
                }
                return null;
              }
              function w(a) {
                var c;
                while ((g || (g = b("performanceNow")))() < a && (c = v())) c(new y(a));
              }
              function x(a) {
                var b = p(a);
                b = h[b];
                b && (q(a), b(new y(null)));
              }
              var y = (function () {
                "use strict";
                function a(a) {
                  (this.didTimeout = a == null), (this.$1 = a);
                }
                var c = a.prototype;
                c.timeRemaining = function () {
                  var a = this.$1;
                  if (a != null) {
                    var c = (g || (g = b("performanceNow")))();
                    if (c < a) return a - c;
                  }
                  return 0;
                };
                return a;
              })();
              e.exports = { requestIdleCallback: c, cancelIdleCallback: q };
            },
            null
          );
          __d(
            "cancelIdleCallbackBlue",
            ["IdleCallbackImplementation", "TimerStorage", "TimeSlice"],
            function (a, b, c, d, e, f) {
              var g = b("TimerStorage").IDLE_CALLBACK;
              function a(a) {
                b("TimerStorage").unset(g, a);
                var c = g + String(a);
                b("TimeSlice").cancelWithToken(c);
                b("IdleCallbackImplementation").cancelIdleCallback(a);
              }
              e.exports = a;
            },
            null
          );
          __d(
            "ArbiterToken",
            ["invariant"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              a = (function () {
                function a(a, b) {
                  (this.unsubscribe = function () {
                    for (var a = 0; a < this.$2.length; a++) this.$2[a].remove();
                    this.$2.length = 0;
                  }),
                    (this.$1 = a),
                    (this.$2 = b);
                }
                var b = a.prototype;
                b.isForArbiterInstance = function (a) {
                  this.$1 || g(0, 2506);
                  return this.$1 === a;
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "CallbackDependencyManager",
            ["ErrorGuard"],
            function (a, b, c, d, e, f) {
              var g;
              a = (function () {
                "use strict";
                function a() {
                  (this.$1 = new Map()), (this.$2 = new Map()), (this.$3 = 1), (this.$4 = new Map());
                }
                var c = a.prototype;
                c.$5 = function (a, b) {
                  var c = 0,
                    d = new Set();
                  for (var e = 0, f = b.length; e < f; e++) d.add(b[e]);
                  for (
                    var b = d.keys(),
                      e = Array.isArray(b),
                      f = 0,
                      b = e ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                    ;

                  ) {
                    if (e) {
                      if (f >= b.length) break;
                      d = b[f++];
                    } else {
                      f = b.next();
                      if (f.done) break;
                      d = f.value;
                    }
                    d = d;
                    if (this.$4.get(d)) continue;
                    c++;
                    var g = this.$1.get(d);
                    g === void 0 && ((g = new Map()), this.$1.set(d, g));
                    g.set(a, (g.get(a) || 0) + 1);
                  }
                  return c;
                };
                c.$6 = function (a) {
                  a = this.$1.get(a);
                  if (!a) return;
                  for (
                    var c = a.entries(),
                      d = Array.isArray(c),
                      e = 0,
                      c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                    ;

                  ) {
                    var f;
                    if (d) {
                      if (e >= c.length) break;
                      f = c[e++];
                    } else {
                      e = c.next();
                      if (e.done) break;
                      f = e.value;
                    }
                    f = f;
                    var h = f[0];
                    f = f[1] - 1;
                    a.set(h, f);
                    f <= 0 && a["delete"](h);
                    f = this.$2.get(h);
                    if (f !== void 0) {
                      f.$7--;
                      if (f.$7 <= 0) {
                        f = f.$8;
                        this.$2["delete"](h);
                        (g || (g = b("ErrorGuard"))).applyWithGuard(f, null, []);
                      }
                    }
                  }
                };
                c.addDependenciesToExistingCallback = function (a, b) {
                  var c = this.$2.get(a);
                  if (!c) return null;
                  b = this.$5(a, b);
                  c.$7 += b;
                  return a;
                };
                c.isPersistentDependencySatisfied = function (a) {
                  return !!this.$4.get(a);
                };
                c.satisfyPersistentDependency = function (a) {
                  this.$4.set(a, 1), this.$6(a);
                };
                c.satisfyNonPersistentDependency = function (a) {
                  var b = this.$4.get(a) === 1;
                  b || this.$4.set(a, 1);
                  this.$6(a);
                  b || this.$4["delete"](a);
                };
                c.registerCallback = function (a, c) {
                  var d = this.$3;
                  this.$3++;
                  c = this.$5(d, c);
                  if (c === 0) {
                    (g || (g = b("ErrorGuard"))).applyWithGuard(a, null, []);
                    return null;
                  }
                  this.$2.set(d, { $8: a, $7: c });
                  return d;
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "EventSubscription",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              a = function (a) {
                var b = this;
                this.remove = function () {
                  b.subscriber && (b.subscriber.removeSubscription(b), (b.subscriber = null));
                };
                this.subscriber = a;
              };
              e.exports = a;
            },
            null
          );
          __d(
            "EmitterSubscription",
            ["EventSubscription"],
            function (a, b, c, d, e, f) {
              "use strict";
              a = (function (a) {
                babelHelpers.inheritsLoose(b, a);
                function b(b, c, d) {
                  b = a.call(this, b) || this;
                  b.listener = c;
                  b.context = d;
                  return b;
                }
                return b;
              })(b("EventSubscription"));
              e.exports = a;
            },
            null
          );
          __d(
            "EventSubscriptionVendor",
            ["invariant"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              a = (function () {
                function a() {
                  this.$1 = {};
                }
                var b = a.prototype;
                b.addSubscription = function (a, b) {
                  b.subscriber === this || g(0, 2828);
                  this.$1[a] || (this.$1[a] = []);
                  var c = this.$1[a].length;
                  this.$1[a].push(b);
                  b.eventType = a;
                  b.key = c;
                  return b;
                };
                b.removeAllSubscriptions = function (a) {
                  a === void 0 ? (this.$1 = {}) : delete this.$1[a];
                };
                b.removeSubscription = function (a) {
                  var b = a.eventType;
                  a = a.key;
                  b = this.$1[b];
                  b && delete b[a];
                };
                b.getSubscriptionsForType = function (a) {
                  return this.$1[a];
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "emptyFunction",
            [],
            function (a, b, c, d, e, f) {
              function a(a) {
                return function () {
                  return a;
                };
              }
              b = function () {};
              b.thatReturns = a;
              b.thatReturnsFalse = a(!1);
              b.thatReturnsTrue = a(!0);
              b.thatReturnsNull = a(null);
              b.thatReturnsThis = function () {
                return this;
              };
              b.thatReturnsArgument = function (a) {
                return a;
              };
              e.exports = b;
            },
            null
          );
          __d(
            "BaseEventEmitter",
            [
              "EmitterSubscription",
              "ErrorGuard",
              "EventSubscriptionVendor",
              "emptyFunction",
              "unrecoverableViolation",
            ],
            function (a, b, c, d, e, f) {
              var g;
              a = (function () {
                "use strict";
                function a() {
                  (this.$2 = new (b("EventSubscriptionVendor"))()), (this.$1 = null);
                }
                var c = a.prototype;
                c.addListener = function (a, c, d) {
                  return this.$2.addSubscription(a, new (b("EmitterSubscription"))(this.$2, c, d));
                };
                c.once = function (a, b, c) {
                  var d = this;
                  return this.addListener(a, function () {
                    d.removeCurrentListener(), b.apply(c, arguments);
                  });
                };
                c.removeAllListeners = function (a) {
                  this.$2.removeAllSubscriptions(a);
                };
                c.removeCurrentListener = function () {
                  if (!this.$1)
                    throw b("unrecoverableViolation")(
                      "Not in an emitting cycle; there is no current subscription",
                      "emitter"
                    );
                  this.$2.removeSubscription(this.$1);
                };
                c.listeners = function (a) {
                  a = this.$2.getSubscriptionsForType(a);
                  return a
                    ? a.filter(b("emptyFunction").thatReturnsTrue).map(function (a) {
                        return a.listener;
                      })
                    : [];
                };
                c.emit = function (a) {
                  var b = this.$2.getSubscriptionsForType(a);
                  if (b) {
                    var c = Object.keys(b),
                      d;
                    for (var e = 0; e < c.length; e++) {
                      var f = c[e],
                        g = b[f];
                      if (g) {
                        this.$1 = g;
                        if (d == null) {
                          d = [g, a];
                          for (var h = 0, i = arguments.length <= 1 ? 0 : arguments.length - 1; h < i; h++)
                            d[h + 2] = h + 1 < 1 || arguments.length <= h + 1 ? void 0 : arguments[h + 1];
                        } else d[0] = g;
                        this.__emitToSubscription.apply(this, d);
                      }
                    }
                    this.$1 = null;
                  }
                };
                c.__emitToSubscription = function (a, c) {
                  for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++)
                    e[f - 2] = arguments[f];
                  (g || (g = b("ErrorGuard"))).applyWithGuard(a.listener, a.context, e, {
                    name: "EventEmitter " + c + " event",
                  });
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "EventEmitter",
            ["BaseEventEmitter"],
            function (a, b, c, d, e, f) {
              a = (function (a) {
                "use strict";
                babelHelpers.inheritsLoose(b, a);
                function b() {
                  return a.apply(this, arguments) || this;
                }
                return b;
              })(b("BaseEventEmitter"));
              e.exports = a;
            },
            null
          );
          __d(
            "EventEmitterWithHolding",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              a = (function () {
                function a(a, b) {
                  (this.$2 = a), (this.$3 = b), (this.$1 = null), (this.$5 = []), (this.$4 = 0);
                }
                var b = a.prototype;
                b.addListener = function (a, b, c) {
                  return this.$2.addListener(a, b, c);
                };
                b.once = function (a, b, c) {
                  return this.$2.once(a, b, c);
                };
                b.addRetroactiveListener = function (a, b, c) {
                  var d = this.$2.addListener(a, b, c),
                    e = this.$5;
                  e.push(!1);
                  this.$4++;
                  this.$3.emitToListener(a, b, c);
                  this.$4--;
                  e[e.length - 1] && d.remove();
                  e.pop();
                  return d;
                };
                b.removeAllListeners = function (a) {
                  this.$2.removeAllListeners(a);
                };
                b.removeCurrentListener = function () {
                  if (this.$4) {
                    var a = this.$5;
                    a[a.length - 1] = !0;
                  } else this.$2.removeCurrentListener();
                };
                b.listeners = function (a) {
                  return this.$2.listeners(a);
                };
                b.emit = function (a) {
                  var b;
                  for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++)
                    d[e - 1] = arguments[e];
                  (b = this.$2).emit.apply(b, [a].concat(d));
                };
                b.emitAndHold = function (a) {
                  var b, c;
                  for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++)
                    e[f - 1] = arguments[f];
                  this.$1 = (b = this.$3).holdEvent.apply(b, [a].concat(e));
                  (c = this.$2).emit.apply(c, [a].concat(e));
                  this.$1 = null;
                };
                b.releaseCurrentEvent = function () {
                  this.$1 != null
                    ? this.$3.releaseEvent(this.$1)
                    : this.$4 > 0 && this.$3.releaseCurrentEvent();
                };
                b.releaseHeldEventType = function (a) {
                  this.$3.releaseEventType(a);
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "EventHolder",
            ["invariant"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              a = (function () {
                function a() {
                  (this.$1 = {}), (this.$2 = []);
                }
                var b = a.prototype;
                b.holdEvent = function (a) {
                  this.$1[a] = this.$1[a] || [];
                  var b = this.$1[a],
                    c = { eventType: a, index: b.length };
                  for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++)
                    e[f - 1] = arguments[f];
                  b.push(e);
                  return c;
                };
                b.emitToListener = function (a, b, c) {
                  var d = this,
                    e = this.$1[a];
                  if (!e) return;
                  e.forEach(function (e, f) {
                    if (!e) return;
                    d.$2.push({ eventType: a, index: f });
                    b.apply(c, e);
                    d.$2.pop();
                  });
                };
                b.releaseCurrentEvent = function () {
                  this.$2.length || g(0, 1764), this.releaseEvent(this.$2[this.$2.length - 1]);
                };
                b.releaseEvent = function (a) {
                  delete this.$1[a.eventType][a.index];
                };
                b.releaseEventType = function (a) {
                  this.$1[a] = [];
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "Arbiter",
            [
              "invariant",
              "ArbiterToken",
              "CallbackDependencyManager",
              "ErrorGuard",
              "EventEmitter",
              "EventEmitterWithHolding",
              "EventHolder",
            ],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h;
              function i(a) {
                return Array.isArray(a) ? a : [a];
              }
              function j(a) {
                return a instanceof k || a === k ? a : k;
              }
              var k = (function () {
                  function a() {
                    var a = new (b("EventEmitter"))();
                    this.$3 = new l();
                    this.$2 = new (b("EventEmitterWithHolding"))(a, this.$3);
                    this.$1 = new (b("CallbackDependencyManager"))();
                    this.$4 = [];
                  }
                  var c = a.prototype;
                  c.subscribe = function (a, c, d) {
                    a = i(a);
                    a.forEach(function (a) {
                      (a && typeof a === "string") || g(0, 1966, a);
                    });
                    typeof c === "function" || g(0, 1967, c);
                    d = d || "all";
                    d === "new" || d === "all" || g(0, 1968, d);
                    a = a.map(function (a) {
                      var b = this.$5.bind(this, c, a);
                      b.__SMmeta = c.__SMmeta;
                      if (d === "new") return this.$2.addListener(a, b);
                      this.$4.push({});
                      a = this.$2.addRetroactiveListener(a, b);
                      this.$4.pop();
                      return a;
                    }, this);
                    return new (b("ArbiterToken"))(this, a);
                  };
                  c.$5 = function (a, c, d) {
                    var e = this.$4[this.$4.length - 1];
                    if (e[c] === !1) return;
                    a = (h || (h = b("ErrorGuard"))).applyWithGuard(a, null, [c, d]);
                    a === !1 && this.$2.releaseCurrentEvent();
                    e[c] = a;
                  };
                  c.unsubscribeCurrentSubscription = function () {
                    this.$2.removeCurrentListener();
                  };
                  c.releaseCurrentPersistentEvent = function () {
                    this.$2.releaseCurrentEvent();
                  };
                  c.subscribeOnce = function (a, b, c) {
                    var d = this;
                    a = this.subscribe(
                      a,
                      function (a, c) {
                        d.unsubscribeCurrentSubscription();
                        return b(a, c);
                      },
                      c
                    );
                    return a;
                  };
                  c.unsubscribe = function (a) {
                    a.isForArbiterInstance(this) || g(0, 1969), a.unsubscribe();
                  };
                  c.inform = function (a, b, c) {
                    var d = Array.isArray(a);
                    a = i(a);
                    c = c || "event";
                    var e = c === "state" || c === "persistent";
                    this.$4.push({});
                    for (var f = 0; f < a.length; f++) {
                      var h = a[f];
                      h || g(0, 1970, h);
                      this.$3.setHoldingBehavior(h, c);
                      this.$2.emitAndHold(h, b);
                      this.$6(h, b, e);
                    }
                    h = this.$4.pop();
                    return d ? h : h[a[0]];
                  };
                  c.query = function (a) {
                    var b = this.$3.getHoldingBehavior(a);
                    !b || b === "state" || g(0, 1971, a);
                    b = null;
                    this.$3.emitToListener(a, function (a) {
                      b = a;
                    });
                    return b;
                  };
                  c.registerCallback = function (a, b) {
                    if (typeof a === "function") return this.$1.registerCallback(a, b);
                    else return this.$1.addDependenciesToExistingCallback(a, b);
                  };
                  c.$6 = function (a, b, c) {
                    if (b === null) return;
                    c ? this.$1.satisfyPersistentDependency(a) : this.$1.satisfyNonPersistentDependency(a);
                  };
                  a.subscribe = function (b, c, d) {
                    return a.prototype.subscribe.apply(j(this), arguments);
                  };
                  a.unsubscribeCurrentSubscription = function () {
                    return a.prototype.unsubscribeCurrentSubscription.apply(j(this));
                  };
                  a.releaseCurrentPersistentEvent = function () {
                    return a.prototype.releaseCurrentPersistentEvent.apply(j(this));
                  };
                  a.subscribeOnce = function (b, c, d) {
                    return a.prototype.subscribeOnce.apply(j(this), arguments);
                  };
                  a.unsubscribe = function (b) {
                    return a.prototype.unsubscribe.apply(j(this), arguments);
                  };
                  a.inform = function (b, c, d) {
                    return a.prototype.inform.apply(j(this), arguments);
                  };
                  a.informSingle = function (b, c, d) {
                    return a.prototype.inform.apply(j(this), arguments);
                  };
                  a.query = function (b) {
                    return a.prototype.query.apply(j(this), arguments);
                  };
                  a.registerCallback = function (b, c) {
                    return a.prototype.registerCallback.apply(j(this), arguments);
                  };
                  a.$6 = function (b, c, d) {
                    return a.prototype.$6.apply(j(this), arguments);
                  };
                  a.$5 = function (b, c, d) {
                    return a.prototype.$5.apply(j(this), arguments);
                  };
                  return a;
                })(),
                l = (function (b) {
                  babelHelpers.inheritsLoose(a, b);
                  function a() {
                    var a;
                    a = b.call(this) || this;
                    a.$ArbiterEventHolder1 = {};
                    return a;
                  }
                  var c = a.prototype;
                  c.setHoldingBehavior = function (a, b) {
                    this.$ArbiterEventHolder1[a] = b;
                  };
                  c.getHoldingBehavior = function (a) {
                    return this.$ArbiterEventHolder1[a];
                  };
                  c.holdEvent = function (a) {
                    var c = this.$ArbiterEventHolder1[a];
                    c !== "persistent" && this.$ArbiterEventHolder2(a);
                    if (c !== "event") {
                      var d;
                      for (var e = arguments.length, f = new Array(e > 1 ? e - 1 : 0), g = 1; g < e; g++)
                        f[g - 1] = arguments[g];
                      return (d = b.prototype.holdEvent).call.apply(d, [this, a].concat(f));
                    }
                    return void 0;
                  };
                  c.$ArbiterEventHolder2 = function (a) {
                    this.emitToListener(a, this.releaseCurrentEvent, this);
                  };
                  c.releaseEvent = function (a) {
                    a && b.prototype.releaseEvent.call(this, a);
                  };
                  return a;
                })(b("EventHolder"));
              k.call(k);
              e.exports = k;
            },
            null
          );
          __d(
            "BigPipeInstance",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = null;
              a = {
                Events: {
                  init: "BigPipe/init",
                  tti: "tti_bigpipe",
                  displayed: "all_pagelets_displayed",
                  loaded: "all_pagelets_loaded",
                },
                setCurrentInstance_DO_NOT_USE: function (a) {
                  g = a;
                },
                getCurrentInstance: function () {
                  return g;
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "$-core",
            ["TAALOpcodes", "err"],
            function (a, b, c, d, e, f) {
              function a(a) {
                return g(a, typeof a === "string" ? document.getElementById(a) : a);
              }
              function c(a) {
                return g(a, typeof a === "string" ? document.getElementById(a) : a);
              }
              function g(a, c) {
                if (!c) {
                  a = b("err")(
                    'Tried to get element with id of "%s" but it is not present on the page',
                    String(a)
                  );
                  a.taalOpcodes = a.taalOpcodes || [];
                  a.taalOpcodes = [b("TAALOpcodes").PREVIOUS_FILE];
                  throw a;
                }
                return c;
              }
              a.fromIDOrElement = c;
              e.exports = a;
            },
            null
          );
          __d(
            "$",
            ["$-core"],
            function (a, b, c, d, e, f) {
              e.exports = b("$-core");
            },
            null
          );
          __d(
            "CSSCore",
            ["invariant"],
            function (a, b, c, d, e, f, g) {
              function h(a, b) {
                var c = a;
                while (c.parentNode) c = c.parentNode;
                if (c instanceof Element) {
                  c = c.querySelectorAll(b);
                  return Array.prototype.indexOf.call(c, a) !== -1;
                }
                return !1;
              }
              var i = {
                addClass: function (a, b) {
                  /\s/.test(b) && g(0, 440, b);
                  b &&
                    (a.classList
                      ? a.classList.add(b)
                      : i.hasClass(a, b) || (a.className = a.className + " " + b));
                  return a;
                },
                removeClass: function (a, b) {
                  /\s/.test(b) && g(0, 441, b);
                  b &&
                    (a.classList
                      ? a.classList.remove(b)
                      : i.hasClass(a, b) &&
                        (a.className = a.className
                          .replace(new RegExp("(^|\\s)" + b + "(?:\\s|$)", "g"), "$1")
                          .replace(/\s+/g, " ")
                          .replace(/^\s*|\s*$/g, "")));
                  return a;
                },
                conditionClass: function (a, b, c) {
                  return (c ? i.addClass : i.removeClass)(a, b);
                },
                hasClass: function (a, b) {
                  /\s/.test(b) && g(0, 442);
                  return a.classList
                    ? !!b && a.classList.contains(b)
                    : (" " + a.className + " ").indexOf(" " + b + " ") > -1;
                },
                matchesSelector: function (a, b) {
                  var c =
                    a.matches ||
                    a.webkitMatchesSelector ||
                    a.mozMatchesSelector ||
                    a.msMatchesSelector ||
                    function (b) {
                      return h(a, b);
                    };
                  return c.call(a, b);
                },
              };
              e.exports = i;
            },
            null
          );
          __d(
            "CSS",
            ["CSSCore", "$"],
            function (a, b, c, d, e, f) {
              a = typeof window != "undefined" ? window.CSS : null;
              var g = "hidden_elem",
                h = {
                  supports: a && a.supports.bind(a),
                  setClass: function (a, c) {
                    b("$").fromIDOrElement(a).className = c || "";
                    return a;
                  },
                  hasClass: function (a, c) {
                    return a instanceof Document || a instanceof Text
                      ? !1
                      : b("CSSCore").hasClass(b("$").fromIDOrElement(a), c);
                  },
                  matchesSelector: function (a, c) {
                    return a instanceof Document || a instanceof Text
                      ? !1
                      : b("CSSCore").matchesSelector(b("$").fromIDOrElement(a), c);
                  },
                  addClass: function (a, c) {
                    return b("CSSCore").addClass(b("$").fromIDOrElement(a), c);
                  },
                  removeClass: function (a, c) {
                    return b("CSSCore").removeClass(b("$").fromIDOrElement(a), c);
                  },
                  conditionClass: function (a, c, d) {
                    return b("CSSCore").conditionClass(b("$").fromIDOrElement(a), c, !!d);
                  },
                  toggleClass: function (a, b) {
                    return h.conditionClass(a, b, !h.hasClass(a, b));
                  },
                  shown: function (a) {
                    return !h.hasClass(a, g);
                  },
                  hide: function (a) {
                    return h.addClass(a, g);
                  },
                  show: function (a) {
                    return h.removeClass(a, g);
                  },
                  toggle: function (a) {
                    return h.toggleClass(a, g);
                  },
                  conditionShow: function (a, b) {
                    return h.conditionClass(a, g, !b);
                  },
                };
              e.exports = h;
            },
            null
          );
          __d(
            "Parent",
            ["CSS"],
            function (a, b, c, d, e, f) {
              var g = {
                byTag: function (a, b) {
                  b = b.toUpperCase();
                  a = g.find(a, function (a) {
                    return a.nodeName === b;
                  });
                  return a instanceof Element ? a : null;
                },
                byClass: function (a, c) {
                  a = g.find(a, function (a) {
                    return a instanceof Element && b("CSS").hasClass(a, c);
                  });
                  return a instanceof Element ? a : null;
                },
                bySelector: function (a, b) {
                  a = a;
                  if (typeof a.matches === "function") {
                    while (a && a !== document && !a.matches(b)) a = a.parentNode;
                    return a instanceof Element ? a : null;
                  } else if (typeof a.msMatchesSelector === "function") {
                    while (a && a !== document && !a.msMatchesSelector(b)) a = a.parentNode;
                    return a instanceof Element ? a : null;
                  } else return g.bySelector_SLOW(a, b);
                },
                bySelector_SLOW: function (a, b) {
                  a = a;
                  var c = a;
                  while (c.parentNode) c = c.parentNode;
                  if (!(c instanceof Element) && !(c instanceof Document)) return null;
                  c = c.querySelectorAll(b);
                  while (a) {
                    if (Array.prototype.indexOf.call(c, a) !== -1) return a instanceof Element ? a : null;
                    a = a.parentNode;
                  }
                  return a instanceof Element ? a : null;
                },
                byAttribute: function (a, b) {
                  a = g.find(a, function (a) {
                    return a instanceof Element && !!a.getAttribute(b);
                  });
                  return a instanceof Element ? a : null;
                },
                find: function (a, b) {
                  a = a;
                  while (a) {
                    if (b(a)) return a;
                    a = a.parentNode;
                  }
                  return null;
                },
              };
              e.exports = g;
            },
            null
          );
          __d(
            "ContextualComponent",
            ["Parent"],
            function (a, b, c, d, e, f) {
              a = (function () {
                "use strict";
                a.forNode = function (b) {
                  return a.$1.get(b) || null;
                };
                a.closestToNode = function (c) {
                  c = b("Parent").find(c, function (b) {
                    return !!a.forNode(b);
                  });
                  return c ? a.forNode(c) : null;
                };
                a.register = function (b) {
                  return new a(b);
                };
                function a(a) {
                  var b = a.element,
                    c = a.isRoot;
                  a = a.parent;
                  this.$2 = c;
                  this.$3 = b;
                  this.$4 = a;
                  this.$5 = new Set();
                  this.$6 = [];
                  this.$7 = [];
                  this.$8();
                }
                var c = a.prototype;
                c.onCleanup = function (a) {
                  this.$6.push(a);
                };
                c.onUnmount = function (a) {
                  this.$7.push(a);
                };
                c.cleanup = function () {
                  this.$5.forEach(function (a) {
                    return a.cleanup();
                  }),
                    this.$6.forEach(function (a) {
                      return a();
                    }),
                    (this.$6 = []);
                };
                c.unmount = function () {
                  this.cleanup();
                  this.$5.forEach(function (a) {
                    return a.unmount();
                  });
                  this.$7.forEach(function (a) {
                    return a();
                  });
                  this.$7 = [];
                  var b = this.$4;
                  b && (a.$1["delete"](this.$3), b.$9(this));
                };
                c.reinitialize = function () {
                  var b = this.$4;
                  b && (b.$9(this), (this.$4 = void 0));
                  a.$1["delete"](this.$3);
                  this.$8();
                };
                c.$8 = function () {
                  if (!this.$2 && !this.$4) {
                    var b = a.closestToNode(this.$3);
                    b && (this.$4 = b);
                  }
                  this.$4 && this.$4.$10(this);
                  a.$1.set(this.$3, this);
                };
                c.$10 = function (a) {
                  this.$5.add(a);
                };
                c.$9 = function (a) {
                  this.$5["delete"](a);
                };
                return a;
              })();
              a.$1 = new Map();
              e.exports = a;
            },
            null
          );
          __d(
            "ExecutionEnvironment",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              a = !!(typeof window !== "undefined" && window.document && window.document.createElement);
              b = {
                canUseDOM: a,
                canUseWorkers: typeof Worker !== "undefined",
                canUseEventListeners: a && !!(window.addEventListener || window.attachEvent),
                canUseViewport: a && !!window.screen,
                isInWorker: !a,
              };
              e.exports = b;
            },
            null
          );
          __d(
            "PageEvents",
            [],
            function (a, b, c, d, e, f) {
              a = Object.freeze({
                NATIVE_ONLOAD: "onload/onload",
                BIGPIPE_ONLOAD: "onload/onload_callback",
                AJAXPIPE_ONLOAD: "ajaxpipe/onload_callback",
                NATIVE_DOMREADY: "onload/dom_content_ready",
                BIGPIPE_DOMREADY: "onload/domcontent_callback",
                AJAXPIPE_DOMREADY: "ajaxpipe/domcontent_callback",
                NATIVE_ONBEFOREUNLOAD: "onload/beforeunload",
                NATIVE_ONUNLOAD: "onload/unload",
                AJAXPIPE_ONUNLOAD: "onload/exit",
                AJAXPIPE_SEND: "ajaxpipe/send",
                AJAXPIPE_FIRST_RESPONSE: "ajaxpipe/first_response",
                AJAXPIPE_ONBEFORECLEARCANVAS: "ajaxpipe/onbeforeclearcanvas",
              });
              e.exports = a;
            },
            null
          );
          __d(
            "createCancelableFunction",
            ["emptyFunction"],
            function (a, b, c, d, e, f) {
              function a(a) {
                var c = a;
                a = function () {
                  for (var a = arguments.length, b = new Array(a), d = 0; d < a; d++) b[d] = arguments[d];
                  return c.apply(this, b);
                };
                a.cancel = function () {
                  c = b("emptyFunction");
                };
                return a;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "isTruthy",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              function a(a) {
                return a != null && Boolean(a);
              }
              e.exports = a;
            },
            null
          );
          __d(
            "recoverableViolation",
            ["FBLogger"],
            function (a, b, c, d, e, f) {
              "use strict";
              function a(a, c, d) {
                d = d === void 0 ? {} : d;
                d = d.error;
                c = b("FBLogger")(c);
                d && (c = c.catching(d));
                c.blameToPreviousFrame().mustfix(a);
                return null;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "RunBlue",
            [
              "Arbiter",
              "BigPipeInstance",
              "ContextualComponent",
              "ExecutionEnvironment",
              "PageEvents",
              "TimeSlice",
              "createCancelableFunction",
              "emptyFunction",
              "isTruthy",
              "performanceAbsoluteNow",
              "recoverableViolation",
            ],
            function (a, b, c, d, e, f) {
              "use strict";
              var g,
                h = "onunloadhooks",
                i = "onafterunloadhooks";
              function j(c, d) {
                var e = a.CavalryLogger && a.CavalryLogger.getInstance();
                if (!e) return;
                b("isTruthy")(d) ? e.setAbsTimeStamp && e.setAbsTimeStamp(c, d) : e.setTimeStamp(c);
              }
              function c(c) {
                var d = a.PageHooks;
                if (window.domready && d) {
                  d.runHook(c, "domreadyhooks:late");
                  return { remove: b("emptyFunction") };
                } else return p("domreadyhooks", c);
              }
              function d(b) {
                var c = a.PageHooks;
                if (window.loaded && c) {
                  var d = a.setTimeout(function () {
                    c.runHook(b, "onloadhooks:late");
                  }, 0);
                  return {
                    remove: function () {
                      return a.clearTimeout(d);
                    },
                  };
                } else return p("onloadhooks", b);
              }
              function f(a, b) {
                b = b === void 0 ? !window.loading_page_chrome : b;
                return b ? p("onbeforeleavehooks", a) : p("onbeforeunloadhooks", a);
              }
              function k(a, c) {
                window.onunload ||
                  (window.onunload = b("TimeSlice").guard(function () {
                    b("Arbiter").inform(b("PageEvents").NATIVE_ONUNLOAD, !0, "state");
                  }, "window.onunload"));
                return p(a, c);
              }
              function l(a) {
                return k(h, a);
              }
              function m(a) {
                return k(i, a);
              }
              function n(a) {
                return p("onleavehooks", a);
              }
              function o(a, c) {
                var d = b("createCancelableFunction")(c);
                c = function () {
                  d(), d.cancel();
                };
                a = b("ContextualComponent").closestToNode(a);
                a && a.onCleanup(c);
                window.onleavehooks = (window.onleavehooks || []).concat(c);
                return {
                  remove: function () {
                    d.cancel();
                  },
                };
              }
              function p(a, c) {
                var d;
                d = (d = c) != null ? d : b("emptyFunction");
                c || b("recoverableViolation")("Undefined handler is not allowed", "web_speed");
                var e = b("createCancelableFunction")(d);
                window[a] = (window[a] || []).concat(e);
                return {
                  remove: function () {
                    e.cancel();
                  },
                };
              }
              function q(a) {
                window[a] = [];
              }
              var r = b("TimeSlice").guard(function () {
                b("Arbiter").inform(b("PageEvents").NATIVE_DOMREADY, !0, "state");
              }, "DOMContentLoaded");
              a._domcontentready = r;
              function s() {
                var c = document,
                  d = window;
                if (c.addEventListener) {
                  var e = /AppleWebKit.(\d+)/.exec(navigator.userAgent);
                  if (e && e[1] < 525)
                    var f = a.setInterval(function () {
                      /loaded|complete/.test(c.readyState) && (r(), a.clearInterval(f));
                    }, 10);
                  else c.addEventListener("DOMContentLoaded", r, !0);
                } else {
                  e = d.location.protocol === "https:" ? "//:" : "javascript:void(0)";
                  c.write(
                    '<script onreadystatechange="if (this.readyState==\'complete\') {this.parentNode.removeChild(this);_domcontentready();}" defer="defer" src="' +
                      e +
                      '"></'
                  );
                  c.write("script>");
                }
                var g = d.onload;
                d.onload = b("TimeSlice").guard(function () {
                  j("t_layout"), g && g(), b("Arbiter").inform(b("PageEvents").NATIVE_ONLOAD, !0, "state");
                }, "window.onload");
                d.onbeforeunload = b("TimeSlice").guard(function (a) {
                  var c = {};
                  b("Arbiter").inform(b("PageEvents").NATIVE_ONBEFOREUNLOAD, c, "state");
                  c.warn ||
                    b("Arbiter").inform(b("PageEvents").AJAXPIPE_ONUNLOAD, { transition_type: "normal" });
                  if (c.warn !== void 0) {
                    c = c.warn.body != null ? c.warn.body : c.warn;
                    a && (a.returnValue = c);
                    return c;
                  } else return;
                }, "window.onbeforeunload");
              }
              function t() {
                var a,
                  c = (g || (g = b("performanceAbsoluteNow")))();
                ((a = window.console) == null ? void 0 : a.timeStamp) &&
                  window.console.timeStamp(
                    'perf_trace {"name": "e2e", "parent": "PageEvents.BIGPIPE_ONLOAD"}'
                  );
                j("t_onload", c);
                b("Arbiter").inform(b("PageEvents").BIGPIPE_ONLOAD, { ts: c }, "state");
              }
              var u = b("Arbiter").registerCallback(
                  function () {
                    b("BigPipeInstance").getCurrentInstance()
                      ? b("Arbiter").subscribeOnce(b("BigPipeInstance").Events.displayed, t)
                      : t();
                  },
                  [b("PageEvents").NATIVE_ONLOAD]
                ),
                v = b("Arbiter").registerCallback(
                  function () {
                    j("t_domcontent");
                    var a = { timeTriggered: Date.now() };
                    b("Arbiter").inform(b("PageEvents").BIGPIPE_DOMREADY, a, "state");
                  },
                  [b("PageEvents").NATIVE_DOMREADY]
                );
              b("ExecutionEnvironment").canUseDOM && s();
              s = {
                onAfterLoad: d,
                onAfterUnload: m,
                onBeforeUnload: f,
                onCleanupOrLeave: o,
                onLeave: n,
                onLoad: c,
                onUnload: l,
                __domContentCallback: v,
                __onloadCallback: u,
                __removeHook: q,
              };
              e.exports = s;
            },
            null
          );
          __d(
            "BanzaiConsts",
            [],
            function (a, b, c, d, e, f) {
              a = {
                SEND: "Banzai:SEND",
                OK: "Banzai:OK",
                ERROR: "Banzai:ERROR",
                SHUTDOWN: "Banzai:SHUTDOWN",
                BASIC: "basic",
                VITAL: "vital",
                BASIC_WAIT: 6e4,
                BASIC_WAIT_COMET: 2e3,
                VITAL_WAIT: 1e3,
                BATCH_SIZE_LIMIT: 64e3,
                EXPIRY: 864e5,
                BATCH_TIMEOUT: 1e4,
                LAST_STORAGE_FLUSH: "banzai:last_storage_flush",
                STORAGE_FLUSH_INTERVAL: 12 * 60 * 6e4,
                ODS_ROUTE: "categorized_ods",
                POST_READY: 0,
                POST_INFLIGHT: 1,
                POST_SENT: 2,
              };
              e.exports = a;
            },
            null
          );
          __d(
            "BootloaderEvents",
            ["Arbiter"],
            function (a, b, c, d, e, f) {
              var g = "bootloader/bootload",
                h = new (b("Arbiter"))();
              e.exports = {
                notifyBootload: function (a) {
                  h.inform(g, a, "persistent");
                },
                onBootload: function (a) {
                  return h.subscribe(g, function (b, c) {
                    return a(c);
                  });
                },
              };
            },
            null
          );
          __d(
            "BootloaderEventsManager",
            ["CallbackDependencyManager", "performanceAbsoluteNow"],
            function (a, b, c, d, e, f) {
              var g;
              a = (function () {
                "use strict";
                function a() {
                  (this.$1 = new (b("CallbackDependencyManager"))()), (this.$2 = new Map());
                }
                var c = a.prototype;
                c.rsrcDone = function (a) {
                  return a;
                };
                c.bootload = function (a) {
                  return "bl:" + a.join(",");
                };
                c.tierOne = function (a) {
                  return "t1:" + a;
                };
                c.tierTwoStart = function (a) {
                  return "t2s:" + a;
                };
                c.tierTwo = function (a) {
                  return "t2:" + a;
                };
                c.tierThreeStart = function (a) {
                  return "t3s:" + a;
                };
                c.tierThree = function (a) {
                  return "t3:" + a;
                };
                c.beDone = function (a) {
                  return "beDone:" + a;
                };
                c.notify = function (a) {
                  this.$2.set(a, (g || (g = b("performanceAbsoluteNow")))()),
                    this.$1.satisfyPersistentDependency(a);
                };
                c.getEventTime = function (a) {
                  return this.$2.get(a);
                };
                c.registerCallback = function (a, b) {
                  this.$1.registerCallback(a, b);
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "BitMap",
            [],
            function (a, b, c, d, e, f) {
              var g = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
              a = (function () {
                "use strict";
                function a() {
                  (this.$1 = []), (this.$2 = null);
                }
                var b = a.prototype;
                b.set = function (a) {
                  this.$2 != null && !this.$1[a] && (this.$2 = null);
                  this.$1[a] = 1;
                  return this;
                };
                b.toString = function () {
                  var a = [];
                  for (var b = 0; b < this.$1.length; b++) a.push(this.$1[b] ? 1 : 0);
                  return a.length ? i(a.join("")) : "";
                };
                b.toCompressedString = function () {
                  if (this.$1.length === 0) return "";
                  if (this.$2 != null) return this.$2;
                  var a = [],
                    b = 1,
                    c = this.$1[0] || 0,
                    d = c.toString(2);
                  for (var e = 1; e < this.$1.length; e++) {
                    var f = this.$1[e] || 0;
                    f === c ? b++ : (a.push(h(b)), (c = f), (b = 1));
                  }
                  b && a.push(h(b));
                  return (this.$2 = i(d + a.join("")));
                };
                return a;
              })();
              function h(a) {
                a = a.toString(2);
                var b = "0".repeat(a.length - 1);
                return b + a;
              }
              function i(a) {
                a = (a + "00000").match(/[01]{6}/g);
                var b = "";
                for (var c = 0; a != null && c < a.length; c++) b += g[parseInt(a[c], 2)];
                return b;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "CSRBitMap",
            ["BitMap"],
            function (a, b, c, d, e, f) {
              var g = new (b("BitMap"))();
              e.exports = {
                add: function (a) {
                  g.set(a);
                },
                toCompressedString: function () {
                  return g.toCompressedString();
                },
              };
            },
            null
          );
          __d(
            "CSRIndexUtil",
            ["invariant"],
            function (a, b, c, d, e, f, g) {
              e.exports = {
                parseCSRIndexes: function (a) {
                  a.substr(0, 1) === ":" || g(0, 21456, a);
                  return a
                    .substr(1)
                    .split(",")
                    .map(function (a) {
                      return parseInt(a, 10);
                    });
                },
              };
            },
            null
          );
          __d(
            "isFacebookURI",
            [],
            function (a, b, c, d, e, f) {
              var g = null,
                h = ["http", "https"];
              function a(a) {
                g || (g = new RegExp("(^|\\.)facebook\\.com$", "i"));
                if (a.isEmpty() && a.toString() !== "#") return !1;
                return !a.getDomain() && !a.getProtocol()
                  ? !0
                  : ES(h, "indexOf", !0, a.getProtocol()) !== -1 && g.test(a.getDomain());
              }
              a.setRegex = function (a) {
                g = a;
              };
              e.exports = a;
            },
            null
          );
          __d(
            "isWorkplaceDotComURI",
            [],
            function (a, b, c, d, e, f) {
              var g = new RegExp("(^|\\.)workplace\\.com$", "i");
              function a(a) {
                return a.getProtocol() === "https" && g.test(a.getDomain());
              }
              e.exports = a;
            },
            null
          );
          __d(
            "BlueCompatBroker",
            ["Env", "URI", "isCometAltpayJsSdkIframeAllowedDomain", "isFacebookURI", "isWorkplaceDotComURI"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g,
                h,
                i,
                j = new Map(),
                k = !1,
                l = function (a) {
                  a = new (g || (g = b("URI")))(a);
                  return b("isFacebookURI")(a) || b("isWorkplaceDotComURI")(a);
                },
                m = {
                  dispatch: function (a) {
                    var b = m.getMessageEventString(a, "compatAction");
                    if (b != null) {
                      b = j.get(b);
                      b && b(a);
                    }
                  },
                  getMessageEventString: function (a, b) {
                    a = a.data;
                    if (typeof a === "object") {
                      a = a == null ? void 0 : a[b];
                      if (typeof a === "string") return a;
                    }
                    return "";
                  },
                  init: function (a) {
                    a === void 0 && (a = "");
                    if (!k) {
                      document.body && (document.body.style.overflow = "auto");
                      var c = b("isCometAltpayJsSdkIframeAllowedDomain")()
                          ? "https://www.facebook.com/"
                          : document.referrer,
                        d = ES(c, "indexOf", !0, "/", 8);
                      c = c.substring(0, d);
                      if (l(c)) {
                        d = new MessageChannel();
                        a = a !== "" ? a : (h || (h = b("Env"))).iframeKey;
                        i = d.port1;
                        i.onmessage = m.dispatch;
                        window.parent.postMessage({ compatAction: "CompatSetup", iframeKey: a }, c + "/", [
                          d.port2,
                        ]);
                      }
                      k = !0;
                    }
                  },
                  register: function (a, b) {
                    j.set(a, b);
                  },
                  sendMessage: function (a) {
                    k || m.init(), i && i.postMessage(babelHelpers["extends"]({}, a));
                  },
                };
              e.exports = m;
            },
            null
          );
          __d(
            "MessengerEnvironment",
            ["CurrentEnvironment"],
            function (a, b, c, d, e, f) {
              "use strict";
              a = babelHelpers["extends"]({}, b("CurrentEnvironment"), {
                messengerui: !1,
                setMessengerUI: function (a) {
                  this.messengerui = a;
                },
              });
              e.exports = a;
            },
            null
          );
          __d(
            "areEqual",
            [],
            function (a, b, c, d, e, f) {
              var g = [],
                h = [];
              function a(a, b) {
                var c = g.length ? g.pop() : [],
                  d = h.length ? h.pop() : [];
                a = i(a, b, c, d);
                c.length = 0;
                d.length = 0;
                g.push(c);
                h.push(d);
                return a;
              }
              function i(a, b, c, d) {
                if (a === b) return a !== 0 || 1 / a == 1 / b;
                if (a == null || b == null) return !1;
                if (typeof a !== "object" || typeof b !== "object") return !1;
                var e = Object.prototype.toString,
                  f = e.call(a);
                if (f != e.call(b)) return !1;
                switch (f) {
                  case "[object String]":
                    return a == String(b);
                  case "[object Number]":
                    return isNaN(a) || isNaN(b) ? !1 : a == Number(b);
                  case "[object Date]":
                  case "[object Boolean]":
                    return +a == +b;
                  case "[object RegExp]":
                    return (
                      a.source == b.source &&
                      a.global == b.global &&
                      a.multiline == b.multiline &&
                      a.ignoreCase == b.ignoreCase
                    );
                }
                e = c.length;
                while (e--) if (c[e] == a) return d[e] == b;
                c.push(a);
                d.push(b);
                e = 0;
                if (f === "[object Array]") {
                  e = a.length;
                  if (e !== b.length) return !1;
                  while (e--) if (!i(a[e], b[e], c, d)) return !1;
                } else if (a instanceof Set) {
                  if (a.size !== b.size) return !1;
                  f = ES("Array", "from", !1, b.values());
                  for (
                    var e = a,
                      g = ES("Array", "isArray", !1, e),
                      h = 0,
                      e = g ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                    ;

                  ) {
                    var j;
                    if (g) {
                      if (h >= e.length) break;
                      j = e[h++];
                    } else {
                      h = e.next();
                      if (h.done) break;
                      j = h.value;
                    }
                    j = j;
                    var k = !1;
                    for (var l = 0; l < f.length; l++) {
                      var m = f[l];
                      if (i(j, m, c, d)) {
                        k = !0;
                        f.splice(l, 1);
                        break;
                      }
                    }
                    if (k === !1) return !1;
                  }
                  return !0;
                } else {
                  if (a.constructor !== b.constructor) return !1;
                  if (
                    Object.prototype.hasOwnProperty.call(a, "valueOf") &&
                    Object.prototype.hasOwnProperty.call(b, "valueOf")
                  )
                    return a.valueOf() == b.valueOf();
                  m = ES("Object", "keys", !1, a);
                  if (m.length != ES("Object", "keys", !1, b).length) return !1;
                  for (var j = 0; j < m.length; j++) {
                    if (m[j] === "_owner") continue;
                    if (!Object.prototype.hasOwnProperty.call(b, m[j]) || !i(a[m[j]], b[m[j]], c, d))
                      return !1;
                  }
                }
                c.pop();
                d.pop();
                return !0;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "isCdnURI",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              function a(a) {
                if (a.getProtocol() !== "http" && a.getProtocol() !== "https") return !1;
                var b = Number(a.getPort());
                if (!!b && b !== 80 && b !== 443) return !1;
                return a.isSubdomainOfDomain("fbcdn.net") ? !0 : !1;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "BlueCompatRouter",
            ["BlueCompatBroker", "Env", "MessengerEnvironment", "URI", "areEqual", "isCdnURI"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g, h, i;
              c = function (b, c) {
                var d,
                  e = a.__fbNativeClearTimeout || window.clearTimeout,
                  f = a.__fbNativeSetTimeout || window.setTimeout;
                return function () {
                  var a = this,
                    g = arguments,
                    h = function () {
                      (d = null), b.apply(a, g);
                    };
                  e(d);
                  d = f(h, c);
                };
              };
              var j = {
                  convertUri: function (a) {
                    if (a == null || a === "") return new (g || (g = b("URI")))();
                    a = new (g || (g = b("URI")))(a);
                    if (ES(a.getDomain(), "endsWith", !0, "messenger.com"))
                      return a
                        .setDomain(a.getDomain().replace(/messenger\.com/i, "facebook.com"))
                        .setPath("/messages" + a.getPath());
                    else return a;
                  },
                  goFragment: function (a) {
                    if ((h || (h = b("Env"))).isCQuick) {
                      a = j.convertUri(a);
                      if (a.getFragment()) {
                        var c = (g || (g = b("URI"))).getRequestURI(!1, !1);
                        if (
                          (i || (i = b("areEqual")))(
                            new (g || (g = b("URI")))(c).setFragment("").getQualifiedURI(),
                            new (g || (g = b("URI")))(a).setFragment("").getQualifiedURI()
                          )
                        )
                          return !0;
                      }
                    }
                    return !1;
                  },
                  go: function (a, c) {
                    if ((h || (h = b("Env"))).isCQuick) {
                      var d = new (g || (g = b("URI")))(a);
                      a = j.convertUri(a);
                      var e = a.getQualifiedURI();
                      if (b("isCdnURI")(a) || ES(e.getPath(), "startsWith", !0, "/compat")) return !1;
                      a = (function () {
                        if (
                          b("MessengerEnvironment").messengerui &&
                          ES(e.getPath(), "startsWith", !0, "/messages")
                        )
                          return [!1, "/messages"];
                        if (
                          ES(d.getPath(), "startsWith", !0, "/settings") &&
                          ES(e.getPath(), "startsWith", !0, "/settings") &&
                          e.getSubdomain() !== d.getSubdomain()
                        )
                          return [!1, "/settings"];
                        if (
                          ES(d.getPath(), "startsWith", !0, "/games") &&
                          ES(e.getPath(), "startsWith", !0, "/games")
                        )
                          return [!1, "/games/web"];
                        if (/\/[A-Za-z\-0-9]+\/settings/.test(d.getPath())) return [!1, "/pages/settings"];
                        return /\/[A-Za-z\-0-9]+\/insights/.test(d.getPath()) ? [!1, "/insights"] : [!0, ""];
                      })();
                      var f = a[0];
                      a = a[1];
                      k({ compatAction: "route", maintainKey: a, replace: c, uri: String(e) });
                      return f;
                    }
                    return !1;
                  },
                  startChat: function (a) {
                    return j.sendMessage({ compatAction: "startchat", tabId: a });
                  },
                  chatListener: function (a, b) {
                    a.addEventListener("click", function () {
                      j.startChat("fbid:" + b);
                    });
                  },
                  sendMessage: function (a) {
                    if ((h || (h = b("Env"))).isCQuick) {
                      b("BlueCompatBroker").init();
                      b("BlueCompatBroker").sendMessage(a);
                      return !0;
                    }
                    return !1;
                  },
                },
                k = c(j.sendMessage, 250);
              e.exports = j;
            },
            null
          );
          __d(
            "flattenPHPQueryData",
            ["invariant"],
            function (a, b, c, d, e, f, g) {
              function a(a) {
                return h(a, "", {});
              }
              function h(a, b, c) {
                if (a === null || a === void 0) c[b] = void 0;
                else if (typeof a === "object") {
                  typeof a.appendChild !== "function" || g(0, 2616);
                  for (var d in a)
                    d !== "$$typeof" &&
                      Object.prototype.hasOwnProperty.call(a, d) &&
                      a[d] !== void 0 &&
                      h(a[d], b ? b + "[" + d + "]" : d, c);
                } else c[b] = a;
                return c;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "PHPQuerySerializer",
            ["flattenPHPQueryData"],
            function (a, b, c, d, e, f) {
              function a(a) {
                var c = [];
                a = b("flattenPHPQueryData")(a);
                for (var d in a)
                  if (Object.prototype.hasOwnProperty.call(a, d)) {
                    var e = g(d);
                    a[d] === void 0 ? c.push(e) : c.push(e + "=" + g(String(a[d])));
                  }
                return c.join("&");
              }
              function g(a) {
                return encodeURIComponent(a).replace(/%5D/g, "]").replace(/%5B/g, "[");
              }
              var h = /^([-_\w]+)((?:\[[-_\w]*\])+)=?(.*)/;
              function i(a) {
                return a === "hasOwnProperty" || a === "__proto__" ? "\ud83d\udf56" : a;
              }
              function c(a) {
                if (!a) return {};
                var b = {};
                a = a.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
                a = a.split("&");
                var c = Object.prototype.hasOwnProperty;
                for (var d = 0, e = a.length; d < e; d++) {
                  var f = a[d].match(h);
                  if (!f) {
                    var g = ES(a[d], "indexOf", !0, "=");
                    if (g === -1) b[j(a[d])] = null;
                    else {
                      var k = a[d].substring(0, g);
                      g = a[d].substring(g + 1);
                      b[j(k)] = j(g);
                    }
                  } else {
                    k = f[2].split(/\]\[|\[|\]/).slice(0, -1);
                    g = f[1];
                    f = j(f[3] || "");
                    k[0] = g;
                    g = b;
                    for (var l = 0; l < k.length - 1; l++) {
                      var m = i(k[l]);
                      if (m) {
                        if (!c.call(g, m)) {
                          var n = k[l + 1] && !k[l + 1].match(/^\d{1,3}$/) ? {} : [];
                          g[m] = n;
                          if (g[m] !== n) return b;
                        }
                        g = g[m];
                      } else
                        k[l + 1] && !k[l + 1].match(/^\d{1,3}$/) ? g.push({}) : g.push([]),
                          (g = g[g.length - 1]);
                    }
                    g instanceof Array && k[k.length - 1] === "" ? g.push(f) : (g[i(k[k.length - 1])] = f);
                  }
                }
                return b;
              }
              function j(a) {
                try {
                  return decodeURIComponent(a.replace(/\+/g, " "));
                } catch (b) {
                  return a;
                }
              }
              d = { serialize: a, encodeComponent: g, deserialize: c, decodeComponent: j };
              e.exports = d;
            },
            null
          );
          __d(
            "PHPQuerySerializerNoEncoding",
            ["PHPQuerySerializer", "flattenPHPQueryData"],
            function (a, b, c, d, e, f) {
              var g;
              function a(a) {
                var c = [];
                a = b("flattenPHPQueryData")(a);
                for (var d in a)
                  if (Object.prototype.hasOwnProperty.call(a, d)) {
                    var e = h(d);
                    a[d] === void 0 ? c.push(e) : c.push(e + "=" + h(String(a[d])));
                  }
                return c.join("&");
              }
              function h(a) {
                return a;
              }
              c = {
                serialize: a,
                encodeComponent: h,
                deserialize: (g || (g = b("PHPQuerySerializer"))).deserialize,
                decodeComponent: g.decodeComponent,
              };
              e.exports = c;
            },
            null
          );
          __d(
            "URIRFC3986",
            [],
            function (a, b, c, d, e, f) {
              var g = new RegExp(
                "^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?"
              );
              a = {
                parse: function (a) {
                  if (ES(a, "trim", !0) === "") return null;
                  a = a.match(g);
                  if (a == null) return null;
                  var b = {};
                  b.uri = a[0] ? a[0] : null;
                  b.scheme = a[1] ? a[1].substr(0, a[1].length - 1) : null;
                  b.authority = a[2] ? a[2].substr(2) : null;
                  b.userinfo = a[3] ? a[3].substr(0, a[3].length - 1) : null;
                  b.host = a[2] ? a[4] : null;
                  b.port = a[5] ? (a[5].substr(1) ? parseInt(a[5].substr(1), 10) : null) : null;
                  b.path = a[6] ? a[6] : null;
                  b.query = a[7] ? a[7].substr(1) : null;
                  b.fragment = a[8] ? a[8].substr(1) : null;
                  b.isGenericURI = b.authority === null && !!b.scheme;
                  return b;
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "createObjectFrom",
            [],
            function (a, b, c, d, e, f) {
              function g(a, b) {
                if (b === void 0) return g(a, !0);
                var c = {};
                if (ES("Array", "isArray", !1, b)) for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b[d];
                else for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b;
                return c;
              }
              e.exports = g;
            },
            null
          );
          __d(
            "URISchemes",
            ["createObjectFrom"],
            function (a, b, c, d, e, f) {
              var g = b("createObjectFrom")([
                "blob",
                "cmms",
                "fb",
                "fba",
                "fbatwork",
                "fb-ama",
                "fb-workchat",
                "fb-workchat-secure",
                "fb-messenger",
                "fb-messenger-public",
                "fb-messenger-group-thread",
                "fb-page-messages",
                "fb-pma",
                "fbcf",
                "fbconnect",
                "fbinternal",
                "fbmobilehome",
                "fbrpc",
                "file",
                "ftp",
                "gtalk",
                "http",
                "https",
                "mailto",
                "wss",
                "ms-app",
                "intent",
                "itms",
                "itms-apps",
                "lasso",
                "market",
                "svn+ssh",
                "fbstaging",
                "tel",
                "sms",
                "pebblejs",
                "sftp",
                "whatsapp",
                "moments",
                "flash",
                "fblite",
                "chrome-extension",
                "webcal",
                "fb124024574287414",
                "fb124024574287414rc",
                "fb124024574287414master",
                "fb1576585912599779",
                "fb929757330408142",
                "designpack",
                "fbpixelcloud",
                "fbapi20130214",
                "fb1196383223757595",
                "oculus",
                "oculus.store",
                "oculus.feed",
                "skype",
                "callto",
                "workchat",
                "fb236786383180508",
                "fb1775440806014337",
                "data",
                "fb-mk",
                "munki",
                "kirigami",
                "origami-file",
                "fb-nimble-vrsrecorder",
                "fb-nimble-monohandtrackingvis",
                "together",
              ]);
              a = {
                isAllowed: function (a) {
                  return a == null || a === ""
                    ? !0
                    : Object.prototype.hasOwnProperty.call(g, a.toLowerCase());
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "isInternalFBURI",
            [],
            function (a, b, c, d, e, f) {
              var g = new RegExp("(^|\\.)internalfb\\.com$", "i");
              function a(a) {
                return g.test(a.getDomain());
              }
              e.exports = a;
            },
            null
          );
          __d(
            "setHostSubdomain",
            [],
            function (a, b, c, d, e, f) {
              function a(a, b) {
                a = a.split(".");
                a.length < 3 ? a.unshift(b) : (a[0] = b);
                return a.join(".");
              }
              e.exports = a;
            },
            null
          );
          __d(
            "URIBase",
            [
              "invariant",
              "PHPQuerySerializerNoEncoding",
              "UriNeedRawQuerySVChecker",
              "URIRFC3986",
              "URISchemes",
              "ex",
              "isInternalFBURI",
              "setHostSubdomain",
            ],
            function (a, b, c, d, e, f, g) {
              var h,
                i,
                j = new RegExp(
                  "[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"
                ),
                k = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)");
              function l(a, c, d, e) {
                if (!c) return !0;
                if (c instanceof n) {
                  a.setProtocol(c.getProtocol());
                  a.setDomain(c.getDomain());
                  a.setPort(c.getPort());
                  a.setPath(c.getPath());
                  a.setQueryData(e.deserialize(e.serialize(c.getQueryData())));
                  a.setFragment(c.getFragment());
                  a.setIsGeneric(c.getIsGeneric());
                  a.setForceFragmentSeparator(c.getForceFragmentSeparator());
                  a.setOriginalRawQuery(c.getOriginalRawQuery());
                  a.setQueryParamModified(!1);
                  return !0;
                }
                c = ES(c.toString(), "trim", !0);
                var f = (h || (h = b("URIRFC3986"))).parse(c) || {
                  fragment: null,
                  scheme: null,
                  query: null,
                };
                if (!d && !(i || (i = b("URISchemes"))).isAllowed(f.scheme)) return !1;
                a.setProtocol(f.scheme || "");
                if (!d && j.test(f.host || "")) return !1;
                a.setDomain(f.host || "");
                a.setPort(f.port || "");
                a.setPath(f.path || "");
                if (d) a.setQueryData(e.deserialize(f.query || "") || {});
                else
                  try {
                    a.setQueryData(e.deserialize(f.query || "") || {});
                  } catch (a) {
                    return !1;
                  }
                a.setFragment(f.fragment || "");
                f.fragment === "" && a.setForceFragmentSeparator(!0);
                a.setIsGeneric(f.isGenericURI || !1);
                a.setOriginalRawQuery(f.query);
                a.setQueryParamModified(!1);
                if (f.userinfo !== null)
                  if (d)
                    throw new Error(
                      b("ex")("URI.parse: invalid URI (userinfo is not allowed in a URI): %s", c)
                    );
                  else return !1;
                if (!a.getDomain() && ES(a.getPath(), "indexOf", !0, "\\") !== -1)
                  if (d)
                    throw new Error(
                      b("ex")("URI.parse: invalid URI (no domain but multiple back-slashes): %s", c)
                    );
                  else return !1;
                if (!a.getProtocol() && k.test(c))
                  if (d)
                    throw new Error(b("ex")("URI.parse: invalid URI (unsafe protocol-relative URLs): %s", c));
                  else return !1;
                if (a.getDomain() && a.getPath() && !ES(a.getPath(), "startsWith", !0, "/"))
                  if (d)
                    throw new Error(
                      b("ex")(
                        "URI.parse: invalid URI (domain and path where path lacks leading slash): %s",
                        c
                      )
                    );
                  else return !1;
                return !0;
              }
              var m = [],
                n = (function () {
                  "use strict";
                  a.tryParse = function (b, c) {
                    var d = new a(null, c);
                    return l(d, b, !1, c) ? d : null;
                  };
                  a.isValid = function (b, c) {
                    return !!a.tryParse(b, c);
                  };
                  function a(a, b) {
                    b || g(0, 2966),
                      (this.$9 = b),
                      (this.$7 = ""),
                      (this.$1 = ""),
                      (this.$6 = ""),
                      (this.$5 = ""),
                      (this.$3 = ""),
                      (this.$4 = !1),
                      (this.$8 = {}),
                      (this.$2 = !1),
                      l(this, a, !0, b),
                      (this.$11 = !1);
                  }
                  var c = a.prototype;
                  c.setProtocol = function (a) {
                    (i || (i = b("URISchemes"))).isAllowed(a) || g(0, 587, a);
                    this.$7 = a;
                    return this;
                  };
                  c.getProtocol = function () {
                    return (this.$7 || "").toLowerCase();
                  };
                  c.setSecure = function (a) {
                    return this.setProtocol(a ? "https" : "http");
                  };
                  c.isSecure = function () {
                    return this.getProtocol() === "https";
                  };
                  c.setDomain = function (a) {
                    if (j.test(a))
                      throw new Error(
                        b("ex")("URI.setDomain: unsafe domain specified: %s for url %s", a, this.toString())
                      );
                    this.$1 = a;
                    return this;
                  };
                  c.getDomain = function () {
                    return this.$1;
                  };
                  c.setPort = function (a) {
                    this.$6 = a;
                    return this;
                  };
                  c.getPort = function () {
                    return this.$6;
                  };
                  c.setPath = function (a) {
                    this.$5 = a;
                    return this;
                  };
                  c.getPath = function () {
                    return this.$5;
                  };
                  c.addQueryData = function (a, b) {
                    Object.prototype.toString.call(a) === "[object Object]"
                      ? ES("Object", "assign", !1, this.$8, a)
                      : (this.$8[a] = b);
                    this.$11 = !0;
                    return this;
                  };
                  c.setQueryData = function (a) {
                    this.$8 = a;
                    this.$11 = !0;
                    return this;
                  };
                  c.getQueryData = function () {
                    return this.$8;
                  };
                  c.setQueryString = function (a) {
                    return this.setQueryData(this.$9.deserialize(a));
                  };
                  c.getQueryString = function (a) {
                    a === void 0 && (a = !1);
                    return this.$12(!1, a);
                  };
                  c.$12 = function (a, c) {
                    a === void 0 && (a = !1);
                    c === void 0 && (c = !1);
                    if (
                      !this.$11 &&
                      (c || b("UriNeedRawQuerySVChecker").isDomainNeedRawQuery(this.getDomain()))
                    ) {
                      return (c = this.$10) != null ? c : "";
                    }
                    return (a ? b("PHPQuerySerializerNoEncoding") : this.$9).serialize(this.getQueryData());
                  };
                  c.removeQueryData = function (a) {
                    ES("Array", "isArray", !1, a) || (a = [a]);
                    for (var b = 0, c = a.length; b < c; ++b) delete this.$8[a[b]];
                    this.$11 = !0;
                    return this;
                  };
                  c.setFragment = function (a) {
                    this.$3 = a;
                    this.setForceFragmentSeparator(!1);
                    return this;
                  };
                  c.getFragment = function () {
                    return this.$3;
                  };
                  c.setForceFragmentSeparator = function (a) {
                    this.$2 = a;
                    return this;
                  };
                  c.getForceFragmentSeparator = function () {
                    return this.$2;
                  };
                  c.setIsGeneric = function (a) {
                    this.$4 = a;
                    return this;
                  };
                  c.getIsGeneric = function () {
                    return this.$4;
                  };
                  c.getOriginalRawQuery = function () {
                    return this.$10;
                  };
                  c.setOriginalRawQuery = function (a) {
                    this.$10 = a;
                    return this;
                  };
                  c.setQueryParamModified = function (a) {
                    this.$11 = a;
                    return this;
                  };
                  c.isEmpty = function () {
                    return !(
                      this.getPath() ||
                      this.getProtocol() ||
                      this.getDomain() ||
                      this.getPort() ||
                      ES("Object", "keys", !1, this.getQueryData()).length > 0 ||
                      this.getFragment()
                    );
                  };
                  c.toString = function () {
                    return this.$13(!1, !1);
                  };
                  c.toStringRawQuery = function () {
                    return this.$13(!0, !1);
                  };
                  c.toStringPreserveQuery = function () {
                    return this.$13(!1, !0);
                  };
                  c.$13 = function (a, b) {
                    a === void 0 && (a = !1);
                    b === void 0 && (b = !1);
                    var c = this;
                    for (var d = 0; d < m.length; d++) c = m[d](c);
                    return c.$14(a, b);
                  };
                  c.$14 = function (a, b) {
                    a === void 0 && (a = !1);
                    b === void 0 && (b = !1);
                    var c = "",
                      d = this.getProtocol();
                    d && (c += d + ":" + (this.getIsGeneric() ? "" : "//"));
                    d = this.getDomain();
                    d && (c += d);
                    d = this.getPort();
                    d && (c += ":" + d);
                    d = this.getPath();
                    d ? (c += d) : c && (c += "/");
                    d = this.$12(a, b);
                    d && (c += "?" + d);
                    a = this.getFragment();
                    a ? (c += "#" + a) : this.getForceFragmentSeparator() && (c += "#");
                    return c;
                  };
                  a.registerFilter = function (a) {
                    m.push(a);
                  };
                  c.getOrigin = function () {
                    var a = this.getPort();
                    return this.getProtocol() + "://" + this.getDomain() + (a ? ":" + a : "");
                  };
                  c.getQualifiedURIBase = function () {
                    return new a(this, this.$9).qualify();
                  };
                  c.qualify = function () {
                    if (!this.getDomain()) {
                      var b = new a(window.location.href, this.$9);
                      this.setProtocol(b.getProtocol()).setDomain(b.getDomain()).setPort(b.getPort());
                    }
                    return this;
                  };
                  c.setSubdomain = function (a) {
                    var c = this.qualify(),
                      d = c.getDomain();
                    b("isInternalFBURI")(c) && a === "our" && (a = "www");
                    return this.setDomain(b("setHostSubdomain")(d, a));
                  };
                  c.getSubdomain = function () {
                    if (!this.getDomain()) return "";
                    var a = this.getDomain().split(".");
                    if (a.length <= 2) return "";
                    else return a[0];
                  };
                  c.isSubdomainOfDomain = function (b) {
                    var c = this.getDomain();
                    return a.isDomainSubdomainOfDomain(c, b, this.$9);
                  };
                  a.isDomainSubdomainOfDomain = function (b, c, d) {
                    if (c === "" || b === "") return !1;
                    if (ES(b, "endsWith", !0, c)) {
                      var e = b.length,
                        f = c.length,
                        g = e - f - 1;
                      if (e === f || b[g] === ".") {
                        e = new a(null, d);
                        e.setDomain(c);
                        return a.isValid(e, d);
                      }
                    }
                    return !1;
                  };
                  return a;
                })();
              e.exports = n;
            },
            null
          );
          __d(
            "UriNeedRawQuerySVChecker",
            ["PHPQuerySerializer", "URIBase", "UriNeedRawQuerySVConfig"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g,
                h,
                i = ["http", "https"];
              function a(a) {
                if (a == null) return !1;
                a =
                  a instanceof (g || (g = b("URIBase")))
                    ? a
                    : (g || (g = b("URIBase"))).tryParse(a, h || (h = b("PHPQuerySerializer")));
                if (a == null) return !1;
                var c = a.getProtocol();
                return !ES(i, "includes", !0, c) ? !1 : j(a.getDomain());
              }
              function j(a) {
                return (
                  a != null &&
                  ES(b("UriNeedRawQuerySVConfig").uris, "some", !0, function (c) {
                    return (g || (g = b("URIBase"))).isDomainSubdomainOfDomain(
                      a,
                      c,
                      h || (h = b("PHPQuerySerializer"))
                    );
                  })
                );
              }
              e.exports = { isUriNeedRawQuery: a, isDomainNeedRawQuery: j };
            },
            null
          );
          __d(
            "areSameOrigin",
            [],
            function (a, b, c, d, e, f) {
              function a(a, b) {
                if (a.isEmpty() || b.isEmpty()) return !1;
                if (a.getProtocol() && a.getProtocol() != b.getProtocol()) return !1;
                if (a.getDomain() && a.getDomain() != b.getDomain()) return !1;
                return a.getPort() && a.getPort().toString() !== b.getPort().toString() ? !1 : !0;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "memoize",
            ["invariant"],
            function (a, b, c, d, e, f, g) {
              function a(a) {
                var b = a,
                  c;
                return function () {
                  arguments.length && g(0, 4494);
                  b && ((c = b()), (b = null));
                  return c;
                };
              }
              e.exports = a;
            },
            null
          );
          __d(
            "memoizeStringOnly",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              function a(a) {
                var b = {};
                return function (c) {
                  Object.prototype.hasOwnProperty.call(b, c) || (b[c] = a.call(this, c));
                  return b[c];
                };
              }
              e.exports = a;
            },
            null
          );
          __d(
            "unqualifyURI",
            [],
            function (a, b, c, d, e, f) {
              function a(a) {
                return a.setProtocol("").setDomain("").setPort("");
              }
              e.exports = a;
            },
            null
          );
          __d(
            "URI",
            [
              "Env",
              "PHPQuerySerializer",
              "PHPQuerySerializerNoEncoding",
              "ReloadPage",
              "URIBase",
              "UriNeedRawQuerySVChecker",
              "areSameOrigin",
              "ifRequired",
              "isFacebookURI",
              "memoize",
              "memoizeStringOnly",
              "unqualifyURI",
              "FBLogger",
            ],
            function (a, b, c, d, e, f) {
              var g,
                h,
                i,
                j = b("memoize")(function () {
                  return new l(window.location.href);
                });
              function k() {
                return b("ifRequired")("PageTransitions", function (a) {
                  if (a.isInitialized()) return a;
                });
              }
              var l = (function (d) {
                "use strict";
                babelHelpers.inheritsLoose(c, d);
                function c(a) {
                  var c;
                  b("UriNeedRawQuerySVChecker").isUriNeedRawQuery(a)
                    ? (c = d.call(this, a, b("PHPQuerySerializerNoEncoding")) || this)
                    : (c = d.call(this, a || "", g || (g = b("PHPQuerySerializer"))) || this);
                  return babelHelpers.assertThisInitialized(c);
                }
                var e = c.prototype;
                e.setPath = function (a) {
                  this.path = a;
                  return d.prototype.setPath.call(this, a);
                };
                e.getPath = function () {
                  var a = d.prototype.getPath.call(this);
                  return a ? a.replace(/^\/+/, "/") : a;
                };
                e.setProtocol = function (a) {
                  this.protocol = a;
                  return d.prototype.setProtocol.call(this, a);
                };
                e.setDomain = function (a) {
                  this.domain = a;
                  return d.prototype.setDomain.call(this, a);
                };
                e.setPort = function (a) {
                  this.port = a;
                  return d.prototype.setPort.call(this, a);
                };
                e.setFragment = function (a) {
                  this.fragment = a;
                  return d.prototype.setFragment.call(this, a);
                };
                e.stripTrailingSlash = function () {
                  this.setPath(this.getPath().replace(/\/$/, ""));
                  return this;
                };
                e.addTrailingSlash = function () {
                  var a = this.getPath();
                  a.length > 0 && a[a.length - 1] !== "/" && this.setPath(a + "/");
                  return this;
                };
                e.valueOf = function () {
                  return this.toString();
                };
                e.getRegisteredDomain = function () {
                  if (!this.getDomain()) return "";
                  if (!b("isFacebookURI")(this)) return null;
                  var a = this.getDomain().split("."),
                    c = ES(a, "indexOf", !0, "facebook");
                  c === -1 && (c = ES(a, "indexOf", !0, "workplace"));
                  return a.slice(c).join(".");
                };
                e.getUnqualifiedURI = function () {
                  return b("unqualifyURI")(new c(this));
                };
                e.getQualifiedURI = function () {
                  return new c(this).qualify();
                };
                e.isSameOrigin = function (a) {
                  a = a;
                  a == null ? (a = j()) : a instanceof c || (a = new c(a.toString()));
                  return b("areSameOrigin")(this, a);
                };
                c.go = function (a, b, d) {
                  c.goURIOnWindow(a, window, b, d);
                };
                c.goURIOnNewWindow = function (a) {
                  c.goURIOnWindow(a, window.open("", "_blank"), !0);
                };
                c.goURIOnWindow = function (d, e, f, g) {
                  f === void 0 && (f = !1);
                  g === void 0 && (g = !1);
                  d = new c(d);
                  f = f;
                  var i = !e || e === window;
                  if ((h || (h = b("Env"))).isCQuick && b("isFacebookURI")(d) && i) {
                    i = {};
                    i.cquick = (h || (h = b("Env"))).iframeKey;
                    i.ctarget = h.iframeTarget;
                    i.cquick_token = h.iframeToken;
                    d.addQueryData(i);
                    f = !1;
                  }
                  i = d.toString();
                  d = e ? e : window;
                  !f && a.PageTransitions
                    ? a.PageTransitions.go(i, g)
                    : window.location.href === i
                    ? b("ReloadPage").now()
                    : g
                    ? d.location.replace(i)
                    : (d.location.href = i);
                };
                e.go = function (a, b) {
                  c.go(this, a, b);
                };
                c.tryParseURI = function (a) {
                  a = (i || (i = b("URIBase"))).tryParse(a, g || (g = b("PHPQuerySerializer")));
                  return a ? new c(a) : null;
                };
                c.isValidURI = function (a) {
                  return (i || (i = b("URIBase"))).isValid(a, g || (g = b("PHPQuerySerializer")));
                };
                c.getRequestURI = function (a, b) {
                  a === void 0 && (a = !0);
                  b === void 0 && (b = !1);
                  if (a) {
                    a = k();
                    if (a) return a.getCurrentURI(!!b).getQualifiedURI();
                  }
                  return new c(window.location.href);
                };
                c.getMostRecentURI = function () {
                  var a = k();
                  return a ? a.getMostRecentURI().getQualifiedURI() : new c(window.location.href);
                };
                c.getNextURI = function () {
                  var a = k();
                  return a ? a.getNextURI().getQualifiedURI() : new c(window.location.href);
                };
                c.encodeComponent = function (a) {
                  return encodeURIComponent(a).replace(/%5D/g, "]").replace(/%5B/g, "[");
                };
                c.decodeComponent = function (a) {
                  return decodeURIComponent(a.replace(/\+/g, " "));
                };
                c.normalize = function (a) {
                  return a != null && typeof a === "string" ? this.normalizeString(a) : new c(a).toString();
                };
                return c;
              })(i || (i = b("URIBase")));
              l.normalizeString = b("memoizeStringOnly")(function (a) {
                return new l(a).toString();
              });
              l.expression = /(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/;
              l.arrayQueryExpression = /^(\w+)((?:\[\w*\])+)=?(.*)/;
              e.exports = l;
            },
            null
          );
          __d(
            "isCometAltpayJsSdkIframeAllowedDomain",
            ["CometAltpayJsSdkIframeAllowedDomains", "URI"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g;
              a = ES("Object", "freeze", !1, b("CometAltpayJsSdkIframeAllowedDomains"));
              var h = ES("Object", "freeze", !1, a.allowed_domains);
              c = function () {
                var a = new (g || (g = b("URI")))(window.location.href);
                if (h == null || h.length <= 0) return !1;
                var c = ES(h, "some", !0, function (c) {
                  c = new (g || (g = b("URI")))(c);
                  return c == null ? !1 : a.isSameOrigin(c);
                });
                return c ? !0 : !1;
              };
              e.exports = c;
            },
            null
          );
          __d(
            "ReloadPage",
            ["BlueCompatRouter", "Env"],
            function (a, b, c, d, e, f) {
              var g;
              c = {
                now: function (c) {
                  !(g || (g = b("Env"))).isCQuick
                    ? a.window.location.reload(c)
                    : b("BlueCompatRouter").sendMessage({ compatAction: "reload" });
                },
                delay: function (b) {
                  a.setTimeout(ES(this.now, "bind", !0, this), b);
                },
              };
              e.exports = c;
            },
            null
          );
          __d(
            "requireWeak",
            [],
            function (a, b, c, d, e, f) {
              function a(a, b) {
                d && d.call(null, [a], b);
              }
              e.exports = a;
            },
            null
          );
          __d(
            "gkx",
            ["invariant", "emptyFunction", "requireWeak"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h = {},
                i = {};
              function a(a) {
                var c = h[a];
                c != null || g(0, 3444, a);
                i[a] ||
                  ((i[a] = !0),
                  b("requireWeak")("Banzai", function (b) {
                    return b.post("gk2_exposure", { identifier: a, hash: c.hash });
                  }));
                return c.result;
              }
              a.oculus = function (a) {
                throw new Error("gkx: Unexpected gkx.oculus call.");
              };
              a.work_company = function (a) {
                throw new Error("gkx: Unexpected gkx.work_company call.");
              };
              a.session = function (a) {
                throw new Error("gkx: Unexpected gkx.session call.");
              };
              a.fb_loggedout = function (a) {
                throw new Error("gkx: Unexpected gkx.fb_loggedout call.");
              };
              a.candidate_portal = function (a) {
                throw new Error("gkx: Unexpected gkx.candidate_portal call.");
              };
              a.add = function (a) {
                for (var b in a) b in h || (h[b] = a[b]);
              };
              c = b("emptyFunction");
              a.getGKs = function () {
                return null;
              };
              a.setPass = c;
              a.setFail = c;
              e.exports = a;
            },
            null
          );
          __d(
            "XControllerURIBuilder",
            ["invariant", "URI", "gkx", "isInternalFBURI"],
            function (a, b, c, d, e, f, g) {
              var h;
              a = (function () {
                "use strict";
                function a(a, b) {
                  (this.$1 = {}), (this.$2 = a), (this.$3 = b);
                }
                var c = a.prototype;
                c.setInt = function (a, b) {
                  return this.__setParam(a, "Int", b);
                };
                c.setFBID = function (a, b) {
                  return this.__setParam(a, "FBID", b);
                };
                c.setFloat = function (a, b) {
                  return this.__setParam(a, "Float", b);
                };
                c.setString = function (a, b) {
                  return this.__setParam(a, "String", b);
                };
                c.setExists = function (a, b) {
                  b === !1 && (b = void 0);
                  return this.__setParam(a, "Exists", b);
                };
                c.setBool = function (a, b) {
                  return this.__setParam(a, "Bool", b);
                };
                c.setEnum = function (a, b) {
                  return this.__setParam(a, "Enum", b);
                };
                c.setPath = function (a, b) {
                  return this.__setParam(a, "Path", b);
                };
                c.setIntVector = function (a, b) {
                  return this.__setParam(a, "IntVector", b);
                };
                c.setIntKeyset = function (a, b) {
                  return this.__setParam(a, "IntKeyset", b);
                };
                c.setIntSet = function (a, b) {
                  return this.__setParam(a, "IntSet", b.join(","));
                };
                c.setFloatVector = function (a, b) {
                  return this.__setParam(a, "FloatVector", b);
                };
                c.setFloatSet = function (a, b) {
                  return this.__setParam(a, "FloatSet", b.join(","));
                };
                c.setStringVector = function (a, b) {
                  return this.__setParam(a, "StringVector", b);
                };
                c.setStringKeyset = function (a, b) {
                  return this.__setParam(a, "StringKeyset", b);
                };
                c.setStringSet = function (a, b) {
                  return this.__setParam(a, "StringSet", b);
                };
                c.setFBIDVector = function (a, b) {
                  return this.__setParam(a, "FBIDVector", b);
                };
                c.setFBIDSet = function (a, b) {
                  return this.__setParam(a, "FBIDSet", b);
                };
                c.setFBIDKeyset = function (a, b) {
                  return this.__setParam(a, "FBIDKeyset", b);
                };
                c.setEnumVector = function (a, b) {
                  return this.__setParam(a, "EnumVector", b);
                };
                c.setEnumSet = function (a, b) {
                  return this.__setParam(a, "EnumSet", b);
                };
                c.setEnumKeyset = function (a, b) {
                  return this.__setParam(a, "EnumKeyset", b);
                };
                c.setIntToIntMap = function (a, b) {
                  return this.__setParam(a, "IntToIntMap", b);
                };
                c.setIntToFloatMap = function (a, b) {
                  return this.__setParam(a, "IntToFloatMap", b);
                };
                c.setIntToStringMap = function (a, b) {
                  return this.__setParam(a, "IntToStringMap", b);
                };
                c.setIntToBoolMap = function (a, b) {
                  return this.__setParam(a, "IntToBoolMap", b);
                };
                c.setStringToIntMap = function (a, b) {
                  return this.__setParam(a, "StringToIntMap", b);
                };
                c.setStringToFloatMap = function (a, b) {
                  return this.__setParam(a, "StringToFloatMap", b);
                };
                c.setStringToStringMap = function (a, b) {
                  return this.__setParam(a, "StringToStringMap", b);
                };
                c.setStringToNullableStringMap = function (a, b) {
                  return this.__setParam(a, "StringToNullableStringMap", b);
                };
                c.setStringToBoolMap = function (a, b) {
                  return this.__setParam(a, "StringToBoolMap", b);
                };
                c.setStringToEnumMap = function (a, b) {
                  return this.__setParam(a, "StringToEnumMap", b);
                };
                c.setEnumToStringVectorMap = function (a, b) {
                  return this.__setParam(a, "EnumToStringVectorMap", b);
                };
                c.setEnumToBoolMap = function (a, b) {
                  return this.__setParam(a, "EnumToBoolMap", b);
                };
                c.setEnumToEnumMap = function (a, b) {
                  return this.__setParam(a, "EnumToEnumMap", b);
                };
                c.setEnumToIntMap = function (a, b) {
                  return this.__setParam(a, "EnumToIntMap", b);
                };
                c.setEnumToFBIDVectorMap = function (a, b) {
                  return this.__setParam(a, "EnumToFBIDVectorMap", b);
                };
                c.setStringToIntDict = function (a, b) {
                  return this.__setParam(a, "StringToIntDict", b);
                };
                c.setStringToNullableIntDict = function (a, b) {
                  return this.__setParam(a, "StringToNullableIntDict", b);
                };
                c.setStringToFloatDict = function (a, b) {
                  return this.__setParam(a, "StringToFloatDict", b);
                };
                c.setStringToNullableFloatDict = function (a, b) {
                  return this.__setParam(a, "StringToNullableFloatDict", b);
                };
                c.setStringToStringDict = function (a, b) {
                  return this.__setParam(a, "StringToStringDict", b);
                };
                c.setStringToNullableStringDict = function (a, b) {
                  return this.__setParam(a, "StringToNullableStringDict", b);
                };
                c.setStringToBoolDict = function (a, b) {
                  return this.__setParam(a, "StringToBoolDict", b);
                };
                c.setStringToEnumDict = function (a, b) {
                  return this.__setParam(a, "StringToEnumDict", b);
                };
                c.setEnumToIntDict = function (a, b) {
                  return this.__setParam(a, "EnumToIntDict", b);
                };
                c.setHackType = function (a, b) {
                  return this.__setParam(a, "HackType", b);
                };
                c.setTypeAssert = function (a, b) {
                  return this.__setParam(a, "TypeAssert", b);
                };
                c.__validateRequiredParamsExistence = function () {
                  for (var a in this.$3)
                    !this.$3[a].required || Object.prototype.hasOwnProperty.call(this.$1, a) || g(0, 903, a);
                };
                c.setParams = function (a) {
                  for (var b in a) {
                    this.__assertParamExists(b);
                    var c = this.$3[b].type;
                    this.__setParam(b, c, a[b]);
                  }
                  return this;
                };
                c.__assertParamExists = function (a) {
                  a in this.$3 || g(0, 904, a);
                };
                c.__setParam = function (a, b, c) {
                  this.__assertParamExists(a);
                  var d = this.$3[a].type;
                  d === b || g(0, 905, a, b, d);
                  this.__setParamInt(a, c);
                  return this;
                };
                c.__setParamInt = function (a, b) {
                  this.$1[a] = b;
                };
                c.getRequest_LEGACY_UNTYPED = function (a) {
                  return a.setReplaceTransportMarkers().setURI(this.getURI());
                };
                c.getURI = function () {
                  this.__validateRequiredParamsExistence();
                  var a = {},
                    c = "",
                    d = /^(.*)?\{(\?)?(\*)?(.+?)\}(.*)?$/,
                    e = this.$2.split("/"),
                    f = !1;
                  for (var i = 0; i < e.length; i++) {
                    var j = e[i];
                    if (j === "") continue;
                    var k = d.exec(j);
                    if (!k) c += "/" + j;
                    else {
                      j = k[2] === "?";
                      var l = k[4],
                        m = this.$3[l];
                      m || g(0, 906, l, this.$2);
                      if (j && f) continue;
                      if (this.$1[l] == null && j) {
                        f = !0;
                        continue;
                      }
                      this.$1[l] != null || g(0, 907, l);
                      m = k[1] ? k[1] : "";
                      j = k[5] ? k[5] : "";
                      c += "/" + m + this.$1[l] + j;
                      a[l] = !0;
                    }
                  }
                  this.$2.slice(-1) === "/" && (c += "/");
                  c === "" && (c = "/");
                  k = new (h || (h = b("URI")))(c);
                  for (var n in this.$1) {
                    m = this.$1[n];
                    if (!a[n] && m != null) {
                      j = this.$3[n];
                      k.addQueryData(n, j && j.type === "Exists" ? null : m);
                    }
                  }
                  return k;
                };
                c.getLookasideURI = function () {
                  var a = "origincache.facebook.com";
                  b("isInternalFBURI")((h || (h = b("URI"))).getRequestURI())
                    ? (a = "lookaside.internalfb.com")
                    : b("gkx")("996940") && (a = "lookaside.internmc.facebook.com");
                  return this.getURI().setDomain(a).setProtocol("https");
                };
                a.create = function (b, c) {
                  return function () {
                    return new a(b, c);
                  };
                };
                return a;
              })();
              a.prototype.getRequest = function (a) {
                return this.getRequest_LEGACY_UNTYPED(a);
              };
              e.exports = a;
            },
            null
          );
          __d(
            "XRequest",
            ["invariant"],
            function (a, b, c, d, e, f, g) {
              var h = function a(b, c, d) {
                var e;
                switch (b) {
                  case "Bool":
                    e = (c && c !== "false" && c !== "0") || !1;
                    break;
                  case "Int":
                    e = c.toString();
                    /-?\d+/.test(e) || g(0, 5041, c);
                    break;
                  case "Float":
                    e = parseFloat(c, 10);
                    isNaN(e) && g(0, 5042, c);
                    break;
                  case "FBID":
                    e = c.toString();
                    for (var f = 0; f < e.length; ++f) {
                      var h = e.charCodeAt(f);
                      (48 <= h && h <= 57) || g(0, 5043, c);
                    }
                    break;
                  case "String":
                    e = c.toString();
                    break;
                  case "Enum":
                    d === 0
                      ? (e = a("Int", c, null))
                      : d === 1
                      ? (e = a("String", c, null))
                      : d === 2
                      ? (e = c)
                      : g(0, 5044, d);
                    break;
                  default:
                    if ((h = /^Nullable(\w+)$/.exec(b))) c === null ? (e = null) : (e = a(h[1], c, d));
                    else if ((f = /^(\w+)Vector$/.exec(b))) {
                      !Array.isArray(c) ? ((e = c.toString()), (e = e === "" ? [] : e.split(","))) : (e = c);
                      var i = f[1];
                      typeof i === "string" || g(0, 5045);
                      e = e.map(function (b) {
                        return a(i, b, d && d.member);
                      });
                    } else if ((h = /^(\w+)(Set|Keyset)$/.exec(b)))
                      !Array.isArray(c) ? ((e = c.toString()), (e = e === "" ? [] : e.split(","))) : (e = c),
                        (e = e.reduce(function (a, b) {
                          a[b] = b;
                          return a;
                        }, {})),
                        (i = h[1]),
                        typeof i === "string" || g(0, 5045),
                        (e = Object.keys(e).map(function (b) {
                          return a(i, e[b], d && d.member);
                        }));
                    else if ((f = /^(\w+)To(\w+)Map$/.exec(b))) {
                      e = {};
                      var j = f[1],
                        k = f[2];
                      (typeof j === "string" && typeof k === "string") || g(0, 5045);
                      Object.keys(c).forEach(function (b) {
                        e[a(j, b, d && d.key)] = a(k, c[b], d && d.value);
                      });
                    } else g(0, 5046, b);
                }
                return e;
              };
              a = (function () {
                "use strict";
                function a(a, b, c) {
                  this.$1 = b;
                  this.$2 = babelHelpers["extends"]({}, c.getQueryData());
                  b = a.split("/").filter(function (a) {
                    return a;
                  });
                  a = c
                    .getPath()
                    .split("/")
                    .filter(function (a) {
                      return a;
                    });
                  for (var d = 0; d < b.length; ++d) {
                    var e = /^\{(\?)?(\*)?(\w+)\}$/.exec(b[d]);
                    if (!e) {
                      b[d] === a[d] || g(0, 5047, c.getPath());
                      continue;
                    }
                    var f = !!e[1],
                      h = !!e[2];
                    !h || d === b.length - 1 || g(0, 5048, i);
                    var i = e[3];
                    Object.prototype.hasOwnProperty.call(this.$1, i) || g(0, 5049, i);
                    this.$1[i].required ? f && g(0, 5050, i) : f || g(0, 5057, i);
                    a[d] && (this.$2[i] = h ? a.slice(d).join("/") : a[d]);
                  }
                  Object.keys(this.$1).forEach(function (a) {
                    !this.$1[a].required || Object.prototype.hasOwnProperty.call(this.$2, a) || g(0, 5051);
                  }, this);
                }
                var b = a.prototype;
                b.getExists = function (a) {
                  return this.$2[a] !== void 0;
                };
                b.getBool = function (a) {
                  return this.$3(a, "Bool");
                };
                b.getInt = function (a) {
                  return this.$3(a, "Int");
                };
                b.getFloat = function (a) {
                  return this.$3(a, "Float");
                };
                b.getFBID = function (a) {
                  return this.$3(a, "FBID");
                };
                b.getString = function (a) {
                  return this.$3(a, "String");
                };
                b.getEnum = function (a) {
                  return this.$3(a, "Enum");
                };
                b.getOptionalInt = function (a) {
                  return this.$4(a, "Int");
                };
                b.getOptionalFloat = function (a) {
                  return this.$4(a, "Float");
                };
                b.getOptionalFBID = function (a) {
                  return this.$4(a, "FBID");
                };
                b.getOptionalString = function (a) {
                  return this.$4(a, "String");
                };
                b.getOptionalEnum = function (a) {
                  return this.$4(a, "Enum");
                };
                b.getIntVector = function (a) {
                  return this.$3(a, "IntVector");
                };
                b.getFloatVector = function (a) {
                  return this.$3(a, "FloatVector");
                };
                b.getFBIDVector = function (a) {
                  return this.$3(a, "FBIDVector");
                };
                b.getStringVector = function (a) {
                  return this.$3(a, "StringVector");
                };
                b.getEnumVector = function (a) {
                  return this.$3(a, "EnumVector");
                };
                b.getOptionalIntVector = function (a) {
                  return this.$4(a, "IntVector");
                };
                b.getOptionalFloatVector = function (a) {
                  return this.$4(a, "FloatVector");
                };
                b.getOptionalFBIDVector = function (a) {
                  return this.$4(a, "FBIDVector");
                };
                b.getOptionalStringVector = function (a) {
                  return this.$4(a, "StringVector");
                };
                b.getOptionalEnumVector = function (a) {
                  return this.$4(a, "EnumVector");
                };
                b.getIntSet = function (a) {
                  return this.$3(a, "IntSet");
                };
                b.getFBIDSet = function (a) {
                  return this.$3(a, "FBIDSet");
                };
                b.getFBIDKeyset = function (a) {
                  return this.$3(a, "FBIDKeyset");
                };
                b.getStringSet = function (a) {
                  return this.$3(a, "StringSet");
                };
                b.getEnumKeyset = function (a) {
                  return this.$3(a, "EnumKeyset");
                };
                b.getOptionalIntSet = function (a) {
                  return this.$4(a, "IntSet");
                };
                b.getOptionalFBIDSet = function (a) {
                  return this.$4(a, "FBIDSet");
                };
                b.getOptionalFBIDKeyset = function (a) {
                  return this.$4(a, "FBIDKeyset");
                };
                b.getOptionalStringSet = function (a) {
                  return this.$4(a, "StringSet");
                };
                b.getEnumToBoolMap = function (a) {
                  return this.$3(a, "EnumToBoolMap");
                };
                b.getEnumToEnumMap = function (a) {
                  return this.$3(a, "EnumToEnumMap");
                };
                b.getEnumToFloatMap = function (a) {
                  return this.$3(a, "EnumToFloatMap");
                };
                b.getEnumToIntMap = function (a) {
                  return this.$3(a, "EnumToIntMap");
                };
                b.getEnumToStringMap = function (a) {
                  return this.$3(a, "EnumToStringMap");
                };
                b.getIntToBoolMap = function (a) {
                  return this.$3(a, "IntToBoolMap");
                };
                b.getIntToEnumMap = function (a) {
                  return this.$3(a, "IntToEnumMap");
                };
                b.getIntToFloatMap = function (a) {
                  return this.$3(a, "IntToFloatMap");
                };
                b.getIntToIntMap = function (a) {
                  return this.$3(a, "IntToIntMap");
                };
                b.getIntToStringMap = function (a) {
                  return this.$3(a, "IntToStringMap");
                };
                b.getStringToBoolMap = function (a) {
                  return this.$3(a, "StringToBoolMap");
                };
                b.getStringToEnumMap = function (a) {
                  return this.$3(a, "StringToEnumMap");
                };
                b.getStringToFloatMap = function (a) {
                  return this.$3(a, "StringToFloatMap");
                };
                b.getStringToIntMap = function (a) {
                  return this.$3(a, "StringToIntMap");
                };
                b.getStringToStringMap = function (a) {
                  return this.$3(a, "StringToStringMap");
                };
                b.getOptionalEnumToBoolMap = function (a) {
                  return this.$4(a, "EnumToBoolMap");
                };
                b.getOptionalEnumToEnumMap = function (a) {
                  return this.$4(a, "EnumToEnumMap");
                };
                b.getOptionalEnumToFloatMap = function (a) {
                  return this.$4(a, "EnumToFloatMap");
                };
                b.getOptionalEnumToIntMap = function (a) {
                  return this.$4(a, "EnumToIntMap");
                };
                b.getOptionalEnumToStringMap = function (a) {
                  return this.$4(a, "EnumToStringMap");
                };
                b.getOptionalIntToBoolMap = function (a) {
                  return this.$4(a, "IntToBoolMap");
                };
                b.getOptionalIntToEnumMap = function (a) {
                  return this.$4(a, "IntToEnumMap");
                };
                b.getOptionalIntToFloatMap = function (a) {
                  return this.$4(a, "IntToFloatMap");
                };
                b.getOptionalIntToIntMap = function (a) {
                  return this.$4(a, "IntToIntMap");
                };
                b.getOptionalIntToStringMap = function (a) {
                  return this.$4(a, "IntToStringMap");
                };
                b.getOptionalStringToBoolMap = function (a) {
                  return this.$4(a, "StringToBoolMap");
                };
                b.getOptionalStringToEnumMap = function (a) {
                  return this.$4(a, "StringToEnumMap");
                };
                b.getOptionalStringToFloatMap = function (a) {
                  return this.$4(a, "StringToFloatMap");
                };
                b.getOptionalStringToIntMap = function (a) {
                  return this.$4(a, "StringToIntMap");
                };
                b.getOptionalStringToStringMap = function (a) {
                  return this.$4(a, "StringToStringMap");
                };
                b.getEnumToNullableEnumMap = function (a) {
                  return this.$3(a, "EnumToNullableEnumMap");
                };
                b.getEnumToNullableFloatMap = function (a) {
                  return this.$3(a, "EnumToNullableFloatMap");
                };
                b.getEnumToNullableIntMap = function (a) {
                  return this.$3(a, "EnumToNullableIntMap");
                };
                b.getEnumToNullableStringMap = function (a) {
                  return this.$3(a, "EnumToNullableStringMap");
                };
                b.getIntToNullableEnumMap = function (a) {
                  return this.$3(a, "IntToNullableEnumMap");
                };
                b.getIntToNullableFloatMap = function (a) {
                  return this.$3(a, "IntToNullableFloatMap");
                };
                b.getIntToNullableIntMap = function (a) {
                  return this.$3(a, "IntToNullableIntMap");
                };
                b.getIntToNullableStringMap = function (a) {
                  return this.$3(a, "IntToNullableStringMap");
                };
                b.getStringToNullableEnumMap = function (a) {
                  return this.$3(a, "StringToNullableEnumMap");
                };
                b.getStringToNullableFloatMap = function (a) {
                  return this.$3(a, "StringToNullableFloatMap");
                };
                b.getStringToNullableIntMap = function (a) {
                  return this.$3(a, "StringToNullableIntMap");
                };
                b.getStringToNullableStringMap = function (a) {
                  return this.$3(a, "StringToNullableStringMap");
                };
                b.getOptionalEnumToNullableEnumMap = function (a) {
                  return this.$4(a, "EnumToNullableEnumMap");
                };
                b.getOptionalEnumToNullableFloatMap = function (a) {
                  return this.$4(a, "EnumToNullableFloatMap");
                };
                b.getOptionalEnumToNullableIntMap = function (a) {
                  return this.$4(a, "EnumToNullableIntMap");
                };
                b.getOptionalEnumToNullableStringMap = function (a) {
                  return this.$4(a, "EnumToNullableStringMap");
                };
                b.getOptionalIntToNullableEnumMap = function (a) {
                  return this.$4(a, "IntToNullableEnumMap");
                };
                b.getOptionalIntToNullableFloatMap = function (a) {
                  return this.$4(a, "IntToNullableFloatMap");
                };
                b.getOptionalIntToNullableIntMap = function (a) {
                  return this.$4(a, "IntToNullableIntMap");
                };
                b.getOptionalIntToNullableStringMap = function (a) {
                  return this.$4(a, "IntToNullableStringMap");
                };
                b.getOptionalStringToNullableEnumMap = function (a) {
                  return this.$4(a, "StringToNullableEnumMap");
                };
                b.getOptionalStringToNullableFloatMap = function (a) {
                  return this.$4(a, "StringToNullableFloatMap");
                };
                b.getOptionalStringToNullableIntMap = function (a) {
                  return this.$4(a, "StringToNullableIntMap");
                };
                b.getOptionalStringToNullableStringMap = function (a) {
                  return this.$4(a, "StringToNullableStringMap");
                };
                b.$3 = function (a, b) {
                  this.$5(a, b);
                  var c = this.$1[a];
                  if (!Object.prototype.hasOwnProperty.call(this.$2, a) && c.defaultValue != null) {
                    c.required && g(0, 5052);
                    return h(b, c.defaultValue, c.enumType);
                  }
                  c.required || b === "Bool" || c.defaultValue != null || g(0, 5053, b, a, b, a);
                  return h(b, this.$2[a], c.enumType);
                };
                b.$4 = function (a, b) {
                  this.$5(a, b);
                  var c = this.$1[a];
                  c.required && g(0, 5054, b, a, b, a);
                  c.defaultValue && g(0, 5052);
                  return Object.prototype.hasOwnProperty.call(this.$2, a)
                    ? h(b, this.$2[a], c.enumType)
                    : null;
                };
                b.$5 = function (a, b) {
                  Object.prototype.hasOwnProperty.call(this.$1, a) || g(0, 5055, a),
                    this.$1[a].type === b || g(0, 5056, a, b, this.$1[a].type);
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "XController",
            ["XControllerURIBuilder", "XRequest"],
            function (a, b, c, d, e, f) {
              a = (function () {
                "use strict";
                function a(a, b) {
                  (this.$1 = a), (this.$2 = b);
                }
                var c = a.prototype;
                c.getURIBuilder = function (a) {
                  var c = new (b("XControllerURIBuilder"))(this.$1, this.$2);
                  if (a) {
                    var d = this.getRequest(a);
                    Object.keys(this.$2).forEach(function (a) {
                      var b = this.$2[a],
                        e = "";
                      !b.required &&
                        !Object.prototype.hasOwnProperty.call(b, "defaultValue") &&
                        (e = "Optional");
                      e = "get" + e + b.type;
                      e = d[e](a);
                      if (
                        e == null ||
                        (Object.prototype.hasOwnProperty.call(b, "defaultValue") && e === b.defaultValue)
                      )
                        return;
                      b = "set" + b.type;
                      c[b](a, e);
                    }, this);
                  }
                  return c;
                };
                c.getRequest = function (a) {
                  return new (b("XRequest"))(this.$1, this.$2, a);
                };
                a.create = function (b, c) {
                  return new a(b, c);
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "XHeartbeatController",
            ["XController"],
            function (a, b, c, d, e, f) {
              e.exports = b("XController").create("/nw/", {});
            },
            null
          );
          __d(
            "clearTimeout",
            ["requireCond", "cr:806696"],
            function (a, b, c, d, e, f) {
              "use strict";
              e.exports = b("cr:806696");
            },
            null
          );
          __d(
            "getSameOriginTransport",
            ["ExecutionEnvironment", "ex"],
            function (a, b, c, d, e, f) {
              function c() {
                if (!b("ExecutionEnvironment").canUseDOM)
                  throw new Error(
                    b("ex")(
                      "getSameOriginTransport: %s",
                      "Same origin transport unavailable in the server environment."
                    )
                  );
                try {
                  return new a.XMLHttpRequest();
                } catch (a) {
                  throw new Error(b("ex")("getSameOriginTransport: %s", a.message));
                }
              }
              e.exports = c;
            },
            null
          );
          __d(
            "killswitch",
            ["KSConfig"],
            function (a, b, c, d, e, f) {
              "use strict";
              function a(a) {
                return b("KSConfig").killed.has(a);
              }
              e.exports = a;
            },
            null
          );
          __d(
            "setTimeout",
            ["requireCond", "cr:807042"],
            function (a, b, c, d, e, f) {
              e.exports = b("cr:807042");
            },
            null
          );
          __d(
            "NetworkHeartbeat",
            ["XHeartbeatController", "clearTimeout", "getSameOriginTransport", "killswitch", "setTimeout"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = b("XHeartbeatController").getURIBuilder().getURI().toString(),
                h = 1e3,
                i = 100,
                j = null,
                k = 0,
                l = null,
                m = b("killswitch")("DISABLE_HEARTBEAT_POLLING");
              function n(a, c) {
                (l = b("getSameOriginTransport")()),
                  l.open("GET", g, !0),
                  (l.onload = function () {
                    l && l.status === 204 && (m = !0), p(a);
                  }),
                  (l.onerror = function () {
                    q(a, c);
                  }),
                  (l.ontimeout = function () {
                    q(a, c);
                  }),
                  l.send();
              }
              function o() {
                (l = null), (i = 100), (k = 0), b("clearTimeout")(j);
              }
              function p(a) {
                o(), a();
              }
              function q(a, c) {
                j = b("setTimeout")(function () {
                  r(a, c, void 0, !0);
                }, i);
                k++;
                var d = i * Math.pow(2, k);
                d <= h && (i = d);
                c();
              }
              function r(a, b, c, d) {
                c === void 0 &&
                  (c = function () {
                    return !0;
                  }),
                  d === void 0 && (d = !1),
                  m || ((d || (l == null && c())) && n(a, b));
              }
              function a() {
                return l != null;
              }
              c = { isHeartbeatPending: a, maybeStartHeartbeat: r };
              e.exports = c;
            },
            null
          );
          __d(
            "NetworkStatusImpl",
            ["FBLogger", "NetworkHeartbeat", "performanceNow"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g,
                h = [],
                i = window.navigator.onLine,
                j = 2,
                k = 5e3,
                l = [],
                m = [],
                n = 0,
                o = !0,
                p = !1,
                q = function () {
                  u(o);
                },
                r = function () {
                  u(p);
                };
              function s() {
                var a = h.slice();
                a.forEach(function (a) {
                  a({ online: i });
                });
              }
              function t(a) {
                a = h.indexOf(a);
                a > -1 && h.splice(a, 1);
              }
              function u(a) {
                i !== a &&
                  !b("NetworkHeartbeat").isHeartbeatPending() &&
                  ((i = a),
                  b("FBLogger")("NetworkStatus").warn("Network switched to " + (a ? "online" : "offline")),
                  i || b("NetworkHeartbeat").maybeStartHeartbeat(q, r),
                  s());
              }
              function v() {
                var a = (g || (g = b("performanceNow")))();
                l = l.filter(function (b) {
                  return w(b.startTime, a);
                });
                m = m.filter(function (b) {
                  return w(b.startTime, a);
                });
                return m.length / l.length < j;
              }
              var w = function (a, b) {
                return a > b - k;
              };
              a = {
                isOnline: function () {
                  return i;
                },
                onChange: function (a) {
                  h.push(a);
                  var b = !1;
                  return {
                    remove: function () {
                      b || ((b = !0), t(a));
                    },
                  };
                },
                reportError: function () {
                  var a = (g || (g = b("performanceNow")))();
                  l.push({ startTime: a });
                  b("NetworkHeartbeat").maybeStartHeartbeat(q, r, v);
                },
                reportSuccess: function () {
                  var a = (g || (g = b("performanceNow")))();
                  m.push({ startTime: a });
                  w(n, a) ||
                    ((m = m.filter(function (b) {
                      return w(b.startTime, a);
                    })),
                    (n = a));
                },
              };
              window.addEventListener("online", function () {
                u(o);
              });
              window.addEventListener("offline", function () {
                u(p);
              });
              e.exports = a;
            },
            null
          );
          __d(
            "NetworkStatusSham",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              a = {
                isOnline: function () {
                  return !0;
                },
                onChange: function (a) {
                  return { remove: function () {} };
                },
                reportError: function () {
                  return;
                },
                reportSuccess: function () {
                  return;
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "NetworkStatus",
            ["NetworkStatusImpl", "NetworkStatusSham", "gkx"],
            function (a, b, c, d, e, f) {
              "use strict";
              a = b("gkx")("1263340") ? b("NetworkStatusImpl") : b("NetworkStatusSham");
              e.exports = a;
            },
            null
          );
          __d(
            "ResourceTypes",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              a = { JS: "js", CSS: "css", XHR: "xhr" };
              e.exports = a;
            },
            null
          );
          __d(
            "TimingAnnotations",
            [],
            function (a, b, c, d, e, f) {
              a = (function () {
                "use strict";
                function a() {}
                var b = a.prototype;
                b.addStringAnnotation = function (a, b) {
                  return this;
                };
                b.addSetAnnotation = function (a, b) {
                  return this;
                };
                b.addSetElement = function (a, b) {
                  return this;
                };
                b.registerOnBeforeSend = function (a) {
                  return this;
                };
                b.addVectorAnnotation = function (a, b) {
                  return this;
                };
                b.addVectorElement = function (a, b) {
                  return this;
                };
                return a;
              })();
              b = (function () {
                "use strict";
                function a() {
                  (this.$1 = null), (this.$2 = null), (this.$3 = null), (this.$4 = []);
                }
                var b = a.prototype;
                b.addStringAnnotation = function (a, b) {
                  this.$2 = this.$2 || new Map();
                  this.$2.set(a, b);
                  return this;
                };
                b.addSetAnnotation = function (a, b) {
                  var c = this.$1 || new Map(),
                    d = c.get(a) || new Set();
                  b.forEach(function (a) {
                    return d.add(a);
                  });
                  c.set(a, d);
                  this.$1 = c;
                  return this;
                };
                b.addSetElement = function (a, b) {
                  var c = this.$1 || new Map(),
                    d = c.get(a) || new Set();
                  d.add(b);
                  c.set(a, d);
                  this.$1 = c;
                  return this;
                };
                b.addVectorAnnotation = function (a, b) {
                  this.$3 = this.$3 || new Map();
                  this.$3.set(a, b);
                  return this;
                };
                b.addVectorElement = function (a, b) {
                  var c = (this.$3 = this.$3 || new Map()),
                    d = this.$3.get(a) || [];
                  d.push(b);
                  c.set(a, d);
                  return this;
                };
                b.registerOnBeforeSend = function (a) {
                  this.$4.push(a);
                  return this;
                };
                b.prepareToSend = function () {
                  var a = this;
                  this.$4.forEach(function (b) {
                    return b(a);
                  });
                  this.$4 = [];
                  var b = {};
                  if (this.$1 != null)
                    for (
                      var c = this.$1,
                        d = Array.isArray(c),
                        e = 0,
                        c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                      ;

                    ) {
                      var f;
                      if (d) {
                        if (e >= c.length) break;
                        f = c[e++];
                      } else {
                        e = c.next();
                        if (e.done) break;
                        f = e.value;
                      }
                      f = f;
                      var g = f[0];
                      f = f[1];
                      b[g] = Array.from(f.values());
                    }
                  g = {};
                  if (this.$2 != null)
                    for (
                      var f = this.$2,
                        e = Array.isArray(f),
                        d = 0,
                        f = e ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                      ;

                    ) {
                      if (e) {
                        if (d >= f.length) break;
                        c = f[d++];
                      } else {
                        d = f.next();
                        if (d.done) break;
                        c = d.value;
                      }
                      c = c;
                      var h = c[0];
                      c = c[1];
                      g[h] = c;
                    }
                  h = {};
                  if (this.$3 != null)
                    for (
                      var c = this.$3,
                        d = Array.isArray(c),
                        e = 0,
                        c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                      ;

                    ) {
                      if (d) {
                        if (e >= c.length) break;
                        f = c[e++];
                      } else {
                        e = c.next();
                        if (e.done) break;
                        f = e.value;
                      }
                      f = f;
                      var i = f[0];
                      f = f[1];
                      h[i] = f;
                    }
                  return { setProps: b, stringProps: g, vectorProps: h };
                };
                a.combine = function (a, b) {
                  var c;
                  a != null && b != null
                    ? ((a.stringProps = babelHelpers["extends"]({}, b.stringProps, a.stringProps)),
                      (a.setProps = babelHelpers["extends"]({}, b.setProps, a.setProps)),
                      (c = a))
                    : a != null
                    ? (c = a)
                    : b != null && (c = b);
                  return c;
                };
                return a;
              })();
              b.EmptyTimingAnnotations = a;
              b.EmptyTraceTimingAnnotations = a;
              b.TraceTimingAnnotations = b;
              e.exports = b;
            },
            null
          );
          __d(
            "ResourceTimingsStore",
            ["CircularBuffer", "ResourceTypes", "TimingAnnotations", "URI", "performanceAbsoluteNow"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g,
                h,
                i = 1e3,
                j = new (b("TimingAnnotations").EmptyTimingAnnotations)(),
                k = {},
                l = {};
              Object.keys(b("ResourceTypes")).forEach(function (a) {
                a = b("ResourceTypes")[a];
                var c = new (b("CircularBuffer"))(i),
                  d = new Map();
                c.onEvict(function (a) {
                  d["delete"](a);
                });
                k[a] = { idx: 1, entries: c };
                l[a] = d;
              });
              function m(a, c, d) {
                var e;
                switch (a) {
                  case "css":
                  case "js":
                    var f = n.parseMakeHasteURL(c);
                    f = f == null ? "unknown_resource" : f[0];
                    e = d + "_" + f;
                    break;
                  case "xhr":
                    f = new (g || (g = b("URI")))(c).getQualifiedURI();
                    c = f.getDomain() + f.getPath();
                    e = d + "_" + c;
                    break;
                  default:
                    a, (e = "never here");
                }
                return e;
              }
              var n = {
                getUID: function (a, b) {
                  var c = k[a],
                    d = m(a, b, c.idx);
                  c.entries.write(d);
                  l[a].set(d, { uri: b, uid: d });
                  c.idx++;
                  return d;
                },
                updateURI: function (a, b, c) {
                  a = l[a].get(b);
                  a != null && (a.uri = c);
                },
                getMapFor: function (a) {
                  return l[a];
                },
                parseMakeHasteURL: function (a) {
                  a = a.match(/\/rsrc\.php\/.*\/([^\?]+)/);
                  if (!a) return null;
                  a = a[1];
                  var b = "",
                    c = a.match(/\.(\w+)$/);
                  c && (b = c[1]);
                  return [a, b];
                },
                measureRequestSent: function (a, c) {
                  a = l[a];
                  a = a.get(c);
                  if (a == null || a.requestSent != null) return;
                  else a.requestSent = (h || (h = b("performanceAbsoluteNow")))();
                },
                measureResponseReceived: function (a, c) {
                  a = l[a];
                  a = a.get(c);
                  if (a == null || a.requestSent == null || a.responseReceived != null) return;
                  else a.responseReceived = (h || (h = b("performanceAbsoluteNow")))();
                },
                annotate: function (a, c) {
                  a = l[a];
                  a = a.get(c);
                  if (!a) return j;
                  else {
                    c = a.annotations;
                    if (c != null) return c;
                    else {
                      c = new (b("TimingAnnotations"))();
                      a.annotations = c;
                      return c;
                    }
                  }
                },
                getAnnotationsFor: function (a, b) {
                  a = l[a];
                  a = a.get(b);
                  if (!a) return null;
                  else {
                    b = a.annotations;
                    return b != null ? b.prepareToSend() : null;
                  }
                },
              };
              e.exports = n;
            },
            null
          );
          __d(
            "clearInterval",
            ["requireCond", "cr:1003267"],
            function (a, b, c, d, e, f) {
              e.exports = b("cr:1003267");
            },
            null
          );
          __d(
            "isEmpty",
            ["invariant"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              function a(a) {
                if (Array.isArray(a)) return a.length === 0;
                else if (typeof a === "object") {
                  if (a) {
                    !h(a) || a.size === void 0 || g(0, 1445);
                    for (var b in a) return !1;
                  }
                  return !0;
                } else return !a;
              }
              function h(a) {
                return typeof Symbol === "undefined"
                  ? !1
                  : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] != null;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "setIntervalAcrossTransitions",
            ["requireCond", "cr:896462"],
            function (a, b, c, d, e, f) {
              e.exports = b("cr:896462");
            },
            null
          );
          __d(
            "CSSLoader",
            [
              "CSSLoaderConfig",
              "NetworkStatus",
              "ResourceTimingsStore",
              "TimeSlice",
              "clearInterval",
              "ifRequired",
              "isEmpty",
              "nullthrows",
              "setIntervalAcrossTransitions",
            ],
            function (a, b, c, d, e, f) {
              var g,
                h = 20,
                i = b("CSSLoaderConfig").timeout,
                j = b("CSSLoaderConfig").loadEventSupported,
                k,
                l = [],
                m,
                n = new Map();
              function o(a) {
                if (k) return;
                k = !0;
                var b = document.createElement("link");
                b.onload = function () {
                  (j = !0), b.parentNode && b.parentNode.removeChild(b);
                };
                b.rel = "stylesheet";
                b.href = "data:text/css;base64,";
                a.appendChild(b);
              }
              function p() {
                var a = [],
                  c = [];
                if (Date.now() >= m) {
                  for (
                    var d = n.values(),
                      e = Array.isArray(d),
                      f = 0,
                      d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                    ;

                  ) {
                    var h;
                    if (e) {
                      if (f >= d.length) break;
                      h = d[f++];
                    } else {
                      f = d.next();
                      if (f.done) break;
                      h = f.value;
                    }
                    h = h;
                    c.push(h.signal);
                    a.push(h.error);
                  }
                  n.clear();
                } else
                  for (
                    var h = n,
                      f = Array.isArray(h),
                      e = 0,
                      h = f ? h : h[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                    ;

                  ) {
                    if (f) {
                      if (e >= h.length) break;
                      d = h[e++];
                    } else {
                      e = h.next();
                      if (e.done) break;
                      d = e.value;
                    }
                    d = d;
                    var j = d[0];
                    d = d[1];
                    var k = d.signal,
                      l = window.getComputedStyle ? getComputedStyle(k) : k.currentStyle;
                    l && parseInt(l.height, 10) > 1 && (a.push(d.load), c.push(k), n["delete"](j));
                  }
                for (var l = 0; l < c.length; l++) {
                  d = b("nullthrows")(c[l].parentNode);
                  d.removeChild(c[l]);
                }
                if (!(g || (g = b("isEmpty")))(a)) {
                  for (l = 0; l < a.length; l++) a[l]();
                  m = Date.now() + i;
                }
                return n.size === 0;
              }
              function q(a, c, d, e) {
                var f = document.createElement("meta");
                f.id = "bootloader_" + a.replace(/[^a-z0-9]/gi, "_");
                c.appendChild(f);
                c = n.size !== 0;
                m = Date.now() + i;
                n.set(a, { signal: f, load: d, error: e });
                if (!c)
                  var g = b("setIntervalAcrossTransitions")(function () {
                    p() && b("clearInterval")(g);
                  }, h);
              }
              function r(a, c, d, e, f, g) {
                var h = b("ResourceTimingsStore").getUID("css", c);
                b("ifRequired")("TimeSliceAutoclosedInteraction", function (a) {
                  return a.getInteractionsActiveRightNow().forEach(function (a) {
                    return a.forResourceRequest(h).addStringAnnotation("requested_in_continuation", "true");
                  });
                });
                b("ResourceTimingsStore")
                  .annotate("css", h)
                  .addStringAnnotation("name", a)
                  .addStringAnnotation("source", c)
                  .addStringAnnotation("caller", "CSSLoader.loadStyleSheet");
                b("ifRequired")("TimeSliceInteraction", function (b) {
                  b.informGlobally("CSSLoader.loadStyleSheet")
                    .addStringAnnotation("source", c)
                    .addStringAnnotation("name", a);
                });
                b("ResourceTimingsStore").measureRequestSent("css", h);
                var i = function () {
                    b("ResourceTimingsStore").measureResponseReceived("css", h), e();
                  },
                  k = b("TimeSlice").getGuardedContinuation("CSSLoader link.onresponse");
                !g
                  ? q(a, d, i, f)
                  : j !== !0
                  ? (q(a, d, i, f), j === void 0 && o(d))
                  : ((g.onload = k.bind(void 0, function () {
                      (g.onload = g.onerror = null), i();
                    })),
                    (g.onerror = k.bind(void 0, function () {
                      (g.onload = g.onerror = null), f();
                    })));
              }
              a = {
                loadStyleSheet: function (a, c, d, e, f, g) {
                  var h = document;
                  if ("createStyleSheet" in h) {
                    var i;
                    for (var j = 0; j < l.length; j++)
                      if (l[j].imports.length < 31) {
                        i = j;
                        break;
                      }
                    if (i === void 0) {
                      try {
                        l.push(h.createStyleSheet());
                      } catch (a) {
                        b("NetworkStatus").reportError();
                        g();
                        return;
                      }
                      i = l.length - 1;
                    }
                    b("NetworkStatus").reportSuccess();
                    l[i].addImport(c);
                    r(a, c, d, f, g, null);
                    return;
                  }
                  j = h.createElement("link");
                  j.rel = "stylesheet";
                  j.type = "text/css";
                  j.href = c;
                  e && (j.crossOrigin = "anonymous");
                  r(a, c, d, f, g, j);
                  d.appendChild(j);
                },
                setupEventListeners: function (a, b, c, d, e, f) {
                  r(a, b, c, d, e, f);
                },
              };
              e.exports = a;
            },
            null
          );
          /**
           * License: https://www.facebook.com/legal/license/ZtTipMAcpq9/
           */
          __d(
            "ImmediateImplementation",
            ["ImmediateImplementationExperiments"],
            function (a, b, c, d, e, f) {
              (function (c, d) {
                "use strict";
                var e = 1,
                  g = {},
                  h = {},
                  i = h,
                  j = !1,
                  k = c.document,
                  l,
                  m,
                  n,
                  o = "setImmediate$" + Math.random() + "$";
                function p() {
                  var a = c.event;
                  return !a
                    ? !1
                    : (a.isTrusted &&
                        ES(
                          [
                            "change",
                            "click",
                            "contextmenu",
                            "dblclick",
                            "mouseup",
                            "pointerup",
                            "reset",
                            "submit",
                            "touchend",
                          ],
                          "includes",
                          !0,
                          a.type
                        )) ||
                        (a.type === "message" &&
                          a.source === c &&
                          typeof a.data === "string" &&
                          ES(a.data, "indexOf", !0, o) === 0);
                }
                function q(a) {
                  var b = a[0];
                  a = Array.prototype.slice.call(a, 1);
                  g[e] = function () {
                    b.apply(void 0, a);
                  };
                  i = i.next = { handle: e++ };
                  return i.handle;
                }
                function r() {
                  var a, b;
                  while (!j && (a = h.next)) {
                    h = a;
                    if ((b = g[a.handle])) {
                      j = !0;
                      try {
                        b(), (j = !1);
                      } finally {
                        s(a.handle), j && ((j = !1), h.next && l(r));
                      }
                    }
                  }
                }
                function s(a) {
                  delete g[a];
                }
                function d() {
                  if (c.postMessage && !c.importScripts) {
                    var a = !0,
                      b = function b() {
                        (a = !1),
                          c.removeEventListener
                            ? c.removeEventListener("message", b, !1)
                            : c.detachEvent("onmessage", b);
                      };
                    if (c.addEventListener) c.addEventListener("message", b, !1);
                    else if (c.attachEvent) c.attachEvent("onmessage", b);
                    else return !1;
                    c.postMessage("", "*");
                    return a;
                  }
                }
                function t() {
                  var a = function (a) {
                    a.source === c && typeof a.data === "string" && ES(a.data, "indexOf", !0, o) === 0 && r();
                  };
                  c.addEventListener ? c.addEventListener("message", a, !1) : c.attachEvent("onmessage", a);
                  l = function () {
                    var a = q(arguments);
                    c.originalPostMessage ? c.originalPostMessage(o + a, "*") : c.postMessage(o + a, "*");
                    return a;
                  };
                  m = l;
                }
                function u() {
                  var a = new MessageChannel(),
                    b = !1;
                  a.port1.onmessage = function (a) {
                    (b = !1), r();
                  };
                  l = function () {
                    var c = q(arguments);
                    b || (a.port2.postMessage(c), (b = !0));
                    return c;
                  };
                  n = l;
                }
                function v() {
                  var a = k.documentElement;
                  l = function () {
                    var b = q(arguments),
                      c = k.createElement("script");
                    c.onreadystatechange = function () {
                      (c.onreadystatechange = null), a.removeChild(c), (c = null), r();
                    };
                    a.appendChild(c);
                    return b;
                  };
                }
                function w() {
                  l = function () {
                    setTimeout(r, 0);
                    return q(arguments);
                  };
                }
                d()
                  ? c.MessageChannel && b("ImmediateImplementationExperiments").prefer_message_channel
                    ? (t(),
                      u(),
                      (l = function () {
                        if (p()) return m.apply(null, arguments);
                        else return n.apply(null, arguments);
                      }))
                    : t()
                  : c.MessageChannel
                  ? u()
                  : k && k.createElement && "onreadystatechange" in k.createElement("script")
                  ? v()
                  : w();
                f.setImmediate = l;
                f.clearImmediate = s;
              })(typeof self === "undefined" ? (typeof a === "undefined" ? this : a) : self);
            },
            null
          );
          __d(
            "setImmediatePolyfill",
            ["invariant", "PromiseUsePolyfillSetImmediateGK", "ImmediateImplementation"],
            function (a, b, c, d, e, f, g) {
              var h = a.setImmediate;
              if (b("PromiseUsePolyfillSetImmediateGK").www_always_use_polyfill_setimmediate || !h) {
                d = b("ImmediateImplementation");
                h = d.setImmediate;
              }
              function c(a) {
                typeof a === "function" || g(0, 5912);
                for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++)
                  c[d - 1] = arguments[d];
                return h.apply(void 0, [a].concat(c));
              }
              e.exports = c;
            },
            null
          );
          __d(
            "setImmediateAcrossTransitions",
            ["TimerStorage", "TimeSlice", "setImmediatePolyfill"],
            function (a, b, c, d, e, f) {
              var g = b("TimerStorage").IMMEDIATE;
              function a(a) {
                var c = b("TimeSlice").guard(a, "setImmediate", {
                  propagationType: b("TimeSlice").PropagationType.CONTINUATION,
                  registerCallStack: !0,
                });
                for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++)
                  e[f - 1] = arguments[f];
                var h = b("setImmediatePolyfill").apply(void 0, [c].concat(e)),
                  i = g + String(h);
                b("TimeSlice").registerForCancelling(i, c);
                return h;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "Promise",
            ["TimeSlice", "setImmediateAcrossTransitions", "setTimeoutAcrossTransitions"],
            function (a, b, c, d, e, f) {
              "use strict";
              function g() {}
              var h = null,
                i = {};
              function j(a) {
                try {
                  return a.then;
                } catch (a) {
                  h = a;
                  return i;
                }
              }
              function k(a, b) {
                try {
                  return a(b);
                } catch (a) {
                  h = a;
                  return i;
                }
              }
              function l(a, b, c) {
                try {
                  a(b, c);
                } catch (a) {
                  h = a;
                  return i;
                }
              }
              function m(a) {
                if (typeof this !== "object") throw new TypeError("Promises must be constructed via new");
                if (typeof a !== "function") throw new TypeError("not a function");
                this._state = 0;
                this._value = null;
                this._deferreds = [];
                if (a === g) return;
                t(a, this);
              }
              m._noop = g;
              m.prototype.then = function (a, b) {
                if (this.constructor !== m) return n(this, a, b);
                var c = new m(g);
                o(this, new s(a, b, c));
                return c;
              };
              function n(a, b, c) {
                return new a.constructor(function (d, e) {
                  var f = new m(g);
                  f.then(d, e);
                  o(a, new s(b, c, f));
                });
              }
              function o(a, c) {
                while (a._state === 3) a = a._value;
                if (a._state === 0) {
                  a._deferreds.push(c);
                  return;
                }
                b("setImmediateAcrossTransitions")(function () {
                  var b = a._state === 1 ? c.onFulfilled : c.onRejected;
                  if (b === null) {
                    c.continuation(function () {});
                    a._state === 1 ? p(c.promise, a._value) : q(c.promise, a._value);
                    return;
                  }
                  b = k(ES(c.continuation, "bind", !0, null, b), a._value);
                  b === i ? q(c.promise, h) : p(c.promise, b);
                });
              }
              function p(a, b) {
                if (b === a) return q(a, new TypeError("A promise cannot be resolved with itself."));
                if (b && (typeof b === "object" || typeof b === "function")) {
                  var c = j(b);
                  if (c === i) return q(a, h);
                  if (c === a.then && b instanceof m) {
                    a._state = 3;
                    a._value = b;
                    r(a);
                    return;
                  } else if (typeof c === "function") {
                    t(ES(c, "bind", !0, b), a);
                    return;
                  }
                }
                a._state = 1;
                a._value = b;
                r(a);
              }
              function q(a, b) {
                (a._state = 2), (a._value = b), r(a);
              }
              function r(a) {
                for (var b = 0; b < a._deferreds.length; b++) o(a, a._deferreds[b]);
                a._deferreds = null;
              }
              function s(a, c, d) {
                (this.onFulfilled = typeof a === "function" ? a : null),
                  (this.onRejected = typeof c === "function" ? c : null),
                  (this.continuation = b("TimeSlice").getGuardedContinuation("Promise Handler")),
                  (this.promise = d);
              }
              function t(a, b) {
                var c = !1;
                a = l(
                  a,
                  function (a) {
                    if (c) return;
                    c = !0;
                    p(b, a);
                  },
                  function (a) {
                    if (c) return;
                    c = !0;
                    q(b, a);
                  }
                );
                !c && a === i && ((c = !0), q(b, h));
              }
              m.prototype.done = function (a, c) {
                var d = new Error("Promise.done"),
                  e = arguments.length ? this.then.apply(this, arguments) : this;
                e.then(null, function (a) {
                  b("setTimeoutAcrossTransitions")(function () {
                    if (a instanceof Error) throw a;
                    else {
                      d.message = "" + a;
                      throw d;
                    }
                  }, 0);
                });
              };
              var u = A(!0),
                v = A(!1),
                w = A(null),
                x = A(void 0),
                y = A(0),
                z = A("");
              function A(a) {
                var b = new m(m._noop);
                b._state = 1;
                b._value = a;
                return b;
              }
              m.resolve = function (a) {
                if (a instanceof m) return a;
                if (a === null) return w;
                if (a === void 0) return x;
                if (a === !0) return u;
                if (a === !1) return v;
                if (a === 0) return y;
                if (a === "") return z;
                if (typeof a === "object" || typeof a === "function")
                  try {
                    var b = a.then;
                    if (typeof b === "function") return new m(ES(b, "bind", !0, a));
                  } catch (a) {
                    return new m(function (b, c) {
                      c(a);
                    });
                  }
                return A(a);
              };
              m.all = function (a) {
                ES("Array", "isArray", !1, a) ||
                  (a = [m.reject(new TypeError("Promise.all must be passed an array."))]);
                var b = Array.prototype.slice.call(a);
                return new m(function (a, c) {
                  if (b.length === 0) return a([]);
                  var d = b.length;
                  function e(f, g) {
                    if (g && (typeof g === "object" || typeof g === "function"))
                      if (g instanceof m && g.then === m.prototype.then) {
                        while (g._state === 3) g = g._value;
                        if (g._state === 1) return e(f, g._value);
                        g._state === 2 && c(g._value);
                        g.then(function (a) {
                          e(f, a);
                        }, c);
                        return;
                      } else {
                        var h = g.then;
                        if (typeof h === "function") {
                          h = new m(ES(h, "bind", !0, g));
                          h.then(function (a) {
                            e(f, a);
                          }, c);
                          return;
                        }
                      }
                    b[f] = g;
                    --d === 0 && a(b);
                  }
                  for (var f = 0; f < b.length; f++) e(f, b[f]);
                });
              };
              m.allSettled = function (a) {
                if (!ES("Array", "isArray", !1, a))
                  return m.reject(new TypeError("Promise.allSettled must be passed an array."));
                var b = Array(a.length),
                  c = function (c, d) {
                    var e = a[c];
                    d = typeof e === "object" && e !== null && typeof e.then === "function";
                    b[c] = d
                      ? new m(function (a, b) {
                          e.then(
                            function (b) {
                              a({ status: "fulfilled", value: b });
                            },
                            function (b) {
                              a({ status: "rejected", reason: b });
                            }
                          );
                        })
                      : m.resolve({ status: "fulfilled", value: e });
                  };
                for (var d = 0, e = a.length; d < e; ++d) c(d, e);
                return m.all(b);
              };
              m.reject = function (a) {
                return new m(function (b, c) {
                  c(a);
                });
              };
              m.race = function (a) {
                return new m(function (b, c) {
                  ES(a, "forEach", !0, function (a) {
                    m.resolve(a).then(b, c);
                  });
                });
              };
              m.prototype["catch"] = function (a) {
                return this.then(null, a);
              };
              m.prototype["finally"] = function (a) {
                return this.then(
                  function (b) {
                    return m.resolve(a()).then(function () {
                      return b;
                    });
                  },
                  function (b) {
                    return m.resolve(a()).then(function () {
                      throw b;
                    });
                  }
                );
              };
              e.exports = m;
            },
            null
          );
          __d(
            "PromiseAnnotate",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              e.exports = {
                setDisplayName: function (a, b) {
                  a.displayName = b;
                  return a;
                },
                getDisplayName: function (a) {
                  a = a.displayName;
                  if (typeof a === "string") return a;
                  else return null;
                },
              };
            },
            null
          );
          __d(
            "ifRequireable",
            ["ifRequired"],
            function (a, b, c, d, e, f) {
              function a(a, c, d) {
                return b("ifRequired").call(null, a, c, d);
              }
              e.exports = a;
            },
            null
          );
          __d(
            "JSResourceReference",
            ["Promise", "PromiseAnnotate", "ifRequireable", "ifRequired"],
            function (a, b, c, d, e, f) {
              var g = function (a) {
                  return a;
                },
                h = [],
                i = null;
              function j(a) {
                i ? a(i) : h.push(a);
              }
              a = (function () {
                "use strict";
                a.setBootloader = function (a) {
                  i = a;
                  for (var a = 0; a < h.length; a++) {
                    var b = h[a];
                    b(i);
                  }
                  h = [];
                };
                function a(a) {
                  this.$1 = a;
                }
                var c = a.prototype;
                c.getModuleId = function () {
                  var a = this.$1;
                  return a;
                };
                c.getModuleIdAsRef = function () {
                  return this.$1;
                };
                c.load = function () {
                  var a = this,
                    c = new (b("Promise"))(function (b) {
                      j(function (c) {
                        return c.loadModules(
                          [a.getModuleId()],
                          b,
                          (c = a.$2) != null ? c : "JSResource: unknown caller"
                        );
                      });
                    });
                  b("PromiseAnnotate").setDisplayName(c, "Bootload(" + this.getModuleId() + ")");
                  return c;
                };
                c.preload = function () {
                  var a = this;
                  j(function (b) {
                    return b.preloadModules([a.getModuleId()]);
                  });
                };
                c.equals = function (a) {
                  return this === a || this.$1 == a.$1;
                };
                c.getModuleIfRequireable = function () {
                  return b("ifRequireable").call(null, this.$1, g);
                };
                c.getModuleIfRequired = function () {
                  return b("ifRequired").call(null, this.$1, g);
                };
                c.__setRef = function (a) {
                  this.$2 = a;
                  return this;
                };
                a.loadAll = function (a, b) {
                  var c = {},
                    d = !1;
                  for (
                    var e = a,
                      f = Array.isArray(e),
                      g = 0,
                      e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                    ;

                  ) {
                    var h;
                    if (f) {
                      if (g >= e.length) break;
                      h = e[g++];
                    } else {
                      g = e.next();
                      if (g.done) break;
                      h = g.value;
                    }
                    h = h;
                    h = h.$2;
                    h && ((d = !0), (c[h] = !0));
                  }
                  j(function (e) {
                    return e.loadModules(
                      a.map(function (a) {
                        return a.getModuleId();
                      }),
                      b,
                      d ? Object.keys(c).join(":") : "JSResource: unknown caller"
                    );
                  });
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "ResourceHasher",
            ["invariant"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h = 0;
              a = {
                getAsyncHash: function (a) {
                  return "async:" + a;
                },
                createExternalJSHash: function () {
                  return "ejs:" + h++;
                },
                getValidResourceHash: function (a) {
                  typeof a === "string" || g(0, 19551, a);
                  return a;
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "TrustedTypes",
            ["TrustedTypesConfig"],
            function (a, b, c, d, e, f) {
              "use strict";
              if (typeof trustedTypes !== "undefined" && b("TrustedTypesConfig").useTrustedTypes) {
                var g = function (a, c) {
                    return function (d) {
                      if (a(d)) return d;
                      try {
                        return c("" + d);
                      } catch (a) {
                        if (b("TrustedTypesConfig").reportOnly) return "" + d;
                        throw a;
                      }
                    };
                  },
                  h = trustedTypes;
                a = babelHelpers["extends"]({}, h, {
                  createPolicy: function (a, b) {
                    a = h.createPolicy(a, b);
                    return {
                      createHTML: g(h.isHTML.bind(h), a.createHTML.bind(a)),
                      createScript: g(h.isScript.bind(h), a.createScript.bind(a)),
                      createScriptURL: g(h.isScriptURL.bind(h), a.createScriptURL.bind(a)),
                    };
                  },
                });
                c = a;
              } else {
                var i = function (a) {
                  return a;
                };
                d = {
                  isHTML: function () {
                    return !1;
                  },
                  isScriptURL: function () {
                    return !1;
                  },
                  isScript: function () {
                    return !1;
                  },
                  createPolicy: function (a, b) {
                    return { createHTML: i, createScriptURL: i, createScript: i };
                  },
                };
                c = d;
              }
              e.exports = c;
            },
            null
          );
          __d(
            "createTrustedScriptURLFromFacebookURI",
            ["TrustedTypes", "URI", "isCdnURI", "isFacebookURI"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g,
                h = "fburi-scripturls",
                i,
                j = {
                  createScriptURL: function (a) {
                    var c = (g || (g = b("URI"))).tryParseURI(a);
                    if (c != null && (b("isFacebookURI")(c) || b("isCdnURI")(c))) return a;
                    throw new TypeError();
                  },
                };
              function k() {
                if (i) return;
                i = b("TrustedTypes").createPolicy(h, j);
              }
              function l() {
                i || k();
                return i;
              }
              function a(a) {
                return l().createScriptURL(a);
              }
              e.exports = a;
            },
            null
          );
          __d(
            "Bootloader",
            [
              "invariant",
              "requireCond",
              "BootloaderConfig",
              "BootloaderEndpoint",
              "BootloaderEvents",
              "BootloaderEventsManager",
              "CSRBitMap",
              "CSRIndexUtil",
              "CSSLoader",
              "ErrorPubSub",
              "FBLogger",
              "JSResourceReference",
              "cr:696703",
              "NetworkStatus",
              "ResourceHasher",
              "ResourceTimingsStore",
              "TAAL",
              "TimeSlice",
              "createTrustedScriptURLFromFacebookURI",
              "ex",
              "ifRequireable",
              "nullthrows",
              "performanceAbsoluteNow",
            ],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h,
                i,
                j = function () {},
                k = [],
                l = [],
                m = new Map(),
                n = new Map(),
                o = new Map(),
                p = new Set(),
                q = new Map(),
                r = null,
                s = new Map(),
                t = new Map(),
                u = new Map(),
                v = [],
                w = new Map(),
                x = new Set(),
                y = !1,
                z = new Set(),
                A = !1,
                B = new (b("BootloaderEventsManager"))(),
                C = b("BootloaderConfig").jsRetries || [],
                D = b("BootloaderConfig").jsRetryAbortNum,
                E = b("BootloaderConfig").jsRetryAbortTime,
                F = C.length > 0;
              (h || (h = b("ErrorPubSub"))).unshiftListener(function (a) {
                var b = [];
                for (
                  var c = m,
                    d = Array.isArray(c),
                    e = 0,
                    c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                  ;

                ) {
                  var f;
                  if (d) {
                    if (e >= c.length) break;
                    f = c[e++];
                  } else {
                    e = c.next();
                    if (e.done) break;
                    f = e.value;
                  }
                  f = f;
                  var g = f[0];
                  f[1];
                  if (n.has(g)) continue;
                  f = I(g);
                  if (f.type === "csr" || f.type === "async") continue;
                  b.push(f.src);
                }
                a.loadingUrls = b;
              });
              function G(a) {
                if (!b("BootloaderConfig").retryQueuedBootloads) return A;
                for (
                  var a = a,
                    c = Array.isArray(a),
                    d = 0,
                    a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                  ;

                ) {
                  var e, f;
                  if (c) {
                    if (d >= a.length) break;
                    f = a[d++];
                  } else {
                    d = a.next();
                    if (d.done) break;
                    f = d.value;
                  }
                  f = f;
                  f = q.get(f);
                  if (!f) return !1;
                  f = [
                    f.r,
                    ((e = f.rdfds) == null ? void 0 : e.r) || [],
                    ((e = f.rds) == null ? void 0 : e.r) || [],
                  ];
                  for (var e = 0; e < f.length; e++) {
                    var g = f[e];
                    for (
                      var g = g,
                        h = Array.isArray(g),
                        i = 0,
                        g = h ? g : g[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                      ;

                    ) {
                      var j;
                      if (h) {
                        if (i >= g.length) break;
                        j = g[i++];
                      } else {
                        i = g.next();
                        if (i.done) break;
                        j = i.value;
                      }
                      j = j;
                      if (!s.has(j)) return !1;
                    }
                  }
                }
                return !0;
              }
              function H(a) {
                var c = q.get(a);
                if (!c)
                  throw new Error(
                    b("TAAL").blameToPreviousFile(b("ex")("Bootloader: %s is not in the component map", a))
                  );
                return c;
              }
              function I(a) {
                var c = s.get(a);
                if (!c)
                  throw new Error(
                    b("TAAL").blameToPreviousFile(b("ex")("No resource entry for hash: %s", a))
                  );
                return c;
              }
              function J(a, c) {
                var d = b("ResourceHasher").getAsyncHash(a);
                if (!s.has(d)) s.set(d, { type: "async", module: a, blocking: !!c });
                else {
                  a = I(d);
                  a.type === "async" || g(0, 21557);
                  a.blocking && !c && (a.blocking = !1);
                }
                return d;
              }
              function K() {
                r || (r = document.head || document.getElementsByTagName("head")[0] || document.body);
                return r;
              }
              function L(a) {
                var b = document.createDocumentFragment();
                a(b);
                K().appendChild(b);
              }
              function M() {
                if (!F) return !1;
                var a = v.length;
                if (a < D) return !0;
                a = v[a - 1] - v[a - D];
                a < E && (b("FBLogger")("bootloader").warn("JS retry abort"), (F = !1));
                return F;
              }
              function N(a, b, c) {
                if (m.has(a) || p.has(a)) return;
                p.add(a);
                var d = void 0;
                switch (b.type) {
                  case "async":
                    R(a, b, c, null);
                    return;
                  case "css":
                    d = "style";
                    break;
                  case "js":
                    d = "script";
                    break;
                  default:
                    (d = b.type), g(0, 3721);
                }
                a = document.createElement("link");
                a.href = b.src;
                a.rel = "preload";
                a.as = d;
                b.nc || (a.crossOrigin = "anonymous");
                c.appendChild(a);
              }
              function O(a, c, d, e) {
                var f = document.createElement("script");
                f.src = b("createTrustedScriptURLFromFacebookURI")(c.src);
                f.async = !0;
                c.nc || (f.crossOrigin = "anonymous");
                P(f, a, c, d);
                e.appendChild(f);
                return f;
              }
              function P(a, c, d, e) {
                var f = a.src,
                  g = (i || (i = b("performanceAbsoluteNow")))(),
                  h = b("TimeSlice").getGuardedContinuation("Bootloader script.onresponse"),
                  j = b("ResourceTimingsStore").getUID("js", f);
                b("ifRequireable")("TimeSliceAutoclosedInteraction", function (a) {
                  return a.getInteractionsActiveRightNow().forEach(function (a) {
                    return a.forResourceRequest(j).addStringAnnotation("requested_in_continuation", "true");
                  });
                });
                b("ResourceTimingsStore")
                  .annotate("js", j)
                  .addStringAnnotation("name", c)
                  .addStringAnnotation("source", f);
                b("ifRequireable")("TimeSliceInteraction", function (a) {
                  a.informGlobally("bootloader._loadJS")
                    .addStringAnnotation("source", f)
                    .addStringAnnotation("name", c);
                });
                b("ResourceTimingsStore").measureRequestSent("js", j);
                a.onload = h.bind(void 0, function () {
                  var a;
                  a = (a = u.get(f)) != null ? a : 0;
                  a &&
                    b("FBLogger")("bootloader").info(
                      "JS retry success [%s] at %s | time: %s | retries: %s",
                      c,
                      f,
                      (i || (i = b("performanceAbsoluteNow")))() - g,
                      a
                    );
                  b("ResourceTimingsStore").measureResponseReceived("js", j);
                  e();
                });
                a.onreadystatechange = function () {
                  ["loaded", "complete"].includes(this.readyState) &&
                    (b("ResourceTimingsStore").measureResponseReceived("js", j), h.bind(void 0, e)());
                };
                a.onerror = h.bind(void 0, function () {
                  var h;
                  b("ResourceTimingsStore").measureResponseReceived("js", j);
                  h = (h = u.get(f)) != null ? h : 0;
                  var k = (i || (i = b("performanceAbsoluteNow")))();
                  M() && h < C.length
                    ? (v.push(k),
                      setTimeout(function () {
                        if (!M()) return;
                        var b = a.parentNode;
                        b && (b.removeChild(a), O(c, d, e, b));
                      }, C[h]),
                      u.set(f, h + 1))
                    : (o.set(c, k),
                      b("FBLogger")("bootloader").warn(
                        "JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s",
                        c,
                        f,
                        k - g,
                        h,
                        m.size - n.size
                      ),
                      b("NetworkStatus").reportError(),
                      e());
                });
              }
              function Q(a, c, d) {
                return function () {
                  b("FBLogger")("bootloader").warn(
                    "CSS timeout [%s] at %s | concurrency: %s",
                    a,
                    c.src,
                    m.size - n.size
                  ),
                    o.set(a, (i || (i = b("performanceAbsoluteNow")))()),
                    b("NetworkStatus").reportError(),
                    d();
                };
              }
              function R(a, c, d, e) {
                if (m.has(a)) return;
                m.set(a, (i || (i = b("performanceAbsoluteNow")))());
                window.CavalryLogger &&
                  window.CavalryLogger.getInstance().measureResources({ name: a, type: c.type }, e);
                switch (c.type) {
                  case "js":
                    O(
                      a,
                      c,
                      function () {
                        return $.done(a);
                      },
                      d
                    );
                    break;
                  case "css":
                    e = function () {
                      return $.done(a);
                    };
                    b("CSSLoader").loadStyleSheet(a, c.src, d, !c.nc, e, Q(a, c, e));
                    break;
                  case "async":
                    b("BootloaderEndpoint").load(c.module, c.blocking, a);
                    break;
                  default:
                    c.type, g(0, 3721);
                }
              }
              function S(a, c, d, e, f) {
                var h = new Map(),
                  i = [];
                for (
                  var a = X(a),
                    j = Array.isArray(a),
                    k = 0,
                    a = j ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                  ;

                ) {
                  var l;
                  if (j) {
                    if (k >= a.length) break;
                    l = a[k++];
                  } else {
                    k = a.next();
                    if (k.done) break;
                    l = k.value;
                  }
                  l = l;
                  var n = l[0];
                  l = l[1];
                  switch (l.type) {
                    case "css":
                      l.nonblocking || i.push(B.rsrcDone(n));
                      break;
                    case "js":
                      i.push(B.rsrcDone(n));
                      break;
                    case "async":
                      l.blocking && i.push(B.rsrcDone(n));
                      break;
                    default:
                      l.type, g(0, 3721);
                  }
                  m.has(n) || h.set(n, l);
                  e == null ? void 0 : e.set(n, l);
                }
                if (c) {
                  var o = b("cr:696703")
                    ? b("cr:696703").getCallbackScheduler()
                    : function (a) {
                        return a();
                      };
                  B.registerCallback(function () {
                    o(c);
                  }, i);
                }
                for (
                  var n = h,
                    l = Array.isArray(n),
                    k = 0,
                    n = l ? n : n[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                  ;

                ) {
                  if (l) {
                    if (k >= n.length) break;
                    j = n[k++];
                  } else {
                    k = n.next();
                    if (k.done) break;
                    j = k.value;
                  }
                  a = j;
                  e = a[0];
                  i = a[1];
                  N(e, i, d);
                  R(e, i, d, f);
                }
              }
              function T(a, c, d) {
                s.set(a, c);
                if (c.type === "async" || c.type === "csr") return;
                c = c.p;
                if (c)
                  for (
                    var c = b("CSRIndexUtil").parseCSRIndexes(c),
                      e = Array.isArray(c),
                      f = 0,
                      c = e ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                    ;

                  ) {
                    var g;
                    if (e) {
                      if (f >= c.length) break;
                      g = c[f++];
                    } else {
                      f = c.next();
                      if (f.done) break;
                      g = f.value;
                    }
                    g = g;
                    (!t.has(g) || d) && (t.set(g, a), b("CSRBitMap").add(g));
                  }
              }
              function U(a, c) {
                var d = B.bootload(c);
                if (x.has(d)) return [d, null];
                x.add(d);
                a = {
                  ref: a,
                  components: c,
                  timesliceContext: b("TimeSlice").getContext(),
                  startTime: (i || (i = b("performanceAbsoluteNow")))(),
                  callbackStart: 0,
                  callbackEnd: 0,
                  tierOne: new Map(),
                  tierTwo: new Map(),
                  tierThree: new Map(),
                  beRequests: new Map(),
                };
                return [d, a];
              }
              function V(a) {
                return b("ifRequireable").call(
                  null,
                  a,
                  function () {
                    return !0;
                  },
                  function () {
                    return !1;
                  }
                );
              }
              function W(a, c, e, f) {
                w.has(a) ||
                  w.set(a, {
                    firstBootloadStart: (i || (i = b("performanceAbsoluteNow")))(),
                    logData: new Set(),
                  });
                f && b("nullthrows")(w.get(a)).logData.add(f);
                var g = H(a),
                  h = g.r,
                  j = g.rdfds,
                  k = g.rds;
                g = g.be;
                g = V(a) ? null : J(a, g);
                g == null && B.notify(B.beDone(a));
                S(
                  g != null ? [g].concat(h) : h,
                  function () {
                    return B.notify(B.tierOne(a));
                  },
                  e,
                  f == null ? void 0 : f.tierOne
                );
                S(
                  (j == null ? void 0 : j.r) || [],
                  function () {
                    return B.registerCallback(
                      function () {
                        B.notify(B.tierTwoStart(a)),
                          d.call(null, (j == null ? void 0 : j.m) || [], function () {
                            return B.notify(B.tierTwo(a));
                          });
                      },
                      [B.tierOne(a), c]
                    );
                  },
                  e,
                  f == null ? void 0 : f.tierTwo
                );
                S(
                  (k == null ? void 0 : k.r) || [],
                  function () {
                    return B.registerCallback(
                      function () {
                        B.notify(B.tierThreeStart(a)),
                          d.call(null, (k == null ? void 0 : k.m) || [], function () {
                            return B.notify(B.tierThree(a));
                          });
                      },
                      [B.tierTwo(a)]
                    );
                  },
                  e,
                  f == null ? void 0 : f.tierThree
                );
              }
              function X(a) {
                var c = new Map();
                for (
                  var a = a,
                    d = Array.isArray(a),
                    e = 0,
                    a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                  ;

                ) {
                  var f;
                  if (d) {
                    if (e >= a.length) break;
                    f = a[e++];
                  } else {
                    e = a.next();
                    if (e.done) break;
                    f = e.value;
                  }
                  f = f;
                  var h = s.get(f);
                  if (!h) {
                    b("FBLogger")("bootloader").mustfix("Unable to resolve resource %s.", f);
                    continue;
                  }
                  var i;
                  if (h.type === "csr") i = b("CSRIndexUtil").parseCSRIndexes(h.src);
                  else if (h.p) i = b("CSRIndexUtil").parseCSRIndexes(h.p);
                  else {
                    c.set(f, h);
                    continue;
                  }
                  for (
                    var f = i,
                      h = Array.isArray(f),
                      i = 0,
                      f = h ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                    ;

                  ) {
                    var j;
                    if (h) {
                      if (i >= f.length) break;
                      j = f[i++];
                    } else {
                      i = f.next();
                      if (i.done) break;
                      j = i.value;
                    }
                    j = j;
                    j = b("nullthrows")(t.get(j), "No hash for rsrcIndex:" + j);
                    var k = I(j);
                    k.type !== "csr" || g(0, 20056, j);
                    c.set(j, k);
                  }
                }
                return c.entries();
              }
              function Y(a) {
                var c,
                  d = a.getAttribute("data-bootloader-hash");
                if (d == null) return;
                var e = b("ResourceHasher").getValidResourceHash(d);
                if (a.id) {
                  if (z.has(a.id)) return;
                  z.add(a.id);
                }
                d = a.tagName == "SCRIPT" ? { src: a.src, type: "js" } : { src: a.href, type: "css" };
                a.crossOrigin == null && (d.nc = 1);
                d.type === "css" && a.getAttribute("data-nonblocking") && (d.nonblocking = 1);
                d.p = a.getAttribute("data-p");
                s.has(e) &&
                  !b("BootloaderConfig").silentDups &&
                  b("FBLogger")("bootloader").warn("Duplicate resource [%s]: %s", e, d.src);
                T(e, d, !0);
                m.set(e, (i || (i = b("performanceAbsoluteNow")))());
                var f = function () {
                  return $.done(e);
                };
                c =
                  d.type === "js"
                    ? !a.getAttribute("async")
                    : ((c = a.parentNode) == null ? void 0 : c.tagName) === "HEAD";
                c || (window._btldr && window._btldr[e])
                  ? f()
                  : d.type === "js"
                  ? P(a, e, d, f)
                  : b("CSSLoader").setupEventListeners(e, d.src, K(), f, Q(e, d, f), a);
              }
              function Z() {
                if (y) return;
                y = !0;
                Array.from(document.getElementsByTagName("link")).forEach(function (a) {
                  return Y(a);
                });
                Array.from(document.getElementsByTagName("script")).forEach(function (a) {
                  return Y(a);
                });
              }
              var $ = {
                preloadModules: function (a) {
                  if (!G(a)) {
                    var c = b("TimeSlice").getGuardedContinuation("Deferred: Bootloader.preloadModules");
                    k.push([a, c]);
                    return;
                  }
                  var d = [];
                  for (
                    var c = a,
                      a = Array.isArray(c),
                      e = 0,
                      c = a ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                    ;

                  ) {
                    var f;
                    if (a) {
                      if (e >= c.length) break;
                      f = c[e++];
                    } else {
                      e = c.next();
                      if (e.done) break;
                      f = e.value;
                    }
                    f = f;
                    if (V(f)) continue;
                    var g = H(f),
                      h = g.r,
                      i = g.rdfds;
                    g = g.be;
                    d.push(J(f, g));
                    d.push.apply(d, h);
                    d.push.apply(d, (i == null ? void 0 : i.r) || []);
                  }
                  L(function (a) {
                    for (
                      var b = X(d),
                        c = Array.isArray(b),
                        e = 0,
                        b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                      ;

                    ) {
                      var f;
                      if (c) {
                        if (e >= b.length) break;
                        f = b[e++];
                      } else {
                        e = b.next();
                        if (e.done) break;
                        f = e.value;
                      }
                      f = f;
                      var g = f[0];
                      f = f[1];
                      N(g, f, a);
                    }
                  });
                },
                loadModules: function (a, c, e) {
                  c === void 0 && (c = j);
                  e === void 0 && (e = "loadModules: unknown caller");
                  var f = !1,
                    g = function () {
                      f || c.apply(void 0, arguments);
                    },
                    h = {
                      remove: function () {
                        f = !0;
                      },
                    };
                  if (!G(a)) {
                    var k = "Deferred: Bootloader.loadModules";
                    k = b("TimeSlice").getGuardedContinuation(k);
                    l.push([a, g, e, k]);
                    return h;
                  }
                  k = U(e, a);
                  var m = k[0],
                    n = k[1];
                  B.registerCallback(
                    d.bind(null, a, function () {
                      n && (n.callbackStart = (i || (i = b("performanceAbsoluteNow")))()),
                        g.apply(void 0, arguments),
                        n && (n.callbackEnd = (i || (i = b("performanceAbsoluteNow")))()),
                        B.notify(m);
                    }),
                    a.map(function (a) {
                      return B.tierOne(a);
                    })
                  );
                  L(function (b) {
                    for (
                      var c = a,
                        d = Array.isArray(c),
                        e = 0,
                        c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                      ;

                    ) {
                      var f;
                      if (d) {
                        if (e >= c.length) break;
                        f = c[e++];
                      } else {
                        e = c.next();
                        if (e.done) break;
                        f = e.value;
                      }
                      f = f;
                      W(f, m, b, n);
                    }
                  });
                  if (n) {
                    k = new Set();
                    for (
                      var o = a,
                        p = Array.isArray(o),
                        q = 0,
                        o = p ? o : o[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                      ;

                    ) {
                      var r;
                      if (p) {
                        if (q >= o.length) break;
                        r = o[q++];
                      } else {
                        q = o.next();
                        if (q.done) break;
                        r = q.value;
                      }
                      r = r;
                      k.add(B.beDone(r));
                      k.add(B.tierThree(r));
                    }
                    r = [n.tierOne, n.tierTwo, n.tierThree];
                    for (var q = 0; q < r.length; q++) {
                      p = r[q];
                      for (
                        var o = p.keys(),
                          p = Array.isArray(o),
                          s = 0,
                          o = p ? o : o[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                        ;

                      ) {
                        var t;
                        if (p) {
                          if (s >= o.length) break;
                          t = o[s++];
                        } else {
                          s = o.next();
                          if (s.done) break;
                          t = s.value;
                        }
                        t = t;
                        k.add(B.rsrcDone(t));
                      }
                    }
                    B.registerCallback(function () {
                      return b("BootloaderEvents").notifyBootload(n);
                    }, Array.from(k));
                    b("ifRequireable")("m#TimeSliceInteraction", function (b) {
                      b.informGlobally("Bootloader.loadResources")
                        .addSetAnnotation("requested_hashes", Array.from(n.tierOne.keys()))
                        .addSetAnnotation("rdfd_requested_hashes", Array.from(n.tierTwo.keys()))
                        .addSetAnnotation("rd_requested_hashes", Array.from(n.tierThree.keys()))
                        .addStringAnnotation("bootloader_reference", e)
                        .addSetAnnotation("requested_components", a);
                    });
                  }
                  return h;
                },
                loadResources: function (a, c, d, e) {
                  Z(),
                    L(function (f) {
                      return S(
                        a.map(function (a) {
                          return b("ResourceHasher").getValidResourceHash(a);
                        }),
                        c,
                        f,
                        e,
                        d
                      );
                    });
                },
                requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN: function (a) {
                  var c = b("ResourceHasher").createExternalJSHash();
                  T(c, { type: "js", src: a, nc: 1 }, !1);
                  $.loadResources([c]);
                },
                done: function (a) {
                  n.set(a, (i || (i = b("performanceAbsoluteNow")))()),
                    window.CavalryLogger && window.CavalryLogger.done_js([a]),
                    B.notify(B.rsrcDone(a));
                },
                beDone: function (a, b, c) {
                  var d = new Set();
                  for (
                    var e = (e = (e = w.get(a)) == null ? void 0 : e.logData) != null ? e : [],
                      f = Array.isArray(e),
                      g = 0,
                      e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                    ;

                  ) {
                    var e, h;
                    if (f) {
                      if (g >= e.length) break;
                      h = e[g++];
                    } else {
                      g = e.next();
                      if (g.done) break;
                      h = g.value;
                    }
                    h = h;
                    h.beRequests.set(b, c);
                    for (
                      var h = c.all.keys(),
                        i = Array.isArray(h),
                        j = 0,
                        h = i ? h : h[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                      ;

                    ) {
                      var k;
                      if (i) {
                        if (j >= h.length) break;
                        k = h[j++];
                      } else {
                        j = h.next();
                        if (j.done) break;
                        k = j.value;
                      }
                      k = k;
                      d.add(B.rsrcDone(k));
                    }
                  }
                  B.registerCallback(function () {
                    return B.notify(B.beDone(a));
                  }, Array.from(d));
                },
                pickupResourcesByIDs: function (a) {
                  for (var b = 0; b < a.length; b++) Y(document.getElementById(a[b]));
                },
                enableBootload: function (a) {
                  for (var b in a) q.has(b) || q.set(b, a[b]);
                  A || (Z(), (A = !0));
                  a = l;
                  l = [];
                  a.forEach(function (a) {
                    var b = a[0],
                      c = a[1],
                      d = a[2];
                    a = a[3];
                    a(function () {
                      $.loadModules.apply($, [b, c, d]);
                    });
                  });
                  a = k;
                  k = [];
                  a.forEach(function (a) {
                    var b = a[0];
                    a = a[1];
                    a(function () {
                      $.preloadModules.apply($, [b]);
                    });
                  });
                },
                markComponentsAsImmediate: function (a) {
                  for (
                    var a = a,
                      c = Array.isArray(a),
                      d = 0,
                      a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                    ;

                  ) {
                    var e;
                    if (c) {
                      if (d >= a.length) break;
                      e = a[d++];
                    } else {
                      d = a.next();
                      if (d.done) break;
                      e = d.value;
                    }
                    e = e;
                    var f = q.get(e);
                    f && f.be && (delete f.be, $.done(b("ResourceHasher").getAsyncHash(e)));
                  }
                },
                setResourceMap: function (a, c) {
                  for (var d in a)
                    (d = b("ResourceHasher").getValidResourceHash(d)), s.has(d) || T(d, a[d], !1);
                  if (c)
                    for (
                      var a = c,
                        c = Array.isArray(a),
                        e = 0,
                        a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                      ;

                    ) {
                      var f;
                      if (c) {
                        if (e >= a.length) break;
                        f = a[e++];
                      } else {
                        e = a.next();
                        if (e.done) break;
                        f = e.value;
                      }
                      f = f;
                      var g = s.get(f);
                      g && T(f, g, !0);
                    }
                },
                getURLToHashMap: function () {
                  var a = new Map();
                  for (
                    var b = s,
                      c = Array.isArray(b),
                      d = 0,
                      b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                    ;

                  ) {
                    var e;
                    if (c) {
                      if (d >= b.length) break;
                      e = b[d++];
                    } else {
                      d = b.next();
                      if (d.done) break;
                      e = d.value;
                    }
                    e = e;
                    var f = e[0];
                    e = e[1];
                    if (e.type === "async" || e.type === "csr") continue;
                    a.set(e.src, f);
                  }
                  return a;
                },
                loadPredictedResourceMap: function (a, b) {
                  $.setResourceMap(a), $.loadResources(Object.keys(a), b);
                },
                getCSSResources: function (a) {
                  var b = [];
                  for (
                    var a = X(a),
                      c = Array.isArray(a),
                      d = 0,
                      a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                    ;

                  ) {
                    var e;
                    if (c) {
                      if (d >= a.length) break;
                      e = a[d++];
                    } else {
                      d = a.next();
                      if (d.done) break;
                      e = d.value;
                    }
                    e = e;
                    var f = e[0];
                    e = e[1];
                    e.type === "css" && b.push(f);
                  }
                  return b;
                },
                getBootloadedComponents: function () {
                  var a = new Map();
                  for (
                    var b = w,
                      c = Array.isArray(b),
                      d = 0,
                      b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                    ;

                  ) {
                    var e;
                    if (c) {
                      if (d >= b.length) break;
                      e = b[d++];
                    } else {
                      d = b.next();
                      if (d.done) break;
                      e = d.value;
                    }
                    e = e;
                    var f = e[0];
                    e = e[1];
                    a.set(f, e.firstBootloadStart);
                  }
                  return a;
                },
                getResourceState: function (a) {
                  return { loadStart: m.get(a), loadEnd: n.get(a), loadError: o.get(a) };
                },
                getComponentTiming: function (a) {
                  var b;
                  return {
                    tierTwoStart: (b = B.getEventTime(B.tierTwoStart(a))) != null ? b : 0,
                    tierTwoEnd: (b = B.getEventTime(B.tierTwo(a))) != null ? b : 0,
                    tierThreeStart: (b = B.getEventTime(B.tierThreeStart(a))) != null ? b : 0,
                    tierThreeEnd: (b = B.getEventTime(B.tierThree(a))) != null ? b : 0,
                  };
                },
                getLoadedResourceCount: function () {
                  return n.size;
                },
                getErrorCount: function () {
                  return o.size;
                },
                __debug: {
                  componentMap: q,
                  requested: m,
                  resources: s,
                  riMap: t,
                  retries: u,
                  errors: o,
                  loaded: n,
                  bootloaded: w,
                  _resolveCSRs: X,
                },
              };
              b("JSResourceReference").setBootloader($);
              e.exports = $;
            },
            null
          );
          __d(
            "CSRFGuard",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              a = "for (;;);";
              var g = /^for ?\(;;\);/;
              b = {
                length: a.length,
                regex: g,
                exists: function (a) {
                  return !!a.match(g);
                },
                clean: function (a) {
                  var b = a.match(g);
                  return b ? a.substr(b[0].length) : b;
                },
              };
              e.exports = b;
            },
            null
          );
          __d(
            "BanzaiLazyQueue",
            [],
            function (a, b, c, d, e, f) {
              var g = [];
              a = {
                queuePost: function (a, b, c) {
                  g.push([a, b, c]);
                },
                flushQueue: function () {
                  var a = g;
                  g = [];
                  return a;
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "ge",
            [],
            function (a, b, c, d, e, f) {
              function a(a, b, c) {
                if (typeof a !== "string") return a;
                else if (!b) return document.getElementById(a);
                else return g(a, b, c);
              }
              function g(a, b, c) {
                var d;
                if (h(b) == a) return b;
                else if (b.getElementsByTagName) {
                  c = b.getElementsByTagName(c || "*");
                  for (d = 0; d < c.length; d++) if (h(c[d]) == a) return c[d];
                } else {
                  c = b.childNodes;
                  for (d = 0; d < c.length; d++) {
                    b = g(a, c[d]);
                    if (b) return b;
                  }
                }
                return null;
              }
              function h(a) {
                return a.getAttribute ? a.getAttribute("id") : null;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "replaceTransportMarkers",
            ["BanzaiLazyQueue", "ge", "memoize"],
            function (a, b, c, d, e, f) {
              var g = new Set();
              function h(a, c, d) {
                var e = d !== void 0 ? c[d] : c,
                  f;
                if (Array.isArray(e)) for (f = 0; f < e.length; f++) h(a, e, f);
                else if (e && typeof e === "object")
                  if (e.__m)
                    e.__lazy ? (c[d] = b("memoize")(b.bind(null, e.__m))) : (c[d] = b.call(null, e.__m));
                  else if (e.__jsr)
                    c[d] = new (b.call(null, "JSResourceReference"))(e.__jsr).__setRef(
                      "replaceTransportMarkers"
                    );
                  else if (e.__dr)
                    c[d] = new (b.call(null, "RequireDeferredReference"))(e.__dr).__setRef(
                      "replaceTransportMarkers"
                    );
                  else if (e.__rc)
                    e.__rc[0] === null ? (c[d] = null) : (c[d] = b.call(null, e.__rc[0])),
                      e.__rc[1] &&
                        (g.has(e.__rc[1]) ||
                          (g.add(e.__rc[1]),
                          b("BanzaiLazyQueue").queuePost("require_cond_exposure_logging", {
                            identifier: e.__rc[1],
                          })));
                  else if (e.__e) c[d] = b("ge")(e.__e);
                  else if (e.__rel) c[d] = a.relativeTo;
                  else if (e.__bigPipeContext) c[d] = a.bigPipeContext;
                  else if (e.__bbox) c[d] = e.__bbox;
                  else {
                    for (var i in e) h(a, e, i);
                    if (e.__map) c[d] = new Map(e.__map);
                    else if (e.__set) c[d] = new Set(e.__set);
                    else if (e.__imm) {
                      f = e.__imm;
                      a = f.method;
                      e = f.value;
                      c[d] = b.call(null, "immutable")[a](e);
                    }
                  }
              }
              e.exports = h;
            },
            null
          );
          __d(
            "ServerJSDefine",
            ["BitMap", "replaceTransportMarkers"],
            function (a, b, c, d, e, f) {
              var g = 2,
                h = 8,
                i = new (b("BitMap"))(),
                j = {
                  getLoadedModuleHash: function () {
                    return i.toCompressedString();
                  },
                  handleDefine: function (a, c, d, f, j) {
                    f >= 0 && i.set(f),
                      define(a, c, function (g, h, i, k, c) {
                        g = { data: d };
                        b("replaceTransportMarkers")({ relativeTo: j }, g);
                        if (f === -42) {
                          h = d != null && typeof d === "object" && d.__throw8367__;
                          throw new Error(a + ": " + (typeof h === "string" ? h : ""));
                        }
                        c.exports = g.data;
                      }, g | h);
                  },
                  handleDefines: function (a, b) {
                    a.forEach(function (a) {
                      var c;
                      b != null ? (c = [].concat(a, [b])) : (c = [].concat(a, [null]));
                      j.handleDefine.apply(null, c);
                    });
                  },
                };
              e.exports = j;
            },
            null
          );
          __d(
            "__debug",
            [],
            function (a, b, c, d, e, f) {
              e.exports = {};
            },
            null
          );
          __d(
            "ServerJS",
            [
              "ContextualComponent",
              "ErrorGuard",
              "ServerJSDefine",
              "err",
              "ge",
              "replaceTransportMarkers",
              "__debug",
            ],
            function (a, b, c, d, e, f) {
              var g,
                h = 1,
                i = 2,
                j = 16,
                k = 0;
              a = (function () {
                "use strict";
                function a() {
                  (this.$2 = {}), (this.$1 = null), (this.$4 = {}), (this.$3 = void 0);
                }
                var c = a.prototype;
                c.handle = function (a, b) {
                  return this.$5(a, b, m);
                };
                c.handleWithCustomApplyEach = function (a, b, c) {
                  this.$5(b, c, a);
                };
                c.$5 = function (a, c, d) {
                  this.$3 = c;
                  if (a.__guard != null)
                    throw b("err")("ServerJS.handle called on data that has already been handled");
                  a.__guard = !0;
                  d(a.define || [], this.$6, this);
                  d(a.markup || [], this.$7, this);
                  d(a.elements || [], this.$8, this);
                  this.$9(a.contexts || []);
                  d(a.instances || [], this.$10, this);
                  var e = d(a.pre_display_requires || [], this.$11, this);
                  e = e.concat(d(a.require || [], this.$11, this));
                  return {
                    cancel: function () {
                      e.forEach(function (a) {
                        a && a.cancel();
                      });
                    },
                  };
                };
                c.handlePartial = function (a, b) {
                  var c = this;
                  (a.instances || []).forEach(function (a) {
                    p(c.$2, a);
                  });
                  (a.markup || []).forEach(function (a) {
                    o(c.$2, a);
                  });
                  (a.elements || []).forEach(function (a) {
                    o(c.$2, a);
                  });
                  return this.handle(a, b);
                };
                c.setRelativeTo = function (a) {
                  this.$1 = a;
                  return this;
                };
                c.cleanup = function (a) {
                  var c = Object.keys(this.$2);
                  a
                    ? d.call(
                        null,
                        c,
                        a.guard(function () {}, "SeverJS Cleanup requireLazy", {
                          propagationType: a.PropagationType.ORPHAN,
                        })
                      )
                    : d.call(null, c, function () {});
                  this.$2 = {};
                  function f(c) {
                    var d = this.$4[c],
                      a = d[0],
                      f = d[1];
                    d = d[2];
                    delete this.$4[c];
                    f = f ? 'JS::call("' + a + '", "' + f + '", ...)' : 'JS::requireModule("' + a + '")';
                    a = b("__debug").debugUnresolvedDependencies([a, c]);
                    throw l(b("err")("%s did not fire because it has missing dependencies.\n%s", f, a), d);
                  }
                  for (var h in this.$4)
                    (g || (g = b("ErrorGuard"))).applyWithGuard(f, this, [h], {
                      name: "ServerJS:cleanup id: " + h,
                    });
                };
                c.$6 = function (a, c, d, e) {
                  return (g || (g = b("ErrorGuard"))).applyWithGuard(
                    b("ServerJSDefine").handleDefine,
                    b("ServerJSDefine"),
                    [a, c, d, e, this.$1],
                    { name: "JS::define" }
                  );
                };
                c.$11 = function (a, c, d, e) {
                  return (g || (g = b("ErrorGuard"))).applyWithGuard(this.$12, this, [a, c, d, e], {
                    name: c != null ? "JS::call" : "JS::requireModule",
                  });
                };
                c.$12 = function (a, c, d, e) {
                  a = a.split("@");
                  var f = a[0],
                    m = a[1],
                    n;
                  typeof c === "object" ? (a = c) : ((a = d), (n = c));
                  d = [f].concat(a || []);
                  var o;
                  n != null ? (o = "__call__" + f + "." + n) : (o = "__requireModule__" + f);
                  o += "__" + k++;
                  this.$4[o] = [f, n, m];
                  var p = this.$3 && this.$3.bigPipeContext,
                    q = (g || (g = b("ErrorGuard"))).guard(
                      function (a) {
                        a = b.call(null, f);
                        delete this.$4[o];
                        e && b("replaceTransportMarkers")({ relativeTo: this.$1, bigPipeContext: p }, e);
                        if (n != null) {
                          if (!a[n]) throw l(b("err")('Module %s has no method "%s"', f, n), m);
                          a[n].apply(a, e || []);
                          q.__SMmeta = a[n].__SMmeta || {};
                          q.__SMmeta.module = q.__SMmeta.module || f;
                          q.__SMmeta.name = q.__SMmeta.name || n;
                        }
                      }.bind(this),
                      {
                        name:
                          n != null
                            ? "JS::call('" + f + "', '" + n + "', ...)"
                            : "JS::requireModule('" + f + "')",
                      }
                    );
                  c = define(o, d, q, h | j | i, this, 1, this.$3);
                  return c;
                };
                c.$10 = function (a, c, d, e) {
                  (g || (g = b("ErrorGuard"))).applyWithGuard(this.$13, this, [a, c, d, e], {
                    name: "JS::instance",
                  });
                };
                c.$13 = function (a, c, d, e) {
                  var f = null;
                  a = a.split("@");
                  var g = a[0];
                  a = a[1];
                  if (c) {
                    var h = this.$3 && this.$3.bigPipeContext;
                    f = function () {
                      var a = b.call(null, c[0]);
                      b("replaceTransportMarkers")({ relativeTo: this.$1, bigPipeContext: h }, d);
                      var e = Object.create(a.prototype);
                      a.apply(e, d);
                      return e;
                    }.bind(this);
                  }
                  define(g, c, f, i | j, null, e);
                };
                c.$7 = function (a, c, d) {
                  (g || (g = b("ErrorGuard"))).applyWithGuard(this.$14, this, [a, c, d], {
                    name: "JS::markup",
                  });
                };
                c.$14 = function (a, b, c) {
                  a = a.split("@");
                  var d = a[0];
                  a = a[1];
                  define(d, ["HTML"], function (c) {
                    try {
                      return c.replaceJSONWrapper(b).getRootNode();
                    } catch (b) {
                      throw l(b, a);
                    }
                  }, j, null, c);
                };
                c.$8 = function (a, c, d, e) {
                  (g || (g = b("ErrorGuard"))).applyWithGuard(this.$15, this, [a, c, d, e], {
                    name: "JS::element",
                  });
                };
                c.$15 = function (a, c, d, e) {
                  a = a.split("@");
                  var f = a[0],
                    g = a[1];
                  if (c === null && d != null) {
                    define(f, null, null, j, null, d);
                    return;
                  }
                  a = [];
                  var i = j;
                  d = d || 0;
                  e != null && (a.push(e), (i |= h), d++);
                  define(f, a, function (a) {
                    a = b("ge")(c, a);
                    if (!a) {
                      var d = "";
                      throw l(b("err")('Could not find element "%s"%s', c, d), g);
                    }
                    return a;
                  }, i, null, d);
                };
                c.$9 = function (a) {
                  (g || (g = b("ErrorGuard"))).applyWithGuard(this.$16, this, [a], {
                    name: "ContextualComponents",
                  });
                };
                c.$16 = function (a) {
                  var c = this,
                    d = this.$3 && this.$3.bigPipeContext;
                  a.map(function (a) {
                    b("replaceTransportMarkers")({ relativeTo: c.$1, bigPipeContext: d }, a);
                    var e = a[0];
                    return [a, n(e)];
                  })
                    .sort(function (a, b) {
                      return a[1] - b[1];
                    })
                    .forEach(function (a) {
                      a = a[0];
                      var c = a[0];
                      a = a[1];
                      b("ContextualComponent").register({ element: c, isRoot: a });
                    });
                };
                return a;
              })();
              function l(a, b) {
                a.serverHash = b;
                return a;
              }
              function m(a, b, c) {
                return a.map(function (a) {
                  return b.apply(c, a);
                });
              }
              function n(a) {
                var b = 0;
                a = a;
                while (a) (a = a.parentElement), b++;
                return b;
              }
              function o(b, a) {
                var c = a[0];
                c in b || (a[2] = (a[2] || 0) + 1);
                b[c] = !0;
              }
              function p(b, a) {
                var c = a[0];
                c in b || (a[3] = (a[3] || 0) + 1);
                b[c] = !0;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "bx",
            ["invariant"],
            function (a, b, c, d, e, f, g) {
              var h = {};
              function a(a) {
                var b = h[a];
                !b && g(0, 3199, a);
                return b;
              }
              a.add = function (a) {
                var b = !1;
                for (var c in a) c in h || ((a[c].loggingID = c), (h[c] = a[c]));
              };
              a.getURL = function (a) {
                return a.uri;
              };
              e.exports = a;
            },
            null
          );
          __d(
            "ix",
            ["invariant"],
            function (a, b, c, d, e, f, g) {
              var h = {};
              function a(a) {
                var b = h[a];
                !b && g(0, 582, a);
                return b;
              }
              a.add = function (a) {
                var b = !1;
                for (var c in a) c in h || ((a[c].loggingID = c), (h[c] = a[c]));
              };
              e.exports = a;
            },
            null
          );
          __d(
            "objectEntries",
            [],
            function (a, b, c, d, e, f) {
              function a(a) {
                return Object.entries(a);
              }
              e.exports = a;
            },
            null
          );
          __d(
            "qex",
            ["invariant", "requireWeak"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h = {},
                i = {};
              a = {
                _: function (a) {
                  var c = h[a];
                  c != null || g(0, 3203, a);
                  var d = c.r,
                    e = c.l;
                  e != null &&
                    !i[a] &&
                    ((i[a] = !0),
                    b("requireWeak")("Banzai", function (a) {
                      a.post("qex", { l: e });
                    }));
                  return d;
                },
                add: function (a) {
                  for (var b in a) b in h || (h[b] = a[b]);
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "BootloaderEndpoint",
            [
              "ix",
              "Bootloader",
              "BootloaderEndpointConfig",
              "CSRFGuard",
              "FBLogger",
              "ServerJS",
              "TimeSlice",
              "bx",
              "getAsyncParams",
              "getSameOriginTransport",
              "gkx",
              "objectEntries",
              "performanceAbsoluteNow",
              "qex",
              "setImmediateAcrossTransitions",
            ],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h,
                i = b("BootloaderEndpointConfig").endpointURI,
                j = 0,
                k = null,
                l = new Map(),
                m = new Map();
              function n(a, c) {
                var d = {};
                a.size && (d.modules = Array.from(a.keys()).join(","));
                c.size && (d.nb_modules = Array.from(c.keys()).join(","));
                a = Object.entries(babelHelpers["extends"]({}, d, b("getAsyncParams")("GET")))
                  .map(function (a) {
                    var b = a[0];
                    a = a[1];
                    return encodeURIComponent(b) + "=" + encodeURIComponent(String(a));
                  })
                  .join("&");
                return i + (i.includes("?") ? "&" : "?") + a;
              }
              function o(a, c) {
                var d = n(a, c),
                  e = b("getSameOriginTransport")(),
                  f = j++,
                  g = (h || (h = b("performanceAbsoluteNow")))();
                e.open("GET", d, !0);
                var i = b("TimeSlice").getGuardedContinuation("Bootloader _requestHastePayload");
                e.onreadystatechange = function () {
                  if (e.readyState !== 4) return;
                  i(function () {
                    var h = e.status === 200 ? JSON.parse(b("CSRFGuard").clean(e.responseText)) : null;
                    h == null
                      ? b("FBLogger")("bootloader").warn(
                          "Invalid response from %s: %s",
                          d,
                          e.responseText.substr(0, 256)
                        )
                      : b("TimeSlice").guard(
                          function () {
                            return p(d, h, a, c, f, g);
                          },
                          "Bootloader receiveEndpointData",
                          { propagationType: b("TimeSlice").PropagationType.CONTINUATION }
                        )();
                  });
                };
                e.send();
              }
              function p(a, c, d, e, f, i) {
                if (c.__error) {
                  b("FBLogger")("bootloader").warn("Fatal error from bootloader endpoint: %s", a);
                  return;
                }
                var j = (h || (h = b("performanceAbsoluteNow")))();
                a = c.ixData;
                var k = c.bxData,
                  l = c.gkxData,
                  m = c.qexData;
                a && g.add(a);
                k && b("bx").add(k);
                l && b("gkx").add(l);
                m && b("qex").add(m);
                var n = c.jsmods;
                a = c.resource_map;
                k = c.bootloadable;
                l = c.allResources;
                var o = c.serverGenTime;
                a && b("Bootloader").setResourceMap(a);
                k && b("Bootloader").enableBootload(k);
                var p = new Map(),
                  q = 0,
                  r = 0;
                b("Bootloader").loadResources(
                  b("Bootloader").getCSSResources(l || []),
                  function () {
                    q = (h || (h = b("performanceAbsoluteNow")))();
                    new (b("ServerJS"))().handle(n || {});
                    r = h();
                    var a = [d, e];
                    for (var c = 0; c < a.length; c++) {
                      var f = a[c];
                      for (
                        var f = f.values(),
                          g = Array.isArray(f),
                          i = 0,
                          f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                        ;

                      ) {
                        var j;
                        if (g) {
                          if (i >= f.length) break;
                          j = f[i++];
                        } else {
                          i = f.next();
                          if (i.done) break;
                          j = i.value;
                        }
                        j = j;
                        b("Bootloader").done(j);
                      }
                    }
                  },
                  null,
                  p
                );
                var s = new Map();
                b("Bootloader").loadResources(
                  l || [],
                  function () {
                    var a = [d, e];
                    for (var c = 0; c < a.length; c++) {
                      var g = a[c];
                      for (
                        var g = g.keys(),
                          h = Array.isArray(g),
                          k = 0,
                          g = h ? g : g[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                        ;

                      ) {
                        var l;
                        if (h) {
                          if (k >= g.length) break;
                          l = g[k++];
                        } else {
                          k = g.next();
                          if (k.done) break;
                          l = k.value;
                        }
                        l = l;
                        b("Bootloader").beDone(l, f, {
                          requestStart: i,
                          responseStart: j,
                          serverGenTime: (l = o) != null ? l : 0,
                          jsmodsStart: q,
                          jsmodsEnd: r,
                          blocking: p,
                          all: s,
                        });
                      }
                    }
                  },
                  null,
                  s
                );
              }
              function q() {
                var a = l,
                  b = m;
                k = null;
                l = new Map();
                m = new Map();
                o(a, b);
              }
              a = {
                load: function (a, c, d) {
                  (c ? l : m).set(a, d);
                  if (b("BootloaderEndpointConfig").debugNoBatching) {
                    q();
                    return;
                  }
                  if (k != null) return;
                  var f = b("TimeSlice").getGuardedContinuation(
                    "Schedule async batch request: Bootloader._loadResources"
                  );
                  k = b("setImmediateAcrossTransitions")(function () {
                    return f(function () {
                      return q();
                    });
                  });
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "promiseDone",
            ["FBLogger", "TAAL", "setTimeoutAcrossTransitions"],
            function (a, b, c, d, e, f) {
              function a(a, c, d) {
                var e = new Error("promiseDone"),
                  f = arguments.length > 1 ? a.then(c, d) : a;
                f.then(null, function (a) {
                  b("setTimeoutAcrossTransitions")(function () {
                    if (a instanceof Error) throw a;
                    else {
                      e.message = b("TAAL").blameToPreviousFile(a);
                      throw e;
                    }
                  }, 0);
                });
              }
              e.exports = a;
            },
            null
          );
          __d(
            "RequireDeferredReference",
            [
              "Promise",
              "requireCond",
              "Bootloader",
              "cr:696703",
              "emptyFunction",
              "ifRequireable",
              "ifRequired",
              "performanceNow",
              "promiseDone",
              "requireWeak",
            ],
            function (a, b, c, d, e, f) {
              "use strict";
              var g,
                h = function (a) {
                  return a;
                };
              a = (function () {
                function a(a) {
                  this.$1 = a;
                }
                var c = a.prototype;
                c.getModuleId = function () {
                  var a = this.$1;
                  return a;
                };
                c.getModuleIdAsRef = function () {
                  return this.$1;
                };
                c.__setRef = function (a) {
                  this.$2 = a;
                  return this;
                };
                c.preload = function () {};
                c.getModuleIfRequired = function () {
                  return b("ifRequired").call(null, this.$1, h);
                };
                c.getModuleIfRequireable = function () {
                  return b("ifRequireable").call(null, this.$1, h);
                };
                c.load = function () {
                  var a = this,
                    c = b("ifRequireable")("m#CometInteractionTracingMetrics", function (c) {
                      return c
                        .currentInteractionLogger()
                        .addRequireDeferred(a.getModuleId(), (g || (g = b("performanceNow")))());
                    });
                  return new (b("Promise"))(function (d) {
                    b("requireWeak").call(null, a.getModuleId(), function (a) {
                      if (c) {
                        var e = !1;
                        c((g || (g = b("performanceNow")))(), e);
                      }
                      d(a);
                    });
                  });
                };
                c.loadImmediately = function (a) {
                  var c,
                    d = !1,
                    e = !1;
                  function f(b) {
                    if (d || e) return;
                    d = !0;
                    a(b);
                  }
                  var g = b("Bootloader").loadModules.call(
                    b("Bootloader"),
                    [this.getModuleId()],
                    f,
                    (c = this.$2) != null ? c : "RequireDeferredReference.loadImmediately()"
                  );
                  b("requireWeak").call(null, this.getModuleId(), function (a) {
                    f(a);
                  });
                  return {
                    remove: function () {
                      e || ((e = !0), g.remove());
                    },
                  };
                };
                c.onReadyImmediately = function (a) {
                  var c = this,
                    d = !1,
                    e = (g || (g = b("performanceNow")))(),
                    f = b("ifRequireable")("m#CometInteractionTracingMetrics", function (a) {
                      return a.currentInteractionLogger().addRequireDeferred(c.getModuleId(), e);
                    }),
                    h = this.getModuleIfRequireable();
                  if (h != null) {
                    if (f) {
                      var i = !0;
                      f(e, i);
                    }
                    a(h);
                  } else {
                    var j = !1;
                    if (b("cr:696703")) {
                      var k = b("cr:696703").getCurrentPriorityLevel();
                      this.loadImmediately(function () {
                        for (var c = arguments.length, e = new Array(c), h = 0; h < c; h++)
                          e[h] = arguments[h];
                        b("cr:696703").runWithPriority(k, function () {
                          f && f((g || (g = b("performanceNow")))(), j), d || a.apply(void 0, e);
                        });
                      });
                    } else
                      this.loadImmediately(function () {
                        f && f((g || (g = b("performanceNow")))(), j), d || a.apply(void 0, arguments);
                      });
                  }
                  return {
                    remove: function () {
                      d = !0;
                    },
                  };
                };
                c.onReady = function (a) {
                  var c = this,
                    d = !1,
                    e = this.getModuleIfRequireable(),
                    f = e != null ? b("Promise").resolve(e) : this.load();
                  if (e != null) {
                    var h = (g || (g = b("performanceNow")))();
                    e = b("ifRequireable")("m#CometInteractionTracingMetrics", function (a) {
                      return a.currentInteractionLogger().addRequireDeferred(c.getModuleId(), h);
                    });
                    if (e) {
                      var i = !0;
                      e(h, i);
                    }
                  }
                  b("promiseDone")(f, function () {
                    d || a.apply(void 0, arguments);
                  });
                  return {
                    remove: function () {
                      d = !0;
                    },
                  };
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "requireDeferred",
            ["RequireDeferredReference"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = {};
              function h(a, b) {
                g[a] = b;
              }
              function i(a) {
                return g[a];
              }
              function a(a) {
                var c = i(a);
                if (c) return c;
                c = new (b("RequireDeferredReference"))(a);
                h(a, c);
                return c;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "CurrentCommunity",
            ["CurrentCommunityInitialData"],
            function (a, b, c, d, e, f) {
              a = {
                getID: function () {
                  return b("CurrentCommunityInitialData").COMMUNITY_ID || "0";
                },
                getName: function () {
                  return b("CurrentCommunityInitialData").COMMUNITY_NAME || "";
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "DTSG",
            ["invariant", "DTSGInitialData"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h = b("DTSGInitialData").token || null;
              a = {
                getToken: function () {
                  return h;
                },
                setToken: function (a) {
                  h = a;
                },
                refresh: function () {
                  g(0, 5809);
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "isMessengerDotComURI",
            [],
            function (a, b, c, d, e, f) {
              var g = new RegExp("(^|\\.)messenger\\.com$", "i"),
                h = ["https"];
              function a(a) {
                if (a.isEmpty() && a.toString() !== "#") return !1;
                return !a.getDomain() && !a.getProtocol()
                  ? !1
                  : ES(h, "indexOf", !0, a.getProtocol()) !== -1 && g.test(a.getDomain());
              }
              e.exports = a;
            },
            null
          );
          __d(
            "isOculusDotComURI",
            [],
            function (a, b, c, d, e, f) {
              var g = new RegExp("(^|\\.)oculus\\.com$", "i"),
                h = ["https"];
              function a(a) {
                if (a.isEmpty() && a.toString() !== "#") return !1;
                return !a.getDomain() && !a.getProtocol()
                  ? !1
                  : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
              }
              e.exports = a;
            },
            null
          );
          __d(
            "DTSGUtils",
            [
              "SprinkleConfig",
              "isCdnURI",
              "isFacebookURI",
              "isMessengerDotComURI",
              "isOculusDotComURI",
              "isWorkplaceDotComURI",
            ],
            function (a, b, c, d, e, f) {
              "use strict";
              a = {
                getNumericValue: function (a) {
                  var c = 0;
                  for (var d = 0; d < a.length; d++) c += a.charCodeAt(d);
                  c = c.toString();
                  return b("SprinkleConfig").should_randomize ? c : b("SprinkleConfig").version + c;
                },
                shouldAppendToken: function (a) {
                  return (
                    !b("isCdnURI")(a) &&
                    !a.isSubdomainOfDomain("fbsbx.com") &&
                    (b("isFacebookURI")(a) ||
                      b("isMessengerDotComURI")(a) ||
                      b("isWorkplaceDotComURI")(a) ||
                      b("isOculusDotComURI")(a) ||
                      a.isSubdomainOfDomain("freebasics.com"))
                  );
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "DTSG_ASYNC",
            ["DTSGInitData"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = b("DTSGInitData").async_get_token || null;
              a = {
                getToken: function () {
                  return g;
                },
                setToken: function (a) {
                  g = a;
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "StaticSiteData",
            [],
            function (a, b, c, d, e, f) {
              e.exports = {
                pkg_cohort_key: "__pc",
                connection_class_server_guess_key: "__ccg",
                dpr_key: "dpr",
                be_one_ahead_key: "__beoa",
                spin_rev_key: "__spin_r",
                spin_time_key: "__spin_t",
                spin_branch_key: "__spin_b",
                spin_mhenv_key: "__spin_dev_mhenv",
                weblite_key: "__wblt",
                weblite_iframe_key: "__wbltif",
                kite_key: "_ktif",
                haste_session_id_key: "__hsi",
                jsmod_key: "__dyn",
                csr_key: "__csr",
                comet_key: "__comet_req",
              };
            },
            null
          );
          __d(
            "asyncParams",
            [],
            function (a, b, c, d, e, f) {
              var g = {};
              a = {
                add: function (a, b) {
                  g[a] = b;
                },
                get: function () {
                  return g;
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "isSocialPlugin",
            ["CSSCore"],
            function (a, b, c, d, e, f) {
              "use strict";
              function a() {
                return !!document.body && b("CSSCore").hasClass(document.body, "plugin");
              }
              e.exports = a;
            },
            null
          );
          __d(
            "getAsyncParams",
            [
              "CSRBitMap",
              "CurrentCommunity",
              "CurrentUserInitialData",
              "DTSG",
              "DTSG_ASYNC",
              "DTSGUtils",
              "Env",
              "ISB",
              "LSD",
              "ServerJSDefine",
              "SiteData",
              "SprinkleConfig",
              "StaticSiteData",
              "WebConnectionClassServerGuess",
              "WebSession",
              "asyncParams",
              "isSocialPlugin",
            ],
            function (a, b, c, d, e, f) {
              var g,
                h,
                i = 1,
                j = {
                  locale: !0,
                  cxobfus: !0,
                  js_debug: !0,
                  cquick: !0,
                  ctarget: !0,
                  cquick_token: !0,
                  wdplevel: !0,
                  prod_graphql: !0,
                  sri: !0,
                };
              function a(a) {
                var c,
                  d = babelHelpers["extends"](
                    {},
                    b("asyncParams").get(),
                    ((c = { __user: (g || (g = b("CurrentUserInitialData"))).USER_ID, __a: 1 }),
                    (c[b("StaticSiteData").jsmod_key] = b("ServerJSDefine").getLoadedModuleHash()),
                    (c[b("StaticSiteData").csr_key] = b("CSRBitMap").toCompressedString()),
                    (c.__req = (i++).toString(36)),
                    (c[b("StaticSiteData").be_one_ahead_key] = b("SiteData").be_one_ahead ? 1 : 0),
                    (c[b("StaticSiteData").pkg_cohort_key] = b("SiteData").pkg_cohort),
                    (c[b("StaticSiteData").dpr_key] = b("SiteData").pr),
                    (c[b("StaticSiteData").connection_class_server_guess_key] = b(
                      "WebConnectionClassServerGuess"
                    ).connectionClass),
                    (c.__rev = b("SiteData").client_revision),
                    (c.__s = b("WebSession").getId()),
                    (c[b("StaticSiteData").haste_session_id_key] = b("SiteData").hsi),
                    (c[b("StaticSiteData").comet_key] = b("SiteData").is_comet ? 1 : 0),
                    c)
                  );
                b("SiteData").force_blue && (d.force_blue = 1);
                window.location.search
                  .slice(1)
                  .split("&")
                  .forEach(function (a) {
                    a = a.split("=");
                    var b = a[0];
                    a = a[1];
                    (b.substr(0, 4) === "tfc_" ||
                      b.substr(0, 4) === "tfi_" ||
                      b.substr(0, 3) === "mh_" ||
                      j[b] > -1) &&
                      (d[b] = a);
                  });
                (h || (h = b("Env"))).isCQuick &&
                  !d.cquick &&
                  ((d.cquick = (h || (h = b("Env"))).iframeKey),
                  (d.ctarget = h.iframeTarget),
                  (d.cquick_token = h.iframeToken));
                if (a == "POST") {
                  c = b("DTSG").getCachedToken ? b("DTSG").getCachedToken() : b("DTSG").getToken();
                  c &&
                    ((d.fb_dtsg = c),
                    b("SprinkleConfig").param_name &&
                      (d[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(c)));
                  b("LSD").token &&
                    ((d.lsd = b("LSD").token),
                    b("SprinkleConfig").param_name &&
                      !c &&
                      (d[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(b("LSD").token)));
                }
                if (a == "GET") {
                  c = b("DTSG_ASYNC").getCachedToken
                    ? b("DTSG_ASYNC").getCachedToken()
                    : b("DTSG_ASYNC").getToken();
                  c &&
                    ((d.fb_dtsg_ag = c),
                    b("SprinkleConfig").param_name &&
                      (d[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(c)));
                }
                b("ISB").token && (d.fb_isb = b("ISB").token);
                b("CurrentCommunity").getID() !== "0" && (d.__cid = b("CurrentCommunity").getID());
                b("isSocialPlugin")() && (d.__sp = 1);
                if (b("SiteData").spin) {
                  d[(a = b("StaticSiteData")).spin_rev_key] = b("SiteData")[a.spin_rev_key];
                  d[a.spin_branch_key] = b("SiteData")[a.spin_branch_key];
                  d[a.spin_time_key] = b("SiteData")[a.spin_time_key];
                  b("SiteData")[b("StaticSiteData").spin_mhenv_key] &&
                    (d[b("StaticSiteData").spin_mhenv_key] = b("SiteData")[
                      b("StaticSiteData").spin_mhenv_key
                    ]);
                }
                return d;
              }
              e.exports = a;
            },
            null
          );
          /**
           * License: https://www.facebook.com/legal/license/09P_rcHKL4D/
           */
          __d(
            "Alea",
            [],
            function (a, b, c, d, e, f) {
              function g() {
                var a = 4022871197,
                  b = function (b) {
                    b = b.toString();
                    for (var c = 0; c < b.length; c++) {
                      a += b.charCodeAt(c);
                      var d = 0.02519603282416938 * a;
                      a = d >>> 0;
                      d -= a;
                      d *= a;
                      a = d >>> 0;
                      d -= a;
                      a += d * 4294967296;
                    }
                    return (a >>> 0) * 23283064365386963e-26;
                  };
                b.version = "Mash 0.9";
                return b;
              }
              function a() {
                var a = 0,
                  b = 0,
                  c = 0,
                  d = 1;
                for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++) f[h] = arguments[h];
                var i = f.length > 0 ? f : [new Date()],
                  j = new g();
                a = j(" ");
                b = j(" ");
                c = j(" ");
                for (var k = 0; k < i.length; k++)
                  (a -= j(i[k])),
                    a < 0 && (a += 1),
                    (b -= j(i[k])),
                    b < 0 && (b += 1),
                    (c -= j(i[k])),
                    c < 0 && (c += 1);
                j = null;
                var l = function () {
                  var e = 2091639 * a + d * 23283064365386963e-26;
                  a = b;
                  b = c;
                  c = e - (d = e | 0);
                  return c;
                };
                l.version = "Alea 0.9";
                l.args = i;
                return l;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "Random",
            ["Alea", "ServerNonce"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = 4294967296,
                h = b("ServerNonce").ServerNonce,
                i;
              function j() {
                i == null && (i = b("Alea")(h));
                return i;
              }
              var k = {
                random: (function () {
                  var b = typeof Uint32Array === "function" ? new Uint32Array(1) : null,
                    c = a.crypto || a.msCrypto;
                  if (b != null)
                    try {
                      var d = c == null ? void 0 : c.getRandomValues;
                      if (typeof d === "function") {
                        var e = ES(d, "bind", !0, c);
                        return function () {
                          try {
                            e(b);
                          } catch (a) {
                            return j()();
                          }
                          return b[0] / g;
                        };
                      }
                    } catch (a) {}
                  return j();
                })(),
                uint32: function () {
                  return Math.floor(this.random() * g);
                },
                coinflip: function (a) {
                  if (a === 0) return !1;
                  return a <= 1 ? !0 : k.random() * a <= 1;
                },
              };
              e.exports = k;
            },
            null
          );
          __d(
            "WebSessionDefaultTimeoutMs",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              e.exports = 35e3;
            },
            null
          );
          __d(
            "WebSession",
            ["FBLogger", "Random", "WebSessionDefaultTimeoutMs", "WebStorage"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g,
                h = 36,
                i = 6,
                j = Math.pow(h, i);
              function k(a) {
                return a == null || Number.isFinite(a) === !1 || a <= 0 ? null : a;
              }
              function l(a) {
                if (a == null) return null;
                var c = parseInt(a, 10);
                if ("" + c !== a) {
                  b("FBLogger")("web_session").warn(
                    "Expected the web session expiry time to parse as an integer. Found `%s`.",
                    String(a)
                  );
                  return null;
                }
                return k(c);
              }
              function m(a) {
                if (a == null) return null;
                if (a.length !== i) {
                  b("FBLogger")("web_session").warn(
                    "Expected the web session id to be a %d character string. It was %d character(s). Received `%s`.",
                    i,
                    a.length,
                    a
                  );
                  return null;
                }
                if (/^[a-z0-9]+$/.test(a) === !1) {
                  b("FBLogger")("web_session").warn(
                    "Expected the web session ID to be a base-%d encoded string. Received `%s`.",
                    h,
                    a
                  );
                  return null;
                }
                return a;
              }
              function n(a) {
                if (a == null) return null;
                if (typeof a !== "string" && a instanceof String === !1) {
                  b("FBLogger")("web_session").warn(
                    "A non-string value was passed to `coerceSession`. This should be impossible according to this method's Flow type. The value was `%s`.",
                    a
                  );
                  return null;
                }
                a = a.split(":");
                var c = a[0];
                a = a[1];
                a = l(a);
                c = m(c);
                return a == null || c == null ? null : { expiryTime: a, id: c };
              }
              function o() {
                var a = Math.floor(b("Random").random() * j);
                a = a.toString(h);
                return "0".repeat(i - a.length) + a;
              }
              var p = null;
              function q() {
                p == null && (p = o());
                return p;
              }
              function r(a) {
                a === void 0 && (a = Date.now());
                var c = (g || (g = b("WebStorage"))).getLocalStorageForRead();
                if (c == null) return null;
                c = n(c.getItem("Session"));
                return c && a < c.expiryTime ? c : null;
              }
              function s() {
                var a;
                return (a = r()) == null ? void 0 : a.id;
              }
              function t() {
                var a = (g || (g = b("WebStorage"))).getSessionStorageForRead();
                if (a == null) return null;
                a = m(a.getItem("TabId"));
                if (a == null) {
                  var c = (g || (g = b("WebStorage"))).getSessionStorage();
                  if (c == null) return null;
                  var d = o();
                  c.setItem("TabId", d);
                  return d;
                }
                return a;
              }
              a = {
                extend: function (a) {
                  if (a !== void 0 && k(a) == null) {
                    b("FBLogger")("web_session").warn(
                      "`WebSession.extend()` was passed an invalid target expiry time `%s`.",
                      a
                    );
                    return;
                  }
                  var c = Date.now();
                  a = (a = a) != null ? a : c + b("WebSessionDefaultTimeoutMs");
                  var d = r(c);
                  if ((d && d.expiryTime >= a) || a <= c) return;
                  c = (g || (g = b("WebStorage"))).getLocalStorage();
                  if (c != null) {
                    d = d == null ? o() : d.id;
                    c.setItem("Session", d + ":" + a);
                  }
                },
                getId: function () {
                  var a,
                    b,
                    c = q();
                  a = (a = s()) != null ? a : "";
                  b = (b = t()) != null ? b : "";
                  return a + ":" + b + ":" + c;
                },
                getPageId_DO_NOT_USE: function () {
                  return q();
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "CookieConsent",
            ["InitialCookieConsent"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g,
                h = (g || (g = b("InitialCookieConsent"))).deferCookies,
                i = g.shouldShowCookieBanner;
              a = {
                setConsented: function () {
                  (h = !1), (i = !1);
                },
                isDeferCookies: function () {
                  return h;
                },
                isCookiesBlocked: function () {
                  return (g || (g = b("InitialCookieConsent"))).noCookies;
                },
                shouldShowCookieBanner: function () {
                  return i;
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "WebStorage",
            ["CookieConsent", "FBLogger", "ex", "gkx", "repairLocalStorage"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g,
                h = {},
                i = {};
              function j(a, c, d) {
                if (
                  (g || (g = b("CookieConsent"))).isCookiesBlocked() ||
                  (g || (g = b("CookieConsent"))).isDeferCookies()
                )
                  return null;
                if (d === "localStorage") {
                  a = !1;
                  try {
                    a = b("gkx")("946894");
                  } catch (a) {}
                  a && b("repairLocalStorage")();
                }
                Object.prototype.hasOwnProperty.call(h, d) || (h[d] = c(d));
                return h[d];
              }
              function k(a) {
                try {
                  return window[a];
                } catch (a) {
                  b("FBLogger")("web_storage").warn("Failed to get storage for read %s", a.message);
                }
                return null;
              }
              function l(a) {
                try {
                  a = window[a];
                  if (a) {
                    var c = "__test__" + Date.now();
                    a.setItem(c, "");
                    a.removeItem(c);
                  }
                  return a;
                } catch (a) {
                  c = "";
                  b("FBLogger")("web_storage").warn("Failed to get storage %s" + c, a.message);
                }
                return null;
              }
              function m(a) {
                var b = [];
                for (var c = 0; c < a.length; c++) b.push(a.key(c) || "");
                return b;
              }
              function a(a, c, d) {
                if (a == null) return new Error("storage cannot be null");
                var e = null;
                try {
                  a.setItem(c, d);
                } catch (g) {
                  var f = m(a).map(function (b) {
                    var c = (a.getItem(b) || "").length;
                    return b + "(" + c + ")";
                  });
                  e = new Error(
                    b("ex")(
                      "%sStorage quota exceeded while setting %s(%s). Items(length) follows: %s",
                      g.name ? g.name + ": " : "",
                      c,
                      d.length,
                      f.join()
                    )
                  );
                  b("FBLogger")("web_storage").catching(e).mustfix("Error set item");
                }
                return e;
              }
              c = {
                getLocalStorage: function () {
                  return j(h, l, "localStorage");
                },
                getSessionStorage: function () {
                  return j(h, l, "sessionStorage");
                },
                getLocalStorageForRead: function () {
                  return j(i, k, "localStorage");
                },
                getSessionStorageForRead: function () {
                  return j(i, k, "sessionStorage");
                },
                setItemGuarded: a,
              };
              e.exports = c;
            },
            null
          );
          __d(
            "repairLocalStorage",
            ["requireDeferred"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = b("requireDeferred")("BanzaiODS"),
                h = 3082,
                i = "webstorage.localstorage.repair",
                j = 1 / 1e4,
                k = (function () {
                  var a = [],
                    b = function (b) {
                      a.push(b);
                    },
                    c = function (a) {
                      b(a);
                    };
                  g.onReady(function (d) {
                    d.setEntitySample(i, j),
                      (b = function (a) {
                        d.bumpEntityKey(h, i, a);
                      }),
                      a.forEach(c),
                      (a.length = 0);
                  });
                  return c;
                })(),
                l = (function () {
                  var a = [],
                    b = function (b, c, d) {
                      a.push({ denominator: d, event: b, numerator: c });
                    },
                    c = function (a, c, d) {
                      b(a, c, d);
                    };
                  g.onReady(function (d) {
                    d.setEntitySample(i, j),
                      (b = function (a, b, c) {
                        d.bumpFraction(h, i, a, b, c);
                      }),
                      a.forEach(function (a) {
                        var b = a.denominator,
                          d = a.event;
                        a = a.numerator;
                        return c(d, a, b);
                      }),
                      (a.length = 0);
                  });
                  return c;
                })(),
                m = !1;
              function a() {
                if (m === !0) return;
                m = !0;
                var a;
                try {
                  (a = window.localStorage), k("access_instance.success");
                } catch (a) {
                  k("access_instance.fataled");
                  return;
                }
                if (a == null) {
                  k("access_instance.found_null");
                  return;
                }
                var b = a;
                ["clear", "getItem", "removeItem", "setItem"].forEach(function (a) {
                  var c;
                  try {
                    (c = b[a]),
                      k("access_stored_value.success." + a),
                      l("evaluate_stored_value.is_poisoned_pct." + a, 0, 1);
                  } catch (b) {
                    k("access_stored_value.failure." + a);
                    return;
                  }
                  if (typeof c === "string") {
                    try {
                      delete b[a], k("delete_poisoned_key.success." + a);
                    } catch (b) {
                      k("delete_poisoned_key.failed." + a);
                    }
                    l("evaluate_stored_value.is_poisoned_pct." + a, 1, 0);
                  }
                });
              }
              e.exports = a;
            },
            null
          );
          __d(
            "CookieStore",
            ["CookieCoreLoggingConfig", "FBLogger", "Random", "gkx", "performanceNow", "requireDeferred"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g,
                h = b("requireDeferred")("BanzaiScuba");
              function i(a, b, c, d, e, f, g, h) {
                return (
                  b +
                  "=" +
                  encodeURIComponent(c) +
                  "; " +
                  (f !== 0 && f != void 0 ? "expires=" + new Date(a + f).toUTCString() + "; " : "") +
                  "path=" +
                  d +
                  "; domain=" +
                  e +
                  (g ? "; secure" : "") +
                  (h ? "; SameSite=" + h : "")
                );
              }
              function j(a, b, c) {
                return a + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=" + b + "; domain=" + c;
              }
              function k() {
                if (b("CookieCoreLoggingConfig").sampleRate > 0) {
                  var a = (g || (g = b("performanceNow")))(),
                    c = document.cookie;
                  a = g() - a;
                  var d =
                    a > b("CookieCoreLoggingConfig").maximumIgnorableStallMs &&
                    b("Random").coinflip(1 / b("CookieCoreLoggingConfig").sampleRate);
                  d &&
                    b("FBLogger")("cookie_infra")
                      .addMetadata("COOKIE_INFRA", "WALL_TIME", String(a))
                      .warn(
                        "Cookie read exceeded %s milliseconds.",
                        b("CookieCoreLoggingConfig").maximumIgnorableStallMs
                      );
                  return c;
                } else return document.cookie;
              }
              var l = (function () {
                function a() {
                  this.$1 = 0;
                }
                var c = a.prototype;
                c.setCookie = function (a, b, c, d, e, f, g, h) {
                  document.cookie = i(a, b, c, d, e, f, g, h);
                };
                c.clearCookie = function (a, b, c) {
                  document.cookie = j(a, b, c);
                };
                c.getCookie = function (a) {
                  this.$1++;
                  var c = (g || (g = b("performanceNow")))();
                  a = k().match("(?:^|;\\s*)" + a + "=(.*?)(?:;|$)");
                  c = g() - c;
                  var d = 1 / b("CookieCoreLoggingConfig").sampleRateClassic,
                    e = b("Random").coinflip(d);
                  e && m(d, "classic", c, this.$1);
                  return a ? decodeURIComponent(a[1]) : null;
                };
                return a;
              })();
              function m(a, b, c, d, e, f) {
                h.onReady(function (g) {
                  g = new g("cookie_perf", null, { addBrowserFields: !0 });
                  g.addInteger("sample_rate", Math.floor(a));
                  g.addNormal("type", b);
                  g.addInteger("duration_usec", c * 1e3);
                  g.addInteger("reads", d);
                  typeof e === "number" && g.addInteger("misses", e);
                  typeof f === "boolean" && g.addNormal("hit", f);
                  g.post();
                });
              }
              var n = 10 * 1e3,
                o = (function () {
                  function a() {
                    (this.$1 = {}), (this.$2 = 0), (this.$3 = 0), (this.$4 = 0);
                  }
                  var c = a.prototype;
                  c.setCookie = function (a, b, c, d, e, f, g, h) {
                    (document.cookie = i(a, b, c, d, e, f, g, h)), (this.$1[b] = { value: c, updated: a });
                  };
                  c.clearCookie = function (a, b, c) {
                    (document.cookie = j(a, b, c)), (this.$1[a] = { value: null, updated: Date.now() });
                  };
                  c.getCookie = function (a) {
                    var c = (g || (g = b("performanceNow")))();
                    a = this.$5(a);
                    var d = a.cookie;
                    a = a.hit;
                    var e = 1 / b("CookieCoreLoggingConfig").sampleRateFastStale,
                      f = b("Random").coinflip(e);
                    if (f) {
                      f = (g || (g = b("performanceNow")))() - c;
                      m(e, "fast_stale", f, this.$3, this.$4, a);
                    }
                    return d;
                  };
                  c.$5 = function (a) {
                    var b = Date.now(),
                      c = this.$1[a];
                    if (!c) {
                      if (this.$2 + n < b) {
                        this.$6();
                        return { cookie: this.$5(a).cookie, hit: !1 };
                      }
                      this.$3++;
                      return { cookie: null, hit: !0 };
                    }
                    if (c.updated + n < b) {
                      this.$6();
                      return { cookie: this.$5(a).cookie, hit: !1 };
                    }
                    this.$3++;
                    return { cookie: c.value, hit: !0 };
                  };
                  c.$6 = function () {
                    this.$4++;
                    var a = k().split(";");
                    this.$2 = Date.now();
                    this.$1 = {};
                    for (
                      var a = a,
                        b = Array.isArray(a),
                        c = 0,
                        a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                      ;

                    ) {
                      var d;
                      if (b) {
                        if (c >= a.length) break;
                        d = a[c++];
                      } else {
                        c = a.next();
                        if (c.done) break;
                        d = c.value;
                      }
                      d = d;
                      d = d.match("\\s*([^=]+)=(.*)");
                      if (!d) continue;
                      this.$1[d[1]] = { value: decodeURIComponent(d[2]), updated: this.$2 };
                    }
                  };
                  return a;
                })();
              e.exports = {
                newCookieStore: function () {
                  return b("gkx")("676837") ? new o() : new l();
                },
                CookieCacheForTest: o,
                CookieStoreSlowForTest: l,
              };
            },
            null
          );
          __d(
            "CookieCore",
            ["CookieCoreConfig", "CookieStore"],
            function (a, b, c, d, e, f) {
              var g = /^.*(\.(facebook|messenger|oculus|instagram|facebookcorewwwi|workplace)\..*)$/i,
                h = /_js_(.*)/,
                i;
              function j() {
                i || (i = b("CookieStore").newCookieStore());
                return i;
              }
              function k(a) {
                return window.self != window.top ? !1 : !0;
              }
              var l = {
                set: function (a, b) {
                  if (!o(a)) return;
                  l.setWithoutChecks(a, b, q(a), r(a), p(a), s(a));
                },
                setWithoutChecks: function (a, b, c, d, e, f) {
                  var h = Date.now();
                  if (c != null)
                    if (c > h) c -= h;
                    else if (c == 1) {
                      l.clear(a, d);
                      return;
                    }
                  j().setCookie(h, a, b, d, window.location.hostname.replace(g, "$1"), c, e, f);
                },
                setIfFirstPartyContext: function (a, b) {
                  if (!k(a)) return;
                  l.set(a, b);
                },
                setWithoutChecksIfFirstPartyContext: function (a, b, c, d, e) {
                  if (!k(a)) return;
                  l.setWithoutChecks(a, b, c, d, e);
                },
                clear: function (a, b) {
                  b === void 0 && (b = "/"),
                    (b = b || "/"),
                    j().clearCookie(a, b, window.location.hostname.replace(g, "$1"));
                },
                get: function (a) {
                  return !o(a) ? null : j().getCookie(a);
                },
              };
              function m(a) {
                return {
                  insecure: a.i || !1,
                  path: a.p || "/",
                  ttlSeconds: a.t || 0,
                  sameSite: a.s || "None",
                };
              }
              function n(a) {
                if (b("CookieCoreConfig")[a] !== void 0) return m(b("CookieCoreConfig")[a]);
                a = a.match(h);
                return a && a.length > 1 ? n(a[1]) : null;
              }
              function o(a) {
                return n(a) !== null;
              }
              function p(a) {
                a = n(a);
                return a == null ? !0 : !a.insecure;
              }
              function q(a) {
                a = n(a);
                return a == null ? null : a.ttlSeconds * 1e3;
              }
              function r(a) {
                a = n(a);
                return a == null ? "/" : a.path;
              }
              function s(a) {
                a = n(a);
                return a == null || a.sameSite == null ? null : a.sameSite;
              }
              e.exports = l;
            },
            null
          );
          __d(
            "Cookie",
            ["Bootloader", "CookieConsent", "CookieCore"],
            function (a, b, c, d, e, f) {
              var g;
              function h(a) {
                if ((g || (g = b("CookieConsent"))).isDeferCookies()) {
                  b("Bootloader").loadModules(
                    ["BanzaiODS"],
                    function (b) {
                      b.bumpEntityKey(2966, "defer_cookies", "set." + a);
                    },
                    "Cookie"
                  );
                  return !1;
                }
                return !0;
              }
              function i() {
                return !(g || (g = b("CookieConsent"))).isCookiesBlocked();
              }
              function a(a, c) {
                if (!i() || !h(a)) return;
                b("CookieCore").set(a, c);
              }
              function c(a, c) {
                if (!i()) return;
                b("CookieCore").set(a, c);
              }
              function d(a, c, d, e, f) {
                if (!i() || !h(a)) return;
                b("CookieCore").setWithoutChecks(a, c, d, e, f);
              }
              e.exports = babelHelpers["extends"]({}, b("CookieCore"), {
                set: a,
                setWithoutChecks: d,
                setWithoutCheckingUserConsent_DANGEROUS: c,
              });
            },
            null
          );
          __d(
            "CurrentUser",
            ["Cookie", "CurrentUserInitialData"],
            function (a, b, c, d, e, f) {
              var g,
                h = {
                  getID: function () {
                    return (g || (g = b("CurrentUserInitialData"))).USER_ID;
                  },
                  getAccountID: function () {
                    return (g || (g = b("CurrentUserInitialData"))).ACCOUNT_ID;
                  },
                  getEmployeeWorkUserID: function () {
                    return (g || (g = b("CurrentUserInitialData"))).WORK_USER_ID;
                  },
                  getName: function () {
                    return (g || (g = b("CurrentUserInitialData"))).NAME;
                  },
                  getShortName: function () {
                    return (g || (g = b("CurrentUserInitialData"))).SHORT_NAME;
                  },
                  isLoggedIn: function () {
                    return (g || (g = b("CurrentUserInitialData"))).USER_ID !== "0";
                  },
                  isLoggedInNow: function () {
                    if (!h.isLoggedIn()) return !1;
                    if ((g || (g = b("CurrentUserInitialData"))).IS_INTERN_SITE) return !0;
                    if ((g || (g = b("CurrentUserInitialData"))).IS_WORK_USER) return !0;
                    return (g || (g = b("CurrentUserInitialData"))).ORIGINAL_USER_ID != null &&
                      (g || (g = b("CurrentUserInitialData"))).ORIGINAL_USER_ID != ""
                      ? (g || (g = b("CurrentUserInitialData"))).ORIGINAL_USER_ID ===
                          b("Cookie").get("c_user")
                      : (g || (g = b("CurrentUserInitialData"))).USER_ID === b("Cookie").get("c_user");
                  },
                  isEmployee: function () {
                    return !!(g || (g = b("CurrentUserInitialData"))).IS_EMPLOYEE;
                  },
                  isTestUser: function () {
                    return !!(g || (g = b("CurrentUserInitialData"))).IS_TEST_USER;
                  },
                  hasWorkUser: function () {
                    return !!(g || (g = b("CurrentUserInitialData"))).HAS_WORK_USER;
                  },
                  isWorkUser: function () {
                    return !!(g || (g = b("CurrentUserInitialData"))).IS_WORK_USER;
                  },
                  isGray: function () {
                    return !!(g || (g = b("CurrentUserInitialData"))).IS_GRAY;
                  },
                  isUnderage: function () {
                    return !!(g || (g = b("CurrentUserInitialData"))).IS_UNDERAGE;
                  },
                  isMessengerOnlyUser: function () {
                    return !!(g || (g = b("CurrentUserInitialData"))).IS_MESSENGER_ONLY_USER;
                  },
                  isDeactivatedAllowedOnMessenger: function () {
                    return !!(g || (g = b("CurrentUserInitialData"))).IS_DEACTIVATED_ALLOWED_ON_MESSENGER;
                  },
                  getAppID: function () {
                    return (g || (g = b("CurrentUserInitialData"))).APP_ID;
                  },
                };
              e.exports = h;
            },
            null
          );
          __d(
            "BanzaiUtils",
            ["BanzaiConsts", "CurrentUser", "FBLogger", "WebSession", "performanceAbsoluteNow"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g,
                h,
                i = {
                  canSend: function (a) {
                    return (
                      a[2] >=
                      (g || (g = b("performanceAbsoluteNow")))() - (h || (h = b("BanzaiConsts"))).EXPIRY
                    );
                  },
                  filterPost: function (a, c, d, e) {
                    if (e.overlimit) return !0;
                    if (
                      !e.sendMinimumOnePost &&
                      a[4] + e.currentSize > (h || (h = b("BanzaiConsts"))).BATCH_SIZE_LIMIT
                    )
                      return !0;
                    var f = a.__meta;
                    if (
                      (f.status != null && f.status >= (h || (h = b("BanzaiConsts"))).POST_SENT) ||
                      !i.canSend(a)
                    )
                      return !1;
                    if (f.status != null && f.status >= (h || (h = b("BanzaiConsts"))).POST_INFLIGHT)
                      return !0;
                    var g = f.compress != null ? f.compress : !0,
                      j =
                        (f.webSessionId != null ? f.webSessionId : "null") +
                        (f.userID != null ? f.userID : "null") +
                        (f.appID != null ? f.appID : "null") +
                        (g ? "compress" : ""),
                      k = e.wadMap.get(j);
                    k ||
                      ((k = {
                        app_id: f.appID,
                        needs_compression: g,
                        posts: [],
                        user: f.userID,
                        webSessionId: f.webSessionId,
                      }),
                      e.wadMap.set(j, k),
                      c.push(k));
                    f.status = (h || (h = b("BanzaiConsts"))).POST_INFLIGHT;
                    Array.isArray(k.posts)
                      ? k.posts.push(a)
                      : b("FBLogger")("banzai").mustfix("Posts were a string instead of array");
                    d.push(a);
                    e.currentSize += a[4];
                    e.currentSize >= (h || (h = b("BanzaiConsts"))).BATCH_SIZE_LIMIT && (e.overlimit = !0);
                    return e.keepRetryable && Boolean(f.retry);
                  },
                  resetPostStatus: function (a) {
                    a.__meta.status = (h || (h = b("BanzaiConsts"))).POST_READY;
                  },
                  retryPost: function (a, c, d) {
                    var e = a;
                    e.__meta.status = (h || (h = b("BanzaiConsts"))).POST_READY;
                    e[3] = (e[3] || 0) + 1;
                    e.__meta.retry !== !0 && c >= 400 && c < 600 && d.push(a);
                  },
                  wrapData: function (a, c, d, e, f) {
                    d = [a, c, d, 0, (a = f) != null ? a : c ? JSON.stringify(c).length : 0];
                    d.__meta = {
                      appID: b("CurrentUser").getAppID(),
                      retry: e === !0,
                      status: (h || (h = b("BanzaiConsts"))).POST_READY,
                      userID: b("CurrentUser").getID(),
                      webSessionId: b("WebSession").getId(),
                    };
                    return d;
                  },
                };
              e.exports = i;
            },
            null
          );
          __d(
            "FBJSON",
            [],
            function (a, b, c, d, e, f) {
              e.exports = { parse: JSON.parse, stringify: JSON.stringify };
            },
            null
          );
          __d(
            "EventEmitterWithValidation",
            ["BaseEventEmitter"],
            function (a, b, c, d, e, f) {
              "use strict";
              a = (function (a) {
                babelHelpers.inheritsLoose(b, a);
                function b(b, c) {
                  var d;
                  d = a.call(this) || this;
                  d.$EventEmitterWithValidation1 = Object.keys(b);
                  d.$EventEmitterWithValidation2 = Boolean(c);
                  return d;
                }
                var c = b.prototype;
                c.emit = function (b) {
                  if (this.$EventEmitterWithValidation1.indexOf(b) === -1) {
                    if (this.$EventEmitterWithValidation2) return;
                    throw new TypeError(g(b, this.$EventEmitterWithValidation1));
                  }
                  return a.prototype.emit.apply(this, arguments);
                };
                return b;
              })(b("BaseEventEmitter"));
              function g(a, b) {
                a = 'Unknown event type "' + a + '". ';
                a += "Known event types: " + b.join(", ") + ".";
                return a;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "mixInEventEmitter",
            ["invariant", "EventEmitterWithHolding", "EventEmitterWithValidation", "EventHolder"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              function a(a, b, c) {
                b || g(0, 3159);
                var d = a.prototype || a;
                d.__eventEmitter && g(0, 3160);
                a = a.constructor;
                a && (a === Object || a === Function || g(0, 3161));
                d.__types = babelHelpers["extends"]({}, d.__types, b);
                d.__ignoreUnknownEvents = Boolean(c);
                Object.assign(d, h);
              }
              var h = {
                emit: function (a, b, c, d, e, f, g) {
                  return this.__getEventEmitter().emit(a, b, c, d, e, f, g);
                },
                emitAndHold: function (a, b, c, d, e, f, g) {
                  return this.__getEventEmitter().emitAndHold(a, b, c, d, e, f, g);
                },
                addListener: function (a, b, c) {
                  return this.__getEventEmitter().addListener(a, b, c);
                },
                once: function (a, b, c) {
                  return this.__getEventEmitter().once(a, b, c);
                },
                addRetroactiveListener: function (a, b, c) {
                  return this.__getEventEmitter().addRetroactiveListener(a, b, c);
                },
                listeners: function (a) {
                  return this.__getEventEmitter().listeners(a);
                },
                removeAllListeners: function () {
                  this.__getEventEmitter().removeAllListeners();
                },
                removeCurrentListener: function () {
                  this.__getEventEmitter().removeCurrentListener();
                },
                releaseHeldEventType: function (a) {
                  this.__getEventEmitter().releaseHeldEventType(a);
                },
                __getEventEmitter: function () {
                  if (!this.__eventEmitter) {
                    var a = new (b("EventEmitterWithValidation"))(this.__types, this.__ignoreUnknownEvents),
                      c = new (b("EventHolder"))();
                    this.__eventEmitter = new (b("EventEmitterWithHolding"))(a, c);
                  }
                  return this.__eventEmitter;
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "pageID",
            ["WebSession"],
            function (a, b, c, d, e, f) {
              "use strict";
              e.exports = b("WebSession").getPageId_DO_NOT_USE();
            },
            null
          );
          __d(
            "NavigationMetricsCore",
            ["mixInEventEmitter", "pageID"],
            function (a, b, c, d, e, f) {
              var g = { NAVIGATION_DONE: "NAVIGATION_DONE", EVENT_OCCURRED: "EVENT_OCCURRED" },
                h = {
                  tti: "tti",
                  e2e: "e2e",
                  all_pagelets_loaded: "all_pagelets_loaded",
                  all_pagelets_displayed: "all_pagelets_displayed",
                },
                i = 0,
                j = {},
                k = (function () {
                  "use strict";
                  function a() {
                    (this.eventTimings = {
                      tti: null,
                      e2e: null,
                      all_pagelets_loaded: null,
                      all_pagelets_displayed: null,
                    }),
                      (this.lid = b("pageID") + ":" + i++),
                      (this.extras = {});
                  }
                  var c = a.prototype;
                  c.getLID = function () {
                    return this.lid;
                  };
                  c.setRequestStart = function (a) {
                    this.start = a;
                    return this;
                  };
                  c.setTTI = function (a) {
                    this.eventTimings.tti = a;
                    this.$1(h.tti, a);
                    return this;
                  };
                  c.setE2E = function (a) {
                    this.eventTimings.e2e = a;
                    this.$1(h.e2e, a);
                    return this;
                  };
                  c.setExtra = function (a, b) {
                    this.extras[a] = b;
                    return this;
                  };
                  c.setDisplayDone = function (a) {
                    this.eventTimings.all_pagelets_displayed = a;
                    this.setExtra("all_pagelets_displayed", a);
                    this.$1(h.all_pagelets_displayed, a);
                    return this;
                  };
                  c.setAllPageletsLoaded = function (a) {
                    this.eventTimings.all_pagelets_loaded = a;
                    this.setExtra("all_pagelets_loaded", a);
                    this.$1(h.all_pagelets_loaded, a);
                    return this;
                  };
                  c.setServerLID = function (a) {
                    this.serverLID = a;
                    return this;
                  };
                  c.$1 = function (a, b) {
                    var c = {};
                    j != null &&
                      this.serverLID != null &&
                      j[this.serverLID] != null &&
                      (c = j[this.serverLID]);
                    c = babelHelpers["extends"]({}, c, { event: a, timestamp: b });
                    l.emitAndHold(g.EVENT_OCCURRED, this.serverLID, c);
                    return this;
                  };
                  c.doneNavigation = function () {
                    var a = babelHelpers["extends"](
                      { start: this.start, extras: this.extras },
                      this.eventTimings
                    );
                    if (this.serverLID && j[this.serverLID]) {
                      var b = this.serverLID;
                      Object.assign(a, j[b]);
                      delete j[b];
                    }
                    l.emitAndHold(g.NAVIGATION_DONE, this.lid, a);
                  };
                  return a;
                })(),
                l = {
                  Events: g,
                  postPagelet: function (a, b, c) {},
                  siteInit: function (a) {
                    a(k);
                  },
                  setPage: function (a) {
                    if (!a.serverLID) return;
                    j[a.serverLID] = {
                      page: a.page,
                      pageType: a.page_type,
                      pageURI: a.page_uri,
                      serverLID: a.serverLID,
                    };
                  },
                  getFullPageLoadLid: function () {
                    throw new Error("getFullPageLoadLid is not implemented on this site");
                  },
                };
              b("mixInEventEmitter")(l, g);
              e.exports = l;
            },
            null
          );
          __d(
            "NavigationMetrics",
            ["Arbiter", "BigPipeInstance", "NavigationMetricsCore", "PageEvents", "performance"],
            function (a, b, c, d, e, f) {
              var g,
                h = "0";
              b("NavigationMetricsCore").getFullPageLoadLid = function () {
                return h;
              };
              b("NavigationMetricsCore").siteInit(function (a) {
                var c = new a(),
                  d = !0;
                b("Arbiter").subscribe(b("BigPipeInstance").Events.init, function (e, f) {
                  var g = d ? c : new a();
                  d && (h = f.lid);
                  d = !1;
                  g.setServerLID(f.lid);
                  e = f.arbiter;
                  e.subscribe(b("BigPipeInstance").Events.tti, function (a, b) {
                    a = b.ts;
                    g.setTTI(a);
                  });
                  e.subscribe(b("PageEvents").AJAXPIPE_SEND, function (a, b) {
                    a = b.ts;
                    g.setRequestStart(a);
                  });
                  e.subscribe(b("PageEvents").AJAXPIPE_ONLOAD, function (a, b) {
                    a = b.ts;
                    g.setE2E(a).doneNavigation();
                  });
                  e.subscribe(b("BigPipeInstance").Events.displayed, function (a, b) {
                    a = b.ts;
                    g.setDisplayDone(a);
                  });
                  e.subscribe(b("BigPipeInstance").Events.loaded, function (a, b) {
                    a = b.ts;
                    g.setAllPageletsLoaded(a);
                  });
                });
                b("Arbiter").subscribe(b("PageEvents").BIGPIPE_ONLOAD, function (a, e) {
                  a = e.ts;
                  d = !1;
                  c.setRequestStart(
                    (g || (g = b("performance"))).timing &&
                      (g || (g = b("performance"))).timing.navigationStart
                  )
                    .setE2E(a)
                    .doneNavigation();
                });
              });
              e.exports = b("NavigationMetricsCore");
            },
            null
          );
          __d(
            "cancelIdleCallback",
            ["requireCond", "cr:692209"],
            function (a, b, c, d, e, f) {
              e.exports = b("cr:692209");
            },
            null
          );
          __d(
            "requestIdleCallbackAcrossTransitions",
            ["IdleCallbackImplementation", "TimerStorage", "TimeSlice"],
            function (a, b, c, d, e, f) {
              var g = a.requestIdleCallback || b("IdleCallbackImplementation").requestIdleCallback,
                h = b("TimerStorage").IDLE_CALLBACK;
              e.exports = function (c, d) {
                c = b("TimeSlice").guard(c, "requestIdleCallback", {
                  propagationType: b("TimeSlice").PropagationType.CONTINUATION,
                  registerCallStack: !0,
                });
                d = g.call(a, c, d);
                var e = h + String(d);
                b("TimeSlice").registerForCancelling(e, c);
                return d;
              };
            },
            null
          );
          __d(
            "SetIdleTimeoutAcrossTransitions",
            [
              "NavigationMetrics",
              "cancelIdleCallback",
              "clearTimeout",
              "nullthrows",
              "requestIdleCallbackAcrossTransitions",
              "setTimeoutAcrossTransitions",
            ],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = !1,
                h = new Map();
              c = {
                start: function (a, c) {
                  if (g) {
                    var d = b("setTimeoutAcrossTransitions")(function () {
                      var c = b("requestIdleCallbackAcrossTransitions")(function () {
                        a(), h["delete"](c);
                      });
                      h.set(d, c);
                    }, c);
                    return d;
                  } else return b("setTimeoutAcrossTransitions")(a, c);
                },
                clear: function (a) {
                  b("clearTimeout")(a),
                    h.has(a) && (b("cancelIdleCallback")(b("nullthrows")(h.get(a))), h["delete"](a));
                },
              };
              b("NavigationMetrics").addRetroactiveListener(
                b("NavigationMetrics").Events.EVENT_OCCURRED,
                function (b, c) {
                  c.event === "all_pagelets_loaded" && (g = !!a.requestIdleCallback);
                }
              );
              e.exports = c;
            },
            null
          );
          __d(
            "WebStorageMutex",
            ["WebStorage", "clearTimeout", "pageID", "setTimeout"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g,
                h = null,
                i = !1,
                j = b("pageID");
              function k() {
                i || ((i = !0), (h = (g || (g = b("WebStorage"))).getLocalStorage()));
                return h;
              }
              a = (function () {
                function a(a) {
                  this.name = a;
                }
                a.testSetPageID = function (a) {
                  j = a;
                };
                var c = a.prototype;
                c.$2 = function () {
                  var a,
                    b = k();
                  if (!b) return j;
                  b = b.getItem("mutex_" + this.name);
                  b = ((a = b) != null ? a : "").split(":");
                  return b && parseInt(b[1], 10) >= Date.now() ? b[0] : null;
                };
                c.$3 = function (a) {
                  var c = k();
                  if (!c) return;
                  a = a == null ? 1e3 : a;
                  a = Date.now() + a;
                  (g || (g = b("WebStorage"))).setItemGuarded(c, "mutex_" + this.name, j + ":" + a);
                };
                c.hasLock = function () {
                  return this.$2() === j;
                };
                c.lock = function (a, c, d) {
                  var e = this;
                  this.$1 && b("clearTimeout")(this.$1);
                  j === (this.$2() || j) && this.$3(d);
                  this.$1 = b("setTimeout")(function () {
                    e.$1 = null;
                    var b = e.hasLock() ? a : c;
                    b && b(e);
                  }, 0);
                };
                c.unlock = function () {
                  this.$1 && b("clearTimeout")(this.$1);
                  var a = k();
                  a && this.hasLock() && a.removeItem("mutex_" + this.name);
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "isInIframe",
            [],
            function (a, b, c, d, e, f) {
              var g = window != window.top;
              function a() {
                return g;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "BanzaiStorage",
            [
              "BanzaiConsts",
              "BanzaiUtils",
              "CurrentUser",
              "FBJSON",
              "SetIdleTimeoutAcrossTransitions",
              "WebSession",
              "WebStorage",
              "WebStorageMutex",
              "isInIframe",
              "performanceAbsoluteNow",
            ],
            function (a, b, c, d, e, f) {
              "use strict";
              var g,
                h,
                i,
                j = "bz:",
                k = b("isInIframe")(),
                l,
                m = !1,
                n = null;
              function o() {
                var a = "check_quota";
                try {
                  var b = p();
                  if (!b) return !1;
                  b.setItem(a, a);
                  b.removeItem(a);
                  return !0;
                } catch (a) {
                  return !1;
                }
              }
              function p() {
                m || ((m = !0), (l = (g || (g = b("WebStorage"))).getLocalStorage()));
                return l;
              }
              a = {
                flush: function (a) {
                  if (k) return;
                  var c = p();
                  if (c) {
                    n == null &&
                      (n = parseInt(c.getItem((h || (h = b("BanzaiConsts"))).LAST_STORAGE_FLUSH), 10));
                    var d =
                      n &&
                      (i || (i = b("performanceAbsoluteNow")))() - n >=
                        (h || (h = b("BanzaiConsts"))).STORAGE_FLUSH_INTERVAL;
                    d && a();
                    (d || !n) &&
                      ((n = (i || (i = b("performanceAbsoluteNow")))()),
                      (g || (g = b("WebStorage"))).setItemGuarded(
                        c,
                        (h || (h = b("BanzaiConsts"))).LAST_STORAGE_FLUSH,
                        n.toString()
                      ));
                  }
                },
                restore: function (a) {
                  if (k) return;
                  var c = p();
                  if (!c) return;
                  var d = function (d) {
                    var e = [];
                    for (var f = 0; f < c.length; f++) {
                      var g = c.key(f);
                      typeof g === "string" && g.indexOf(j) === 0 && g.indexOf("bz:__") !== 0 && e.push(g);
                    }
                    e.forEach(function (d) {
                      var e = c.getItem(d);
                      c.removeItem(d);
                      if (e == null || e === "") return;
                      d = b("FBJSON").parse(e);
                      d.forEach(function (c) {
                        if (!c) return;
                        var d = (c.__meta = c.pop()),
                          e = b("BanzaiUtils").canSend(c);
                        if (!e) return;
                        e = b("CurrentUser").getID();
                        (d.userID === e || e === "0") && (b("BanzaiUtils").resetPostStatus(c), a(c));
                      });
                    });
                    d && d.unlock();
                  };
                  o()
                    ? new (b("WebStorageMutex"))("banzai").lock(d)
                    : b("SetIdleTimeoutAcrossTransitions").start(d, 0);
                },
                store: function (a) {
                  if (k) return;
                  var c = p(),
                    d = a.filter(function (a) {
                      var c = a.__meta.status === (h || (h = b("BanzaiConsts"))).POST_SENT;
                      if (!c) return !0;
                      c =
                        a[0] === (h || (h = b("BanzaiConsts"))).ODS_ROUTE &&
                        typeof a[1] === "object" &&
                        (Boolean(a[1]["2887"]) || Boolean(a[1]["2979"]));
                      return !c;
                    });
                  if (!c || d.length <= 0) return;
                  d = d.map(function (a) {
                    return [a[0], a[1], a[2], a[3] || 0, a[4], a.__meta];
                  });
                  a.splice(0, a.length);
                  (g || (g = b("WebStorage"))).setItemGuarded(
                    c,
                    j + b("WebSession").getId() + "." + (i || (i = b("performanceAbsoluteNow")))(),
                    b("FBJSON").stringify(d)
                  );
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "QueryString",
            [],
            function (a, b, c, d, e, f) {
              function a(a) {
                var b = [];
                ES(ES("Object", "keys", !1, a).sort(), "forEach", !0, function (c) {
                  var d = a[c];
                  if (d === void 0) return;
                  if (d === null) {
                    b.push(c);
                    return;
                  }
                  b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d));
                });
                return b.join("&");
              }
              function b(a, b) {
                b === void 0 && (b = !1);
                var c = {};
                if (a === "") return c;
                a = a.split("&");
                for (var d = 0; d < a.length; d++) {
                  var e = a[d].split("=", 2),
                    f = decodeURIComponent(e[0]);
                  if (b && Object.prototype.hasOwnProperty.call(c, f))
                    throw new URIError("Duplicate key: " + f);
                  c[f] = e.length === 2 ? decodeURIComponent(e[1]) : null;
                }
                return c;
              }
              function c(a, b) {
                return (
                  a +
                  (ES(a, "indexOf", !0, "?") !== -1 ? "&" : "?") +
                  (typeof b === "string" ? b : g.encode(b))
                );
              }
              var g = { encode: a, decode: b, appendToUrl: c };
              e.exports = g;
            },
            null
          );
          __d(
            "Run",
            ["requireCond", "cr:925100"],
            function (a, b, c, d, e, f) {
              "use strict";
              e.exports = b("cr:925100");
            },
            null
          );
          __d(
            "VersionRange",
            ["invariant"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h = /\./,
                i = /\|\|/,
                j = /\s+\-\s+/,
                k = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
                l = /^(\d*)(.*)/;
              function m(a, b) {
                a = a.split(i);
                if (a.length > 1)
                  return a.some(function (a) {
                    return D.contains(a, b);
                  });
                else return n(a[0].trim(), b);
              }
              function n(a, b) {
                a = a.split(j);
                (a.length > 0 && a.length <= 2) || g(0, 3072);
                if (a.length === 1) return o(a[0], b);
                else {
                  var c = a[0];
                  a = a[1];
                  (x(c) && x(a)) || g(0, 3073);
                  return o(">=" + c, b) && o("<=" + a, b);
                }
              }
              function o(a, b) {
                a = a.trim();
                if (a === "") return !0;
                b = b.split(h);
                a = v(a);
                var c = a.modifier;
                a = a.rangeComponents;
                switch (c) {
                  case "<":
                    return p(b, a);
                  case "<=":
                    return q(b, a);
                  case ">=":
                    return s(b, a);
                  case ">":
                    return t(b, a);
                  case "~":
                  case "~>":
                    return u(b, a);
                  default:
                    return r(b, a);
                }
              }
              function p(a, b) {
                return C(a, b) === -1;
              }
              function q(a, b) {
                a = C(a, b);
                return a === -1 || a === 0;
              }
              function r(a, b) {
                return C(a, b) === 0;
              }
              function s(a, b) {
                a = C(a, b);
                return a === 1 || a === 0;
              }
              function t(a, b) {
                return C(a, b) === 1;
              }
              function u(a, b) {
                var c = b.slice();
                b = b.slice();
                b.length > 1 && b.pop();
                var d = b.length - 1,
                  e = parseInt(b[d], 10);
                w(e) && (b[d] = e + 1 + "");
                return s(a, c) && p(a, b);
              }
              function v(a) {
                a = a.split(h);
                var b = a[0].match(k);
                b || g(0, 3074);
                return { modifier: b[1], rangeComponents: [b[2]].concat(a.slice(1)) };
              }
              function w(a) {
                return !isNaN(a) && isFinite(a);
              }
              function x(a) {
                return !v(a).modifier;
              }
              function y(a, b) {
                for (var c = a.length; c < b; c++) a[c] = "0";
              }
              function z(a, b) {
                a = a.slice();
                b = b.slice();
                y(a, b.length);
                for (var c = 0; c < b.length; c++) {
                  var d = b[c].match(/^[x*]$/i);
                  if (d) {
                    b[c] = a[c] = "0";
                    if (d[0] === "*" && c === b.length - 1) for (var d = c; d < a.length; d++) a[d] = "0";
                  }
                }
                y(b, a.length);
                return [a, b];
              }
              function A(a, b) {
                var c = a.match(l),
                  d = b.match(l);
                c = c && c[1];
                d = d && d[1];
                c = parseInt(c, 10);
                d = parseInt(d, 10);
                if (w(c) && w(d) && c !== d) return B(c, d);
                else return B(a, b);
              }
              function B(a, b) {
                typeof a === typeof b || g(0, 3075);
                if (typeof a === "string" && typeof b === "string")
                  if (a > b) return 1;
                  else if (a < b) return -1;
                  else return 0;
                if (typeof a === "number" && typeof b === "number")
                  if (a > b) return 1;
                  else if (a < b) return -1;
                  else return 0;
                typeof a === typeof b || g(0, 3075);
                return 0;
              }
              function C(a, b) {
                a = z(a, b);
                b = a[0];
                a = a[1];
                for (var c = 0; c < a.length; c++) {
                  var d = A(b[c], a[c]);
                  if (d) return d;
                }
                return 0;
              }
              var D = {
                contains: function (a, b) {
                  return m(a.trim(), b.trim());
                },
              };
              e.exports = D;
            },
            null
          );
          __d(
            "mapObject",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              function g(a, b, c) {
                if (!a) return null;
                var d = {};
                Object.keys(a).forEach(function (e) {
                  d[e] = b.call(c, a[e], e, a);
                });
                return d;
              }
              function a(a, b, c) {
                return g(a, b, c);
              }
              function b(a, b, c) {
                return g(a, b, c);
              }
              g.untyped = a;
              g.shape = b;
              e.exports = g;
            },
            null
          );
          __d(
            "UserAgent",
            ["UserAgentData", "VersionRange", "mapObject", "memoizeStringOnly"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g;
              function h(a, c, d, e) {
                if (a === d) return !0;
                if (!d.startsWith(a)) return !1;
                d = d.slice(a.length);
                if (c != null) {
                  d = e ? e(d) : d;
                  return b("VersionRange").contains(d, c);
                }
                return !1;
              }
              function i(a) {
                return b("UserAgentData").platformName === "Windows" ? a.replace(/^\s*NT/, "") : a;
              }
              a = {
                isBrowser: function (a) {
                  return h(b("UserAgentData").browserName, b("UserAgentData").browserFullVersion, a);
                },
                isBrowserArchitecture: function (a) {
                  return h(b("UserAgentData").browserArchitecture, null, a);
                },
                isDevice: function (a) {
                  return h(b("UserAgentData").deviceName, null, a);
                },
                isEngine: function (a) {
                  return h(b("UserAgentData").engineName, b("UserAgentData").engineVersion, a);
                },
                isPlatform: function (a) {
                  return h(b("UserAgentData").platformName, b("UserAgentData").platformFullVersion, a, i);
                },
                isPlatformArchitecture: function (a) {
                  return h(b("UserAgentData").platformArchitecture, null, a);
                },
              };
              e.exports = (g || b("mapObject"))(a, b("memoizeStringOnly"));
            },
            null
          );
          __d(
            "getCrossOriginTransport",
            ["invariant", "ExecutionEnvironment", "ex"],
            function (a, b, c, d, e, f, g) {
              function h() {
                if (!b("ExecutionEnvironment").canUseDOM)
                  throw new Error(
                    b("ex")(
                      "getCrossOriginTransport: %s",
                      "Cross origin transport unavailable in the server environment."
                    )
                  );
                try {
                  var a = new XMLHttpRequest();
                  !("withCredentials" in a) &&
                    typeof XDomainRequest !== "undefined" &&
                    (a = new XDomainRequest());
                  return a;
                } catch (a) {
                  throw new Error(b("ex")("getCrossOriginTransport: %s", a.message));
                }
              }
              h.withCredentials = function () {
                var a = h();
                "withCredentials" in a || g(0, 5150);
                var b = a.open;
                a.open = function () {
                  b.apply(this, arguments), (this.withCredentials = !0);
                };
                return a;
              };
              e.exports = h;
            },
            null
          );
          __d(
            "ZeroRewrites",
            ["URI", "ZeroRewriteRules", "getCrossOriginTransport", "getSameOriginTransport", "isFacebookURI"],
            function (a, b, c, d, e, f) {
              var g,
                h = {
                  rewriteURI: function (a) {
                    if (!b("isFacebookURI")(a) || h._isWhitelisted(a)) return a;
                    var c = h._getRewrittenSubdomain(a);
                    c !== null && c !== void 0 && (a = a.setSubdomain(c));
                    return a;
                  },
                  getTransportBuilderForURI: function (a) {
                    return h.isRewritten(a)
                      ? b("getCrossOriginTransport").withCredentials
                      : b("getSameOriginTransport");
                  },
                  isRewriteSafe: function (a) {
                    if (
                      Object.keys(b("ZeroRewriteRules").rewrite_rules).length === 0 ||
                      !b("isFacebookURI")(a)
                    )
                      return !1;
                    var c = h._getCurrentURI().getDomain(),
                      d = new (g || (g = b("URI")))(a).qualify().getDomain();
                    return c === d || h.isRewritten(a);
                  },
                  isRewritten: function (a) {
                    a = a.getQualifiedURI();
                    if (
                      Object.keys(b("ZeroRewriteRules").rewrite_rules).length === 0 ||
                      !b("isFacebookURI")(a) ||
                      h._isWhitelisted(a)
                    )
                      return !1;
                    var c = a.getSubdomain(),
                      d = h._getCurrentURI(),
                      e = h._getRewrittenSubdomain(d);
                    return a.getDomain() !== d.getDomain() && c === e;
                  },
                  _isWhitelisted: function (a) {
                    a = a.getPath();
                    a.endsWith("/") || (a += "/");
                    return b("ZeroRewriteRules").whitelist && b("ZeroRewriteRules").whitelist[a] === 1;
                  },
                  _getRewrittenSubdomain: function (a) {
                    a = a.getQualifiedURI().getSubdomain();
                    return b("ZeroRewriteRules").rewrite_rules[a];
                  },
                  _getCurrentURI: function () {
                    return new (g || (g = b("URI")))("/").qualify();
                  },
                };
              e.exports = h;
            },
            null
          );
          __d(
            "once",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              function a(a) {
                var b = g(a);
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b;
              }
              function g(a) {
                var b = a,
                  c;
                a = function () {
                  if (b) {
                    for (var a = arguments.length, d = new Array(a), e = 0; e < a; e++) d[e] = arguments[e];
                    c = b.apply(this, d);
                    b = null;
                  }
                  return c;
                };
                return a;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "BanzaiAdapter",
            [
              "invariant",
              "Arbiter",
              "BanzaiConsts",
              "BanzaiStorage",
              "CurrentUser",
              "ErrorGuard",
              "QueryString",
              "Run",
              "TimeSlice",
              "URI",
              "UserAgent",
              "ZeroRewrites",
              "getAsyncParams",
              "gkx",
              "once",
              "BanzaiConfig",
            ],
            function (a, b, c, d, e, f, g) {
              var h,
                i,
                j,
                k = [],
                l = new (b("Arbiter"))(),
                m = "/ajax/bz",
                n = "POST",
                o = {
                  config: b("BanzaiConfig"),
                  useBeacon: !0,
                  getEndPointUrl: function (a) {
                    a = b("getAsyncParams")(n);
                    a.bz_orig = "blue";
                    a = b("QueryString").appendToUrl(m, a);
                    a.length <= 2e3 || g(0, 21850, a);
                    return a;
                  },
                  getStorage: function () {
                    return b("BanzaiStorage");
                  },
                  getUserID: function () {
                    return b("CurrentUser").getID();
                  },
                  inform: function (a) {
                    l.inform(a);
                  },
                  subscribe: function (a, b) {
                    return l.subscribe(a, b);
                  },
                  wrapInTimeSlice: function (a, c) {
                    return b("TimeSlice").guard(
                      function () {
                        a();
                      },
                      c,
                      { propagationType: b("TimeSlice").PropagationType.ORPHAN }
                    );
                  },
                  cleanup: function () {
                    var a = k;
                    k = [];
                    a.forEach(function (a) {
                      a.readyState < 4 && a.abort();
                    });
                  },
                  preferredCompressionMethod: b("once")(function () {
                    return (h || (h = b("ErrorGuard"))).applyWithGuard(
                      function () {
                        return b("gkx")("1278639");
                      },
                      null,
                      []
                    )
                      ? "snappy"
                      : "snappy_base64";
                  }),
                  readyToSend: function () {
                    return b("UserAgent").isBrowser("IE <= 8") || navigator.onLine;
                  },
                  send: function (a, c, d, e) {
                    var f = o.getEndPointUrl(!1);
                    f = b("ZeroRewrites").rewriteURI(new (i || (i = b("URI")))(f));
                    var g = b("ZeroRewrites").getTransportBuilderForURI(f)();
                    g.open(n, f.toString(), !0);
                    g.onreadystatechange = function () {
                      if (g.readyState >= 4) {
                        var a = k.indexOf(g);
                        a >= 0 && k.splice(a, 1);
                        try {
                          a = g.status;
                        } catch (b) {
                          a = 0;
                        }
                        a == 200
                          ? (c && c(), e || o.inform((j || (j = b("BanzaiConsts"))).OK))
                          : (d && d(a), e || o.inform((j || (j = b("BanzaiConsts"))).ERROR));
                      }
                    };
                    k.push(g);
                    g.send(a, !1);
                  },
                  setHooks: function (a) {},
                  setUnloadHook: function (a) {
                    b("Run").onAfterUnload(a._unload);
                  },
                  onUnload: function (a) {
                    b("Run").onAfterUnload(a);
                  },
                  isOkToSendViaBeacon: function () {
                    return !0;
                  },
                };
              e.exports = o;
            },
            null
          );
          /**
           * License: https://www.facebook.com/legal/license/WRsJ32R7YJG/
           */
          __d(
            "SnappyCompress",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              function g() {
                return typeof process === "object" &&
                  typeof process.versions === "object" &&
                  typeof process.versions.node !== "undefined"
                  ? !0
                  : !1;
              }
              function h(a) {
                return a instanceof Uint8Array && (!g() || !Buffer.isBuffer(a));
              }
              function i(a) {
                return a instanceof ArrayBuffer;
              }
              function j(a) {
                return !g() ? !1 : Buffer.isBuffer(a);
              }
              var k = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
              function a(a) {
                if (!h(a) && !i(a) && !j(a)) throw new TypeError(k);
                var b = !1,
                  c = !1;
                h(a) ? (b = !0) : i(a) && ((c = !0), (a = new Uint8Array(a)));
                a = new A(a);
                var d = a.readUncompressedLength();
                if (d === -1) throw new Error("Invalid Snappy bitstream");
                if (b) {
                  b = new Uint8Array(d);
                  if (!a.uncompressToBuffer(b)) throw new Error("Invalid Snappy bitstream");
                } else if (c) {
                  b = new ArrayBuffer(d);
                  c = new Uint8Array(b);
                  if (!a.uncompressToBuffer(c)) throw new Error("Invalid Snappy bitstream");
                } else {
                  b = Buffer.alloc(d);
                  if (!a.uncompressToBuffer(b)) throw new Error("Invalid Snappy bitstream");
                }
                return b;
              }
              function b(a) {
                if (!h(a) && !i(a) && !j(a)) throw new TypeError(k);
                var b = !1,
                  c = !1;
                h(a) ? (b = !0) : i(a) && ((c = !0), (a = new Uint8Array(a)));
                a = new x(a);
                var d = a.maxCompressedLength(),
                  e,
                  f,
                  g;
                b
                  ? ((e = new Uint8Array(d)), (g = a.compressToBuffer(e)))
                  : c
                  ? ((e = new ArrayBuffer(d)), (f = new Uint8Array(e)), (g = a.compressToBuffer(f)))
                  : ((e = Buffer.alloc(d)), (g = a.compressToBuffer(e)));
                if (!e.slice) {
                  f = new Uint8Array(Array.prototype.slice.call(e, 0, g));
                  if (b) return f;
                  else if (c) return f.buffer;
                  else throw new Error("not implemented");
                }
                return e.slice(0, g);
              }
              c = 16;
              var l = 1 << c,
                m = 14,
                n = new Array(m + 1);
              function o(a, b) {
                return (a * 506832829) >>> b;
              }
              function p(a, b) {
                return a[b] + (a[b + 1] << 8) + (a[b + 2] << 16) + (a[b + 3] << 24);
              }
              function q(a, b, c) {
                return (
                  a[b] === a[c] && a[b + 1] === a[c + 1] && a[b + 2] === a[c + 2] && a[b + 3] === a[c + 3]
                );
              }
              function r(a, b, c, d, e) {
                var f;
                for (f = 0; f < e; f++) c[d + f] = a[b + f];
              }
              function s(a, b, c, d, e) {
                c <= 60
                  ? ((d[e] = (c - 1) << 2), (e += 1))
                  : c < 256
                  ? ((d[e] = 60 << 2), (d[e + 1] = c - 1), (e += 2))
                  : ((d[e] = 61 << 2), (d[e + 1] = (c - 1) & 255), (d[e + 2] = (c - 1) >>> 8), (e += 3));
                r(a, b, d, e, c);
                return e + c;
              }
              function t(a, b, c, d) {
                if (d < 12 && c < 2048) {
                  a[b] = 1 + ((d - 4) << 2) + ((c >>> 8) << 5);
                  a[b + 1] = c & 255;
                  return b + 2;
                } else {
                  a[b] = 2 + ((d - 1) << 2);
                  a[b + 1] = c & 255;
                  a[b + 2] = c >>> 8;
                  return b + 3;
                }
              }
              function u(a, b, c, d) {
                while (d >= 68) (b = t(a, b, c, 64)), (d -= 64);
                d > 64 && ((b = t(a, b, c, 60)), (d -= 60));
                return t(a, b, c, d);
              }
              function v(a, b, c, d, e) {
                var f = 1;
                while (1 << f <= c && f <= m) f += 1;
                f -= 1;
                var g = 32 - f;
                typeof n[f] === "undefined" && (n[f] = new Uint16Array(1 << f));
                f = n[f];
                var h;
                for (h = 0; h < f.length; h++) f[h] = 0;
                h = b + c;
                var i = b,
                  j = b,
                  k,
                  l,
                  r,
                  t,
                  v,
                  w = !0,
                  x = 15;
                if (c >= x) {
                  c = h - x;
                  b += 1;
                  x = o(p(a, b), g);
                  while (w) {
                    t = 32;
                    l = b;
                    do {
                      b = l;
                      k = x;
                      v = t >>> 5;
                      t += 1;
                      l = b + v;
                      if (b > c) {
                        w = !1;
                        break;
                      }
                      x = o(p(a, l), g);
                      r = i + f[k];
                      f[k] = b - i;
                    } while (!q(a, b, r));
                    if (!w) break;
                    e = s(a, j, b - j, d, e);
                    do {
                      v = b;
                      k = 4;
                      while (b + k < h && a[b + k] === a[r + k]) k += 1;
                      b += k;
                      l = v - r;
                      e = u(d, e, l, k);
                      j = b;
                      if (b >= c) {
                        w = !1;
                        break;
                      }
                      t = o(p(a, b - 1), g);
                      f[t] = b - 1 - i;
                      v = o(p(a, b), g);
                      r = i + f[v];
                      f[v] = b - i;
                    } while (q(a, b, r));
                    if (!w) break;
                    b += 1;
                    x = o(p(a, b), g);
                  }
                }
                j < h && (e = s(a, j, h - j, d, e));
                return e;
              }
              function w(a, b, c) {
                do (b[c] = a & 127), (a = a >>> 7), a > 0 && (b[c] += 128), (c += 1);
                while (a > 0);
                return c;
              }
              function x(a) {
                this.array = a;
              }
              x.prototype.maxCompressedLength = function () {
                var a = this.array.length;
                return 32 + a + Math.floor(a / 6);
              };
              x.prototype.compressToBuffer = function (a) {
                var b = this.array,
                  c = b.length,
                  d = 0,
                  e = 0,
                  f;
                e = w(c, a, e);
                while (d < c) (f = Math.min(c - d, l)), (e = v(b, d, f, a, e)), (d += f);
                return e;
              };
              var y = [0, 255, 65535, 16777215, 4294967295];
              function r(a, b, c, d, e) {
                var f;
                for (f = 0; f < e; f++) c[d + f] = a[b + f];
              }
              function z(a, b, c, d) {
                var e;
                for (e = 0; e < d; e++) a[b + e] = a[b - c + e];
              }
              function A(a) {
                (this.array = a), (this.pos = 0);
              }
              A.prototype.readUncompressedLength = function () {
                var a = 0,
                  b = 0,
                  c,
                  d;
                while (b < 32 && this.pos < this.array.length) {
                  c = this.array[this.pos];
                  this.pos += 1;
                  d = c & 127;
                  if ((d << b) >>> b !== d) return -1;
                  a |= d << b;
                  if (c < 128) return a;
                  b += 7;
                }
                return -1;
              };
              A.prototype.uncompressToBuffer = function (a) {
                var b = this.array,
                  c = b.length,
                  d = this.pos,
                  e = 0,
                  f,
                  g,
                  h,
                  i;
                while (d < b.length) {
                  f = b[d];
                  d += 1;
                  if ((f & 3) === 0) {
                    g = (f >>> 2) + 1;
                    if (g > 60) {
                      if (d + 3 >= c) return !1;
                      h = g - 60;
                      g = b[d] + (b[d + 1] << 8) + (b[d + 2] << 16) + (b[d + 3] << 24);
                      g = (g & y[h]) + 1;
                      d += h;
                    }
                    if (d + g > c) return !1;
                    r(b, d, a, e, g);
                    d += g;
                    e += g;
                  } else {
                    switch (f & 3) {
                      case 1:
                        g = ((f >>> 2) & 7) + 4;
                        i = b[d] + ((f >>> 5) << 8);
                        d += 1;
                        break;
                      case 2:
                        if (d + 1 >= c) return !1;
                        g = (f >>> 2) + 1;
                        i = b[d] + (b[d + 1] << 8);
                        d += 2;
                        break;
                      case 3:
                        if (d + 3 >= c) return !1;
                        g = (f >>> 2) + 1;
                        i = b[d] + (b[d + 1] << 8) + (b[d + 2] << 16) + (b[d + 3] << 24);
                        d += 4;
                        break;
                      default:
                        break;
                    }
                    if (i === 0 || i > e) return !1;
                    z(a, e, i, g);
                    e += g;
                  }
                }
                return !0;
              };
              e.exports.uncompress = a;
              e.exports.compress = b;
            },
            null
          );
          __d(
            "SnappyCompressUtil",
            ["SnappyCompress"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = {
                compressUint8ArrayToSnappy: function (c) {
                  if (c == null) return null;
                  var d = null;
                  try {
                    d = b("SnappyCompress").compress(c);
                  } catch (a) {
                    return null;
                  }
                  c = "";
                  for (var e = 0; e < d.length; e++) c += String.fromCharCode(d[e]);
                  return a.btoa(c);
                },
                compressStringToSnappy: function (b) {
                  if (a.Uint8Array === void 0 || a.btoa === void 0) return null;
                  var c = new a.Uint8Array(b.length);
                  for (var d = 0; d < b.length; d++) {
                    var e = b.charCodeAt(d);
                    if (e > 127) return null;
                    c[d] = e;
                  }
                  return g.compressUint8ArrayToSnappy(c);
                },
                compressStringToSnappyBinary: function (c) {
                  if (a.Uint8Array === void 0) return null;
                  var d = null;
                  if (a.TextEncoder !== void 0) d = new TextEncoder().encode(c);
                  else {
                    d = new a.Uint8Array(c.length);
                    for (var e = 0; e < c.length; e++) {
                      var f = c.charCodeAt(e);
                      if (f > 127) return null;
                      d[e] = f;
                    }
                  }
                  f = null;
                  try {
                    f = b("SnappyCompress").compress(d);
                  } catch (a) {
                    return null;
                  }
                  return f;
                },
              };
              e.exports = g;
            },
            null
          );
          __d(
            "BanzaiCompressionUtils",
            ["Promise", "FBLogger", "SnappyCompressUtil", "once", "performanceNow"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g,
                h = b("once")(function () {
                  if (a.CompressionStream == null) return !1;
                  if (a.Response == null) return !1;
                  try {
                    new a.CompressionStream("deflate");
                  } catch (a) {
                    return !1;
                  }
                  return !0;
                }),
                i = {
                  compressWad: function (a, c) {
                    if (a.needs_compression !== !0) {
                      delete a.needs_compression;
                      return;
                    }
                    if (c === "deflate") {
                      i.compressWad(a, "snappy");
                      return;
                    }
                    var d = (g || (g = b("performanceNow")))(),
                      e = JSON.stringify(a.posts),
                      f;
                    switch (c) {
                      case "snappy":
                        f = b("SnappyCompressUtil").compressStringToSnappyBinary(e);
                        break;
                      case "snappy_base64":
                        f = b("SnappyCompressUtil").compressStringToSnappy(e);
                        break;
                      default:
                        break;
                    }
                    f != null && f.length < e.length
                      ? ((a.posts = f),
                        (a.compression = c),
                        (a.snappy_ms = Math.ceil((g || (g = b("performanceNow")))() - d)),
                        a.snappy_ms < 0 &&
                          b("FBLogger")("BanzaiCompressionUtils").warn(
                            "Expected positive snappy_ms but got %s",
                            a.snappy_ms
                          ))
                      : (a.compression = "");
                    delete a.needs_compression;
                  },
                  compressWadAsync: function (c, d) {
                    if (d !== "deflate") {
                      i.compressWad(c, "snappy");
                      return b("Promise").resolve();
                    }
                    if (!h()) return i.compressWadAsync(c, "snappy");
                    var e = (g || (g = b("performanceNow")))(),
                      f = JSON.stringify(c.posts),
                      j = new Response(f).body;
                    if (!j) {
                      c.compression = "";
                      delete c.needs_compression;
                      return b("Promise").resolve();
                    }
                    j = j.pipeThrough(new a.CompressionStream("deflate"));
                    return new Response(j)
                      .arrayBuffer()
                      .then(function (a) {
                        a.byteLength < f.length
                          ? ((c.posts = new Uint8Array(a)),
                            (c.compression = d),
                            (c.snappy_ms = Math.ceil((g || (g = b("performanceNow")))() - e)),
                            c.snappy_ms < 0 &&
                              b("FBLogger")("BanzaiCompressionUtils").warn(
                                "Expected positive snappy_ms but got %s",
                                c.snappy_ms
                              ))
                          : (c.compression = ""),
                          delete c.needs_compression;
                      })
                      ["catch"](function () {
                        (c.compression = ""), delete c.needs_compression;
                      });
                  },
                  outOfBandsPosts: function (a) {
                    var b = 0,
                      c = {};
                    for (
                      var a = a,
                        d = Array.isArray(a),
                        e = 0,
                        a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                      ;

                    ) {
                      var f;
                      if (d) {
                        if (e >= a.length) break;
                        f = a[e++];
                      } else {
                        e = a.next();
                        if (e.done) break;
                        f = e.value;
                      }
                      f = f;
                      var g = f.compression === "snappy" || f.compression === "deflate";
                      if (g) {
                        g = new Blob([f.posts], { type: "application/octet-stream" });
                        f.posts = String(b);
                        c["post_" + String(b)] = g;
                        b++;
                      }
                    }
                    return c;
                  },
                };
              e.exports = i;
            },
            null
          );
          __d(
            "BanzaiBase",
            [
              "BanzaiAdapter",
              "BanzaiCompressionUtils",
              "BanzaiConsts",
              "BanzaiLazyQueue",
              "BanzaiUtils",
              "CurrentUser",
              "ErrorGuard",
              "FBLogger",
              "SetIdleTimeoutAcrossTransitions",
              "WebSession",
              "performanceAbsoluteNow",
            ],
            function (a, b, c, d, e, f) {
              var g,
                h,
                i,
                j = "categorized_ods",
                k = "blue_send_via_beacon_failure";
              c = "blue_messages_received";
              d = "blue_messages_sent";
              var l = "blue_total_messages_received",
                m = "blue_total_messages_sent",
                n = { received: c, sent: d },
                o,
                p,
                q = [],
                r = null,
                s = 0,
                t = 0,
                u = 0,
                v = 0,
                w = {
                  _clearPostBuffer: function () {
                    q = [];
                  },
                  _gatherWadsAndPostsFromBuffer: function (a, c, d, e, f) {
                    var g = {
                      currentSize: 0,
                      keepRetryable: d,
                      overlimit: !1,
                      sendMinimumOnePost: f,
                      wadMap: new Map(),
                    };
                    d = e.filter(function (d, e) {
                      return b("BanzaiUtils").filterPost(d, a, c, g);
                    });
                    g.overlimit && d.length && w._schedule(0);
                    if (c.length + t + s !== 0) {
                      s += 2;
                      f = c.length + t + 2;
                      u += 2;
                      v += c.length + 2;
                      w.counterTracker("received", s, a, c);
                      w.counterTracker("sent", f, a, c);
                    }
                    s = 0;
                    t = 0;
                    return d;
                  },
                  _getEventTime: function () {
                    return (g || (g = b("performanceAbsoluteNow")))();
                  },
                  _getWebSessionId: function () {
                    return b("WebSession").getId();
                  },
                  _getPostBuffer: function () {
                    return q;
                  },
                  _getUserId: function () {
                    return b("CurrentUser").getID();
                  },
                  _getAppId: function () {
                    return b("CurrentUser").getAppID();
                  },
                  _initialize: function () {},
                  _sendBeacon: function (b, c) {
                    return a.navigator.sendBeacon(b, c);
                  },
                  _prepForTransit: function (a) {
                    var c = new FormData();
                    c.append("ts", String(Date.now()));
                    var d = {};
                    Object.keys(d)
                      .sort()
                      .forEach(function (a) {
                        var b = d[a];
                        if (b === void 0) return;
                        if (b === null) {
                          c.append(a, "");
                          return;
                        }
                        c.append(a, String(b));
                      });
                    var e = b("BanzaiCompressionUtils").outOfBandsPosts(a);
                    Object.keys(e).forEach(function (a) {
                      c.append(a, e[a]);
                    });
                    c.append("q", JSON.stringify(a));
                    return c;
                  },
                  _prepWadForTransit: function (a) {
                    b("BanzaiCompressionUtils").compressWad(
                      a,
                      b("BanzaiAdapter").preferredCompressionMethod()
                    );
                  },
                  _processCallbacksAndSendViaBeacon: function () {
                    var a = [],
                      c = [],
                      d = [];
                    w._gatherWadsAndPostsFromBuffer(c, d, !0, a, !1);
                    if (c.length > 0) {
                      c[0].send_method = "beacon";
                      c.map(w._prepWadForTransit);
                      d = w._prepForTransit(c);
                      a = b("BanzaiAdapter").getEndPointUrl(!0);
                      c = w._sendBeacon(a, d);
                      c || b("FBLogger")("banzai").warn("Error sending beacon");
                    }
                  },
                  _restore: function (a) {
                    a = b("BanzaiAdapter").getStorage();
                    var c = function (a) {
                      q.push(a);
                    };
                    (h || (h = b("ErrorGuard"))).applyWithGuard(a.restore, a, [c]);
                    w._schedule(
                      b("BanzaiAdapter").config.RESTORE_WAIT || (i || (i = b("BanzaiConsts"))).VITAL_WAIT
                    );
                  },
                  _schedule: function (a) {
                    var c = w._getEventTime() + a;
                    if (!p || c < p) {
                      p = c;
                      b("SetIdleTimeoutAcrossTransitions").clear(o);
                      o = b("SetIdleTimeoutAcrossTransitions").start(
                        b("BanzaiAdapter").wrapInTimeSlice(w._sendWithCallbacks, "Banzai.send"),
                        a
                      );
                      return !0;
                    }
                    return !1;
                  },
                  _sendWithCallbacks: function (a, c) {
                    p = null;
                    w._schedule(w.BASIC.delay);
                    if (!b("BanzaiAdapter").readyToSend()) {
                      c && c();
                      return;
                    }
                    if (w.isEnabled("flush_storage_periodically")) {
                      var d = b("BanzaiAdapter").getStorage(),
                        e = function () {
                          w._restore(!1);
                        };
                      (h || (h = b("ErrorGuard"))).applyWithGuard(d.flush, d, [e]);
                    }
                    b("BanzaiAdapter").inform((i || (i = b("BanzaiConsts"))).SEND);
                    d = [];
                    var f = [];
                    q = w._gatherWadsAndPostsFromBuffer(d, f, !0, q, !0);
                    if (d.length <= 0) {
                      b("BanzaiAdapter").inform((i || (i = b("BanzaiConsts"))).OK);
                      a && a();
                      return;
                    }
                    d[0].trigger = r;
                    r = null;
                    d[0].send_method = "ajax";
                    d.map(w._prepWadForTransit);
                    b("BanzaiAdapter").send(
                      w._prepForTransit(d),
                      function () {
                        f.forEach(function (a) {
                          a = a;
                          a.__meta.status = (i || (i = b("BanzaiConsts"))).POST_SENT;
                          a.__meta.callback && a.__meta.callback();
                        }),
                          a && a();
                      },
                      function (a) {
                        f.forEach(function (c) {
                          b("BanzaiUtils").retryPost(c, a, q);
                        }),
                          c && c();
                      }
                    );
                  },
                  _store: function (a) {
                    a = b("BanzaiAdapter").getStorage();
                    (h || (h = b("ErrorGuard"))).applyWithGuard(a.store, a, [q]);
                  },
                  _testState: function () {
                    return { postBuffer: q, triggerRoute: r };
                  },
                  _tryToSendViaBeacon: function () {
                    if (!(navigator && navigator.sendBeacon && b("BanzaiAdapter").isOkToSendViaBeacon()))
                      return !1;
                    var a = [],
                      c = [];
                    q = w._gatherWadsAndPostsFromBuffer(a, c, !1, q, !1);
                    if (a.length <= 0) return !1;
                    a[0].send_method = "beacon";
                    a.map(w._prepWadForTransit);
                    a = w._prepForTransit(a);
                    var d = b("BanzaiAdapter").getEndPointUrl(!0);
                    d = w._sendBeacon(d, a);
                    if (!d) {
                      c.forEach(function (a) {
                        q.push(a);
                      });
                      q.push(
                        b("BanzaiUtils").wrapData(
                          j,
                          { 2979: { banzai: ((a = {}), (a[k] = [1]), a) } },
                          w._getEventTime()
                        )
                      );
                      return !1;
                    }
                    return !0;
                  },
                  _unload: function () {
                    var a, c;
                    u += 2;
                    v += 2;
                    a = b("BanzaiUtils").wrapData(
                      j,
                      { 2979: { banzai: ((a = {}), (a[l] = [u]), a) } },
                      w._getEventTime(),
                      !0
                    );
                    c = b("BanzaiUtils").wrapData(
                      j,
                      { 2979: { banzai: ((c = {}), (c[m] = [v]), c) } },
                      w._getEventTime(),
                      !0
                    );
                    q.unshift(a, c);
                    navigator &&
                      navigator.sendBeacon &&
                      b("BanzaiAdapter").isOkToSendViaBeacon() &&
                      w._processCallbacksAndSendViaBeacon();
                    b("BanzaiAdapter").cleanup();
                    b("BanzaiAdapter").inform((i || (i = b("BanzaiConsts"))).SHUTDOWN);
                    q.length > 0 && (!w.adapter.useBeacon || !w._tryToSendViaBeacon()) && w._store(!1);
                  },
                  BASIC: {
                    delay: b("BanzaiAdapter").config.MAX_WAIT || (i || (i = b("BanzaiConsts"))).BASIC_WAIT,
                  },
                  BASIC_WAIT: (i || (i = b("BanzaiConsts"))).BASIC_WAIT,
                  ERROR: i.ERROR,
                  OK: i.OK,
                  SEND: i.SEND,
                  SHUTDOWN: i.SHUTDOWN,
                  VITAL: {
                    delay: b("BanzaiAdapter").config.MIN_WAIT || (i || (i = b("BanzaiConsts"))).VITAL_WAIT,
                  },
                  VITAL_WAIT: i.VITAL_WAIT,
                  adapter: b("BanzaiAdapter"),
                  canUseNavigatorBeacon: function () {
                    return Boolean(
                      navigator && navigator.sendBeacon && b("BanzaiAdapter").isOkToSendViaBeacon()
                    );
                  },
                  counterTracker: function (a, c, d, e) {
                    var f;
                    c = c;
                    a = b("BanzaiUtils").wrapData(
                      j,
                      { 2979: { banzai: ((f = {}), (f[n[a]] = [c]), f) } },
                      w._getEventTime(),
                      !0
                    );
                    e.push(a);
                    d.push({
                      webSessionId: w._getWebSessionId(),
                      posts: [a],
                      needs_compression: !0,
                      user: w._getUserId(),
                      app_id: w._getAppId(),
                    });
                  },
                  flush: function (a, c) {
                    b("SetIdleTimeoutAcrossTransitions").clear(o), w._sendWithCallbacks(a, c);
                  },
                  isEnabled: function (a) {
                    return Boolean(b("BanzaiAdapter").config.gks && b("BanzaiAdapter").config.gks[a]);
                  },
                  post: function (a, c, d) {
                    var e;
                    a || b("FBLogger")("banzai").mustfix("Banzai.post called without specifying a route");
                    e = (e = JSON.stringify(c)) != null ? e : "";
                    var f = d == null ? void 0 : d.retry;
                    if (b("BanzaiAdapter").config.disabled) return;
                    var g = b("BanzaiAdapter").config.blacklist;
                    if (g && g.indexOf && typeof g.indexOf == "function" && g.indexOf(a) != -1) return;
                    g = e.length;
                    s++;
                    u++;
                    var h = b("BanzaiUtils").wrapData(a, c, w._getEventTime(), f, g),
                      j = h;
                    (d == null ? void 0 : d.callback) &&
                      (j.__meta.callback = d == null ? void 0 : d.callback);
                    (d == null ? void 0 : d.compress) != null &&
                      (j.__meta.compress = d == null ? void 0 : d.compress);
                    e = d == null ? void 0 : d.delay;
                    e == null && (e = (i || (i = b("BanzaiConsts"))).BASIC_WAIT);
                    if (d == null ? void 0 : d.signal) {
                      j.__meta.status = (i || (i = b("BanzaiConsts"))).POST_INFLIGHT;
                      c = [
                        {
                          user: w._getUserId(),
                          webSessionId: w._getWebSessionId(),
                          app_id: w._getAppId(),
                          posts: [h],
                          trigger: a,
                        },
                      ];
                      b("BanzaiAdapter").send(
                        w._prepForTransit(c),
                        function () {
                          v++,
                            t++,
                            (j.__meta.status = (i || (i = b("BanzaiConsts"))).POST_SENT),
                            j.__meta.callback && j.__meta.callback();
                        },
                        function (a) {
                          b("BanzaiUtils").retryPost(h, a, q);
                        },
                        !0
                      );
                      if (!f) return;
                    }
                    q.push(h);
                    (w._schedule(e) || !r) && (r = a);
                    g = b("BanzaiLazyQueue").flushQueue();
                    g.forEach(function (a) {
                      return w.post.apply(w, a);
                    });
                  },
                  subscribe: b("BanzaiAdapter").subscribe,
                };
              e.exports = w;
            },
            null
          );
          __d(
            "BanzaiStreamPayloads",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = {};
              a = {
                addPayload: function (a, b) {
                  g[a] = b;
                },
                removePayload: function (a) {
                  delete g[a];
                },
                unload: function (a) {
                  Object.keys(g).forEach(function (b) {
                    b = g[b];
                    a(b.route, b.payload);
                  });
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "Visibility",
            ["BaseEventEmitter", "ExecutionEnvironment", "TimeSlice"],
            function (a, b, c, d, e, f) {
              var g = b("ExecutionEnvironment").canUseDOM,
                h,
                i;
              g &&
                (document.hidden !== void 0
                  ? ((h = "hidden"), (i = "visibilitychange"))
                  : document.mozHidden !== void 0
                  ? ((h = "mozHidden"), (i = "mozvisibilitychange"))
                  : document.msHidden !== void 0
                  ? ((h = "msHidden"), (i = "msvisibilitychange"))
                  : document.webkitHidden !== void 0 &&
                    ((h = "webkitHidden"), (i = "webkitvisibilitychange")));
              a = (function (a) {
                "use strict";
                babelHelpers.inheritsLoose(b, a);
                function b() {
                  var b, c;
                  for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
                  return (
                    ((b = c = a.call.apply(a, [this].concat(e)) || this),
                    (c.HIDDEN = "hidden"),
                    (c.VISIBLE = "visible"),
                    (c.hiddenKey = h),
                    (c.hiddenEvent = i),
                    b) || babelHelpers.assertThisInitialized(c)
                  );
                }
                var c = b.prototype;
                c.isHidden = function () {
                  return h ? document[h] : !1;
                };
                c.isSupported = function () {
                  return g && document.addEventListener && i !== void 0;
                };
                return b;
              })(b("BaseEventEmitter"));
              var j = new a();
              j.isSupported() &&
                document.addEventListener(
                  j.hiddenEvent,
                  b("TimeSlice").guard(function (a) {
                    j.emit(j.isHidden() ? j.HIDDEN : j.VISIBLE, { changeTime: a.timeStamp });
                  }, "visibility change")
                );
              e.exports = j;
            },
            null
          );
          __d(
            "lowerFacebookDomain",
            [],
            function (a, b, c, d, e, f) {
              b = window.location.hostname.match(/\.(facebook\.sg|facebookcorewwwi\.onion|workplace\.com)$/);
              var g = b ? b[1] : "facebook.com";
              a.setDomain = function (a) {
                g = a;
              };
              a.isValidDocumentDomain = function () {
                return document.domain == g ? !0 : !1;
              };
              function a() {
                document.domain = g;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "BanzaiNew",
            [
              "BanzaiBase",
              "BanzaiConsts",
              "BanzaiStreamPayloads",
              "BanzaiUtils",
              "CurrentUser",
              "ExecutionEnvironment",
              "FBJSON",
              "NavigationMetrics",
              "Visibility",
              "WebStorage",
              "isInIframe",
              "lowerFacebookDomain",
            ],
            function (a, b, c, d, e, f) {
              var g = { _initialize: (c = b("BanzaiBase"))._initialize, _unload: c._unload, post: c.post },
                h = b("isInIframe")();
              c._initialize = function () {
                b("ExecutionEnvironment").canUseDOM &&
                  (b("BanzaiBase").adapter.useBeacon && b("Visibility").isSupported()
                    ? (b("Visibility").addListener(b("Visibility").HIDDEN, function () {
                        b("BanzaiBase")._getPostBuffer().length > 0 &&
                          (b("BanzaiBase")._tryToSendViaBeacon() || b("BanzaiBase")._store(!1));
                      }),
                      b("BanzaiBase").isEnabled("enable_client_logging_clear_on_visible") &&
                        b("Visibility").addListener(b("Visibility").VISIBLE, function () {
                          b("BanzaiBase")._tryToSendViaBeacon() || b("BanzaiBase")._restore(!1);
                        }))
                    : b("BanzaiBase").adapter.setHooks(b("BanzaiBase")),
                  b("BanzaiBase").adapter.setUnloadHook(b("BanzaiBase")),
                  b("NavigationMetrics").addListener(b("NavigationMetrics").Events.NAVIGATION_DONE, function (
                    a,
                    c
                  ) {
                    if (c.pageType !== "normal") return;
                    b("BanzaiBase")._restore(!1);
                    b("NavigationMetrics").removeCurrentListener();
                  }));
              };
              c._unload = function () {
                b("BanzaiStreamPayloads").unload(b("BanzaiBase").post), g._unload();
              };
              c.post = function (c, d, e) {
                if (b("BanzaiBase").adapter.config.disabled) return;
                if (!b("ExecutionEnvironment").canUseDOM) return;
                if (h && b("lowerFacebookDomain").isValidDocumentDomain()) {
                  var f;
                  try {
                    f = a.top.require("Banzai");
                  } catch (a) {
                    f = null;
                  }
                  if (f) {
                    f.post.apply(f, arguments);
                    return;
                  }
                }
                g.post(c, d, e);
              };
              c._initialize();
              e.exports = c;
            },
            null
          );
          __d(
            "DOMWrapper",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              var g, h;
              a = {
                setRoot: function (a) {
                  g = a;
                },
                getRoot: function () {
                  return g || document.body;
                },
                setWindow: function (a) {
                  h = a;
                },
                getWindow: function () {
                  return h || self;
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "dotAccess",
            [],
            function (a, b, c, d, e, f) {
              function a(a, b, c) {
                b = b.split(".");
                do {
                  var d = b.shift();
                  a = a[d] || (c && (a[d] = {}));
                } while (b.length && a);
                return a;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "guid",
            [],
            function (a, b, c, d, e, f) {
              function a() {
                return "f" + (Math.random() * (1 << 30)).toString(16).replace(".", "");
              }
              e.exports = a;
            },
            null
          );
          __d(
            "GlobalCallback",
            ["DOMWrapper", "dotAccess", "guid", "wrapFunction"],
            function (a, b, c, d, e, f) {
              var g, h;
              a = {
                setPrefix: function (a) {
                  (g = b("dotAccess")(b("DOMWrapper").getWindow(), a, !0)), (h = a);
                },
                create: function (a, c) {
                  g || this.setPrefix("__globalCallbacks");
                  var d = b("guid")();
                  g[d] = b("wrapFunction")(a, "entry", (a = c) != null ? a : "GlobalCallback");
                  return h + "." + d;
                },
                remove: function (a) {
                  a = a.substring(h.length + 1);
                  delete g[a];
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "Log",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              a = { DEBUG: 3, INFO: 2, WARNING: 1, ERROR: 0 };
              b = function (a, b, c) {
                for (var d = arguments.length, e = new Array(d > 3 ? d - 3 : 0), f = 3; f < d; f++)
                  e[f - 3] = arguments[f];
                var h = 0,
                  i = c.replace(/%s/g, function () {
                    return String(e[h++]);
                  }),
                  j = window.console;
                j && g.level >= b && j[a in j ? a : "log"](i);
              };
              var g = {
                level: -1,
                Level: a,
                debug: ES(b, "bind", !0, null, "debug", a.DEBUG),
                info: ES(b, "bind", !0, null, "info", a.INFO),
                warn: ES(b, "bind", !0, null, "warn", a.WARNING),
                error: ES(b, "bind", !0, null, "error", a.ERROR),
                log: b,
              };
              e.exports = g;
            },
            null
          );
          __d(
            "ObservableMixin",
            [],
            function (a, b, c, d, e, f) {
              function a() {
                this.__observableEvents = {};
              }
              a.prototype = {
                inform: function (a) {
                  var b = Array.prototype.slice.call(arguments, 1),
                    c = Array.prototype.slice.call(this.getSubscribers(a));
                  for (var d = 0; d < c.length; d++) {
                    if (c[d] === null) continue;
                    try {
                      c[d].apply(this, b);
                    } catch (a) {
                      window.setTimeout(function () {
                        throw a;
                      }, 0);
                    }
                  }
                  return this;
                },
                getSubscribers: function (a) {
                  return this.__observableEvents[a] || (this.__observableEvents[a] = []);
                },
                clearSubscribers: function (a) {
                  a && (this.__observableEvents[a] = []);
                  return this;
                },
                subscribe: function (a, b) {
                  a = this.getSubscribers(a);
                  a.push(b);
                  return this;
                },
                unsubscribe: function (a, b) {
                  a = this.getSubscribers(a);
                  for (var c = 0; c < a.length; c++)
                    if (a[c] === b) {
                      a.splice(c, 1);
                      break;
                    }
                  return this;
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "Banzai",
            ["requireCond", "cr:1268308"],
            function (a, b, c, d, e, f) {
              e.exports = b("cr:1268308");
            },
            null
          );
          __d(
            "WebFunnelLogger",
            ["invariant", "Banzai"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              a = (function () {
                function a(a) {
                  (this.$2 = {}),
                    (this.$3 = {}),
                    (this.$4 = "web_funnel_logging"),
                    this.$5(),
                    (this.$1.funnel_definition = a);
                }
                var c = a.prototype;
                c.log = function () {
                  (this.$1.funnel_payload = ES("JSON", "stringify", !1, this.$2)),
                    (this.$1.action_payload = ES("JSON", "stringify", !1, this.$3)),
                    b("Banzai").post(this.$4, this.$1, b("Banzai").BASIC),
                    this.$5();
                };
                c.logWithEventTime = function (a) {
                  (this.$1.event_time = a / 1e3),
                    this.$6(),
                    b("Banzai").post(this.$4, this.$1, b("Banzai").BASIC),
                    this.$5();
                };
                c.logVital = function () {
                  this.$6(), b("Banzai").post(this.$4, this.$1, b("Banzai").VITAL), this.$5();
                };
                c.logVitalWithEventTime = function (a) {
                  (this.$1.event_time = a / 1e3),
                    this.$6(),
                    b("Banzai").post(this.$4, this.$1, b("Banzai").VITAL),
                    this.$5();
                };
                c.$6 = function () {
                  (this.$1.funnel_payload = ES("JSON", "stringify", !1, this.$2)),
                    (this.$1.action_payload = ES("JSON", "stringify", !1, this.$3)),
                    this.$1.action !== null || g(0, 5829),
                    this.$1.session_key !== null || g(0, 5830);
                };
                c.$5 = function () {
                  this.$1 = {};
                  this.$2 = {};
                  this.$3 = {};
                  return this;
                };
                c.setAction = function (a) {
                  this.$1.action = a;
                  return this;
                };
                c.addActionPayload = function (a, b) {
                  this.$3[a] = b;
                  return this;
                };
                c.setActionTag = function (a) {
                  this.$1.action_tag = a;
                  return this;
                };
                c.addFunnelPayload = function (a, b) {
                  this.$2[a] = b;
                  return this;
                };
                c.setFunnelTags = function (a) {
                  this.$1.funnel_tags = a;
                  return this;
                };
                c.setSecondaryOrder = function (a) {
                  this.$1.secondary_order_value = a;
                  return this;
                };
                c.setSessionKey = function (a) {
                  this.$1.session_key = a;
                  return this;
                };
                c.markStart = function () {
                  this.$1.session_marker = "start";
                  return this;
                };
                c.markEnd = function () {
                  this.$1.session_marker = "end";
                  return this;
                };
                c.setUserId = function (a) {
                  this.$1.user_id = a;
                  return this;
                };
                c.setIsEmployee = function (a) {
                  this.$1.is_employee = a;
                  return this;
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "PlatformOAuthDialogLoginFunnelLogger",
            ["FBLogger", "URI", "WebFunnelLogger"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g,
                h = {
                  CLIENT_FUNNEL_VERSION: 1,
                  log: function (a, c, d, e, f) {
                    e === void 0 && (e = !0);
                    if (null == d || "" === d || (e && (null == c || "" === c || 0 === c))) {
                      b("FBLogger")("platform_login_web_funnel_client_js").mustfix(
                        "\nerror: null_required_field\naction: " +
                          a +
                          "\nloggerId: " +
                          String(d) +
                          "\ncbt: " +
                          String(c) +
                          "\n        "
                      );
                      return;
                    }
                    e = "number" !== typeof c ? parseInt(c, 10) : c;
                    c = ES("Date", "now", !1) - e;
                    var g = i(),
                      l = j();
                    d = new (b("WebFunnelLogger"))("PlatformLoginWebFunnelDefinition")
                      .setAction(a)
                      .setSessionKey(d)
                      .addActionPayload("logger_id", d)
                      .addActionPayload("first_paint_time", g)
                      .addActionPayload("response_start_time", l)
                      .addActionPayload("cbt_delta", c)
                      .addFunnelPayload("client_funnel_version", h.CLIENT_FUNNEL_VERSION)
                      .addFunnelPayload("cbt", e)
                      .addFunnelPayload("gdp_type", f);
                    if (a === "client_logged_out_init_impression") {
                      g = k();
                      d.addFunnelPayload("login_uri", g);
                    }
                    d.logVital();
                  },
                },
                i = function () {
                  if (window.performance) {
                    var a = ES(window.performance.getEntriesByType("paint"), "filter", !0, function (a) {
                      return "first-paint" === a.name;
                    });
                    if (null == a || 0 < !a.length) return null;
                    a = a[0].startTime + a[0].duration;
                    return a;
                  }
                  return null;
                },
                j = function () {
                  if (window.performance) {
                    var a = window.performance.getEntriesByType("navigation");
                    return null == a || 0 < !a.length ? null : a[0].responseStart;
                  }
                  return null;
                },
                k = function () {
                  return (g || (g = b("URI"))).getRequestURI().setQueryString("").toString();
                };
              e.exports = h;
            },
            null
          );
          __d(
            "ManagedError",
            [],
            function (a, b, c, d, e, f) {
              a = (function (a) {
                "use strict";
                babelHelpers.inheritsLoose(b, a);
                function b(b, c) {
                  var d;
                  d = a.call(this, b !== null && b !== void 0 ? b : "") || this;
                  b !== null && b !== void 0 ? (d.message = b) : (d.message = "");
                  d.innerError = c;
                  return d;
                }
                return b;
              })(babelHelpers.wrapNativeSuper(Error));
              e.exports = a;
            },
            null
          );
          __d(
            "AssertionError",
            ["ManagedError"],
            function (a, b, c, d, e, f) {
              a = (function (a) {
                "use strict";
                babelHelpers.inheritsLoose(b, a);
                function b(b) {
                  return a.call(this, b) || this;
                }
                return b;
              })(b("ManagedError"));
              e.exports = a;
            },
            null
          );
          __d(
            "Assert",
            ["AssertionError", "sprintf"],
            function (a, b, c, d, e, f) {
              function g(a, c) {
                if (typeof a !== "boolean" || !a) throw new (b("AssertionError"))(c);
                return a;
              }
              function h(a, c, d) {
                var e;
                if (c === void 0) e = "undefined";
                else if (c === null) e = "null";
                else {
                  var f = Object.prototype.toString.call(c);
                  e = /\s(\w*)/.exec(f)[1].toLowerCase();
                }
                g(
                  ES(a, "indexOf", !0, e) !== -1,
                  d || b("sprintf")("Expression is of type %s, not %s", e, a)
                );
                return c;
              }
              function a(a, b, c) {
                g(b instanceof a, c || "Expression not instance of type");
                return b;
              }
              function i(a, b) {
                (j["is" + a] = b),
                  (j["maybe" + a] = function (a, c) {
                    a != null && b(a, c);
                  });
              }
              var j = {
                isInstanceOf: a,
                isTrue: g,
                isTruthy: function (a, b) {
                  return g(!!a, b);
                },
                type: h,
                define: function (a, b) {
                  (a = a.substring(0, 1).toUpperCase() + a.substring(1).toLowerCase()),
                    i(a, function (a, c) {
                      g(b(a), c);
                    });
                },
              };
              ES(
                [
                  "Array",
                  "Boolean",
                  "Date",
                  "Function",
                  "Null",
                  "Number",
                  "Object",
                  "Regexp",
                  "String",
                  "Undefined",
                ],
                "forEach",
                !0,
                function (a) {
                  i(a, ES(h, "bind", !0, null, a.toLowerCase()));
                }
              );
              e.exports = j;
            },
            null
          );
          __d(
            "Type",
            ["Assert"],
            function (a, b, c, d, e, f) {
              function g() {
                var a = this.__mixins;
                if (a) for (var b = 0; b < a.length; b++) a[b].apply(this, arguments);
              }
              function h(a, b) {
                if (b instanceof a) return !0;
                if (b instanceof g)
                  for (var c = 0; c < b.__mixins.length; c++) if (b.__mixins[c] == a) return !0;
                return !1;
              }
              function i(a, b) {
                var c = a.prototype;
                ES("Array", "isArray", !1, b) || (b = [b]);
                for (var a = 0; a < b.length; a++) {
                  var d = b[a];
                  typeof d === "function" && (c.__mixins.push(d), (d = d.prototype));
                  ES(ES("Object", "keys", !1, d), "forEach", !0, function (a) {
                    c[a] = d[a];
                  });
                }
              }
              function j(a, c, d) {
                var e =
                  c && Object.prototype.hasOwnProperty.call(c, "constructor")
                    ? c.constructor
                    : function () {
                        this.parent.apply(this, arguments);
                      };
                b("Assert").isFunction(e);
                if (a && a.prototype instanceof g === !1)
                  throw new Error("parent type does not inherit from Type");
                a = a || g;
                function f() {}
                f.prototype = a.prototype;
                e.prototype = new f();
                c && ES("Object", "assign", !1, e.prototype, c);
                e.prototype.constructor = e;
                e.parent = a;
                e.prototype.__mixins = a.prototype.__mixins
                  ? Array.prototype.slice.call(a.prototype.__mixins)
                  : [];
                d && i(e, d);
                e.prototype.parent = function () {
                  (this.parent = a.prototype.parent), a.apply(this, arguments);
                };
                e.prototype.parentCall = function (b) {
                  return a.prototype[b].apply(this, Array.prototype.slice.call(arguments, 1));
                };
                e.extend = function (a, b) {
                  return j(this, a, b);
                };
                return e;
              }
              ES("Object", "assign", !1, g.prototype, {
                instanceOf: function (a) {
                  return h(a, this);
                },
              });
              ES("Object", "assign", !1, g, {
                extend: function (a, b) {
                  return typeof a === "function" ? j.apply(null, arguments) : j(null, a, b);
                },
                instanceOf: h,
              });
              e.exports = g;
            },
            null
          );
          __d(
            "sdk.Model",
            ["ObservableMixin", "Type"],
            function (a, b, c, d, e, f) {
              "use strict";
              a = b("Type").extend(
                {
                  constructor: function (a) {
                    this.parent();
                    var b = {},
                      c = this;
                    ES(ES("Object", "keys", !1, a), "forEach", !0, function (d) {
                      (b[d] = a[d]),
                        (c["set" + d] = function (a) {
                          if (a === b[d]) return c;
                          b[d] = a;
                          c.inform(d + ".change", a);
                          return c;
                        }),
                        (c["get" + d] = function () {
                          return b[d];
                        });
                    });
                  },
                },
                b("ObservableMixin")
              );
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.Runtime",
            ["JSSDKRuntimeConfig", "sdk.Model"],
            function (a, b, c, d, e, f) {
              var g = { UNKNOWN: 0, PAGETAB: 1, CANVAS: 2, PLATFORM: 4 },
                h = new (b("sdk.Model"))({
                  AccessToken: "",
                  AutoLogAppEvents: !1,
                  ClientID: "",
                  CookieUserID: "",
                  EnforceHttps: !1,
                  Environment: g.UNKNOWN,
                  GraphDomain: "",
                  Initialized: !1,
                  IsVersioned: !1,
                  KidDirectedSite: void 0,
                  Locale: (a = b("JSSDKRuntimeConfig")).locale,
                  LoggedIntoFacebook: void 0,
                  LoginStatus: void 0,
                  Revision: a.revision,
                  Rtl: a.rtl,
                  Scope: void 0,
                  SDKAB: a.sdkab,
                  SDKUrl: a.sdkurl,
                  SDKNS: a.sdkns,
                  UseCookie: !1,
                  UseLocalStorage: !0,
                  UserID: "",
                  Version: void 0,
                });
              ES("Object", "assign", !1, h, {
                ENVIRONMENTS: g,
                isEnvironment: function (a) {
                  var b = this.getEnvironment();
                  return (a | b) === b;
                },
                isCanvasEnvironment: function () {
                  return this.isEnvironment(g.CANVAS) || this.isEnvironment(g.PAGETAB);
                },
              });
              (function () {
                var a = /app_runner/.test(window.name)
                  ? g.PAGETAB
                  : /iframe_canvas/.test(window.name)
                  ? g.CANVAS
                  : g.UNKNOWN;
                (a | g.PAGETAB) === a && (a |= g.CANVAS);
                h.setEnvironment(a);
              })();
              e.exports = h;
            },
            null
          );
          __d(
            "UrlMap",
            ["invariant", "UrlMapConfig", "sdk.Runtime"],
            function (a, b, c, d, e, f, g) {
              a = {
                resolve: function (a) {
                  var c = "https";
                  if (a === "graph_domain") {
                    var d = b("sdk.Runtime").getGraphDomain();
                    d ? (a = "graph_".concat(d)) : (a = "graph");
                  }
                  if (a in b("UrlMapConfig")) return c + "://" + b("UrlMapConfig")[a];
                  a in b("UrlMapConfig") || g(0, 2511, a);
                  return "";
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.Cookie",
            ["QueryString", "sdk.Runtime"],
            function (a, b, c, d, e, f) {
              var g = null;
              function h(a, c, d, e) {
                a = a + b("sdk.Runtime").getClientID();
                e = e ? ";Secure" : "";
                var f = g !== null && g !== ".";
                f &&
                  ((document.cookie = a + "=; expires=Wed, 04 Feb 2004 08:00:00 GMT" + e),
                  (document.cookie =
                    a + "=; expires=Wed, 04 Feb 2004 08:00:00 GMT;domain=" + location.hostname + e));
                var h = new Date(d).toUTCString();
                document.cookie =
                  a +
                  "=" +
                  c +
                  (c && d === 0 ? "" : "; expires=" + h) +
                  "; path=/" +
                  (f ? "; domain=" + ((a = g) != null ? a : "") : "") +
                  e;
              }
              function i(a) {
                a = a + b("sdk.Runtime").getClientID();
                a = new RegExp("\\b" + a + "=([^;]*)\\b");
                a = document.cookie.match(a);
                if (a === null || a === void 0) return null;
                else return a[1];
              }
              a = {
                setDomain: function (a) {
                  g = a;
                  a = b("QueryString").encode({ base_domain: g !== null && g !== "." ? g : "" });
                  var c = new Date();
                  c.setFullYear(c.getFullYear() + 1);
                  h("fbm_", a, c.getTime(), !0);
                },
                getDomain: function () {
                  return g;
                },
                loadMeta: function () {
                  var a = i("fbm_");
                  if (a !== null && a !== void 0 && g === null) {
                    a = b("QueryString").decode(a);
                    g = a.base_domain;
                    return a;
                  }
                  return null;
                },
                loadSignedRequest: function () {
                  return i("fbsr_");
                },
                setSignedRequestCookie: function (a, b) {
                  if (a === "") throw new Error("Value passed to Cookie.setSignedRequestCookie was empty.");
                  h("fbsr_", a, b, !0);
                },
                clearSignedRequestCookie: function () {
                  this.loadMeta(), h("fbsr_", "", 0, !0);
                },
                setRaw: h,
                getRaw: i,
              };
              e.exports = a;
            },
            null
          );
          __d(
            "Miny",
            [],
            function (a, b, c, d, e, f) {
              var g = "Miny1",
                h = "wxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split("");
              a = {
                encode: function (a) {
                  if (/^$|[~\\]|__proto__/.test(a)) return a;
                  a = a.match(/\w+|\W+/g);
                  var b,
                    c = ES("Object", "create", !1, null);
                  for (b = 0; b < a.length; b++) c[a[b]] = (c[a[b]] || 0) + 1;
                  var d = ES("Object", "keys", !1, c);
                  d.sort(function (a, b) {
                    return c[b] - c[a];
                  });
                  for (b = 0; b < d.length; b++) {
                    var e = (b - (b % 32)) / 32;
                    c[d[b]] = e ? e.toString(32) + h[b % 32] : h[b % 32];
                  }
                  e = "";
                  for (b = 0; b < a.length; b++) e += c[a[b]];
                  d.unshift(g, d.length);
                  d.push(e);
                  return d.join("~");
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.UA",
            [],
            function (a, b, c, d, e, f) {
              a = navigator.userAgent;
              var g = {
                  iphone: /\b(iPhone|iP[ao]d)/.test(a),
                  ipad: /\b(iP[ao]d)/.test(a),
                  android: /Android/i.test(a),
                  nativeApp: /FBAN\/\w+;/i.test(a) && !/FBAN\/mLite;/.test(a),
                  nativeAndroidApp: /FB_IAB\/\w+;/i.test(a),
                  nativeInstagramApp: /Instagram/i.test(a),
                  nativeMessengeriOSApp: /MessengerForiOS/i.test(a),
                  nativeMessengerAndroidApp: /Orca\-Android/i.test(a),
                  ucBrowser: /UCBrowser/i.test(a),
                },
                h = /Mobile/i.test(a),
                i = {
                  ie: NaN,
                  firefox: NaN,
                  chrome: NaN,
                  webkit: NaN,
                  osx: NaN,
                  edge: NaN,
                  operaMini: NaN,
                  ucWeb: NaN,
                };
              b = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
                a
              );
              if (b) {
                i.ie = b[1] ? parseFloat(b[1]) : b[4] ? parseFloat(b[4]) : NaN;
                i.firefox = b[2] || "";
                i.webkit = b[3] || "";
                if (b[3]) {
                  c = /(?:Chrome\/(\d+\.\d+))/.exec(a);
                  i.chrome = c ? c[1] : "";
                  d = /(?:Edge\/(\d+\.\d+))/.exec(a);
                  i.edge = d ? d[1] : "";
                }
              }
              f = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);
              f && (i.osx = f[1]);
              b = /(?:Opera Mini\/(\d+(?:\.\d+)?))/.exec(a);
              b && (i.operaMini = b[1]);
              c = /(?:UCWEB\/(\d+(?:\.\d+))?)/.exec(a);
              c && (i.ucWeb = c[1] || "2.0");
              function j(a) {
                return ES(String(a).split("."), "map", !0, function (a) {
                  return parseFloat(a);
                });
              }
              var k = {};
              ES(ES("Object", "keys", !1, i), "map", !0, function (a) {
                var b = function () {
                  return parseFloat(i[a]);
                };
                b.getVersionParts = function () {
                  return j(i[a]);
                };
                k[a] = b;
              });
              ES(ES("Object", "keys", !1, g), "map", !0, function (a) {
                k[a] = function () {
                  return g[a];
                };
              });
              k.mobile = function () {
                return g.iphone || g.ipad || g.android || h;
              };
              k.mTouch = function () {
                return g.android || g.iphone || g.ipad;
              };
              k.facebookInAppBrowser = function () {
                return g.nativeApp || g.nativeAndroidApp;
              };
              k.inAppBrowser = function () {
                return g.nativeApp || g.nativeAndroidApp || g.nativeInstagramApp;
              };
              k.mBasic = function () {
                return !!(i.ucWeb || i.operaMini);
              };
              k.instagram = function () {
                return g.nativeInstagramApp;
              };
              k.messenger = function () {
                return g.nativeMessengeriOSApp || g.nativeMessengerAndroidApp;
              };
              e.exports = k;
            },
            null
          );
          __d(
            "getBlankIframeSrc",
            ["sdk.UA"],
            function (a, b, c, d, e, f) {
              function a() {
                return b("sdk.UA").ie() < 10 ? "javascript:false" : "about:blank";
              }
              e.exports = a;
            },
            null
          );
          __d(
            "insertIframe",
            ["GlobalCallback", "getBlankIframeSrc", "guid"],
            function (a, b, c, d, e, f) {
              function a(a) {
                a.id = a.id || b("guid")();
                a.name = a.name || b("guid")();
                var c = !1,
                  d = !1,
                  e = function () {
                    c && !d && ((d = !0), a.onload && a.onload(a.root.firstChild));
                  },
                  f = b("GlobalCallback").create(e);
                if (document.attachEvent) {
                  var g =
                    '<iframe id="' +
                    a.id +
                    '" name="' +
                    a.name +
                    '"' +
                    (a.title ? ' title="' + a.title + '"' : "") +
                    (a.className ? ' class="' + a.className + '"' : "") +
                    ' style="border:none;' +
                    (a.width ? "width:" + a.width + "px;" : "") +
                    (a.height ? "height:" + a.height + "px;" : "") +
                    '" src="' +
                    b("getBlankIframeSrc")() +
                    '" frameborder="0" scrolling="no" allowtransparency="true" onload="' +
                    f +
                    '()"></iframe>';
                  a.root.innerHTML =
                    '<iframe src="' +
                    b("getBlankIframeSrc")() +
                    '" frameborder="0" scrolling="no" style="height:1px"></iframe>';
                  c = !0;
                  setTimeout(function () {
                    (a.root.innerHTML = g),
                      (a.root.firstChild.src = a.url),
                      a.onInsert && a.onInsert(a.root.firstChild);
                  }, 0);
                } else {
                  f = document.createElement("iframe");
                  f.id = a.id;
                  f.name = a.name;
                  f.onload = e;
                  f.scrolling = "no";
                  f.style.border = "none";
                  f.style.overflow = "hidden";
                  a.title && (f.title = a.title);
                  a.className && (f.className = a.className);
                  a.height !== void 0 && (f.style.height = a.height + "px");
                  a.width !== void 0 &&
                    (a.width == "100%" ? (f.style.width = a.width) : (f.style.width = a.width + "px"));
                  a.root.appendChild(f);
                  c = !0;
                  f.src = a.url;
                  a.onInsert && a.onInsert(f);
                }
              }
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.domReady",
            [],
            function (a, b, c, d, e, f) {
              var g;
              b = "readyState" in document ? /loaded|complete/.test(document.readyState) : !!document.body;
              function h() {
                if (!g) return;
                var a;
                while ((a = g.shift())) a();
                g = null;
              }
              function a(a) {
                if (g) {
                  g.push(a);
                  return;
                } else a();
              }
              if (!b) {
                g = [];
                document.addEventListener
                  ? (document.addEventListener("DOMContentLoaded", h, !1),
                    window.addEventListener("load", h, !1))
                  : document.attachEvent &&
                    (document.attachEvent("onreadystatechange", h), window.attachEvent("onload", h));
                if (document.documentElement.doScroll && window === window.top) {
                  c = function a() {
                    try {
                      document.documentElement.doScroll("left");
                    } catch (b) {
                      setTimeout(a, 0);
                      return;
                    }
                    h();
                  };
                  c();
                }
              }
              e.exports = a;
            },
            3
          );
          __d(
            "sdk.Content",
            ["Log", "sdk.domReady", "sdk.UA"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g,
                h,
                i = {
                  append: function (a, c) {
                    c ||
                      (!g
                        ? ((g = c = document.getElementById("fb-root")),
                          c ||
                            (b("Log").warn('The "fb-root" div has not been created, auto-creating'),
                            (g = c = document.createElement("div")),
                            (c.id = "fb-root"),
                            b("sdk.UA").ie() || !document.body
                              ? b("sdk.domReady")(function () {
                                  c && document.body && document.body.appendChild(c);
                                })
                              : document.body.appendChild(c)),
                          (c.className += " fb_reset"))
                        : (c = g));
                    if (typeof a === "string") {
                      var d = document.createElement("div");
                      c.appendChild(d).innerHTML = a;
                      return d;
                    } else return c.appendChild(a);
                  },
                  appendHidden: function (a) {
                    if (!h) {
                      h = document.createElement("div");
                      var b = h.style;
                      b.position = "absolute";
                      b.top = "-10000px";
                      b.width = "0";
                      b.height = "0";
                      h = i.append(h);
                    }
                    return i.append(a, h);
                  },
                  submitToTarget: function (a, b) {
                    var c = document.createElement("form");
                    c.action = a.url;
                    c.target = a.target;
                    c.method = b ? "GET" : "POST";
                    i.appendHidden(c);
                    for (var d in a.params)
                      if (Object.prototype.hasOwnProperty.call(a.params, d)) {
                        b = a.params[d];
                        if (b !== null && b !== void 0) {
                          var e = document.createElement("input");
                          e.name = d;
                          e.value = b;
                          c.appendChild(e);
                        }
                      }
                    c.submit();
                    c.parentNode && c.parentNode.removeChild(c);
                  },
                };
              e.exports = i;
            },
            null
          );
          __d(
            "sdk.Impressions",
            [
              "Miny",
              "QueryString",
              "UrlMap",
              "getBlankIframeSrc",
              "guid",
              "insertIframe",
              "sdk.Content",
              "sdk.Runtime",
            ],
            function (a, b, c, d, e, f) {
              function g(a) {
                var c = b("sdk.Runtime").getClientID();
                c && (typeof a.api_key !== "string" || a.api_key === "") && (a.api_key = c);
                a.kid_directed_site = b("sdk.Runtime").getKidDirectedSite();
                c = b("UrlMap").resolve("www") + "/impression.php/" + b("guid")() + "/";
                var d = b("QueryString").appendToUrl(c, a);
                if (d.length > 2e3 && a.payload && typeof a.payload === "string") {
                  var e = a.payload,
                    f = b("Miny").encode(e);
                  f && f.length < e.length && ((a.payload = f), (d = b("QueryString").appendToUrl(c, a)));
                }
                h(c, d, a);
              }
              function h(a, c, d) {
                if (c.length <= 2e3) {
                  var e = new Image();
                  e.src = c;
                } else {
                  e = b("guid")();
                  var f = b("sdk.Content").appendHidden("");
                  b("insertIframe")({
                    url: b("getBlankIframeSrc")(),
                    root: f,
                    name: e,
                    className: "fb_hidden fb_invisible",
                    onload: function () {
                      f.parentNode != null && f.parentNode.removeChild(f);
                    },
                  });
                  b("sdk.Content").submitToTarget({ url: a, target: e, params: d });
                }
              }
              a = {
                log: function (a, b) {
                  (typeof b.source !== "string" || b.source === "") && (b.source = "jssdk"),
                    g({ lid: a, payload: ES("JSON", "stringify", !1, b) });
                },
                impression: g,
              };
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.Scribe",
            ["QueryString", "UrlMap", "sdk.Runtime"],
            function (a, b, c, d, e, f) {
              function a(a, c) {
                if (c.extra != null && typeof c.extra === "object") {
                  var d = c.extra;
                  d.revision = b("sdk.Runtime").getRevision();
                }
                new Image().src = b("QueryString").appendToUrl(
                  b("UrlMap").resolve("www") + "/common/scribe_endpoint.php",
                  { c: a, m: ES("JSON", "stringify", !1, c) }
                );
              }
              c = { log: a };
              e.exports = c;
            },
            null
          );
          __d(
            "Base64",
            [],
            function (a, b, c, d, e, f) {
              var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
              function h(a) {
                a = (a.charCodeAt(0) << 16) | (a.charCodeAt(1) << 8) | a.charCodeAt(2);
                return String.fromCharCode(
                  g.charCodeAt(a >>> 18),
                  g.charCodeAt((a >>> 12) & 63),
                  g.charCodeAt((a >>> 6) & 63),
                  g.charCodeAt(a & 63)
                );
              }
              var i =
                ">___?456789:;<=_______\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19______\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123";
              function j(a) {
                a =
                  (i.charCodeAt(a.charCodeAt(0) - 43) << 18) |
                  (i.charCodeAt(a.charCodeAt(1) - 43) << 12) |
                  (i.charCodeAt(a.charCodeAt(2) - 43) << 6) |
                  i.charCodeAt(a.charCodeAt(3) - 43);
                return String.fromCharCode(a >>> 16, (a >>> 8) & 255, a & 255);
              }
              var k = {
                encode: function (a) {
                  a = unescape(encodeURI(a));
                  var b = (a.length + 2) % 3;
                  a = (a + "\0\0".slice(b)).replace(/[\s\S]{3}/g, h);
                  return a.slice(0, a.length + b - 2) + "==".slice(b);
                },
                decode: function (a) {
                  a = a.replace(/[^A-Za-z0-9+\/]/g, "");
                  var b = (a.length + 3) & 3;
                  a = (a + "AAA".slice(b)).replace(/..../g, j);
                  a = a.slice(0, a.length + b - 3);
                  try {
                    return decodeURIComponent(escape(a));
                  } catch (a) {
                    throw new Error("Not valid UTF-8");
                  }
                },
                encodeObject: function (a) {
                  return k.encode(ES("JSON", "stringify", !1, a));
                },
                decodeObject: function (a) {
                  return ES("JSON", "parse", !1, k.decode(a));
                },
                encodeNums: function (a) {
                  return String.fromCharCode.apply(
                    String,
                    ES(a, "map", !0, function (a) {
                      return g.charCodeAt((a | -(a > 63 ? 1 : 0)) & -(a > 0 ? 1 : 0) & 63);
                    })
                  );
                },
              };
              e.exports = k;
            },
            null
          );
          __d(
            "sdk.SignedRequest",
            ["Base64"],
            function (a, b, c, d, e, f) {
              function a(a) {
                if (a == null || a === "") return null;
                a = a.split(".", 2)[1].replace(/\-/g, "+").replace(/\_/g, "/");
                return b("Base64").decodeObject(a);
              }
              c = { parse: a };
              e.exports = c;
            },
            null
          );
          __d(
            "sdk.URI",
            ["QueryString", "URIBase"],
            function (a, b, c, d, e, f) {
              var g,
                h = /\.facebook\.com$/,
                i = {
                  serialize: function (a) {
                    return a ? b("QueryString").encode(a) : "";
                  },
                  deserialize: function (a) {
                    return a ? b("QueryString").decode(a) : {};
                  },
                };
              a = (function (a) {
                "use strict";
                babelHelpers.inheritsLoose(c, a);
                function c(b) {
                  return a.call(this, b, i) || this;
                }
                var d = c.prototype;
                d.isFacebookURI = function () {
                  return h.test(this.getDomain());
                };
                d.valueOf = function () {
                  return this.toString();
                };
                c.isValidURI = function (a) {
                  return (g || (g = b("URIBase"))).isValid(a, i);
                };
                return c;
              })(g || (g = b("URIBase")));
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.WebStorage",
            ["Log"],
            function (a, b, c, d, e, f) {
              "use strict";
              a = {
                getLocalStorage: function () {
                  try {
                    return window.localStorage;
                  } catch (a) {
                    b("Log").warn("Failed to get local storage");
                  }
                  return null;
                },
                getLocalStorageForRead: function () {
                  try {
                    var a = window.localStorage;
                    if (a) {
                      var c = "__test__" + ES("Date", "now", !1);
                      a.setItem(c, "");
                      a.removeItem(c);
                    }
                    return a;
                  } catch (a) {
                    b("Log").warn("Failed to get local storage");
                  }
                  return null;
                },
                getSessionStorage: function () {
                  try {
                    return window.sessionStorage;
                  } catch (a) {
                    b("Log").warn("Failed to get session storage");
                  }
                  return null;
                },
                getSessionStorageForRead: function () {
                  try {
                    var a = window.sessionStorage;
                    if (a) {
                      var c = "__test__" + ES("Date", "now", !1);
                      a.setItem(c, "");
                      a.removeItem(c);
                    }
                    return a;
                  } catch (a) {
                    b("Log").warn("Failed to get session storage");
                  }
                  return null;
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.FeatureFunctor",
            [],
            function (a, b, c, d, e, f) {
              function g(a, b, c) {
                if (a.features && b in a.features) {
                  a = a.features[b];
                  if (typeof a === "object" && typeof a.rate === "number")
                    if (a.rate && Math.random() * 100 <= a.rate) return a.value || !0;
                    else return a.value ? null : !1;
                  else return a;
                }
                return c;
              }
              function a(a) {
                return function () {
                  for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++) c[d] = arguments[d];
                  if (c.length < 2) throw new Error("Default value is required");
                  var e = c[0],
                    f = c[1];
                  return g(a, e, f);
                };
              }
              e.exports = { create: a };
            },
            null
          );
          __d(
            "sdk.feature",
            ["JSSDKConfig", "sdk.FeatureFunctor"],
            function (a, b, c, d, e, f) {
              e.exports = b("sdk.FeatureFunctor").create(b("JSSDKConfig"));
            },
            null
          );
          __d(
            "sdk.getContextType",
            ["sdk.Runtime", "sdk.UA"],
            function (a, b, c, d, e, f) {
              function a() {
                if (b("sdk.UA").nativeApp()) return 3;
                if (b("sdk.UA").mobile()) return 2;
                return b("sdk.Runtime").isEnvironment(b("sdk.Runtime").ENVIRONMENTS.CANVAS) ? 5 : 1;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.Auth",
            [
              "Log",
              "ObservableMixin",
              "PlatformOAuthDialogLoginFunnelLogger",
              "QueryString",
              "UrlMap",
              "sdk.Cookie",
              "sdk.feature",
              "sdk.getContextType",
              "sdk.Impressions",
              "sdk.Runtime",
              "sdk.Scribe",
              "sdk.SignedRequest",
              "sdk.URI",
              "sdk.WebStorage",
            ],
            function (a, b, c, d, e, f) {
              var g = "fblst_",
                h = "fbssls_",
                i = "fblo_",
                j = 365 * 24 * 60 * 60 * 1e3,
                k = 60 * 90 * 1e3,
                l = 60 * 60 * 24 * 1e3,
                m = 114,
                n,
                o,
                p = new (b("ObservableMixin"))();
              function q(a, c, d) {
                d === void 0 && (d = !1);
                var e = b("sdk.Runtime").getUserID(),
                  f = b("sdk.Runtime").getLoginStatus(),
                  g = "";
                if (a != null) {
                  E = "loaded";
                  if (a.userID != null && a.userID !== "") g = a.userID;
                  else if (a.signedRequest != null && a.signedRequest !== "") {
                    var i = b("sdk.SignedRequest").parse(a.signedRequest);
                    i != null && i !== "" && i.user_id != null && i.user_id !== "" && (g = i.user_id);
                  }
                  if (b("sdk.Runtime").getUseCookie()) {
                    i = a.expiresIn === 0 ? 0 : ES("Date", "now", !1) + a.expiresIn * 1e3;
                    b("sdk.Cookie").setSignedRequestCookie(a.signedRequest, i);
                  }
                } else
                  b("sdk.Runtime").getUseCookie() && b("sdk.Cookie").clearSignedRequestCookie(),
                    b("sdk.Runtime").getUseLocalStorage() && w();
                i =
                  (f === "unknown" && a != null) ||
                  (b("sdk.Runtime").getUseCookie() && b("sdk.Runtime").getCookieUserID() !== g);
                var j = e != null && e !== "" && a == null;
                e = a != null && e != null && e !== "" && e != g;
                var m = a != n;
                f = c != f;
                b("sdk.Runtime").setLoginStatus(c);
                b("sdk.Runtime").setAccessToken((a && a.accessToken) || null);
                b("sdk.Runtime").setUserID(g);
                n = a;
                g = { authResponse: a, status: c };
                (j || e) && p.inform("logout", g);
                (i || e) && p.inform("login", g);
                m && p.inform("authresponse.change", g);
                f && p.inform("status.change", g);
                if (
                  !d &&
                  b("sdk.feature")("cache_auth_response", !1) &&
                  b("sdk.Runtime").getUseLocalStorage()
                ) {
                  j = b("sdk.WebStorage").getSessionStorage();
                  j &&
                    j.setItem(
                      h + b("sdk.Runtime").getClientID(),
                      ES("JSON", "stringify", !1, {
                        authResponse: a,
                        status: c,
                        expiresAt:
                          a != null && a.expiresIn && a.expiresIn !== 0
                            ? ES("Date", "now", !1) + Math.min(a.expiresIn * 0.75 * 1e3, k)
                            : ES("Date", "now", !1) + l,
                      })
                    );
                }
                return g;
              }
              function r() {
                return n;
              }
              function s(a) {
                b("sdk.Cookie").getDomain() == null && b("sdk.Cookie").setDomain("." + a);
              }
              function t(a) {
                a ? b("sdk.Runtime").setGraphDomain(a) : b("sdk.Runtime").setGraphDomain("");
              }
              function a(c) {
                var a = r();
                q(null, "unknown");
                y();
                if (a != null && a.accessToken != null) {
                  a = new (b("sdk.URI"))(
                    b("UrlMap").resolve("www").replace("web.", "www.") + "/x/oauth/logout"
                  ).addQueryData("access_token", a.accessToken);
                  var d = new XMLHttpRequest();
                  d &&
                    (d.open("GET", a.toString(), !0),
                    (d.withCredentials = !0),
                    c &&
                      (d.onreadystatechange = function () {
                        d.readyState >= 2 &&
                          c({ authResponse: r(), status: b("sdk.Runtime").getLoginStatus() });
                      }),
                    d.send());
                }
                b("sdk.Scribe").log("jssdk_error", {
                  appId: b("sdk.Runtime").getClientID(),
                  error: "PLATFORM_AUTH_LOGOUT",
                  extra: { args: { fblo: !0 } },
                });
              }
              function c(a, c, d, e) {
                return function (d) {
                  if (d && d.access_token) {
                    var f = b("sdk.SignedRequest").parse(d.signed_request);
                    f = f != null ? (f.user_id != null ? f.user_id : null) : null;
                    c = {
                      accessToken: d.access_token,
                      userID: f,
                      expiresIn: Number(d.expires_in),
                      signedRequest: d.signed_request,
                      graphDomain: d.graph_domain,
                    };
                    d.asset_scopes &&
                      (c = babelHelpers["extends"]({}, c, {
                        asset_scopes: ES("JSON", "parse", !1, d.asset_scopes),
                      }));
                    c = v(c, d);
                    x();
                    f = "connected";
                    q(c, f);
                    u(e);
                  } else
                    d && d.asset_scopes
                      ? ((c = { asset_scopes: ES("JSON", "parse", !1, d.asset_scopes) }),
                        (c = v(c, d)),
                        x(),
                        (f = "connected"),
                        q(c, f),
                        u(e))
                      : d && d.error === "access_denied"
                      ? (y(), (f = "unknown"), q(null, f))
                      : d && d.result && (x(), (c = d.result.authResponse));
                  if (a) {
                    f = { authResponse: c, status: b("sdk.Runtime").getLoginStatus() };
                    a(f);
                  }
                  return c;
                };
              }
              function u(a) {
                var c = a && a.logger_id ? a.logger_id : null;
                a = a && a.cbt ? a.cbt : 0;
                c = {
                  action: "client_login_end",
                  logger_id: c,
                  client_funnel_version: b("PlatformOAuthDialogLoginFunnelLogger").CLIENT_FUNNEL_VERSION,
                  cbt_delta: ES("Date", "now", !1) - a,
                };
                b("sdk.Impressions").log(117, { payload: c });
              }
              function v(a, c) {
                c.granted_scopes && (a = babelHelpers["extends"]({}, a, { grantedScopes: c.granted_scopes }));
                c.data_access_expiration_time &&
                  (a = babelHelpers["extends"]({}, a, {
                    data_access_expiration_time: Number(c.data_access_expiration_time),
                  }));
                c.base_domain != null && s(c.base_domain);
                t(c.graph_domain);
                c.enforce_https && b("sdk.Runtime").setEnforceHttps(!0);
                c.referred && (a = babelHelpers["extends"]({}, a, { referred: c.referred }));
                if (
                  b("sdk.Runtime").getUseLocalStorage() &&
                  location.protocol === "https:" &&
                  c.long_lived_token
                ) {
                  var d = b("sdk.WebStorage").getLocalStorage();
                  d && d.setItem(g + b("sdk.Runtime").getClientID(), c.long_lived_token);
                }
                return a;
              }
              function w() {
                var a = b("sdk.WebStorage").getLocalStorage();
                a && a.removeItem(g + b("sdk.Runtime").getClientID());
              }
              function x() {
                b("sdk.Cookie").setRaw(i, "", 0, !1), b("sdk.Cookie").setRaw(i, "", 0, !0);
              }
              function y() {
                b("sdk.Cookie").setRaw(i, "y", ES("Date", "now", !1) + j, !1);
              }
              function z(a) {
                var b = "unknown";
                q(null, b);
                b = { authResponse: null, status: b };
                a && a(b);
              }
              function A(a) {
                o && (window.clearTimeout(o), (o = null));
                var c = b("sdk.Cookie").getRaw(i) === "y",
                  d = null,
                  e = !1;
                if (
                  b("sdk.Runtime").getLoginStatus() !== "connected" &&
                  (document.referrer === "" || /^https?:\/\/([\w\.]+)?facebook.com\//.test(document.referrer))
                ) {
                  var f = location.hash.substr(1);
                  if (f !== "") {
                    f = b("QueryString").decode(f, !0);
                    d = f.access_token;
                    d != null && x();
                    window == top &&
                      d != null &&
                      (delete f.access_token,
                      delete f.code,
                      delete f.signed_request,
                      (location.hash = b("QueryString").encode(f)));
                  }
                  f = b("QueryString").decode(location.search);
                  f.error === "access_denied" && (e = !0);
                }
                if (c || e) {
                  z(a);
                  return;
                }
                f = null;
                if (b("sdk.Runtime").getUseLocalStorage()) {
                  c = b("sdk.WebStorage").getLocalStorageForRead();
                  c && (f = c.getItem(g + b("sdk.Runtime").getClientID()));
                }
                c = (e = d) != null ? e : f;
                window.location.protocol !== "https:" && z(a);
                p.getLoginStatusCORS(a, c, n);
              }
              function B(a) {
                a = new (b("sdk.URI"))(b("UrlMap").resolve("www").replace("web.", "www.") + "/x/oauth/status")
                  .addQueryData("client_id", b("sdk.Runtime").getClientID())
                  .addQueryData("input_token", a)
                  .addQueryData("redirect_uri", window.location.href)
                  .addQueryData("origin", b("sdk.getContextType")())
                  .addQueryData("sdk", "joey")
                  .addQueryData("wants_cookie_data", b("sdk.Runtime").getUseCookie());
                if (window.location.ancestorOrigins) {
                  var c = window.location.ancestorOrigins;
                  if (c.length > 0) {
                    var d = "";
                    for (var e = 0; e < c.length; e++) (d += c[e]), (d += ",");
                    a.addQueryData("ancestor_origins", d.slice(0, -1));
                  }
                }
                return a;
              }
              function C(a, c, d) {
                switch (c) {
                  case "connected":
                    d = ES("JSON", "parse", !1, d);
                    var e = {
                      accessToken: d.access_token,
                      userID: d.user_id,
                      expiresIn: Number(d.expires_in),
                      signedRequest: d.signed_request,
                      graphDomain: d.graph_domain,
                    };
                    d.enforce_https != null && b("sdk.Runtime").setEnforceHttps(!0);
                    d.data_access_expiration_time != null &&
                      (e.data_access_expiration_time = Number(d.data_access_expiration_time));
                    d.base_domain != null && s(d.base_domain);
                    t(d.graph_domain);
                    if (
                      b("sdk.Runtime").getUseLocalStorage() &&
                      location.protocol === "https:" &&
                      d.long_lived_token
                    ) {
                      var f = b("sdk.WebStorage").getLocalStorage();
                      f && f.setItem(g + b("sdk.Runtime").getClientID(), d.long_lived_token);
                    }
                    x();
                    q(e, c);
                    o = window.setTimeout(function () {
                      A(function () {});
                    }, k);
                    break;
                  case "not_authorized":
                  case "unknown":
                  default:
                    q(null, c);
                }
                if (a) {
                  f = { authResponse: r(), status: b("sdk.Runtime").getLoginStatus() };
                  a(f);
                }
              }
              function D(c, d, a) {
                d === 0
                  ? (b("sdk.feature")("cors_status_fetch_cancel_tracking", !1) &&
                      b("sdk.Scribe").log("jssdk_error", {
                        appId: b("sdk.Runtime").getClientID(),
                        error: "CORS_STATUS_FETCH_CANCELLED",
                        extra: { message: "Status 0 returned." },
                      }),
                    b("Log").error("Error retrieving login status, fetch cancelled."))
                  : (b("sdk.Scribe").log("jssdk_error", {
                      appId: b("sdk.Runtime").getClientID(),
                      error: "CORS_STATUS_FETCH",
                      extra: { message: "HTTP Status Code " + d },
                    }),
                    b("Log").error("Error retrieving login status, HTTP status code: " + d));
                if (c) {
                  d = { authResponse: a, status: b("sdk.Runtime").getLoginStatus() };
                  c(d);
                }
              }
              function d(c, d, a) {
                var e = ES("Date", "now", !1),
                  f = B(d);
                function g() {
                  var d = new XMLHttpRequest();
                  d &&
                    (d.open("GET", f.toString(), !0),
                    (d.withCredentials = !0),
                    (d.onreadystatechange = function () {
                      if (d.readyState === 4) {
                        if (b("sdk.feature")("e2e_ping_tracking", !0)) {
                          var f = { init: e, close: ES("Date", "now", !1), method: "cors" };
                          b("Log").debug("e2e: %s", ES("JSON", "stringify", !1, f));
                          b("sdk.Impressions").log(m, { payload: f });
                        }
                        if (d.status === 200) {
                          C(
                            c,
                            (f = d.getResponseHeader("fb-s")) != null ? f : "unknown",
                            (f = d.getResponseHeader("fb-ar")) != null ? f : "{}"
                          );
                        } else D(c, d.status, a);
                      }
                    }),
                    d.send());
                }
                function h() {
                  window
                    .fetch(f.toString(), { referrer: "/", mode: "cors", credentials: "include" })
                    .then(function (b) {
                      if (b.status === 200) {
                        var d;
                        C(
                          c,
                          (d = b.headers.get("fb-s")) != null ? d : "unknown",
                          (d = b.headers.get("fb-ar")) != null ? d : "{}"
                        );
                      } else D(c, b.status, a);
                    })
                    ["catch"](function (b) {
                      return D(c, 0, a);
                    });
                }
                typeof window.fetch === "function" ? h() : g();
              }
              var E;
              function f(a, c) {
                c === void 0 && (c = !1);
                var d = b("sdk.Runtime").getClientID();
                if (d == null || d === "") {
                  b("Log").warn("FB.getLoginStatus() called before calling FB.init().");
                  z(a);
                  return;
                }
                if (
                  !(typeof d === "number" || typeof d === "string") ||
                  d === 0 ||
                  (typeof d === "string" && (d === "0" || !/^\d+$/.test(d)))
                ) {
                  b("Log").warn("FB.getLoginStatus() not checked for an invalid client ID " + d);
                  z(a);
                  return;
                }
                if (
                  !c &&
                  b("sdk.feature")("cache_auth_response", !1) &&
                  b("sdk.Runtime").getUseLocalStorage() &&
                  location.protocol === "https:"
                ) {
                  d = b("sdk.WebStorage").getSessionStorageForRead();
                  if (d) {
                    d = d.getItem(h + b("sdk.Runtime").getClientID());
                    if (d != null)
                      try {
                        d = ES("JSON", "parse", !1, d);
                        if (d != null && d.expiresAt != null && d.expiresAt > ES("Date", "now", !1)) {
                          var e;
                          E = "loaded";
                          q(d.authResponse, (e = d.status) != null ? e : "unknown", !0);
                          o = window.setTimeout(
                            function () {
                              A(function () {});
                            },
                            d.status === "connected" ? k : l
                          );
                        }
                      } catch (a) {}
                  }
                }
                if (!c)
                  if (E === "loaded") {
                    if (a) {
                      e = { authResponse: r(), status: b("sdk.Runtime").getLoginStatus() };
                      a(e);
                    }
                    return;
                  } else if (E === "loading") {
                    a && p.subscribe("FB.loginStatus", a);
                    return;
                  }
                a && p.subscribe("FB.loginStatus", a);
                E = "loading";
                d = function (a) {
                  (E = "loaded"), p.inform("FB.loginStatus", a), p.clearSubscribers("FB.loginStatus");
                };
                A(d);
              }
              ES("Object", "assign", !1, p, {
                removeLogoutState: x,
                getLoginStatus: f,
                getLoginStatusCORS: d,
                fetchLoginStatus: A,
                logout: a,
                setAuthResponse: q,
                getAuthResponse: r,
                parseSignedRequest: b("sdk.SignedRequest").parse,
                xdResponseWrapper: c,
              });
              e.exports = p;
            },
            null
          );
          __d(
            "sdk.DOM",
            ["Assert", "sdk.domReady"],
            function (a, b, c, d, e, f) {
              var g = {};
              function h(a, b) {
                a =
                  a.getAttribute(b) ||
                  a.getAttribute(b.replace(/_/g, "-")) ||
                  a.getAttribute(b.replace(/-/g, "_")) ||
                  a.getAttribute(b.replace(/-/g, "")) ||
                  a.getAttribute(b.replace(/_/g, "")) ||
                  a.getAttribute("data-" + b) ||
                  a.getAttribute("data-" + b.replace(/_/g, "-")) ||
                  a.getAttribute("data-" + b.replace(/-/g, "_")) ||
                  a.getAttribute("data-" + b.replace(/-/g, "")) ||
                  a.getAttribute("data-" + b.replace(/_/g, ""));
                return a != null ? String(a) : null;
              }
              function a(a, b) {
                a = h(a, b);
                return a != null ? /^(true|1|yes|on)$/.test(a) : null;
              }
              function c(a, c) {
                b("Assert").isTruthy(a, "element not specified");
                b("Assert").isString(c);
                try {
                  a.innerHTML = c;
                } catch (a) {
                  throw new Error("Could not set innerHTML : " + a.message);
                }
              }
              function i(a, c) {
                b("Assert").isTruthy(a, "element not specified");
                b("Assert").isString(c);
                a = " " + a.className + " ";
                return ES(a, "indexOf", !0, " " + c + " ") >= 0;
              }
              function d(a, c) {
                b("Assert").isTruthy(a, "element not specified");
                if (a == null) return;
                b("Assert").isString(c);
                i(a, c) || (a.className = a.className + " " + c);
              }
              function f(a, c) {
                b("Assert").isTruthy(a, "element not specified");
                if (a == null) return;
                b("Assert").isString(c);
                c = new RegExp("\\s*" + c, "g");
                a.className = ES(a.className.replace(c, ""), "trim", !0);
              }
              function j(a, c, d) {
                b("Assert").isString(a);
                c = c || document.body;
                if (c == null) return [];
                d = d || "*";
                return ES("Array", "from", !1, c.querySelectorAll(d + "." + a));
              }
              function k(a, c) {
                b("Assert").isTruthy(a, "element not specified");
                b("Assert").isString(c);
                c = c.replace(/-(\w)/g, function (a, b) {
                  return b.toUpperCase();
                });
                a = a.currentStyle || document.defaultView.getComputedStyle(a, null);
                a = a[c];
                /backgroundPosition?/.test(c) && /top|left/.test(a) && (a = "0%");
                return a;
              }
              function l(a, c, d) {
                b("Assert").isTruthy(a, "element not specified"),
                  b("Assert").isString(c),
                  (c = c.replace(/-(\w)/g, function (a, b) {
                    return b.toUpperCase();
                  })),
                  (a.style[c] = d);
              }
              function m(a, b) {
                var c = !0;
                for (var d = 0, e; (e = b[d++]); ) e in g || ((c = !1), (g[e] = !0));
                if (c) return;
                e = document.createElement("style");
                e.type = "text/css";
                e.textContent = a;
                document.getElementsByTagName("head")[0].appendChild(e);
              }
              function n(a) {
                if (!a || !a.parentNode) return null;
                else return a.parentNode.removeChild(a);
              }
              function o() {
                var a,
                  b =
                    document.documentElement && document.compatMode == "CSS1Compat"
                      ? document.documentElement
                      : document.body;
                return {
                  scrollTop:
                    (b == null ? void 0 : b.scrollTop) ||
                    ((a = document.body) == null ? void 0 : a.scrollTop),
                  scrollLeft:
                    (b == null ? void 0 : b.scrollLeft) ||
                    ((a = document.body) == null ? void 0 : a.scrollLeft),
                  width: window.innerWidth ? window.innerWidth : b == null ? void 0 : b.clientWidth,
                  height: window.innerHeight ? window.innerHeight : b == null ? void 0 : b.clientHeight,
                };
              }
              d = {
                addCss: d,
                addCssRules: m,
                containsCss: i,
                getAttr: h,
                getBoolAttr: a,
                getByClass: j,
                getStyle: k,
                getViewportInfo: o,
                html: c,
                ready: b("sdk.domReady"),
                remove: n,
                removeCss: f,
                setStyle: l,
              };
              e.exports = d;
            },
            null
          );
          __d(
            "normalizeError",
            ["sdk.UA"],
            function (a, b, c, d, e, f) {
              "use strict";
              a = function (a) {
                var c = {
                  line: a.lineNumber || a.line,
                  message: a.message,
                  name: a.name,
                  script: a.fileName || a.sourceURL || a.script,
                  stack: a.stackTrace || a.stack,
                };
                c._originalError = a;
                a = /([\w:\.\/]+\.js):(\d+)/.exec(a.stack);
                b("sdk.UA").chrome() && a && ((c.script = a[1]), (c.line = parseInt(a[2], 10)));
                for (var d in c) c[d] == null && delete c[d];
                return c;
              };
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.ErrorHandler",
            ["ManagedError", "normalizeError", "wrapFunction"],
            function (a, b, c, d, e, f) {
              function a(a, c) {
                var d = "";
                function e(a) {
                  var b = a._originalError;
                  delete a._originalError;
                  c(a);
                  throw b;
                }
                function f(c, f) {
                  return function () {
                    if (!a) return c.apply(this, arguments);
                    try {
                      d = f;
                      return c.apply(this, arguments);
                    } catch (a) {
                      if (a instanceof b("ManagedError")) throw a;
                      var g = b("normalizeError")(a);
                      g.entry = f;
                      var h = ES(Array.prototype.slice.call(arguments), "map", !0, function (a) {
                        var b = Object.prototype.toString.call(a);
                        return /^\[object (String|Number|Boolean|Object|Date)\]$/.test(b) ? a : a.toString();
                      });
                      g.args = ES("JSON", "stringify", !1, h).substring(0, 200);
                      e(g);
                    } finally {
                      d = "";
                    }
                  };
                }
                function g(a) {
                  a.__wrapper ||
                    (a.__wrapper = function () {
                      try {
                        return a.apply(this, arguments);
                      } catch (a) {
                        window.setTimeout(function () {
                          throw a;
                        }, 0);
                        return !1;
                      }
                    });
                  return a.__wrapper;
                }
                function h(a) {
                  try {
                    return a && a.callee && a.callee.caller ? a.callee.caller.name : "";
                  } catch (a) {
                    return "";
                  }
                }
                function i(a, c) {
                  return function (e, f) {
                    var g = c + ":" + (d || "[global]") + ":" + (e.name || "[anonymous]" + h(arguments));
                    return a(b("wrapFunction")(e, "entry", g), f);
                  };
                }
                a &&
                  ((setTimeout = i(setTimeout, "setTimeout")),
                  (setInterval = i(setInterval, "setInterval")),
                  b("wrapFunction").setWrapper(f, "entry"));
                return { guard: f, unguard: g };
              }
              e.exports = { create: a };
            },
            null
          );
          __d(
            "sdk.ErrorHandling",
            ["sdk.ErrorHandler", "sdk.feature", "sdk.Runtime", "sdk.Scribe"],
            function (a, b, c, d, e, f) {
              a = b("sdk.feature")("error_handling", !1);
              e.exports = b("sdk.ErrorHandler").create(a, function (a) {
                b("sdk.Scribe").log("jssdk_error", {
                  appId: b("sdk.Runtime").getClientID(),
                  error: a.name || a.message,
                  extra: a,
                });
              });
            },
            null
          );
          __d(
            "FB",
            [
              "DOMWrapper",
              "GlobalCallback",
              "JSSDKCssConfig",
              "Log",
              "dotAccess",
              "sdk.Auth",
              "sdk.Content",
              "sdk.DOM",
              "sdk.domReady",
              "sdk.ErrorHandling",
              "sdk.Runtime",
            ],
            function (a, b, c, d, e, f) {
              var g = (window.FB = {});
              c = {};
              b("Log").level = 0;
              b("GlobalCallback").setPrefix("FB.__globalCallbacks");
              var h = document.createElement("div");
              b("DOMWrapper").setRoot(h);
              b("sdk.domReady")(function () {
                b("Log").info("domReady"),
                  b("sdk.Content").appendHidden(h),
                  b("JSSDKCssConfig").rules &&
                    b("sdk.DOM").addCssRules(b("JSSDKCssConfig").rules, b("JSSDKCssConfig").components);
              });
              b("sdk.Runtime").subscribe("AccessToken.change", function (a) {
                !a &&
                  b("sdk.Runtime").getLoginStatus() === "connected" &&
                  b("sdk.Auth").getLoginStatus(null, !0);
              });
              function i(a, c, d, e) {
                return b("sdk.ErrorHandling").guard(function () {
                  function f(a) {
                    if (ES("Array", "isArray", !1, a)) return ES(a, "map", !0, f);
                    return a && typeof a === "object" && a.__wrapped
                      ? a.__wrapped
                      : typeof a === "function" && /^function/.test(a.toString())
                      ? b("sdk.ErrorHandling").unguard(a)
                      : a;
                  }
                  var g = ES(Array.prototype.slice.call(arguments), "map", !0, f),
                    h = a.apply(e, g),
                    j,
                    k = !0;
                  if (h && typeof h === "object") {
                    j = ES("Object", "create", !1, h);
                    j.__wrapped = h;
                    for (var d in h) {
                      var l = h[d];
                      if (typeof l !== "function" || d === "constructor") continue;
                      k = !1;
                      j[d] = i(l, c + ":" + d, d, h);
                    }
                  }
                  return !k ? j : k ? h : j;
                }, c);
              }
              function a(a, c) {
                var d = a ? b("dotAccess")(g, a, !0) : g;
                ES(ES("Object", "keys", !1, c), "forEach", !0, function (b) {
                  var e = c[b];
                  if (typeof e === "function") {
                    var f = (a ? a + "." : "") + b;
                    f = i(e, f, b, c);
                    f && (d[b] = f);
                  } else (typeof e === "object" || typeof e === "number") && (d[b] = e);
                });
              }
              ES("Object", "assign", !1, c, { provide: a });
              e.exports = c;
            },
            null
          );
          __d(
            "ArgumentError",
            ["ManagedError"],
            function (a, b, c, d, e, f) {
              a = (function (a) {
                "use strict";
                babelHelpers.inheritsLoose(b, a);
                function b(b, c) {
                  return a.call(this, b, c) || this;
                }
                return b;
              })(b("ManagedError"));
              e.exports = a;
            },
            null
          );
          __d(
            "flattenObject",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              a = function (a) {
                var b = {};
                for (var c in a)
                  if (Object.prototype.hasOwnProperty.call(a, c)) {
                    var d = a[c];
                    if (null === d || void 0 === d) continue;
                    else typeof d === "string" ? (b[c] = d) : (b[c] = ES("JSON", "stringify", !1, d));
                  }
                return b;
              };
              e.exports = a;
            },
            null
          );
          __d(
            "ApiClientUtils",
            ["ArgumentError", "Assert", "Log", "flattenObject", "sdk.URI", "sprintf"],
            function (a, b, c, d, e, f) {
              var g = { get: !0, post: !0, "delete": !0, put: !0 };
              function a(a) {
                var c = a.shift();
                b("Assert").isString(c, "Invalid path");
                !/^https?/.test(c) && c.charAt(0) !== "/" && (c = "/" + c);
                var d = {};
                try {
                  c = new (b("sdk.URI"))(c);
                } catch (a) {
                  throw new (b("ArgumentError"))(a.message, a);
                }
                ES(a, "forEach", !0, function (a) {
                  return (d[typeof a] = a);
                });
                a = (d.string || "get").toLowerCase();
                b("Assert").isTrue(
                  Object.prototype.hasOwnProperty.call(g, a),
                  b("sprintf")("Invalid method passed to ApiClient: %s", a)
                );
                var e = d["function"];
                e || b("Log").warn("No callback passed to the ApiClient");
                d.object && c.addQueryData(b("flattenObject")(d.object));
                var f = c.getQueryData();
                f.method = a;
                return { uri: c, callback: e, params: f };
              }
              e.exports = { parseCallDataFromArgs: a };
            },
            null
          );
          __d(
            "errorCode",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              function a(a) {
                throw new Error('errorCode("' + a + '"): This should not happen. Oh noes!');
              }
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.safelyParseResponse",
            ["errorCode", "nullthrows"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              c = function (a, b, c) {
                return h;
              };
              function a(a, d) {
                d === void 0 && (d = null);
                try {
                  return a === null ? h : ES("JSON", "parse", !1, b("nullthrows")(a));
                } catch (b) {
                  return c(b, a, d);
                }
              }
              var h = {
                error: {
                  code: 1,
                  error_subcode: 1357046,
                  message: "Received Invalid JSON reply.",
                  type: "http",
                },
              };
              a.ERROR = h;
              a.setErrorHandler = function (a) {
                c = a;
              };
              e.exports = a;
            },
            null
          );
          __d(
            "whitelistObjectKeys",
            [],
            function (a, b, c, d, e, f) {
              function a(a, b) {
                var c = {};
                b = ES("Array", "isArray", !1, b) ? b : ES("Object", "keys", !1, b);
                for (var d = 0; d < b.length; d++) typeof a[b[d]] !== "undefined" && (c[b[d]] = a[b[d]]);
                return c;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "ApiBatcher",
            ["invariant", "ApiClientUtils", "QueryString", "sdk.safelyParseResponse", "whitelistObjectKeys"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h = 50,
                i = 105440539523;
              a = (function () {
                function a(a, b) {
                  (this.$1 = []), (this.$2 = []), (this.$4 = null), (this.executeRequest = a), (this.$3 = b);
                }
                var c = a.prototype;
                c.scheduleBatchCall = function () {
                  var b = this;
                  for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++) d[e] = arguments[e];
                  var f = a.prepareBatchParams(d),
                    g = f.body,
                    i = f.callback,
                    j = f.method,
                    k = f.relative_url,
                    l = { method: j, relative_url: k };
                  g && (l.body = g);
                  this.$1.push(l);
                  this.$2.push(i);
                  this.$1.length == h
                    ? (this.$4 && clearTimeout(this.$4), this.$5())
                    : this.$4 ||
                      (this.$4 = setTimeout(function () {
                        b.$5();
                      }, 0));
                };
                a.prepareBatchParams = function (a, c) {
                  c === void 0 && (c = []);
                  a = b("ApiClientUtils").parseCallDataFromArgs(a);
                  var d = a.uri,
                    e = a.callback;
                  a = a.params.method;
                  var f,
                    g = d.removeQueryData("method").toString();
                  if (a.toLowerCase() == "post") {
                    var h = d.getQueryData();
                    f = b("QueryString").encode(h);
                    h = b("whitelistObjectKeys")(h, c);
                    g = d.setQueryData(h).toString();
                  }
                  return { body: f, callback: e, method: a, relative_url: g };
                };
                c.$5 = function () {
                  this.$1.length > 0 || g(0, 4698);
                  this.$1.length === this.$2.length || g(0, 4699);
                  var a = this.$1,
                    c = this.$2;
                  this.$1 = [];
                  this.$2 = [];
                  this.$4 = null;
                  if (a.length === 1) {
                    var d = a[0],
                      e = c[0],
                      f = d.body ? b("QueryString").decode(d.body) : null;
                    this.executeRequest(d.relative_url, d.method, f, e);
                    return;
                  }
                  this.executeRequest(
                    "/",
                    "POST",
                    { batch: a, include_headers: !1, batch_app_id: this.$3 || i },
                    function (a) {
                      ES("Array", "isArray", !1, a)
                        ? ES(a, "forEach", !0, function (a, d) {
                            c[d](b("sdk.safelyParseResponse")(a && a.body));
                          })
                        : ES(c, "forEach", !0, function (a) {
                            return a({ error: { message: "Fatal: batch call failed." } });
                          });
                    }
                  );
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "RequestConstants",
            ["errorCode"],
            function (a, b, c, d, e, f, g) {
              a = {
                code: 1,
                error_subcode: 1357045,
                message: "unknown error (empty response)",
                type: "http",
                status: 0,
              };
              e.exports = { PARSE_ERROR_TEMPLATE: a };
            },
            null
          );
          __d(
            "CORSRequest",
            ["Log", "QueryString", "RequestConstants", "sdk.safelyParseResponse", "wrapFunction"],
            function (a, b, c, d, e, f) {
              function g(a, c) {
                if (!self.XMLHttpRequest) return null;
                var d = new XMLHttpRequest(),
                  e = function () {};
                if ("withCredentials" in d)
                  d.open(a, c, !0), d.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                else if (self.XDomainRequest) {
                  d = new XDomainRequest();
                  try {
                    d.open(a, c), (d.onprogress = d.ontimeout = e);
                  } catch (a) {
                    return null;
                  }
                } else return null;
                var f = {
                    send: function (a) {
                      d.send(a);
                    },
                  },
                  g = b("wrapFunction")(
                    function () {
                      (g = e), "onload" in f && f.onload(d);
                    },
                    "entry",
                    "XMLHttpRequest:load"
                  ),
                  h = b("wrapFunction")(
                    function () {
                      (h = e), "onerror" in f && f.onerror(d);
                    },
                    "entry",
                    "XMLHttpRequest:error"
                  );
                d.onload = function () {
                  g();
                };
                d.onerror = function () {
                  h();
                };
                d.onreadystatechange = function () {
                  d.readyState == 4 && (d.status == 200 ? g() : h());
                };
                return f;
              }
              function a(a, c, d, e) {
                if (
                  ES(a, "includes", !0, "/../") ||
                  ES(a, "includes", !0, "/..\\") ||
                  ES(a, "includes", !0, "\\../") ||
                  ES(a, "includes", !0, "\\..\\")
                ) {
                  b("Log").error("CORSRequest.execute(): path traversal is not allowed.");
                  return !1;
                }
                d.suppress_http_code = 1;
                d = b("QueryString").encode(d);
                c != "post" && ((a = b("QueryString").appendToUrl(a, d)), (d = ""));
                c = g(c, a);
                if (!c) return !1;
                c.onload = function (c) {
                  e(b("sdk.safelyParseResponse")(c.responseText, a));
                };
                c.onerror = function (c) {
                  c.responseText
                    ? e(b("sdk.safelyParseResponse")(c.responseText, a))
                    : e({
                        error: babelHelpers["extends"]({}, b("RequestConstants").PARSE_ERROR_TEMPLATE, {
                          status: c.status,
                        }),
                      });
                };
                c.send(d);
                return !0;
              }
              c = { execute: a };
              e.exports = c;
            },
            null
          );
          __d(
            "ChunkedRequest",
            ["Log", "QueryString", "RequestConstants", "sdk.safelyParseResponse", "wrapFunction"],
            function (a, b, c, d, e, f) {
              var g = "{}",
                h = (function () {
                  "use strict";
                  function a(a) {
                    a === void 0 && (a = "\r\n"),
                      (this.offset = 0),
                      (this.delimiter = "\r\n"),
                      (this.delimiter = a);
                  }
                  var b = a.prototype;
                  b.parse = function (a, b) {
                    b === void 0 && (b = !1);
                    var c = [],
                      d = a.substring(this.offset),
                      e = 0,
                      f = ES(d, "indexOf", !0, this.delimiter, e);
                    f === 0 && ((e = this.delimiter.length), (f = ES(d, "indexOf", !0, this.delimiter, e)));
                    while (f > -1) {
                      var g = d.substring(e, f);
                      g && c.push(g);
                      e = f + this.delimiter.length;
                      f = ES(d, "indexOf", !0, this.delimiter, e);
                    }
                    this.offset += e;
                    if (b && d && f === -1) {
                      g = a.substring(this.offset);
                      c.push(g);
                    }
                    return c;
                  };
                  return a;
                })();
              function i(a, c) {
                if (!self.XMLHttpRequest) return null;
                var d = new XMLHttpRequest();
                if (!("withCredentials" in d)) return null;
                d.open(a, c, !0);
                d.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                var e = new h(),
                  f = {
                    send: function (a) {
                      d.send(a);
                    },
                  },
                  i = b("wrapFunction")(
                    function (a, b) {
                      if (f.onchunk) {
                        a = e.parse(a);
                        ES(a, "forEach", !0, function (a) {
                          return f.onchunk(a, b);
                        });
                        b && f.onchunk(g, b);
                      }
                    },
                    "entry",
                    "XMLHttpRequest:onchunk"
                  ),
                  j = b("wrapFunction")(
                    function () {
                      f.onerror && f.onerror(d);
                    },
                    "entry",
                    "XMLHttpRequest:error"
                  );
                d.onerror = j;
                d.onreadystatechange = function () {
                  d.readyState == 4
                    ? d.status === 200
                      ? i(d.responseText, !0)
                      : j()
                    : d.readyState == 3 && i(d.responseText, !1);
                };
                return f;
              }
              function a(a, c, d, e) {
                if (
                  ES(a, "includes", !0, "/../") ||
                  ES(a, "includes", !0, "/..\\") ||
                  ES(a, "includes", !0, "\\../") ||
                  ES(a, "includes", !0, "\\..\\")
                ) {
                  b("Log").error("ChunkedRequest.execute(): path traversal is not allowed.");
                  return !1;
                }
                d.suppress_http_code = 1;
                d = b("QueryString").encode(d);
                c != "post" && ((a = b("QueryString").appendToUrl(a, d)), (d = ""));
                c = i(c, a);
                if (!c) return !1;
                c.onchunk = function (a, c) {
                  e(b("sdk.safelyParseResponse")(a), c);
                };
                c.onerror = function (a) {
                  a.responseText
                    ? e(b("sdk.safelyParseResponse")(a.responseText))
                    : e({
                        error: babelHelpers["extends"]({}, b("RequestConstants").PARSE_ERROR_TEMPLATE, {
                          status: a.status,
                        }),
                      });
                };
                c.send(d);
                return !0;
              }
              c = { execute: a };
              e.exports = c;
            },
            null
          );
          __d(
            "JSONPRequest",
            ["DOMWrapper", "GlobalCallback", "Log", "QueryString"],
            function (a, b, c, d, e, f) {
              var g = 2e3,
                h = !1;
              function a(a, c, d, e) {
                if (
                  ES(a, "includes", !0, "/../") ||
                  ES(a, "includes", !0, "/..\\") ||
                  ES(a, "includes", !0, "\\../") ||
                  ES(a, "includes", !0, "\\..\\")
                ) {
                  b("Log").error("JSONPRequest.execute(): path traversal is not allowed.");
                  return !1;
                }
                var f = document.createElement("script"),
                  i = function (a) {
                    (i = function () {}),
                      b("GlobalCallback").remove(d.callback),
                      e(a),
                      f.parentNode.removeChild(f);
                  };
                d.callback = b("GlobalCallback").create(i);
                d.method || (d.method = c);
                a = b("QueryString").appendToUrl(a, d);
                if (!h && a.length > g) {
                  b("GlobalCallback").remove(d.callback);
                  return !1;
                }
                f.onerror = function () {
                  i({ error: { type: "http", message: "unknown error" } });
                };
                var j = function () {
                  setTimeout(function () {
                    i({ error: { type: "http", message: "unknown error" } });
                  }, 0);
                };
                f.addEventListener
                  ? f.addEventListener("load", j, !1)
                  : (f.onreadystatechange = function () {
                      /loaded|complete/.test(this.readyState) && j();
                    });
                f.src = a;
                b("DOMWrapper").getRoot().appendChild(f);
                return !0;
              }
              function c() {
                h = !0;
              }
              d = { execute: a, ignoreMaxQuerystringLength: c, MAX_QUERYSTRING_LENGTH: g };
              e.exports = d;
            },
            null
          );
          __d(
            "ApiClient",
            [
              "ApiBatcher",
              "ApiClientUtils",
              "Assert",
              "ChunkedRequest",
              "CORSRequest",
              "JSONPRequest",
              "Log",
              "ObservableMixin",
              "QueryString",
              "UrlMap",
              "flattenObject",
            ],
            function (a, b, c, d, e, f) {
              var g,
                h,
                i,
                j = [],
                k = b("JSONPRequest").MAX_QUERYSTRING_LENGTH,
                l = {
                  fql_query: !0,
                  fql_multiquery: !0,
                  friends_get: !0,
                  notifications_get: !0,
                  stream_get: !0,
                  users_getinfo: !0,
                },
                m = ["cors", "jsonp"],
                n = 0,
                o = [],
                p = 0,
                q = 0,
                r,
                s = b("Log");
              function t(a, c, d, e) {
                var f = p !== 0 && n >= p;
                if (f) {
                  o.push(function () {
                    return t(a, c, d, e);
                  });
                  w.inform("request.queued", a, c, d);
                  return;
                }
                n++;
                var h = babelHelpers["extends"]({}, i, d);
                h.pretty = h.pretty || 0;
                h = b("flattenObject")(h);
                f = { jsonp: b("JSONPRequest"), cors: b("CORSRequest"), chunked: b("ChunkedRequest") };
                var k = {},
                  l = h.access_token || g;
                l && (k.access_token = l);
                c !== "get" &&
                  ES(j, "forEach", !0, function (a) {
                    k[a] = h[a];
                  });
                l = ES("Object", "keys", !1, k);
                l.length > 0 && ((a = b("QueryString").appendToUrl(a, k)), delete h.access_token);
                l = m;
                for (var q = 0; q < l.length; q++) {
                  var r = f[l[q]],
                    s = ES("Object", "assign", !1, {}, h);
                  if (r.execute(a, c, s, e)) return;
                }
                e({
                  error: { type: "no-transport", message: "Could not find a usable transport for request" },
                });
              }
              function u(a, b, c, d, e, f, g, h) {
                if (d.transport && d.transport === "chunked" && h === !1) {
                  a(g, !1);
                  return;
                }
                g && g.error && w.inform("request.error", b, c, d, g, ES("Date", "now", !1) - e, f);
                w.inform("request.complete", b, c, d, g, ES("Date", "now", !1) - e, f);
                n--;
                a && a(g);
                h = o.length > 0 && n < p;
                if (h) {
                  b = o.shift();
                  b();
                }
              }
              function v() {
                for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++) c[d] = arguments[d];
                var e = b("ApiClientUtils").parseCallDataFromArgs(c),
                  f = e.uri,
                  g = e.callback,
                  h = e.params,
                  i = h.method;
                x(f, i) && (i = "post");
                var j =
                    f.getProtocol() && f.getDomain()
                      ? f.setQueryData({}).toString()
                      : b("UrlMap").resolve("graph_domain") + f.getPath(),
                  k = q++;
                "_fb_domain" in h && w.setKeptQueryParams(["_fb_domain"]);
                w.inform("request.prepare", j, h, k);
                t(
                  j,
                  i == "get" ? "get" : "post",
                  h,
                  ES(u, "bind", !0, null, g, f.getPath(), i, h, ES("Date", "now", !1), k)
                );
              }
              function a() {
                var a;
                r || (r = new (b("ApiBatcher"))(v, h));
                (a = r).scheduleBatchCall.apply(a, arguments);
              }
              function c(a, c) {
                b("Assert").isObject(a);
                b("Assert").isString(a.method, "method missing");
                c || s.warn("No callback passed to the ApiClient");
                var d = a.method.toLowerCase().replace(".", "_");
                a.format = "json-strings";
                a.api_key = h;
                d = d in l ? "api_read" : "api";
                d = b("UrlMap").resolve(d) + "/restserver.php";
                var e = q++;
                c = ES(u, "bind", !0, null, c, "/restserver.php", "get", a, ES("Date", "now", !1), e);
                t(d, "get", a, c);
              }
              function d(a) {
                return b("ApiBatcher").prepareBatchParams(a, j);
              }
              var w = ES("Object", "assign", !1, new (b("ObservableMixin"))(), {
                setAccessToken: function (a) {
                  g &&
                    a &&
                    g !== a &&
                    s.error(
                      "You are overriding current access token, that means some other app is expecting different access token and you will probably break things. Please consider passing access_token directly to API parameters instead of overriding the global settings."
                    ),
                    (g = a);
                },
                setAccessTokenForClientID: function (a, b) {
                  g && h && h !== b
                    ? s.error("Not overriding access token since it was not initialized by your application.")
                    : (g = a);
                },
                getClientID: function () {
                  return h;
                },
                getAccessToken: function () {
                  return g;
                },
                setClientID: function (a) {
                  h &&
                    h !== a &&
                    s.warn(
                      "Warning: Two different applications have attempted to set the client ID. Overriding the previously set client ID."
                    ),
                    (h = a);
                },
                setDefaultParams: function (a) {
                  i = a;
                },
                setDefaultTransports: function (a) {
                  m = a;
                },
                setLogger: function (a) {
                  s = a;
                },
                setMaxConcurrentRequests: function (a) {
                  p = a;
                },
                setKeptQueryParams: function (a) {
                  j = a;
                },
                getCurrentlyExecutingRequestCount: function () {
                  return n;
                },
                getQueuedRequestCount: function () {
                  return o.length;
                },
                rest: c,
                graph: v,
                scheduleBatchCall: a,
                prepareBatchParams: d,
              });
              function x(a, b) {
                return a.toString().length > k && b === "get";
              }
              e.exports = w;
            },
            null
          );
          __d(
            "sdk.PlatformVersioning",
            ["ManagedError", "sdk.Runtime"],
            function (a, b, c, d, e, f) {
              var g = /^v\d+\.\d\d?$/;
              a = {
                REGEX: g,
                assertVersionIsSet: function () {
                  if (!b("sdk.Runtime").getVersion())
                    throw new (b("ManagedError"))("init not called with valid version");
                },
                assertValidVersion: function (a) {
                  if (!g.test(a)) throw new (b("ManagedError"))("invalid version specified");
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.warnInsecure",
            ["Log", "sdk.feature", "sdk.Runtime", "sdk.Scribe"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = b("sdk.feature")("https_only_learn_more", ""),
                h = {};
              function a(a) {
                window.location.protocol !== "https:" &&
                  (b("Log").log(
                    "error",
                    -1,
                    "The method FB.%s can no longer be called from http pages. %s",
                    a,
                    g
                  ),
                  b("sdk.feature")("https_only_scribe_logging", !0) &&
                    !Object.prototype.hasOwnProperty.call(h, a) &&
                    (b("sdk.Scribe").log("jssdk_error", {
                      appId: b("sdk.Runtime").getClientID(),
                      error: "HttpsOnly",
                      extra: { message: a },
                    }),
                    (h[a] = !0)));
                return !0;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.api",
            [
              "ApiClient",
              "sdk.feature",
              "sdk.PlatformVersioning",
              "sdk.Runtime",
              "sdk.Scribe",
              "sdk.URI",
              "sdk.warnInsecure",
            ],
            function (a, b, c, d, e, f) {
              var g = b("sdk.feature")("should_log_response_error", !1),
                h;
              b("sdk.Runtime").subscribe("ClientID.change", function (a) {
                return b("ApiClient").setClientID(a);
              });
              b("sdk.Runtime").subscribe("AccessToken.change", function (a) {
                (h = a), b("ApiClient").setAccessToken(a);
              });
              (c = b("ApiClient")).setDefaultParams({ sdk: "joey" });
              c.subscribe("request.complete", function (a, c, d, e) {
                a = !1;
                e &&
                  typeof e === "object" &&
                  (e.error
                    ? (e.error == "invalid_token" ||
                        (e.error.type == "OAuthException" && e.error.code == 190)) &&
                      (a = !0)
                    : e.error_code && e.error_code == "190" && (a = !0));
                a && h === b("sdk.Runtime").getAccessToken() && b("sdk.Runtime").setAccessToken(null);
              });
              c.subscribe("request.complete", function (a, c, d, e) {
                ((a == "/me/permissions" && c === "delete") ||
                  (a == "/restserver.php" && d.method == "Auth.revokeAuthorization")) &&
                  e === !0 &&
                  b("sdk.Runtime").setAccessToken(null);
              });
              c.subscribe("request.error", function (a, c, d, e) {
                g &&
                  e.error.type === "http" &&
                  b("sdk.Scribe").log("jssdk_error", {
                    appId: b("sdk.Runtime").getClientID(),
                    error: "transport",
                    extra: {
                      name: "transport",
                      message: ES("JSON", "stringify", !1, e.error) + " from " + a + " , " + c,
                    },
                  });
              });
              function a(a) {
                b("sdk.warnInsecure")("api");
                if (typeof a === "string")
                  if (b("sdk.Runtime").getIsVersioned()) {
                    b("sdk.PlatformVersioning").assertVersionIsSet();
                    !/https?/.test(a) && a.charAt(0) !== "/" && (a = "/" + a);
                    a = new (b("sdk.URI"))(a).setDomain(null).setProtocol(null).toString();
                    b("sdk.PlatformVersioning").REGEX.test(a.substring(1, ES(a, "indexOf", !0, "/", 1))) ||
                      (a = "/" + b("sdk.Runtime").getVersion() + a);
                    var c = [a].concat(Array.prototype.slice.call(arguments, 1));
                    b("ApiClient").graph.apply(b("ApiClient"), c);
                  } else b("ApiClient").graph.apply(b("ApiClient"), arguments);
                else b("ApiClient").rest.apply(b("ApiClient"), arguments);
              }
              e.exports = a;
            },
            null
          );
          __d(
            "legacy:fb.api",
            ["FB", "sdk.api"],
            function (a, b, c, d, e, f) {
              b("FB").provide("", { api: b("sdk.api") });
            },
            3
          );
          __d(
            "sdk.Event",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              a = {
                SUBSCRIBE: "event.subscribe",
                UNSUBSCRIBE: "event.unsubscribe",
                subscribers: function () {
                  this._subscribersMap || (this._subscribersMap = {});
                  return this._subscribersMap;
                },
                subscribe: function (a, b) {
                  var c = this.subscribers();
                  !c[a] ? (c[a] = [b]) : ES(c[a], "indexOf", !0, b) == -1 && c[a].push(b);
                  a != this.SUBSCRIBE && a != this.UNSUBSCRIBE && this.fire(this.SUBSCRIBE, a, c[a]);
                },
                unsubscribe: function (a, b) {
                  var c = this.subscribers()[a];
                  c &&
                    ES(c, "forEach", !0, function (a, d) {
                      a === b && c.splice(d, 1);
                    });
                  a != this.SUBSCRIBE && a != this.UNSUBSCRIBE && this.fire(this.UNSUBSCRIBE, a, c);
                },
                monitor: function (a, b) {
                  if (!b()) {
                    var c = this,
                      d = function d() {
                        b.apply(b, arguments) && c.unsubscribe(a, d);
                      };
                    this.subscribe(a, d);
                  }
                },
                clear: function (a) {
                  delete this.subscribers()[a];
                },
                fire: function (a) {
                  for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++)
                    c[d - 1] = arguments[d];
                  var e = this.subscribers()[a];
                  e &&
                    ES(e, "forEach", !0, function (a) {
                      a && a.apply(this, c);
                    });
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "resolveURI",
            [],
            function (a, b, c, d, e, f) {
              function a(a) {
                if (!a) return window.location.href;
                a = a.replace(/&/g, "&amp;").replace(/\"/g, "&quot;");
                var b = document.createElement("div");
                b.innerHTML = '<a href="' + a + '"></a>';
                return b.firstChild.href;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "dedupString",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              function a(a) {
                var b;
                return ES("Object", "keys", !1, ((b = {}), (b[a] = 0), b))[0];
              }
              e.exports = a;
            },
            null
          );
          __d(
            "DOMEventListener",
            ["invariant", "dedupString", "emptyFunction", "wrapFunction"],
            function (a, b, c, d, e, f, g) {
              var h = !1;
              try {
                a = Object.defineProperty({}, "passive", {
                  get: function () {
                    h = !0;
                  },
                });
                window.addEventListener("test", null, a);
              } catch (a) {}
              var i, j;
              window.addEventListener
                ? ((i = function (a, c, d, e) {
                    e === void 0 && (e = !1),
                      (d.wrapper = b("wrapFunction")(
                        d,
                        "entry",
                        b("dedupString")("DOMEventListener.add " + c)
                      )),
                      a.addEventListener(c, d.wrapper, h ? e : !1);
                  }),
                  (j = function (a, b, c, d) {
                    d === void 0 && (d = !1), a.removeEventListener(b, c.wrapper, h ? d : !1);
                  }))
                : window.attachEvent
                ? ((i = function (a, c, d, e) {
                    e === void 0,
                      (d.wrapper = b("wrapFunction")(d, "entry", "DOMEventListener.add " + c)),
                      a.attachEvent || g(0, 2798),
                      a.attachEvent("on" + c, d.wrapper);
                  }),
                  (j = function (a, b, c, d) {
                    d === void 0, a.detachEvent || g(0, 2799), a.detachEvent("on" + b, c.wrapper);
                  }))
                : (j = i = b("emptyFunction"));
              c = {
                add: function (a, b, c, d) {
                  d === void 0 && (d = !1);
                  i(a, b, c, d);
                  return {
                    remove: function () {
                      j(a, b, c, d);
                    },
                  };
                },
                remove: j,
              };
              e.exports = c;
            },
            null
          );
          __d(
            "JSONRPC",
            ["Log"],
            function (a, b, c, d, e, f) {
              a = (function () {
                "use strict";
                function a(a) {
                  var b = this;
                  this.$1 = 0;
                  this.$2 = {};
                  this.remote = function (a) {
                    b.$3 = a;
                    return b.remote;
                  };
                  this.local = {};
                  this.$4 = a;
                }
                var c = a.prototype;
                c.stub = function (a) {
                  var b = this;
                  this.remote[a] = function () {
                    var c = { jsonrpc: "2.0", method: a };
                    for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
                    typeof e[e.length - 1] === "function" && ((c.id = ++b.$1), (b.$2[c.id] = e.pop()));
                    c.params = e;
                    b.$4(ES("JSON", "stringify", !1, c), b.$3 || { method: a });
                  };
                };
                c.read = function (a, c) {
                  a = ES("JSON", "parse", !1, a);
                  var d = a.id;
                  if (!a.method) {
                    if (!this.$2[d]) {
                      b("Log").warn("Could not find callback %s", d);
                      return;
                    }
                    var e = this.$2[d];
                    delete this.$2[d];
                    delete a.id;
                    delete a.jsonrpc;
                    e(a);
                    return;
                  }
                  var f = this;
                  e = this.local[a.method];
                  var g;
                  d
                    ? (g = function (a, b) {
                        var e = { jsonrpc: "2.0", id: d };
                        e[a] = b;
                        window.setTimeout(function () {
                          f.$4(ES("JSON", "stringify", !1, e), c);
                        }, 0);
                      })
                    : (g = function () {});
                  if (!e) {
                    b("Log").error('Method "%s" has not been defined', a.method);
                    g("error", { code: -32601, message: "Method not found", data: a.method });
                    return;
                  }
                  a.params.push(ES(g, "bind", !0, null, "result"));
                  a.params.push(ES(g, "bind", !0, null, "error"));
                  try {
                    e = e.apply(c || null, a.params);
                    typeof e !== "undefined" && g("result", e);
                  } catch (c) {
                    b("Log").error(
                      "Invokation of RPC method %s resulted in the error: %s",
                      a.method,
                      c.message
                    ),
                      g("error", { code: -32603, message: "Internal error", data: c.message });
                  }
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "Queue",
            [],
            function (a, b, c, d, e, f) {
              var g = {};
              a = (function () {
                "use strict";
                function a(a) {
                  (this._timeout = null),
                    (this._interval = (a == null ? void 0 : a.interval) || 0),
                    (this._processor = a == null ? void 0 : a.processor),
                    (this._queue = []),
                    (this._stopped = !0);
                }
                var b = a.prototype;
                b._dispatch = function (a) {
                  var b = this;
                  a === void 0;
                  if (this._stopped || this._queue.length === 0) return;
                  a = this._processor;
                  if (a == null) {
                    this._stopped = !0;
                    throw new Error("No processor available");
                  }
                  var c = this._interval;
                  if (c != null)
                    a.call(this, this._queue.shift()),
                      (this._timeout = setTimeout(function () {
                        return b._dispatch();
                      }, c));
                  else while (this._queue.length) a.call(this, this._queue.shift());
                };
                b.enqueue = function (a) {
                  this._processor && !this._stopped ? this._processor(a) : this._queue.push(a);
                  return this;
                };
                b.start = function (a) {
                  a && (this._processor = a);
                  this._stopped = !1;
                  this._dispatch();
                  return this;
                };
                b.isStarted = function () {
                  return !this._stopped;
                };
                b.dispatch = function () {
                  this._dispatch(!0);
                };
                b.stop = function (a) {
                  this._stopped = !0;
                  a && this._timeout != null && clearTimeout(this._timeout);
                  return this;
                };
                b.merge = function (a, b) {
                  if (b) {
                    (b = this._queue).unshift.apply(b, a._queue);
                  } else {
                    (b = this._queue).push.apply(b, a._queue);
                  }
                  a._queue = [];
                  this._dispatch();
                  return this;
                };
                b.getLength = function () {
                  return this._queue.length;
                };
                a.get = function (b, c) {
                  var d;
                  b in g ? (d = g[b]) : (d = g[b] = new a(c));
                  return d;
                };
                a.exists = function (a) {
                  return a in g;
                };
                a.remove = function (a) {
                  return delete g[a];
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.RPC",
            ["Assert", "JSONRPC", "Queue"],
            function (a, b, c, d, e, f) {
              var g = new (b("Queue"))(),
                h = new (b("JSONRPC"))(function (a) {
                  g.enqueue(a);
                });
              a = {
                local: h.local,
                remote: h.remote,
                stub: ES(h.stub, "bind", !0, h),
                setInQueue: function (a) {
                  b("Assert").isInstanceOf(b("Queue"), a),
                    a.start(function (a) {
                      h.read(a);
                    });
                },
                getOutQueue: function () {
                  return g;
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.Canvas.Environment",
            ["sdk.RPC"],
            function (a, b, c, d, e, f) {
              function a(a) {
                b("sdk.RPC").remote.getPageInfo(function (b) {
                  a(b.result);
                });
              }
              function c(a, c) {
                b("sdk.RPC").remote.scrollTo({ x: a || 0, y: c || 0 });
              }
              b("sdk.RPC").stub("getPageInfo");
              b("sdk.RPC").stub("scrollTo");
              d = { getPageInfo: a, scrollTo: c };
              e.exports = d;
            },
            null
          );
          __d(
            "sdk.DialogUtils",
            ["DOMEventListener", "sdk.Content", "sdk.DOM", "sdk.UA"],
            function (a, b, c, d, e, f) {
              "use strict";
              a = {
                isOrientationPotrait: function () {
                  return window.innerWidth < window.innerHeight;
                },
                addDoubleClickAction: function (a, c, d) {
                  var e = null;
                  return b("DOMEventListener").add(a, "click", function () {
                    e !== null && (clearTimeout(e), (e = null), c()),
                      (e = setTimeout(function () {
                        e = null;
                      }, d));
                  });
                },
                addIdleDesktopAction: function (a, c, d) {
                  var e,
                    f,
                    g = function () {
                      e = setTimeout(c, d);
                    };
                  g();
                  return b("DOMEventListener").add(a, "mouseenter", function () {
                    clearTimeout(e),
                      f ||
                        (f = b("DOMEventListener").add(a, "mouseleave", function () {
                          g();
                        }));
                  });
                },
                addMobileOrientationChangeAction: function (a) {
                  if (!b("sdk.UA").mobile()) return null;
                  var c = "onorientationchange" in window ? "orientationchange" : "resize",
                    d = function (b) {
                      return setTimeout(function (b) {
                        return a(b);
                      }, 50);
                    };
                  return b("DOMEventListener").add(window, c, d);
                },
                applyScreenDimensions: function (a) {
                  if (a == null) return;
                  var c = b("sdk.DOM").getViewportInfo();
                  a.style.minHeight = c.height || c.width ? c.height + "px" : "";
                  a.style.top = c.scrollTop ? c.scrollTop + "px" : "";
                },
                setDialogPositionToCenter: function (a, c, d) {
                  var e = function (a) {
                      return typeof a === "number" ? a : parseInt(a, 10);
                    },
                    f = b("sdk.DOM").getViewportInfo(),
                    g = e(a.offsetWidth);
                  e = e(a.offsetHeight);
                  g = f.scrollLeft + (f.width - g) / 2;
                  var h = (f.height - e) / 2.5;
                  g < h && (h = g);
                  var i = f.height - e - h,
                    j = (f.height - e) / 2;
                  d && (j = d.scrollTop - d.offsetTop + (d.clientHeight - e) / 2);
                  j < h ? (j = h) : j > i && (j = i);
                  j += f.scrollTop;
                  if (b("sdk.UA").mobile()) {
                    d = 100;
                    c
                      ? ((d += (f.height - e) / 2), b("sdk.DOM").addCss(document.body, "fb_reposition"))
                      : (b("sdk.DOM").addCss(document.body, "fb_hidden"),
                        (document.body.style.width = "auto"),
                        (j = 1e4));
                    h = b("sdk.DOM").getByClass("fb_dialog_padding", a);
                    h.length && (h[0].style.height = d + "px");
                  }
                  a.style.left = (g > 0 ? g : 0) + "px";
                  a.style.top = (j > 0 ? j : 0) + "px";
                },
                setDialogPositionToTop: function (a, c, d) {
                  this.setDialogPositionToCenter(a, c, d);
                  c = b("sdk.DOM").getViewportInfo();
                  d = c.scrollTop + (c.height - a.offsetHeight) * 0.05;
                  b("sdk.DOM").setStyle(a, "top", d + "px");
                },
                setupNewDarkOverlay: function () {
                  var a = document.createElement("div");
                  a.setAttribute("id", "fb_dialog_ipad_overlay");
                  this.applyScreenDimensions(a);
                  return a;
                },
                setupNewDialog: function (a) {
                  a = a || {};
                  var c = document.createElement("div"),
                    d = a;
                  d = d.onClose;
                  if (a.closeIcon && d) {
                    var e = document.createElement("a");
                    e.className = "fb_dialog_close_icon";
                    b("DOMEventListener").add(e, "click", d);
                    c.appendChild(e);
                  }
                  d = "fb_dialog";
                  d += " " + (a.classes || "");
                  d += b("sdk.UA").mobile() ? " fb_dialog_mobile" : " fb_dialog_advanced";
                  c.className = d;
                  if (a.width) {
                    e = parseInt(a.width, 10);
                    isNaN(e) || (c.style.width = e + "px");
                  }
                  d = document.createElement("div");
                  a.content && b("sdk.Content").append(a.content, d);
                  d.className = "fb_dialog_content";
                  c.appendChild(d);
                  if (b("sdk.UA").mobile()) {
                    e = document.createElement("div");
                    e.className = "fb_dialog_padding";
                    c.appendChild(e);
                  }
                  return { dialogElement: c, contentRoot: d };
                },
                onDialogHideCleanup: function (a) {
                  var c = document.body;
                  a ? b("sdk.DOM").removeCss(c, "fb_reposition") : b("sdk.DOM").removeCss(c, "fb_hidden");
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.fbt",
            [],
            function (a, b, c, d, e, f) {
              a = {
                _: function (a) {
                  return typeof a === "string" ? a : a[0];
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.Dialog",
            [
              "DOMEventListener",
              "ObservableMixin",
              "Type",
              "sdk.Canvas.Environment",
              "sdk.Content",
              "sdk.DialogUtils",
              "sdk.DOM",
              "sdk.fbt",
              "sdk.Runtime",
              "sdk.UA",
            ],
            function (a, b, c, d, e, f) {
              var g = 30,
                h = 590,
                i = 500,
                j = 240,
                k = 575;
              function l() {
                var a = b("sdk.DOM").getViewportInfo();
                return a.height && a.width
                  ? { width: Math.min(a.width, i), height: Math.min(a.height, h) }
                  : null;
              }
              var m = b("Type").extend(
                  {
                    constructor: function (a, b) {
                      this.parent(),
                        (this.id = a),
                        (this.display = b),
                        (this._e2e = {}),
                        n._dialogs || ((n._dialogs = {}), n._addOrientationHandler()),
                        (n._dialogs[a] = this),
                        this.trackEvent("init");
                    },
                    trackEvent: function (a, b) {
                      if (this._e2e[a]) return this;
                      this._e2e[a] = b || ES("Date", "now", !1);
                      a == "close" && this.inform("e2e:end", this._e2e);
                      return this;
                    },
                    trackEvents: function (a) {
                      typeof a === "string" && (a = ES("JSON", "parse", !1, a));
                      for (var b in a) Object.prototype.hasOwnProperty.call(a, b) && this.trackEvent(b, a[b]);
                      return this;
                    },
                  },
                  b("ObservableMixin")
                ),
                n = {
                  newInstance: function (a, b) {
                    return new m(a, b);
                  },
                  _dialogs: null,
                  _lastYOffset: 0,
                  _overlayListeners: [],
                  _loaderEl: null,
                  _overlayEl: null,
                  _stack: [],
                  _active: null,
                  get: function (a) {
                    return n._dialogs[a];
                  },
                  _findRoot: function (a) {
                    while (a) {
                      if (b("sdk.DOM").containsCss(a, "fb_dialog")) return a;
                      a = a.parentNode;
                    }
                  },
                  _createWWWLoader: function (a) {
                    a = a ? a : 460;
                    return n.create({
                      content:
                        '<div class="dialog_title">  <a id="fb_dialog_loader_close">    <div class="fb_dialog_close_icon"></div>  </a>  <span>Facebook</span>  <div style="clear:both;"></div></div><div class="dialog_content"></div><div class="dialog_footer"></div>',
                      width: a,
                    });
                  },
                  _createMobileLoader: function () {
                    var a;
                    b("sdk.UA").nativeApp()
                      ? (a = '<div class="dialog_header"></div>')
                      : n.isTabletStyle()
                      ? (a =
                          '<div class="overlayLoader"><div id="fb_dialog_loader_spinner"></div><a id="fb_dialog_loader_close" href="#">' +
                          b("sdk.fbt")._("Cancel") +
                          "</a></div>")
                      : (a =
                          '<div class="dialog_header"><table>  <tbody>    <tr>      <td class="header_left">        <label class="touchable_button">          <input type="submit" value="' +
                          b("sdk.fbt")._("Cancel") +
                          '"            id="fb_dialog_loader_close"/>        </label>      </td>      <td class="header_center">        <div>         ' +
                          b("sdk.fbt")._("Loading...") +
                          '        </div>      </td>      <td class="header_right">      </td>    </tr>  </tbody></table></div>');
                    return n.create({
                      classes: "loading" + (n.isTabletStyle() ? " centered" : ""),
                      content: a,
                    });
                  },
                  _setDialogOverlayStyle: function () {
                    b("sdk.DialogUtils").applyScreenDimensions(n._overlayEl);
                  },
                  _showTabletOverlay: function (a) {
                    if (!n.isTabletStyle()) return;
                    n._overlayEl ||
                      ((n._overlayEl = b("sdk.DialogUtils").setupNewDarkOverlay()),
                      b("sdk.Content").append(n._overlayEl, null));
                    n._overlayEl.className = "";
                  },
                  _hideTabletOverlay: function () {
                    n.isTabletStyle() &&
                      ((n._overlayEl.className = "hidden"),
                      ES(n._overlayListeners, "forEach", !0, function (a) {
                        return a.remove();
                      }),
                      (n._overlayListeners = []));
                  },
                  showLoader: function (a, c) {
                    a || (a = function () {});
                    var d = function () {
                      n._hideLoader(),
                        b("sdk.DialogUtils").onDialogHideCleanup(n.isTabletStyle()),
                        n._hideTabletOverlay(),
                        a();
                    };
                    n._showTabletOverlay(d);
                    n._loaderEl ||
                      (n._loaderEl = n._findRoot(
                        b("sdk.UA").mobile() ? n._createMobileLoader() : n._createWWWLoader(c)
                      ));
                    c = document.getElementById("fb_dialog_loader_close");
                    if (c) {
                      b("sdk.DOM").removeCss(c, "fb_hidden");
                      c = b("DOMEventListener").add(c, "click", d);
                      n._overlayListeners.push(c);
                    }
                    n._makeActive(n._loaderEl);
                  },
                  _hideLoader: function () {
                    n._loaderEl && n._loaderEl == n._active && (n._loaderEl.style.top = "-10000px");
                  },
                  _makeActive: function (a) {
                    n._setDialogSizes(),
                      n._lowerActive(),
                      (n._active = a),
                      b("sdk.Runtime").isEnvironment(b("sdk.Runtime").ENVIRONMENTS.CANVAS) &&
                        b("sdk.Canvas.Environment").getPageInfo(function (a) {
                          n._centerActive(a);
                        }),
                      n._centerActive();
                  },
                  _lowerActive: function () {
                    if (!n._active) return;
                    n._active.style.top = "-10000px";
                    n._active = null;
                  },
                  _removeStacked: function (a) {
                    n._stack = ES(n._stack, "filter", !0, function (b) {
                      return b != a;
                    });
                  },
                  _centerActive: function (a) {
                    var c = n._active;
                    if (!c) return;
                    b("sdk.DialogUtils").setDialogPositionToCenter(c, n.isTabletStyle(), a);
                  },
                  _setDialogSizes: function (a) {
                    a === void 0 && (a = !1);
                    if (!b("sdk.UA").mobile()) return;
                    for (var c in n._dialogs)
                      if (Object.prototype.hasOwnProperty.call(n._dialogs, c)) {
                        var d = document.getElementById(c);
                        d &&
                          ((d.style.width = n.getDefaultSize().width + "px"),
                          a || (d.style.height = n.getDefaultSize().height + "px"));
                      }
                  },
                  getDefaultSize: function () {
                    if (b("sdk.UA").mobile()) {
                      var a = l();
                      if (a) {
                        b("sdk.DOM").getViewportInfo().width <= a.width &&
                          (a.width = b("sdk.DOM").getViewportInfo().width - g);
                        b("sdk.DOM").getViewportInfo().height <= a.height &&
                          (a.height = b("sdk.DOM").getViewportInfo().height - g);
                        return a;
                      }
                      if (b("sdk.UA").ipad()) return { width: i, height: h };
                      if (b("sdk.UA").android())
                        return { width: screen.availWidth, height: screen.availHeight };
                      else {
                        a = window.innerWidth;
                        var c = window.innerHeight,
                          d = a / c > 1.2;
                        return { width: a, height: Math.max(c, d ? screen.width : screen.height) };
                      }
                    }
                    return { width: k, height: j };
                  },
                  _handleOrientationChange: function () {
                    n._availScreenWidth = b("sdk.DOM").getViewportInfo().width;
                    if (n.isTabletStyle())
                      n._setDialogSizes(!0), n._centerActive(), n._setDialogOverlayStyle();
                    else {
                      var a = n.getDefaultSize().width;
                      for (var c in n._dialogs)
                        if (Object.prototype.hasOwnProperty.call(n._dialogs, c)) {
                          var d = document.getElementById(c);
                          d && (d.style.width = a + "px");
                        }
                    }
                  },
                  _addOrientationHandler: function () {
                    if (!b("sdk.UA").mobile()) return null;
                    n._availScreenWidth = b("sdk.DOM").getViewportInfo().width;
                    b("sdk.DialogUtils").addMobileOrientationChangeAction(n._handleOrientationChange);
                  },
                  create: function (a) {
                    var c = b("sdk.DialogUtils").setupNewDialog(a);
                    b("sdk.Content").append(c.dialogElement);
                    a.visible && n.show(c.dialogElement);
                    typeof a.styles === "object" &&
                      ES("Object", "assign", !1, c.dialogElement.style, a.styles);
                    return c.contentRoot;
                  },
                  show: function (a) {
                    var b = n._findRoot(a);
                    b &&
                      (n._removeStacked(b),
                      n._hideLoader(),
                      n._makeActive(b),
                      n._stack.push(b),
                      "fbCallID" in a && n.get(a.fbCallID).inform("iframe_show").trackEvent("show"));
                  },
                  hide: function (a) {
                    var c = n._findRoot(a);
                    n._hideLoader();
                    c == n._active &&
                      (n._lowerActive(),
                      b("sdk.DialogUtils").onDialogHideCleanup(n.isTabletStyle()),
                      n._hideTabletOverlay(),
                      "fbCallID" in a && n.get(a.fbCallID).inform("iframe_hide").trackEvent("hide"));
                  },
                  remove: function (a) {
                    a = n._findRoot(a);
                    if (a) {
                      var c = n._active == a;
                      n._removeStacked(a);
                      c
                        ? (n._hideLoader(),
                          n._stack.length > 0
                            ? n.show(n._stack.pop())
                            : (n._lowerActive(),
                              b("sdk.DialogUtils").onDialogHideCleanup(n.isTabletStyle()),
                              n._hideTabletOverlay()))
                        : n._active === null && n._stack.length > 0 && n.show(n._stack.pop());
                      window.setTimeout(function () {
                        a.parentNode.removeChild(a);
                      }, 3e3);
                    }
                  },
                  isActive: function (a) {
                    a = n._findRoot(a);
                    return a && a === n._active;
                  },
                  isTabletStyle: function () {
                    if (!b("sdk.UA").mobile()) return !1;
                    var a = l();
                    return a && (a.height >= h || a.width >= i);
                  },
                };
              e.exports = n;
            },
            null
          );
          __d(
            "sdk.NativeExtensions",
            ["DOMEventListener", "Log", "sdk.UA"],
            function (a, b, c, d, e, f) {
              var g = "fbNativeExtensionsReady";
              function h() {
                return window._FBSdkExtensions &&
                  window._FBSdkExtensions.jsonRPC &&
                  window._FBSdkExtensions.initializeCallbackHandler &&
                  window._FBSdkExtensions.supportsDialog
                  ? window._FBSdkExtensions
                  : null;
              }
              a = {
                onReady: function (a) {
                  if (!b("sdk.UA").facebookInAppBrowser()) {
                    b("Log").error(
                      "FB.NativeExtensions.onReady only works when the page is rendered in a WebView of the native Facebook app."
                    );
                    return;
                  }
                  var c = h();
                  if (c) {
                    a(c);
                    return;
                  }
                  var d = !1;
                  c = function c() {
                    var e = h();
                    if (d || !e) return;
                    d = !0;
                    a(e);
                    b("DOMEventListener").remove(window, g, c);
                  };
                  b("DOMEventListener").add(window, g, c);
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.Extensions",
            ["JSONRPC", "Queue", "sdk.NativeExtensions", "sdk.UA"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = new (b("Queue"))(),
                h = new (b("JSONRPC"))(function (a) {
                  g.enqueue(a);
                }),
                i = new (b("Queue"))();
              i.start(function (a) {
                h.read(a);
              });
              var j = null;
              b("sdk.UA").facebookInAppBrowser() &&
                b("sdk.NativeExtensions").onReady(function (a) {
                  (j = a),
                    (window._FBBrowserCallbackHandler = function (a) {
                      i.enqueue(ES("JSON", "stringify", !1, a));
                    }),
                    a.initializeCallbackHandler(
                      ES("JSON", "stringify", !1, { name: "_FBBrowserCallbackHandler" })
                    ),
                    g.start(function (b) {
                      a.jsonRPC(b);
                    });
                });
              e.exports = {
                local: h.local,
                remote: h.remote,
                stub: ES(h.stub, "bind", !0, h),
                supportsDialog: function (a) {
                  return !!j && j.supportsDialog(a);
                },
              };
            },
            null
          );
          __d(
            "sdk.Frictionless",
            ["sdk.api", "sdk.Auth", "sdk.Dialog", "sdk.Event"],
            function (a, b, c, d, e, f) {
              var g = {
                _allowedRecipients: {},
                _useFrictionless: !1,
                _updateRecipients: function () {
                  (g._allowedRecipients = {}),
                    b("sdk.api")("/me/apprequestformerrecipients", function (a) {
                      if (!a || a.error) return;
                      ES(a.data, "forEach", !0, function (a) {
                        g._allowedRecipients[a.recipient_id] = !0;
                      });
                    });
                },
                init: function () {
                  (g._useFrictionless = !0),
                    b("sdk.Auth").getLoginStatus(function (a) {
                      a.status == "connected" && g._updateRecipients();
                    }),
                    b("sdk.Event").subscribe("auth.login", function (a) {
                      a.authResponse && g._updateRecipients();
                    });
                },
                _processRequestResponse: function (a, c) {
                  return function (d) {
                    var e = d && d.updated_frictionless;
                    g._useFrictionless && e && g._updateRecipients();
                    d &&
                      (!c &&
                        d.frictionless &&
                        (b("sdk.Dialog")._hideLoader(),
                        b("sdk.Dialog")._restoreBodyPosition(),
                        b("sdk.Dialog")._hideIPadOverlay()),
                      delete d.frictionless,
                      delete d.updated_frictionless);
                    a && a(d);
                  };
                },
                isAllowed: function (a) {
                  if (!a) return !1;
                  if (typeof a === "number") return a in g._allowedRecipients;
                  typeof a === "string" && (a = a.split(","));
                  a = ES(a, "map", !0, function (a) {
                    return ES(String(a), "trim", !0);
                  });
                  var b = !0,
                    c = !1;
                  ES(a, "forEach", !0, function (a) {
                    (b = b && a in g._allowedRecipients), (c = !0);
                  });
                  return b && c;
                },
              };
              b("sdk.Event").subscribe("init:post", function (a) {
                a.frictionlessRequests && g.init();
              });
              e.exports = g;
            },
            null
          );
          __d(
            "sdk.Native",
            ["Log", "sdk.UA"],
            function (a, b, c, d, e, f) {
              var g = "fbNativeReady";
              a = {
                onready: function (a) {
                  if (!b("sdk.UA").nativeApp()) {
                    b("Log").error(
                      "FB.Native.onready only works when the page is rendered in a WebView of the native Facebook app. Test if this is the case calling FB.UA.nativeApp()"
                    );
                    return;
                  }
                  window.__fbNative &&
                    !this.nativeReady &&
                    ES("Object", "assign", !1, this, window.__fbNative);
                  if (this.nativeReady) a();
                  else {
                    var c = function b(c) {
                      window.removeEventListener(g, b), this.onready(a);
                    };
                    window.addEventListener(g, c, !1);
                  }
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "resolveWindow",
            [],
            function (a, b, c, d, e, f) {
              function a(a) {
                if (a == null) return null;
                var b = window;
                a = a.split(".");
                try {
                  for (var c = 0; c < a.length; c++) {
                    var d = a[c],
                      e = /^frames\[[\'\"]?([a-zA-Z0-9\-_]+)[\'\"]?\]$/.exec(d);
                    if (e) b = b.frames[e[1]];
                    else if (d === "opener" || d === "parent" || d === "top") b = b[d];
                    else return null;
                  }
                } catch (a) {
                  return null;
                }
                return b;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.XD",
            [
              "JSSDKXDConfig",
              "Log",
              "QueryString",
              "Queue",
              "UrlMap",
              "guid",
              "isFacebookURI",
              "resolveWindow",
              "sdk.Event",
              "sdk.feature",
              "sdk.RPC",
              "sdk.Runtime",
              "sdk.Scribe",
              "sdk.URI",
            ],
            function (a, b, c, d, e, f) {
              var g = new (b("Queue"))(),
                h = "parent",
                i = null,
                j = /^https:\/\/.*facebook\.com$/;
              a = b("JSSDKXDConfig").useCdn ? "cdn" : "www";
              c = b("JSSDKXDConfig").XdUrl;
              var k = b("UrlMap").resolve(a) + c;
              d = function () {
                if ("origin" in location)
                  if (location.origin && location.origin != "null") return location.origin;
                  else if (window !== window.parent)
                    try {
                      var a = parent.location.origin;
                      if (a && a != "null") return a;
                    } catch (a) {}
                return location.protocol + "//" + location.host;
              };
              var l = b("guid")(),
                m = d(),
                n = !1,
                o = new (b("Queue"))();
              b("sdk.RPC").setInQueue(o);
              function p(a) {
                b("Log").info("Remote XD can talk to facebook.com (%s)", a),
                  b("sdk.Runtime").setEnvironment(
                    a === "canvas"
                      ? b("sdk.Runtime").ENVIRONMENTS.CANVAS
                      : b("sdk.Runtime").ENVIRONMENTS.PAGETAB
                  );
              }
              function q(a, c) {
                if (!c) {
                  b("Log").error("No senderOrigin");
                  throw new Error();
                }
                switch (a.xd_action) {
                  case "plugin_ready":
                    if (typeof a.name === "string") {
                      var d = a.name;
                      b("Log").info("Plugin %s ready from %s", d, c);
                      if (j.test(c)) {
                        var e = b("Queue").get(d, {});
                        e.start(function (a) {
                          if (a == null) {
                            b("Log").warn("Discarding null message from %s to %s on %s", c, d, m);
                            return;
                          }
                          window.frames[d] != null
                            ? window.frames[d].postMessage(
                                { xdArbiterHandleMessage: !0, message: a, origin: m },
                                c
                              )
                            : b("Log").info(
                                "Message discarded for plugin at window.frames[%s] which may have been removed by a new XFBML.parse() call.",
                                d
                              );
                        });
                      } else {
                        b("Log").error("Plugin attempted to register from non-Facebook domain %s", c);
                        return;
                      }
                    } else b("Log").error("plugin_ready message received without a name");
                    break;
                }
                a.data != null && (typeof a.data === "object" || typeof a.data === "string") && r(a.data, c);
              }
              function r(a, c) {
                if (c != null && c !== "native" && !b("isFacebookURI")(new (b("sdk.URI"))(c))) return;
                if (typeof a === "string") {
                  if (/^FB_RPC:/.test(a)) {
                    o.enqueue(a.substring(7));
                    return;
                  }
                  if (a.substring(0, 1) == "{")
                    try {
                      a = ES("JSON", "parse", !1, a);
                    } catch (c) {
                      b("Log").warn("Failed to decode %s as JSON", a);
                      return;
                    }
                  else a = b("QueryString").decode(a);
                }
                a = a;
                if (a.xd_action) {
                  q(a, c);
                  return;
                }
                if (typeof a.cb === "string") {
                  c = v._callbacks[a.cb];
                  v._forever[a.cb] || delete v._callbacks[a.cb];
                  c && c(a);
                }
              }
              function s(a, c) {
                if (a == "facebook") {
                  c.relation = h;
                  g.enqueue(c);
                  var d = b("sdk.feature")("legacy_xd_init", !0);
                  !d && !b("sdk.Runtime").isCanvasEnvironment() && !g.isStarted() && u(i);
                } else b("Queue").get(a, {}).enqueue(c);
              }
              b("sdk.RPC")
                .getOutQueue()
                .start(function (a) {
                  g.enqueue("FB_RPC:" + a);
                });
              function t(a) {
                if (n) return;
                n = !0;
                window.addEventListener("message", function (a) {
                  var c = a.data,
                    d = a.origin || "native";
                  if (!/^(https?:\/\/|native$)/.test(d)) {
                    b("Log").debug("Received message from invalid origin type: %s", d);
                    return;
                  }
                  if (!j.test(d)) return;
                  if (typeof c === "string") r(c, d);
                  else {
                    if (a.source == parent && a.data.xdArbiterRegisterAck && j.test(d)) {
                      typeof a.data.xdArbiterRegisterAck === "string" &&
                        a.data.xdArbiterRegisterAck !== "" &&
                        p(a.data.xdArbiterRegisterAck);
                      g.isStarted() ||
                        g.start(function (a) {
                          if (a == null) {
                            b("Log").warn("Discarding null message from %s to %s", m, d);
                            return;
                          }
                          var c = parent;
                          typeof a === "object" &&
                            typeof a.relation === "string" &&
                            (c = b("resolveWindow")(a.relation));
                          ((c = c) != null ? c : parent).postMessage(
                            { xdArbiterHandleMessage: !0, message: a, origin: m },
                            d
                          );
                        });
                      return;
                    }
                    b("Log").warn(
                      "Received message of type %s from %s, expected a string. %s",
                      typeof c,
                      m,
                      ES("JSON", "stringify", !1, c)
                    );
                    return;
                  }
                });
                b("sdk.Runtime").isCanvasEnvironment() && u(a);
              }
              function u(a) {
                var c;
                n || t();
                if (window.parent != top) {
                  b("Log").warn(
                    "cannot deliver messages to facebook unless window.parent is top and facebook.com."
                  );
                  return;
                }
                var d = (c = b("sdk.feature")("xd_timeout", 6e4)) != null ? c : 6e4;
                c = 200;
                var e = 0,
                  f = d / c,
                  h = function () {
                    return parent.postMessage({ xdArbiterRegister: !0, xdProxyName: a, origin: m }, "*");
                  };
                e = window.setInterval(function () {
                  if (!g.isStarted() && f > 0) f--, b("Log").debug("resending xdArbiterRegister"), h();
                  else {
                    window.clearInterval(e);
                    if (f === 0) {
                      b("sdk.Scribe").log("jssdk_error", {
                        appId: b("sdk.Runtime").getClientID(),
                        error: "XD_FB_QUEUE_INITIALIZATION",
                        extra: { message: "Failed to initialize in " + d + "ms" },
                      });
                      b("Log").error("xdAbiterRegisterAck not received");
                      return;
                    }
                  }
                }, c);
              }
              var v = {
                rpc: b("sdk.RPC"),
                _callbacks: {},
                _forever: {},
                _channel: l,
                _origin: m,
                onMessage: r,
                init: t,
                sendToFacebook: s,
                inform: function (a, b, c, d) {
                  s("facebook", {
                    method: a,
                    params: ES("JSON", "stringify", !1, b || {}),
                    behavior: d || "p",
                    relation: c,
                  });
                },
                handler: function (a, c, d, e) {
                  a =
                    "#" +
                    b("QueryString").encode({
                      cb: v.registerCallback(a, d, e),
                      origin: m + "/" + l,
                      domain: location.hostname,
                      relation: c || "opener",
                    });
                  return k + a;
                },
                registerCallback: function (a, c, d) {
                  d = d || b("guid")();
                  c && (v._forever[d] = !0);
                  v._callbacks[d] = a;
                  return d;
                },
              };
              b("sdk.Event").subscribe("init:post", function (a) {
                (i = a.xdProxyName), t(a.xdProxyName);
              });
              e.exports = v;
            },
            3
          );
          __d(
            "sdk.openMessenger",
            ["sdk.UA"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = "https://itunes.apple.com/us/app/messenger/id454638411",
                h = "https://play.google.com/store/apps/details?id=com.facebook.orca",
                i = 3e3;
              function a(a) {
                var c,
                  d,
                  e = a.link;
                a = a.app_id;
                b("sdk.UA").android()
                  ? ((c =
                      "intent://share/#Intent;package=com.facebook.orca;scheme=fb-messenger;S.android.intent.extra.TEXT=" +
                      encodeURIComponent(e) +
                      ";S.trigger=send_plugin;"),
                    a && (c += "S.platform_app_id=" + encodeURIComponent(a) + ";"),
                    (c += "end"),
                    (d = h))
                  : ((c = "fb-messenger://share?link=" + encodeURIComponent(e)),
                    a && (c += "&app_id=" + encodeURIComponent(a)),
                    (d = g));
                setTimeout(function () {
                  window.location.href = d;
                }, i);
                window.location.href = c;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.UIServer",
            [
              "Log",
              "PlatformOAuthDialogLoginFunnelLogger",
              "QueryString",
              "UrlMap",
              "createObjectFrom",
              "flattenObject",
              "guid",
              "insertIframe",
              "resolveURI",
              "sdk.api",
              "sdk.Auth",
              "sdk.Content",
              "sdk.Dialog",
              "sdk.DOM",
              "sdk.Event",
              "sdk.Extensions",
              "sdk.fbt",
              "sdk.feature",
              "sdk.Frictionless",
              "sdk.getContextType",
              "sdk.Impressions",
              "sdk.Native",
              "sdk.openMessenger",
              "sdk.RPC",
              "sdk.Runtime",
              "sdk.Scribe",
              "sdk.UA",
              "sdk.XD",
            ],
            function (a, b, c, d, e, f) {
              var g = {
                transform: function (a) {
                  if (a.params.display === "touch" && n.canIframe(a.params) && window.postMessage) {
                    a.params.channel = n._xdChannelHandler(a.id, "parent");
                    b("sdk.UA").nativeApp() || (a.params.in_iframe = 1);
                    return a;
                  } else return n.genericTransform(a);
                },
                getXdRelation: function (a) {
                  var b = a.display;
                  return b === "touch" && window.postMessage && a.in_iframe ? "parent" : n.getXdRelation(a);
                },
              };
              function h(a) {
                return (
                  a.method == "permissions.oauth" || a.method == "permissions.request" || a.method == "oauth"
                );
              }
              function i(a) {
                return h(a) && b("sdk.Extensions").supportsDialog("oauth");
              }
              function j(a) {
                return (
                  h(a) &&
                  (a.is_account_link === !0 || a.is_account_link === "true") &&
                  b("sdk.Extensions").supportsDialog("accountLink")
                );
              }
              a = {
                "stream.share": {
                  size: { width: 670, height: 340 },
                  url: "sharer.php",
                  transform: function (a) {
                    a.params.u || (a.params.u = window.location.toString());
                    a.params.display = "popup";
                    return a;
                  },
                },
                gaming_friendfinder: {
                  url: "gaming/me/friendfinder/",
                  transform: function (a) {
                    if (!b("sdk.Runtime").getClientID()) {
                      b("Log").error("FriendFinder called before FB.init().");
                      return;
                    }
                    a.url += b("sdk.Runtime").getClientID();
                    a.size = { width: 400, height: 800 };
                    return a;
                  },
                },
                gaming_media_library: {
                  url: "gaming/me/media_asset/",
                  transform: function (a) {
                    a.url += a.params.media_id;
                    a.size = { width: 400, height: 800 };
                    return a;
                  },
                },
                apprequests: {
                  transform: function (a) {
                    a = g.transform(a);
                    a.params.frictionless = b("sdk.Frictionless") && b("sdk.Frictionless")._useFrictionless;
                    a.params.frictionless &&
                      (b("sdk.Frictionless").isAllowed(a.params.to) &&
                        ((a.params.display = "iframe"), (a.params.in_iframe = !0), (a.hideLoader = !0)),
                      (a.cb = b("sdk.Frictionless")._processRequestResponse(a.cb, a.hideLoader)));
                    a.closeIcon = !1;
                    return a;
                  },
                  getXdRelation: g.getXdRelation,
                },
                "permissions.oauth": {
                  url: "dialog/oauth",
                  size: {
                    width: b("sdk.UA").mobile() ? null : 600,
                    height: b("sdk.UA").mobile() ? null : 679,
                  },
                  transform: function (a) {
                    if (!b("sdk.Runtime").getClientID()) {
                      b("Log").error("FB.login() called before FB.init().");
                      return;
                    }
                    if (
                      b("sdk.Auth").getAuthResponse() &&
                      !a.params.scope &&
                      !a.params.asset_scope &&
                      !a.params.auth_type
                    ) {
                      a.params.plugin_prepare ||
                        (b("Log").error("FB.login() called when user is already connected."),
                        a.cb &&
                          a.cb({
                            status: b("sdk.Runtime").getLoginStatus(),
                            authResponse: b("sdk.Auth").getAuthResponse(),
                          }));
                      return;
                    }
                    var c = a.cb,
                      d = a.id;
                    delete a.cb;
                    a && a.params && !a.params.logger_id && (a.params.logger_id = b("guid")());
                    a && a.params && !a.params.cbt && (a.params.cbt = ES("Date", "now", !1));
                    var e = a.params.auth_type;
                    e = e && ES(e, "includes", !0, "reauthenticate");
                    var f = ES(
                      "Object",
                      "keys",
                      !1,
                      ES(
                        "Object",
                        "assign",
                        !1,
                        a.params.response_type
                          ? b("createObjectFrom")(a.params.response_type.split(","))
                          : {},
                        { token: !0, signed_request: !0, graph_domain: !0 }
                      )
                    ).join(",");
                    a.params.display === "async"
                      ? (ES("Object", "assign", !1, a.params, {
                          client_id: b("sdk.Runtime").getClientID(),
                          origin: b("sdk.getContextType")(),
                          response_type: f,
                          domain: location.hostname,
                        }),
                        (a.cb = b("sdk.Auth").xdResponseWrapper(
                          c,
                          b("sdk.Auth").getAuthResponse(),
                          "permissions.oauth",
                          a.params
                        )))
                      : (e &&
                          n._xdNextHandler(
                            function (a) {
                              c({ authResponse: null, status: "not_authorized" });
                            },
                            d,
                            a.params.plugin_prepare ? "opener.parent" : "opener",
                            !0
                          ),
                        ES("Object", "assign", !1, a.params, {
                          client_id: b("sdk.Runtime").getClientID(),
                          redirect_uri: b("resolveURI")(
                            n.xdHandler(
                              c,
                              d,
                              a.params.plugin_prepare ? "opener.parent" : "opener",
                              b("sdk.Auth").getAuthResponse(),
                              "permissions.oauth",
                              !e,
                              a.params
                            )
                          ),
                          origin: b("sdk.getContextType")(),
                          response_type: f,
                          domain: location.hostname,
                        }));
                    d = {
                      logger_id: a.params.logger_id,
                      action: "client_login_start",
                      client_funnel_version: b("PlatformOAuthDialogLoginFunnelLogger").CLIENT_FUNNEL_VERSION,
                      cbt_delta: 0,
                    };
                    a.params.plugin_prepare || b("sdk.Impressions").log(117, { payload: d });
                    return a;
                  },
                },
                "auth.logout": {
                  transform: function (a) {
                    !b("sdk.Runtime").getClientID()
                      ? b("Log").error("FB.logout() called before calling FB.init().")
                      : !b("sdk.Auth").getAuthResponse()
                      ? b("Log").error("FB.logout() called without an access token.")
                      : b("sdk.Auth").logout(a.cb);
                  },
                },
                "login.status": {
                  transform: function (a) {
                    b("sdk.Auth").getLoginStatus(a.cb);
                  },
                },
                pay: { size: { width: 555, height: 120 }, connectDisplay: "popup" },
                live_broadcast: {
                  transform: function (a) {
                    a.params.phase === "create" && (a.size = { width: 480, height: 280 });
                    a.params.phase === "publish" && (a.size = { width: 772, height: 540 });
                    return a;
                  },
                  require_access_token: !0,
                },
                boost: {
                  transform: function (a) {
                    a.size = { width: 960, height: 760 };
                    a.params.display = "popup";
                    return a;
                  },
                },
              };
              var k = {};
              function l(a, b) {
                k[b] = !0;
                return function (c) {
                  delete k[b], a(c);
                };
              }
              function m(a) {
                var b = a.method.toLowerCase();
                return b === "pay" && a.display === "async" ? !0 : !1;
              }
              var n = {
                Methods: a,
                _loadedNodes: {},
                _defaultCb: {},
                _resultToken: '"xxRESULTTOKENxx"',
                genericTransform: function (a) {
                  (a.params.display == "dialog" || a.params.display == "iframe") &&
                    ES(
                      "Object",
                      "assign",
                      !1,
                      a.params,
                      { display: "iframe", channel: n._xdChannelHandler(a.id, "parent.parent") },
                      !0
                    );
                  return a;
                },
                checkOauthDisplay: function (a) {
                  var c = a.scope || a.perms || b("sdk.Runtime").getScope();
                  return !c ? a.display : "popup";
                },
                prepareCall: function (a, c) {
                  var d = a.method.toLowerCase(),
                    e = Object.prototype.hasOwnProperty.call(n.Methods, d)
                      ? ES("Object", "assign", !1, {}, n.Methods[d])
                      : {},
                    f = a.id || b("guid")(),
                    g = !0;
                  ES("Object", "assign", !1, a, {
                    app_id: b("sdk.Runtime").getClientID(),
                    locale: b("sdk.Runtime").getLocale(),
                    sdk: "joey",
                    access_token: (g && b("sdk.Runtime").getAccessToken()) || void 0,
                  });
                  a.display = n.getDisplayMode(e, a);
                  e.url || (e.url = "dialog/" + d);
                  (e.url == "dialog/oauth" || e.url == "dialog/permissions.request") &&
                    (a.display == "iframe" || (a.display == "touch" && a.in_iframe)) &&
                    (a.display = n.checkOauthDisplay(a));
                  a.display == "popup" && !e.require_access_token && delete a.access_token;
                  if (b("sdk.Runtime").getIsVersioned() && e.url.substring(0, 7) === "dialog/") {
                    g = a.version || b("sdk.Runtime").getVersion();
                    g != null && g !== "" && g !== "null" && (e.url = g + "/" + e.url);
                  }
                  if (m(a)) {
                    if (k[d]) {
                      g = 'Dialog "' + d + '" is trying to run more than once.';
                      b("Log").warn(g);
                      c({ error_code: -100, error_message: g });
                      return;
                    }
                    c = l(c, d);
                  }
                  g = {
                    cb: c,
                    id: f,
                    size: e.size || n.getDefaultSize(),
                    url: b("UrlMap").resolve(a.display == "touch" ? "m" : "www") + "/" + e.url,
                    params: a,
                    name: d,
                    dialog: b("sdk.Dialog").newInstance(f, a.display),
                  };
                  c = e.transform ? e.transform : n.genericTransform;
                  if (c) {
                    g = c(g);
                    if (!g) return;
                  }
                  a.display === "touch" && a.in_iframe && (g.params.parent_height = window.innerHeight);
                  d = e.getXdRelation || n.getXdRelation;
                  c = d(g.params);
                  !(g.id in n._defaultCb) &&
                    !("next" in g.params) &&
                    !("redirect_uri" in g.params) &&
                    (g.params.next = n._xdResult(g.cb, g.id, c, !0));
                  (c === "parent" || c === "opener") &&
                    ES(
                      "Object",
                      "assign",
                      !1,
                      g.params,
                      { channel_url: n._xdChannelHandler(f, c === "parent" ? "parent.parent" : "opener") },
                      !0
                    );
                  g = n.prepareParams(g);
                  return g;
                },
                prepareParams: function (a) {
                  a.params.display !== "async" && delete a.params.method;
                  a.params.kid_directed_site =
                    b("sdk.Runtime").getKidDirectedSite() || a.params.kid_directed_site;
                  a.params = b("flattenObject")(a.params);
                  var c = b("QueryString").encode(a.params);
                  !b("sdk.UA").nativeApp() && n.urlTooLongForIE(a.url + "?" + c)
                    ? (a.post = !0)
                    : c && (a.url += "?" + c);
                  return a;
                },
                urlTooLongForIE: function (a) {
                  return b("sdk.UA").ie() && b("sdk.UA").ie() <= 8 && a.length > 2048;
                },
                getDisplayMode: function (a, c) {
                  if (c.display === "hidden" || c.display === "none" || c.display === "native")
                    return c.display;
                  var d =
                    b("sdk.Runtime").isEnvironment(b("sdk.Runtime").ENVIRONMENTS.CANVAS) ||
                    b("sdk.Runtime").isEnvironment(b("sdk.Runtime").ENVIRONMENTS.PAGETAB);
                  if (d && !c.display) return "async";
                  if (i(c) || j(c)) return "async";
                  if (b("sdk.UA").mobile() || c.display === "touch") return "touch";
                  if ((c.display == "iframe" || c.display == "dialog") && !n.canIframe(c)) {
                    b("Log").error('"dialog" mode can only be used when the user is connected.');
                    return "popup";
                  }
                  return a.connectDisplay && !d
                    ? a.connectDisplay
                    : c.display || (n.canIframe(c) ? "dialog" : "popup");
                },
                canIframe: function (a) {
                  return b("sdk.Runtime").getAccessToken();
                },
                getXdRelation: function (a) {
                  a = a.display;
                  if (a === "popup" || a === "touch") return "opener";
                  if (a === "dialog" || a === "iframe" || a === "hidden" || a === "none") return "parent";
                  return a === "async" ? "parent.frames[" + window.name + "]" : "";
                },
                popup: function (a) {
                  var c = window.screenX,
                    d = window.screenY,
                    e = window.outerWidth,
                    f = window.outerHeight,
                    g = b("sdk.UA").mobile() ? null : a.size.width,
                    i = b("sdk.UA").mobile() ? null : a.size.height;
                  c = c < 0 ? window.screen.width + c : c;
                  c = c + (e - g) / 2;
                  e = d + (f - i) / 2.5;
                  d = [];
                  g !== null && d.push("width=" + g);
                  i !== null && d.push("height=" + i);
                  d.push("left=" + c);
                  d.push("top=" + e);
                  d.push("scrollbars=1");
                  (a.name == "permissions.request" || a.name == "permissions.oauth") &&
                    (d.push("toolbar=0"),
                    (!b("sdk.UA").chrome() || b("sdk.UA").chrome() < 59) && d.push("location=1"));
                  f = d.join(",");
                  a.post
                    ? ((g = window.open("about:blank", a.id, f)),
                      g &&
                        (n.setLoadedNode(a, g, "popup"),
                        b("sdk.Content").submitToTarget({ url: a.url, target: a.id, params: a.params })))
                    : ((g = window.open(a.url, a.id, f)), g && n.setLoadedNode(a, g, "popup"));
                  if (!g) {
                    if (b("sdk.feature")("popup_blocker_scribe_logging", !0)) {
                      i = h({ method: a.name }) ? "POPUP_MAYBE_BLOCKED_OAUTH" : "POPUP_MAYBE_BLOCKED";
                      b("sdk.Scribe").log("jssdk_error", {
                        appId: b("sdk.Runtime").getClientID(),
                        error: i,
                        extra: { call: a.name },
                      });
                    }
                    return;
                  }
                  a.id in n._defaultCb && n._popupMonitor();
                },
                setLoadedNode: function (a, b, c) {
                  c === "iframe" && (b.fbCallID = a.id),
                    (b = { node: b, type: c, fbCallID: a.id, method: a.name, params: a.params }),
                    (n._loadedNodes[a.id] = b);
                },
                getLoadedNode: function (a) {
                  a = typeof a === "object" ? a.id : a;
                  a = n._loadedNodes[a];
                  return a ? a.node : null;
                },
                hidden: function (a) {
                  (a.className = "FB_UI_Hidden"),
                    (a.root = b("sdk.Content").appendHidden("")),
                    n._insertIframe(a);
                },
                iframe: function (a) {
                  a.className = "FB_UI_Dialog";
                  var c = function () {
                      var c = ES("JSON", "stringify", !1, {
                        error_code: 4201,
                        error_message: b("sdk.fbt")._("User canceled the Dialog flow"),
                      });
                      n._triggerDefault(a.id, c);
                    },
                    d = {
                      onClose: c,
                      closeIcon: a.closeIcon === void 0 ? !0 : a.closeIcon,
                      classes: b("sdk.Dialog").isTabletStyle() ? "centered" : "",
                    };
                  a.root = b("sdk.Dialog").create(d);
                  a.hideLoader || b("sdk.Dialog").showLoader(c, a.size.width);
                  b("sdk.DOM").addCss(a.root, "fb_dialog_iframe");
                  n._insertIframe(a);
                },
                touch: function (a) {
                  a.params && a.params.in_iframe
                    ? a.ui_created
                      ? b("sdk.Dialog").showLoader(function () {
                          n._triggerDefault(a.id, null);
                        }, 0)
                      : n.iframe(a)
                    : b("sdk.UA").nativeApp() && !a.ui_created
                    ? ((a.frame = a.id),
                      b("sdk.Native").onready(function () {
                        n.setLoadedNode(a, b("sdk.Native").open(a.url + "#cb=" + a.frameName), "native");
                      }),
                      n._popupMonitor())
                    : a.ui_created || n.popup(a);
                },
                async: function (a) {
                  a.params.redirect_uri = location.protocol + "//" + location.host + location.pathname;
                  delete a.params.access_token;
                  var c = function (c) {
                    c = c.result;
                    if (c && c.e2e) {
                      var d = b("sdk.Dialog").get(a.id);
                      d.trackEvents(c.e2e);
                      d.trackEvent("close");
                      delete c.e2e;
                    }
                    a.cb(c);
                  };
                  i(a.params) || j(a.params)
                    ? ((a.params.method = "oauth"),
                      (a.params.redirect_uri = a.params.next),
                      b("sdk.Extensions").remote.showDialog(a.params, c))
                    : b("sdk.RPC").remote.showDialog(a.params, c);
                },
                "native": function (a) {
                  b("sdk.openMessenger")(a.params);
                },
                getDefaultSize: function () {
                  return b("sdk.Dialog").getDefaultSize();
                },
                _insertIframe: function (a) {
                  n._loadedNodes[a.id] = !1;
                  var c = function (b) {
                    a.id in n._loadedNodes && n.setLoadedNode(a, b, "iframe");
                  };
                  a.post
                    ? b("insertIframe")({
                        url: "about:blank",
                        root: a.root,
                        className: a.className,
                        width: a.size.width,
                        height: a.size.height,
                        id: a.id,
                        onInsert: c,
                        onload: function (c) {
                          b("sdk.Content").submitToTarget({ url: a.url, target: c.name, params: a.params });
                        },
                      })
                    : b("insertIframe")({
                        url: a.url,
                        root: a.root,
                        className: a.className,
                        width: a.size.width,
                        height: a.size.height,
                        id: a.id,
                        name: a.frameName,
                        onInsert: c,
                      });
                },
                _handleResizeMessage: function (a, c) {
                  a = n.getLoadedNode(a);
                  if (!a) return;
                  c.height && (a.style.height = c.height + "px");
                  c.width && c.width != 0 && (a.style.width = c.width + "px");
                  b("sdk.XD").inform("resize.ack", c || {}, "parent.frames[" + a.name + "]");
                  !b("sdk.Dialog").isActive(a) ? b("sdk.Dialog").show(a) : b("sdk.Dialog")._centerActive();
                },
                _triggerDefault: function (a, b) {
                  var c = { frame: a };
                  b && (c.result = b);
                  n._xdRecv(c, n._defaultCb[a] || function () {});
                },
                _popupMonitor: function () {
                  var a;
                  for (var c in n._loadedNodes)
                    if (Object.prototype.hasOwnProperty.call(n._loadedNodes, c) && c in n._defaultCb) {
                      var d = (function () {
                        var d = n._loadedNodes[c];
                        if (d.type != "popup" && d.type != "native") return "continue";
                        var e = d.node;
                        try {
                          e.closed
                            ? d.method === "permissions.oauth"
                              ? b("sdk.Auth").getLoginStatus(function (a) {
                                  a.status === "connected" && d.params != null && d.params.return_scopes
                                    ? b("sdk.api")("/me/permissions", function (b) {
                                        (!b || b.error) && n._triggerDefault(c, a);
                                        var d = "";
                                        for (var e = 0; e < b.data.length; e++)
                                          b.data[e].status === "granted" &&
                                            (d !== "" && (d += ","), (d += b.data[e].permission));
                                        a.authResponse.grantedScopes = d;
                                        n._triggerDefault(c, a);
                                      })
                                    : n._triggerDefault(c, a);
                                }, !0)
                              : n._triggerDefault(c, null)
                            : (a = !0);
                        } catch (a) {}
                      })();
                      if (d === "continue") continue;
                    }
                  a && !n._popupInterval
                    ? (n._popupInterval = window.setInterval(n._popupMonitor, 100))
                    : !a &&
                      n._popupInterval &&
                      (window.clearInterval(n._popupInterval), (n._popupInterval = null));
                },
                _xdChannelHandler: function (a, c) {
                  return b("sdk.XD").handler(
                    function (c) {
                      var d = n.getLoadedNode(a);
                      if (!d) return;
                      if (c.type == "resize") n._handleResizeMessage(a, c);
                      else if (c.type == "hide") b("sdk.Dialog").hide(d);
                      else if (c.type == "rendered") {
                        d = b("sdk.Dialog")._findRoot(d);
                        b("sdk.Dialog").show(d);
                      } else c.type == "fireevent" && b("sdk.Event").fire(c.event, c);
                    },
                    c,
                    !0,
                    null
                  );
                },
                _xdNextHandler: function (a, c, d, e) {
                  e && (n._defaultCb[c] = a);
                  return (
                    b("sdk.XD").handler(function (b) {
                      n._xdRecv(b, a);
                    }, d) +
                    "&frame=" +
                    c
                  );
                },
                _xdRecv: function (a, c) {
                  var d = n.getLoadedNode(a.frame);
                  if (d)
                    if (d.close)
                      try {
                        d.close(),
                          /iPhone.*Version\/(5|6)/.test(navigator.userAgent) &&
                            RegExp.$1 !== "5" &&
                            window.focus(),
                          n._popupCount--;
                      } catch (a) {}
                    else
                      b("sdk.DOM").containsCss(d, "FB_UI_Hidden")
                        ? window.setTimeout(function () {
                            d.parentNode.parentNode.removeChild(d.parentNode);
                          }, 3e3)
                        : b("sdk.DOM").containsCss(d, "FB_UI_Dialog") && b("sdk.Dialog").remove(d);
                  delete n._loadedNodes[a.frame];
                  delete n._defaultCb[a.frame];
                  if (a.e2e) {
                    var e = b("sdk.Dialog").get(a.frame);
                    e.trackEvents(a.e2e);
                    e.trackEvent("close");
                    delete a.e2e;
                  }
                  c(a);
                },
                _xdResult: function (a, b, c, d) {
                  return (
                    n._xdNextHandler(
                      function (b) {
                        a && a(b.result && b.result != n._resultToken && ES("JSON", "parse", !1, b.result));
                      },
                      b,
                      c,
                      d
                    ) +
                    "&result=" +
                    encodeURIComponent(n._resultToken)
                  );
                },
                xdHandler: function (a, c, d, e, f, g, h) {
                  return n._xdNextHandler(b("sdk.Auth").xdResponseWrapper(a, e, f, h), c, d, g);
                },
              };
              b("sdk.Extensions").stub("showDialog");
              b("sdk.RPC").stub("showDialog");
              e.exports = n;
            },
            null
          );
          __d(
            "sdk.ui",
            [
              "Assert",
              "Log",
              "sdk.feature",
              "sdk.Impressions",
              "sdk.PlatformVersioning",
              "sdk.Runtime",
              "sdk.UIServer",
              "sdk.URI",
            ],
            function (a, b, c, d, e, f) {
              function a(a, c) {
                b("Assert").isObject(a);
                b("Assert").maybeFunction(c);
                b("sdk.Runtime").getIsVersioned() &&
                  (b("sdk.PlatformVersioning").assertVersionIsSet(),
                  a.version
                    ? b("sdk.PlatformVersioning").assertValidVersion(a.version)
                    : (a.version = b("sdk.Runtime").getVersion()));
                a = ES("Object", "assign", !1, {}, a);
                if (!a.method) {
                  b("Log").error('"method" is a required parameter for FB.ui().');
                  return null;
                }
                a.method == "pay.prompt" && (a.method = "pay");
                var d = a.method;
                a.redirect_uri &&
                  (b("Log").warn("When using FB.ui, you should not specify a redirect_uri."),
                  delete a.redirect_uri);
                a.fallback_redirect_uri || (a.fallback_redirect_uri = document.location.href);
                (d == "permissions.request" || d == "permissions.oauth") &&
                  (a.display == "iframe" || a.display == "dialog") &&
                  (a.display = b("sdk.UIServer").checkOauthDisplay(a));
                if (a.display === "native" && d !== "send") {
                  b("Log").error('display type "native" not supported');
                  return null;
                }
                var e = b("sdk.feature")("e2e_tracking", !0);
                e && (a.e2e = {});
                a = b("sdk.UIServer").prepareCall(a, c || function () {});
                if (!a) return null;
                var f = a.params.display;
                f === "dialog" ? (f = "iframe") : f === "none" && (f = "hidden");
                c = b("sdk.UIServer")[f];
                if (!c) {
                  b("Log").error(
                    '"display" must be one of "popup", "dialog", "iframe", "touch", "async", "hidden", or "none"'
                  );
                  return null;
                }
                e &&
                  a.dialog.subscribe("e2e:end", function (a) {
                    (a.method = d),
                      (a.display = f),
                      b("Log").debug("e2e: %s", ES("JSON", "stringify", !1, a)),
                      b("sdk.Impressions").log(114, { payload: a });
                  });
                c(a);
                return a.dialog;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "legacy:fb.auth",
            [
              "FB",
              "Log",
              "sdk.Auth",
              "sdk.Cookie",
              "sdk.Event",
              "sdk.Runtime",
              "sdk.SignedRequest",
              "sdk.ui",
              "sdk.warnInsecure",
            ],
            function (a, b, c, d, e, f) {
              b("FB").provide("", {
                getLoginStatus: function () {
                  b("sdk.warnInsecure")("getLoginStatus");
                  return b("sdk.Auth").getLoginStatus.apply(b("sdk.Auth"), arguments);
                },
                getAuthResponse: function () {
                  b("sdk.warnInsecure")("getAuthResponse");
                  return b("sdk.Auth").getAuthResponse();
                },
                getAccessToken: function () {
                  b("sdk.warnInsecure")("getAccessToken");
                  return b("sdk.Runtime").getAccessToken() || null;
                },
                getUserID: function () {
                  b("sdk.warnInsecure")("getUserID");
                  return b("sdk.Runtime").getUserID() || b("sdk.Runtime").getCookieUserID();
                },
                login: function (a, c) {
                  b("sdk.warnInsecure")("login");
                  c &&
                    c.perms &&
                    !c.scope &&
                    ((c.scope = c.perms),
                    delete c.perms,
                    b("Log").warn(
                      "OAuth2 specification states that 'perms' should now be called 'scope'.  Please update."
                    ));
                  var d =
                    b("sdk.Runtime").isEnvironment(b("sdk.Runtime").ENVIRONMENTS.CANVAS) ||
                    b("sdk.Runtime").isEnvironment(b("sdk.Runtime").ENVIRONMENTS.PAGETAB);
                  b("sdk.ui")(
                    babelHelpers["extends"](
                      {
                        method: "permissions.oauth",
                        display: d ? "async" : "popup",
                        domain: location.hostname,
                      },
                      c || {}
                    ),
                    a
                  );
                },
                logout: function (a) {
                  b("sdk.ui")({ method: "auth.logout", display: "hidden" }, a);
                },
              });
              (a = b("sdk.Auth")).subscribe(
                "logout",
                ES((c = b("sdk.Event")).fire, "bind", !0, c, "auth.logout")
              );
              a.subscribe("login", ES(c.fire, "bind", !0, c, "auth.login"));
              a.subscribe("authresponse.change", ES(c.fire, "bind", !0, c, "auth.authResponseChange"));
              a.subscribe("status.change", ES(c.fire, "bind", !0, c, "auth.statusChange"));
              c.subscribe("init:post", function (a) {
                a.status && b("sdk.Auth").getLoginStatus();
                if (b("sdk.Runtime").getClientID() && b("sdk.Runtime").getUseCookie()) {
                  a = b("sdk.Cookie").loadSignedRequest();
                  if (a) {
                    try {
                      a = b("sdk.SignedRequest").parse(a);
                    } catch (a) {
                      b("sdk.Cookie").clearSignedRequestCookie();
                    }
                    a != null && a.user_id != null && b("sdk.Runtime").setCookieUserID(a.user_id);
                  }
                }
              });
            },
            3
          );
          __d(
            "sdk.Canvas.IframeHandling",
            ["DOMWrapper", "sdk.RPC"],
            function (a, b, c, d, e, f) {
              var g = null,
                h;
              function i() {
                var a = b("DOMWrapper").getWindow().document,
                  c = a.body;
                a = a.documentElement;
                var d = Math.max(c.offsetTop, 0),
                  e = Math.max(a.offsetTop, 0),
                  f = c.scrollHeight + d;
                c = c.offsetHeight + d;
                d = a.scrollHeight + e;
                a = a.offsetHeight + e;
                return Math.max(f, c, d, a);
              }
              function j(a) {
                typeof a !== "object" && (a = {});
                var c = 0,
                  d = 0;
                a.height || ((a.height = i()), (c = 16), (d = 4));
                a.frame || (a.frame = window.name || "iframe_canvas");
                if (h) {
                  var e = h.height;
                  e = a.height - e;
                  if (e <= d && e >= -c) return !1;
                }
                h = a;
                b("sdk.RPC").remote.setSize(a);
                return !0;
              }
              function a(a, b) {
                b === void 0 && typeof a === "number" && ((b = a), (a = !0)),
                  a || a === void 0
                    ? (g === null &&
                        (g = setInterval(function () {
                          j();
                        }, b || 100)),
                      j())
                    : g !== null && (clearInterval(g), (g = null));
              }
              b("sdk.RPC").stub("setSize");
              c = { setSize: j, setAutoGrow: a };
              e.exports = c;
            },
            null
          );
          __d(
            "sdk.Canvas.Navigation",
            ["sdk.RPC"],
            function (a, b, c, d, e, f) {
              function a(a) {
                (b("sdk.RPC").local.navigate = function (b) {
                  a({ path: b });
                }),
                  b("sdk.RPC").remote.setNavigationEnabled(!0);
              }
              b("sdk.RPC").stub("setNavigationEnabled");
              c = { setUrlHandler: a };
              e.exports = c;
            },
            null
          );
          __d(
            "sdk.Canvas.Plugin",
            ["Log", "sdk.api", "sdk.RPC", "sdk.Runtime", "sdk.UA"],
            function (a, b, c, d, e, f) {
              var g = "CLSID:D27CDB6E-AE6D-11CF-96B8-444553540000",
                h = "CLSID:444785F1-DE89-4295-863A-D46C3A781394",
                i = null;
              d = b("sdk.UA").osx() && b("sdk.UA").osx.getVersionParts();
              var j = !(
                d &&
                d[0] > 10 &&
                d[1] > 10 &&
                (b("sdk.UA").chrome() >= 31 || b("sdk.UA").webkit() >= 537.71 || b("sdk.UA").firefox() >= 25)
              );
              function k(a) {
                (a._hideunity_savedstyle = {}),
                  (a._hideunity_savedstyle.left = a.style.left),
                  (a._hideunity_savedstyle.position = a.style.position),
                  (a._hideunity_savedstyle.width = a.style.width),
                  (a._hideunity_savedstyle.height = a.style.height),
                  (a.style.left = "-10000px"),
                  (a.style.position = "absolute"),
                  (a.style.width = "1px"),
                  (a.style.height = "1px");
              }
              function l(a) {
                a._hideunity_savedstyle &&
                  ((a.style.left = a._hideunity_savedstyle.left),
                  (a.style.position = a._hideunity_savedstyle.position),
                  (a.style.width = a._hideunity_savedstyle.width),
                  (a.style.height = a._hideunity_savedstyle.height));
              }
              function m(a) {
                (a._old_visibility = a.style.visibility), (a.style.visibility = "hidden");
              }
              function n(a) {
                (a.style.visibility = a._old_visibility || ""), delete a._old_visibility;
              }
              function o(a) {
                var b = a.type ? a.type.toLowerCase() : null;
                b = b === "application/x-shockwave-flash" || (a.classid && a.classid.toUpperCase() == g);
                if (!b) return !1;
                b = /opaque|transparent/i;
                if (b.test(a.getAttribute("wmode"))) return !1;
                for (var c = 0; c < a.childNodes.length; c++) {
                  var d = a.childNodes[c];
                  if (/param/i.test(d.nodeName) && /wmode/i.test(d.name) && b.test(d.value)) return !1;
                }
                return !0;
              }
              function p(a) {
                var b = a.type ? a.type.toLowerCase() : null;
                return b === "application/vnd.unity" || (a.classid && a.classid.toUpperCase() == h);
              }
              function q(a) {
                var c = ES("Array", "from", !1, window.document.getElementsByTagName("object"));
                c = c.concat(ES("Array", "from", !1, window.document.getElementsByTagName("embed")));
                var d = !1,
                  e = !1;
                ES(c, "forEach", !0, function (c) {
                  var f = o(c),
                    g = j && p(c);
                  if (!f && !g) return;
                  d = d || f;
                  e = e || g;
                  g = function () {
                    a.state === "opened" ? (f ? m(c) : k(c)) : f ? n(c) : l(c);
                  };
                  if (i) {
                    b("Log").info("Calling developer specified callback");
                    var h = { state: a.state, elem: c };
                    i(h);
                    setTimeout(g, 200);
                  } else g();
                });
                if (Math.random() <= 1 / 1e3) {
                  c = { unity: e, flash: d };
                  b("sdk.api")(b("sdk.Runtime").getClientID() + "/occludespopups", "post", c);
                }
              }
              b("sdk.RPC").local.hidePluginObjects = function () {
                b("Log").info("hidePluginObjects called"), q({ state: "opened" });
              };
              b("sdk.RPC").local.showPluginObjects = function () {
                b("Log").info("showPluginObjects called"), q({ state: "closed" });
              };
              b("sdk.RPC").local.showFlashObjects = b("sdk.RPC").local.showPluginObjects;
              b("sdk.RPC").local.hideFlashObjects = b("sdk.RPC").local.hidePluginObjects;
              function a() {
                m(), k();
              }
              function c() {
                n(), l();
              }
              f = {
                _setHidePluginCallback: function (a) {
                  i = a;
                },
                hidePluginElement: a,
                showPluginElement: c,
              };
              e.exports = f;
            },
            null
          );
          __d(
            "sdk.Canvas.Tti",
            ["sdk.RPC", "sdk.Runtime"],
            function (a, b, c, d, e, f) {
              function g(a, c) {
                c = { appId: b("sdk.Runtime").getClientID(), time: ES("Date", "now", !1), name: c };
                c = [c];
                a &&
                  c.push(function (b) {
                    a(b.result);
                  });
                b("sdk.RPC").remote.logTtiMessage.apply(null, c);
              }
              function a() {
                g(null, "StartIframeAppTtiTimer");
              }
              function c(a) {
                g(a, "StopIframeAppTtiTimer");
              }
              function d(a) {
                g(a, "RecordIframeAppTti");
              }
              b("sdk.RPC").stub("logTtiMessage");
              f = { setDoneLoading: d, startTimer: a, stopTimer: c };
              e.exports = f;
            },
            null
          );
          __d(
            "legacy:fb.canvas",
            [
              "Assert",
              "sdk.Canvas.Environment",
              "sdk.Event",
              "FB",
              "sdk.Canvas.IframeHandling",
              "sdk.Canvas.Navigation",
              "sdk.Canvas.Plugin",
              "sdk.RPC",
              "sdk.Runtime",
              "sdk.Canvas.Tti",
            ],
            function (a, b, c, d, e, f) {
              b("FB").provide("Canvas", {
                setSize: function (a) {
                  b("Assert").maybeObject(a, "Invalid argument");
                  return b("sdk.Canvas.IframeHandling").setSize.apply(null, arguments);
                },
                setAutoGrow: function () {
                  return b("sdk.Canvas.IframeHandling").setAutoGrow.apply(null, arguments);
                },
                getPageInfo: function (a) {
                  b("Assert").isFunction(a, "Invalid argument");
                  return b("sdk.Canvas.Environment").getPageInfo.apply(null, arguments);
                },
                scrollTo: function (a, c) {
                  b("Assert").maybeNumber(a, "Invalid argument");
                  b("Assert").maybeNumber(c, "Invalid argument");
                  return b("sdk.Canvas.Environment").scrollTo.apply(null, arguments);
                },
                setDoneLoading: function (a) {
                  b("Assert").maybeFunction(a, "Invalid argument");
                  return b("sdk.Canvas.Tti").setDoneLoading.apply(null, arguments);
                },
                startTimer: function () {
                  return b("sdk.Canvas.Tti").startTimer.apply(null, arguments);
                },
                stopTimer: function (a) {
                  b("Assert").maybeFunction(a, "Invalid argument");
                  return b("sdk.Canvas.Tti").stopTimer.apply(null, arguments);
                },
                getHash: function (a) {
                  b("Assert").isFunction(a, "Invalid argument");
                  return b("sdk.Canvas.Navigation").getHash.apply(null, arguments);
                },
                setHash: function (a) {
                  b("Assert").isString(a, "Invalid argument");
                  return b("sdk.Canvas.Navigation").setHash.apply(null, arguments);
                },
                setUrlHandler: function (a) {
                  b("Assert").isFunction(a, "Invalid argument");
                  return b("sdk.Canvas.Navigation").setUrlHandler.apply(null, arguments);
                },
              }),
                (b("sdk.RPC").local.fireEvent = ES(b("sdk.Event").fire, "bind", !0, b("sdk.Event"))),
                b("sdk.Event").subscribe("init:post", function (a) {
                  b("sdk.Runtime").isEnvironment(b("sdk.Runtime").ENVIRONMENTS.CANVAS) &&
                    (b("Assert").isTrue(
                      !a.hideFlashCallback || !a.hidePluginCallback,
                      "cannot specify deprecated hideFlashCallback and new hidePluginCallback"
                    ),
                    b("sdk.Canvas.Plugin")._setHidePluginCallback(
                      a.hidePluginCallback || a.hideFlashCallback
                    ));
                });
            },
            3
          );
          __d(
            "legacy:fb.canvas-legacy",
            ["Assert", "FB", "Log", "sdk.Canvas.Tti"],
            function (a, b, c, d, e, f) {
              b("FB").provide("CanvasInsights", {
                setDoneLoading: function (a) {
                  b("Log").warn("Deprecated: use FB.Canvas.setDoneLoading");
                  b("Assert").maybeFunction(a, "Invalid argument");
                  return b("sdk.Canvas.Tti").setDoneLoading.apply(null, arguments);
                },
              });
            },
            3
          );
          __d(
            "legacy:fb.canvas.plugin",
            ["FB", "sdk.Canvas.Plugin"],
            function (a, b, c, d, e, f) {
              b("FB").provide("Canvas.Plugin", b("sdk.Canvas.Plugin"));
            },
            3
          );
          __d(
            "sdk.Canvas.Prefetcher",
            ["JSSDKCanvasPrefetcherConfig", "sdk.api", "sdk.Runtime"],
            function (a, b, c, d, e, f) {
              var g = { AUTOMATIC: 0, MANUAL: 1 },
                h = b("JSSDKCanvasPrefetcherConfig").sampleRate,
                i = b("JSSDKCanvasPrefetcherConfig").blacklist,
                j = g.AUTOMATIC,
                k = [];
              function l() {
                var a = { object: "data", link: "href", script: "src" };
                j == g.AUTOMATIC &&
                  ES(ES("Object", "keys", !1, a), "forEach", !0, function (b) {
                    var c = a[b];
                    ES(ES("Array", "from", !1, document.getElementsByTagName(b)), "forEach", !0, function (
                      a
                    ) {
                      a[c] && k.push(a[c]);
                    });
                  });
                if (k.length === 0) return;
                b("sdk.api")(b("sdk.Runtime").getClientID() + "/staticresources", "post", {
                  urls: ES("JSON", "stringify", !1, k),
                  is_https: location.protocol === "https:",
                });
                k = [];
              }
              function a() {
                if (
                  !b("sdk.Runtime").isEnvironment(b("sdk.Runtime").ENVIRONMENTS.CANVAS) ||
                  !b("sdk.Runtime").getClientID() ||
                  !h
                )
                  return;
                if (
                  Math.random() >= 1 / h ||
                  i == "*" ||
                  ~ES(i, "indexOf", !0, b("sdk.Runtime").getClientID())
                )
                  return;
                setTimeout(l, 3e4);
              }
              function c(a) {
                j = a;
              }
              function d(a) {
                k.push(a);
              }
              f = {
                COLLECT_AUTOMATIC: g.AUTOMATIC,
                COLLECT_MANUAL: g.MANUAL,
                addStaticResource: d,
                setCollectionMode: c,
                _maybeSample: a,
              };
              e.exports = f;
            },
            null
          );
          __d(
            "legacy:fb.canvas.prefetcher",
            ["FB", "sdk.Canvas.Prefetcher", "sdk.Event", "sdk.Runtime"],
            function (a, b, c, d, e, f) {
              b("FB").provide("Canvas.Prefetcher", b("sdk.Canvas.Prefetcher")),
                b("sdk.Event").subscribe("init:post", function (a) {
                  b("sdk.Runtime").isEnvironment(b("sdk.Runtime").ENVIRONMENTS.CANVAS) &&
                    b("sdk.Canvas.Prefetcher")._maybeSample();
                });
            },
            3
          );
          __d(
            "legacy:fb.compat.ui",
            ["FB", "Log", "sdk.ui", "sdk.UIServer"],
            function (a, b, c, d, e, f) {
              b("FB").provide("", {
                share: function (a) {
                  b("Log").error("share() has been deprecated. Please use FB.ui() instead."),
                    b("sdk.ui")({ display: "popup", method: "stream.share", u: a });
                },
                publish: function (a, c) {
                  b("Log").error("publish() has been deprecated. Please use FB.ui() instead."),
                    (a = a || {}),
                    b("sdk.ui")(
                      babelHelpers["extends"](
                        { display: "popup", method: "stream.publish", preview: 1 },
                        a || {}
                      ),
                      c
                    );
                },
                addFriend: function (a, c) {
                  b("Log").error("addFriend() has been deprecated. Please use FB.ui() instead."),
                    b("sdk.ui")({ display: "popup", id: a, method: "friend.add" }, c);
                },
              }),
                (b("sdk.UIServer").Methods["auth.login"] = b("sdk.UIServer").Methods["permissions.request"]);
            },
            3
          );
          __d(
            "sdk.Data",
            ["Log"],
            function (a, b, c, d, e, f) {
              a = function () {
                b("Log").error(
                  "##########################\n#  FB.Data has been deprecated.\n#  Please use FB.api().\n#  https://developers.facebook.com/docs/javascript/reference/FB.api/\n##########################"
                );
              };
              c = { query: a, waitOn: a, process: a };
              e.exports = c;
            },
            null
          );
          __d(
            "legacy:fb.data",
            ["FB", "sdk.Data"],
            function (a, b, c, d, e, f) {
              b("FB").provide("Data", b("sdk.Data"));
            },
            3
          );
          __d(
            "legacy:fb.event",
            ["FB", "sdk.Event", "Log"],
            function (a, b, c, d, e, f) {
              a = function (a) {
                return b("Log").error("FB.Event." + a + "() has been deprecated");
              };
              b("FB").provide("Event", {
                subscribe: function (a, c) {
                  return b("sdk.Event").subscribe(a, c);
                },
                unsubscribe: ES(b("sdk.Event").unsubscribe, "bind", !0, b("sdk.Event")),
                clear: ES(a, "bind", !0, null, "clear"),
                fire: ES(a, "bind", !0, null, "fire"),
              });
            },
            3
          );
          __d(
            "legacy:fb.frictionless",
            ["FB", "sdk.Frictionless"],
            function (a, b, c, d, e, f) {
              b("FB").provide("Frictionless", b("sdk.Frictionless"));
            },
            3
          );
          __d(
            "sdk.GamingServices",
            ["sdk.api", "sdk.ui"],
            function (a, b, c, d, e, f) {
              a = {
                friendFinder: function (a) {
                  b("sdk.ui")({ display: "touch", method: "gaming_friendfinder" }, a);
                },
                uploadImageToMediaLibrary: function (a, c, d, e) {
                  b("sdk.api")("me/photos", "POST", { caption: c, url: a }, function (a) {
                    if (d === !1 || !a || a.error) e !== null && e(a);
                    else {
                      var c = a.id;
                      b("sdk.ui")(
                        { display: "touch", method: "gaming_media_library", media_id: c },
                        function (b) {
                          e !== null && e(a);
                        }
                      );
                    }
                  });
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "legacy:fb.gamingservices",
            ["FB", "sdk.GamingServices"],
            function (a, b, c, d, e, f) {
              b("FB").provide("", { gamingservices: b("sdk.GamingServices") });
            },
            3
          );
          __d(
            "sdk.MBasicInitializer",
            ["UrlMap", "sdk.DOM", "sdk.fbt", "sdk.Runtime", "sdk.UA", "sdk.URI"],
            function (a, b, c, d, e, f) {
              var g = function () {
                function a(a) {
                  if (!a) return;
                  var c = a.parentNode;
                  if (!c) return;
                  var d = b("sdk.DOM").getAttr(a, "href") || window.location.href,
                    e = new (b("sdk.URI"))(b("UrlMap").resolve("m"));
                  e.setPath("/dialog/share");
                  e.addQueryData("href", encodeURI(d));
                  e.addQueryData("app_id", b("sdk.Runtime").getClientID());
                  e.addQueryData("mbasic_link", 1);
                  d = document.createElement("a");
                  d.style = "display:inline-block; zoom:1;";
                  d.textContent = b("sdk.fbt")._("Share to Facebook");
                  d.setAttribute("href", e.toString());
                  d.setAttribute("target", "_blank");
                  c.insertBefore(d, a);
                  c.removeChild(a);
                }
                ES(
                  ES("Array", "from", !1, document.getElementsByTagName("fb:share-button")),
                  "forEach",
                  !0,
                  function (b) {
                    return a(b);
                  }
                );
                ES(
                  ES("Array", "from", !1, document.getElementsByClassName("fb-share-button")),
                  "forEach",
                  !0,
                  function (b) {
                    return a(b);
                  }
                );
              };
              function a() {
                if (!b("sdk.UA").mBasic()) return;
                g();
              }
              e.exports = { init: a };
            },
            null
          );
          __d(
            "sdk.init",
            [
              "Log",
              "ManagedError",
              "QueryString",
              "sdk.Cookie",
              "sdk.ErrorHandling",
              "sdk.Event",
              "sdk.MBasicInitializer",
              "sdk.PlatformVersioning",
              "sdk.Runtime",
              "sdk.UA",
              "sdk.URI",
            ],
            function (a, b, c, d, e, f) {
              function g(a) {
                var c =
                  (typeof a === "number" && a > 0) ||
                  (typeof a === "string" && /^[0-9a-f]{21,}$|^[0-9]{1,21}$/.test(a));
                if (c) return a.toString();
                b("Log").warn(
                  "Invalid App Id: Must be a number or numeric string representing the application id."
                );
                return null;
              }
              function h(a) {
                b("sdk.Runtime").getInitialized() &&
                  b("Log").warn("FB.init has already been called - this could indicate a problem");
                if (b("sdk.Runtime").getIsVersioned()) {
                  if (Object.prototype.toString.call(a) !== "[object Object]")
                    throw new (b("ManagedError"))("Invalid argument");
                  if (a.authResponse) throw new (b("ManagedError"))("Setting authResponse is not supported");
                  a.version || (a.version = new (b("sdk.URI"))(location.href).getQueryData().sdk_version);
                  b("sdk.PlatformVersioning").assertValidVersion(a.version);
                  b("sdk.Runtime").setVersion(a.version);
                } else
                  /number|string/.test(typeof a) &&
                    (b("Log").warn("FB.init called with invalid parameters"), (a = { apiKey: a })),
                    (a = ES("Object", "assign", !1, { status: !0 }, a || {}));
                var c = g(a.appId || a.apiKey);
                c !== null && b("sdk.Runtime").setClientID(c);
                "scope" in a && b("sdk.Runtime").setScope(a.scope);
                a.cookie &&
                  (b("sdk.Runtime").setUseCookie(!0),
                  typeof a.cookie === "string" && b("sdk.Cookie").setDomain(a.cookie));
                (a.localStorage === !1 || a.localStorage === "false") &&
                  b("sdk.Runtime").setUseLocalStorage(!1);
                a.kidDirectedSite && b("sdk.Runtime").setKidDirectedSite(!0);
                (a.autoLogAppEvents === "1" || a.autoLogAppEvents === "true") && (a.autoLogAppEvents = !0);
                a.ab && b("sdk.Runtime").setSDKAB(a.ab);
                b("sdk.Runtime").setInitialized(!0);
                b("sdk.UA").mBasic() && b("sdk.MBasicInitializer").init();
                b("sdk.Event").fire("init:post", a);
              }
              window.setTimeout(function () {
                var a = /(connect\.facebook\.net|\.facebook\.com\/assets.php|\.facebook\.net\/assets.php).*?#(.*)/;
                ES(
                  ES("Array", "from", !1, fb_fif_window.document.getElementsByTagName("script")),
                  "forEach",
                  !0,
                  function (c) {
                    if (c.src) {
                      c = a.exec(c.src);
                      if (c) {
                        c = b("QueryString").decode(c[2]);
                        for (var d in c)
                          if (Object.prototype.hasOwnProperty.call(c, d)) {
                            var e = c[d];
                            e == "0" && (c[d] = 0);
                          }
                        h(c);
                      }
                    }
                  }
                );
                window.fbAsyncInit &&
                  !window.fbAsyncInit.hasRun &&
                  (b("sdk.Event").fire("init:asyncstart"),
                  (window.fbAsyncInit.hasRun = !0),
                  b("sdk.ErrorHandling").unguard(window.fbAsyncInit)());
              }, 0);
              e.exports = h;
            },
            null
          );
          __d(
            "legacy:fb.init",
            ["FB", "sdk.Event", "sdk.init"],
            function (a, b, c, d, e, f) {
              "use strict";
              b("FB").provide("", { init: b("sdk.init") }),
                b("sdk.Event").subscribe("init:post", function () {
                  __buffer && __buffer.replay();
                }),
                window.setTimeout(function () {
                  __buffer && __buffer.opts && b("sdk.init")(__buffer.opts);
                }, 0);
            },
            3
          );
          __d(
            "legacy:fb.json",
            ["FB", "ManagedError"],
            function (a, b, c, d, e, f) {
              b("FB").provide("JSON", {
                stringify: function (a) {
                  try {
                    return ES("JSON", "stringify", !1, a);
                  } catch (a) {
                    throw new (b("ManagedError"))(a.message, a);
                  }
                },
                parse: function (a) {
                  try {
                    return ES("JSON", "parse", !1, a);
                  } catch (a) {
                    throw new (b("ManagedError"))(a.message, a);
                  }
                },
              });
            },
            3
          );
          __d(
            "runOnce",
            [],
            function (a, b, c, d, e, f) {
              function a(a) {
                var b = !1,
                  c;
                return function () {
                  b || ((b = !0), (c = a()));
                  return c;
                };
              }
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.Time",
            ["Log", "sdk.feature", "sdk.Impressions", "sdk.Runtime"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = window.performance,
                h = g && "now" in g && "getEntriesByName" in g,
                i,
                j = {};
              if (h) {
                var k = b("sdk.Runtime").getSDKUrl();
                a = null;
                c = ES(g.getEntriesByType("resource"), "filter", !0, function (a) {
                  return ES(a.name, "startsWith", !0, k);
                });
                if (c.length > 1)
                  if (c > 2) c = null;
                  else {
                    d = ES(c, "findIndex", !0, function (a) {
                      return ES(a.name, "startsWith", !0, k + "?hash=");
                    });
                    !d ? (c = null) : ((a = c.splice(d)[0]), (c = c[0]));
                  }
                else if (c.length === 1) {
                  f = document.getElementById("facebook-jssdk-iframe");
                  f &&
                    f instanceof HTMLIFrameElement &&
                    (a = f.contentWindow.performance.getEntriesByType("resource").find(function (a) {
                      return ES(a.name, "startsWith", !0, k);
                    }));
                  c = c[0];
                } else c = null;
                c &&
                  ((j.fetchTime = Math.round(c.duration)),
                  a && (j.fetchTime += Math.round(a.duration)),
                  "transferSize" in c &&
                    ((j.transferSize = c.transferSize), a && (j.transferSize += a.transferSize)),
                  b("Log").debug(
                    "sdkperf: it took %s ms and %s bytes to load %s",
                    j.fetchTime,
                    j.transferSize,
                    k
                  ),
                  (i = c.startTime),
                  (j.ns = b("sdk.Runtime").getSDKNS()),
                  i &&
                    window.setTimeout(function () {
                      var a = b("sdk.feature")("log_perf", !1),
                        c = b("sdk.Runtime").getSDKAB();
                      c && ((j.ab = c), (a = !0));
                      a && b("sdk.Impressions").log(116, j);
                    }, 1e4));
              }
              d = {
                log: function (a) {
                  if (!h || !i) return;
                  j[a] = Math.round(g.now() - i);
                  b("Log").debug("sdkperf: %s logged after %s ms", a, j[a]);
                },
              };
              e.exports = d;
            },
            null
          );
          __d(
            "legacy:fb.time",
            ["sdk.Event", "sdk.Time", "runOnce"],
            function (a, b, c, d, e, f) {
              "use strict";
              (a = b("sdk.Event")).subscribe("init:post", function () {
                b("sdk.Time").log("init");
              });
              a.subscribe("init:asyncstart", function () {
                b("sdk.Time").log("asyncstart");
              });
              a.subscribe(
                "iframeplugin:create",
                b("runOnce")(function () {
                  return b("sdk.Time").log("pluginframe");
                })
              );
              a.subscribe(
                "iframeplugin:onload",
                b("runOnce")(function () {
                  return b("sdk.Time").log("ttfp");
                })
              );
            },
            3
          );
          __d(
            "legacy:fb.ua",
            ["FB", "sdk.UA"],
            function (a, b, c, d, e, f) {
              b("FB").provide("UA", { nativeApp: b("sdk.UA").nativeApp });
            },
            3
          );
          __d(
            "legacy:fb.ui",
            ["FB", "sdk.ui"],
            function (a, b, c, d, e, f) {
              b("FB").provide("", { ui: b("sdk.ui") });
            },
            3
          );
          __d(
            "XFBML",
            ["Assert", "Log", "ObservableMixin", "runOnce"],
            function (a, b, c, d, e, f) {
              var g = {},
                h = {},
                i = 0,
                j = new (b("ObservableMixin"))();
              function k(a, b) {
                return ES(a[b] + "", "trim", !0);
              }
              function l(a) {
                return a.scopeName ? a.scopeName + ":" + a.nodeName : "";
              }
              function m(a) {
                return g[k(a, "nodeName").toLowerCase()] || g[l(a).toLowerCase()];
              }
              function n(a) {
                var b = ES(k(a, "className").split(/\s+/), "filter", !0, function (a) {
                  return Object.prototype.hasOwnProperty.call(h, a);
                });
                if (b.length === 0) return void 0;
                if (
                  a.getAttribute("fb-xfbml-state") ||
                  !a.childNodes ||
                  a.childNodes.length === 0 ||
                  (a.childNodes.length === 1 && a.childNodes[0].nodeType === 3) ||
                  (a.children.length === 1 && k(a.children[0], "className") === "fb-xfbml-parse-ignore")
                )
                  return h[b[0]];
              }
              function o(a) {
                var b = {};
                ES(ES("Array", "from", !1, a.attributes), "forEach", !0, function (a) {
                  b[k(a, "name")] = k(a, "value");
                });
                return b;
              }
              function p(a, c, d) {
                b("Assert").isTrue(
                  a && a.nodeType && a.nodeType === 1 && !!a.getElementsByTagName,
                  "Invalid DOM node passed to FB.XFBML.parse()"
                );
                b("Assert").isFunction(c, "Invalid callback passed to FB.XFBML.parse()");
                var e = ++i;
                b("Log").info("XFBML Parsing Start %s", e);
                var f = 1,
                  g = 0,
                  h = function () {
                    f--,
                      f === 0 &&
                        (b("Log").info("XFBML Parsing Finish %s, %s tags found", e, g),
                        c(),
                        j.inform("render", e, g)),
                      b("Assert").isTrue(f >= 0, "onrender() has been called too many times");
                  };
                ES(ES("Array", "from", !1, a.getElementsByTagName("*")), "forEach", !0, function (a) {
                  if (!d && a.getAttribute("fb-xfbml-state")) return;
                  if (a.nodeType !== 1) return;
                  var c = m(a) || n(a);
                  if (!c) return;
                  f++;
                  g++;
                  var e = new c.ctor(a, c.xmlns, c.localName, o(a));
                  e.subscribe(
                    "render",
                    b("runOnce")(function () {
                      a.setAttribute("fb-xfbml-state", "rendered"), h();
                    })
                  );
                  c = function b() {
                    a.getAttribute("fb-xfbml-state") == "parsed"
                      ? j.subscribe("render.queue", b)
                      : (a.setAttribute("fb-xfbml-state", "parsed"), e.process());
                  };
                  c();
                });
                j.inform("parse", e, g);
                var k = 3e4;
                setTimeout(function () {
                  f > 0 && b("Log").warn("%s tags failed to render in %s ms", f, k);
                }, k);
                h();
              }
              j.subscribe("render", function () {
                var a = j.getSubscribers("render.queue");
                j.clearSubscribers("render.queue");
                ES(a, "forEach", !0, function (a) {
                  a();
                });
              });
              ES("Object", "assign", !1, j, {
                registerTag: function (a) {
                  var c = a.xmlns + ":" + a.localName;
                  b("Assert").isUndefined(g[c], c + " already registered");
                  g[c] = a;
                  h[a.xmlns + "-" + a.localName] = a;
                },
                parse: function (a, b) {
                  p(a || document.body, b || function () {}, !0);
                },
                parseNew: function () {
                  p(document.body, function () {}, !1);
                },
              });
              e.exports = j;
            },
            null
          );
          __d(
            "legacy:fb.xfbml",
            ["Assert", "sdk.Event", "FB", "XFBML", "sdk.domReady", "wrapFunction"],
            function (a, b, c, d, e, f) {
              b("FB").provide("XFBML", {
                parse: function (a) {
                  b("Assert").maybeXfbml(a, "Invalid argument");
                  a && a.nodeType === 9 && (a = a.body);
                  return b("XFBML").parse.apply(null, arguments);
                },
              });
              b("XFBML").subscribe("parse", ES((a = b("sdk.Event")).fire, "bind", !0, a, "xfbml.parse"));
              b("XFBML").subscribe("render", ES(a.fire, "bind", !0, a, "xfbml.render"));
              a.subscribe("init:post", function (a) {
                a.xfbml &&
                  setTimeout(
                    b("wrapFunction")(
                      ES(b("sdk.domReady"), "bind", !0, null, b("XFBML").parse),
                      "entry",
                      "init:post:xfbml.parse"
                    ),
                    0
                  );
              });
              b("Assert").define("Xfbml", function (a) {
                return (a.nodeType === 1 || a.nodeType === 9) && typeof a.nodeName === "string";
              });
              try {
                document.namespaces && !document.namespaces.item.fb && document.namespaces.add("fb");
              } catch (a) {}
            },
            3
          );
          __d(
            "UserAgent_DEPRECATED",
            [],
            function (a, b, c, d, e, f) {
              var g = !1,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q,
                r,
                s,
                t,
                u,
                v,
                w;
              function x() {
                if (g) return;
                g = !0;
                var a = navigator.userAgent,
                  b = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
                    a
                  ),
                  c = /(Mac OS X)|(Windows)|(Linux)/.exec(a);
                s = /\b(iPhone|iP[ao]d)/.exec(a);
                t = /\b(iP[ao]d)/.exec(a);
                q = /Android/i.exec(a);
                u = /FBAN\/\w+;/i.exec(a);
                v = /FBAN\/mLite;/i.exec(a);
                w = /Mobile/i.exec(a);
                r = !!/Win64/.exec(a);
                if (b) {
                  h = b[1] ? parseFloat(b[1]) : b[5] ? parseFloat(b[5]) : NaN;
                  h && document && document.documentMode && (h = document.documentMode);
                  var d = /(?:Trident\/(\d+.\d+))/.exec(a);
                  m = d ? parseFloat(d[1]) + 4 : h;
                  i = b[2] ? parseFloat(b[2]) : NaN;
                  j = b[3] ? parseFloat(b[3]) : NaN;
                  k = b[4] ? parseFloat(b[4]) : NaN;
                  k
                    ? ((b = /(?:Chrome\/(\d+\.\d+))/.exec(a)), (l = b && b[1] ? parseFloat(b[1]) : NaN))
                    : (l = NaN);
                } else h = i = j = l = k = NaN;
                if (c) {
                  if (c[1]) {
                    d = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);
                    n = d ? parseFloat(d[1].replace("_", ".")) : !0;
                  } else n = !1;
                  o = !!c[2];
                  p = !!c[3];
                } else n = o = p = !1;
              }
              var y = {
                ie: function () {
                  return x() || h;
                },
                ieCompatibilityMode: function () {
                  return x() || m > h;
                },
                ie64: function () {
                  return y.ie() && r;
                },
                firefox: function () {
                  return x() || i;
                },
                opera: function () {
                  return x() || j;
                },
                webkit: function () {
                  return x() || k;
                },
                safari: function () {
                  return y.webkit();
                },
                chrome: function () {
                  return x() || l;
                },
                windows: function () {
                  return x() || o;
                },
                osx: function () {
                  return x() || n;
                },
                linux: function () {
                  return x() || p;
                },
                iphone: function () {
                  return x() || s;
                },
                mobile: function () {
                  return x() || s || t || q || w;
                },
                nativeApp: function () {
                  return x() || v != null ? null : u;
                },
                android: function () {
                  return x() || q;
                },
                ipad: function () {
                  return x() || t;
                },
              };
              e.exports = y;
            },
            null
          );
          __d(
            "hasNamePropertyBug",
            ["UserAgent_DEPRECATED", "guid"],
            function (a, b, c, d, e, f) {
              var g = b("UserAgent_DEPRECATED").ie() ? void 0 : !1;
              function h() {
                var a = document.createElement("form"),
                  c = a.appendChild(document.createElement("input"));
                c.name = b("guid")();
                g = c !== a.elements[c.name];
                return g;
              }
              function a() {
                return g === void 0 ? h() : g;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "isNumberLike",
            [],
            function (a, b, c, d, e, f) {
              function a(a) {
                return !isNaN(parseFloat(a)) && isFinite(a);
              }
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.createIframe",
            ["DOMEventListener", "getBlankIframeSrc", "guid", "hasNamePropertyBug", "isNumberLike"],
            function (a, b, c, d, e, f) {
              function a(a) {
                var c = ES("Object", "assign", !1, {}, a),
                  d,
                  e = c.name || b("guid")(),
                  f = c.root,
                  g = c.style || { border: "none" },
                  h = c.url,
                  i = c.onload,
                  j = c.onerror;
                b("hasNamePropertyBug")()
                  ? (d = document.createElement('<iframe name="' + e + '"/>'))
                  : ((d = document.createElement("iframe")), (d.name = e));
                delete c.style;
                delete c.name;
                delete c.url;
                delete c.root;
                delete c.onload;
                delete c.onerror;
                delete c.height;
                delete c.width;
                c.frameBorder === void 0 && (c.frameBorder = 0);
                c.allowTransparency === void 0 && (c.allowTransparency = !0);
                c.allowFullscreen === void 0 && (c.allowFullscreen = !0);
                c.scrolling === void 0 && (c.scrolling = "no");
                c.allow === void 0 && (c.allow = "encrypted-media");
                c.lazy && (c.loading = "lazy");
                delete c.lazy;
                a.width != null && b("isNumberLike")(a.width) && (d.width = a.width + "px");
                a.height != null && b("isNumberLike")(a.height) && (d.height = a.height + "px");
                c.testid && ((d.dataset.testid = c.testid), delete c.testid);
                for (var k in c) Object.prototype.hasOwnProperty.call(c, k) && d.setAttribute(k, c[k]);
                ES("Object", "assign", !1, d.style, g);
                d.src = b("getBlankIframeSrc")();
                f != null && f.appendChild(d);
                if (i)
                  var l = b("DOMEventListener").add(d, "load", function () {
                    l.remove(), i();
                  });
                if (j)
                  var m = b("DOMEventListener").add(d, "error", function () {
                    m.remove(), j();
                  });
                d.src = h;
                return d;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "IframePlugin",
            [
              "Log",
              "ObservableMixin",
              "QueryString",
              "Type",
              "UrlMap",
              "guid",
              "resolveURI",
              "sdk.Auth",
              "sdk.createIframe",
              "sdk.DOM",
              "sdk.Event",
              "sdk.PlatformVersioning",
              "sdk.Runtime",
              "sdk.UA",
              "sdk.URI",
              "sdk.XD",
            ],
            function (a, b, c, d, e, f) {
              var g = {
                skin: "string",
                font: "string",
                width: "string",
                height: "px",
                ref: "string",
                lazy: "bool",
                color_scheme: "string",
              };
              function h(a, b, c) {
                (b || b === 0) && (b === "100%" ? (a.style.width = "100%") : (a.style.width = b + "px")),
                  (c || c === 0) && (a.style.height = c + "px");
              }
              function i(a) {
                return function (c) {
                  c = { width: c.width, height: c.height, pluginID: a };
                  b("sdk.Event").fire("xfbml.resize", c);
                };
              }
              var j = {
                string: function (a) {
                  return a;
                },
                bool: function (a) {
                  return a ? /^(?:true|1|yes|on)$/i.test(a) : void 0;
                },
                url: function (a) {
                  return b("resolveURI")(a);
                },
                url_maybe: function (a) {
                  return a ? b("resolveURI")(a) : a;
                },
                hostname: function (a) {
                  return a || window.location.hostname;
                },
                px: function (a) {
                  return /^(\d+)(?:px)?$/.test(a) ? parseInt(RegExp.$1, 10) : void 0;
                },
                text: function (a) {
                  return a;
                },
              };
              function k(a, b) {
                a =
                  a[b] ||
                  a[b.replace(/_/g, "-")] ||
                  a[b.replace(/_/g, "")] ||
                  a["data-" + b] ||
                  a["data-" + b.replace(/_/g, "-")] ||
                  a["data-" + b.replace(/_/g, "")] ||
                  void 0;
                return a;
              }
              function l(a, b, c, d) {
                ES(ES("Object", "keys", !1, a), "forEach", !0, function (e) {
                  a[e] == "text" &&
                    !c[e] &&
                    ((c[e] = b.textContent || b.innerText || ""), b.setAttribute(e, c[e])),
                    (d[e] = j[a[e]](k(c, e)));
                });
              }
              function m(a) {
                return a === "100%" ? "100%" : a || a === "0" || a === 0 ? parseInt(a, 10) : void 0;
              }
              function n(a) {
                a && h(a, 0, 0);
              }
              var o = b("Type").extend(
                {
                  constructor: function (a, c, d, e) {
                    var f = this;
                    this.parent();
                    d = d.replace(/-/g, "_");
                    var j = k(e, "plugin_id");
                    this.subscribe("xd.resize", i(j));
                    this.subscribe("xd.resize.flow", i(j));
                    this.subscribe("xd.resize.flow", function (a) {
                      ES("Object", "assign", !1, f._iframeOptions.root.style, {
                        verticalAlign: "bottom",
                        overflow: "",
                      }),
                        h(f._iframeOptions.root, m(a.width), m(a.height)),
                        f.updateLift(),
                        clearTimeout(f._timeoutID);
                    });
                    this.subscribe("xd.resize", function (a) {
                      ES("Object", "assign", !1, f._iframeOptions.root.style, {
                        verticalAlign: "bottom",
                        overflow: "",
                      }),
                        h(f._iframeOptions.root, m(a.width), m(a.height)),
                        h(f._iframe, m(a.width), m(a.height)),
                        (f._isIframeResized = !0),
                        f.updateLift(),
                        clearTimeout(f._timeoutID);
                    });
                    this.subscribe("xd.resize.iframe", function (a) {
                      h(f._iframe, m(a.width), m(a.height)),
                        (f._isIframeResized = !0),
                        f.updateLift(),
                        clearTimeout(f._timeoutID);
                    });
                    this.subscribe("xd.sdk_event", function (c) {
                      var d = ES("JSON", "parse", !1, c.data);
                      d.pluginID = j;
                      b("sdk.Event").fire(c.event, d, a);
                    });
                    var o = b("UrlMap").resolve("www") + "/plugins/" + d + ".php?",
                      p = {};
                    l(this.getParams(), a, e, p);
                    l(g, a, e, p);
                    ES("Object", "assign", !1, p, {
                      app_id: b("sdk.Runtime").getClientID(),
                      locale: b("sdk.Runtime").getLocale(),
                      sdk: "joey",
                      kid_directed_site: b("sdk.Runtime").getKidDirectedSite(),
                      channel: b("sdk.XD").handler(
                        function (a) {
                          return f.inform("xd." + a.type, a);
                        },
                        "parent.parent",
                        !0
                      ),
                    });
                    this.shouldIgnoreWidth() && (p.width = void 0);
                    p.container_width = a.offsetWidth;
                    b("sdk.DOM").addCss(a, "fb_iframe_widget");
                    var q = b("guid")();
                    this.subscribe("xd.verify", function (a) {
                      b("sdk.XD").sendToFacebook(q, {
                        method: "xd/verify",
                        params: ES("JSON", "stringify", !1, a.token),
                      });
                    });
                    this.subscribe("xd.refreshLoginStatus", function () {
                      b("sdk.Auth").removeLogoutState(),
                        b("sdk.Auth").getLoginStatus(ES(f.inform, "bind", !0, f, "login.status"), !0);
                    });
                    e = document.createElement("span");
                    ES("Object", "assign", !1, e.style, {
                      verticalAlign: "top",
                      width: "0px",
                      height: "0px",
                      overflow: "hidden",
                    });
                    this._element = a;
                    this._ns = c;
                    this._tag = d;
                    this._params = p;
                    this._config = this.getConfig();
                    this._iframeOptions = {
                      root: e,
                      url: o + b("QueryString").encode(p),
                      name: q,
                      width: this._config.mobile_fullsize && b("sdk.UA").mobile() ? void 0 : p.width || 1e3,
                      height: p.height || 1e3,
                      style: { border: "none", visibility: "hidden" },
                      title: this._ns + ":" + this._tag + " Facebook Social Plugin",
                      testid: this._ns + ":" + this._tag + " Facebook Social Plugin",
                      onload: function () {
                        return f.inform("render");
                      },
                      onerror: function () {
                        return n(f._iframe);
                      },
                      lazy: p.lazy,
                    };
                    this.isFluid() &&
                      p.width !== "auto" &&
                      (b("sdk.DOM").addCss(this._element, "fb_iframe_widget_fluid_desktop"),
                      !p.width &&
                        this._config.full_width &&
                        ((this._element.style.width = "100%"),
                        (this._iframeOptions.root.style.width = "100%"),
                        (this._iframeOptions.style.width = "100%"),
                        (this._params.container_width = this._element.offsetWidth),
                        (this._iframeOptions.url = o + b("QueryString").encode(this._params))));
                  },
                  shouldIgnoreWidth: function () {
                    return b("sdk.UA").mobile() && this.getConfig().mobile_fullsize;
                  },
                  useInlineHeightForMobile: function () {
                    return !0;
                  },
                  process: function () {
                    var a = this;
                    if (b("sdk.Runtime").getIsVersioned()) {
                      b("sdk.PlatformVersioning").assertVersionIsSet();
                      var c = new (b("sdk.URI"))(this._iframeOptions.url);
                      this._iframeOptions.url = c
                        .setPath("/" + b("sdk.Runtime").getVersion() + c.getPath())
                        .toString();
                    }
                    c = ES("Object", "assign", !1, {}, this._params);
                    delete c.channel;
                    var d = b("QueryString").encode(c);
                    if (this._element.getAttribute("fb-iframe-plugin-query") == d) {
                      b("Log").info("Skipping render: %s:%s %s", this._ns, this._tag, d);
                      this.inform("render");
                      return;
                    }
                    this._element.setAttribute("fb-iframe-plugin-query", d);
                    this.subscribe("render", function () {
                      b("sdk.Event").fire("iframeplugin:onload"),
                        (a._iframe.style.visibility = "visible"),
                        a._isIframeResized || n(a._iframe);
                    });
                    while (this._element.firstChild) this._element.removeChild(this._element.firstChild);
                    this._element.appendChild(this._iframeOptions.root);
                    var e = b("sdk.UA").mobile() ? 120 : 45;
                    this._timeoutID = setTimeout(function () {
                      n(a._iframe), b("Log").warn("%s:%s failed to resize in %ss", a._ns, a._tag, e);
                    }, e * 1e3);
                    this._iframe = b("sdk.createIframe")(this._iframeOptions);
                    b("sdk.Event").fire("iframeplugin:create");
                    if (b("sdk.UA").mobile() || c.width === "auto") {
                      this.useInlineHeightForMobile() &&
                        b("sdk.DOM").addCss(this._element, "fb_iframe_widget_fluid");
                      if (!this._iframeOptions.width) {
                        ES("Object", "assign", !1, this._element.style, {
                          display: "block",
                          width: "100%",
                          height: "auto",
                        });
                        ES("Object", "assign", !1, this._iframeOptions.root.style, {
                          width: "100%",
                          height: "auto",
                        });
                        d = { height: "auto", position: "static", width: "100%" };
                        (b("sdk.UA").iphone() || b("sdk.UA").ipad()) &&
                          ES("Object", "assign", !1, d, { width: "220px", "min-width": "100%" });
                        ES("Object", "assign", !1, this._iframe.style, d);
                      }
                    }
                  },
                  getConfig: function () {
                    return {};
                  },
                  isFluid: function () {
                    var a = this.getConfig();
                    return a.fluid;
                  },
                  updateLift: function () {
                    var a =
                      this._iframe.style.width === this._iframeOptions.root.style.width &&
                      this._iframe.style.height === this._iframeOptions.root.style.height;
                    b("sdk.DOM")[a ? "removeCss" : "addCss"](this._iframe, "fb_iframe_widget_lift");
                  },
                },
                b("ObservableMixin")
              );
              o.getVal = k;
              o.getBaseParams = function () {
                return g;
              };
              o.withParams = function (a, b) {
                return o.extend({
                  getParams: function () {
                    return a;
                  },
                  getConfig: function () {
                    return b ? b : {};
                  },
                });
              };
              e.exports = o;
            },
            null
          );
          __d(
            "PluginConfig",
            ["sdk.feature"],
            function (a, b, c, d, e, f) {
              a = {
                comment_embed: { mobile_fullsize: !0 },
                messengerpreconfirmation: { mobile_fullsize: !0 },
                messengeraccountconfirmation: { mobile_fullsize: !0 },
                messengerbusinesslink: { mobile_fullsize: !0 },
                messengertoggle: { mobile_fullsize: !0 },
                messengermessageus: { mobile_fullsize: !0 },
                post: { fluid: b("sdk.feature")("fluid_embed", !1), mobile_fullsize: !0 },
                send_to_messenger: { mobile_fullsize: !0 },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "PluginAttrTypes",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              a = { string: "string", bool: "bool", url: "url" };
              e.exports = a;
            },
            null
          );
          __d(
            "PluginTags",
            ["PluginAttrTypes"],
            function (a, b, c, d, e, f) {
              var g = {
                  comment_embed: { href: (a = b("PluginAttrTypes")).url, include_parent: a.bool },
                  composer: { action_type: a.string, action_properties: a.string },
                  create_event_button: {},
                  group: {
                    href: a.url,
                    show_social_context: a.bool,
                    show_group_info: a.bool,
                    show_metadata: a.bool,
                  },
                  like: {
                    href: a.url,
                    layout: a.string,
                    show_faces: a.bool,
                    share: a.bool,
                    action: a.string,
                    send: a.bool,
                    size: a.string,
                  },
                  like_box: {
                    href: a.string,
                    show_faces: a.bool,
                    header: a.bool,
                    stream: a.bool,
                    force_wall: a.bool,
                    show_border: a.bool,
                    id: a.string,
                    connections: a.string,
                    profile_id: a.string,
                    name: a.string,
                  },
                  page: {
                    href: a.string,
                    hide_cta: a.bool,
                    hide_cover: a.bool,
                    small_header: a.bool,
                    adapt_container_width: a.bool,
                    show_facepile: a.bool,
                    show_posts: a.bool,
                    tabs: a.string,
                  },
                  messenger_checkbox: {
                    messenger_app_id: a.string,
                    page_id: a.string,
                    pixel_id: a.string,
                    prechecked: a.bool,
                    allow_login: a.bool,
                    size: a.string,
                    origin: a.string,
                    user_ref: a.string,
                    identity_match: a.string,
                    center_align: a.bool,
                  },
                  messengermessageus: {
                    messenger_app_id: a.string,
                    page_id: a.string,
                    color: a.string,
                    size: a.string,
                  },
                  send_to_messenger: {
                    messenger_app_id: a.string,
                    page_id: a.string,
                    color: a.string,
                    size: a.string,
                    enforce_login: a.bool,
                    identity_match: a.string,
                    origin: a.string,
                    cta_text: a.string,
                  },
                  page_events: { href: a.url },
                  post: { href: a.url, show_text: a.bool },
                  profile_pic: {
                    uid: a.string,
                    linked: a.bool,
                    href: a.string,
                    size: a.string,
                    facebook_logo: a.bool,
                  },
                  send_to_mobile: { max_rows: a.string, show_faces: a.bool, size: a.string },
                },
                h = { fan: "like_box", likebox: "like_box" };
              ES(ES("Object", "keys", !1, h), "forEach", !0, function (a) {
                g[a] = g[h[a]];
              });
              e.exports = g;
            },
            null
          );
          __d(
            "sdk.XFBML.Comments",
            [
              "IframePlugin",
              "QueryString",
              "UrlMap",
              "sdk.DOM",
              "sdk.Event",
              "sdk.Runtime",
              "sdk.UA",
              "sdk.URI",
            ],
            function (a, b, c, d, e, f) {
              var g = 320,
                h = ES(
                  "Object",
                  "assign",
                  !1,
                  {
                    numposts: "string",
                    href: "url",
                    permalink: "bool",
                    order_by: "string",
                    mobile: "bool",
                    version: "string",
                    hide_post_profile: "bool",
                    limit: "string",
                    offset: "string",
                    view: "string",
                    fb_comment_id: "string",
                    from_mod_tool: "bool",
                    migrated: "string",
                    xid: "string",
                    title: "string",
                    url: "string",
                    quiet: "string",
                    reverse: "string",
                    simple: "string",
                    css: "string",
                    notify: "string",
                    count: "bool",
                  },
                  b("IframePlugin").getBaseParams()
                );
              function i(a, c) {
                ES(ES("Object", "keys", !1, h), "forEach", !0, function (d) {
                  var e = b("sdk.DOM").getAttr(a, d);
                  e !== null && (c[d] = e);
                });
                ES(ES("Object", "keys", !1, c), "forEach", !0, function (a) {
                  ES(a, "startsWith", !0, "data-") && delete c[a];
                });
                b("sdk.UA").mobile() && c.mobile !== !1 && (c.mobile = !0);
                c.skin || (c.skin = c.colorscheme);
                if (!c.href) {
                  c.title = c.title || document.title;
                  c.url = c.url || document.URL;
                  if (!c.xid) {
                    var d = ES(document.URL, "indexOf", !0, "#");
                    d > 0
                      ? (c.xid = encodeURIComponent(document.URL.substring(0, d)))
                      : (c.xid = encodeURIComponent(document.URL));
                  }
                  c.migrated &&
                    (c.href =
                      b("UrlMap").resolve("www") +
                      "/plugins/comments_v1.php?app_id=" +
                      b("sdk.Runtime").getClientID() +
                      "&xid=" +
                      encodeURIComponent(c.xid) +
                      "&url=" +
                      encodeURIComponent(c.url));
                } else {
                  d = c.fb_comment_id;
                  d ||
                    ((d = b("QueryString").decode(
                      document.URL.substring(ES(document.URL, "indexOf", !0, "?") + 1)
                    ).fb_comment_id),
                    d && ES(d, "indexOf", !0, "#") > 0 && (d = d.substring(0, ES(d, "indexOf", !0, "#"))));
                  d && (c.fb_comment_id = d);
                }
                c.version || (c.version = b("sdk.Runtime").getVersion());
                c.permalink ||
                  ((c.width =
                    c.mobile || c.width === "auto" || c.width === "100%"
                      ? ""
                      : c.width
                      ? Math.max(c.width, g)
                      : 550),
                  (c.height = 100));
                if (c.href != null) {
                  d = new (b("sdk.URI"))(c.href);
                  d.getProtocol() || (c.href = d.setProtocol("http").toString());
                }
                return c;
              }
              a = b("IframePlugin").extend({
                constructor: function (a, c, d, e) {
                  (e = i(a, e)),
                    this.parent(a, c, d, e),
                    this.subscribe("xd.sdk_event", function (a) {
                      b("sdk.Event").fire(a.event, ES("JSON", "parse", !1, a.data));
                    });
                },
                getConfig: function () {
                  return { fluid: !0, full_width: !0 };
                },
                getParams: function () {
                  return h;
                },
              });
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.XFBML.CommentsCount",
            ["sdk.DOM", "sdk.XFBML.Comments", "sprintf"],
            function (a, b, c, d, e, f) {
              a = b("sdk.XFBML.Comments").extend({
                constructor: function (a, c, d, e) {
                  b("sdk.DOM").addCss(a, "fb_comments_count_zero"),
                    (e.count = 1),
                    this.parent(a, c, "comments", e),
                    this.subscribe("xd.comment_count", function (c) {
                      c = ES("JSON", "parse", !1, c.data);
                      b("sdk.DOM").html(
                        a,
                        b("sprintf")('<span class="fb_comments_count">%s</span>', c.count)
                      );
                      c.count > 0 && b("sdk.DOM").removeCss(a, "fb_comments_count_zero");
                      b("sdk.DOM").removeCss(a, "fb_iframe_widget");
                    });
                },
              });
              e.exports = a;
            },
            null
          );
          __d(
            "safeEval",
            [],
            function (a, b, c, d, e, f) {
              function a(a, b) {
                if (a === null || typeof a === "undefined") return;
                if (typeof a !== "string") return a;
                return /^\w+$/.test(a) && typeof window[a] === "function"
                  ? window[a].apply(null, b || [])
                  : Function('return eval("' + a.replace(/\"/g, '\\"') + '");').apply(null, b || []);
              }
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.XFBML.LoginButton",
            [
              "IframePlugin",
              "Log",
              "guid",
              "safeEval",
              "sdk.Auth",
              "sdk.Dialog",
              "sdk.ErrorHandling",
              "sdk.feature",
              "sdk.getContextType",
              "sdk.Impressions",
              "sdk.Runtime",
              "sdk.Scribe",
              "sdk.ui",
              "sdk.UIServer",
              "sdk.XD",
            ],
            function (a, b, c, d, e, f) {
              var g = b("sdk.feature")("https_only_learn_more", "");
              function h(a, c, d) {
                a &&
                  (typeof a === "string"
                    ? b("sdk.ErrorHandling").unguard(b("safeEval"))(a, d)
                    : a.apply &&
                      b("sdk.ErrorHandling")
                        .unguard(a)
                        .apply(c, d || []));
              }
              function i(a, c, d) {
                a.id = b("guid")();
                a.plugin_prepare = !0;
                a.origin = b("sdk.getContextType")();
                a.domain = location.hostname;
                a.fallback_redirect_uri = document.location.href;
                var e = b("sdk.feature")("e2e_tracking", !0);
                e && (a.e2e = {});
                e = function (a) {
                  f != null &&
                    b("sdk.XD").sendToFacebook(c, {
                      method: "loginComplete",
                      params: ES("JSON", "stringify", !1, {
                        frame_name: f.id,
                        status: b("sdk.Runtime").getLoginStatus(),
                      }),
                    }),
                    d(a);
                };
                var f = b("sdk.UIServer").prepareCall(a, e);
                f != null &&
                  ((f.dims = {}),
                  (f.dims.screenX = window.screenX),
                  (f.dims.screenY = window.screenY),
                  (f.dims.outerWidth = window.outerWidth),
                  (f.dims.outerHeight = window.outerHeight),
                  (f.dims.screenWidth = window.screen.width));
                b("sdk.XD").sendToFacebook(c, {
                  method: "loginButtonStateInit",
                  params: ES("JSON", "stringify", !1, { call: f }),
                });
              }
              a = b("IframePlugin").extend({
                constructor: function (a, c, d, e) {
                  if (location.protocol !== "https:") {
                    var f =
                      "The Login Button plugin no longer works on http pages. Please update your site to use https for Facebook Login. %s";
                    b("Log").log("error", -1, f, g);
                    b("sdk.feature")("https_only_scribe_logging", !0) &&
                      b("sdk.Scribe").log("jssdk_error", {
                        appId: b("sdk.Runtime").getClientID(),
                        error: "HttpsOnly",
                        extra: { message: "LoginButton" },
                      });
                  }
                  this.parent(a, c, d, e);
                  var j = b("IframePlugin").getVal(e, "on_login"),
                    k = null,
                    l = this._iframeOptions.name;
                  j &&
                    ((k = function (a) {
                      if (a.error_code) {
                        b("Log").debug(
                          "Plugin Return Error (%s): %s",
                          a.error_code,
                          a.error_message || a.error_description
                        );
                        return;
                      }
                      h(j, null, [a]);
                    }),
                    this.subscribe("login.status", k));
                  var m = function (a) {
                    h(k, null, [a]),
                      b("sdk.XD").sendToFacebook(l, {
                        method: "loginReload",
                        params: ES("JSON", "stringify", !1, a),
                      });
                  };
                  this.subscribe("xd.login_button_dialog_open", function (a) {
                    b("sdk.ui")(ES("JSON", "parse", !1, a.params), function (a) {
                      b("sdk.XD").sendToFacebook(l, { method: "loginComplete", params: "{}" }), m(a);
                    });
                  });
                  this.subscribe("xd.login_button_prepare_call", function (a) {
                    var c = ES("JSON", "parse", !1, a.params),
                      d = a.params;
                    i(c, l, m);
                    b("sdk.Auth").subscribe("status.change", function (a) {
                      var c = ES("JSON", "parse", !1, d);
                      c.logger_id = b("guid")();
                      a.status !== "connected" && i(c, l, m);
                    });
                  });
                  this.subscribe("xd.login_button_click", function (a) {
                    var c = ES("JSON", "parse", !1, a.params);
                    if (c.popup) {
                      if (b("sdk.feature")("e2e_tracking", !0)) {
                        a = b("sdk.Dialog").get(c.call.id);
                        a.subscribe("e2e:end", function (a) {
                          (a.method = c.call.params.method),
                            (a.display = c.call.params.display),
                            b("Log").debug("e2e: %s", ES("JSON", "stringify", !1, a)),
                            b("sdk.Impressions").log(114, { payload: a });
                        });
                      }
                    } else
                      b("sdk.feature")("popup_blocker_scribe_logging", !0) &&
                        b("sdk.Scribe").log("jssdk_error", {
                          appId: b("sdk.Runtime").getClientID(),
                          error: "POPUP_MAYBE_BLOCKED_NEW",
                          extra: { call: c.call.name },
                        });
                  });
                  var n = function () {
                    h(k, null, [
                      {
                        status: b("sdk.Runtime").getLoginStatus(),
                        authResponse: b("sdk.Auth").getAuthResponse(),
                      },
                    ]);
                  };
                  this.subscribe("xd.login_button_connected", n);
                  this.subscribe("xd.login_button_popup_closed", function () {
                    b("sdk.Auth").getLoginStatus(n, !0);
                  });
                },
                shouldIgnoreWidth: function () {
                  return !1;
                },
                getParams: function () {
                  return {
                    scope: "string",
                    asset_scope: "string",
                    perms: "string",
                    size: "string",
                    login_text: "text",
                    show_faces: "bool",
                    max_rows: "string",
                    show_login_face: "bool",
                    show_login_numbers: "bool",
                    registration_url: "url_maybe",
                    auto_logout_link: "bool",
                    one_click: "bool",
                    show_banner: "bool",
                    auth_type: "string",
                    default_audience: "string",
                    use_continue_as: "bool",
                    layout: "string",
                    button_type: "string",
                    width: "px",
                    height: "px",
                  };
                },
              });
              e.exports = a;
            },
            null
          );
          __d(
            "UnicodeUtils",
            ["invariant"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h = 55296,
                i = 56319,
                j = 56320,
                k = 57343,
                l = /[\uD800-\uDFFF]/;
              function m(a) {
                return h <= a && a <= k;
              }
              function a(a, b) {
                (0 <= b && b < a.length) || g(0, 1346, b, a.length);
                if (b + 1 === a.length) return !1;
                var c = a.charCodeAt(b);
                a = a.charCodeAt(b + 1);
                return h <= c && c <= i && j <= a && a <= k;
              }
              function n(a) {
                return l.test(a);
              }
              function o(a, b) {
                return 1 + m(a.charCodeAt(b));
              }
              function b(a) {
                if (!n(a)) return a.length;
                var b = 0;
                for (var c = 0; c < a.length; c += o(a, c)) b++;
                return b;
              }
              function p(a, b, c) {
                var d = b || 0;
                c = c === void 0 ? Infinity : c || 0;
                if (!n(a)) return a.substr(d, c);
                var e = a.length;
                if (e <= 0 || d > e || c <= 0) return "";
                var f = 0;
                if (d > 0) {
                  for (; d > 0 && f < e; d--) f += o(a, f);
                  if (f >= e) return "";
                } else if (b < 0) {
                  for (f = e; d < 0 && 0 < f; d++) f -= o(a, f - 1);
                  f < 0 && (f = 0);
                }
                b = e;
                if (c < e) for (b = f; c > 0 && b < e; c--) b += o(a, b);
                return a.substring(f, b);
              }
              function c(a, b, c) {
                b = b || 0;
                c = c === void 0 ? Infinity : c || 0;
                b < 0 && (b = 0);
                c < 0 && (c = 0);
                var d = Math.abs(c - b);
                b = b < c ? b : c;
                return p(a, b, d);
              }
              function d(a) {
                var b = [];
                for (var c = 0; c < a.length; c += o(a, c)) b.push(a.codePointAt(c));
                return b;
              }
              f = {
                getCodePoints: d,
                getUTF16Length: o,
                hasSurrogateUnit: n,
                isCodeUnitInSurrogateRange: m,
                isSurrogatePair: a,
                strlen: b,
                substring: c,
                substr: p,
              };
              e.exports = f;
            },
            null
          );
          __d(
            "isNode",
            [],
            function (a, b, c, d, e, f) {
              function a(a) {
                var b;
                b = a != null ? ((b = a.ownerDocument) != null ? b : a) : document;
                b = (b = b.defaultView) != null ? b : window;
                return !!(
                  a != null &&
                  (typeof b.Node === "function"
                    ? a instanceof b.Node
                    : typeof a === "object" &&
                      typeof a.nodeType === "number" &&
                      typeof a.nodeName === "string")
                );
              }
              e.exports = a;
            },
            null
          );
          __d(
            "isTextNode",
            ["isNode"],
            function (a, b, c, d, e, f) {
              function a(a) {
                return b("isNode")(a) && a.nodeType == 3;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "containsNode",
            ["isTextNode"],
            function (a, b, c, d, e, f) {
              function g(a, c) {
                if (!a || !c) return !1;
                else if (a === c) return !0;
                else if (b("isTextNode")(a)) return !1;
                else if (b("isTextNode")(c)) return g(a, c.parentNode);
                else if ("contains" in a) return ES(a, "contains", !0, c);
                else if (a.compareDocumentPosition) return !!(a.compareDocumentPosition(c) & 16);
                else return !1;
              }
              e.exports = g;
            },
            null
          );
          __d(
            "sdk.XFBML.Quote",
            [
              "DOMEventListener",
              "IframePlugin",
              "UnicodeUtils",
              "containsNode",
              "sdk.DOM",
              "sdk.feature",
              "sdk.UA",
              "sdk.XD",
            ],
            function (a, b, c, d, e, f) {
              "use strict";
              var g,
                h = "fb-quotable",
                i = 155,
                j = 70,
                k = "",
                l = null,
                m = [],
                n = !1,
                o = null,
                p = b("sdk.UA").mobile();
              function q(a) {
                a = a.getRangeAt(0);
                a = a.startContainer;
                return a.nodeType === 3 ? a.parentNode : a;
              }
              function r(a) {
                if (!document.getSelection || p) return;
                a = document.getSelection();
                if (a.rangeCount === 0) {
                  t();
                  return;
                }
                var c = m.length;
                t();
                if (c) {
                  var d = !1;
                  for (var e = 0; e < c; e++)
                    if (b("containsNode")(m[e], a.focusNode)) {
                      d = !0;
                      break;
                    }
                  if (!d) return;
                }
                k = a.toString();
                if (k === "") {
                  t();
                  return;
                }
                k = ES(k.toString().replace(/\s+/g, " "), "trim", !0);
                c = Number(b("sdk.feature")("sharequotelimit", 500));
                (g || (g = b("UnicodeUtils"))).strlen(k) > c
                  ? (k = (g || (g = b("UnicodeUtils"))).substr(k, 0, c - 3) + "...")
                  : (k = (g || (g = b("UnicodeUtils"))).substr(k, 0, c));
                if (!n && o) {
                  q(a).appendChild(o);
                  e = s(a);
                  o.style.left = e.x + "px";
                  o.style.top = e.y + "px";
                }
              }
              function s(a) {
                var b = o && o.offsetWidth,
                  c = b ? o.offsetHeight : j;
                b = b ? o.offsetWidth : i;
                a = a.getRangeAt(0);
                var d = document.createElement("span"),
                  e = document.createElement("span"),
                  f = document.createRange();
                f.setStart(a.startContainer, a.startOffset);
                f.insertNode(d);
                f = document.createRange();
                f.setStart(a.endContainer, a.endOffset);
                f.insertNode(e);
                a = d.offsetTop - c;
                f = d.offsetLeft + (e.offsetLeft - d.offsetLeft) / 2 - b / 2;
                d.parentNode.removeChild(d);
                e.parentNode.removeChild(e);
                return { x: f, y: a };
              }
              function t() {
                (k = ""), !n && o && (o.style.left = "-9999px");
              }
              a = b("IframePlugin").extend({
                constructor: function (a, c, d, e) {
                  var f = this;
                  if (l) return l;
                  this.parent(a, c, d, e);
                  n = b("sdk.DOM").getAttr(a, "layout") === "button";
                  o = a;
                  o.style.position = "absolute";
                  o.style.display = "";
                  b("DOMEventListener").add(document, "keyup", r);
                  b("DOMEventListener").add(document, "mouseup", r);
                  this.subscribe("xd.getTextSelection", function () {
                    b("sdk.XD").sendToFacebook(f._iframeOptions.name, {
                      method: "setTextSelection",
                      params: ES("JSON", "stringify", !1, { text: k }),
                    }),
                      t();
                  });
                  m = ES(ES("Array", "from", !1, document.getElementsByTagName("*")), "filter", !0, function (
                    a
                  ) {
                    return a.nodeName.toLowerCase() === "article" || b("sdk.DOM").containsCss(a, h);
                  });
                  t();
                  l = this;
                  return l;
                },
                getParams: function () {
                  return { href: "url", layout: "string" };
                },
              });
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.XFBML.Save",
            [
              "IframePlugin",
              "UrlMap",
              "sdk.Content",
              "sdk.createIframe",
              "sdk.DialogUtils",
              "sdk.DOM",
              "sdk.Event",
              "sdk.Runtime",
              "sdk.UA",
              "sdk.XD",
            ],
            function (a, b, c, d, e, f) {
              "use strict";
              var g;
              a = b("IframePlugin").extend({
                constructor: function (a, c, d, e) {
                  var f = this;
                  this.parent(a, c, d, e);
                  var h = b("sdk.UA").mobile();
                  this.subscribe("xd.savePluginGetBlankIframe", function (a) {
                    var c,
                      d = function (a) {
                        a && b("sdk.DOM").removeCss(a, "fb_invisible");
                      },
                      e = function (a) {
                        a && b("sdk.DOM").addCss(a, "fb_invisible");
                      };
                    h &&
                      ((c = b("sdk.DialogUtils").setupNewDarkOverlay()),
                      e(c),
                      b("sdk.Content").append(c),
                      b("sdk.DialogUtils").addDoubleClickAction(
                        c,
                        function () {
                          return ES(j, "forEach", !0, e);
                        },
                        5e3
                      ));
                    var i = f.setupNewIframeDialog(ES("JSON", "parse", !1, a.data), a.fromIframe);
                    e(i);
                    b("sdk.Content").append(i);
                    var j = [i, c],
                      k = function () {
                        ES(j, "forEach", !0, e),
                          b("sdk.DialogUtils").onDialogHideCleanup(h),
                          window.clearInterval(g);
                      },
                      l;
                    f.subscribe("xd.savePluginShowIframe", function () {
                      b("sdk.Event").fire("savePlugin:hideDialog"),
                        ES(j, "forEach", !0, d),
                        f.positionOnScreen(i, c),
                        !h && !l && (l = b("sdk.DialogUtils").addIdleDesktopAction(i, k, 7e3));
                    });
                    f.subscribe("xd.savePluginHideIframe", function () {
                      return k();
                    });
                    b("sdk.Event").subscribe("savePlugin:hideDialog", function () {
                      return k();
                    });
                    var m = window.setInterval(function () {
                      var b = document.getElementsByName(a.fromIframe);
                      b.length === 0 &&
                        (window.clearInterval(m),
                        k(),
                        ES(j, "forEach", !0, function (a) {
                          a && a.parentNode.removeChild(a);
                        }));
                    }, 500);
                  });
                },
                positionOnScreen: function (a, c) {
                  var d = b("sdk.UA").mobile();
                  if (d) {
                    var e = function (a, c) {
                      c != null && b("sdk.DialogUtils").setDialogPositionToCenter(c, d),
                        b("sdk.DialogUtils").setDialogPositionToCenter(a, d);
                    };
                    e(a, c);
                    b("sdk.DialogUtils").addMobileOrientationChangeAction(function (b) {
                      e(a, c);
                    });
                    g = window.setInterval(function () {
                      return e(a, c);
                    }, 100);
                  } else
                    b("sdk.DOM").setStyle(a, "position", "fixed"),
                      b("sdk.DOM").setStyle(a, "top", "20px"),
                      b("sdk.DOM").setStyle(a, "right", "20px");
                },
                getOverlayIFrameURL: function () {
                  return (
                    b("UrlMap").resolve("www") +
                    (b("sdk.Runtime").getIsVersioned() ? "/" + b("sdk.Runtime").getVersion() : "") +
                    "/plugins/save/overlay?app_id=" +
                    b("sdk.Runtime").getClientID()
                  );
                },
                setupNewIframeDialog: function (a, c) {
                  var d = this,
                    e = b("sdk.DialogUtils").setupNewDialog(),
                    f = function () {
                      b("sdk.XD").sendToFacebook(c, {
                        method: "saveOverlayIFrameAck",
                        params: ES("JSON", "stringify", !1, { name: "overlay_" + d._iframeOptions.name }),
                      });
                    };
                  b("sdk.createIframe")({
                    url: this.getOverlayIFrameURL(),
                    name: "overlay_" + this._iframeOptions.name,
                    root: e.contentRoot,
                    tabindex: -1,
                    onload: ES(f, "bind", !0, this),
                  });
                  b("sdk.DOM").addCss(e.contentRoot, "fb_dialog_iframe");
                  ES("Object", "assign", !1, e.dialogElement.style, a.style || {});
                  b("sdk.DOM").setStyle(e.dialogElement, "width", a.width + "px");
                  b("sdk.DOM").setStyle(e.dialogElement, "height", a.height + "px");
                  ES(a.classList, "forEach", !0, function (a) {
                    return b("sdk.DOM").addCss(e.dialogElement, a);
                  });
                  b("sdk.DOM").removeCss(e.dialogElement, "fb_dialog_advanced");
                  return e.dialogElement;
                },
                getParams: function () {
                  return { uri: "url", url_category: "string", size: "string" };
                },
              });
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.XFBML.ShareButton",
            ["IframePlugin"],
            function (a, b, c, d, e, f) {
              "use strict";
              a = b("IframePlugin").extend({
                constructor: function (a, b, c, d) {
                  this.parent(a, b, c, d);
                },
                getParams: function () {
                  return {
                    href: "url",
                    layout: "string",
                    mobile_iframe: "bool",
                    type: "string",
                    size: "string",
                  };
                },
              });
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.XFBML.Video",
            ["Assert", "IframePlugin", "ObservableMixin", "sdk.Event", "sdk.XD"],
            function (a, b, c, d, e, f) {
              var g = (function () {
                  "use strict";
                  function a(a) {
                    (this.$1 = a.isMuted),
                      (this.$2 = a.volume),
                      (this.$3 = a.timePosition),
                      (this.$4 = a.duration);
                  }
                  var b = a.prototype;
                  b.update = function (a) {
                    a.isMuted !== void 0 && (this.$1 = a.isMuted),
                      a.volume !== void 0 && (this.$2 = a.volume),
                      a.timePosition !== void 0 && (this.$3 = a.timePosition),
                      a.duration !== void 0 && (this.$4 = a.duration);
                  };
                  b.isMuted = function () {
                    return this.$1;
                  };
                  b.getVolume = function () {
                    return this.$1 ? 0 : this.$2;
                  };
                  b.getCurrentPosition = function () {
                    return this.$3;
                  };
                  b.getDuration = function () {
                    return this.$4;
                  };
                  return a;
                })(),
                h = (function () {
                  "use strict";
                  function a(a, b, c) {
                    (this.$1 = a), (this.$2 = b), (this.$3 = c);
                  }
                  var c = a.prototype;
                  c.play = function () {
                    b("sdk.XD").sendToFacebook(this.$1, {
                      method: "play",
                      params: ES("JSON", "stringify", !1, {}),
                    });
                  };
                  c.pause = function () {
                    b("sdk.XD").sendToFacebook(this.$1, {
                      method: "pause",
                      params: ES("JSON", "stringify", !1, {}),
                    });
                  };
                  c.seek = function (a) {
                    b("Assert").isNumber(a, "Invalid argument"),
                      b("sdk.XD").sendToFacebook(this.$1, {
                        method: "seek",
                        params: ES("JSON", "stringify", !1, { target: a }),
                      });
                  };
                  c.mute = function () {
                    b("sdk.XD").sendToFacebook(this.$1, {
                      method: "mute",
                      params: ES("JSON", "stringify", !1, {}),
                    });
                  };
                  c.unmute = function () {
                    b("sdk.XD").sendToFacebook(this.$1, {
                      method: "unmute",
                      params: ES("JSON", "stringify", !1, {}),
                    });
                  };
                  c.setVolume = function (a) {
                    b("Assert").isNumber(a, "Invalid argument"),
                      b("sdk.XD").sendToFacebook(this.$1, {
                        method: "setVolume",
                        params: ES("JSON", "stringify", !1, { volume: a }),
                      });
                  };
                  c.isMuted = function () {
                    return this.$3.isMuted();
                  };
                  c.getVolume = function () {
                    return this.$3.getVolume();
                  };
                  c.getCurrentPosition = function () {
                    return this.$3.getCurrentPosition();
                  };
                  c.getDuration = function () {
                    return this.$3.getDuration();
                  };
                  c.subscribe = function (a, c) {
                    var d = this;
                    b("Assert").isString(a, "Invalid argument");
                    b("Assert").isFunction(c, "Invalid argument");
                    this.$2.subscribe(a, c);
                    return {
                      release: function () {
                        d.$2.unsubscribe(a, c);
                      },
                    };
                  };
                  return a;
                })();
              a = b("IframePlugin").extend({
                constructor: function (a, c, d, e) {
                  this.parent(a, c, d, e),
                    (this._videoController = null),
                    (this._sharedObservable = null),
                    (this._sharedVideoCache = null),
                    this.subscribe("xd.onVideoAPIReady", function (a) {
                      (this._sharedObservable = new (b("ObservableMixin"))()),
                        (this._sharedVideoCache = new g(ES("JSON", "parse", !1, a.data))),
                        (this._videoController = new h(
                          this._iframeOptions.name,
                          this._sharedObservable,
                          this._sharedVideoCache
                        )),
                        b("sdk.Event").fire("xfbml.ready", {
                          type: "video",
                          id: e.id,
                          instance: this._videoController,
                        });
                    }),
                    this.subscribe("xd.stateChange", function (a) {
                      this._sharedObservable.inform(a.state);
                    }),
                    this.subscribe("xd.cachedStateUpdateRequest", function (a) {
                      this._sharedVideoCache.update(ES("JSON", "parse", !1, a.data));
                    });
                },
                getParams: function () {
                  return {
                    allowfullscreen: "bool",
                    autoplay: "bool",
                    controls: "bool",
                    href: "url",
                    show_captions: "bool",
                    show_text: "bool",
                  };
                },
                getConfig: function () {
                  return { fluid: !0, full_width: !0 };
                },
              });
              e.exports = a;
            },
            null
          );
          __d(
            "legacy:fb.xfbml.plugins",
            [
              "IframePlugin",
              "PluginConfig",
              "PluginTags",
              "XFBML",
              "sdk.feature",
              "sdk.XFBML.Comments",
              "sdk.XFBML.CommentsCount",
              "sdk.XFBML.LoginButton",
              "sdk.XFBML.Quote",
              "sdk.XFBML.Save",
              "sdk.XFBML.ShareButton",
              "sdk.XFBML.Video",
            ],
            function (a, b, c, d, e, f) {
              var g = {
                  comments: b("sdk.XFBML.Comments"),
                  comments_count: b("sdk.XFBML.CommentsCount"),
                  login_button: b("sdk.XFBML.LoginButton"),
                  quote: b("sdk.XFBML.Quote"),
                  save: b("sdk.XFBML.Save"),
                  share_button: b("sdk.XFBML.ShareButton"),
                  video: b("sdk.XFBML.Video"),
                },
                h = b("sdk.feature")("plugin_tags_blacklist", []);
              ES(ES("Object", "keys", !1, b("PluginTags")), "forEach", !0, function (a) {
                if (ES(h, "indexOf", !0, a) !== -1) return;
                b("XFBML").registerTag({
                  xmlns: "fb",
                  localName: a.replace(/_/g, "-"),
                  ctor: b("IframePlugin").withParams(b("PluginTags")[a], b("PluginConfig")[a]),
                });
              });
              ES(ES("Object", "keys", !1, g), "forEach", !0, function (a) {
                if (ES(h, "indexOf", !0, a) !== -1) return;
                b("XFBML").registerTag({ xmlns: "fb", localName: a.replace(/_/g, "-"), ctor: g[a] });
              });
            },
            3
          );
        }
      }.call(global));
    })(window.inDapIF ? parent.window : window, window);
} catch (e) {
  new Image().src =
    "https://www.facebook.com/" +
    "common/scribe_endpoint.php?c=jssdk_error&m=" +
    encodeURIComponent(
      '{"error":"LOAD", "extra": {"name":"' +
        e.name +
        '","line":"' +
        (e.lineNumber || e.line) +
        '","script":"' +
        (e.fileName || e.sourceURL || e.script) +
        '","stack":"' +
        (e.stackTrace || e.stack) +
        '","revision":"1002068558","namespace":"FB","message":"' +
        e.message +
        '"}}'
    );
}
