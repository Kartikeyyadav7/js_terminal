// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"j1F46":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "c9b2bbcd379dd93c";
"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hD4hw":[function(require,module,exports) {
var _xterm = require("xterm");
var _xtermCss = require("xterm/css/xterm.css");
var _socketIoClient = require("socket.io-client");
const serverAddress = "http://localhost:8080";
const term = new _xterm.Terminal();
const createTerminal = ()=>{
    term.open(document.getElementById("terminal"));
    term.options = {
        background: "#202B33",
        foreground: "#F5F8FA"
    };
    term.write("Hello");
    term.write(`\r\n$ `);
};
const connectToSocket = (serverAddress1)=>{
    return new Promise((res)=>{
        const socket = _socketIoClient.io(serverAddress1);
        res(socket);
    });
};
connectToSocket(serverAddress).then((socket)=>{
    socket.on("connect", ()=>{
        console.log("Id", socket.id);
        createTerminal();
        term.onData((data)=>socket.emit("input", data)
        );
        socket.on("output", (data)=>{
            // When there is data from PTY on server, print that on Terminal.
            term.write(data);
        });
    });
});

},{"xterm":"b0KFk","xterm/css/xterm.css":"7SVCt","socket.io-client":"7GwBM"}],"b0KFk":[function(require,module,exports) {
!function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var r = t();
        for(var i in r)("object" == typeof exports ? exports : e)[i] = r[i];
    }
}(self, function() {
    return (()=>{
        var e1 = {
            4567: function(e2, t2, r2) {
                var i2, n1 = this && this.__extends || (i2 = function(e3, t3) {
                    return i2 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i2(e3, t3);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i2(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                });
                Object.defineProperty(t2, "__esModule", {
                    value: !0
                }), t2.AccessibilityManager = void 0;
                var o1 = r2(9042), s1 = r2(6114), a1 = r2(9924), c = r2(3656), l = r2(844), h = r2(5596), u = r2(9631), f = function(e4) {
                    function t4(t, r) {
                        var i = e4.call(this) || this;
                        i._terminal = t, i._renderService = r, i._liveRegionLineCount = 0, i._charsToConsume = [], i._charsToAnnounce = "", i._accessibilityTreeRoot = document.createElement("div"), i._accessibilityTreeRoot.setAttribute("role", "document"), i._accessibilityTreeRoot.classList.add("xterm-accessibility"), i._accessibilityTreeRoot.tabIndex = 0, i._rowContainer = document.createElement("div"), i._rowContainer.setAttribute("role", "list"), i._rowContainer.classList.add("xterm-accessibility-tree"), i._rowElements = [];
                        for(var n = 0; n < i._terminal.rows; n++)i._rowElements[n] = i._createAccessibilityTreeNode(), i._rowContainer.appendChild(i._rowElements[n]);
                        if (i._topBoundaryFocusListener = function(e) {
                            return i._onBoundaryFocus(e, 0);
                        }, i._bottomBoundaryFocusListener = function(e) {
                            return i._onBoundaryFocus(e, 1);
                        }, i._rowElements[0].addEventListener("focus", i._topBoundaryFocusListener), i._rowElements[i._rowElements.length - 1].addEventListener("focus", i._bottomBoundaryFocusListener), i._refreshRowsDimensions(), i._accessibilityTreeRoot.appendChild(i._rowContainer), i._renderRowsDebouncer = new a1.TimeBasedDebouncer(i._renderRows.bind(i)), i._refreshRows(), i._liveRegion = document.createElement("div"), i._liveRegion.classList.add("live-region"), i._liveRegion.setAttribute("aria-live", "assertive"), i._accessibilityTreeRoot.appendChild(i._liveRegion), !i._terminal.element) throw new Error("Cannot enable accessibility before Terminal.open");
                        return i._terminal.element.insertAdjacentElement("afterbegin", i._accessibilityTreeRoot), i.register(i._renderRowsDebouncer), i.register(i._terminal.onResize(function(e) {
                            return i._onResize(e.rows);
                        })), i.register(i._terminal.onRender(function(e) {
                            return i._refreshRows(e.start, e.end);
                        })), i.register(i._terminal.onScroll(function() {
                            return i._refreshRows();
                        })), i.register(i._terminal.onA11yChar(function(e) {
                            return i._onChar(e);
                        })), i.register(i._terminal.onLineFeed(function() {
                            return i._onChar("\n");
                        })), i.register(i._terminal.onA11yTab(function(e) {
                            return i._onTab(e);
                        })), i.register(i._terminal.onKey(function(e) {
                            return i._onKey(e.key);
                        })), i.register(i._terminal.onBlur(function() {
                            return i._clearLiveRegion();
                        })), i.register(i._renderService.onDimensionsChange(function() {
                            return i._refreshRowsDimensions();
                        })), i._screenDprMonitor = new h.ScreenDprMonitor, i.register(i._screenDprMonitor), i._screenDprMonitor.setListener(function() {
                            return i._refreshRowsDimensions();
                        }), i.register((0, c.addDisposableDomListener)(window, "resize", function() {
                            return i._refreshRowsDimensions();
                        })), i;
                    }
                    return n1(t4, e4), t4.prototype.dispose = function() {
                        e4.prototype.dispose.call(this), (0, u.removeElementFromParent)(this._accessibilityTreeRoot), this._rowElements.length = 0;
                    }, t4.prototype._onBoundaryFocus = function(e, t) {
                        var r = e.target, i = this._rowElements[0 === t ? 1 : this._rowElements.length - 2];
                        if (r.getAttribute("aria-posinset") !== (0 === t ? "1" : "" + this._terminal.buffer.lines.length) && e.relatedTarget === i) {
                            var n, o;
                            if (0 === t ? (n = r, o = this._rowElements.pop(), this._rowContainer.removeChild(o)) : (n = this._rowElements.shift(), o = r, this._rowContainer.removeChild(n)), n.removeEventListener("focus", this._topBoundaryFocusListener), o.removeEventListener("focus", this._bottomBoundaryFocusListener), 0 === t) {
                                var s = this._createAccessibilityTreeNode();
                                this._rowElements.unshift(s), this._rowContainer.insertAdjacentElement("afterbegin", s);
                            } else s = this._createAccessibilityTreeNode(), this._rowElements.push(s), this._rowContainer.appendChild(s);
                            this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._terminal.scrollLines(0 === t ? -1 : 1), this._rowElements[0 === t ? 1 : this._rowElements.length - 2].focus(), e.preventDefault(), e.stopImmediatePropagation();
                        }
                    }, t4.prototype._onResize = function(e) {
                        this._rowElements[this._rowElements.length - 1].removeEventListener("focus", this._bottomBoundaryFocusListener);
                        for(var t = this._rowContainer.children.length; t < this._terminal.rows; t++)this._rowElements[t] = this._createAccessibilityTreeNode(), this._rowContainer.appendChild(this._rowElements[t]);
                        for(; this._rowElements.length > e;)this._rowContainer.removeChild(this._rowElements.pop());
                        this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._refreshRowsDimensions();
                    }, t4.prototype._createAccessibilityTreeNode = function() {
                        var e = document.createElement("div");
                        return e.setAttribute("role", "listitem"), e.tabIndex = -1, this._refreshRowDimensions(e), e;
                    }, t4.prototype._onTab = function(e) {
                        for(var t = 0; t < e; t++)this._onChar(" ");
                    }, t4.prototype._onChar = function(e) {
                        var t = this;
                        this._liveRegionLineCount < 21 && (this._charsToConsume.length > 0 ? this._charsToConsume.shift() !== e && (this._charsToAnnounce += e) : this._charsToAnnounce += e, "\n" === e && (this._liveRegionLineCount++, 21 === this._liveRegionLineCount && (this._liveRegion.textContent += o1.tooMuchOutput)), s1.isMac && this._liveRegion.textContent && this._liveRegion.textContent.length > 0 && !this._liveRegion.parentNode && setTimeout(function() {
                            t._accessibilityTreeRoot.appendChild(t._liveRegion);
                        }, 0));
                    }, t4.prototype._clearLiveRegion = function() {
                        this._liveRegion.textContent = "", this._liveRegionLineCount = 0, s1.isMac && (0, u.removeElementFromParent)(this._liveRegion);
                    }, t4.prototype._onKey = function(e) {
                        this._clearLiveRegion(), this._charsToConsume.push(e);
                    }, t4.prototype._refreshRows = function(e, t) {
                        this._renderRowsDebouncer.refresh(e, t, this._terminal.rows);
                    }, t4.prototype._renderRows = function(e, t) {
                        for(var r = this._terminal.buffer, i = r.lines.length.toString(), n = e; n <= t; n++){
                            var o = r.translateBufferLineToString(r.ydisp + n, !0), s = (r.ydisp + n + 1).toString(), a = this._rowElements[n];
                            a && (0 === o.length ? a.innerText = " " : a.textContent = o, a.setAttribute("aria-posinset", s), a.setAttribute("aria-setsize", i));
                        }
                        this._announceCharacters();
                    }, t4.prototype._refreshRowsDimensions = function() {
                        if (this._renderService.dimensions.actualCellHeight) {
                            this._rowElements.length !== this._terminal.rows && this._onResize(this._terminal.rows);
                            for(var e = 0; e < this._terminal.rows; e++)this._refreshRowDimensions(this._rowElements[e]);
                        }
                    }, t4.prototype._refreshRowDimensions = function(e) {
                        e.style.height = this._renderService.dimensions.actualCellHeight + "px";
                    }, t4.prototype._announceCharacters = function() {
                        0 !== this._charsToAnnounce.length && (this._liveRegion.textContent += this._charsToAnnounce, this._charsToAnnounce = "");
                    }, t4;
                }(l.Disposable);
                t2.AccessibilityManager = f;
            },
            3614: (e5, t5)=>{
                function r3(e) {
                    return e.replace(/\r?\n/g, "\r");
                }
                function i3(e, t) {
                    return t ? "[200~" + e + "[201~" : e;
                }
                function n2(e, t, n) {
                    e = i3(e = r3(e), n.decPrivateModes.bracketedPasteMode), n.triggerDataEvent(e, !0), t.value = "";
                }
                function o2(e, t, r) {
                    var i = r.getBoundingClientRect(), n = e.clientX - i.left - 10, o = e.clientY - i.top - 10;
                    t.style.width = "20px", t.style.height = "20px", t.style.left = n + "px", t.style.top = o + "px", t.style.zIndex = "1000", t.focus();
                }
                Object.defineProperty(t5, "__esModule", {
                    value: !0
                }), t5.rightClickHandler = t5.moveTextAreaUnderMouseCursor = t5.paste = t5.handlePasteEvent = t5.copyHandler = t5.bracketTextForPaste = t5.prepareTextForTerminal = void 0, t5.prepareTextForTerminal = r3, t5.bracketTextForPaste = i3, t5.copyHandler = function(e, t) {
                    e.clipboardData && e.clipboardData.setData("text/plain", t.selectionText), e.preventDefault();
                }, t5.handlePasteEvent = function(e, t, r) {
                    e.stopPropagation(), e.clipboardData && n2(e.clipboardData.getData("text/plain"), t, r);
                }, t5.paste = n2, t5.moveTextAreaUnderMouseCursor = o2, t5.rightClickHandler = function(e, t, r, i, n) {
                    o2(e, t, r), n && i.rightClickSelect(e), t.value = i.selectionText, t.select();
                };
            },
            4774: (e6, t6)=>{
                var r4, i4, n3, o3;
                function s2(e) {
                    var t = e.toString(16);
                    return t.length < 2 ? "0" + t : t;
                }
                function a2(e, t) {
                    return e < t ? (t + 0.05) / (e + 0.05) : (e + 0.05) / (t + 0.05);
                }
                Object.defineProperty(t6, "__esModule", {
                    value: !0
                }), t6.contrastRatio = t6.toPaddedHex = t6.rgba = t6.rgb = t6.css = t6.color = t6.channels = void 0, (function(e7) {
                    e7.toCss = function(e, t, r, i) {
                        return void 0 !== i ? "#" + s2(e) + s2(t) + s2(r) + s2(i) : "#" + s2(e) + s2(t) + s2(r);
                    }, e7.toRgba = function(e, t, r, i) {
                        return void 0 === i && (i = 255), (e << 24 | t << 16 | r << 8 | i) >>> 0;
                    };
                })(r4 = t6.channels || (t6.channels = {
                })), (i4 = t6.color || (t6.color = {
                })).blend = function(e, t) {
                    var i = (255 & t.rgba) / 255;
                    if (1 === i) return {
                        css: t.css,
                        rgba: t.rgba
                    };
                    var n = t.rgba >> 24 & 255, o = t.rgba >> 16 & 255, s = t.rgba >> 8 & 255, a = e.rgba >> 24 & 255, c = e.rgba >> 16 & 255, l = e.rgba >> 8 & 255, h = a + Math.round((n - a) * i), u = c + Math.round((o - c) * i), f = l + Math.round((s - l) * i);
                    return {
                        css: r4.toCss(h, u, f),
                        rgba: r4.toRgba(h, u, f)
                    };
                }, i4.isOpaque = function(e) {
                    return 255 == (255 & e.rgba);
                }, i4.ensureContrastRatio = function(e, t, r) {
                    var i = o3.ensureContrastRatio(e.rgba, t.rgba, r);
                    if (i) return o3.toColor(i >> 24 & 255, i >> 16 & 255, i >> 8 & 255);
                }, i4.opaque = function(e) {
                    var t = (255 | e.rgba) >>> 0, i = o3.toChannels(t), n = i[0], s = i[1], a = i[2];
                    return {
                        css: r4.toCss(n, s, a),
                        rgba: t
                    };
                }, i4.opacity = function(e, t) {
                    var i = Math.round(255 * t), n = o3.toChannels(e.rgba), s = n[0], a = n[1], c = n[2];
                    return {
                        css: r4.toCss(s, a, c, i),
                        rgba: r4.toRgba(s, a, c, i)
                    };
                }, i4.toColorRGB = function(e) {
                    return [
                        e.rgba >> 24 & 255,
                        e.rgba >> 16 & 255,
                        e.rgba >> 8 & 255
                    ];
                }, (t6.css || (t6.css = {
                })).toColor = function(e) {
                    switch(e.length){
                        case 7:
                            return {
                                css: e,
                                rgba: (parseInt(e.slice(1), 16) << 8 | 255) >>> 0
                            };
                        case 9:
                            return {
                                css: e,
                                rgba: parseInt(e.slice(1), 16) >>> 0
                            };
                    }
                    throw new Error("css.toColor: Unsupported css format");
                }, (function(e8) {
                    function t7(e, t, r) {
                        var i = e / 255, n = t / 255, o = r / 255;
                        return 0.2126 * (i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4)) + 0.7152 * (n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4)) + 0.0722 * (o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4));
                    }
                    e8.relativeLuminance = function(e) {
                        return t7(e >> 16 & 255, e >> 8 & 255, 255 & e);
                    }, e8.relativeLuminance2 = t7;
                })(n3 = t6.rgb || (t6.rgb = {
                })), (function(e9) {
                    function t8(e, t, r) {
                        for(var i = e >> 24 & 255, o = e >> 16 & 255, s = e >> 8 & 255, c = t >> 24 & 255, l = t >> 16 & 255, h = t >> 8 & 255, u = a2(n3.relativeLuminance2(c, h, l), n3.relativeLuminance2(i, o, s)); u < r && (c > 0 || l > 0 || h > 0);)c -= Math.max(0, Math.ceil(0.1 * c)), l -= Math.max(0, Math.ceil(0.1 * l)), h -= Math.max(0, Math.ceil(0.1 * h)), u = a2(n3.relativeLuminance2(c, h, l), n3.relativeLuminance2(i, o, s));
                        return (c << 24 | l << 16 | h << 8 | 255) >>> 0;
                    }
                    function i5(e, t, r) {
                        for(var i = e >> 24 & 255, o = e >> 16 & 255, s = e >> 8 & 255, c = t >> 24 & 255, l = t >> 16 & 255, h = t >> 8 & 255, u = a2(n3.relativeLuminance2(c, h, l), n3.relativeLuminance2(i, o, s)); u < r && (c < 255 || l < 255 || h < 255);)c = Math.min(255, c + Math.ceil(0.1 * (255 - c))), l = Math.min(255, l + Math.ceil(0.1 * (255 - l))), h = Math.min(255, h + Math.ceil(0.1 * (255 - h))), u = a2(n3.relativeLuminance2(c, h, l), n3.relativeLuminance2(i, o, s));
                        return (c << 24 | l << 16 | h << 8 | 255) >>> 0;
                    }
                    e9.ensureContrastRatio = function(e, r, o) {
                        var s = n3.relativeLuminance(e >> 8), c = n3.relativeLuminance(r >> 8);
                        if (a2(s, c) < o) return c < s ? t8(e, r, o) : i5(e, r, o);
                    }, e9.reduceLuminance = t8, e9.increaseLuminance = i5, e9.toChannels = function(e) {
                        return [
                            e >> 24 & 255,
                            e >> 16 & 255,
                            e >> 8 & 255,
                            255 & e
                        ];
                    }, e9.toColor = function(e, t, i) {
                        return {
                            css: r4.toCss(e, t, i),
                            rgba: r4.toRgba(e, t, i)
                        };
                    };
                })(o3 = t6.rgba || (t6.rgba = {
                })), t6.toPaddedHex = s2, t6.contrastRatio = a2;
            },
            7239: (e10, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ColorContrastCache = void 0;
                var r5 = function() {
                    function e() {
                        this._color = {
                        }, this._rgba = {
                        };
                    }
                    return e.prototype.clear = function() {
                        this._color = {
                        }, this._rgba = {
                        };
                    }, e.prototype.setCss = function(e, t, r) {
                        this._rgba[e] || (this._rgba[e] = {
                        }), this._rgba[e][t] = r;
                    }, e.prototype.getCss = function(e, t) {
                        return this._rgba[e] ? this._rgba[e][t] : void 0;
                    }, e.prototype.setColor = function(e, t, r) {
                        this._color[e] || (this._color[e] = {
                        }), this._color[e][t] = r;
                    }, e.prototype.getColor = function(e, t) {
                        return this._color[e] ? this._color[e][t] : void 0;
                    }, e;
                }();
                t.ColorContrastCache = r5;
            },
            5680: function(e11, t9, r6) {
                var i6 = this && this.__spreadArray || function(e, t, r) {
                    if (r || 2 === arguments.length) for(var i, n = 0, o = t.length; n < o; n++)!i && n in t || (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
                    return e.concat(i || Array.prototype.slice.call(t));
                };
                Object.defineProperty(t9, "__esModule", {
                    value: !0
                }), t9.ColorManager = t9.DEFAULT_ANSI_COLORS = void 0;
                var n4 = r6(4774), o4 = r6(7239), s3 = n4.css.toColor("#ffffff"), a3 = n4.css.toColor("#000000"), c1 = n4.css.toColor("#ffffff"), l1 = n4.css.toColor("#000000"), h1 = {
                    css: "rgba(255, 255, 255, 0.3)",
                    rgba: 4294967117
                };
                t9.DEFAULT_ANSI_COLORS = Object.freeze(function() {
                    for(var e = [
                        n4.css.toColor("#2e3436"),
                        n4.css.toColor("#cc0000"),
                        n4.css.toColor("#4e9a06"),
                        n4.css.toColor("#c4a000"),
                        n4.css.toColor("#3465a4"),
                        n4.css.toColor("#75507b"),
                        n4.css.toColor("#06989a"),
                        n4.css.toColor("#d3d7cf"),
                        n4.css.toColor("#555753"),
                        n4.css.toColor("#ef2929"),
                        n4.css.toColor("#8ae234"),
                        n4.css.toColor("#fce94f"),
                        n4.css.toColor("#729fcf"),
                        n4.css.toColor("#ad7fa8"),
                        n4.css.toColor("#34e2e2"),
                        n4.css.toColor("#eeeeec")
                    ], t = [
                        0,
                        95,
                        135,
                        175,
                        215,
                        255
                    ], r = 0; r < 216; r++){
                        var i = t[r / 36 % 6 | 0], o = t[r / 6 % 6 | 0], s = t[r % 6];
                        e.push({
                            css: n4.channels.toCss(i, o, s),
                            rgba: n4.channels.toRgba(i, o, s)
                        });
                    }
                    for(r = 0; r < 24; r++){
                        var a = 8 + 10 * r;
                        e.push({
                            css: n4.channels.toCss(a, a, a),
                            rgba: n4.channels.toRgba(a, a, a)
                        });
                    }
                    return e;
                }());
                var u1 = function() {
                    function e12(e, r) {
                        this.allowTransparency = r;
                        var i = e.createElement("canvas");
                        i.width = 1, i.height = 1;
                        var u = i.getContext("2d");
                        if (!u) throw new Error("Could not get rendering context");
                        this._ctx = u, this._ctx.globalCompositeOperation = "copy", this._litmusColor = this._ctx.createLinearGradient(0, 0, 1, 1), this._contrastCache = new o4.ColorContrastCache, this.colors = {
                            foreground: s3,
                            background: a3,
                            cursor: c1,
                            cursorAccent: l1,
                            selectionTransparent: h1,
                            selectionOpaque: n4.color.blend(a3, h1),
                            ansi: t9.DEFAULT_ANSI_COLORS.slice(),
                            contrastCache: this._contrastCache
                        }, this._updateRestoreColors();
                    }
                    return e12.prototype.onOptionsChange = function(e) {
                        "minimumContrastRatio" === e && this._contrastCache.clear();
                    }, e12.prototype.setTheme = function(e) {
                        void 0 === e && (e = {
                        }), this.colors.foreground = this._parseColor(e.foreground, s3), this.colors.background = this._parseColor(e.background, a3), this.colors.cursor = this._parseColor(e.cursor, c1, !0), this.colors.cursorAccent = this._parseColor(e.cursorAccent, l1, !0), this.colors.selectionTransparent = this._parseColor(e.selection, h1, !0), this.colors.selectionOpaque = n4.color.blend(this.colors.background, this.colors.selectionTransparent), n4.color.isOpaque(this.colors.selectionTransparent) && (this.colors.selectionTransparent = n4.color.opacity(this.colors.selectionTransparent, 0.3)), this.colors.ansi[0] = this._parseColor(e.black, t9.DEFAULT_ANSI_COLORS[0]), this.colors.ansi[1] = this._parseColor(e.red, t9.DEFAULT_ANSI_COLORS[1]), this.colors.ansi[2] = this._parseColor(e.green, t9.DEFAULT_ANSI_COLORS[2]), this.colors.ansi[3] = this._parseColor(e.yellow, t9.DEFAULT_ANSI_COLORS[3]), this.colors.ansi[4] = this._parseColor(e.blue, t9.DEFAULT_ANSI_COLORS[4]), this.colors.ansi[5] = this._parseColor(e.magenta, t9.DEFAULT_ANSI_COLORS[5]), this.colors.ansi[6] = this._parseColor(e.cyan, t9.DEFAULT_ANSI_COLORS[6]), this.colors.ansi[7] = this._parseColor(e.white, t9.DEFAULT_ANSI_COLORS[7]), this.colors.ansi[8] = this._parseColor(e.brightBlack, t9.DEFAULT_ANSI_COLORS[8]), this.colors.ansi[9] = this._parseColor(e.brightRed, t9.DEFAULT_ANSI_COLORS[9]), this.colors.ansi[10] = this._parseColor(e.brightGreen, t9.DEFAULT_ANSI_COLORS[10]), this.colors.ansi[11] = this._parseColor(e.brightYellow, t9.DEFAULT_ANSI_COLORS[11]), this.colors.ansi[12] = this._parseColor(e.brightBlue, t9.DEFAULT_ANSI_COLORS[12]), this.colors.ansi[13] = this._parseColor(e.brightMagenta, t9.DEFAULT_ANSI_COLORS[13]), this.colors.ansi[14] = this._parseColor(e.brightCyan, t9.DEFAULT_ANSI_COLORS[14]), this.colors.ansi[15] = this._parseColor(e.brightWhite, t9.DEFAULT_ANSI_COLORS[15]), this._contrastCache.clear(), this._updateRestoreColors();
                    }, e12.prototype.restoreColor = function(e) {
                        if (void 0 !== e) switch(e){
                            case 256:
                                this.colors.foreground = this._restoreColors.foreground;
                                break;
                            case 257:
                                this.colors.background = this._restoreColors.background;
                                break;
                            case 258:
                                this.colors.cursor = this._restoreColors.cursor;
                                break;
                            default:
                                this.colors.ansi[e] = this._restoreColors.ansi[e];
                        }
                        else for(var t = 0; t < this._restoreColors.ansi.length; ++t)this.colors.ansi[t] = this._restoreColors.ansi[t];
                    }, e12.prototype._updateRestoreColors = function() {
                        this._restoreColors = {
                            foreground: this.colors.foreground,
                            background: this.colors.background,
                            cursor: this.colors.cursor,
                            ansi: i6([], this.colors.ansi, !0)
                        };
                    }, e12.prototype._parseColor = function(e13, t, r) {
                        if (void 0 === r && (r = this.allowTransparency), void 0 === e13) return t;
                        if (this._ctx.fillStyle = this._litmusColor, this._ctx.fillStyle = e13, "string" != typeof this._ctx.fillStyle) return console.warn("Color: " + e13 + " is invalid using fallback " + t.css), t;
                        this._ctx.fillRect(0, 0, 1, 1);
                        var i = this._ctx.getImageData(0, 0, 1, 1).data;
                        if (255 !== i[3]) {
                            if (!r) return console.warn("Color: " + e13 + " is using transparency, but allowTransparency is false. Using fallback " + t.css + "."), t;
                            var o = this._ctx.fillStyle.substring(5, this._ctx.fillStyle.length - 1).split(",").map(function(e) {
                                return Number(e);
                            }), s = o[0], a = o[1], c = o[2], l = o[3], h = Math.round(255 * l);
                            return {
                                rgba: n4.channels.toRgba(s, a, c, h),
                                css: e13
                            };
                        }
                        return {
                            css: this._ctx.fillStyle,
                            rgba: n4.channels.toRgba(i[0], i[1], i[2], i[3])
                        };
                    }, e12;
                }();
                t9.ColorManager = u1;
            },
            9631: (e14, t10)=>{
                Object.defineProperty(t10, "__esModule", {
                    value: !0
                }), t10.removeElementFromParent = void 0, t10.removeElementFromParent = function() {
                    for(var e, t = [], r = 0; r < arguments.length; r++)t[r] = arguments[r];
                    for(var i = 0, n = t; i < n.length; i++){
                        var o = n[i];
                        null === (e = null == o ? void 0 : o.parentElement) || void 0 === e || e.removeChild(o);
                    }
                };
            },
            3656: (e15, t11)=>{
                Object.defineProperty(t11, "__esModule", {
                    value: !0
                }), t11.addDisposableDomListener = void 0, t11.addDisposableDomListener = function(e, t, r, i) {
                    e.addEventListener(t, r, i);
                    var n = !1;
                    return {
                        dispose: function() {
                            n || (n = !0, e.removeEventListener(t, r, i));
                        }
                    };
                };
            },
            3551: function(e16, t12, r7) {
                var i7 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, n5 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t12, "__esModule", {
                    value: !0
                }), t12.MouseZone = t12.Linkifier = void 0;
                var o5 = r7(8460), s4 = r7(2585), a4 = function() {
                    function e17(e, t, r) {
                        this._bufferService = e, this._logService = t, this._unicodeService = r, this._linkMatchers = [], this._nextLinkMatcherId = 0, this._onShowLinkUnderline = new o5.EventEmitter, this._onHideLinkUnderline = new o5.EventEmitter, this._onLinkTooltip = new o5.EventEmitter, this._rowsToLinkify = {
                            start: void 0,
                            end: void 0
                        };
                    }
                    return Object.defineProperty(e17.prototype, "onShowLinkUnderline", {
                        get: function() {
                            return this._onShowLinkUnderline.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e17.prototype, "onHideLinkUnderline", {
                        get: function() {
                            return this._onHideLinkUnderline.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e17.prototype, "onLinkTooltip", {
                        get: function() {
                            return this._onLinkTooltip.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e17.prototype.attachToDom = function(e, t) {
                        this._element = e, this._mouseZoneManager = t;
                    }, e17.prototype.linkifyRows = function(t, r) {
                        var i = this;
                        this._mouseZoneManager && (void 0 === this._rowsToLinkify.start || void 0 === this._rowsToLinkify.end ? (this._rowsToLinkify.start = t, this._rowsToLinkify.end = r) : (this._rowsToLinkify.start = Math.min(this._rowsToLinkify.start, t), this._rowsToLinkify.end = Math.max(this._rowsToLinkify.end, r)), this._mouseZoneManager.clearAll(t, r), this._rowsTimeoutId && clearTimeout(this._rowsTimeoutId), this._rowsTimeoutId = setTimeout(function() {
                            return i._linkifyRows();
                        }, e17._timeBeforeLatency));
                    }, e17.prototype._linkifyRows = function() {
                        this._rowsTimeoutId = void 0;
                        var e = this._bufferService.buffer;
                        if (void 0 !== this._rowsToLinkify.start && void 0 !== this._rowsToLinkify.end) {
                            var t = e.ydisp + this._rowsToLinkify.start;
                            if (!(t >= e.lines.length)) {
                                for(var r = e.ydisp + Math.min(this._rowsToLinkify.end, this._bufferService.rows) + 1, i = Math.ceil(2000 / this._bufferService.cols), n = this._bufferService.buffer.iterator(!1, t, r, i, i); n.hasNext();)for(var o = n.next(), s = 0; s < this._linkMatchers.length; s++)this._doLinkifyRow(o.range.first, o.content, this._linkMatchers[s]);
                                this._rowsToLinkify.start = void 0, this._rowsToLinkify.end = void 0;
                            }
                        } else this._logService.debug("_rowToLinkify was unset before _linkifyRows was called");
                    }, e17.prototype.registerLinkMatcher = function(e, t, r) {
                        if (void 0 === r && (r = {
                        }), !t) throw new Error("handler must be defined");
                        var i = {
                            id: this._nextLinkMatcherId++,
                            regex: e,
                            handler: t,
                            matchIndex: r.matchIndex,
                            validationCallback: r.validationCallback,
                            hoverTooltipCallback: r.tooltipCallback,
                            hoverLeaveCallback: r.leaveCallback,
                            willLinkActivate: r.willLinkActivate,
                            priority: r.priority || 0
                        };
                        return this._addLinkMatcherToList(i), i.id;
                    }, e17.prototype._addLinkMatcherToList = function(e) {
                        if (0 !== this._linkMatchers.length) {
                            for(var t = this._linkMatchers.length - 1; t >= 0; t--)if (e.priority <= this._linkMatchers[t].priority) return void this._linkMatchers.splice(t + 1, 0, e);
                            this._linkMatchers.splice(0, 0, e);
                        } else this._linkMatchers.push(e);
                    }, e17.prototype.deregisterLinkMatcher = function(e) {
                        for(var t = 0; t < this._linkMatchers.length; t++)if (this._linkMatchers[t].id === e) return this._linkMatchers.splice(t, 1), !0;
                        return !1;
                    }, e17.prototype._doLinkifyRow = function(e18, t, r) {
                        for(var i, n = this, o = new RegExp(r.regex.source, (r.regex.flags || "") + "g"), s = -1, a5 = function() {
                            var a = i["number" != typeof r.matchIndex ? 0 : r.matchIndex];
                            if (!a) return c._logService.debug("match found without corresponding matchIndex", i, r), "break";
                            if (s = t.indexOf(a, s + 1), o.lastIndex = s + a.length, s < 0) return "break";
                            var l = c._bufferService.buffer.stringIndexToBufferIndex(e18, s);
                            if (l[0] < 0) return "break";
                            var h = c._bufferService.buffer.lines.get(l[0]);
                            if (!h) return "break";
                            var u = h.getFg(l[1]), f = u ? u >> 9 & 511 : void 0;
                            r.validationCallback ? r.validationCallback(a, function(e) {
                                n._rowsTimeoutId || e && n._addLink(l[1], l[0] - n._bufferService.buffer.ydisp, a, r, f);
                            }) : c._addLink(l[1], l[0] - c._bufferService.buffer.ydisp, a, r, f);
                        }, c = this; null !== (i = o.exec(t)) && "break" !== a5(););
                    }, e17.prototype._addLink = function(e19, t13, r, i, n) {
                        var o = this;
                        if (this._mouseZoneManager && this._element) {
                            var s = this._unicodeService.getStringCellWidth(r), a = e19 % this._bufferService.cols, l = t13 + Math.floor(e19 / this._bufferService.cols), h = (a + s) % this._bufferService.cols, u = l + Math.floor((a + s) / this._bufferService.cols);
                            0 === h && (h = this._bufferService.cols, u--), this._mouseZoneManager.add(new c2(a + 1, l + 1, h + 1, u + 1, function(e) {
                                if (i.handler) return i.handler(e, r);
                                var t = window.open();
                                t ? (t.opener = null, t.location.href = r) : console.warn("Opening link blocked as opener could not be cleared");
                            }, function() {
                                o._onShowLinkUnderline.fire(o._createLinkHoverEvent(a, l, h, u, n)), o._element.classList.add("xterm-cursor-pointer");
                            }, function(e) {
                                o._onLinkTooltip.fire(o._createLinkHoverEvent(a, l, h, u, n)), i.hoverTooltipCallback && i.hoverTooltipCallback(e, r, {
                                    start: {
                                        x: a,
                                        y: l
                                    },
                                    end: {
                                        x: h,
                                        y: u
                                    }
                                });
                            }, function() {
                                o._onHideLinkUnderline.fire(o._createLinkHoverEvent(a, l, h, u, n)), o._element.classList.remove("xterm-cursor-pointer"), i.hoverLeaveCallback && i.hoverLeaveCallback();
                            }, function(e) {
                                return !i.willLinkActivate || i.willLinkActivate(e, r);
                            }));
                        }
                    }, e17.prototype._createLinkHoverEvent = function(e, t, r, i, n) {
                        return {
                            x1: e,
                            y1: t,
                            x2: r,
                            y2: i,
                            cols: this._bufferService.cols,
                            fg: n
                        };
                    }, e17._timeBeforeLatency = 200, e17 = i7([
                        n5(0, s4.IBufferService),
                        n5(1, s4.ILogService),
                        n5(2, s4.IUnicodeService)
                    ], e17);
                }();
                t12.Linkifier = a4;
                var c2 = function(e, t, r, i, n, o, s, a, c) {
                    this.x1 = e, this.y1 = t, this.x2 = r, this.y2 = i, this.clickCallback = n, this.hoverCallback = o, this.tooltipCallback = s, this.leaveCallback = a, this.willLinkActivate = c;
                };
                t12.MouseZone = c2;
            },
            6465: function(e20, t14, r8) {
                var i8, n6 = this && this.__extends || (i8 = function(e21, t15) {
                    return i8 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i8(e21, t15);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i8(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o6 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s5 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t14, "__esModule", {
                    value: !0
                }), t14.Linkifier2 = void 0;
                var a6 = r8(2585), c3 = r8(8460), l2 = r8(844), h = r8(3656), u = function(e22) {
                    function t16(t) {
                        var r = e22.call(this) || this;
                        return r._bufferService = t, r._linkProviders = [], r._linkCacheDisposables = [], r._isMouseOut = !0, r._activeLine = -1, r._onShowLinkUnderline = r.register(new c3.EventEmitter), r._onHideLinkUnderline = r.register(new c3.EventEmitter), r.register((0, l2.getDisposeArrayDisposable)(r._linkCacheDisposables)), r;
                    }
                    return n6(t16, e22), Object.defineProperty(t16.prototype, "currentLink", {
                        get: function() {
                            return this._currentLink;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t16.prototype, "onShowLinkUnderline", {
                        get: function() {
                            return this._onShowLinkUnderline.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t16.prototype, "onHideLinkUnderline", {
                        get: function() {
                            return this._onHideLinkUnderline.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t16.prototype.registerLinkProvider = function(e) {
                        var t = this;
                        return this._linkProviders.push(e), {
                            dispose: function() {
                                var r = t._linkProviders.indexOf(e);
                                -1 !== r && t._linkProviders.splice(r, 1);
                            }
                        };
                    }, t16.prototype.attachToDom = function(e, t, r) {
                        var i = this;
                        this._element = e, this._mouseService = t, this._renderService = r, this.register((0, h.addDisposableDomListener)(this._element, "mouseleave", function() {
                            i._isMouseOut = !0, i._clearCurrentLink();
                        })), this.register((0, h.addDisposableDomListener)(this._element, "mousemove", this._onMouseMove.bind(this))), this.register((0, h.addDisposableDomListener)(this._element, "click", this._onClick.bind(this)));
                    }, t16.prototype._onMouseMove = function(e) {
                        if (this._lastMouseEvent = e, this._element && this._mouseService) {
                            var t = this._positionFromMouseEvent(e, this._element, this._mouseService);
                            if (t) {
                                this._isMouseOut = !1;
                                for(var r = e.composedPath(), i = 0; i < r.length; i++){
                                    var n = r[i];
                                    if (n.classList.contains("xterm")) break;
                                    if (n.classList.contains("xterm-hover")) return;
                                }
                                this._lastBufferCell && t.x === this._lastBufferCell.x && t.y === this._lastBufferCell.y || (this._onHover(t), this._lastBufferCell = t);
                            }
                        }
                    }, t16.prototype._onHover = function(e) {
                        if (this._activeLine !== e.y) return this._clearCurrentLink(), void this._askForLink(e, !1);
                        this._currentLink && this._linkAtPosition(this._currentLink.link, e) || (this._clearCurrentLink(), this._askForLink(e, !0));
                    }, t16.prototype._askForLink = function(e23, t17) {
                        var r9, i = this;
                        this._activeProviderReplies && t17 || (null === (r9 = this._activeProviderReplies) || void 0 === r9 || r9.forEach(function(e24) {
                            null == e24 || e24.forEach(function(e) {
                                e.link.dispose && e.link.dispose();
                            });
                        }), this._activeProviderReplies = new Map, this._activeLine = e23.y);
                        var n = !1;
                        this._linkProviders.forEach(function(r10, o) {
                            var s6;
                            t17 ? (null === (s6 = i._activeProviderReplies) || void 0 === s6 ? void 0 : s6.get(o)) && (n = i._checkLinkProviderResult(o, e23, n)) : r10.provideLinks(e23.y, function(t) {
                                var r, s;
                                if (!i._isMouseOut) {
                                    var a = null == t ? void 0 : t.map(function(e) {
                                        return {
                                            link: e
                                        };
                                    });
                                    null === (r = i._activeProviderReplies) || void 0 === r || r.set(o, a), n = i._checkLinkProviderResult(o, e23, n), (null === (s = i._activeProviderReplies) || void 0 === s ? void 0 : s.size) === i._linkProviders.length && i._removeIntersectingLinks(e23.y, i._activeProviderReplies);
                                }
                            });
                        });
                    }, t16.prototype._removeIntersectingLinks = function(e, t) {
                        for(var r = new Set, i = 0; i < t.size; i++){
                            var n = t.get(i);
                            if (n) for(var o = 0; o < n.length; o++)for(var s = n[o], a = s.link.range.start.y < e ? 0 : s.link.range.start.x, c = s.link.range.end.y > e ? this._bufferService.cols : s.link.range.end.x, l = a; l <= c; l++){
                                if (r.has(l)) {
                                    n.splice(o--, 1);
                                    break;
                                }
                                r.add(l);
                            }
                        }
                    }, t16.prototype._checkLinkProviderResult = function(e25, t, r) {
                        var i, n = this;
                        if (!this._activeProviderReplies) return r;
                        for(var o = this._activeProviderReplies.get(e25), s = !1, a = 0; a < e25; a++)this._activeProviderReplies.has(a) && !this._activeProviderReplies.get(a) || (s = !0);
                        if (!s && o) {
                            var c = o.find(function(e) {
                                return n._linkAtPosition(e.link, t);
                            });
                            c && (r = !0, this._handleNewLink(c));
                        }
                        if (this._activeProviderReplies.size === this._linkProviders.length && !r) for(a = 0; a < this._activeProviderReplies.size; a++){
                            var l = null === (i = this._activeProviderReplies.get(a)) || void 0 === i ? void 0 : i.find(function(e) {
                                return n._linkAtPosition(e.link, t);
                            });
                            if (l) {
                                r = !0, this._handleNewLink(l);
                                break;
                            }
                        }
                        return r;
                    }, t16.prototype._onClick = function(e) {
                        if (this._element && this._mouseService && this._currentLink) {
                            var t = this._positionFromMouseEvent(e, this._element, this._mouseService);
                            t && this._linkAtPosition(this._currentLink.link, t) && this._currentLink.link.activate(e, this._currentLink.link.text);
                        }
                    }, t16.prototype._clearCurrentLink = function(e, t) {
                        this._element && this._currentLink && this._lastMouseEvent && (!e || !t || this._currentLink.link.range.start.y >= e && this._currentLink.link.range.end.y <= t) && (this._linkLeave(this._element, this._currentLink.link, this._lastMouseEvent), this._currentLink = void 0, (0, l2.disposeArray)(this._linkCacheDisposables));
                    }, t16.prototype._handleNewLink = function(e26) {
                        var t = this;
                        if (this._element && this._lastMouseEvent && this._mouseService) {
                            var r11 = this._positionFromMouseEvent(this._lastMouseEvent, this._element, this._mouseService);
                            r11 && this._linkAtPosition(e26.link, r11) && (this._currentLink = e26, this._currentLink.state = {
                                decorations: {
                                    underline: void 0 === e26.link.decorations || e26.link.decorations.underline,
                                    pointerCursor: void 0 === e26.link.decorations || e26.link.decorations.pointerCursor
                                },
                                isHovered: !0
                            }, this._linkHover(this._element, e26.link, this._lastMouseEvent), e26.link.decorations = {
                            }, Object.defineProperties(e26.link.decorations, {
                                pointerCursor: {
                                    get: function() {
                                        var e, r;
                                        return null === (r = null === (e = t._currentLink) || void 0 === e ? void 0 : e.state) || void 0 === r ? void 0 : r.decorations.pointerCursor;
                                    },
                                    set: function(e) {
                                        var r, i;
                                        (null === (r = t._currentLink) || void 0 === r ? void 0 : r.state) && t._currentLink.state.decorations.pointerCursor !== e && (t._currentLink.state.decorations.pointerCursor = e, t._currentLink.state.isHovered && (null === (i = t._element) || void 0 === i || i.classList.toggle("xterm-cursor-pointer", e)));
                                    }
                                },
                                underline: {
                                    get: function() {
                                        var e, r;
                                        return null === (r = null === (e = t._currentLink) || void 0 === e ? void 0 : e.state) || void 0 === r ? void 0 : r.decorations.underline;
                                    },
                                    set: function(r) {
                                        var i, n, o;
                                        (null === (i = t._currentLink) || void 0 === i ? void 0 : i.state) && (null === (o = null === (n = t._currentLink) || void 0 === n ? void 0 : n.state) || void 0 === o ? void 0 : o.decorations.underline) !== r && (t._currentLink.state.decorations.underline = r, t._currentLink.state.isHovered && t._fireUnderlineEvent(e26.link, r));
                                    }
                                }
                            }), this._renderService && this._linkCacheDisposables.push(this._renderService.onRenderedBufferChange(function(e) {
                                var r = 0 === e.start ? 0 : e.start + 1 + t._bufferService.buffer.ydisp;
                                t._clearCurrentLink(r, e.end + 1 + t._bufferService.buffer.ydisp);
                            })));
                        }
                    }, t16.prototype._linkHover = function(e, t, r) {
                        var i;
                        (null === (i = this._currentLink) || void 0 === i ? void 0 : i.state) && (this._currentLink.state.isHovered = !0, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(t, !0), this._currentLink.state.decorations.pointerCursor && e.classList.add("xterm-cursor-pointer")), t.hover && t.hover(r, t.text);
                    }, t16.prototype._fireUnderlineEvent = function(e, t) {
                        var r = e.range, i = this._bufferService.buffer.ydisp, n = this._createLinkUnderlineEvent(r.start.x - 1, r.start.y - i - 1, r.end.x, r.end.y - i - 1, void 0);
                        (t ? this._onShowLinkUnderline : this._onHideLinkUnderline).fire(n);
                    }, t16.prototype._linkLeave = function(e, t, r) {
                        var i;
                        (null === (i = this._currentLink) || void 0 === i ? void 0 : i.state) && (this._currentLink.state.isHovered = !1, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(t, !1), this._currentLink.state.decorations.pointerCursor && e.classList.remove("xterm-cursor-pointer")), t.leave && t.leave(r, t.text);
                    }, t16.prototype._linkAtPosition = function(e, t) {
                        var r = e.range.start.y === e.range.end.y, i = e.range.start.y < t.y, n = e.range.end.y > t.y;
                        return (r && e.range.start.x <= t.x && e.range.end.x >= t.x || i && e.range.end.x >= t.x || n && e.range.start.x <= t.x || i && n) && e.range.start.y <= t.y && e.range.end.y >= t.y;
                    }, t16.prototype._positionFromMouseEvent = function(e, t, r) {
                        var i = r.getCoords(e, t, this._bufferService.cols, this._bufferService.rows);
                        if (i) return {
                            x: i[0],
                            y: i[1] + this._bufferService.buffer.ydisp
                        };
                    }, t16.prototype._createLinkUnderlineEvent = function(e, t, r, i, n) {
                        return {
                            x1: e,
                            y1: t,
                            x2: r,
                            y2: i,
                            cols: this._bufferService.cols,
                            fg: n
                        };
                    }, o6([
                        s5(0, a6.IBufferService)
                    ], t16);
                }(l2.Disposable);
                t14.Linkifier2 = u;
            },
            9042: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.tooMuchOutput = t.promptLabel = void 0, t.promptLabel = "Terminal input", t.tooMuchOutput = "Too much output to announce, navigate to rows manually to read";
            },
            6954: function(e27, t18, r13) {
                var i9, n7 = this && this.__extends || (i9 = function(e28, t19) {
                    return i9 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i9(e28, t19);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i9(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o7 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s7 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t18, "__esModule", {
                    value: !0
                }), t18.MouseZoneManager = void 0;
                var a7 = r13(844), c = r13(3656), l = r13(4725), h = r13(2585), u = function(e29) {
                    function t20(t, r, i, n, o, s) {
                        var a = e29.call(this) || this;
                        return a._element = t, a._screenElement = r, a._bufferService = i, a._mouseService = n, a._selectionService = o, a._optionsService = s, a._zones = [], a._areZonesActive = !1, a._lastHoverCoords = [
                            void 0,
                            void 0
                        ], a._initialSelectionLength = 0, a.register((0, c.addDisposableDomListener)(a._element, "mousedown", function(e) {
                            return a._onMouseDown(e);
                        })), a._mouseMoveListener = function(e) {
                            return a._onMouseMove(e);
                        }, a._mouseLeaveListener = function(e) {
                            return a._onMouseLeave(e);
                        }, a._clickListener = function(e) {
                            return a._onClick(e);
                        }, a;
                    }
                    return n7(t20, e29), t20.prototype.dispose = function() {
                        e29.prototype.dispose.call(this), this._deactivate();
                    }, t20.prototype.add = function(e) {
                        this._zones.push(e), 1 === this._zones.length && this._activate();
                    }, t20.prototype.clearAll = function(e, t) {
                        if (0 !== this._zones.length) {
                            e && t || (e = 0, t = this._bufferService.rows - 1);
                            for(var r = 0; r < this._zones.length; r++){
                                var i = this._zones[r];
                                (i.y1 > e && i.y1 <= t + 1 || i.y2 > e && i.y2 <= t + 1 || i.y1 < e && i.y2 > t + 1) && (this._currentZone && this._currentZone === i && (this._currentZone.leaveCallback(), this._currentZone = void 0), this._zones.splice(r--, 1));
                            }
                            0 === this._zones.length && this._deactivate();
                        }
                    }, t20.prototype._activate = function() {
                        this._areZonesActive || (this._areZonesActive = !0, this._element.addEventListener("mousemove", this._mouseMoveListener), this._element.addEventListener("mouseleave", this._mouseLeaveListener), this._element.addEventListener("click", this._clickListener));
                    }, t20.prototype._deactivate = function() {
                        this._areZonesActive && (this._areZonesActive = !1, this._element.removeEventListener("mousemove", this._mouseMoveListener), this._element.removeEventListener("mouseleave", this._mouseLeaveListener), this._element.removeEventListener("click", this._clickListener));
                    }, t20.prototype._onMouseMove = function(e) {
                        this._lastHoverCoords[0] === e.pageX && this._lastHoverCoords[1] === e.pageY || (this._onHover(e), this._lastHoverCoords = [
                            e.pageX,
                            e.pageY
                        ]);
                    }, t20.prototype._onHover = function(e) {
                        var t = this, r = this._findZoneEventAt(e);
                        r !== this._currentZone && (this._currentZone && (this._currentZone.leaveCallback(), this._currentZone = void 0, this._tooltipTimeout && clearTimeout(this._tooltipTimeout)), r && (this._currentZone = r, r.hoverCallback && r.hoverCallback(e), this._tooltipTimeout = window.setTimeout(function() {
                            return t._onTooltip(e);
                        }, this._optionsService.options.linkTooltipHoverDuration)));
                    }, t20.prototype._onTooltip = function(e) {
                        this._tooltipTimeout = void 0;
                        var t = this._findZoneEventAt(e);
                        null == t || t.tooltipCallback(e);
                    }, t20.prototype._onMouseDown = function(e) {
                        if (this._initialSelectionLength = this._getSelectionLength(), this._areZonesActive) {
                            var t = this._findZoneEventAt(e);
                            (null == t ? void 0 : t.willLinkActivate(e)) && (e.preventDefault(), e.stopImmediatePropagation());
                        }
                    }, t20.prototype._onMouseLeave = function(e) {
                        this._currentZone && (this._currentZone.leaveCallback(), this._currentZone = void 0, this._tooltipTimeout && clearTimeout(this._tooltipTimeout));
                    }, t20.prototype._onClick = function(e) {
                        var t = this._findZoneEventAt(e), r = this._getSelectionLength();
                        t && r === this._initialSelectionLength && (t.clickCallback(e), e.preventDefault(), e.stopImmediatePropagation());
                    }, t20.prototype._getSelectionLength = function() {
                        var e = this._selectionService.selectionText;
                        return e ? e.length : 0;
                    }, t20.prototype._findZoneEventAt = function(e) {
                        var t = this._mouseService.getCoords(e, this._screenElement, this._bufferService.cols, this._bufferService.rows);
                        if (t) for(var r = t[0], i = t[1], n = 0; n < this._zones.length; n++){
                            var o = this._zones[n];
                            if (o.y1 === o.y2) {
                                if (i === o.y1 && r >= o.x1 && r < o.x2) return o;
                            } else if (i === o.y1 && r >= o.x1 || i === o.y2 && r < o.x2 || i > o.y1 && i < o.y2) return o;
                        }
                    }, o7([
                        s7(2, h.IBufferService),
                        s7(3, l.IMouseService),
                        s7(4, l.ISelectionService),
                        s7(5, h.IOptionsService)
                    ], t20);
                }(a7.Disposable);
                t18.MouseZoneManager = u;
            },
            6193: (e30, t21)=>{
                Object.defineProperty(t21, "__esModule", {
                    value: !0
                }), t21.RenderDebouncer = void 0;
                var r14 = function() {
                    function e31(e) {
                        this._renderCallback = e;
                    }
                    return e31.prototype.dispose = function() {
                        this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
                    }, e31.prototype.refresh = function(e, t, r) {
                        var i = this;
                        this._rowCount = r, e = void 0 !== e ? e : 0, t = void 0 !== t ? t : this._rowCount - 1, this._rowStart = void 0 !== this._rowStart ? Math.min(this._rowStart, e) : e, this._rowEnd = void 0 !== this._rowEnd ? Math.max(this._rowEnd, t) : t, this._animationFrame || (this._animationFrame = window.requestAnimationFrame(function() {
                            return i._innerRefresh();
                        }));
                    }, e31.prototype._innerRefresh = function() {
                        if (void 0 !== this._rowStart && void 0 !== this._rowEnd && void 0 !== this._rowCount) {
                            var e = Math.max(this._rowStart, 0), t = Math.min(this._rowEnd, this._rowCount - 1);
                            this._rowStart = void 0, this._rowEnd = void 0, this._animationFrame = void 0, this._renderCallback(e, t);
                        }
                    }, e31;
                }();
                t21.RenderDebouncer = r14;
            },
            5596: function(e32, t22, r15) {
                var i, n = this && this.__extends || (i = function(e33, t23) {
                    return i = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i(e33, t23);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                });
                Object.defineProperty(t22, "__esModule", {
                    value: !0
                }), t22.ScreenDprMonitor = void 0;
                var o = function(e34) {
                    function t24() {
                        var t = null !== e34 && e34.apply(this, arguments) || this;
                        return t._currentDevicePixelRatio = window.devicePixelRatio, t;
                    }
                    return n(t24, e34), t24.prototype.setListener = function(e) {
                        var t = this;
                        this._listener && this.clearListener(), this._listener = e, this._outerListener = function() {
                            t._listener && (t._listener(window.devicePixelRatio, t._currentDevicePixelRatio), t._updateDpr());
                        }, this._updateDpr();
                    }, t24.prototype.dispose = function() {
                        e34.prototype.dispose.call(this), this.clearListener();
                    }, t24.prototype._updateDpr = function() {
                        var e;
                        this._outerListener && (null === (e = this._resolutionMediaMatchList) || void 0 === e || e.removeListener(this._outerListener), this._currentDevicePixelRatio = window.devicePixelRatio, this._resolutionMediaMatchList = window.matchMedia("screen and (resolution: " + window.devicePixelRatio + "dppx)"), this._resolutionMediaMatchList.addListener(this._outerListener));
                    }, t24.prototype.clearListener = function() {
                        this._resolutionMediaMatchList && this._listener && this._outerListener && (this._resolutionMediaMatchList.removeListener(this._outerListener), this._resolutionMediaMatchList = void 0, this._listener = void 0, this._outerListener = void 0);
                    }, t24;
                }(r15(844).Disposable);
                t22.ScreenDprMonitor = o;
            },
            3236: function(e35, t25, r16) {
                var i10, n8 = this && this.__extends || (i10 = function(e36, t26) {
                    return i10 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i10(e36, t26);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i10(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                });
                Object.defineProperty(t25, "__esModule", {
                    value: !0
                }), t25.Terminal = void 0;
                var o8 = r16(2950), s8 = r16(1680), a8 = r16(3614), c = r16(2584), l3 = r16(5435), h = r16(3525), u = r16(3551), f = r16(9312), _ = r16(6114), d = r16(3656), p = r16(9042), v = r16(357), g = r16(6954), y = r16(4567), m = r16(1296), S = r16(7399), C = r16(8460), b = r16(8437), w = r16(5680), L = r16(3230), E = r16(4725), x = r16(428), M = r16(8934), k = r16(6465), A = r16(5114), R = r16(8969), T = r16(4774), B = r16(4269), O = r16(5941), D = "undefined" != typeof window ? window.document : null, P = function(e37) {
                    function t27(t28) {
                        void 0 === t28 && (t28 = {
                        });
                        var r = e37.call(this, t28) || this;
                        return r.browser = _, r._keyDownHandled = !1, r._keyPressHandled = !1, r._unprocessedDeadKey = !1, r._onCursorMove = new C.EventEmitter, r._onKey = new C.EventEmitter, r._onRender = new C.EventEmitter, r._onSelectionChange = new C.EventEmitter, r._onTitleChange = new C.EventEmitter, r._onBell = new C.EventEmitter, r._onFocus = new C.EventEmitter, r._onBlur = new C.EventEmitter, r._onA11yCharEmitter = new C.EventEmitter, r._onA11yTabEmitter = new C.EventEmitter, r._setup(), r.linkifier = r._instantiationService.createInstance(u.Linkifier), r.linkifier2 = r.register(r._instantiationService.createInstance(k.Linkifier2)), r.register(r._inputHandler.onRequestBell(function() {
                            return r.bell();
                        })), r.register(r._inputHandler.onRequestRefreshRows(function(e, t) {
                            return r.refresh(e, t);
                        })), r.register(r._inputHandler.onRequestSendFocus(function() {
                            return r._reportFocus();
                        })), r.register(r._inputHandler.onRequestReset(function() {
                            return r.reset();
                        })), r.register(r._inputHandler.onRequestWindowsOptionsReport(function(e) {
                            return r._reportWindowsOptions(e);
                        })), r.register(r._inputHandler.onColor(function(e) {
                            return r._handleColorEvent(e);
                        })), r.register((0, C.forwardEvent)(r._inputHandler.onCursorMove, r._onCursorMove)), r.register((0, C.forwardEvent)(r._inputHandler.onTitleChange, r._onTitleChange)), r.register((0, C.forwardEvent)(r._inputHandler.onA11yChar, r._onA11yCharEmitter)), r.register((0, C.forwardEvent)(r._inputHandler.onA11yTab, r._onA11yTabEmitter)), r.register(r._bufferService.onResize(function(e) {
                            return r._afterResize(e.cols, e.rows);
                        })), r;
                    }
                    return n8(t27, e37), Object.defineProperty(t27.prototype, "onCursorMove", {
                        get: function() {
                            return this._onCursorMove.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t27.prototype, "onKey", {
                        get: function() {
                            return this._onKey.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t27.prototype, "onRender", {
                        get: function() {
                            return this._onRender.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t27.prototype, "onSelectionChange", {
                        get: function() {
                            return this._onSelectionChange.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t27.prototype, "onTitleChange", {
                        get: function() {
                            return this._onTitleChange.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t27.prototype, "onBell", {
                        get: function() {
                            return this._onBell.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t27.prototype, "onFocus", {
                        get: function() {
                            return this._onFocus.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t27.prototype, "onBlur", {
                        get: function() {
                            return this._onBlur.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t27.prototype, "onA11yChar", {
                        get: function() {
                            return this._onA11yCharEmitter.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t27.prototype, "onA11yTab", {
                        get: function() {
                            return this._onA11yTabEmitter.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t27.prototype._handleColorEvent = function(e) {
                        var t, r;
                        if (this._colorManager) {
                            for(var i = 0, n = e; i < n.length; i++){
                                var o = n[i], s = void 0, a = "";
                                switch(o.index){
                                    case 256:
                                        s = "foreground", a = "10";
                                        break;
                                    case 257:
                                        s = "background", a = "11";
                                        break;
                                    case 258:
                                        s = "cursor", a = "12";
                                        break;
                                    default:
                                        s = "ansi", a = "4;" + o.index;
                                }
                                if (s) switch(o.type){
                                    case 0:
                                        var l = T.color.toColorRGB("ansi" === s ? this._colorManager.colors.ansi[o.index] : this._colorManager.colors[s]);
                                        this.coreService.triggerDataEvent(c.C0.ESC + "]" + a + ";" + (0, O.toRgbString)(l) + c.C0.BEL);
                                        break;
                                    case 1:
                                        "ansi" === s ? this._colorManager.colors.ansi[o.index] = T.rgba.toColor.apply(T.rgba, o.color) : this._colorManager.colors[s] = T.rgba.toColor.apply(T.rgba, o.color);
                                        break;
                                    case 2:
                                        this._colorManager.restoreColor(o.index);
                                }
                            }
                            null === (t = this._renderService) || void 0 === t || t.setColors(this._colorManager.colors), null === (r = this.viewport) || void 0 === r || r.onThemeChange(this._colorManager.colors);
                        }
                    }, t27.prototype.dispose = function() {
                        var t, r, i;
                        this._isDisposed || (e37.prototype.dispose.call(this), null === (t = this._renderService) || void 0 === t || t.dispose(), this._customKeyEventHandler = void 0, this.write = function() {
                        }, null === (i = null === (r = this.element) || void 0 === r ? void 0 : r.parentNode) || void 0 === i || i.removeChild(this.element));
                    }, t27.prototype._setup = function() {
                        e37.prototype._setup.call(this), this._customKeyEventHandler = void 0;
                    }, Object.defineProperty(t27.prototype, "buffer", {
                        get: function() {
                            return this.buffers.active;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t27.prototype.focus = function() {
                        this.textarea && this.textarea.focus({
                            preventScroll: !0
                        });
                    }, t27.prototype._updateOptions = function(t) {
                        var r, i, n, o;
                        switch(e37.prototype._updateOptions.call(this, t), t){
                            case "fontFamily":
                            case "fontSize":
                                null === (r = this._renderService) || void 0 === r || r.clear(), null === (i = this._charSizeService) || void 0 === i || i.measure();
                                break;
                            case "cursorBlink":
                            case "cursorStyle":
                                this.refresh(this.buffer.y, this.buffer.y);
                                break;
                            case "customGlyphs":
                            case "drawBoldTextInBrightColors":
                            case "letterSpacing":
                            case "lineHeight":
                            case "fontWeight":
                            case "fontWeightBold":
                            case "minimumContrastRatio":
                                this._renderService && (this._renderService.clear(), this._renderService.onResize(this.cols, this.rows), this.refresh(0, this.rows - 1));
                                break;
                            case "rendererType":
                                this._renderService && (this._renderService.setRenderer(this._createRenderer()), this._renderService.onResize(this.cols, this.rows));
                                break;
                            case "scrollback":
                                null === (n = this.viewport) || void 0 === n || n.syncScrollArea();
                                break;
                            case "screenReaderMode":
                                this.optionsService.options.screenReaderMode ? !this._accessibilityManager && this._renderService && (this._accessibilityManager = new y.AccessibilityManager(this, this._renderService)) : (null === (o = this._accessibilityManager) || void 0 === o || o.dispose(), this._accessibilityManager = void 0);
                                break;
                            case "tabStopWidth":
                                this.buffers.setupTabStops();
                                break;
                            case "theme":
                                this._setTheme(this.optionsService.options.theme);
                        }
                    }, t27.prototype._onTextAreaFocus = function(e) {
                        this.coreService.decPrivateModes.sendFocus && this.coreService.triggerDataEvent(c.C0.ESC + "[I"), this.updateCursorStyle(e), this.element.classList.add("focus"), this._showCursor(), this._onFocus.fire();
                    }, t27.prototype.blur = function() {
                        var e;
                        return null === (e = this.textarea) || void 0 === e ? void 0 : e.blur();
                    }, t27.prototype._onTextAreaBlur = function() {
                        this.textarea.value = "", this.refresh(this.buffer.y, this.buffer.y), this.coreService.decPrivateModes.sendFocus && this.coreService.triggerDataEvent(c.C0.ESC + "[O"), this.element.classList.remove("focus"), this._onBlur.fire();
                    }, t27.prototype._syncTextArea = function() {
                        if (this.textarea && this.buffer.isCursorInViewport && !this._compositionHelper.isComposing && this._renderService) {
                            var e = this.buffer.ybase + this.buffer.y, t = this.buffer.lines.get(e);
                            if (t) {
                                var r = Math.min(this.buffer.x, this.cols - 1), i = this._renderService.dimensions.actualCellHeight, n = t.getWidth(r), o = this._renderService.dimensions.actualCellWidth * n, s = this.buffer.y * this._renderService.dimensions.actualCellHeight, a = r * this._renderService.dimensions.actualCellWidth;
                                this.textarea.style.left = a + "px", this.textarea.style.top = s + "px", this.textarea.style.width = o + "px", this.textarea.style.height = i + "px", this.textarea.style.lineHeight = i + "px", this.textarea.style.zIndex = "-5";
                            }
                        }
                    }, t27.prototype._initGlobal = function() {
                        var e = this;
                        this._bindKeys(), this.register((0, d.addDisposableDomListener)(this.element, "copy", function(t) {
                            e.hasSelection() && (0, a8.copyHandler)(t, e._selectionService);
                        }));
                        var t29 = function(t) {
                            return (0, a8.handlePasteEvent)(t, e.textarea, e.coreService);
                        };
                        this.register((0, d.addDisposableDomListener)(this.textarea, "paste", t29)), this.register((0, d.addDisposableDomListener)(this.element, "paste", t29)), _.isFirefox ? this.register((0, d.addDisposableDomListener)(this.element, "mousedown", function(t) {
                            2 === t.button && (0, a8.rightClickHandler)(t, e.textarea, e.screenElement, e._selectionService, e.options.rightClickSelectsWord);
                        })) : this.register((0, d.addDisposableDomListener)(this.element, "contextmenu", function(t) {
                            (0, a8.rightClickHandler)(t, e.textarea, e.screenElement, e._selectionService, e.options.rightClickSelectsWord);
                        })), _.isLinux && this.register((0, d.addDisposableDomListener)(this.element, "auxclick", function(t) {
                            1 === t.button && (0, a8.moveTextAreaUnderMouseCursor)(t, e.textarea, e.screenElement);
                        }));
                    }, t27.prototype._bindKeys = function() {
                        var e = this;
                        this.register((0, d.addDisposableDomListener)(this.textarea, "keyup", function(t) {
                            return e._keyUp(t);
                        }, !0)), this.register((0, d.addDisposableDomListener)(this.textarea, "keydown", function(t) {
                            return e._keyDown(t);
                        }, !0)), this.register((0, d.addDisposableDomListener)(this.textarea, "keypress", function(t) {
                            return e._keyPress(t);
                        }, !0)), this.register((0, d.addDisposableDomListener)(this.textarea, "compositionstart", function() {
                            return e._compositionHelper.compositionstart();
                        })), this.register((0, d.addDisposableDomListener)(this.textarea, "compositionupdate", function(t) {
                            return e._compositionHelper.compositionupdate(t);
                        })), this.register((0, d.addDisposableDomListener)(this.textarea, "compositionend", function() {
                            return e._compositionHelper.compositionend();
                        })), this.register((0, d.addDisposableDomListener)(this.textarea, "input", function(t) {
                            return e._inputEvent(t);
                        }, !0)), this.register(this.onRender(function() {
                            return e._compositionHelper.updateCompositionElements();
                        })), this.register(this.onRender(function(t) {
                            return e._queueLinkification(t.start, t.end);
                        }));
                    }, t27.prototype.open = function(e38) {
                        var t = this;
                        if (!e38) throw new Error("Terminal requires a parent element.");
                        e38.isConnected || this._logService.debug("Terminal.open was called on an element that was not attached to the DOM"), this._document = e38.ownerDocument, this.element = this._document.createElement("div"), this.element.dir = "ltr", this.element.classList.add("terminal"), this.element.classList.add("xterm"), this.element.setAttribute("tabindex", "0"), e38.appendChild(this.element);
                        var r = D.createDocumentFragment();
                        this._viewportElement = D.createElement("div"), this._viewportElement.classList.add("xterm-viewport"), r.appendChild(this._viewportElement), this._viewportScrollArea = D.createElement("div"), this._viewportScrollArea.classList.add("xterm-scroll-area"), this._viewportElement.appendChild(this._viewportScrollArea), this.screenElement = D.createElement("div"), this.screenElement.classList.add("xterm-screen"), this._helperContainer = D.createElement("div"), this._helperContainer.classList.add("xterm-helpers"), this.screenElement.appendChild(this._helperContainer), r.appendChild(this.screenElement), this.textarea = D.createElement("textarea"), this.textarea.classList.add("xterm-helper-textarea"), this.textarea.setAttribute("aria-label", p.promptLabel), this.textarea.setAttribute("aria-multiline", "false"), this.textarea.setAttribute("autocorrect", "off"), this.textarea.setAttribute("autocapitalize", "off"), this.textarea.setAttribute("spellcheck", "false"), this.textarea.tabIndex = 0, this.register((0, d.addDisposableDomListener)(this.textarea, "focus", function(e) {
                            return t._onTextAreaFocus(e);
                        })), this.register((0, d.addDisposableDomListener)(this.textarea, "blur", function() {
                            return t._onTextAreaBlur();
                        })), this._helperContainer.appendChild(this.textarea);
                        var i = this._instantiationService.createInstance(A.CoreBrowserService, this.textarea);
                        this._instantiationService.setService(E.ICoreBrowserService, i), this._charSizeService = this._instantiationService.createInstance(x.CharSizeService, this._document, this._helperContainer), this._instantiationService.setService(E.ICharSizeService, this._charSizeService), this._theme = this.options.theme || this._theme, this._colorManager = new w.ColorManager(D, this.options.allowTransparency), this.register(this.optionsService.onOptionChange(function(e) {
                            return t._colorManager.onOptionsChange(e);
                        })), this._colorManager.setTheme(this._theme), this._characterJoinerService = this._instantiationService.createInstance(B.CharacterJoinerService), this._instantiationService.setService(E.ICharacterJoinerService, this._characterJoinerService);
                        var n = this._createRenderer();
                        this._renderService = this.register(this._instantiationService.createInstance(L.RenderService, n, this.rows, this.screenElement)), this._instantiationService.setService(E.IRenderService, this._renderService), this.register(this._renderService.onRenderedBufferChange(function(e) {
                            return t._onRender.fire(e);
                        })), this.onResize(function(e) {
                            return t._renderService.resize(e.cols, e.rows);
                        }), this._compositionView = D.createElement("div"), this._compositionView.classList.add("composition-view"), this._compositionHelper = this._instantiationService.createInstance(o8.CompositionHelper, this.textarea, this._compositionView), this._helperContainer.appendChild(this._compositionView), this.element.appendChild(r), this._soundService = this._instantiationService.createInstance(v.SoundService), this._instantiationService.setService(E.ISoundService, this._soundService), this._mouseService = this._instantiationService.createInstance(M.MouseService), this._instantiationService.setService(E.IMouseService, this._mouseService), this.viewport = this._instantiationService.createInstance(s8.Viewport, function(e) {
                            return t.scrollLines(e, !0, 1);
                        }, this._viewportElement, this._viewportScrollArea, this.element), this.viewport.onThemeChange(this._colorManager.colors), this.register(this._inputHandler.onRequestSyncScrollBar(function() {
                            return t.viewport.syncScrollArea();
                        })), this.register(this.viewport), this.register(this.onCursorMove(function() {
                            t._renderService.onCursorMove(), t._syncTextArea();
                        })), this.register(this.onResize(function() {
                            return t._renderService.onResize(t.cols, t.rows);
                        })), this.register(this.onBlur(function() {
                            return t._renderService.onBlur();
                        })), this.register(this.onFocus(function() {
                            return t._renderService.onFocus();
                        })), this.register(this._renderService.onDimensionsChange(function() {
                            return t.viewport.syncScrollArea();
                        })), this._selectionService = this.register(this._instantiationService.createInstance(f.SelectionService, this.element, this.screenElement, this.linkifier2)), this._instantiationService.setService(E.ISelectionService, this._selectionService), this.register(this._selectionService.onRequestScrollLines(function(e) {
                            return t.scrollLines(e.amount, e.suppressScrollEvent);
                        })), this.register(this._selectionService.onSelectionChange(function() {
                            return t._onSelectionChange.fire();
                        })), this.register(this._selectionService.onRequestRedraw(function(e) {
                            return t._renderService.onSelectionChanged(e.start, e.end, e.columnSelectMode);
                        })), this.register(this._selectionService.onLinuxMouseSelection(function(e) {
                            t.textarea.value = e, t.textarea.focus(), t.textarea.select();
                        })), this.register(this._onScroll.event(function(e) {
                            t.viewport.syncScrollArea(), t._selectionService.refresh();
                        })), this.register((0, d.addDisposableDomListener)(this._viewportElement, "scroll", function() {
                            return t._selectionService.refresh();
                        })), this._mouseZoneManager = this._instantiationService.createInstance(g.MouseZoneManager, this.element, this.screenElement), this.register(this._mouseZoneManager), this.register(this.onScroll(function() {
                            return t._mouseZoneManager.clearAll();
                        })), this.linkifier.attachToDom(this.element, this._mouseZoneManager), this.linkifier2.attachToDom(this.screenElement, this._mouseService, this._renderService), this.register((0, d.addDisposableDomListener)(this.element, "mousedown", function(e) {
                            return t._selectionService.onMouseDown(e);
                        })), this.coreMouseService.areMouseEventsActive ? (this._selectionService.disable(), this.element.classList.add("enable-mouse-events")) : this._selectionService.enable(), this.options.screenReaderMode && (this._accessibilityManager = new y.AccessibilityManager(this, this._renderService)), this._charSizeService.measure(), this.refresh(0, this.rows - 1), this._initGlobal(), this.bindMouse();
                    }, t27.prototype._createRenderer = function() {
                        switch(this.options.rendererType){
                            case "canvas":
                                return this._instantiationService.createInstance(h.Renderer, this._colorManager.colors, this.screenElement, this.linkifier, this.linkifier2);
                            case "dom":
                                return this._instantiationService.createInstance(m.DomRenderer, this._colorManager.colors, this.element, this.screenElement, this._viewportElement, this.linkifier, this.linkifier2);
                            default:
                                throw new Error('Unrecognized rendererType "' + this.options.rendererType + '"');
                        }
                    }, t27.prototype._setTheme = function(e) {
                        var t, r, i;
                        this._theme = e, null === (t = this._colorManager) || void 0 === t || t.setTheme(e), null === (r = this._renderService) || void 0 === r || r.setColors(this._colorManager.colors), null === (i = this.viewport) || void 0 === i || i.onThemeChange(this._colorManager.colors);
                    }, t27.prototype.bindMouse = function() {
                        var e39 = this, t30 = this, r17 = this.element;
                        function i11(e) {
                            var r, i, n = t30._mouseService.getRawByteCoords(e, t30.screenElement, t30.cols, t30.rows);
                            if (!n) return !1;
                            switch(e.overrideType || e.type){
                                case "mousemove":
                                    i = 32, void 0 === e.buttons ? (r = 3, void 0 !== e.button && (r = e.button < 3 ? e.button : 3)) : r = 1 & e.buttons ? 0 : 4 & e.buttons ? 1 : 2 & e.buttons ? 2 : 3;
                                    break;
                                case "mouseup":
                                    i = 0, r = e.button < 3 ? e.button : 3;
                                    break;
                                case "mousedown":
                                    i = 1, r = e.button < 3 ? e.button : 3;
                                    break;
                                case "wheel":
                                    0 !== e.deltaY && (i = e.deltaY < 0 ? 0 : 1), r = 4;
                                    break;
                                default:
                                    return !1;
                            }
                            return !(void 0 === i || void 0 === r || r > 4) && t30.coreMouseService.triggerMouseEvent({
                                col: n.x - 33,
                                row: n.y - 33,
                                button: r,
                                action: i,
                                ctrl: e.ctrlKey,
                                alt: e.altKey,
                                shift: e.shiftKey
                            });
                        }
                        var n9 = {
                            mouseup: null,
                            wheel: null,
                            mousedrag: null,
                            mousemove: null
                        }, o9 = function(t) {
                            return i11(t), t.buttons || (e39._document.removeEventListener("mouseup", n9.mouseup), n9.mousedrag && e39._document.removeEventListener("mousemove", n9.mousedrag)), e39.cancel(t);
                        }, s9 = function(t) {
                            return i11(t), e39.cancel(t, !0);
                        }, a = function(e) {
                            e.buttons && i11(e);
                        }, l = function(e) {
                            e.buttons || i11(e);
                        };
                        this.register(this.coreMouseService.onProtocolChange(function(t) {
                            t ? ("debug" === e39.optionsService.options.logLevel && e39._logService.debug("Binding to mouse events:", e39.coreMouseService.explainEvents(t)), e39.element.classList.add("enable-mouse-events"), e39._selectionService.disable()) : (e39._logService.debug("Unbinding from mouse events."), e39.element.classList.remove("enable-mouse-events"), e39._selectionService.enable()), 8 & t ? n9.mousemove || (r17.addEventListener("mousemove", l), n9.mousemove = l) : (r17.removeEventListener("mousemove", n9.mousemove), n9.mousemove = null), 16 & t ? n9.wheel || (r17.addEventListener("wheel", s9, {
                                passive: !1
                            }), n9.wheel = s9) : (r17.removeEventListener("wheel", n9.wheel), n9.wheel = null), 2 & t ? n9.mouseup || (n9.mouseup = o9) : (e39._document.removeEventListener("mouseup", n9.mouseup), n9.mouseup = null), 4 & t ? n9.mousedrag || (n9.mousedrag = a) : (e39._document.removeEventListener("mousemove", n9.mousedrag), n9.mousedrag = null);
                        })), this.coreMouseService.activeProtocol = this.coreMouseService.activeProtocol, this.register((0, d.addDisposableDomListener)(r17, "mousedown", function(t) {
                            if (t.preventDefault(), e39.focus(), e39.coreMouseService.areMouseEventsActive && !e39._selectionService.shouldForceSelection(t)) return i11(t), n9.mouseup && e39._document.addEventListener("mouseup", n9.mouseup), n9.mousedrag && e39._document.addEventListener("mousemove", n9.mousedrag), e39.cancel(t);
                        })), this.register((0, d.addDisposableDomListener)(r17, "wheel", function(t) {
                            if (!n9.wheel) {
                                if (!e39.buffer.hasScrollback) {
                                    var r = e39.viewport.getLinesScrolled(t);
                                    if (0 === r) return;
                                    for(var i = c.C0.ESC + (e39.coreService.decPrivateModes.applicationCursorKeys ? "O" : "[") + (t.deltaY < 0 ? "A" : "B"), o = "", s = 0; s < Math.abs(r); s++)o += i;
                                    return e39.coreService.triggerDataEvent(o, !0), e39.cancel(t, !0);
                                }
                                return e39.viewport.onWheel(t) ? e39.cancel(t) : void 0;
                            }
                        }, {
                            passive: !1
                        })), this.register((0, d.addDisposableDomListener)(r17, "touchstart", function(t) {
                            if (!e39.coreMouseService.areMouseEventsActive) return e39.viewport.onTouchStart(t), e39.cancel(t);
                        }, {
                            passive: !0
                        })), this.register((0, d.addDisposableDomListener)(r17, "touchmove", function(t) {
                            if (!e39.coreMouseService.areMouseEventsActive) return e39.viewport.onTouchMove(t) ? void 0 : e39.cancel(t);
                        }, {
                            passive: !1
                        }));
                    }, t27.prototype.refresh = function(e, t) {
                        var r;
                        null === (r = this._renderService) || void 0 === r || r.refreshRows(e, t);
                    }, t27.prototype._queueLinkification = function(e, t) {
                        var r;
                        null === (r = this.linkifier) || void 0 === r || r.linkifyRows(e, t);
                    }, t27.prototype.updateCursorStyle = function(e) {
                        var t;
                        (null === (t = this._selectionService) || void 0 === t ? void 0 : t.shouldColumnSelect(e)) ? this.element.classList.add("column-select") : this.element.classList.remove("column-select");
                    }, t27.prototype._showCursor = function() {
                        this.coreService.isCursorInitialized || (this.coreService.isCursorInitialized = !0, this.refresh(this.buffer.y, this.buffer.y));
                    }, t27.prototype.scrollLines = function(t, r, i) {
                        void 0 === i && (i = 0), e37.prototype.scrollLines.call(this, t, r, i), this.refresh(0, this.rows - 1);
                    }, t27.prototype.paste = function(e) {
                        (0, a8.paste)(e, this.textarea, this.coreService);
                    }, t27.prototype.attachCustomKeyEventHandler = function(e) {
                        this._customKeyEventHandler = e;
                    }, t27.prototype.registerLinkMatcher = function(e, t, r) {
                        var i = this.linkifier.registerLinkMatcher(e, t, r);
                        return this.refresh(0, this.rows - 1), i;
                    }, t27.prototype.deregisterLinkMatcher = function(e) {
                        this.linkifier.deregisterLinkMatcher(e) && this.refresh(0, this.rows - 1);
                    }, t27.prototype.registerLinkProvider = function(e) {
                        return this.linkifier2.registerLinkProvider(e);
                    }, t27.prototype.registerCharacterJoiner = function(e) {
                        if (!this._characterJoinerService) throw new Error("Terminal must be opened first");
                        var t = this._characterJoinerService.register(e);
                        return this.refresh(0, this.rows - 1), t;
                    }, t27.prototype.deregisterCharacterJoiner = function(e) {
                        if (!this._characterJoinerService) throw new Error("Terminal must be opened first");
                        this._characterJoinerService.deregister(e) && this.refresh(0, this.rows - 1);
                    }, Object.defineProperty(t27.prototype, "markers", {
                        get: function() {
                            return this.buffer.markers;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t27.prototype.addMarker = function(e) {
                        if (this.buffer === this.buffers.normal) return this.buffer.addMarker(this.buffer.ybase + this.buffer.y + e);
                    }, t27.prototype.hasSelection = function() {
                        return !!this._selectionService && this._selectionService.hasSelection;
                    }, t27.prototype.select = function(e, t, r) {
                        this._selectionService.setSelection(e, t, r);
                    }, t27.prototype.getSelection = function() {
                        return this._selectionService ? this._selectionService.selectionText : "";
                    }, t27.prototype.getSelectionPosition = function() {
                        if (this._selectionService && this._selectionService.hasSelection) return {
                            startColumn: this._selectionService.selectionStart[0],
                            startRow: this._selectionService.selectionStart[1],
                            endColumn: this._selectionService.selectionEnd[0],
                            endRow: this._selectionService.selectionEnd[1]
                        };
                    }, t27.prototype.clearSelection = function() {
                        var e;
                        null === (e = this._selectionService) || void 0 === e || e.clearSelection();
                    }, t27.prototype.selectAll = function() {
                        var e;
                        null === (e = this._selectionService) || void 0 === e || e.selectAll();
                    }, t27.prototype.selectLines = function(e, t) {
                        var r;
                        null === (r = this._selectionService) || void 0 === r || r.selectLines(e, t);
                    }, t27.prototype._keyDown = function(e) {
                        if (this._keyDownHandled = !1, this._customKeyEventHandler && !1 === this._customKeyEventHandler(e)) return !1;
                        if (!this._compositionHelper.keydown(e)) return this.buffer.ybase !== this.buffer.ydisp && this._bufferService.scrollToBottom(), !1;
                        "Dead" !== e.key && "AltGraph" !== e.key || (this._unprocessedDeadKey = !0);
                        var t = (0, S.evaluateKeyboardEvent)(e, this.coreService.decPrivateModes.applicationCursorKeys, this.browser.isMac, this.options.macOptionIsMeta);
                        if (this.updateCursorStyle(e), 3 === t.type || 2 === t.type) {
                            var r = this.rows - 1;
                            return this.scrollLines(2 === t.type ? -r : r), this.cancel(e, !0);
                        }
                        return 1 === t.type && this.selectAll(), !!this._isThirdLevelShift(this.browser, e) || (t.cancel && this.cancel(e, !0), !t.key || (this._unprocessedDeadKey ? (this._unprocessedDeadKey = !1, !0) : (t.key !== c.C0.ETX && t.key !== c.C0.CR || (this.textarea.value = ""), this._onKey.fire({
                            key: t.key,
                            domEvent: e
                        }), this._showCursor(), this.coreService.triggerDataEvent(t.key, !0), this.optionsService.options.screenReaderMode ? void (this._keyDownHandled = !0) : this.cancel(e, !0))));
                    }, t27.prototype._isThirdLevelShift = function(e, t) {
                        var r = e.isMac && !this.options.macOptionIsMeta && t.altKey && !t.ctrlKey && !t.metaKey || e.isWindows && t.altKey && t.ctrlKey && !t.metaKey || e.isWindows && t.getModifierState("AltGraph");
                        return "keypress" === t.type ? r : r && (!t.keyCode || t.keyCode > 47);
                    }, t27.prototype._keyUp = function(e40) {
                        this._customKeyEventHandler && !1 === this._customKeyEventHandler(e40) || ((function(e) {
                            return 16 === e.keyCode || 17 === e.keyCode || 18 === e.keyCode;
                        })(e40) || this.focus(), this.updateCursorStyle(e40), this._keyPressHandled = !1);
                    }, t27.prototype._keyPress = function(e) {
                        var t;
                        if (this._keyPressHandled = !1, this._keyDownHandled) return !1;
                        if (this._customKeyEventHandler && !1 === this._customKeyEventHandler(e)) return !1;
                        if (this.cancel(e), e.charCode) t = e.charCode;
                        else if (null === e.which || void 0 === e.which) t = e.keyCode;
                        else {
                            if (0 === e.which || 0 === e.charCode) return !1;
                            t = e.which;
                        }
                        return !(!t || (e.altKey || e.ctrlKey || e.metaKey) && !this._isThirdLevelShift(this.browser, e) || (t = String.fromCharCode(t), this._onKey.fire({
                            key: t,
                            domEvent: e
                        }), this._showCursor(), this.coreService.triggerDataEvent(t, !0), this._keyPressHandled = !0, this._unprocessedDeadKey = !1, 0));
                    }, t27.prototype._inputEvent = function(e) {
                        if (e.data && "insertText" === e.inputType && !e.composed && !this.optionsService.options.screenReaderMode) {
                            if (this._keyPressHandled) return !1;
                            this._unprocessedDeadKey = !1;
                            var t = e.data;
                            return this.coreService.triggerDataEvent(t, !0), this.cancel(e), !0;
                        }
                        return !1;
                    }, t27.prototype.bell = function() {
                        var e;
                        this._soundBell() && (null === (e = this._soundService) || void 0 === e || e.playBellSound()), this._onBell.fire();
                    }, t27.prototype.resize = function(t, r) {
                        t !== this.cols || r !== this.rows ? e37.prototype.resize.call(this, t, r) : this._charSizeService && !this._charSizeService.hasValidSize && this._charSizeService.measure();
                    }, t27.prototype._afterResize = function(e, t) {
                        var r, i;
                        null === (r = this._charSizeService) || void 0 === r || r.measure(), null === (i = this.viewport) || void 0 === i || i.syncScrollArea(!0);
                    }, t27.prototype.clear = function() {
                        if (0 !== this.buffer.ybase || 0 !== this.buffer.y) {
                            this.buffer.lines.set(0, this.buffer.lines.get(this.buffer.ybase + this.buffer.y)), this.buffer.lines.length = 1, this.buffer.ydisp = 0, this.buffer.ybase = 0, this.buffer.y = 0;
                            for(var e = 1; e < this.rows; e++)this.buffer.lines.push(this.buffer.getBlankLine(b.DEFAULT_ATTR_DATA));
                            this.refresh(0, this.rows - 1), this._onScroll.fire({
                                position: this.buffer.ydisp,
                                source: 0
                            });
                        }
                    }, t27.prototype.reset = function() {
                        var t, r;
                        this.options.rows = this.rows, this.options.cols = this.cols;
                        var i = this._customKeyEventHandler;
                        this._setup(), e37.prototype.reset.call(this), null === (t = this._selectionService) || void 0 === t || t.reset(), this._customKeyEventHandler = i, this.refresh(0, this.rows - 1), null === (r = this.viewport) || void 0 === r || r.syncScrollArea();
                    }, t27.prototype.clearTextureAtlas = function() {
                        var e;
                        null === (e = this._renderService) || void 0 === e || e.clearTextureAtlas();
                    }, t27.prototype._reportFocus = function() {
                        var e;
                        (null === (e = this.element) || void 0 === e ? void 0 : e.classList.contains("focus")) ? this.coreService.triggerDataEvent(c.C0.ESC + "[I") : this.coreService.triggerDataEvent(c.C0.ESC + "[O");
                    }, t27.prototype._reportWindowsOptions = function(e) {
                        if (this._renderService) switch(e){
                            case l3.WindowsOptionsReportType.GET_WIN_SIZE_PIXELS:
                                var t = this._renderService.dimensions.scaledCanvasWidth.toFixed(0), r = this._renderService.dimensions.scaledCanvasHeight.toFixed(0);
                                this.coreService.triggerDataEvent(c.C0.ESC + "[4;" + r + ";" + t + "t");
                                break;
                            case l3.WindowsOptionsReportType.GET_CELL_SIZE_PIXELS:
                                var i = this._renderService.dimensions.scaledCellWidth.toFixed(0), n = this._renderService.dimensions.scaledCellHeight.toFixed(0);
                                this.coreService.triggerDataEvent(c.C0.ESC + "[6;" + n + ";" + i + "t");
                        }
                    }, t27.prototype.cancel = function(e, t) {
                        if (this.options.cancelEvents || t) return e.preventDefault(), e.stopPropagation(), !1;
                    }, t27.prototype._visualBell = function() {
                        return !1;
                    }, t27.prototype._soundBell = function() {
                        return "sound" === this.options.bellStyle;
                    }, t27;
                }(R.CoreTerminal);
                t25.Terminal = P;
            },
            9924: (e41, t31)=>{
                Object.defineProperty(t31, "__esModule", {
                    value: !0
                }), t31.TimeBasedDebouncer = void 0;
                var r18 = function() {
                    function e42(e, t) {
                        void 0 === t && (t = 1000), this._renderCallback = e, this._debounceThresholdMS = t, this._lastRefreshMs = 0, this._additionalRefreshRequested = !1;
                    }
                    return e42.prototype.dispose = function() {
                        this._refreshTimeoutID && clearTimeout(this._refreshTimeoutID);
                    }, e42.prototype.refresh = function(e, t, r) {
                        var i = this;
                        this._rowCount = r, e = void 0 !== e ? e : 0, t = void 0 !== t ? t : this._rowCount - 1, this._rowStart = void 0 !== this._rowStart ? Math.min(this._rowStart, e) : e, this._rowEnd = void 0 !== this._rowEnd ? Math.max(this._rowEnd, t) : t;
                        var n = Date.now();
                        if (n - this._lastRefreshMs >= this._debounceThresholdMS) this._lastRefreshMs = n, this._innerRefresh();
                        else if (!this._additionalRefreshRequested) {
                            var o = n - this._lastRefreshMs, s = this._debounceThresholdMS - o;
                            this._additionalRefreshRequested = !0, this._refreshTimeoutID = window.setTimeout(function() {
                                i._lastRefreshMs = Date.now(), i._innerRefresh(), i._additionalRefreshRequested = !1, i._refreshTimeoutID = void 0;
                            }, s);
                        }
                    }, e42.prototype._innerRefresh = function() {
                        if (void 0 !== this._rowStart && void 0 !== this._rowEnd && void 0 !== this._rowCount) {
                            var e = Math.max(this._rowStart, 0), t = Math.min(this._rowEnd, this._rowCount - 1);
                            this._rowStart = void 0, this._rowEnd = void 0, this._renderCallback(e, t);
                        }
                    }, e42;
                }();
                t31.TimeBasedDebouncer = r18;
            },
            1680: function(e43, t32, r19) {
                var i12, n10 = this && this.__extends || (i12 = function(e44, t33) {
                    return i12 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i12(e44, t33);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i12(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o10 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s10 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t32, "__esModule", {
                    value: !0
                }), t32.Viewport = void 0;
                var a9 = r19(844), c = r19(3656), l4 = r19(4725), h2 = r19(2585), u = function(e45) {
                    function t34(t, r, i, n, o, s, a, l) {
                        var h = e45.call(this) || this;
                        return h._scrollLines = t, h._viewportElement = r, h._scrollArea = i, h._element = n, h._bufferService = o, h._optionsService = s, h._charSizeService = a, h._renderService = l, h.scrollBarWidth = 0, h._currentRowHeight = 0, h._currentScaledCellHeight = 0, h._lastRecordedBufferLength = 0, h._lastRecordedViewportHeight = 0, h._lastRecordedBufferHeight = 0, h._lastTouchY = 0, h._lastScrollTop = 0, h._lastHadScrollBar = !1, h._wheelPartialScroll = 0, h._refreshAnimationFrame = null, h._ignoreNextScrollEvent = !1, h.scrollBarWidth = h._viewportElement.offsetWidth - h._scrollArea.offsetWidth || 15, h._lastHadScrollBar = !0, h.register((0, c.addDisposableDomListener)(h._viewportElement, "scroll", h._onScroll.bind(h))), h._activeBuffer = h._bufferService.buffer, h.register(h._bufferService.buffers.onBufferActivate(function(e) {
                            return h._activeBuffer = e.activeBuffer;
                        })), h._renderDimensions = h._renderService.dimensions, h.register(h._renderService.onDimensionsChange(function(e) {
                            return h._renderDimensions = e;
                        })), setTimeout(function() {
                            return h.syncScrollArea();
                        }, 0), h;
                    }
                    return n10(t34, e45), t34.prototype.onThemeChange = function(e) {
                        this._viewportElement.style.backgroundColor = e.background.css;
                    }, t34.prototype._refresh = function(e) {
                        var t = this;
                        if (e) return this._innerRefresh(), void (null !== this._refreshAnimationFrame && cancelAnimationFrame(this._refreshAnimationFrame));
                        null === this._refreshAnimationFrame && (this._refreshAnimationFrame = requestAnimationFrame(function() {
                            return t._innerRefresh();
                        }));
                    }, t34.prototype._innerRefresh = function() {
                        if (this._charSizeService.height > 0) {
                            this._currentRowHeight = this._renderService.dimensions.scaledCellHeight / window.devicePixelRatio, this._currentScaledCellHeight = this._renderService.dimensions.scaledCellHeight, this._lastRecordedViewportHeight = this._viewportElement.offsetHeight;
                            var e = Math.round(this._currentRowHeight * this._lastRecordedBufferLength) + (this._lastRecordedViewportHeight - this._renderService.dimensions.canvasHeight);
                            this._lastRecordedBufferHeight !== e && (this._lastRecordedBufferHeight = e, this._scrollArea.style.height = this._lastRecordedBufferHeight + "px");
                        }
                        var t = this._bufferService.buffer.ydisp * this._currentRowHeight;
                        this._viewportElement.scrollTop !== t && (this._ignoreNextScrollEvent = !0, this._viewportElement.scrollTop = t), 0 === this._optionsService.options.scrollback ? this.scrollBarWidth = 0 : this.scrollBarWidth = this._viewportElement.offsetWidth - this._scrollArea.offsetWidth || 15, this._lastHadScrollBar = this.scrollBarWidth > 0;
                        var r = window.getComputedStyle(this._element), i = parseInt(r.paddingLeft) + parseInt(r.paddingRight);
                        this._viewportElement.style.width = (this._renderService.dimensions.actualCellWidth * this._bufferService.cols + this.scrollBarWidth + (this._lastHadScrollBar ? i : 0)).toString() + "px", this._refreshAnimationFrame = null;
                    }, t34.prototype.syncScrollArea = function(e) {
                        if (void 0 === e && (e = !1), this._lastRecordedBufferLength !== this._bufferService.buffer.lines.length) return this._lastRecordedBufferLength = this._bufferService.buffer.lines.length, void this._refresh(e);
                        this._lastRecordedViewportHeight === this._renderService.dimensions.canvasHeight && this._lastScrollTop === this._activeBuffer.ydisp * this._currentRowHeight && this._renderDimensions.scaledCellHeight === this._currentScaledCellHeight ? this._lastHadScrollBar !== this._optionsService.options.scrollback > 0 && this._refresh(e) : this._refresh(e);
                    }, t34.prototype._onScroll = function(e) {
                        if (this._lastScrollTop = this._viewportElement.scrollTop, this._viewportElement.offsetParent) {
                            if (this._ignoreNextScrollEvent) return this._ignoreNextScrollEvent = !1, void this._scrollLines(0);
                            var t = Math.round(this._lastScrollTop / this._currentRowHeight) - this._bufferService.buffer.ydisp;
                            this._scrollLines(t);
                        }
                    }, t34.prototype._bubbleScroll = function(e, t) {
                        var r = this._viewportElement.scrollTop + this._lastRecordedViewportHeight;
                        return !(t < 0 && 0 !== this._viewportElement.scrollTop || t > 0 && r < this._lastRecordedBufferHeight) || (e.cancelable && e.preventDefault(), !1);
                    }, t34.prototype.onWheel = function(e) {
                        var t = this._getPixelsScrolled(e);
                        return 0 !== t && (this._viewportElement.scrollTop += t, this._bubbleScroll(e, t));
                    }, t34.prototype._getPixelsScrolled = function(e) {
                        if (0 === e.deltaY || e.shiftKey) return 0;
                        var t = this._applyScrollModifier(e.deltaY, e);
                        return e.deltaMode === WheelEvent.DOM_DELTA_LINE ? t *= this._currentRowHeight : e.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t *= this._currentRowHeight * this._bufferService.rows), t;
                    }, t34.prototype.getLinesScrolled = function(e) {
                        if (0 === e.deltaY || e.shiftKey) return 0;
                        var t = this._applyScrollModifier(e.deltaY, e);
                        return e.deltaMode === WheelEvent.DOM_DELTA_PIXEL ? (t /= this._currentRowHeight + 0, this._wheelPartialScroll += t, t = Math.floor(Math.abs(this._wheelPartialScroll)) * (this._wheelPartialScroll > 0 ? 1 : -1), this._wheelPartialScroll %= 1) : e.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t *= this._bufferService.rows), t;
                    }, t34.prototype._applyScrollModifier = function(e, t) {
                        var r = this._optionsService.options.fastScrollModifier;
                        return "alt" === r && t.altKey || "ctrl" === r && t.ctrlKey || "shift" === r && t.shiftKey ? e * this._optionsService.options.fastScrollSensitivity * this._optionsService.options.scrollSensitivity : e * this._optionsService.options.scrollSensitivity;
                    }, t34.prototype.onTouchStart = function(e) {
                        this._lastTouchY = e.touches[0].pageY;
                    }, t34.prototype.onTouchMove = function(e) {
                        var t = this._lastTouchY - e.touches[0].pageY;
                        return this._lastTouchY = e.touches[0].pageY, 0 !== t && (this._viewportElement.scrollTop += t, this._bubbleScroll(e, t));
                    }, o10([
                        s10(4, h2.IBufferService),
                        s10(5, h2.IOptionsService),
                        s10(6, l4.ICharSizeService),
                        s10(7, l4.IRenderService)
                    ], t34);
                }(a9.Disposable);
                t32.Viewport = u;
            },
            2950: function(e46, t35, r20) {
                var i13 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, n11 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t35, "__esModule", {
                    value: !0
                }), t35.CompositionHelper = void 0;
                var o11 = r20(4725), s11 = r20(2585), a10 = function() {
                    function e47(e, t, r, i, n, o) {
                        this._textarea = e, this._compositionView = t, this._bufferService = r, this._optionsService = i, this._coreService = n, this._renderService = o, this._isComposing = !1, this._isSendingComposition = !1, this._compositionPosition = {
                            start: 0,
                            end: 0
                        }, this._dataAlreadySent = "";
                    }
                    return Object.defineProperty(e47.prototype, "isComposing", {
                        get: function() {
                            return this._isComposing;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e47.prototype.compositionstart = function() {
                        this._isComposing = !0, this._compositionPosition.start = this._textarea.value.length, this._compositionView.textContent = "", this._dataAlreadySent = "", this._compositionView.classList.add("active");
                    }, e47.prototype.compositionupdate = function(e) {
                        var t = this;
                        this._compositionView.textContent = e.data, this.updateCompositionElements(), setTimeout(function() {
                            t._compositionPosition.end = t._textarea.value.length;
                        }, 0);
                    }, e47.prototype.compositionend = function() {
                        this._finalizeComposition(!0);
                    }, e47.prototype.keydown = function(e) {
                        if (this._isComposing || this._isSendingComposition) {
                            if (229 === e.keyCode) return !1;
                            if (16 === e.keyCode || 17 === e.keyCode || 18 === e.keyCode) return !1;
                            this._finalizeComposition(!1);
                        }
                        return 229 !== e.keyCode || (this._handleAnyTextareaChanges(), !1);
                    }, e47.prototype._finalizeComposition = function(e48) {
                        var t = this;
                        if (this._compositionView.classList.remove("active"), this._isComposing = !1, e48) {
                            var r = {
                                start: this._compositionPosition.start,
                                end: this._compositionPosition.end
                            };
                            this._isSendingComposition = !0, setTimeout(function() {
                                if (t._isSendingComposition) {
                                    t._isSendingComposition = !1;
                                    var e;
                                    r.start += t._dataAlreadySent.length, (e = t._isComposing ? t._textarea.value.substring(r.start, r.end) : t._textarea.value.substring(r.start)).length > 0 && t._coreService.triggerDataEvent(e, !0);
                                }
                            }, 0);
                        } else {
                            this._isSendingComposition = !1;
                            var i = this._textarea.value.substring(this._compositionPosition.start, this._compositionPosition.end);
                            this._coreService.triggerDataEvent(i, !0);
                        }
                    }, e47.prototype._handleAnyTextareaChanges = function() {
                        var e = this, t = this._textarea.value;
                        setTimeout(function() {
                            if (!e._isComposing) {
                                var r = e._textarea.value.replace(t, "");
                                r.length > 0 && (e._dataAlreadySent = r, e._coreService.triggerDataEvent(r, !0));
                            }
                        }, 0);
                    }, e47.prototype.updateCompositionElements = function(e) {
                        var t = this;
                        if (this._isComposing) {
                            if (this._bufferService.buffer.isCursorInViewport) {
                                var r = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1), i = this._renderService.dimensions.actualCellHeight, n = this._bufferService.buffer.y * this._renderService.dimensions.actualCellHeight, o = r * this._renderService.dimensions.actualCellWidth;
                                this._compositionView.style.left = o + "px", this._compositionView.style.top = n + "px", this._compositionView.style.height = i + "px", this._compositionView.style.lineHeight = i + "px", this._compositionView.style.fontFamily = this._optionsService.options.fontFamily, this._compositionView.style.fontSize = this._optionsService.options.fontSize + "px";
                                var s = this._compositionView.getBoundingClientRect();
                                this._textarea.style.left = o + "px", this._textarea.style.top = n + "px", this._textarea.style.width = Math.max(s.width, 1) + "px", this._textarea.style.height = Math.max(s.height, 1) + "px", this._textarea.style.lineHeight = s.height + "px";
                            }
                            e || setTimeout(function() {
                                return t.updateCompositionElements(!0);
                            }, 0);
                        }
                    }, i13([
                        n11(2, s11.IBufferService),
                        n11(3, s11.IOptionsService),
                        n11(4, s11.ICoreService),
                        n11(5, o11.IRenderService)
                    ], e47);
                }();
                t35.CompositionHelper = a10;
            },
            9806: (e49, t36)=>{
                function r21(e, t) {
                    var r = t.getBoundingClientRect();
                    return [
                        e.clientX - r.left,
                        e.clientY - r.top
                    ];
                }
                Object.defineProperty(t36, "__esModule", {
                    value: !0
                }), t36.getRawByteCoords = t36.getCoords = t36.getCoordsRelativeToElement = void 0, t36.getCoordsRelativeToElement = r21, t36.getCoords = function(e, t, i, n, o, s, a, c) {
                    if (o) {
                        var l = r21(e, t);
                        if (l) return l[0] = Math.ceil((l[0] + (c ? s / 2 : 0)) / s), l[1] = Math.ceil(l[1] / a), l[0] = Math.min(Math.max(l[0], 1), i + (c ? 1 : 0)), l[1] = Math.min(Math.max(l[1], 1), n), l;
                    }
                }, t36.getRawByteCoords = function(e) {
                    if (e) return {
                        x: e[0] + 32,
                        y: e[1] + 32
                    };
                };
            },
            9504: (e50, t37, r22)=>{
                Object.defineProperty(t37, "__esModule", {
                    value: !0
                }), t37.moveToCellSequence = void 0;
                var i14 = r22(2584);
                function n12(e51, t38, r23, i15) {
                    var n13 = e51 - o12(r23, e51), a12 = t38 - o12(r23, t38), h3 = Math.abs(n13 - a12) - function(e, t, r) {
                        for(var i = 0, n = e - o12(r, e), a = t - o12(r, t), c = 0; c < Math.abs(n - a); c++){
                            var l = "A" === s12(e, t) ? -1 : 1, h = r.buffer.lines.get(n + l * c);
                            (null == h ? void 0 : h.isWrapped) && i++;
                        }
                        return i;
                    }(e51, t38, r23);
                    return l5(h3, c4(s12(e51, t38), i15));
                }
                function o12(e, t) {
                    for(var r = 0, i = e.buffer.lines.get(t), n = null == i ? void 0 : i.isWrapped; n && t >= 0 && t < e.rows;)r++, n = null == (i = e.buffer.lines.get(--t)) ? void 0 : i.isWrapped;
                    return r;
                }
                function s12(e, t) {
                    return e > t ? "A" : "B";
                }
                function a11(e, t, r, i, n, o) {
                    for(var s = e, a = t, c = ""; s !== r || a !== i;)s += n ? 1 : -1, n && s > o.cols - 1 ? (c += o.buffer.translateBufferLineToString(a, !1, e, s), s = 0, e = 0, a++) : !n && s < 0 && (c += o.buffer.translateBufferLineToString(a, !1, 0, e + 1), e = s = o.cols - 1, a--);
                    return c + o.buffer.translateBufferLineToString(a, !1, e, s);
                }
                function c4(e, t) {
                    var r = t ? "O" : "[";
                    return i14.C0.ESC + r + e;
                }
                function l5(e, t) {
                    e = Math.floor(e);
                    for(var r = "", i = 0; i < e; i++)r += t;
                    return r;
                }
                t37.moveToCellSequence = function(e52, t39, r24, i16) {
                    var s13, h4 = r24.buffer.x, u2 = r24.buffer.y;
                    if (!r24.buffer.hasScrollback) return (function(e, t, r, i, s, h) {
                        return 0 === n12(t, i, s, h).length ? "" : l5(a11(e, t, e, t - o12(s, t), !1, s).length, c4("D", h));
                    })(h4, u2, 0, t39, r24, i16) + n12(u2, t39, r24, i16) + (function(e53, t40, r25, i17, s14, h) {
                        var u;
                        u = n12(t40, i17, s14, h).length > 0 ? i17 - o12(s14, i17) : t40;
                        var f = i17, _ = function(e, t, r, i, s, a) {
                            var c;
                            return c = n12(r, i, s, a).length > 0 ? i - o12(s, i) : t, e < r && c <= i || e >= r && c < i ? "C" : "D";
                        }(e53, t40, r25, i17, s14, h);
                        return l5(a11(e53, u, r25, f, "C" === _, s14).length, c4(_, h));
                    })(h4, u2, e52, t39, r24, i16);
                    if (u2 === t39) return s13 = h4 > e52 ? "D" : "C", l5(Math.abs(h4 - e52), c4(s13, i16));
                    s13 = u2 > t39 ? "D" : "C";
                    var f1 = Math.abs(u2 - t39);
                    return l5(function(e, t) {
                        return t.cols - e;
                    }(u2 > t39 ? e52 : h4, r24) + (f1 - 1) * r24.cols + 1 + ((u2 > t39 ? h4 : e52) - 1), c4(s13, i16));
                };
            },
            1546: (e54, t41, r26)=>{
                Object.defineProperty(t41, "__esModule", {
                    value: !0
                }), t41.BaseRenderLayer = void 0;
                var i18 = r26(643), n14 = r26(8803), o13 = r26(1420), s15 = r26(3734), a13 = r26(1752), c5 = r26(4774), l6 = r26(9631), h5 = r26(8978), u3 = function() {
                    function e55(e, t, r, i, n, o, s, a) {
                        this._container = e, this._alpha = i, this._colors = n, this._rendererId = o, this._bufferService = s, this._optionsService = a, this._scaledCharWidth = 0, this._scaledCharHeight = 0, this._scaledCellWidth = 0, this._scaledCellHeight = 0, this._scaledCharLeft = 0, this._scaledCharTop = 0, this._currentGlyphIdentifier = {
                            chars: "",
                            code: 0,
                            bg: 0,
                            fg: 0,
                            bold: !1,
                            dim: !1,
                            italic: !1
                        }, this._canvas = document.createElement("canvas"), this._canvas.classList.add("xterm-" + t + "-layer"), this._canvas.style.zIndex = r.toString(), this._initCanvas(), this._container.appendChild(this._canvas);
                    }
                    return e55.prototype.dispose = function() {
                        var e;
                        (0, l6.removeElementFromParent)(this._canvas), null === (e = this._charAtlas) || void 0 === e || e.dispose();
                    }, e55.prototype._initCanvas = function() {
                        this._ctx = (0, a13.throwIfFalsy)(this._canvas.getContext("2d", {
                            alpha: this._alpha
                        })), this._alpha || this._clearAll();
                    }, e55.prototype.onOptionsChanged = function() {
                    }, e55.prototype.onBlur = function() {
                    }, e55.prototype.onFocus = function() {
                    }, e55.prototype.onCursorMove = function() {
                    }, e55.prototype.onGridChanged = function(e, t) {
                    }, e55.prototype.onSelectionChanged = function(e, t, r) {
                        void 0 === r && (r = !1);
                    }, e55.prototype.setColors = function(e) {
                        this._refreshCharAtlas(e);
                    }, e55.prototype._setTransparency = function(e) {
                        if (e !== this._alpha) {
                            var t = this._canvas;
                            this._alpha = e, this._canvas = this._canvas.cloneNode(), this._initCanvas(), this._container.replaceChild(this._canvas, t), this._refreshCharAtlas(this._colors), this.onGridChanged(0, this._bufferService.rows - 1);
                        }
                    }, e55.prototype._refreshCharAtlas = function(e) {
                        this._scaledCharWidth <= 0 && this._scaledCharHeight <= 0 || (this._charAtlas = (0, o13.acquireCharAtlas)(this._optionsService.options, this._rendererId, e, this._scaledCharWidth, this._scaledCharHeight), this._charAtlas.warmUp());
                    }, e55.prototype.resize = function(e) {
                        this._scaledCellWidth = e.scaledCellWidth, this._scaledCellHeight = e.scaledCellHeight, this._scaledCharWidth = e.scaledCharWidth, this._scaledCharHeight = e.scaledCharHeight, this._scaledCharLeft = e.scaledCharLeft, this._scaledCharTop = e.scaledCharTop, this._canvas.width = e.scaledCanvasWidth, this._canvas.height = e.scaledCanvasHeight, this._canvas.style.width = e.canvasWidth + "px", this._canvas.style.height = e.canvasHeight + "px", this._alpha || this._clearAll(), this._refreshCharAtlas(this._colors);
                    }, e55.prototype.clearTextureAtlas = function() {
                        var e;
                        null === (e = this._charAtlas) || void 0 === e || e.clear();
                    }, e55.prototype._fillCells = function(e, t, r, i) {
                        this._ctx.fillRect(e * this._scaledCellWidth, t * this._scaledCellHeight, r * this._scaledCellWidth, i * this._scaledCellHeight);
                    }, e55.prototype._fillMiddleLineAtCells = function(e, t, r) {
                        void 0 === r && (r = 1);
                        var i = Math.ceil(0.5 * this._scaledCellHeight);
                        this._ctx.fillRect(e * this._scaledCellWidth, (t + 1) * this._scaledCellHeight - i - window.devicePixelRatio, r * this._scaledCellWidth, window.devicePixelRatio);
                    }, e55.prototype._fillBottomLineAtCells = function(e, t, r) {
                        void 0 === r && (r = 1), this._ctx.fillRect(e * this._scaledCellWidth, (t + 1) * this._scaledCellHeight - window.devicePixelRatio - 1, r * this._scaledCellWidth, window.devicePixelRatio);
                    }, e55.prototype._fillLeftLineAtCell = function(e, t, r) {
                        this._ctx.fillRect(e * this._scaledCellWidth, t * this._scaledCellHeight, window.devicePixelRatio * r, this._scaledCellHeight);
                    }, e55.prototype._strokeRectAtCell = function(e, t, r, i) {
                        this._ctx.lineWidth = window.devicePixelRatio, this._ctx.strokeRect(e * this._scaledCellWidth + window.devicePixelRatio / 2, t * this._scaledCellHeight + window.devicePixelRatio / 2, r * this._scaledCellWidth - window.devicePixelRatio, i * this._scaledCellHeight - window.devicePixelRatio);
                    }, e55.prototype._clearAll = function() {
                        this._alpha ? this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height) : (this._ctx.fillStyle = this._colors.background.css, this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height));
                    }, e55.prototype._clearCells = function(e, t, r, i) {
                        this._alpha ? this._ctx.clearRect(e * this._scaledCellWidth, t * this._scaledCellHeight, r * this._scaledCellWidth, i * this._scaledCellHeight) : (this._ctx.fillStyle = this._colors.background.css, this._ctx.fillRect(e * this._scaledCellWidth, t * this._scaledCellHeight, r * this._scaledCellWidth, i * this._scaledCellHeight));
                    }, e55.prototype._fillCharTrueColor = function(e, t, r) {
                        this._ctx.font = this._getFont(!1, !1), this._ctx.textBaseline = n14.TEXT_BASELINE, this._clipRow(r);
                        var i = !1;
                        !1 !== this._optionsService.options.customGlyphs && (i = (0, h5.tryDrawCustomChar)(this._ctx, e.getChars(), t * this._scaledCellWidth, r * this._scaledCellHeight, this._scaledCellWidth, this._scaledCellHeight)), i || this._ctx.fillText(e.getChars(), t * this._scaledCellWidth + this._scaledCharLeft, r * this._scaledCellHeight + this._scaledCharTop + this._scaledCharHeight);
                    }, e55.prototype._drawChars = function(e, t, r) {
                        var o, s, a, c = this._getContrastColor(e);
                        c || e.isFgRGB() || e.isBgRGB() ? this._drawUncachedChars(e, t, r, c) : (e.isInverse() ? (s = e.isBgDefault() ? n14.INVERTED_DEFAULT_COLOR : e.getBgColor(), a = e.isFgDefault() ? n14.INVERTED_DEFAULT_COLOR : e.getFgColor()) : (a = e.isBgDefault() ? i18.DEFAULT_COLOR : e.getBgColor(), s = e.isFgDefault() ? i18.DEFAULT_COLOR : e.getFgColor()), s += this._optionsService.options.drawBoldTextInBrightColors && e.isBold() && s < 8 ? 8 : 0, this._currentGlyphIdentifier.chars = e.getChars() || i18.WHITESPACE_CELL_CHAR, this._currentGlyphIdentifier.code = e.getCode() || i18.WHITESPACE_CELL_CODE, this._currentGlyphIdentifier.bg = a, this._currentGlyphIdentifier.fg = s, this._currentGlyphIdentifier.bold = !!e.isBold(), this._currentGlyphIdentifier.dim = !!e.isDim(), this._currentGlyphIdentifier.italic = !!e.isItalic(), (null === (o = this._charAtlas) || void 0 === o ? void 0 : o.draw(this._ctx, this._currentGlyphIdentifier, t * this._scaledCellWidth + this._scaledCharLeft, r * this._scaledCellHeight + this._scaledCharTop)) || this._drawUncachedChars(e, t, r));
                    }, e55.prototype._drawUncachedChars = function(e, t, r, i) {
                        if (this._ctx.save(), this._ctx.font = this._getFont(!!e.isBold(), !!e.isItalic()), this._ctx.textBaseline = n14.TEXT_BASELINE, e.isInverse()) {
                            if (i) this._ctx.fillStyle = i.css;
                            else if (e.isBgDefault()) this._ctx.fillStyle = c5.color.opaque(this._colors.background).css;
                            else if (e.isBgRGB()) this._ctx.fillStyle = "rgb(" + s15.AttributeData.toColorRGB(e.getBgColor()).join(",") + ")";
                            else {
                                var o = e.getBgColor();
                                this._optionsService.options.drawBoldTextInBrightColors && e.isBold() && o < 8 && (o += 8), this._ctx.fillStyle = this._colors.ansi[o].css;
                            }
                        } else if (i) this._ctx.fillStyle = i.css;
                        else if (e.isFgDefault()) this._ctx.fillStyle = this._colors.foreground.css;
                        else if (e.isFgRGB()) this._ctx.fillStyle = "rgb(" + s15.AttributeData.toColorRGB(e.getFgColor()).join(",") + ")";
                        else {
                            var a = e.getFgColor();
                            this._optionsService.options.drawBoldTextInBrightColors && e.isBold() && a < 8 && (a += 8), this._ctx.fillStyle = this._colors.ansi[a].css;
                        }
                        this._clipRow(r), e.isDim() && (this._ctx.globalAlpha = n14.DIM_OPACITY);
                        var l = !1;
                        !1 !== this._optionsService.options.customGlyphs && (l = (0, h5.tryDrawCustomChar)(this._ctx, e.getChars(), t * this._scaledCellWidth, r * this._scaledCellHeight, this._scaledCellWidth, this._scaledCellHeight)), l || this._ctx.fillText(e.getChars(), t * this._scaledCellWidth + this._scaledCharLeft, r * this._scaledCellHeight + this._scaledCharTop + this._scaledCharHeight), this._ctx.restore();
                    }, e55.prototype._clipRow = function(e) {
                        this._ctx.beginPath(), this._ctx.rect(0, e * this._scaledCellHeight, this._bufferService.cols * this._scaledCellWidth, this._scaledCellHeight), this._ctx.clip();
                    }, e55.prototype._getFont = function(e, t) {
                        return (t ? "italic" : "") + " " + (e ? this._optionsService.options.fontWeightBold : this._optionsService.options.fontWeight) + " " + this._optionsService.options.fontSize * window.devicePixelRatio + "px " + this._optionsService.options.fontFamily;
                    }, e55.prototype._getContrastColor = function(e) {
                        if (1 !== this._optionsService.options.minimumContrastRatio) {
                            var t = this._colors.contrastCache.getColor(e.bg, e.fg);
                            if (void 0 !== t) return t || void 0;
                            var r = e.getFgColor(), i = e.getFgColorMode(), n = e.getBgColor(), o = e.getBgColorMode(), s = !!e.isInverse(), a = !!e.isInverse();
                            if (s) {
                                var l = r;
                                r = n, n = l;
                                var h = i;
                                i = o, o = h;
                            }
                            var u = this._resolveBackgroundRgba(o, n, s), f = this._resolveForegroundRgba(i, r, s, a), _ = c5.rgba.ensureContrastRatio(u, f, this._optionsService.options.minimumContrastRatio);
                            if (_) {
                                var d = {
                                    css: c5.channels.toCss(_ >> 24 & 255, _ >> 16 & 255, _ >> 8 & 255),
                                    rgba: _
                                };
                                return this._colors.contrastCache.setColor(e.bg, e.fg, d), d;
                            }
                            this._colors.contrastCache.setColor(e.bg, e.fg, null);
                        }
                    }, e55.prototype._resolveBackgroundRgba = function(e, t, r) {
                        switch(e){
                            case 16777216:
                            case 33554432:
                                return this._colors.ansi[t].rgba;
                            case 50331648:
                                return t << 8;
                            default:
                                return r ? this._colors.foreground.rgba : this._colors.background.rgba;
                        }
                    }, e55.prototype._resolveForegroundRgba = function(e, t, r, i) {
                        switch(e){
                            case 16777216:
                            case 33554432:
                                return this._optionsService.options.drawBoldTextInBrightColors && i && t < 8 && (t += 8), this._colors.ansi[t].rgba;
                            case 50331648:
                                return t << 8;
                            default:
                                return r ? this._colors.background.rgba : this._colors.foreground.rgba;
                        }
                    }, e55;
                }();
                t41.BaseRenderLayer = u3;
            },
            2512: function(e56, t42, r27) {
                var i19, n15 = this && this.__extends || (i19 = function(e57, t43) {
                    return i19 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i19(e57, t43);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i19(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o14 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s16 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t42, "__esModule", {
                    value: !0
                }), t42.CursorRenderLayer = void 0;
                var a14 = r27(1546), c = r27(511), l7 = r27(2585), h6 = r27(4725), u4 = 600, f = function(e58) {
                    function t44(t, r, i, n, o, s, a, l, h) {
                        var u = e58.call(this, t, "cursor", r, !0, i, n, s, a) || this;
                        return u._onRequestRedraw = o, u._coreService = l, u._coreBrowserService = h, u._cell = new c.CellData, u._state = {
                            x: 0,
                            y: 0,
                            isFocused: !1,
                            style: "",
                            width: 0
                        }, u._cursorRenderers = {
                            bar: u._renderBarCursor.bind(u),
                            block: u._renderBlockCursor.bind(u),
                            underline: u._renderUnderlineCursor.bind(u)
                        }, u;
                    }
                    return n15(t44, e58), t44.prototype.dispose = function() {
                        this._cursorBlinkStateManager && (this._cursorBlinkStateManager.dispose(), this._cursorBlinkStateManager = void 0), e58.prototype.dispose.call(this);
                    }, t44.prototype.resize = function(t) {
                        e58.prototype.resize.call(this, t), this._state = {
                            x: 0,
                            y: 0,
                            isFocused: !1,
                            style: "",
                            width: 0
                        };
                    }, t44.prototype.reset = function() {
                        var e;
                        this._clearCursor(), null === (e = this._cursorBlinkStateManager) || void 0 === e || e.restartBlinkAnimation(), this.onOptionsChanged();
                    }, t44.prototype.onBlur = function() {
                        var e;
                        null === (e = this._cursorBlinkStateManager) || void 0 === e || e.pause(), this._onRequestRedraw.fire({
                            start: this._bufferService.buffer.y,
                            end: this._bufferService.buffer.y
                        });
                    }, t44.prototype.onFocus = function() {
                        var e;
                        null === (e = this._cursorBlinkStateManager) || void 0 === e || e.resume(), this._onRequestRedraw.fire({
                            start: this._bufferService.buffer.y,
                            end: this._bufferService.buffer.y
                        });
                    }, t44.prototype.onOptionsChanged = function() {
                        var e, t = this;
                        this._optionsService.options.cursorBlink ? this._cursorBlinkStateManager || (this._cursorBlinkStateManager = new _(this._coreBrowserService.isFocused, function() {
                            t._render(!0);
                        })) : (null === (e = this._cursorBlinkStateManager) || void 0 === e || e.dispose(), this._cursorBlinkStateManager = void 0), this._onRequestRedraw.fire({
                            start: this._bufferService.buffer.y,
                            end: this._bufferService.buffer.y
                        });
                    }, t44.prototype.onCursorMove = function() {
                        var e;
                        null === (e = this._cursorBlinkStateManager) || void 0 === e || e.restartBlinkAnimation();
                    }, t44.prototype.onGridChanged = function(e, t) {
                        !this._cursorBlinkStateManager || this._cursorBlinkStateManager.isPaused ? this._render(!1) : this._cursorBlinkStateManager.restartBlinkAnimation();
                    }, t44.prototype._render = function(e) {
                        if (this._coreService.isCursorInitialized && !this._coreService.isCursorHidden) {
                            var t = this._bufferService.buffer.ybase + this._bufferService.buffer.y, r = t - this._bufferService.buffer.ydisp;
                            if (r < 0 || r >= this._bufferService.rows) this._clearCursor();
                            else {
                                var i = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1);
                                if (this._bufferService.buffer.lines.get(t).loadCell(i, this._cell), void 0 !== this._cell.content) {
                                    if (!this._coreBrowserService.isFocused) {
                                        this._clearCursor(), this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css;
                                        var n = this._optionsService.options.cursorStyle;
                                        return n && "block" !== n ? this._cursorRenderers[n](i, r, this._cell) : this._renderBlurCursor(i, r, this._cell), this._ctx.restore(), this._state.x = i, this._state.y = r, this._state.isFocused = !1, this._state.style = n, void (this._state.width = this._cell.getWidth());
                                    }
                                    if (!this._cursorBlinkStateManager || this._cursorBlinkStateManager.isCursorVisible) {
                                        if (this._state) {
                                            if (this._state.x === i && this._state.y === r && this._state.isFocused === this._coreBrowserService.isFocused && this._state.style === this._optionsService.options.cursorStyle && this._state.width === this._cell.getWidth()) return;
                                            this._clearCursor();
                                        }
                                        this._ctx.save(), this._cursorRenderers[this._optionsService.options.cursorStyle || "block"](i, r, this._cell), this._ctx.restore(), this._state.x = i, this._state.y = r, this._state.isFocused = !1, this._state.style = this._optionsService.options.cursorStyle, this._state.width = this._cell.getWidth();
                                    } else this._clearCursor();
                                }
                            }
                        } else this._clearCursor();
                    }, t44.prototype._clearCursor = function() {
                        this._state && (window.devicePixelRatio < 1 ? this._clearAll() : this._clearCells(this._state.x, this._state.y, this._state.width, 1), this._state = {
                            x: 0,
                            y: 0,
                            isFocused: !1,
                            style: "",
                            width: 0
                        });
                    }, t44.prototype._renderBarCursor = function(e, t, r) {
                        this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillLeftLineAtCell(e, t, this._optionsService.options.cursorWidth), this._ctx.restore();
                    }, t44.prototype._renderBlockCursor = function(e, t, r) {
                        this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillCells(e, t, r.getWidth(), 1), this._ctx.fillStyle = this._colors.cursorAccent.css, this._fillCharTrueColor(r, e, t), this._ctx.restore();
                    }, t44.prototype._renderUnderlineCursor = function(e, t, r) {
                        this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillBottomLineAtCells(e, t), this._ctx.restore();
                    }, t44.prototype._renderBlurCursor = function(e, t, r) {
                        this._ctx.save(), this._ctx.strokeStyle = this._colors.cursor.css, this._strokeRectAtCell(e, t, r.getWidth(), 1), this._ctx.restore();
                    }, o14([
                        s16(5, l7.IBufferService),
                        s16(6, l7.IOptionsService),
                        s16(7, l7.ICoreService),
                        s16(8, h6.ICoreBrowserService)
                    ], t44);
                }(a14.BaseRenderLayer);
                t42.CursorRenderLayer = f;
                var _ = function() {
                    function e59(e, t) {
                        this._renderCallback = t, this.isCursorVisible = !0, e && this._restartInterval();
                    }
                    return Object.defineProperty(e59.prototype, "isPaused", {
                        get: function() {
                            return !(this._blinkStartTimeout || this._blinkInterval);
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e59.prototype.dispose = function() {
                        this._blinkInterval && (window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
                    }, e59.prototype.restartBlinkAnimation = function() {
                        var e = this;
                        this.isPaused || (this._animationTimeRestarted = Date.now(), this.isCursorVisible = !0, this._animationFrame || (this._animationFrame = window.requestAnimationFrame(function() {
                            e._renderCallback(), e._animationFrame = void 0;
                        })));
                    }, e59.prototype._restartInterval = function(e60) {
                        var t = this;
                        void 0 === e60 && (e60 = u4), this._blinkInterval && (window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout = window.setTimeout(function() {
                            if (t._animationTimeRestarted) {
                                var e = u4 - (Date.now() - t._animationTimeRestarted);
                                if (t._animationTimeRestarted = void 0, e > 0) return void t._restartInterval(e);
                            }
                            t.isCursorVisible = !1, t._animationFrame = window.requestAnimationFrame(function() {
                                t._renderCallback(), t._animationFrame = void 0;
                            }), t._blinkInterval = window.setInterval(function() {
                                if (t._animationTimeRestarted) {
                                    var e = u4 - (Date.now() - t._animationTimeRestarted);
                                    return t._animationTimeRestarted = void 0, void t._restartInterval(e);
                                }
                                t.isCursorVisible = !t.isCursorVisible, t._animationFrame = window.requestAnimationFrame(function() {
                                    t._renderCallback(), t._animationFrame = void 0;
                                });
                            }, u4);
                        }, e60);
                    }, e59.prototype.pause = function() {
                        this.isCursorVisible = !0, this._blinkInterval && (window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
                    }, e59.prototype.resume = function() {
                        this.pause(), this._animationTimeRestarted = void 0, this._restartInterval(), this.restartBlinkAnimation();
                    }, e59;
                }();
            },
            8978: (e61, t45, r28)=>{
                var i20, n16, o15, s17, a15, c6, l8, h7, u5, f2, _1, d1, p1, v1, g1, y1, m1, S1, C, b, w, L, E, x, M, k, A, R, T, B, O, D, P, I, H, F, j, W, U, q, N, z, K, G, V, X, Y, Z, J, $, Q, ee, te, re, ie, ne, oe, se, ae, ce, le, he, ue, fe, _e, de, pe, ve, ge, ye, me, Se, Ce, be, we, Le, Ee, xe, Me, ke, Ae, Re, Te, Be, Oe, De, Pe, Ie, He, Fe, je, We, Ue, qe, Ne, ze, Ke, Ge, Ve, Xe, Ye, Ze, Je, $e, Qe, et, tt, rt, it, nt, ot, st, at, ct, lt, ht, ut, ft, _t, dt, pt, vt, gt, yt, mt, St, Ct, bt;
                Object.defineProperty(t45, "__esModule", {
                    value: !0
                }), t45.tryDrawCustomChar = t45.boxDrawingDefinitions = t45.blockElementDefinitions = void 0;
                var wt = r28(1752);
                t45.blockElementDefinitions = {
                    "▀": [
                        {
                            x: 0,
                            y: 0,
                            w: 8,
                            h: 4
                        }
                    ],
                    "▁": [
                        {
                            x: 0,
                            y: 7,
                            w: 8,
                            h: 1
                        }
                    ],
                    "▂": [
                        {
                            x: 0,
                            y: 6,
                            w: 8,
                            h: 2
                        }
                    ],
                    "▃": [
                        {
                            x: 0,
                            y: 5,
                            w: 8,
                            h: 3
                        }
                    ],
                    "▄": [
                        {
                            x: 0,
                            y: 4,
                            w: 8,
                            h: 4
                        }
                    ],
                    "▅": [
                        {
                            x: 0,
                            y: 3,
                            w: 8,
                            h: 5
                        }
                    ],
                    "▆": [
                        {
                            x: 0,
                            y: 2,
                            w: 8,
                            h: 6
                        }
                    ],
                    "▇": [
                        {
                            x: 0,
                            y: 1,
                            w: 8,
                            h: 7
                        }
                    ],
                    "█": [
                        {
                            x: 0,
                            y: 0,
                            w: 8,
                            h: 8
                        }
                    ],
                    "▉": [
                        {
                            x: 0,
                            y: 0,
                            w: 7,
                            h: 8
                        }
                    ],
                    "▊": [
                        {
                            x: 0,
                            y: 0,
                            w: 6,
                            h: 8
                        }
                    ],
                    "▋": [
                        {
                            x: 0,
                            y: 0,
                            w: 5,
                            h: 8
                        }
                    ],
                    "▌": [
                        {
                            x: 0,
                            y: 0,
                            w: 4,
                            h: 8
                        }
                    ],
                    "▍": [
                        {
                            x: 0,
                            y: 0,
                            w: 3,
                            h: 8
                        }
                    ],
                    "▎": [
                        {
                            x: 0,
                            y: 0,
                            w: 2,
                            h: 8
                        }
                    ],
                    "▏": [
                        {
                            x: 0,
                            y: 0,
                            w: 1,
                            h: 8
                        }
                    ],
                    "▐": [
                        {
                            x: 4,
                            y: 0,
                            w: 4,
                            h: 8
                        }
                    ],
                    "▔": [
                        {
                            x: 0,
                            y: 0,
                            w: 9,
                            h: 1
                        }
                    ],
                    "▕": [
                        {
                            x: 7,
                            y: 0,
                            w: 1,
                            h: 8
                        }
                    ],
                    "▖": [
                        {
                            x: 0,
                            y: 4,
                            w: 4,
                            h: 4
                        }
                    ],
                    "▗": [
                        {
                            x: 4,
                            y: 4,
                            w: 4,
                            h: 4
                        }
                    ],
                    "▘": [
                        {
                            x: 0,
                            y: 0,
                            w: 4,
                            h: 4
                        }
                    ],
                    "▙": [
                        {
                            x: 0,
                            y: 0,
                            w: 4,
                            h: 8
                        },
                        {
                            x: 0,
                            y: 4,
                            w: 8,
                            h: 4
                        }
                    ],
                    "▚": [
                        {
                            x: 0,
                            y: 0,
                            w: 4,
                            h: 4
                        },
                        {
                            x: 4,
                            y: 4,
                            w: 4,
                            h: 4
                        }
                    ],
                    "▛": [
                        {
                            x: 0,
                            y: 0,
                            w: 4,
                            h: 8
                        },
                        {
                            x: 0,
                            y: 0,
                            w: 4,
                            h: 8
                        }
                    ],
                    "▜": [
                        {
                            x: 0,
                            y: 0,
                            w: 8,
                            h: 4
                        },
                        {
                            x: 4,
                            y: 0,
                            w: 4,
                            h: 8
                        }
                    ],
                    "▝": [
                        {
                            x: 4,
                            y: 0,
                            w: 4,
                            h: 4
                        }
                    ],
                    "▞": [
                        {
                            x: 4,
                            y: 0,
                            w: 4,
                            h: 4
                        },
                        {
                            x: 0,
                            y: 4,
                            w: 4,
                            h: 4
                        }
                    ],
                    "▟": [
                        {
                            x: 4,
                            y: 0,
                            w: 4,
                            h: 8
                        },
                        {
                            x: 0,
                            y: 4,
                            w: 8,
                            h: 4
                        }
                    ],
                    "🭰": [
                        {
                            x: 1,
                            y: 0,
                            w: 1,
                            h: 8
                        }
                    ],
                    "🭱": [
                        {
                            x: 2,
                            y: 0,
                            w: 1,
                            h: 8
                        }
                    ],
                    "🭲": [
                        {
                            x: 3,
                            y: 0,
                            w: 1,
                            h: 8
                        }
                    ],
                    "🭳": [
                        {
                            x: 4,
                            y: 0,
                            w: 1,
                            h: 8
                        }
                    ],
                    "🭴": [
                        {
                            x: 5,
                            y: 0,
                            w: 1,
                            h: 8
                        }
                    ],
                    "🭵": [
                        {
                            x: 6,
                            y: 0,
                            w: 1,
                            h: 8
                        }
                    ],
                    "🭶": [
                        {
                            x: 0,
                            y: 1,
                            w: 8,
                            h: 1
                        }
                    ],
                    "🭷": [
                        {
                            x: 0,
                            y: 2,
                            w: 8,
                            h: 1
                        }
                    ],
                    "🭸": [
                        {
                            x: 0,
                            y: 3,
                            w: 8,
                            h: 1
                        }
                    ],
                    "🭹": [
                        {
                            x: 0,
                            y: 4,
                            w: 8,
                            h: 1
                        }
                    ],
                    "🭺": [
                        {
                            x: 0,
                            y: 5,
                            w: 8,
                            h: 1
                        }
                    ],
                    "🭻": [
                        {
                            x: 0,
                            y: 6,
                            w: 8,
                            h: 1
                        }
                    ],
                    "🭼": [
                        {
                            x: 0,
                            y: 0,
                            w: 1,
                            h: 8
                        },
                        {
                            x: 0,
                            y: 7,
                            w: 8,
                            h: 1
                        }
                    ],
                    "🭽": [
                        {
                            x: 0,
                            y: 0,
                            w: 1,
                            h: 8
                        },
                        {
                            x: 0,
                            y: 0,
                            w: 8,
                            h: 1
                        }
                    ],
                    "🭾": [
                        {
                            x: 7,
                            y: 0,
                            w: 1,
                            h: 8
                        },
                        {
                            x: 0,
                            y: 0,
                            w: 8,
                            h: 1
                        }
                    ],
                    "🭿": [
                        {
                            x: 7,
                            y: 0,
                            w: 1,
                            h: 8
                        },
                        {
                            x: 0,
                            y: 7,
                            w: 8,
                            h: 1
                        }
                    ],
                    "🮀": [
                        {
                            x: 0,
                            y: 0,
                            w: 8,
                            h: 1
                        },
                        {
                            x: 0,
                            y: 7,
                            w: 8,
                            h: 1
                        }
                    ],
                    "🮁": [
                        {
                            x: 0,
                            y: 0,
                            w: 8,
                            h: 1
                        },
                        {
                            x: 0,
                            y: 2,
                            w: 8,
                            h: 1
                        },
                        {
                            x: 0,
                            y: 4,
                            w: 8,
                            h: 1
                        },
                        {
                            x: 0,
                            y: 7,
                            w: 8,
                            h: 1
                        }
                    ],
                    "🮂": [
                        {
                            x: 0,
                            y: 0,
                            w: 8,
                            h: 2
                        }
                    ],
                    "🮃": [
                        {
                            x: 0,
                            y: 0,
                            w: 8,
                            h: 3
                        }
                    ],
                    "🮄": [
                        {
                            x: 0,
                            y: 0,
                            w: 8,
                            h: 5
                        }
                    ],
                    "🮅": [
                        {
                            x: 0,
                            y: 0,
                            w: 8,
                            h: 6
                        }
                    ],
                    "🮆": [
                        {
                            x: 0,
                            y: 0,
                            w: 8,
                            h: 7
                        }
                    ],
                    "🮇": [
                        {
                            x: 6,
                            y: 0,
                            w: 2,
                            h: 8
                        }
                    ],
                    "🮈": [
                        {
                            x: 5,
                            y: 0,
                            w: 3,
                            h: 8
                        }
                    ],
                    "🮉": [
                        {
                            x: 3,
                            y: 0,
                            w: 5,
                            h: 8
                        }
                    ],
                    "🮊": [
                        {
                            x: 2,
                            y: 0,
                            w: 6,
                            h: 8
                        }
                    ],
                    "🮋": [
                        {
                            x: 1,
                            y: 0,
                            w: 7,
                            h: 8
                        }
                    ],
                    "🮕": [
                        {
                            x: 0,
                            y: 0,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 4,
                            y: 0,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 2,
                            y: 2,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 6,
                            y: 2,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 0,
                            y: 4,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 4,
                            y: 4,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 2,
                            y: 6,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 6,
                            y: 6,
                            w: 2,
                            h: 2
                        }
                    ],
                    "🮖": [
                        {
                            x: 2,
                            y: 0,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 6,
                            y: 0,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 0,
                            y: 2,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 4,
                            y: 2,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 2,
                            y: 4,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 6,
                            y: 4,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 0,
                            y: 6,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 4,
                            y: 6,
                            w: 2,
                            h: 2
                        }
                    ],
                    "🮗": [
                        {
                            x: 0,
                            y: 2,
                            w: 8,
                            h: 2
                        },
                        {
                            x: 0,
                            y: 6,
                            w: 8,
                            h: 2
                        }
                    ]
                };
                var Lt = {
                    "░": [
                        [
                            1,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            1,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0
                        ]
                    ],
                    "▒": [
                        [
                            1,
                            0
                        ],
                        [
                            0,
                            0
                        ],
                        [
                            0,
                            1
                        ],
                        [
                            0,
                            0
                        ]
                    ],
                    "▓": [
                        [
                            0,
                            1
                        ],
                        [
                            1,
                            1
                        ],
                        [
                            1,
                            0
                        ],
                        [
                            1,
                            1
                        ]
                    ]
                };
                t45.boxDrawingDefinitions = {
                    "─": (i20 = {
                    }, i20[1] = "M0,.5 L1,.5", i20),
                    "━": (n16 = {
                    }, n16[3] = "M0,.5 L1,.5", n16),
                    "│": (o15 = {
                    }, o15[1] = "M.5,0 L.5,1", o15),
                    "┃": (s17 = {
                    }, s17[3] = "M.5,0 L.5,1", s17),
                    "┌": (a15 = {
                    }, a15[1] = "M0.5,1 L.5,.5 L1,.5", a15),
                    "┏": (c6 = {
                    }, c6[3] = "M0.5,1 L.5,.5 L1,.5", c6),
                    "┐": (l8 = {
                    }, l8[1] = "M0,.5 L.5,.5 L.5,1", l8),
                    "┓": (h7 = {
                    }, h7[3] = "M0,.5 L.5,.5 L.5,1", h7),
                    "└": (u5 = {
                    }, u5[1] = "M.5,0 L.5,.5 L1,.5", u5),
                    "┗": (f2 = {
                    }, f2[3] = "M.5,0 L.5,.5 L1,.5", f2),
                    "┘": (_1 = {
                    }, _1[1] = "M.5,0 L.5,.5 L0,.5", _1),
                    "┛": (d1 = {
                    }, d1[3] = "M.5,0 L.5,.5 L0,.5", d1),
                    "├": (p1 = {
                    }, p1[1] = "M.5,0 L.5,1 M.5,.5 L1,.5", p1),
                    "┣": (v1 = {
                    }, v1[3] = "M.5,0 L.5,1 M.5,.5 L1,.5", v1),
                    "┤": (g1 = {
                    }, g1[1] = "M.5,0 L.5,1 M.5,.5 L0,.5", g1),
                    "┫": (y1 = {
                    }, y1[3] = "M.5,0 L.5,1 M.5,.5 L0,.5", y1),
                    "┬": (m1 = {
                    }, m1[1] = "M0,.5 L1,.5 M.5,.5 L.5,1", m1),
                    "┳": (S1 = {
                    }, S1[3] = "M0,.5 L1,.5 M.5,.5 L.5,1", S1),
                    "┴": (C = {
                    }, C[1] = "M0,.5 L1,.5 M.5,.5 L.5,0", C),
                    "┻": (b = {
                    }, b[3] = "M0,.5 L1,.5 M.5,.5 L.5,0", b),
                    "┼": (w = {
                    }, w[1] = "M0,.5 L1,.5 M.5,0 L.5,1", w),
                    "╋": (L = {
                    }, L[3] = "M0,.5 L1,.5 M.5,0 L.5,1", L),
                    "╴": (E = {
                    }, E[1] = "M.5,.5 L0,.5", E),
                    "╸": (x = {
                    }, x[3] = "M.5,.5 L0,.5", x),
                    "╵": (M = {
                    }, M[1] = "M.5,.5 L.5,0", M),
                    "╹": (k = {
                    }, k[3] = "M.5,.5 L.5,0", k),
                    "╶": (A = {
                    }, A[1] = "M.5,.5 L1,.5", A),
                    "╺": (R = {
                    }, R[3] = "M.5,.5 L1,.5", R),
                    "╷": (T = {
                    }, T[1] = "M.5,.5 L.5,1", T),
                    "╻": (B = {
                    }, B[3] = "M.5,.5 L.5,1", B),
                    "═": (O = {
                    }, O[1] = function(e, t) {
                        return "M0," + (0.5 - t) + " L1," + (0.5 - t) + " M0," + (0.5 + t) + " L1," + (0.5 + t);
                    }, O),
                    "║": (D = {
                    }, D[1] = function(e, t) {
                        return "M" + (0.5 - e) + ",0 L" + (0.5 - e) + ",1 M" + (0.5 + e) + ",0 L" + (0.5 + e) + ",1";
                    }, D),
                    "╒": (P = {
                    }, P[1] = function(e, t) {
                        return "M.5,1 L.5," + (0.5 - t) + " L1," + (0.5 - t) + " M.5," + (0.5 + t) + " L1," + (0.5 + t);
                    }, P),
                    "╓": (I = {
                    }, I[1] = function(e, t) {
                        return "M" + (0.5 - e) + ",1 L" + (0.5 - e) + ",.5 L1,.5 M" + (0.5 + e) + ",.5 L" + (0.5 + e) + ",1";
                    }, I),
                    "╔": (H = {
                    }, H[1] = function(e, t) {
                        return "M1," + (0.5 - t) + " L" + (0.5 - e) + "," + (0.5 - t) + " L" + (0.5 - e) + ",1 M1," + (0.5 + t) + " L" + (0.5 + e) + "," + (0.5 + t) + " L" + (0.5 + e) + ",1";
                    }, H),
                    "╕": (F = {
                    }, F[1] = function(e, t) {
                        return "M0," + (0.5 - t) + " L.5," + (0.5 - t) + " L.5,1 M0," + (0.5 + t) + " L.5," + (0.5 + t);
                    }, F),
                    "╖": (j = {
                    }, j[1] = function(e, t) {
                        return "M" + (0.5 + e) + ",1 L" + (0.5 + e) + ",.5 L0,.5 M" + (0.5 - e) + ",.5 L" + (0.5 - e) + ",1";
                    }, j),
                    "╗": (W = {
                    }, W[1] = function(e, t) {
                        return "M0," + (0.5 + t) + " L" + (0.5 - e) + "," + (0.5 + t) + " L" + (0.5 - e) + ",1 M0," + (0.5 - t) + " L" + (0.5 + e) + "," + (0.5 - t) + " L" + (0.5 + e) + ",1";
                    }, W),
                    "╘": (U = {
                    }, U[1] = function(e, t) {
                        return "M.5,0 L.5," + (0.5 + t) + " L1," + (0.5 + t) + " M.5," + (0.5 - t) + " L1," + (0.5 - t);
                    }, U),
                    "╙": (q = {
                    }, q[1] = function(e, t) {
                        return "M1,.5 L" + (0.5 - e) + ",.5 L" + (0.5 - e) + ",0 M" + (0.5 + e) + ",.5 L" + (0.5 + e) + ",0";
                    }, q),
                    "╚": (N = {
                    }, N[1] = function(e, t) {
                        return "M1," + (0.5 - t) + " L" + (0.5 + e) + "," + (0.5 - t) + " L" + (0.5 + e) + ",0 M1," + (0.5 + t) + " L" + (0.5 - e) + "," + (0.5 + t) + " L" + (0.5 - e) + ",0";
                    }, N),
                    "╛": (z = {
                    }, z[1] = function(e, t) {
                        return "M0," + (0.5 + t) + " L.5," + (0.5 + t) + " L.5,0 M0," + (0.5 - t) + " L.5," + (0.5 - t);
                    }, z),
                    "╜": (K = {
                    }, K[1] = function(e, t) {
                        return "M0,.5 L" + (0.5 + e) + ",.5 L" + (0.5 + e) + ",0 M" + (0.5 - e) + ",.5 L" + (0.5 - e) + ",0";
                    }, K),
                    "╝": (G = {
                    }, G[1] = function(e, t) {
                        return "M0," + (0.5 - t) + " L" + (0.5 - e) + "," + (0.5 - t) + " L" + (0.5 - e) + ",0 M0," + (0.5 + t) + " L" + (0.5 + e) + "," + (0.5 + t) + " L" + (0.5 + e) + ",0";
                    }, G),
                    "╞": (V = {
                    }, V[1] = function(e, t) {
                        return "M.5,0 L.5,1 M.5," + (0.5 - t) + " L1," + (0.5 - t) + " M.5," + (0.5 + t) + " L1," + (0.5 + t);
                    }, V),
                    "╟": (X = {
                    }, X[1] = function(e, t) {
                        return "M" + (0.5 - e) + ",0 L" + (0.5 - e) + ",1 M" + (0.5 + e) + ",0 L" + (0.5 + e) + ",1 M" + (0.5 + e) + ",.5 L1,.5";
                    }, X),
                    "╠": (Y = {
                    }, Y[1] = function(e, t) {
                        return "M" + (0.5 - e) + ",0 L" + (0.5 - e) + ",1 M1," + (0.5 + t) + " L" + (0.5 + e) + "," + (0.5 + t) + " L" + (0.5 + e) + ",1 M1," + (0.5 - t) + " L" + (0.5 + e) + "," + (0.5 - t) + " L" + (0.5 + e) + ",0";
                    }, Y),
                    "╡": (Z = {
                    }, Z[1] = function(e, t) {
                        return "M.5,0 L.5,1 M0," + (0.5 - t) + " L.5," + (0.5 - t) + " M0," + (0.5 + t) + " L.5," + (0.5 + t);
                    }, Z),
                    "╢": (J = {
                    }, J[1] = function(e, t) {
                        return "M0,.5 L" + (0.5 - e) + ",.5 M" + (0.5 - e) + ",0 L" + (0.5 - e) + ",1 M" + (0.5 + e) + ",0 L" + (0.5 + e) + ",1";
                    }, J),
                    "╣": ($ = {
                    }, $[1] = function(e, t) {
                        return "M" + (0.5 + e) + ",0 L" + (0.5 + e) + ",1 M0," + (0.5 + t) + " L" + (0.5 - e) + "," + (0.5 + t) + " L" + (0.5 - e) + ",1 M0," + (0.5 - t) + " L" + (0.5 - e) + "," + (0.5 - t) + " L" + (0.5 - e) + ",0";
                    }, $),
                    "╤": (Q = {
                    }, Q[1] = function(e, t) {
                        return "M0," + (0.5 - t) + " L1," + (0.5 - t) + " M0," + (0.5 + t) + " L1," + (0.5 + t) + " M.5," + (0.5 + t) + " L.5,1";
                    }, Q),
                    "╥": (ee = {
                    }, ee[1] = function(e, t) {
                        return "M0,.5 L1,.5 M" + (0.5 - e) + ",.5 L" + (0.5 - e) + ",1 M" + (0.5 + e) + ",.5 L" + (0.5 + e) + ",1";
                    }, ee),
                    "╦": (te = {
                    }, te[1] = function(e, t) {
                        return "M0," + (0.5 - t) + " L1," + (0.5 - t) + " M0," + (0.5 + t) + " L" + (0.5 - e) + "," + (0.5 + t) + " L" + (0.5 - e) + ",1 M1," + (0.5 + t) + " L" + (0.5 + e) + "," + (0.5 + t) + " L" + (0.5 + e) + ",1";
                    }, te),
                    "╧": (re = {
                    }, re[1] = function(e, t) {
                        return "M.5,0 L.5," + (0.5 - t) + " M0," + (0.5 - t) + " L1," + (0.5 - t) + " M0," + (0.5 + t) + " L1," + (0.5 + t);
                    }, re),
                    "╨": (ie = {
                    }, ie[1] = function(e, t) {
                        return "M0,.5 L1,.5 M" + (0.5 - e) + ",.5 L" + (0.5 - e) + ",0 M" + (0.5 + e) + ",.5 L" + (0.5 + e) + ",0";
                    }, ie),
                    "╩": (ne = {
                    }, ne[1] = function(e, t) {
                        return "M0," + (0.5 + t) + " L1," + (0.5 + t) + " M0," + (0.5 - t) + " L" + (0.5 - e) + "," + (0.5 - t) + " L" + (0.5 - e) + ",0 M1," + (0.5 - t) + " L" + (0.5 + e) + "," + (0.5 - t) + " L" + (0.5 + e) + ",0";
                    }, ne),
                    "╪": (oe = {
                    }, oe[1] = function(e, t) {
                        return "M.5,0 L.5,1 M0," + (0.5 - t) + " L1," + (0.5 - t) + " M0," + (0.5 + t) + " L1," + (0.5 + t);
                    }, oe),
                    "╫": (se = {
                    }, se[1] = function(e, t) {
                        return "M0,.5 L1,.5 M" + (0.5 - e) + ",0 L" + (0.5 - e) + ",1 M" + (0.5 + e) + ",0 L" + (0.5 + e) + ",1";
                    }, se),
                    "╬": (ae = {
                    }, ae[1] = function(e, t) {
                        return "M0," + (0.5 + t) + " L" + (0.5 - e) + "," + (0.5 + t) + " L" + (0.5 - e) + ",1 M1," + (0.5 + t) + " L" + (0.5 + e) + "," + (0.5 + t) + " L" + (0.5 + e) + ",1 M0," + (0.5 - t) + " L" + (0.5 - e) + "," + (0.5 - t) + " L" + (0.5 - e) + ",0 M1," + (0.5 - t) + " L" + (0.5 + e) + "," + (0.5 - t) + " L" + (0.5 + e) + ",0";
                    }, ae),
                    "╱": (ce = {
                    }, ce[1] = "M1,0 L0,1", ce),
                    "╲": (le = {
                    }, le[1] = "M0,0 L1,1", le),
                    "╳": (he = {
                    }, he[1] = "M1,0 L0,1 M0,0 L1,1", he),
                    "╼": (ue = {
                    }, ue[1] = "M.5,.5 L0,.5", ue[3] = "M.5,.5 L1,.5", ue),
                    "╽": (fe = {
                    }, fe[1] = "M.5,.5 L.5,0", fe[3] = "M.5,.5 L.5,1", fe),
                    "╾": (_e = {
                    }, _e[1] = "M.5,.5 L1,.5", _e[3] = "M.5,.5 L0,.5", _e),
                    "╿": (de = {
                    }, de[1] = "M.5,.5 L.5,1", de[3] = "M.5,.5 L.5,0", de),
                    "┍": (pe = {
                    }, pe[1] = "M.5,.5 L.5,1", pe[3] = "M.5,.5 L1,.5", pe),
                    "┎": (ve = {
                    }, ve[1] = "M.5,.5 L1,.5", ve[3] = "M.5,.5 L.5,1", ve),
                    "┑": (ge = {
                    }, ge[1] = "M.5,.5 L.5,1", ge[3] = "M.5,.5 L0,.5", ge),
                    "┒": (ye = {
                    }, ye[1] = "M.5,.5 L0,.5", ye[3] = "M.5,.5 L.5,1", ye),
                    "┕": (me = {
                    }, me[1] = "M.5,.5 L.5,0", me[3] = "M.5,.5 L1,.5", me),
                    "┖": (Se = {
                    }, Se[1] = "M.5,.5 L1,.5", Se[3] = "M.5,.5 L.5,0", Se),
                    "┙": (Ce = {
                    }, Ce[1] = "M.5,.5 L.5,0", Ce[3] = "M.5,.5 L0,.5", Ce),
                    "┚": (be = {
                    }, be[1] = "M.5,.5 L0,.5", be[3] = "M.5,.5 L.5,0", be),
                    "┝": (we = {
                    }, we[1] = "M.5,0 L.5,1", we[3] = "M.5,.5 L1,.5", we),
                    "┞": (Le = {
                    }, Le[1] = "M0.5,1 L.5,.5 L1,.5", Le[3] = "M.5,.5 L.5,0", Le),
                    "┟": (Ee = {
                    }, Ee[1] = "M.5,0 L.5,.5 L1,.5", Ee[3] = "M.5,.5 L.5,1", Ee),
                    "┠": (xe = {
                    }, xe[1] = "M.5,.5 L1,.5", xe[3] = "M.5,0 L.5,1", xe),
                    "┡": (Me = {
                    }, Me[1] = "M.5,.5 L.5,1", Me[3] = "M.5,0 L.5,.5 L1,.5", Me),
                    "┢": (ke = {
                    }, ke[1] = "M.5,.5 L.5,0", ke[3] = "M0.5,1 L.5,.5 L1,.5", ke),
                    "┥": (Ae = {
                    }, Ae[1] = "M.5,0 L.5,1", Ae[3] = "M.5,.5 L0,.5", Ae),
                    "┦": (Re = {
                    }, Re[1] = "M0,.5 L.5,.5 L.5,1", Re[3] = "M.5,.5 L.5,0", Re),
                    "┧": (Te = {
                    }, Te[1] = "M.5,0 L.5,.5 L0,.5", Te[3] = "M.5,.5 L.5,1", Te),
                    "┨": (Be = {
                    }, Be[1] = "M.5,.5 L0,.5", Be[3] = "M.5,0 L.5,1", Be),
                    "┩": (Oe = {
                    }, Oe[1] = "M.5,.5 L.5,1", Oe[3] = "M.5,0 L.5,.5 L0,.5", Oe),
                    "┪": (De = {
                    }, De[1] = "M.5,.5 L.5,0", De[3] = "M0,.5 L.5,.5 L.5,1", De),
                    "┭": (Pe = {
                    }, Pe[1] = "M0.5,1 L.5,.5 L1,.5", Pe[3] = "M.5,.5 L0,.5", Pe),
                    "┮": (Ie = {
                    }, Ie[1] = "M0,.5 L.5,.5 L.5,1", Ie[3] = "M.5,.5 L1,.5", Ie),
                    "┯": (He = {
                    }, He[1] = "M.5,.5 L.5,1", He[3] = "M0,.5 L1,.5", He),
                    "┰": (Fe = {
                    }, Fe[1] = "M0,.5 L1,.5", Fe[3] = "M.5,.5 L.5,1", Fe),
                    "┱": (je = {
                    }, je[1] = "M.5,.5 L1,.5", je[3] = "M0,.5 L.5,.5 L.5,1", je),
                    "┲": (We = {
                    }, We[1] = "M.5,.5 L0,.5", We[3] = "M0.5,1 L.5,.5 L1,.5", We),
                    "┵": (Ue = {
                    }, Ue[1] = "M.5,0 L.5,.5 L1,.5", Ue[3] = "M.5,.5 L0,.5", Ue),
                    "┶": (qe = {
                    }, qe[1] = "M.5,0 L.5,.5 L0,.5", qe[3] = "M.5,.5 L1,.5", qe),
                    "┷": (Ne = {
                    }, Ne[1] = "M.5,.5 L.5,0", Ne[3] = "M0,.5 L1,.5", Ne),
                    "┸": (ze = {
                    }, ze[1] = "M0,.5 L1,.5", ze[3] = "M.5,.5 L.5,0", ze),
                    "┹": (Ke = {
                    }, Ke[1] = "M.5,.5 L1,.5", Ke[3] = "M.5,0 L.5,.5 L0,.5", Ke),
                    "┺": (Ge = {
                    }, Ge[1] = "M.5,.5 L0,.5", Ge[3] = "M.5,0 L.5,.5 L1,.5", Ge),
                    "┽": (Ve = {
                    }, Ve[1] = "M.5,0 L.5,1 M.5,.5 L1,.5", Ve[3] = "M.5,.5 L0,.5", Ve),
                    "┾": (Xe = {
                    }, Xe[1] = "M.5,0 L.5,1 M.5,.5 L0,.5", Xe[3] = "M.5,.5 L1,.5", Xe),
                    "┿": (Ye = {
                    }, Ye[1] = "M.5,0 L.5,1", Ye[3] = "M0,.5 L1,.5", Ye),
                    "╀": (Ze = {
                    }, Ze[1] = "M0,.5 L1,.5 M.5,.5 L.5,1", Ze[3] = "M.5,.5 L.5,0", Ze),
                    "╁": (Je = {
                    }, Je[1] = "M.5,.5 L.5,0 M0,.5 L1,.5", Je[3] = "M.5,.5 L.5,1", Je),
                    "╂": ($e = {
                    }, $e[1] = "M0,.5 L1,.5", $e[3] = "M.5,0 L.5,1", $e),
                    "╃": (Qe = {
                    }, Qe[1] = "M0.5,1 L.5,.5 L1,.5", Qe[3] = "M.5,0 L.5,.5 L0,.5", Qe),
                    "╄": (et = {
                    }, et[1] = "M0,.5 L.5,.5 L.5,1", et[3] = "M.5,0 L.5,.5 L1,.5", et),
                    "╅": (tt = {
                    }, tt[1] = "M.5,0 L.5,.5 L1,.5", tt[3] = "M0,.5 L.5,.5 L.5,1", tt),
                    "╆": (rt = {
                    }, rt[1] = "M.5,0 L.5,.5 L0,.5", rt[3] = "M0.5,1 L.5,.5 L1,.5", rt),
                    "╇": (it = {
                    }, it[1] = "M.5,.5 L.5,1", it[3] = "M.5,.5 L.5,0 M0,.5 L1,.5", it),
                    "╈": (nt = {
                    }, nt[1] = "M.5,.5 L.5,0", nt[3] = "M0,.5 L1,.5 M.5,.5 L.5,1", nt),
                    "╉": (ot = {
                    }, ot[1] = "M.5,.5 L1,.5", ot[3] = "M.5,0 L.5,1 M.5,.5 L0,.5", ot),
                    "╊": (st = {
                    }, st[1] = "M.5,.5 L0,.5", st[3] = "M.5,0 L.5,1 M.5,.5 L1,.5", st),
                    "╌": (at = {
                    }, at[1] = "M.1,.5 L.4,.5 M.6,.5 L.9,.5", at),
                    "╍": (ct = {
                    }, ct[3] = "M.1,.5 L.4,.5 M.6,.5 L.9,.5", ct),
                    "┄": (lt = {
                    }, lt[1] = "M.0667,.5 L.2667,.5 M.4,.5 L.6,.5 M.7333,.5 L.9333,.5", lt),
                    "┅": (ht = {
                    }, ht[3] = "M.0667,.5 L.2667,.5 M.4,.5 L.6,.5 M.7333,.5 L.9333,.5", ht),
                    "┈": (ut = {
                    }, ut[1] = "M.05,.5 L.2,.5 M.3,.5 L.45,.5 M.55,.5 L.7,.5 M.8,.5 L.95,.5", ut),
                    "┉": (ft = {
                    }, ft[3] = "M.05,.5 L.2,.5 M.3,.5 L.45,.5 M.55,.5 L.7,.5 M.8,.5 L.95,.5", ft),
                    "╎": (_t = {
                    }, _t[1] = "M.5,.1 L.5,.4 M.5,.6 L.5,.9", _t),
                    "╏": (dt = {
                    }, dt[3] = "M.5,.1 L.5,.4 M.5,.6 L.5,.9", dt),
                    "┆": (pt = {
                    }, pt[1] = "M.5,.0667 L.5,.2667 M.5,.4 L.5,.6 M.5,.7333 L.5,.9333", pt),
                    "┇": (vt = {
                    }, vt[3] = "M.5,.0667 L.5,.2667 M.5,.4 L.5,.6 M.5,.7333 L.5,.9333", vt),
                    "┊": (gt = {
                    }, gt[1] = "M.5,.05 L.5,.2 M.5,.3 L.5,.45 L.5,.55 M.5,.7 L.5,.95", gt),
                    "┋": (yt = {
                    }, yt[3] = "M.5,.05 L.5,.2 M.5,.3 L.5,.45 L.5,.55 M.5,.7 L.5,.95", yt),
                    "╭": (mt = {
                    }, mt[1] = "C.5,1,.5,.5,1,.5", mt),
                    "╮": (St = {
                    }, St[1] = "C.5,1,.5,.5,0,.5", St),
                    "╯": (Ct = {
                    }, Ct[1] = "C.5,0,.5,.5,0,.5", Ct),
                    "╰": (bt = {
                    }, bt[1] = "C.5,0,.5,.5,1,.5", bt)
                }, t45.tryDrawCustomChar = function(e62, r29, i21, n17, o16, s18) {
                    var a16 = t45.blockElementDefinitions[r29];
                    if (a16) return (function(e, t, r, i, n, o) {
                        for(var s = 0; s < t.length; s++){
                            var a = t[s], c = n / 8, l = o / 8;
                            e.fillRect(r + a.x * c, i + a.y * l, a.w * c, a.h * l);
                        }
                    })(e62, a16, i21, n17, o16, s18), !0;
                    var c7 = Lt[r29];
                    if (c7) return (function(e63, t, r, i, n, o) {
                        var s, a = Et.get(t);
                        a || (a = new Map, Et.set(t, a));
                        var c = e63.fillStyle;
                        if ("string" != typeof c) throw new Error('Unexpected fillStyle type "' + c + '"');
                        var l = a.get(c);
                        if (!l) {
                            var h = t[0].length, u = t.length, f = document.createElement("canvas");
                            f.width = h, f.height = u;
                            var _ = (0, wt.throwIfFalsy)(f.getContext("2d")), d = new ImageData(h, u), p = void 0, v = void 0, g = void 0, y = void 0;
                            if (c.startsWith("#")) p = parseInt(c.substr(1, 2), 16), v = parseInt(c.substr(3, 2), 16), g = parseInt(c.substr(5, 2), 16), y = c.length > 7 && parseInt(c.substr(7, 2), 16) || 1;
                            else {
                                if (!c.startsWith("rgba")) throw new Error('Unexpected fillStyle color format "' + c + '" when drawing pattern glyph');
                                p = (s = c.substring(5, c.length - 1).split(",").map(function(e) {
                                    return parseFloat(e);
                                }))[0], v = s[1], g = s[2], y = s[3];
                            }
                            for(var m = 0; m < u; m++)for(var S = 0; S < h; S++)d.data[4 * (m * h + S)] = p, d.data[4 * (m * h + S) + 1] = v, d.data[4 * (m * h + S) + 2] = g, d.data[4 * (m * h + S) + 3] = t[m][S] * (255 * y);
                            _.putImageData(d, 0, 0), l = (0, wt.throwIfFalsy)(e63.createPattern(f, null)), a.set(c, l);
                        }
                        e63.fillStyle = l, e63.fillRect(r, i, n, o);
                    })(e62, c7, i21, n17, o16, s18), !0;
                    var l9 = t45.boxDrawingDefinitions[r29];
                    return !!l9 && ((function(e, t, r, i, n, o) {
                        e.strokeStyle = e.fillStyle;
                        for(var s = 0, a = Object.entries(t); s < a.length; s++){
                            var c = a[s], l = c[0], h = c[1];
                            e.beginPath(), e.lineWidth = window.devicePixelRatio * Number.parseInt(l);
                            for(var u = 0, f = ("function" == typeof h ? h(0.15, 0.15 / o * n) : h).split(" "); u < f.length; u++){
                                var _ = f[u], d = _[0], p = Mt[d];
                                if (p) {
                                    var v = _.substring(1).split(",");
                                    v[0] && v[1] && p(e, kt(v, n, o, r, i));
                                } else console.error('Could not find drawing instructions for "' + d + '"');
                            }
                            e.stroke(), e.closePath();
                        }
                    })(e62, l9, i21, n17, o16, s18), !0);
                };
                var Et = new Map;
                function xt(e, t, r) {
                    return void 0 === r && (r = 0), Math.max(Math.min(e, t), r);
                }
                var Mt = {
                    C: function(e, t) {
                        return e.bezierCurveTo(t[0], t[1], t[2], t[3], t[4], t[5]);
                    },
                    L: function(e, t) {
                        return e.lineTo(t[0], t[1]);
                    },
                    M: function(e, t) {
                        return e.moveTo(t[0], t[1]);
                    }
                };
                function kt(e64, t, r, i, n) {
                    var o = e64.map(function(e) {
                        return parseFloat(e) || parseInt(e);
                    });
                    if (o.length < 2) throw new Error("Too few arguments for instruction");
                    for(var s = 0; s < o.length; s += 2)o[s] *= t, 0 !== o[s] && (o[s] = xt(Math.round(o[s] + 0.5) - 0.5, t, 0)), o[s] += i;
                    for(var a = 1; a < o.length; a += 2)o[a] *= r, 0 !== o[a] && (o[a] = xt(Math.round(o[a] + 0.5) - 0.5, r, 0)), o[a] += n;
                    return o;
                }
            },
            3700: (e65, t46)=>{
                Object.defineProperty(t46, "__esModule", {
                    value: !0
                }), t46.GridCache = void 0;
                var r30 = function() {
                    function e66() {
                        this.cache = [];
                    }
                    return e66.prototype.resize = function(e, t) {
                        for(var r = 0; r < e; r++){
                            this.cache.length <= r && this.cache.push([]);
                            for(var i = this.cache[r].length; i < t; i++)this.cache[r].push(void 0);
                            this.cache[r].length = t;
                        }
                        this.cache.length = e;
                    }, e66.prototype.clear = function() {
                        for(var e = 0; e < this.cache.length; e++)for(var t = 0; t < this.cache[e].length; t++)this.cache[e][t] = void 0;
                    }, e66;
                }();
                t46.GridCache = r30;
            },
            5098: function(e67, t47, r31) {
                var i22, n18 = this && this.__extends || (i22 = function(e68, t48) {
                    return i22 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i22(e68, t48);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i22(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o17 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s19 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t47, "__esModule", {
                    value: !0
                }), t47.LinkRenderLayer = void 0;
                var a17 = r31(1546), c8 = r31(8803), l10 = r31(2040), h = r31(2585), u = function(e69) {
                    function t49(t, r, i, n, o, s, a, c) {
                        var l = e69.call(this, t, "link", r, !0, i, n, a, c) || this;
                        return o.onShowLinkUnderline(function(e) {
                            return l._onShowLinkUnderline(e);
                        }), o.onHideLinkUnderline(function(e) {
                            return l._onHideLinkUnderline(e);
                        }), s.onShowLinkUnderline(function(e) {
                            return l._onShowLinkUnderline(e);
                        }), s.onHideLinkUnderline(function(e) {
                            return l._onHideLinkUnderline(e);
                        }), l;
                    }
                    return n18(t49, e69), t49.prototype.resize = function(t) {
                        e69.prototype.resize.call(this, t), this._state = void 0;
                    }, t49.prototype.reset = function() {
                        this._clearCurrentLink();
                    }, t49.prototype._clearCurrentLink = function() {
                        if (this._state) {
                            this._clearCells(this._state.x1, this._state.y1, this._state.cols - this._state.x1, 1);
                            var e = this._state.y2 - this._state.y1 - 1;
                            e > 0 && this._clearCells(0, this._state.y1 + 1, this._state.cols, e), this._clearCells(0, this._state.y2, this._state.x2, 1), this._state = void 0;
                        }
                    }, t49.prototype._onShowLinkUnderline = function(e) {
                        if (e.fg === c8.INVERTED_DEFAULT_COLOR ? this._ctx.fillStyle = this._colors.background.css : e.fg && (0, l10.is256Color)(e.fg) ? this._ctx.fillStyle = this._colors.ansi[e.fg].css : this._ctx.fillStyle = this._colors.foreground.css, e.y1 === e.y2) this._fillBottomLineAtCells(e.x1, e.y1, e.x2 - e.x1);
                        else {
                            this._fillBottomLineAtCells(e.x1, e.y1, e.cols - e.x1);
                            for(var t = e.y1 + 1; t < e.y2; t++)this._fillBottomLineAtCells(0, t, e.cols);
                            this._fillBottomLineAtCells(0, e.y2, e.x2);
                        }
                        this._state = e;
                    }, t49.prototype._onHideLinkUnderline = function(e) {
                        this._clearCurrentLink();
                    }, o17([
                        s19(6, h.IBufferService),
                        s19(7, h.IOptionsService)
                    ], t49);
                }(a17.BaseRenderLayer);
                t47.LinkRenderLayer = u;
            },
            3525: function(e70, t50, r32) {
                var i23, n19 = this && this.__extends || (i23 = function(e71, t51) {
                    return i23 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i23(e71, t51);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i23(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o18 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s20 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t50, "__esModule", {
                    value: !0
                }), t50.Renderer = void 0;
                var a18 = r32(9596), c = r32(4149), l = r32(2512), h = r32(5098), u6 = r32(844), f3 = r32(4725), _2 = r32(2585), d2 = r32(1420), p = r32(8460), v = 1, g = function(e72) {
                    function t52(t, r, i, n, o, s, u, f) {
                        var _ = e72.call(this) || this;
                        _._colors = t, _._screenElement = r, _._bufferService = s, _._charSizeService = u, _._optionsService = f, _._id = v++, _._onRequestRedraw = new p.EventEmitter;
                        var d = _._optionsService.options.allowTransparency;
                        return _._renderLayers = [
                            o.createInstance(a18.TextRenderLayer, _._screenElement, 0, _._colors, d, _._id),
                            o.createInstance(c.SelectionRenderLayer, _._screenElement, 1, _._colors, _._id),
                            o.createInstance(h.LinkRenderLayer, _._screenElement, 2, _._colors, _._id, i, n),
                            o.createInstance(l.CursorRenderLayer, _._screenElement, 3, _._colors, _._id, _._onRequestRedraw)
                        ], _.dimensions = {
                            scaledCharWidth: 0,
                            scaledCharHeight: 0,
                            scaledCellWidth: 0,
                            scaledCellHeight: 0,
                            scaledCharLeft: 0,
                            scaledCharTop: 0,
                            scaledCanvasWidth: 0,
                            scaledCanvasHeight: 0,
                            canvasWidth: 0,
                            canvasHeight: 0,
                            actualCellWidth: 0,
                            actualCellHeight: 0
                        }, _._devicePixelRatio = window.devicePixelRatio, _._updateDimensions(), _.onOptionsChanged(), _;
                    }
                    return n19(t52, e72), Object.defineProperty(t52.prototype, "onRequestRedraw", {
                        get: function() {
                            return this._onRequestRedraw.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t52.prototype.dispose = function() {
                        for(var t = 0, r = this._renderLayers; t < r.length; t++)r[t].dispose();
                        e72.prototype.dispose.call(this), (0, d2.removeTerminalFromCache)(this._id);
                    }, t52.prototype.onDevicePixelRatioChange = function() {
                        this._devicePixelRatio !== window.devicePixelRatio && (this._devicePixelRatio = window.devicePixelRatio, this.onResize(this._bufferService.cols, this._bufferService.rows));
                    }, t52.prototype.setColors = function(e) {
                        this._colors = e;
                        for(var t = 0, r = this._renderLayers; t < r.length; t++){
                            var i = r[t];
                            i.setColors(this._colors), i.reset();
                        }
                    }, t52.prototype.onResize = function(e, t) {
                        this._updateDimensions();
                        for(var r = 0, i = this._renderLayers; r < i.length; r++)i[r].resize(this.dimensions);
                        this._screenElement.style.width = this.dimensions.canvasWidth + "px", this._screenElement.style.height = this.dimensions.canvasHeight + "px";
                    }, t52.prototype.onCharSizeChanged = function() {
                        this.onResize(this._bufferService.cols, this._bufferService.rows);
                    }, t52.prototype.onBlur = function() {
                        this._runOperation(function(e) {
                            return e.onBlur();
                        });
                    }, t52.prototype.onFocus = function() {
                        this._runOperation(function(e) {
                            return e.onFocus();
                        });
                    }, t52.prototype.onSelectionChanged = function(e, t, r) {
                        void 0 === r && (r = !1), this._runOperation(function(i) {
                            return i.onSelectionChanged(e, t, r);
                        });
                    }, t52.prototype.onCursorMove = function() {
                        this._runOperation(function(e) {
                            return e.onCursorMove();
                        });
                    }, t52.prototype.onOptionsChanged = function() {
                        this._runOperation(function(e) {
                            return e.onOptionsChanged();
                        });
                    }, t52.prototype.clear = function() {
                        this._runOperation(function(e) {
                            return e.reset();
                        });
                    }, t52.prototype._runOperation = function(e) {
                        for(var t = 0, r = this._renderLayers; t < r.length; t++)e(r[t]);
                    }, t52.prototype.renderRows = function(e, t) {
                        for(var r = 0, i = this._renderLayers; r < i.length; r++)i[r].onGridChanged(e, t);
                    }, t52.prototype.clearTextureAtlas = function() {
                        for(var e = 0, t = this._renderLayers; e < t.length; e++)t[e].clearTextureAtlas();
                    }, t52.prototype._updateDimensions = function() {
                        this._charSizeService.hasValidSize && (this.dimensions.scaledCharWidth = Math.floor(this._charSizeService.width * window.devicePixelRatio), this.dimensions.scaledCharHeight = Math.ceil(this._charSizeService.height * window.devicePixelRatio), this.dimensions.scaledCellHeight = Math.floor(this.dimensions.scaledCharHeight * this._optionsService.options.lineHeight), this.dimensions.scaledCharTop = 1 === this._optionsService.options.lineHeight ? 0 : Math.round((this.dimensions.scaledCellHeight - this.dimensions.scaledCharHeight) / 2), this.dimensions.scaledCellWidth = this.dimensions.scaledCharWidth + Math.round(this._optionsService.options.letterSpacing), this.dimensions.scaledCharLeft = Math.floor(this._optionsService.options.letterSpacing / 2), this.dimensions.scaledCanvasHeight = this._bufferService.rows * this.dimensions.scaledCellHeight, this.dimensions.scaledCanvasWidth = this._bufferService.cols * this.dimensions.scaledCellWidth, this.dimensions.canvasHeight = Math.round(this.dimensions.scaledCanvasHeight / window.devicePixelRatio), this.dimensions.canvasWidth = Math.round(this.dimensions.scaledCanvasWidth / window.devicePixelRatio), this.dimensions.actualCellHeight = this.dimensions.canvasHeight / this._bufferService.rows, this.dimensions.actualCellWidth = this.dimensions.canvasWidth / this._bufferService.cols);
                    }, o18([
                        s20(4, _2.IInstantiationService),
                        s20(5, _2.IBufferService),
                        s20(6, f3.ICharSizeService),
                        s20(7, _2.IOptionsService)
                    ], t52);
                }(u6.Disposable);
                t50.Renderer = g;
            },
            1752: (e73, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.throwIfFalsy = void 0, t.throwIfFalsy = function(e) {
                    if (!e) throw new Error("value must not be falsy");
                    return e;
                };
            },
            4149: function(e74, t53, r33) {
                var i24, n20 = this && this.__extends || (i24 = function(e75, t54) {
                    return i24 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i24(e75, t54);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i24(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o19 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s21 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t53, "__esModule", {
                    value: !0
                }), t53.SelectionRenderLayer = void 0;
                var a19 = r33(1546), c9 = r33(2585), l11 = function(e76) {
                    function t55(t, r, i, n, o, s) {
                        var a = e76.call(this, t, "selection", r, !0, i, n, o, s) || this;
                        return a._clearState(), a;
                    }
                    return n20(t55, e76), t55.prototype._clearState = function() {
                        this._state = {
                            start: void 0,
                            end: void 0,
                            columnSelectMode: void 0,
                            ydisp: void 0
                        };
                    }, t55.prototype.resize = function(t) {
                        e76.prototype.resize.call(this, t), this._clearState();
                    }, t55.prototype.reset = function() {
                        this._state.start && this._state.end && (this._clearState(), this._clearAll());
                    }, t55.prototype.onSelectionChanged = function(e, t, r) {
                        if (this._didStateChange(e, t, r, this._bufferService.buffer.ydisp)) {
                            if (this._clearAll(), e && t) {
                                var i = e[1] - this._bufferService.buffer.ydisp, n = t[1] - this._bufferService.buffer.ydisp, o = Math.max(i, 0), s = Math.min(n, this._bufferService.rows - 1);
                                if (o >= this._bufferService.rows || s < 0) this._state.ydisp = this._bufferService.buffer.ydisp;
                                else {
                                    if (this._ctx.fillStyle = this._colors.selectionTransparent.css, r) {
                                        var a = e[0], c = t[0] - a, l = s - o + 1;
                                        this._fillCells(a, o, c, l);
                                    } else {
                                        a = i === o ? e[0] : 0;
                                        var h = o === n ? t[0] : this._bufferService.cols;
                                        this._fillCells(a, o, h - a, 1);
                                        var u = Math.max(s - o - 1, 0);
                                        if (this._fillCells(0, o + 1, this._bufferService.cols, u), o !== s) {
                                            var f = n === s ? t[0] : this._bufferService.cols;
                                            this._fillCells(0, s, f, 1);
                                        }
                                    }
                                    this._state.start = [
                                        e[0],
                                        e[1]
                                    ], this._state.end = [
                                        t[0],
                                        t[1]
                                    ], this._state.columnSelectMode = r, this._state.ydisp = this._bufferService.buffer.ydisp;
                                }
                            } else this._clearState();
                        }
                    }, t55.prototype._didStateChange = function(e, t, r, i) {
                        return !this._areCoordinatesEqual(e, this._state.start) || !this._areCoordinatesEqual(t, this._state.end) || r !== this._state.columnSelectMode || i !== this._state.ydisp;
                    }, t55.prototype._areCoordinatesEqual = function(e, t) {
                        return !(!e || !t) && e[0] === t[0] && e[1] === t[1];
                    }, o19([
                        s21(4, c9.IBufferService),
                        s21(5, c9.IOptionsService)
                    ], t55);
                }(a19.BaseRenderLayer);
                t53.SelectionRenderLayer = l11;
            },
            9596: function(e77, t56, r34) {
                var i25, n21 = this && this.__extends || (i25 = function(e78, t57) {
                    return i25 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i25(e78, t57);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i25(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o20 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s22 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t56, "__esModule", {
                    value: !0
                }), t56.TextRenderLayer = void 0;
                var a20 = r34(3700), c10 = r34(1546), l12 = r34(3734), h8 = r34(643), u7 = r34(511), f4 = r34(2585), _ = r34(4725), d = r34(4269), p = function(e79) {
                    function t58(t, r, i, n, o, s, c, l) {
                        var h = e79.call(this, t, "text", r, n, i, o, s, c) || this;
                        return h._characterJoinerService = l, h._characterWidth = 0, h._characterFont = "", h._characterOverlapCache = {
                        }, h._workCell = new u7.CellData, h._state = new a20.GridCache, h;
                    }
                    return n21(t58, e79), t58.prototype.resize = function(t) {
                        e79.prototype.resize.call(this, t);
                        var r = this._getFont(!1, !1);
                        this._characterWidth === t.scaledCharWidth && this._characterFont === r || (this._characterWidth = t.scaledCharWidth, this._characterFont = r, this._characterOverlapCache = {
                        }), this._state.clear(), this._state.resize(this._bufferService.cols, this._bufferService.rows);
                    }, t58.prototype.reset = function() {
                        this._state.clear(), this._clearAll();
                    }, t58.prototype._forEachCell = function(e, t, r) {
                        for(var i = e; i <= t; i++)for(var n = i + this._bufferService.buffer.ydisp, o = this._bufferService.buffer.lines.get(n), s = this._characterJoinerService.getJoinedCharacters(n), a = 0; a < this._bufferService.cols; a++){
                            o.loadCell(a, this._workCell);
                            var c = this._workCell, l = !1, u = a;
                            if (0 !== c.getWidth()) {
                                if (s.length > 0 && a === s[0][0]) {
                                    l = !0;
                                    var f = s.shift();
                                    c = new d.JoinedCellData(this._workCell, o.translateToString(!0, f[0], f[1]), f[1] - f[0]), u = f[1] - 1;
                                }
                                !l && this._isOverlapping(c) && u < o.length - 1 && o.getCodePoint(u + 1) === h8.NULL_CELL_CODE && (c.content &= -12582913, c.content |= 8388608), r(c, a, i), a = u;
                            }
                        }
                    }, t58.prototype._drawBackground = function(e80, t59) {
                        var r = this, i = this._ctx, n = this._bufferService.cols, o = 0, s = 0, a = null;
                        i.save(), this._forEachCell(e80, t59, function(e, t, c) {
                            var h = null;
                            e.isInverse() ? h = e.isFgDefault() ? r._colors.foreground.css : e.isFgRGB() ? "rgb(" + l12.AttributeData.toColorRGB(e.getFgColor()).join(",") + ")" : r._colors.ansi[e.getFgColor()].css : e.isBgRGB() ? h = "rgb(" + l12.AttributeData.toColorRGB(e.getBgColor()).join(",") + ")" : e.isBgPalette() && (h = r._colors.ansi[e.getBgColor()].css), null === a && (o = t, s = c), c !== s ? (i.fillStyle = a || "", r._fillCells(o, s, n - o, 1), o = t, s = c) : a !== h && (i.fillStyle = a || "", r._fillCells(o, s, t - o, 1), o = t, s = c), a = h;
                        }), null !== a && (i.fillStyle = a, this._fillCells(o, s, n - o, 1)), i.restore();
                    }, t58.prototype._drawForeground = function(e81, t60) {
                        var r = this;
                        this._forEachCell(e81, t60, function(e, t, i) {
                            if (!e.isInvisible() && (r._drawChars(e, t, i), e.isUnderline() || e.isStrikethrough())) {
                                if (r._ctx.save(), e.isInverse()) {
                                    if (e.isBgDefault()) r._ctx.fillStyle = r._colors.background.css;
                                    else if (e.isBgRGB()) r._ctx.fillStyle = "rgb(" + l12.AttributeData.toColorRGB(e.getBgColor()).join(",") + ")";
                                    else {
                                        var n = e.getBgColor();
                                        r._optionsService.options.drawBoldTextInBrightColors && e.isBold() && n < 8 && (n += 8), r._ctx.fillStyle = r._colors.ansi[n].css;
                                    }
                                } else if (e.isFgDefault()) r._ctx.fillStyle = r._colors.foreground.css;
                                else if (e.isFgRGB()) r._ctx.fillStyle = "rgb(" + l12.AttributeData.toColorRGB(e.getFgColor()).join(",") + ")";
                                else {
                                    var o = e.getFgColor();
                                    r._optionsService.options.drawBoldTextInBrightColors && e.isBold() && o < 8 && (o += 8), r._ctx.fillStyle = r._colors.ansi[o].css;
                                }
                                e.isStrikethrough() && r._fillMiddleLineAtCells(t, i, e.getWidth()), e.isUnderline() && r._fillBottomLineAtCells(t, i, e.getWidth()), r._ctx.restore();
                            }
                        });
                    }, t58.prototype.onGridChanged = function(e, t) {
                        0 !== this._state.cache.length && (this._charAtlas && this._charAtlas.beginFrame(), this._clearCells(0, e, this._bufferService.cols, t - e + 1), this._drawBackground(e, t), this._drawForeground(e, t));
                    }, t58.prototype.onOptionsChanged = function() {
                        this._setTransparency(this._optionsService.options.allowTransparency);
                    }, t58.prototype._isOverlapping = function(e) {
                        if (1 !== e.getWidth()) return !1;
                        if (e.getCode() < 256) return !1;
                        var t = e.getChars();
                        if (this._characterOverlapCache.hasOwnProperty(t)) return this._characterOverlapCache[t];
                        this._ctx.save(), this._ctx.font = this._characterFont;
                        var r = Math.floor(this._ctx.measureText(t).width) > this._characterWidth;
                        return this._ctx.restore(), this._characterOverlapCache[t] = r, r;
                    }, o20([
                        s22(5, f4.IBufferService),
                        s22(6, f4.IOptionsService),
                        s22(7, _.ICharacterJoinerService)
                    ], t58);
                }(c10.BaseRenderLayer);
                t56.TextRenderLayer = p;
            },
            9616: (e82, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.BaseCharAtlas = void 0;
                var r = function() {
                    function e() {
                        this._didWarmUp = !1;
                    }
                    return e.prototype.dispose = function() {
                    }, e.prototype.warmUp = function() {
                        this._didWarmUp || (this._doWarmUp(), this._didWarmUp = !0);
                    }, e.prototype._doWarmUp = function() {
                    }, e.prototype.clear = function() {
                    }, e.prototype.beginFrame = function() {
                    }, e;
                }();
                t.BaseCharAtlas = r;
            },
            1420: (e83, t61, r35)=>{
                Object.defineProperty(t61, "__esModule", {
                    value: !0
                }), t61.removeTerminalFromCache = t61.acquireCharAtlas = void 0;
                var i = r35(2040), n = r35(1906), o = [];
                t61.acquireCharAtlas = function(e, t, r, s, a) {
                    for(var c = (0, i.generateConfig)(s, a, e, r), l = 0; l < o.length; l++){
                        var h = (u = o[l]).ownedBy.indexOf(t);
                        if (h >= 0) {
                            if ((0, i.configEquals)(u.config, c)) return u.atlas;
                            1 === u.ownedBy.length ? (u.atlas.dispose(), o.splice(l, 1)) : u.ownedBy.splice(h, 1);
                            break;
                        }
                    }
                    for(l = 0; l < o.length; l++){
                        var u = o[l];
                        if ((0, i.configEquals)(u.config, c)) return u.ownedBy.push(t), u.atlas;
                    }
                    var f = {
                        atlas: new n.DynamicCharAtlas(document, c),
                        config: c,
                        ownedBy: [
                            t
                        ]
                    };
                    return o.push(f), f.atlas;
                }, t61.removeTerminalFromCache = function(e) {
                    for(var t = 0; t < o.length; t++){
                        var r = o[t].ownedBy.indexOf(e);
                        if (-1 !== r) {
                            1 === o[t].ownedBy.length ? (o[t].atlas.dispose(), o.splice(t, 1)) : o[t].ownedBy.splice(r, 1);
                            break;
                        }
                    }
                };
            },
            2040: function(e84, t62, r36) {
                var i26 = this && this.__spreadArray || function(e, t, r) {
                    if (r || 2 === arguments.length) for(var i, n = 0, o = t.length; n < o; n++)!i && n in t || (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
                    return e.concat(i || Array.prototype.slice.call(t));
                };
                Object.defineProperty(t62, "__esModule", {
                    value: !0
                }), t62.is256Color = t62.configEquals = t62.generateConfig = void 0;
                var n22 = r36(643);
                t62.generateConfig = function(e, t, r, n) {
                    var o = {
                        foreground: n.foreground,
                        background: n.background,
                        cursor: void 0,
                        cursorAccent: void 0,
                        selection: void 0,
                        ansi: i26([], n.ansi, !0)
                    };
                    return {
                        devicePixelRatio: window.devicePixelRatio,
                        scaledCharWidth: e,
                        scaledCharHeight: t,
                        fontFamily: r.fontFamily,
                        fontSize: r.fontSize,
                        fontWeight: r.fontWeight,
                        fontWeightBold: r.fontWeightBold,
                        allowTransparency: r.allowTransparency,
                        colors: o
                    };
                }, t62.configEquals = function(e, t) {
                    for(var r = 0; r < e.colors.ansi.length; r++)if (e.colors.ansi[r].rgba !== t.colors.ansi[r].rgba) return !1;
                    return e.devicePixelRatio === t.devicePixelRatio && e.fontFamily === t.fontFamily && e.fontSize === t.fontSize && e.fontWeight === t.fontWeight && e.fontWeightBold === t.fontWeightBold && e.allowTransparency === t.allowTransparency && e.scaledCharWidth === t.scaledCharWidth && e.scaledCharHeight === t.scaledCharHeight && e.colors.foreground === t.colors.foreground && e.colors.background === t.colors.background;
                }, t62.is256Color = function(e) {
                    return e < n22.DEFAULT_COLOR;
                };
            },
            8803: (e, t, r)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.CHAR_ATLAS_CELL_SPACING = t.TEXT_BASELINE = t.DIM_OPACITY = t.INVERTED_DEFAULT_COLOR = void 0;
                var i = r(6114);
                t.INVERTED_DEFAULT_COLOR = 257, t.DIM_OPACITY = 0.5, t.TEXT_BASELINE = i.isFirefox ? "bottom" : "ideographic", t.CHAR_ATLAS_CELL_SPACING = 1;
            },
            1906: function(e85, t63, r37) {
                var i27, n23 = this && this.__extends || (i27 = function(e86, t64) {
                    return i27 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i27(e86, t64);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i27(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                });
                Object.defineProperty(t63, "__esModule", {
                    value: !0
                }), t63.NoneCharAtlas = t63.DynamicCharAtlas = t63.getGlyphCacheKey = void 0;
                var o21 = r37(8803), s23 = r37(9616), a21 = r37(5680), c11 = r37(7001), l13 = r37(6114), h9 = r37(1752), u8 = r37(4774), f = 1024, _ = 1024, d = {
                    css: "rgba(0, 0, 0, 0)",
                    rgba: 0
                };
                function p(e) {
                    return e.code << 21 | e.bg << 12 | e.fg << 3 | (e.bold ? 0 : 4) + (e.dim ? 0 : 2) + (e.italic ? 0 : 1);
                }
                t63.getGlyphCacheKey = p;
                var v = function(e87) {
                    function t65(t, r) {
                        var i = e87.call(this) || this;
                        i._config = r, i._drawToCacheCount = 0, i._glyphsWaitingOnBitmap = [], i._bitmapCommitTimeout = null, i._bitmap = null, i._cacheCanvas = t.createElement("canvas"), i._cacheCanvas.width = f, i._cacheCanvas.height = _, i._cacheCtx = (0, h9.throwIfFalsy)(i._cacheCanvas.getContext("2d", {
                            alpha: !0
                        }));
                        var n = t.createElement("canvas");
                        n.width = i._config.scaledCharWidth, n.height = i._config.scaledCharHeight, i._tmpCtx = (0, h9.throwIfFalsy)(n.getContext("2d", {
                            alpha: i._config.allowTransparency
                        })), i._width = Math.floor(f / i._config.scaledCharWidth), i._height = Math.floor(_ / i._config.scaledCharHeight);
                        var o = i._width * i._height;
                        return i._cacheMap = new c11.LRUMap(o), i._cacheMap.prealloc(o), i;
                    }
                    return n23(t65, e87), t65.prototype.dispose = function() {
                        null !== this._bitmapCommitTimeout && (window.clearTimeout(this._bitmapCommitTimeout), this._bitmapCommitTimeout = null);
                    }, t65.prototype.beginFrame = function() {
                        this._drawToCacheCount = 0;
                    }, t65.prototype.clear = function() {
                        if (this._cacheMap.size > 0) {
                            var e = this._width * this._height;
                            this._cacheMap = new c11.LRUMap(e), this._cacheMap.prealloc(e);
                        }
                        this._cacheCtx.clearRect(0, 0, f, _), this._tmpCtx.clearRect(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight);
                    }, t65.prototype.draw = function(e, t, r, i) {
                        if (32 === t.code) return !0;
                        if (!this._canCache(t)) return !1;
                        var n = p(t), o = this._cacheMap.get(n);
                        if (null != o) return this._drawFromCache(e, o, r, i), !0;
                        if (this._drawToCacheCount < 100) {
                            var s;
                            s = this._cacheMap.size < this._cacheMap.capacity ? this._cacheMap.size : this._cacheMap.peek().index;
                            var a = this._drawToCache(t, s);
                            return this._cacheMap.set(n, a), this._drawFromCache(e, a, r, i), !0;
                        }
                        return !1;
                    }, t65.prototype._canCache = function(e) {
                        return e.code < 256;
                    }, t65.prototype._toCoordinateX = function(e) {
                        return e % this._width * this._config.scaledCharWidth;
                    }, t65.prototype._toCoordinateY = function(e) {
                        return Math.floor(e / this._width) * this._config.scaledCharHeight;
                    }, t65.prototype._drawFromCache = function(e, t, r, i) {
                        if (!t.isEmpty) {
                            var n = this._toCoordinateX(t.index), o = this._toCoordinateY(t.index);
                            e.drawImage(t.inBitmap ? this._bitmap : this._cacheCanvas, n, o, this._config.scaledCharWidth, this._config.scaledCharHeight, r, i, this._config.scaledCharWidth, this._config.scaledCharHeight);
                        }
                    }, t65.prototype._getColorFromAnsiIndex = function(e) {
                        return e < this._config.colors.ansi.length ? this._config.colors.ansi[e] : a21.DEFAULT_ANSI_COLORS[e];
                    }, t65.prototype._getBackgroundColor = function(e) {
                        return this._config.allowTransparency ? d : e.bg === o21.INVERTED_DEFAULT_COLOR ? this._config.colors.foreground : e.bg < 256 ? this._getColorFromAnsiIndex(e.bg) : this._config.colors.background;
                    }, t65.prototype._getForegroundColor = function(e) {
                        return e.fg === o21.INVERTED_DEFAULT_COLOR ? u8.color.opaque(this._config.colors.background) : e.fg < 256 ? this._getColorFromAnsiIndex(e.fg) : this._config.colors.foreground;
                    }, t65.prototype._drawToCache = function(e, t) {
                        this._drawToCacheCount++, this._tmpCtx.save();
                        var r = this._getBackgroundColor(e);
                        this._tmpCtx.globalCompositeOperation = "copy", this._tmpCtx.fillStyle = r.css, this._tmpCtx.fillRect(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight), this._tmpCtx.globalCompositeOperation = "source-over";
                        var i = e.bold ? this._config.fontWeightBold : this._config.fontWeight, n = e.italic ? "italic" : "";
                        this._tmpCtx.font = n + " " + i + " " + this._config.fontSize * this._config.devicePixelRatio + "px " + this._config.fontFamily, this._tmpCtx.textBaseline = o21.TEXT_BASELINE, this._tmpCtx.fillStyle = this._getForegroundColor(e).css, e.dim && (this._tmpCtx.globalAlpha = o21.DIM_OPACITY), this._tmpCtx.fillText(e.chars, 0, this._config.scaledCharHeight);
                        var s = this._tmpCtx.getImageData(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight), a = !1;
                        if (this._config.allowTransparency || (a = y(s, r)), a && "_" === e.chars && !this._config.allowTransparency) for(var c = 1; c <= 5 && (this._tmpCtx.fillText(e.chars, 0, this._config.scaledCharHeight - c), a = y(s = this._tmpCtx.getImageData(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight), r)); c++);
                        this._tmpCtx.restore();
                        var l = this._toCoordinateX(t), h = this._toCoordinateY(t);
                        this._cacheCtx.putImageData(s, l, h);
                        var u = {
                            index: t,
                            isEmpty: a,
                            inBitmap: !1
                        };
                        return this._addGlyphToBitmap(u), u;
                    }, t65.prototype._addGlyphToBitmap = function(e) {
                        var t = this;
                        !("createImageBitmap" in window) || l13.isFirefox || l13.isSafari || (this._glyphsWaitingOnBitmap.push(e), null === this._bitmapCommitTimeout && (this._bitmapCommitTimeout = window.setTimeout(function() {
                            return t._generateBitmap();
                        }, 100)));
                    }, t65.prototype._generateBitmap = function() {
                        var e = this, t = this._glyphsWaitingOnBitmap;
                        this._glyphsWaitingOnBitmap = [], window.createImageBitmap(this._cacheCanvas).then(function(r) {
                            e._bitmap = r;
                            for(var i = 0; i < t.length; i++)t[i].inBitmap = !0;
                        }), this._bitmapCommitTimeout = null;
                    }, t65;
                }(s23.BaseCharAtlas);
                t63.DynamicCharAtlas = v;
                var g = function(e) {
                    function t(t, r) {
                        return e.call(this) || this;
                    }
                    return n23(t, e), t.prototype.draw = function(e, t, r, i) {
                        return !1;
                    }, t;
                }(s23.BaseCharAtlas);
                function y(e, t) {
                    for(var r = !0, i = t.rgba >>> 24, n = t.rgba >>> 16 & 255, o = t.rgba >>> 8 & 255, s = 0; s < e.data.length; s += 4)e.data[s] === i && e.data[s + 1] === n && e.data[s + 2] === o ? e.data[s + 3] = 0 : r = !1;
                    return r;
                }
                t63.NoneCharAtlas = g;
            },
            7001: (e88, t66)=>{
                Object.defineProperty(t66, "__esModule", {
                    value: !0
                }), t66.LRUMap = void 0;
                var r38 = function() {
                    function e89(e) {
                        this.capacity = e, this._map = {
                        }, this._head = null, this._tail = null, this._nodePool = [], this.size = 0;
                    }
                    return e89.prototype._unlinkNode = function(e) {
                        var t = e.prev, r = e.next;
                        e === this._head && (this._head = r), e === this._tail && (this._tail = t), null !== t && (t.next = r), null !== r && (r.prev = t);
                    }, e89.prototype._appendNode = function(e) {
                        var t = this._tail;
                        null !== t && (t.next = e), e.prev = t, e.next = null, this._tail = e, null === this._head && (this._head = e);
                    }, e89.prototype.prealloc = function(e) {
                        for(var t = this._nodePool, r = 0; r < e; r++)t.push({
                            prev: null,
                            next: null,
                            key: null,
                            value: null
                        });
                    }, e89.prototype.get = function(e) {
                        var t = this._map[e];
                        return void 0 !== t ? (this._unlinkNode(t), this._appendNode(t), t.value) : null;
                    }, e89.prototype.peekValue = function(e) {
                        var t = this._map[e];
                        return void 0 !== t ? t.value : null;
                    }, e89.prototype.peek = function() {
                        var e = this._head;
                        return null === e ? null : e.value;
                    }, e89.prototype.set = function(e, t) {
                        var r = this._map[e];
                        if (void 0 !== r) r = this._map[e], this._unlinkNode(r), r.value = t;
                        else if (this.size >= this.capacity) r = this._head, this._unlinkNode(r), delete this._map[r.key], r.key = e, r.value = t, this._map[e] = r;
                        else {
                            var i = this._nodePool;
                            i.length > 0 ? ((r = i.pop()).key = e, r.value = t) : r = {
                                prev: null,
                                next: null,
                                key: e,
                                value: t
                            }, this._map[e] = r, this.size++;
                        }
                        this._appendNode(r);
                    }, e89;
                }();
                t66.LRUMap = r38;
            },
            1296: function(e90, t67, r39) {
                var i28, n24 = this && this.__extends || (i28 = function(e91, t68) {
                    return i28 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i28(e91, t68);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i28(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o22 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s24 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t67, "__esModule", {
                    value: !0
                }), t67.DomRenderer = void 0;
                var a22 = r39(3787), c12 = r39(8803), l14 = r39(844), h10 = r39(4725), u9 = r39(2585), f5 = r39(8460), _ = r39(4774), d = r39(9631), p = "xterm-dom-renderer-owner-", v = "xterm-fg-", g = "xterm-bg-", y = "xterm-focus", m = 1, S = function(e92) {
                    function t69(t, r, i, n, o, s, c, l, h, u) {
                        var f = e92.call(this) || this;
                        return f._colors = t, f._element = r, f._screenElement = i, f._viewportElement = n, f._linkifier = o, f._linkifier2 = s, f._charSizeService = l, f._optionsService = h, f._bufferService = u, f._terminalClass = m++, f._rowElements = [], f._rowContainer = document.createElement("div"), f._rowContainer.classList.add("xterm-rows"), f._rowContainer.style.lineHeight = "normal", f._rowContainer.setAttribute("aria-hidden", "true"), f._refreshRowElements(f._bufferService.cols, f._bufferService.rows), f._selectionContainer = document.createElement("div"), f._selectionContainer.classList.add("xterm-selection"), f._selectionContainer.setAttribute("aria-hidden", "true"), f.dimensions = {
                            scaledCharWidth: 0,
                            scaledCharHeight: 0,
                            scaledCellWidth: 0,
                            scaledCellHeight: 0,
                            scaledCharLeft: 0,
                            scaledCharTop: 0,
                            scaledCanvasWidth: 0,
                            scaledCanvasHeight: 0,
                            canvasWidth: 0,
                            canvasHeight: 0,
                            actualCellWidth: 0,
                            actualCellHeight: 0
                        }, f._updateDimensions(), f._injectCss(), f._rowFactory = c.createInstance(a22.DomRendererRowFactory, document, f._colors), f._element.classList.add(p + f._terminalClass), f._screenElement.appendChild(f._rowContainer), f._screenElement.appendChild(f._selectionContainer), f._linkifier.onShowLinkUnderline(function(e) {
                            return f._onLinkHover(e);
                        }), f._linkifier.onHideLinkUnderline(function(e) {
                            return f._onLinkLeave(e);
                        }), f._linkifier2.onShowLinkUnderline(function(e) {
                            return f._onLinkHover(e);
                        }), f._linkifier2.onHideLinkUnderline(function(e) {
                            return f._onLinkLeave(e);
                        }), f;
                    }
                    return n24(t69, e92), Object.defineProperty(t69.prototype, "onRequestRedraw", {
                        get: function() {
                            return (new f5.EventEmitter).event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t69.prototype.dispose = function() {
                        this._element.classList.remove(p + this._terminalClass), (0, d.removeElementFromParent)(this._rowContainer, this._selectionContainer, this._themeStyleElement, this._dimensionsStyleElement), e92.prototype.dispose.call(this);
                    }, t69.prototype._updateDimensions = function() {
                        this.dimensions.scaledCharWidth = this._charSizeService.width * window.devicePixelRatio, this.dimensions.scaledCharHeight = Math.ceil(this._charSizeService.height * window.devicePixelRatio), this.dimensions.scaledCellWidth = this.dimensions.scaledCharWidth + Math.round(this._optionsService.options.letterSpacing), this.dimensions.scaledCellHeight = Math.floor(this.dimensions.scaledCharHeight * this._optionsService.options.lineHeight), this.dimensions.scaledCharLeft = 0, this.dimensions.scaledCharTop = 0, this.dimensions.scaledCanvasWidth = this.dimensions.scaledCellWidth * this._bufferService.cols, this.dimensions.scaledCanvasHeight = this.dimensions.scaledCellHeight * this._bufferService.rows, this.dimensions.canvasWidth = Math.round(this.dimensions.scaledCanvasWidth / window.devicePixelRatio), this.dimensions.canvasHeight = Math.round(this.dimensions.scaledCanvasHeight / window.devicePixelRatio), this.dimensions.actualCellWidth = this.dimensions.canvasWidth / this._bufferService.cols, this.dimensions.actualCellHeight = this.dimensions.canvasHeight / this._bufferService.rows;
                        for(var e = 0, t = this._rowElements; e < t.length; e++){
                            var r = t[e];
                            r.style.width = this.dimensions.canvasWidth + "px", r.style.height = this.dimensions.actualCellHeight + "px", r.style.lineHeight = this.dimensions.actualCellHeight + "px", r.style.overflow = "hidden";
                        }
                        this._dimensionsStyleElement || (this._dimensionsStyleElement = document.createElement("style"), this._screenElement.appendChild(this._dimensionsStyleElement));
                        var i = this._terminalSelector + " .xterm-rows span { display: inline-block; height: 100%; vertical-align: top; width: " + this.dimensions.actualCellWidth + "px}";
                        this._dimensionsStyleElement.textContent = i, this._selectionContainer.style.height = this._viewportElement.style.height, this._screenElement.style.width = this.dimensions.canvasWidth + "px", this._screenElement.style.height = this.dimensions.canvasHeight + "px";
                    }, t69.prototype.setColors = function(e) {
                        this._colors = e, this._injectCss();
                    }, t69.prototype._injectCss = function() {
                        var e = this;
                        this._themeStyleElement || (this._themeStyleElement = document.createElement("style"), this._screenElement.appendChild(this._themeStyleElement));
                        var t = this._terminalSelector + " .xterm-rows { color: " + this._colors.foreground.css + "; font-family: " + this._optionsService.options.fontFamily + "; font-size: " + this._optionsService.options.fontSize + "px;}";
                        t += this._terminalSelector + " span:not(." + a22.BOLD_CLASS + ") { font-weight: " + this._optionsService.options.fontWeight + ";}" + this._terminalSelector + " span." + a22.BOLD_CLASS + " { font-weight: " + this._optionsService.options.fontWeightBold + ";}" + this._terminalSelector + " span." + a22.ITALIC_CLASS + " { font-style: italic;}", t += "@keyframes blink_box_shadow_" + this._terminalClass + " { 50% {  box-shadow: none; }}", t += "@keyframes blink_block_" + this._terminalClass + " { 0% {  background-color: " + this._colors.cursor.css + ";  color: " + this._colors.cursorAccent.css + "; } 50% {  background-color: " + this._colors.cursorAccent.css + ";  color: " + this._colors.cursor.css + "; }}", t += this._terminalSelector + " .xterm-rows:not(.xterm-focus) ." + a22.CURSOR_CLASS + "." + a22.CURSOR_STYLE_BLOCK_CLASS + " { outline: 1px solid " + this._colors.cursor.css + "; outline-offset: -1px;}" + this._terminalSelector + " .xterm-rows.xterm-focus ." + a22.CURSOR_CLASS + "." + a22.CURSOR_BLINK_CLASS + ":not(." + a22.CURSOR_STYLE_BLOCK_CLASS + ") { animation: blink_box_shadow_" + this._terminalClass + " 1s step-end infinite;}" + this._terminalSelector + " .xterm-rows.xterm-focus ." + a22.CURSOR_CLASS + "." + a22.CURSOR_BLINK_CLASS + "." + a22.CURSOR_STYLE_BLOCK_CLASS + " { animation: blink_block_" + this._terminalClass + " 1s step-end infinite;}" + this._terminalSelector + " .xterm-rows.xterm-focus ." + a22.CURSOR_CLASS + "." + a22.CURSOR_STYLE_BLOCK_CLASS + " { background-color: " + this._colors.cursor.css + "; color: " + this._colors.cursorAccent.css + ";}" + this._terminalSelector + " .xterm-rows ." + a22.CURSOR_CLASS + "." + a22.CURSOR_STYLE_BAR_CLASS + " { box-shadow: " + this._optionsService.options.cursorWidth + "px 0 0 " + this._colors.cursor.css + " inset;}" + this._terminalSelector + " .xterm-rows ." + a22.CURSOR_CLASS + "." + a22.CURSOR_STYLE_UNDERLINE_CLASS + " { box-shadow: 0 -1px 0 " + this._colors.cursor.css + " inset;}", t += this._terminalSelector + " .xterm-selection { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}" + this._terminalSelector + " .xterm-selection div { position: absolute; background-color: " + this._colors.selectionTransparent.css + ";}", this._colors.ansi.forEach(function(r, i) {
                            t += e._terminalSelector + " ." + v + i + " { color: " + r.css + "; }" + e._terminalSelector + " ." + g + i + " { background-color: " + r.css + "; }";
                        }), t += this._terminalSelector + " ." + v + c12.INVERTED_DEFAULT_COLOR + " { color: " + _.color.opaque(this._colors.background).css + "; }" + this._terminalSelector + " ." + g + c12.INVERTED_DEFAULT_COLOR + " { background-color: " + this._colors.foreground.css + "; }", this._themeStyleElement.textContent = t;
                    }, t69.prototype.onDevicePixelRatioChange = function() {
                        this._updateDimensions();
                    }, t69.prototype._refreshRowElements = function(e, t) {
                        for(var r = this._rowElements.length; r <= t; r++){
                            var i = document.createElement("div");
                            this._rowContainer.appendChild(i), this._rowElements.push(i);
                        }
                        for(; this._rowElements.length > t;)this._rowContainer.removeChild(this._rowElements.pop());
                    }, t69.prototype.onResize = function(e, t) {
                        this._refreshRowElements(e, t), this._updateDimensions();
                    }, t69.prototype.onCharSizeChanged = function() {
                        this._updateDimensions();
                    }, t69.prototype.onBlur = function() {
                        this._rowContainer.classList.remove(y);
                    }, t69.prototype.onFocus = function() {
                        this._rowContainer.classList.add(y);
                    }, t69.prototype.onSelectionChanged = function(e, t, r) {
                        for(; this._selectionContainer.children.length;)this._selectionContainer.removeChild(this._selectionContainer.children[0]);
                        if (e && t) {
                            var i = e[1] - this._bufferService.buffer.ydisp, n = t[1] - this._bufferService.buffer.ydisp, o = Math.max(i, 0), s = Math.min(n, this._bufferService.rows - 1);
                            if (!(o >= this._bufferService.rows || s < 0)) {
                                var a = document.createDocumentFragment();
                                if (r) a.appendChild(this._createSelectionElement(o, e[0], t[0], s - o + 1));
                                else {
                                    var c = i === o ? e[0] : 0, l = o === n ? t[0] : this._bufferService.cols;
                                    a.appendChild(this._createSelectionElement(o, c, l));
                                    var h = s - o - 1;
                                    if (a.appendChild(this._createSelectionElement(o + 1, 0, this._bufferService.cols, h)), o !== s) {
                                        var u = n === s ? t[0] : this._bufferService.cols;
                                        a.appendChild(this._createSelectionElement(s, 0, u));
                                    }
                                }
                                this._selectionContainer.appendChild(a);
                            }
                        }
                    }, t69.prototype._createSelectionElement = function(e, t, r, i) {
                        void 0 === i && (i = 1);
                        var n = document.createElement("div");
                        return n.style.height = i * this.dimensions.actualCellHeight + "px", n.style.top = e * this.dimensions.actualCellHeight + "px", n.style.left = t * this.dimensions.actualCellWidth + "px", n.style.width = this.dimensions.actualCellWidth * (r - t) + "px", n;
                    }, t69.prototype.onCursorMove = function() {
                    }, t69.prototype.onOptionsChanged = function() {
                        this._updateDimensions(), this._injectCss();
                    }, t69.prototype.clear = function() {
                        for(var e = 0, t = this._rowElements; e < t.length; e++)t[e].innerText = "";
                    }, t69.prototype.renderRows = function(e, t) {
                        for(var r = this._bufferService.buffer.ybase + this._bufferService.buffer.y, i = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1), n = this._optionsService.options.cursorBlink, o = e; o <= t; o++){
                            var s = this._rowElements[o];
                            s.innerText = "";
                            var a = o + this._bufferService.buffer.ydisp, c = this._bufferService.buffer.lines.get(a), l = this._optionsService.options.cursorStyle;
                            s.appendChild(this._rowFactory.createRow(c, a, a === r, l, i, n, this.dimensions.actualCellWidth, this._bufferService.cols));
                        }
                    }, Object.defineProperty(t69.prototype, "_terminalSelector", {
                        get: function() {
                            return "." + p + this._terminalClass;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t69.prototype._onLinkHover = function(e) {
                        this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, !0);
                    }, t69.prototype._onLinkLeave = function(e) {
                        this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, !1);
                    }, t69.prototype._setCellUnderline = function(e, t, r, i, n, o) {
                        for(; e !== t || r !== i;){
                            var s = this._rowElements[r];
                            if (!s) return;
                            var a = s.children[e];
                            a && (a.style.textDecoration = o ? "underline" : "none"), ++e >= n && (e = 0, r++);
                        }
                    }, o22([
                        s24(6, u9.IInstantiationService),
                        s24(7, h10.ICharSizeService),
                        s24(8, u9.IOptionsService),
                        s24(9, u9.IBufferService)
                    ], t69);
                }(l14.Disposable);
                t67.DomRenderer = S;
            },
            3787: function(e93, t70, r40) {
                var i29 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, n25 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t70, "__esModule", {
                    value: !0
                }), t70.DomRendererRowFactory = t70.CURSOR_STYLE_UNDERLINE_CLASS = t70.CURSOR_STYLE_BAR_CLASS = t70.CURSOR_STYLE_BLOCK_CLASS = t70.CURSOR_BLINK_CLASS = t70.CURSOR_CLASS = t70.STRIKETHROUGH_CLASS = t70.UNDERLINE_CLASS = t70.ITALIC_CLASS = t70.DIM_CLASS = t70.BOLD_CLASS = void 0;
                var o23 = r40(8803), s25 = r40(643), a23 = r40(511), c13 = r40(2585), l = r40(4774), h11 = r40(4725), u = r40(4269);
                t70.BOLD_CLASS = "xterm-bold", t70.DIM_CLASS = "xterm-dim", t70.ITALIC_CLASS = "xterm-italic", t70.UNDERLINE_CLASS = "xterm-underline", t70.STRIKETHROUGH_CLASS = "xterm-strikethrough", t70.CURSOR_CLASS = "xterm-cursor", t70.CURSOR_BLINK_CLASS = "xterm-cursor-blink", t70.CURSOR_STYLE_BLOCK_CLASS = "xterm-cursor-block", t70.CURSOR_STYLE_BAR_CLASS = "xterm-cursor-bar", t70.CURSOR_STYLE_UNDERLINE_CLASS = "xterm-cursor-underline";
                var f6 = function() {
                    function e94(e, t, r, i, n) {
                        this._document = e, this._colors = t, this._characterJoinerService = r, this._optionsService = i, this._coreService = n, this._workCell = new a23.CellData;
                    }
                    return e94.prototype.setColors = function(e) {
                        this._colors = e;
                    }, e94.prototype.createRow = function(e, r, i, n, a, c, h, f) {
                        for(var d = this._document.createDocumentFragment(), p = this._characterJoinerService.getJoinedCharacters(r), v = 0, g = Math.min(e.length, f) - 1; g >= 0; g--)if (e.loadCell(g, this._workCell).getCode() !== s25.NULL_CELL_CODE || i && g === a) {
                            v = g + 1;
                            break;
                        }
                        for(g = 0; g < v; g++){
                            e.loadCell(g, this._workCell);
                            var y = this._workCell.getWidth();
                            if (0 !== y) {
                                var m = !1, S = g, C = this._workCell;
                                if (p.length > 0 && g === p[0][0]) {
                                    m = !0;
                                    var b = p.shift();
                                    C = new u.JoinedCellData(this._workCell, e.translateToString(!0, b[0], b[1]), b[1] - b[0]), S = b[1] - 1, y = C.getWidth();
                                }
                                var w = this._document.createElement("span");
                                if (y > 1 && (w.style.width = h * y + "px"), m && (w.style.display = "inline", a >= g && a <= S && (a = g)), !this._coreService.isCursorHidden && i && g === a) switch(w.classList.add(t70.CURSOR_CLASS), c && w.classList.add(t70.CURSOR_BLINK_CLASS), n){
                                    case "bar":
                                        w.classList.add(t70.CURSOR_STYLE_BAR_CLASS);
                                        break;
                                    case "underline":
                                        w.classList.add(t70.CURSOR_STYLE_UNDERLINE_CLASS);
                                        break;
                                    default:
                                        w.classList.add(t70.CURSOR_STYLE_BLOCK_CLASS);
                                }
                                C.isBold() && w.classList.add(t70.BOLD_CLASS), C.isItalic() && w.classList.add(t70.ITALIC_CLASS), C.isDim() && w.classList.add(t70.DIM_CLASS), C.isUnderline() && w.classList.add(t70.UNDERLINE_CLASS), C.isInvisible() ? w.textContent = s25.WHITESPACE_CELL_CHAR : w.textContent = C.getChars() || s25.WHITESPACE_CELL_CHAR, C.isStrikethrough() && w.classList.add(t70.STRIKETHROUGH_CLASS);
                                var L = C.getFgColor(), E = C.getFgColorMode(), x = C.getBgColor(), M = C.getBgColorMode(), k = !!C.isInverse();
                                if (k) {
                                    var A = L;
                                    L = x, x = A;
                                    var R = E;
                                    E = M, M = R;
                                }
                                switch(E){
                                    case 16777216:
                                    case 33554432:
                                        C.isBold() && L < 8 && this._optionsService.options.drawBoldTextInBrightColors && (L += 8), this._applyMinimumContrast(w, this._colors.background, this._colors.ansi[L]) || w.classList.add("xterm-fg-" + L);
                                        break;
                                    case 50331648:
                                        var T = l.rgba.toColor(L >> 16 & 255, L >> 8 & 255, 255 & L);
                                        this._applyMinimumContrast(w, this._colors.background, T) || this._addStyle(w, "color:#" + _(L.toString(16), "0", 6));
                                        break;
                                    default:
                                        this._applyMinimumContrast(w, this._colors.background, this._colors.foreground) || k && w.classList.add("xterm-fg-" + o23.INVERTED_DEFAULT_COLOR);
                                }
                                switch(M){
                                    case 16777216:
                                    case 33554432:
                                        w.classList.add("xterm-bg-" + x);
                                        break;
                                    case 50331648:
                                        this._addStyle(w, "background-color:#" + _(x.toString(16), "0", 6));
                                        break;
                                    default:
                                        k && w.classList.add("xterm-bg-" + o23.INVERTED_DEFAULT_COLOR);
                                }
                                d.appendChild(w), g = S;
                            }
                        }
                        return d;
                    }, e94.prototype._applyMinimumContrast = function(e, t, r) {
                        if (1 === this._optionsService.options.minimumContrastRatio) return !1;
                        var i = this._colors.contrastCache.getColor(this._workCell.bg, this._workCell.fg);
                        return void 0 === i && (i = l.color.ensureContrastRatio(t, r, this._optionsService.options.minimumContrastRatio), this._colors.contrastCache.setColor(this._workCell.bg, this._workCell.fg, null != i ? i : null)), !!i && (this._addStyle(e, "color:" + i.css), !0);
                    }, e94.prototype._addStyle = function(e, t) {
                        e.setAttribute("style", "" + (e.getAttribute("style") || "") + t + ";");
                    }, i29([
                        n25(2, h11.ICharacterJoinerService),
                        n25(3, c13.IOptionsService),
                        n25(4, c13.ICoreService)
                    ], e94);
                }();
                function _(e, t, r) {
                    for(; e.length < r;)e = t + e;
                    return e;
                }
                t70.DomRendererRowFactory = f6;
            },
            456: (e95, t71)=>{
                Object.defineProperty(t71, "__esModule", {
                    value: !0
                }), t71.SelectionModel = void 0;
                var r = function() {
                    function e96(e) {
                        this._bufferService = e, this.isSelectAllActive = !1, this.selectionStartLength = 0;
                    }
                    return e96.prototype.clearSelection = function() {
                        this.selectionStart = void 0, this.selectionEnd = void 0, this.isSelectAllActive = !1, this.selectionStartLength = 0;
                    }, Object.defineProperty(e96.prototype, "finalSelectionStart", {
                        get: function() {
                            return this.isSelectAllActive ? [
                                0,
                                0
                            ] : this.selectionEnd && this.selectionStart && this.areSelectionValuesReversed() ? this.selectionEnd : this.selectionStart;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e96.prototype, "finalSelectionEnd", {
                        get: function() {
                            if (this.isSelectAllActive) return [
                                this._bufferService.cols,
                                this._bufferService.buffer.ybase + this._bufferService.rows - 1
                            ];
                            if (this.selectionStart) {
                                if (!this.selectionEnd || this.areSelectionValuesReversed()) {
                                    var e = this.selectionStart[0] + this.selectionStartLength;
                                    return e > this._bufferService.cols ? e % this._bufferService.cols == 0 ? [
                                        this._bufferService.cols,
                                        this.selectionStart[1] + Math.floor(e / this._bufferService.cols) - 1
                                    ] : [
                                        e % this._bufferService.cols,
                                        this.selectionStart[1] + Math.floor(e / this._bufferService.cols)
                                    ] : [
                                        e,
                                        this.selectionStart[1]
                                    ];
                                }
                                return this.selectionStartLength && this.selectionEnd[1] === this.selectionStart[1] ? [
                                    Math.max(this.selectionStart[0] + this.selectionStartLength, this.selectionEnd[0]),
                                    this.selectionEnd[1]
                                ] : this.selectionEnd;
                            }
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e96.prototype.areSelectionValuesReversed = function() {
                        var e = this.selectionStart, t = this.selectionEnd;
                        return !(!e || !t) && (e[1] > t[1] || e[1] === t[1] && e[0] > t[0]);
                    }, e96.prototype.onTrim = function(e) {
                        return this.selectionStart && (this.selectionStart[1] -= e), this.selectionEnd && (this.selectionEnd[1] -= e), this.selectionEnd && this.selectionEnd[1] < 0 ? (this.clearSelection(), !0) : (this.selectionStart && this.selectionStart[1] < 0 && (this.selectionStart[1] = 0), !1);
                    }, e96;
                }();
                t71.SelectionModel = r;
            },
            428: function(e97, t72, r41) {
                var i30 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, n26 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t72, "__esModule", {
                    value: !0
                }), t72.CharSizeService = void 0;
                var o24 = r41(2585), s26 = r41(8460), a24 = function() {
                    function e98(e, t, r) {
                        this._optionsService = r, this.width = 0, this.height = 0, this._onCharSizeChange = new s26.EventEmitter, this._measureStrategy = new c(e, t, this._optionsService);
                    }
                    return Object.defineProperty(e98.prototype, "hasValidSize", {
                        get: function() {
                            return this.width > 0 && this.height > 0;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e98.prototype, "onCharSizeChange", {
                        get: function() {
                            return this._onCharSizeChange.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e98.prototype.measure = function() {
                        var e = this._measureStrategy.measure();
                        e.width === this.width && e.height === this.height || (this.width = e.width, this.height = e.height, this._onCharSizeChange.fire());
                    }, i30([
                        n26(2, o24.IOptionsService)
                    ], e98);
                }();
                t72.CharSizeService = a24;
                var c = function() {
                    function e99(e, t, r) {
                        this._document = e, this._parentElement = t, this._optionsService = r, this._result = {
                            width: 0,
                            height: 0
                        }, this._measureElement = this._document.createElement("span"), this._measureElement.classList.add("xterm-char-measure-element"), this._measureElement.textContent = "W", this._measureElement.setAttribute("aria-hidden", "true"), this._parentElement.appendChild(this._measureElement);
                    }
                    return e99.prototype.measure = function() {
                        this._measureElement.style.fontFamily = this._optionsService.options.fontFamily, this._measureElement.style.fontSize = this._optionsService.options.fontSize + "px";
                        var e = this._measureElement.getBoundingClientRect();
                        return 0 !== e.width && 0 !== e.height && (this._result.width = e.width, this._result.height = Math.ceil(e.height)), this._result;
                    }, e99;
                }();
            },
            4269: function(e100, t73, r42) {
                var i31, n27 = this && this.__extends || (i31 = function(e101, t74) {
                    return i31 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i31(e101, t74);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i31(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o25 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s27 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t73, "__esModule", {
                    value: !0
                }), t73.CharacterJoinerService = t73.JoinedCellData = void 0;
                var a25 = r42(3734), c14 = r42(643), l15 = r42(511), h12 = r42(2585), u10 = function(e) {
                    function t75(t, r, i) {
                        var n = e.call(this) || this;
                        return n.content = 0, n.combinedData = "", n.fg = t.fg, n.bg = t.bg, n.combinedData = r, n._width = i, n;
                    }
                    return n27(t75, e), t75.prototype.isCombined = function() {
                        return 2097152;
                    }, t75.prototype.getWidth = function() {
                        return this._width;
                    }, t75.prototype.getChars = function() {
                        return this.combinedData;
                    }, t75.prototype.getCode = function() {
                        return 2097151;
                    }, t75.prototype.setFromCharData = function(e) {
                        throw new Error("not implemented");
                    }, t75.prototype.getAsCharData = function() {
                        return [
                            this.fg,
                            this.getChars(),
                            this.getWidth(),
                            this.getCode()
                        ];
                    }, t75;
                }(a25.AttributeData);
                t73.JoinedCellData = u10;
                var f7 = function() {
                    function e102(e) {
                        this._bufferService = e, this._characterJoiners = [], this._nextCharacterJoinerId = 0, this._workCell = new l15.CellData;
                    }
                    return e102.prototype.register = function(e) {
                        var t = {
                            id: this._nextCharacterJoinerId++,
                            handler: e
                        };
                        return this._characterJoiners.push(t), t.id;
                    }, e102.prototype.deregister = function(e) {
                        for(var t = 0; t < this._characterJoiners.length; t++)if (this._characterJoiners[t].id === e) return this._characterJoiners.splice(t, 1), !0;
                        return !1;
                    }, e102.prototype.getJoinedCharacters = function(e) {
                        if (0 === this._characterJoiners.length) return [];
                        var t = this._bufferService.buffer.lines.get(e);
                        if (!t || 0 === t.length) return [];
                        for(var r = [], i = t.translateToString(!0), n = 0, o = 0, s = 0, a = t.getFg(0), l = t.getBg(0), h = 0; h < t.getTrimmedLength(); h++)if (t.loadCell(h, this._workCell), 0 !== this._workCell.getWidth()) {
                            if (this._workCell.fg !== a || this._workCell.bg !== l) {
                                if (h - n > 1) for(var u = this._getJoinedRanges(i, s, o, t, n), f = 0; f < u.length; f++)r.push(u[f]);
                                n = h, s = o, a = this._workCell.fg, l = this._workCell.bg;
                            }
                            o += this._workCell.getChars().length || c14.WHITESPACE_CELL_CHAR.length;
                        }
                        if (this._bufferService.cols - n > 1) for(u = this._getJoinedRanges(i, s, o, t, n), f = 0; f < u.length; f++)r.push(u[f]);
                        return r;
                    }, e102.prototype._getJoinedRanges = function(t, r, i, n, o) {
                        var s = t.substring(r, i), a = [];
                        try {
                            a = this._characterJoiners[0].handler(s);
                        } catch (e) {
                            console.error(e);
                        }
                        for(var c = 1; c < this._characterJoiners.length; c++)try {
                            for(var l = this._characterJoiners[c].handler(s), h = 0; h < l.length; h++)e102._mergeRanges(a, l[h]);
                        } catch (e103) {
                            console.error(e103);
                        }
                        return this._stringRangesToCellRanges(a, n, o), a;
                    }, e102.prototype._stringRangesToCellRanges = function(e, t, r) {
                        var i = 0, n = !1, o = 0, s = e[i];
                        if (s) {
                            for(var a = r; a < this._bufferService.cols; a++){
                                var l = t.getWidth(a), h = t.getString(a).length || c14.WHITESPACE_CELL_CHAR.length;
                                if (0 !== l) {
                                    if (!n && s[0] <= o && (s[0] = a, n = !0), s[1] <= o) {
                                        if (s[1] = a, !(s = e[++i])) break;
                                        s[0] <= o ? (s[0] = a, n = !0) : n = !1;
                                    }
                                    o += h;
                                }
                            }
                            s && (s[1] = this._bufferService.cols);
                        }
                    }, e102._mergeRanges = function(e, t) {
                        for(var r = !1, i = 0; i < e.length; i++){
                            var n = e[i];
                            if (r) {
                                if (t[1] <= n[0]) return e[i - 1][1] = t[1], e;
                                if (t[1] <= n[1]) return e[i - 1][1] = Math.max(t[1], n[1]), e.splice(i, 1), e;
                                e.splice(i, 1), i--;
                            } else {
                                if (t[1] <= n[0]) return e.splice(i, 0, t), e;
                                if (t[1] <= n[1]) return n[0] = Math.min(t[0], n[0]), e;
                                t[0] < n[1] && (n[0] = Math.min(t[0], n[0]), r = !0);
                            }
                        }
                        return r ? e[e.length - 1][1] = t[1] : e.push(t), e;
                    }, e102 = o25([
                        s27(0, h12.IBufferService)
                    ], e102);
                }();
                t73.CharacterJoinerService = f7;
            },
            5114: (e104, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.CoreBrowserService = void 0;
                var r = function() {
                    function e105(e) {
                        this._textarea = e;
                    }
                    return Object.defineProperty(e105.prototype, "isFocused", {
                        get: function() {
                            return (this._textarea.getRootNode ? this._textarea.getRootNode() : document).activeElement === this._textarea && document.hasFocus();
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e105;
                }();
                t.CoreBrowserService = r;
            },
            8934: function(e106, t76, r43) {
                var i32 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, n28 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t76, "__esModule", {
                    value: !0
                }), t76.MouseService = void 0;
                var o26 = r43(4725), s28 = r43(9806), a26 = function() {
                    function e107(e, t) {
                        this._renderService = e, this._charSizeService = t;
                    }
                    return e107.prototype.getCoords = function(e, t, r, i, n) {
                        return (0, s28.getCoords)(e, t, r, i, this._charSizeService.hasValidSize, this._renderService.dimensions.actualCellWidth, this._renderService.dimensions.actualCellHeight, n);
                    }, e107.prototype.getRawByteCoords = function(e, t, r, i) {
                        var n = this.getCoords(e, t, r, i);
                        return (0, s28.getRawByteCoords)(n);
                    }, i32([
                        n28(0, o26.IRenderService),
                        n28(1, o26.ICharSizeService)
                    ], e107);
                }();
                t76.MouseService = a26;
            },
            3230: function(e108, t77, r44) {
                var i33, n29 = this && this.__extends || (i33 = function(e109, t78) {
                    return i33 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i33(e109, t78);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i33(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o27 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s29 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t77, "__esModule", {
                    value: !0
                }), t77.RenderService = void 0;
                var a27 = r44(6193), c = r44(8460), l16 = r44(844), h = r44(5596), u = r44(3656), f8 = r44(2585), _ = r44(4725), d = function(e110) {
                    function t79(t80, r, i, n, o, s) {
                        var l = e110.call(this) || this;
                        if (l._renderer = t80, l._rowCount = r, l._charSizeService = o, l._isPaused = !1, l._needsFullRefresh = !1, l._isNextRenderRedrawOnly = !0, l._needsSelectionRefresh = !1, l._canvasWidth = 0, l._canvasHeight = 0, l._selectionState = {
                            start: void 0,
                            end: void 0,
                            columnSelectMode: !1
                        }, l._onDimensionsChange = new c.EventEmitter, l._onRender = new c.EventEmitter, l._onRefreshRequest = new c.EventEmitter, l.register({
                            dispose: function() {
                                return l._renderer.dispose();
                            }
                        }), l._renderDebouncer = new a27.RenderDebouncer(function(e, t) {
                            return l._renderRows(e, t);
                        }), l.register(l._renderDebouncer), l._screenDprMonitor = new h.ScreenDprMonitor, l._screenDprMonitor.setListener(function() {
                            return l.onDevicePixelRatioChange();
                        }), l.register(l._screenDprMonitor), l.register(s.onResize(function(e) {
                            return l._fullRefresh();
                        })), l.register(n.onOptionChange(function() {
                            return l._renderer.onOptionsChanged();
                        })), l.register(l._charSizeService.onCharSizeChange(function() {
                            return l.onCharSizeChanged();
                        })), l._renderer.onRequestRedraw(function(e) {
                            return l.refreshRows(e.start, e.end, !0);
                        }), l.register((0, u.addDisposableDomListener)(window, "resize", function() {
                            return l.onDevicePixelRatioChange();
                        })), "IntersectionObserver" in window) {
                            var f = new IntersectionObserver(function(e) {
                                return l._onIntersectionChange(e[e.length - 1]);
                            }, {
                                threshold: 0
                            });
                            f.observe(i), l.register({
                                dispose: function() {
                                    return f.disconnect();
                                }
                            });
                        }
                        return l;
                    }
                    return n29(t79, e110), Object.defineProperty(t79.prototype, "onDimensionsChange", {
                        get: function() {
                            return this._onDimensionsChange.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t79.prototype, "onRenderedBufferChange", {
                        get: function() {
                            return this._onRender.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t79.prototype, "onRefreshRequest", {
                        get: function() {
                            return this._onRefreshRequest.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t79.prototype, "dimensions", {
                        get: function() {
                            return this._renderer.dimensions;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t79.prototype._onIntersectionChange = function(e) {
                        this._isPaused = void 0 === e.isIntersecting ? 0 === e.intersectionRatio : !e.isIntersecting, this._isPaused || this._charSizeService.hasValidSize || this._charSizeService.measure(), !this._isPaused && this._needsFullRefresh && (this.refreshRows(0, this._rowCount - 1), this._needsFullRefresh = !1);
                    }, t79.prototype.refreshRows = function(e, t, r) {
                        void 0 === r && (r = !1), this._isPaused ? this._needsFullRefresh = !0 : (r || (this._isNextRenderRedrawOnly = !1), this._renderDebouncer.refresh(e, t, this._rowCount));
                    }, t79.prototype._renderRows = function(e, t) {
                        this._renderer.renderRows(e, t), this._needsSelectionRefresh && (this._renderer.onSelectionChanged(this._selectionState.start, this._selectionState.end, this._selectionState.columnSelectMode), this._needsSelectionRefresh = !1), this._isNextRenderRedrawOnly || this._onRender.fire({
                            start: e,
                            end: t
                        }), this._isNextRenderRedrawOnly = !0;
                    }, t79.prototype.resize = function(e, t) {
                        this._rowCount = t, this._fireOnCanvasResize();
                    }, t79.prototype.changeOptions = function() {
                        this._renderer.onOptionsChanged(), this.refreshRows(0, this._rowCount - 1), this._fireOnCanvasResize();
                    }, t79.prototype._fireOnCanvasResize = function() {
                        this._renderer.dimensions.canvasWidth === this._canvasWidth && this._renderer.dimensions.canvasHeight === this._canvasHeight || this._onDimensionsChange.fire(this._renderer.dimensions);
                    }, t79.prototype.dispose = function() {
                        e110.prototype.dispose.call(this);
                    }, t79.prototype.setRenderer = function(e111) {
                        var t = this;
                        this._renderer.dispose(), this._renderer = e111, this._renderer.onRequestRedraw(function(e) {
                            return t.refreshRows(e.start, e.end, !0);
                        }), this._needsSelectionRefresh = !0, this._fullRefresh();
                    }, t79.prototype._fullRefresh = function() {
                        this._isPaused ? this._needsFullRefresh = !0 : this.refreshRows(0, this._rowCount - 1);
                    }, t79.prototype.clearTextureAtlas = function() {
                        var e, t;
                        null === (t = null === (e = this._renderer) || void 0 === e ? void 0 : e.clearTextureAtlas) || void 0 === t || t.call(e), this._fullRefresh();
                    }, t79.prototype.setColors = function(e) {
                        this._renderer.setColors(e), this._fullRefresh();
                    }, t79.prototype.onDevicePixelRatioChange = function() {
                        this._charSizeService.measure(), this._renderer.onDevicePixelRatioChange(), this.refreshRows(0, this._rowCount - 1);
                    }, t79.prototype.onResize = function(e, t) {
                        this._renderer.onResize(e, t), this._fullRefresh();
                    }, t79.prototype.onCharSizeChanged = function() {
                        this._renderer.onCharSizeChanged();
                    }, t79.prototype.onBlur = function() {
                        this._renderer.onBlur();
                    }, t79.prototype.onFocus = function() {
                        this._renderer.onFocus();
                    }, t79.prototype.onSelectionChanged = function(e, t, r) {
                        this._selectionState.start = e, this._selectionState.end = t, this._selectionState.columnSelectMode = r, this._renderer.onSelectionChanged(e, t, r);
                    }, t79.prototype.onCursorMove = function() {
                        this._renderer.onCursorMove();
                    }, t79.prototype.clear = function() {
                        this._renderer.clear();
                    }, o27([
                        s29(3, f8.IOptionsService),
                        s29(4, _.ICharSizeService),
                        s29(5, f8.IBufferService)
                    ], t79);
                }(l16.Disposable);
                t77.RenderService = d;
            },
            9312: function(e112, t81, r45) {
                var i34, n30 = this && this.__extends || (i34 = function(e113, t82) {
                    return i34 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i34(e113, t82);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i34(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o28 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s30 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t81, "__esModule", {
                    value: !0
                }), t81.SelectionService = void 0;
                var a28 = r45(6114), c15 = r45(456), l17 = r45(511), h13 = r45(8460), u11 = r45(4725), f9 = r45(2585), _3 = r45(9806), d3 = r45(9504), p2 = r45(844), v2 = r45(4841), g2 = String.fromCharCode(160), y2 = new RegExp(g2, "g"), m2 = function(e114) {
                    function t83(t, r, i, n, o, s, a, u) {
                        var f = e114.call(this) || this;
                        return f._element = t, f._screenElement = r, f._linkifier = i, f._bufferService = n, f._coreService = o, f._mouseService = s, f._optionsService = a, f._renderService = u, f._dragScrollAmount = 0, f._enabled = !0, f._workCell = new l17.CellData, f._mouseDownTimeStamp = 0, f._oldHasSelection = !1, f._oldSelectionStart = void 0, f._oldSelectionEnd = void 0, f._onLinuxMouseSelection = f.register(new h13.EventEmitter), f._onRedrawRequest = f.register(new h13.EventEmitter), f._onSelectionChange = f.register(new h13.EventEmitter), f._onRequestScrollLines = f.register(new h13.EventEmitter), f._mouseMoveListener = function(e) {
                            return f._onMouseMove(e);
                        }, f._mouseUpListener = function(e) {
                            return f._onMouseUp(e);
                        }, f._coreService.onUserInput(function() {
                            f.hasSelection && f.clearSelection();
                        }), f._trimListener = f._bufferService.buffer.lines.onTrim(function(e) {
                            return f._onTrim(e);
                        }), f.register(f._bufferService.buffers.onBufferActivate(function(e) {
                            return f._onBufferActivate(e);
                        })), f.enable(), f._model = new c15.SelectionModel(f._bufferService), f._activeSelectionMode = 0, f;
                    }
                    return n30(t83, e114), Object.defineProperty(t83.prototype, "onLinuxMouseSelection", {
                        get: function() {
                            return this._onLinuxMouseSelection.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t83.prototype, "onRequestRedraw", {
                        get: function() {
                            return this._onRedrawRequest.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t83.prototype, "onSelectionChange", {
                        get: function() {
                            return this._onSelectionChange.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t83.prototype, "onRequestScrollLines", {
                        get: function() {
                            return this._onRequestScrollLines.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t83.prototype.dispose = function() {
                        this._removeMouseDownListeners();
                    }, t83.prototype.reset = function() {
                        this.clearSelection();
                    }, t83.prototype.disable = function() {
                        this.clearSelection(), this._enabled = !1;
                    }, t83.prototype.enable = function() {
                        this._enabled = !0;
                    }, Object.defineProperty(t83.prototype, "selectionStart", {
                        get: function() {
                            return this._model.finalSelectionStart;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t83.prototype, "selectionEnd", {
                        get: function() {
                            return this._model.finalSelectionEnd;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t83.prototype, "hasSelection", {
                        get: function() {
                            var e = this._model.finalSelectionStart, t = this._model.finalSelectionEnd;
                            return !(!e || !t || e[0] === t[0] && e[1] === t[1]);
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t83.prototype, "selectionText", {
                        get: function() {
                            var e115 = this._model.finalSelectionStart, t = this._model.finalSelectionEnd;
                            if (!e115 || !t) return "";
                            var r = this._bufferService.buffer, i = [];
                            if (3 === this._activeSelectionMode) {
                                if (e115[0] === t[0]) return "";
                                for(var n = e115[1]; n <= t[1]; n++){
                                    var o = r.translateBufferLineToString(n, !0, e115[0], t[0]);
                                    i.push(o);
                                }
                            } else {
                                var s = e115[1] === t[1] ? t[0] : void 0;
                                for(i.push(r.translateBufferLineToString(e115[1], !0, e115[0], s)), n = e115[1] + 1; n <= t[1] - 1; n++){
                                    var c = r.lines.get(n);
                                    o = r.translateBufferLineToString(n, !0), (null == c ? void 0 : c.isWrapped) ? i[i.length - 1] += o : i.push(o);
                                }
                                e115[1] !== t[1] && (c = r.lines.get(t[1]), o = r.translateBufferLineToString(t[1], !0, 0, t[0]), c && c.isWrapped ? i[i.length - 1] += o : i.push(o));
                            }
                            return i.map(function(e) {
                                return e.replace(y2, " ");
                            }).join(a28.isWindows ? "\r\n" : "\n");
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t83.prototype.clearSelection = function() {
                        this._model.clearSelection(), this._removeMouseDownListeners(), this.refresh(), this._onSelectionChange.fire();
                    }, t83.prototype.refresh = function(e) {
                        var t = this;
                        this._refreshAnimationFrame || (this._refreshAnimationFrame = window.requestAnimationFrame(function() {
                            return t._refresh();
                        })), a28.isLinux && e && this.selectionText.length && this._onLinuxMouseSelection.fire(this.selectionText);
                    }, t83.prototype._refresh = function() {
                        this._refreshAnimationFrame = void 0, this._onRedrawRequest.fire({
                            start: this._model.finalSelectionStart,
                            end: this._model.finalSelectionEnd,
                            columnSelectMode: 3 === this._activeSelectionMode
                        });
                    }, t83.prototype._isClickInSelection = function(e) {
                        var t = this._getMouseBufferCoords(e), r = this._model.finalSelectionStart, i = this._model.finalSelectionEnd;
                        return !!(r && i && t) && this._areCoordsInSelection(t, r, i);
                    }, t83.prototype._areCoordsInSelection = function(e, t, r) {
                        return e[1] > t[1] && e[1] < r[1] || t[1] === r[1] && e[1] === t[1] && e[0] >= t[0] && e[0] < r[0] || t[1] < r[1] && e[1] === r[1] && e[0] < r[0] || t[1] < r[1] && e[1] === t[1] && e[0] >= t[0];
                    }, t83.prototype._selectWordAtCursor = function(e, t) {
                        var r, i, n = null === (i = null === (r = this._linkifier.currentLink) || void 0 === r ? void 0 : r.link) || void 0 === i ? void 0 : i.range;
                        if (n) return this._model.selectionStart = [
                            n.start.x - 1,
                            n.start.y - 1
                        ], this._model.selectionStartLength = (0, v2.getRangeLength)(n, this._bufferService.cols), this._model.selectionEnd = void 0, !0;
                        var o = this._getMouseBufferCoords(e);
                        return !!o && (this._selectWordAt(o, t), this._model.selectionEnd = void 0, !0);
                    }, t83.prototype.selectAll = function() {
                        this._model.isSelectAllActive = !0, this.refresh(), this._onSelectionChange.fire();
                    }, t83.prototype.selectLines = function(e, t) {
                        this._model.clearSelection(), e = Math.max(e, 0), t = Math.min(t, this._bufferService.buffer.lines.length - 1), this._model.selectionStart = [
                            0,
                            e
                        ], this._model.selectionEnd = [
                            this._bufferService.cols,
                            t
                        ], this.refresh(), this._onSelectionChange.fire();
                    }, t83.prototype._onTrim = function(e) {
                        this._model.onTrim(e) && this.refresh();
                    }, t83.prototype._getMouseBufferCoords = function(e) {
                        var t = this._mouseService.getCoords(e, this._screenElement, this._bufferService.cols, this._bufferService.rows, !0);
                        if (t) return t[0]--, t[1]--, t[1] += this._bufferService.buffer.ydisp, t;
                    }, t83.prototype._getMouseEventScrollAmount = function(e) {
                        var t = (0, _3.getCoordsRelativeToElement)(e, this._screenElement)[1], r = this._renderService.dimensions.canvasHeight;
                        return t >= 0 && t <= r ? 0 : (t > r && (t -= r), t = Math.min(Math.max(t, -50), 50), (t /= 50) / Math.abs(t) + Math.round(14 * t));
                    }, t83.prototype.shouldForceSelection = function(e) {
                        return a28.isMac ? e.altKey && this._optionsService.options.macOptionClickForcesSelection : e.shiftKey;
                    }, t83.prototype.onMouseDown = function(e) {
                        if (this._mouseDownTimeStamp = e.timeStamp, (2 !== e.button || !this.hasSelection) && 0 === e.button) {
                            if (!this._enabled) {
                                if (!this.shouldForceSelection(e)) return;
                                e.stopPropagation();
                            }
                            e.preventDefault(), this._dragScrollAmount = 0, this._enabled && e.shiftKey ? this._onIncrementalClick(e) : 1 === e.detail ? this._onSingleClick(e) : 2 === e.detail ? this._onDoubleClick(e) : 3 === e.detail && this._onTripleClick(e), this._addMouseDownListeners(), this.refresh(!0);
                        }
                    }, t83.prototype._addMouseDownListeners = function() {
                        var e = this;
                        this._screenElement.ownerDocument && (this._screenElement.ownerDocument.addEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.addEventListener("mouseup", this._mouseUpListener)), this._dragScrollIntervalTimer = window.setInterval(function() {
                            return e._dragScroll();
                        }, 50);
                    }, t83.prototype._removeMouseDownListeners = function() {
                        this._screenElement.ownerDocument && (this._screenElement.ownerDocument.removeEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.removeEventListener("mouseup", this._mouseUpListener)), clearInterval(this._dragScrollIntervalTimer), this._dragScrollIntervalTimer = void 0;
                    }, t83.prototype._onIncrementalClick = function(e) {
                        this._model.selectionStart && (this._model.selectionEnd = this._getMouseBufferCoords(e));
                    }, t83.prototype._onSingleClick = function(e) {
                        if (this._model.selectionStartLength = 0, this._model.isSelectAllActive = !1, this._activeSelectionMode = this.shouldColumnSelect(e) ? 3 : 0, this._model.selectionStart = this._getMouseBufferCoords(e), this._model.selectionStart) {
                            this._model.selectionEnd = void 0;
                            var t = this._bufferService.buffer.lines.get(this._model.selectionStart[1]);
                            t && t.length !== this._model.selectionStart[0] && 0 === t.hasWidth(this._model.selectionStart[0]) && this._model.selectionStart[0]++;
                        }
                    }, t83.prototype._onDoubleClick = function(e) {
                        this._selectWordAtCursor(e, !0) && (this._activeSelectionMode = 1);
                    }, t83.prototype._onTripleClick = function(e) {
                        var t = this._getMouseBufferCoords(e);
                        t && (this._activeSelectionMode = 2, this._selectLineAt(t[1]));
                    }, t83.prototype.shouldColumnSelect = function(e) {
                        return e.altKey && !(a28.isMac && this._optionsService.options.macOptionClickForcesSelection);
                    }, t83.prototype._onMouseMove = function(e) {
                        if (e.stopImmediatePropagation(), this._model.selectionStart) {
                            var t = this._model.selectionEnd ? [
                                this._model.selectionEnd[0],
                                this._model.selectionEnd[1]
                            ] : null;
                            if (this._model.selectionEnd = this._getMouseBufferCoords(e), this._model.selectionEnd) {
                                2 === this._activeSelectionMode ? this._model.selectionEnd[1] < this._model.selectionStart[1] ? this._model.selectionEnd[0] = 0 : this._model.selectionEnd[0] = this._bufferService.cols : 1 === this._activeSelectionMode && this._selectToWordAt(this._model.selectionEnd), this._dragScrollAmount = this._getMouseEventScrollAmount(e), 3 !== this._activeSelectionMode && (this._dragScrollAmount > 0 ? this._model.selectionEnd[0] = this._bufferService.cols : this._dragScrollAmount < 0 && (this._model.selectionEnd[0] = 0));
                                var r = this._bufferService.buffer;
                                if (this._model.selectionEnd[1] < r.lines.length) {
                                    var i = r.lines.get(this._model.selectionEnd[1]);
                                    i && 0 === i.hasWidth(this._model.selectionEnd[0]) && this._model.selectionEnd[0]++;
                                }
                                t && t[0] === this._model.selectionEnd[0] && t[1] === this._model.selectionEnd[1] || this.refresh(!0);
                            } else this.refresh(!0);
                        }
                    }, t83.prototype._dragScroll = function() {
                        if (this._model.selectionEnd && this._model.selectionStart && this._dragScrollAmount) {
                            this._onRequestScrollLines.fire({
                                amount: this._dragScrollAmount,
                                suppressScrollEvent: !1
                            });
                            var e = this._bufferService.buffer;
                            this._dragScrollAmount > 0 ? (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = this._bufferService.cols), this._model.selectionEnd[1] = Math.min(e.ydisp + this._bufferService.rows, e.lines.length - 1)) : (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = 0), this._model.selectionEnd[1] = e.ydisp), this.refresh();
                        }
                    }, t83.prototype._onMouseUp = function(e) {
                        var t = e.timeStamp - this._mouseDownTimeStamp;
                        if (this._removeMouseDownListeners(), this.selectionText.length <= 1 && t < 500 && e.altKey && this._optionsService.getOption("altClickMovesCursor")) {
                            if (this._bufferService.buffer.ybase === this._bufferService.buffer.ydisp) {
                                var r = this._mouseService.getCoords(e, this._element, this._bufferService.cols, this._bufferService.rows, !1);
                                if (r && void 0 !== r[0] && void 0 !== r[1]) {
                                    var i = (0, d3.moveToCellSequence)(r[0] - 1, r[1] - 1, this._bufferService, this._coreService.decPrivateModes.applicationCursorKeys);
                                    this._coreService.triggerDataEvent(i, !0);
                                }
                            }
                        } else this._fireEventIfSelectionChanged();
                    }, t83.prototype._fireEventIfSelectionChanged = function() {
                        var e = this._model.finalSelectionStart, t = this._model.finalSelectionEnd, r = !(!e || !t || e[0] === t[0] && e[1] === t[1]);
                        r ? e && t && (this._oldSelectionStart && this._oldSelectionEnd && e[0] === this._oldSelectionStart[0] && e[1] === this._oldSelectionStart[1] && t[0] === this._oldSelectionEnd[0] && t[1] === this._oldSelectionEnd[1] || this._fireOnSelectionChange(e, t, r)) : this._oldHasSelection && this._fireOnSelectionChange(e, t, r);
                    }, t83.prototype._fireOnSelectionChange = function(e, t, r) {
                        this._oldSelectionStart = e, this._oldSelectionEnd = t, this._oldHasSelection = r, this._onSelectionChange.fire();
                    }, t83.prototype._onBufferActivate = function(e116) {
                        var t = this;
                        this.clearSelection(), this._trimListener.dispose(), this._trimListener = e116.activeBuffer.lines.onTrim(function(e) {
                            return t._onTrim(e);
                        });
                    }, t83.prototype._convertViewportColToCharacterIndex = function(e, t) {
                        for(var r = t[0], i = 0; t[0] >= i; i++){
                            var n = e.loadCell(i, this._workCell).getChars().length;
                            0 === this._workCell.getWidth() ? r-- : n > 1 && t[0] !== i && (r += n - 1);
                        }
                        return r;
                    }, t83.prototype.setSelection = function(e, t, r) {
                        this._model.clearSelection(), this._removeMouseDownListeners(), this._model.selectionStart = [
                            e,
                            t
                        ], this._model.selectionStartLength = r, this.refresh();
                    }, t83.prototype.rightClickSelect = function(e) {
                        this._isClickInSelection(e) || (this._selectWordAtCursor(e, !1) && this.refresh(!0), this._fireEventIfSelectionChanged());
                    }, t83.prototype._getWordAt = function(e, t, r, i) {
                        if (void 0 === r && (r = !0), void 0 === i && (i = !0), !(e[0] >= this._bufferService.cols)) {
                            var n = this._bufferService.buffer, o = n.lines.get(e[1]);
                            if (o) {
                                var s = n.translateBufferLineToString(e[1], !1), a = this._convertViewportColToCharacterIndex(o, e), c = a, l = e[0] - a, h = 0, u = 0, f = 0, _ = 0;
                                if (" " === s.charAt(a)) {
                                    for(; a > 0 && " " === s.charAt(a - 1);)a--;
                                    for(; c < s.length && " " === s.charAt(c + 1);)c++;
                                } else {
                                    var d = e[0], p = e[0];
                                    0 === o.getWidth(d) && (h++, d--), 2 === o.getWidth(p) && (u++, p++);
                                    var v = o.getString(p).length;
                                    for(v > 1 && (_ += v - 1, c += v - 1); d > 0 && a > 0 && !this._isCharWordSeparator(o.loadCell(d - 1, this._workCell));){
                                        o.loadCell(d - 1, this._workCell);
                                        var g = this._workCell.getChars().length;
                                        0 === this._workCell.getWidth() ? (h++, d--) : g > 1 && (f += g - 1, a -= g - 1), a--, d--;
                                    }
                                    for(; p < o.length && c + 1 < s.length && !this._isCharWordSeparator(o.loadCell(p + 1, this._workCell));){
                                        o.loadCell(p + 1, this._workCell);
                                        var y = this._workCell.getChars().length;
                                        2 === this._workCell.getWidth() ? (u++, p++) : y > 1 && (_ += y - 1, c += y - 1), c++, p++;
                                    }
                                }
                                c++;
                                var m = a + l - h + f, S = Math.min(this._bufferService.cols, c - a + h + u - f - _);
                                if (t || "" !== s.slice(a, c).trim()) {
                                    if (r && 0 === m && 32 !== o.getCodePoint(0)) {
                                        var C = n.lines.get(e[1] - 1);
                                        if (C && o.isWrapped && 32 !== C.getCodePoint(this._bufferService.cols - 1)) {
                                            var b = this._getWordAt([
                                                this._bufferService.cols - 1,
                                                e[1] - 1
                                            ], !1, !0, !1);
                                            if (b) {
                                                var w = this._bufferService.cols - b.start;
                                                m -= w, S += w;
                                            }
                                        }
                                    }
                                    if (i && m + S === this._bufferService.cols && 32 !== o.getCodePoint(this._bufferService.cols - 1)) {
                                        var L = n.lines.get(e[1] + 1);
                                        if ((null == L ? void 0 : L.isWrapped) && 32 !== L.getCodePoint(0)) {
                                            var E = this._getWordAt([
                                                0,
                                                e[1] + 1
                                            ], !1, !1, !0);
                                            E && (S += E.length);
                                        }
                                    }
                                    return {
                                        start: m,
                                        length: S
                                    };
                                }
                            }
                        }
                    }, t83.prototype._selectWordAt = function(e, t) {
                        var r = this._getWordAt(e, t);
                        if (r) {
                            for(; r.start < 0;)r.start += this._bufferService.cols, e[1]--;
                            this._model.selectionStart = [
                                r.start,
                                e[1]
                            ], this._model.selectionStartLength = r.length;
                        }
                    }, t83.prototype._selectToWordAt = function(e) {
                        var t = this._getWordAt(e, !0);
                        if (t) {
                            for(var r = e[1]; t.start < 0;)t.start += this._bufferService.cols, r--;
                            if (!this._model.areSelectionValuesReversed()) for(; t.start + t.length > this._bufferService.cols;)t.length -= this._bufferService.cols, r++;
                            this._model.selectionEnd = [
                                this._model.areSelectionValuesReversed() ? t.start : t.start + t.length,
                                r
                            ];
                        }
                    }, t83.prototype._isCharWordSeparator = function(e) {
                        return 0 !== e.getWidth() && this._optionsService.options.wordSeparator.indexOf(e.getChars()) >= 0;
                    }, t83.prototype._selectLineAt = function(e) {
                        var t = this._bufferService.buffer.getWrappedRangeForLine(e);
                        this._model.selectionStart = [
                            0,
                            t.first
                        ], this._model.selectionEnd = [
                            this._bufferService.cols,
                            t.last
                        ], this._model.selectionStartLength = 0;
                    }, o28([
                        s30(3, f9.IBufferService),
                        s30(4, f9.ICoreService),
                        s30(5, u11.IMouseService),
                        s30(6, f9.IOptionsService),
                        s30(7, u11.IRenderService)
                    ], t83);
                }(p2.Disposable);
                t81.SelectionService = m2;
            },
            4725: (e, t, r)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ICharacterJoinerService = t.ISoundService = t.ISelectionService = t.IRenderService = t.IMouseService = t.ICoreBrowserService = t.ICharSizeService = void 0;
                var i = r(8343);
                t.ICharSizeService = (0, i.createDecorator)("CharSizeService"), t.ICoreBrowserService = (0, i.createDecorator)("CoreBrowserService"), t.IMouseService = (0, i.createDecorator)("MouseService"), t.IRenderService = (0, i.createDecorator)("RenderService"), t.ISelectionService = (0, i.createDecorator)("SelectionService"), t.ISoundService = (0, i.createDecorator)("SoundService"), t.ICharacterJoinerService = (0, i.createDecorator)("CharacterJoinerService");
            },
            357: function(e117, t84, r46) {
                var i35 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, n31 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t84, "__esModule", {
                    value: !0
                }), t84.SoundService = void 0;
                var o29 = r46(2585), s31 = function() {
                    function e118(e) {
                        this._optionsService = e;
                    }
                    return Object.defineProperty(e118, "audioContext", {
                        get: function() {
                            if (!e118._audioContext) {
                                var t = window.AudioContext || window.webkitAudioContext;
                                if (!t) return console.warn("Web Audio API is not supported by this browser. Consider upgrading to the latest version"), null;
                                e118._audioContext = new t;
                            }
                            return e118._audioContext;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e118.prototype.playBellSound = function() {
                        var t = e118.audioContext;
                        if (t) {
                            var r = t.createBufferSource();
                            t.decodeAudioData(this._base64ToArrayBuffer(this._removeMimeType(this._optionsService.options.bellSound)), function(e) {
                                r.buffer = e, r.connect(t.destination), r.start(0);
                            });
                        }
                    }, e118.prototype._base64ToArrayBuffer = function(e) {
                        for(var t = window.atob(e), r = t.length, i = new Uint8Array(r), n = 0; n < r; n++)i[n] = t.charCodeAt(n);
                        return i.buffer;
                    }, e118.prototype._removeMimeType = function(e) {
                        return e.split(",")[1];
                    }, e118 = i35([
                        n31(0, o29.IOptionsService)
                    ], e118);
                }();
                t84.SoundService = s31;
            },
            6349: (e119, t85, r47)=>{
                Object.defineProperty(t85, "__esModule", {
                    value: !0
                }), t85.CircularList = void 0;
                var i36 = r47(8460), n32 = function() {
                    function e120(e) {
                        this._maxLength = e, this.onDeleteEmitter = new i36.EventEmitter, this.onInsertEmitter = new i36.EventEmitter, this.onTrimEmitter = new i36.EventEmitter, this._array = new Array(this._maxLength), this._startIndex = 0, this._length = 0;
                    }
                    return Object.defineProperty(e120.prototype, "onDelete", {
                        get: function() {
                            return this.onDeleteEmitter.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e120.prototype, "onInsert", {
                        get: function() {
                            return this.onInsertEmitter.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e120.prototype, "onTrim", {
                        get: function() {
                            return this.onTrimEmitter.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e120.prototype, "maxLength", {
                        get: function() {
                            return this._maxLength;
                        },
                        set: function(e) {
                            if (this._maxLength !== e) {
                                for(var t = new Array(e), r = 0; r < Math.min(e, this.length); r++)t[r] = this._array[this._getCyclicIndex(r)];
                                this._array = t, this._maxLength = e, this._startIndex = 0;
                            }
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e120.prototype, "length", {
                        get: function() {
                            return this._length;
                        },
                        set: function(e) {
                            if (e > this._length) for(var t = this._length; t < e; t++)this._array[t] = void 0;
                            this._length = e;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e120.prototype.get = function(e) {
                        return this._array[this._getCyclicIndex(e)];
                    }, e120.prototype.set = function(e, t) {
                        this._array[this._getCyclicIndex(e)] = t;
                    }, e120.prototype.push = function(e) {
                        this._array[this._getCyclicIndex(this._length)] = e, this._length === this._maxLength ? (this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1)) : this._length++;
                    }, e120.prototype.recycle = function() {
                        if (this._length !== this._maxLength) throw new Error("Can only recycle when the buffer is full");
                        return this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1), this._array[this._getCyclicIndex(this._length - 1)];
                    }, Object.defineProperty(e120.prototype, "isFull", {
                        get: function() {
                            return this._length === this._maxLength;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e120.prototype.pop = function() {
                        return this._array[this._getCyclicIndex((this._length--) - 1)];
                    }, e120.prototype.splice = function(e, t) {
                        for(var r = [], i = 2; i < arguments.length; i++)r[i - 2] = arguments[i];
                        if (t) {
                            for(var n = e; n < this._length - t; n++)this._array[this._getCyclicIndex(n)] = this._array[this._getCyclicIndex(n + t)];
                            this._length -= t, this.onDeleteEmitter.fire({
                                index: e,
                                amount: t
                            });
                        }
                        for(n = this._length - 1; n >= e; n--)this._array[this._getCyclicIndex(n + r.length)] = this._array[this._getCyclicIndex(n)];
                        for(n = 0; n < r.length; n++)this._array[this._getCyclicIndex(e + n)] = r[n];
                        if (r.length && this.onInsertEmitter.fire({
                            index: e,
                            amount: r.length
                        }), this._length + r.length > this._maxLength) {
                            var o = this._length + r.length - this._maxLength;
                            this._startIndex += o, this._length = this._maxLength, this.onTrimEmitter.fire(o);
                        } else this._length += r.length;
                    }, e120.prototype.trimStart = function(e) {
                        e > this._length && (e = this._length), this._startIndex += e, this._length -= e, this.onTrimEmitter.fire(e);
                    }, e120.prototype.shiftElements = function(e, t, r) {
                        if (!(t <= 0)) {
                            if (e < 0 || e >= this._length) throw new Error("start argument out of range");
                            if (e + r < 0) throw new Error("Cannot shift elements in list beyond index 0");
                            if (r > 0) {
                                for(var i = t - 1; i >= 0; i--)this.set(e + i + r, this.get(e + i));
                                var n = e + t + r - this._length;
                                if (n > 0) for(this._length += n; this._length > this._maxLength;)this._length--, this._startIndex++, this.onTrimEmitter.fire(1);
                            } else for(i = 0; i < t; i++)this.set(e + i + r, this.get(e + i));
                        }
                    }, e120.prototype._getCyclicIndex = function(e) {
                        return (this._startIndex + e) % this._maxLength;
                    }, e120;
                }();
                t85.CircularList = n32;
            },
            1439: (e121, t86)=>{
                Object.defineProperty(t86, "__esModule", {
                    value: !0
                }), t86.clone = void 0, t86.clone = function e(t, r) {
                    if (void 0 === r && (r = 5), "object" != typeof t) return t;
                    var i = Array.isArray(t) ? [] : {
                    };
                    for(var n in t)i[n] = r <= 1 ? t[n] : t[n] && e(t[n], r - 1);
                    return i;
                };
            },
            8969: function(e122, t87, r48) {
                var i, n = this && this.__extends || (i = function(e123, t88) {
                    return i = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i(e123, t88);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                });
                Object.defineProperty(t87, "__esModule", {
                    value: !0
                }), t87.CoreTerminal = void 0;
                var o = r48(844), s = r48(2585), a = r48(4348), c = r48(7866), l = r48(744), h = r48(7302), u = r48(6975), f = r48(8460), _ = r48(1753), d = r48(3730), p = r48(1480), v = r48(7994), g = r48(9282), y = r48(5435), m = r48(5981), S = !1, C = function(e124) {
                    function t89(t90) {
                        var r = e124.call(this) || this;
                        return r._onBinary = new f.EventEmitter, r._onData = new f.EventEmitter, r._onLineFeed = new f.EventEmitter, r._onResize = new f.EventEmitter, r._onScroll = new f.EventEmitter, r._instantiationService = new a.InstantiationService, r.optionsService = new h.OptionsService(t90), r._instantiationService.setService(s.IOptionsService, r.optionsService), r._bufferService = r.register(r._instantiationService.createInstance(l.BufferService)), r._instantiationService.setService(s.IBufferService, r._bufferService), r._logService = r._instantiationService.createInstance(c.LogService), r._instantiationService.setService(s.ILogService, r._logService), r.coreService = r.register(r._instantiationService.createInstance(u.CoreService, function() {
                            return r.scrollToBottom();
                        })), r._instantiationService.setService(s.ICoreService, r.coreService), r.coreMouseService = r._instantiationService.createInstance(_.CoreMouseService), r._instantiationService.setService(s.ICoreMouseService, r.coreMouseService), r._dirtyRowService = r._instantiationService.createInstance(d.DirtyRowService), r._instantiationService.setService(s.IDirtyRowService, r._dirtyRowService), r.unicodeService = r._instantiationService.createInstance(p.UnicodeService), r._instantiationService.setService(s.IUnicodeService, r.unicodeService), r._charsetService = r._instantiationService.createInstance(v.CharsetService), r._instantiationService.setService(s.ICharsetService, r._charsetService), r._inputHandler = new y.InputHandler(r._bufferService, r._charsetService, r.coreService, r._dirtyRowService, r._logService, r.optionsService, r.coreMouseService, r.unicodeService), r.register((0, f.forwardEvent)(r._inputHandler.onLineFeed, r._onLineFeed)), r.register(r._inputHandler), r.register((0, f.forwardEvent)(r._bufferService.onResize, r._onResize)), r.register((0, f.forwardEvent)(r.coreService.onData, r._onData)), r.register((0, f.forwardEvent)(r.coreService.onBinary, r._onBinary)), r.register(r.optionsService.onOptionChange(function(e) {
                            return r._updateOptions(e);
                        })), r.register(r._bufferService.onScroll(function(e) {
                            r._onScroll.fire({
                                position: r._bufferService.buffer.ydisp,
                                source: 0
                            }), r._dirtyRowService.markRangeDirty(r._bufferService.buffer.scrollTop, r._bufferService.buffer.scrollBottom);
                        })), r.register(r._inputHandler.onScroll(function(e) {
                            r._onScroll.fire({
                                position: r._bufferService.buffer.ydisp,
                                source: 0
                            }), r._dirtyRowService.markRangeDirty(r._bufferService.buffer.scrollTop, r._bufferService.buffer.scrollBottom);
                        })), r._writeBuffer = new m.WriteBuffer(function(e, t) {
                            return r._inputHandler.parse(e, t);
                        }), r;
                    }
                    return n(t89, e124), Object.defineProperty(t89.prototype, "onBinary", {
                        get: function() {
                            return this._onBinary.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t89.prototype, "onData", {
                        get: function() {
                            return this._onData.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t89.prototype, "onLineFeed", {
                        get: function() {
                            return this._onLineFeed.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t89.prototype, "onResize", {
                        get: function() {
                            return this._onResize.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t89.prototype, "onScroll", {
                        get: function() {
                            var e = this;
                            return this._onScrollApi || (this._onScrollApi = new f.EventEmitter, this.register(this._onScroll.event(function(t) {
                                var r;
                                null === (r = e._onScrollApi) || void 0 === r || r.fire(t.position);
                            }))), this._onScrollApi.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t89.prototype, "cols", {
                        get: function() {
                            return this._bufferService.cols;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t89.prototype, "rows", {
                        get: function() {
                            return this._bufferService.rows;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t89.prototype, "buffers", {
                        get: function() {
                            return this._bufferService.buffers;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t89.prototype, "options", {
                        get: function() {
                            return this.optionsService.options;
                        },
                        set: function(e) {
                            for(var t in e)this.optionsService.options[t] = e[t];
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t89.prototype.dispose = function() {
                        var t;
                        this._isDisposed || (e124.prototype.dispose.call(this), null === (t = this._windowsMode) || void 0 === t || t.dispose(), this._windowsMode = void 0);
                    }, t89.prototype.write = function(e, t) {
                        this._writeBuffer.write(e, t);
                    }, t89.prototype.writeSync = function(e, t) {
                        this._logService.logLevel <= s.LogLevelEnum.WARN && !S && (this._logService.warn("writeSync is unreliable and will be removed soon."), S = !0), this._writeBuffer.writeSync(e, t);
                    }, t89.prototype.resize = function(e, t) {
                        isNaN(e) || isNaN(t) || (e = Math.max(e, l.MINIMUM_COLS), t = Math.max(t, l.MINIMUM_ROWS), this._bufferService.resize(e, t));
                    }, t89.prototype.scroll = function(e, t) {
                        void 0 === t && (t = !1), this._bufferService.scroll(e, t);
                    }, t89.prototype.scrollLines = function(e, t, r) {
                        this._bufferService.scrollLines(e, t, r);
                    }, t89.prototype.scrollPages = function(e) {
                        this._bufferService.scrollPages(e);
                    }, t89.prototype.scrollToTop = function() {
                        this._bufferService.scrollToTop();
                    }, t89.prototype.scrollToBottom = function() {
                        this._bufferService.scrollToBottom();
                    }, t89.prototype.scrollToLine = function(e) {
                        this._bufferService.scrollToLine(e);
                    }, t89.prototype.registerEscHandler = function(e, t) {
                        return this._inputHandler.registerEscHandler(e, t);
                    }, t89.prototype.registerDcsHandler = function(e, t) {
                        return this._inputHandler.registerDcsHandler(e, t);
                    }, t89.prototype.registerCsiHandler = function(e, t) {
                        return this._inputHandler.registerCsiHandler(e, t);
                    }, t89.prototype.registerOscHandler = function(e, t) {
                        return this._inputHandler.registerOscHandler(e, t);
                    }, t89.prototype._setup = function() {
                        this.optionsService.options.windowsMode && this._enableWindowsMode();
                    }, t89.prototype.reset = function() {
                        this._inputHandler.reset(), this._bufferService.reset(), this._charsetService.reset(), this.coreService.reset(), this.coreMouseService.reset();
                    }, t89.prototype._updateOptions = function(e) {
                        var t;
                        switch(e){
                            case "scrollback":
                                this.buffers.resize(this.cols, this.rows);
                                break;
                            case "windowsMode":
                                this.optionsService.options.windowsMode ? this._enableWindowsMode() : (null === (t = this._windowsMode) || void 0 === t || t.dispose(), this._windowsMode = void 0);
                        }
                    }, t89.prototype._enableWindowsMode = function() {
                        var e125 = this;
                        if (!this._windowsMode) {
                            var t = [];
                            t.push(this.onLineFeed(g.updateWindowsModeWrappedState.bind(null, this._bufferService))), t.push(this.registerCsiHandler({
                                final: "H"
                            }, function() {
                                return (0, g.updateWindowsModeWrappedState)(e125._bufferService), !1;
                            })), this._windowsMode = {
                                dispose: function() {
                                    for(var e = 0, r = t; e < r.length; e++)r[e].dispose();
                                }
                            };
                        }
                    }, t89;
                }(o.Disposable);
                t87.CoreTerminal = C;
            },
            8460: (e126, t91)=>{
                Object.defineProperty(t91, "__esModule", {
                    value: !0
                }), t91.forwardEvent = t91.EventEmitter = void 0;
                var r49 = function() {
                    function e127() {
                        this._listeners = [], this._disposed = !1;
                    }
                    return Object.defineProperty(e127.prototype, "event", {
                        get: function() {
                            var e = this;
                            return this._event || (this._event = function(t) {
                                return e._listeners.push(t), {
                                    dispose: function() {
                                        if (!e._disposed) {
                                            for(var r = 0; r < e._listeners.length; r++)if (e._listeners[r] === t) return void e._listeners.splice(r, 1);
                                        }
                                    }
                                };
                            }), this._event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e127.prototype.fire = function(e, t) {
                        for(var r = [], i = 0; i < this._listeners.length; i++)r.push(this._listeners[i]);
                        for(i = 0; i < r.length; i++)r[i].call(void 0, e, t);
                    }, e127.prototype.dispose = function() {
                        this._listeners && (this._listeners.length = 0), this._disposed = !0;
                    }, e127;
                }();
                t91.EventEmitter = r49, t91.forwardEvent = function(e128, t) {
                    return e128(function(e) {
                        return t.fire(e);
                    });
                };
            },
            5435: function(e129, t92, r50) {
                var i37, n33 = this && this.__extends || (i37 = function(e130, t93) {
                    return i37 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i37(e130, t93);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i37(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                });
                Object.defineProperty(t92, "__esModule", {
                    value: !0
                }), t92.InputHandler = t92.WindowsOptionsReportType = void 0;
                var o30, s32 = r50(2584), a29 = r50(7116), c16 = r50(2015), l18 = r50(844), h14 = r50(8273), u = r50(482), f10 = r50(8437), _4 = r50(8460), d4 = r50(643), p3 = r50(511), v3 = r50(3734), g3 = r50(2585), y = r50(6242), m3 = r50(6351), S2 = r50(5941), C1 = {
                    "(": 0,
                    ")": 1,
                    "*": 2,
                    "+": 3,
                    "-": 1,
                    ".": 2
                }, b = 131072;
                function w(e, t) {
                    if (e > 24) return t.setWinLines || !1;
                    switch(e){
                        case 1:
                            return !!t.restoreWin;
                        case 2:
                            return !!t.minimizeWin;
                        case 3:
                            return !!t.setWinPosition;
                        case 4:
                            return !!t.setWinSizePixels;
                        case 5:
                            return !!t.raiseWin;
                        case 6:
                            return !!t.lowerWin;
                        case 7:
                            return !!t.refreshWin;
                        case 8:
                            return !!t.setWinSizeChars;
                        case 9:
                            return !!t.maximizeWin;
                        case 10:
                            return !!t.fullscreenWin;
                        case 11:
                            return !!t.getWinState;
                        case 13:
                            return !!t.getWinPosition;
                        case 14:
                            return !!t.getWinSizePixels;
                        case 15:
                            return !!t.getScreenSizePixels;
                        case 16:
                            return !!t.getCellSizePixels;
                        case 18:
                            return !!t.getWinSizeChars;
                        case 19:
                            return !!t.getScreenSizeChars;
                        case 20:
                            return !!t.getIconTitle;
                        case 21:
                            return !!t.getWinTitle;
                        case 22:
                            return !!t.pushTitle;
                        case 23:
                            return !!t.popTitle;
                        case 24:
                            return !!t.setWinLines;
                    }
                    return !1;
                }
                !function(e) {
                    e[e.GET_WIN_SIZE_PIXELS = 0] = "GET_WIN_SIZE_PIXELS", e[e.GET_CELL_SIZE_PIXELS = 1] = "GET_CELL_SIZE_PIXELS";
                }(o30 = t92.WindowsOptionsReportType || (t92.WindowsOptionsReportType = {
                }));
                var L = function() {
                    function e131(e, t, r, i) {
                        this._bufferService = e, this._coreService = t, this._logService = r, this._optionsService = i, this._data = new Uint32Array(0);
                    }
                    return e131.prototype.hook = function(e) {
                        this._data = new Uint32Array(0);
                    }, e131.prototype.put = function(e, t, r) {
                        this._data = (0, h14.concat)(this._data, e.subarray(t, r));
                    }, e131.prototype.unhook = function(e) {
                        if (!e) return this._data = new Uint32Array(0), !0;
                        var t = (0, u.utf32ToString)(this._data);
                        switch(this._data = new Uint32Array(0), t){
                            case '"q':
                                this._coreService.triggerDataEvent(s32.C0.ESC + 'P1$r0"q' + s32.C0.ESC + "\\");
                                break;
                            case '"p':
                                this._coreService.triggerDataEvent(s32.C0.ESC + 'P1$r61;1"p' + s32.C0.ESC + "\\");
                                break;
                            case "r":
                                var r = this._bufferService.buffer.scrollTop + 1 + ";" + (this._bufferService.buffer.scrollBottom + 1) + "r";
                                this._coreService.triggerDataEvent(s32.C0.ESC + "P1$r" + r + s32.C0.ESC + "\\");
                                break;
                            case "m":
                                this._coreService.triggerDataEvent(s32.C0.ESC + "P1$r0m" + s32.C0.ESC + "\\");
                                break;
                            case " q":
                                var i = {
                                    block: 2,
                                    underline: 4,
                                    bar: 6
                                }[this._optionsService.options.cursorStyle];
                                i -= this._optionsService.options.cursorBlink ? 1 : 0, this._coreService.triggerDataEvent(s32.C0.ESC + "P1$r" + i + " q" + s32.C0.ESC + "\\");
                                break;
                            default:
                                this._logService.debug("Unknown DCS $q %s", t), this._coreService.triggerDataEvent(s32.C0.ESC + "P0$r" + s32.C0.ESC + "\\");
                        }
                        return !0;
                    }, e131;
                }(), E = function(e132) {
                    function t94(t95, r51, i, n, o, l, h, d, v) {
                        void 0 === v && (v = new c16.EscapeSequenceParser);
                        var g = e132.call(this) || this;
                        g._bufferService = t95, g._charsetService = r51, g._coreService = i, g._dirtyRowService = n, g._logService = o, g._optionsService = l, g._coreMouseService = h, g._unicodeService = d, g._parser = v, g._parseBuffer = new Uint32Array(4096), g._stringDecoder = new u.StringToUtf32, g._utf8Decoder = new u.Utf8ToUtf32, g._workCell = new p3.CellData, g._windowTitle = "", g._iconName = "", g._windowTitleStack = [], g._iconNameStack = [], g._curAttrData = f10.DEFAULT_ATTR_DATA.clone(), g._eraseAttrDataInternal = f10.DEFAULT_ATTR_DATA.clone(), g._onRequestBell = new _4.EventEmitter, g._onRequestRefreshRows = new _4.EventEmitter, g._onRequestReset = new _4.EventEmitter, g._onRequestSendFocus = new _4.EventEmitter, g._onRequestSyncScrollBar = new _4.EventEmitter, g._onRequestWindowsOptionsReport = new _4.EventEmitter, g._onA11yChar = new _4.EventEmitter, g._onA11yTab = new _4.EventEmitter, g._onCursorMove = new _4.EventEmitter, g._onLineFeed = new _4.EventEmitter, g._onScroll = new _4.EventEmitter, g._onTitleChange = new _4.EventEmitter, g._onColor = new _4.EventEmitter, g._parseStack = {
                            paused: !1,
                            cursorStartX: 0,
                            cursorStartY: 0,
                            decodedLength: 0,
                            position: 0
                        }, g._specialColors = [
                            256,
                            257,
                            258
                        ], g.register(g._parser), g._activeBuffer = g._bufferService.buffer, g.register(g._bufferService.buffers.onBufferActivate(function(e) {
                            return g._activeBuffer = e.activeBuffer;
                        })), g._parser.setCsiHandlerFallback(function(e, t) {
                            g._logService.debug("Unknown CSI code: ", {
                                identifier: g._parser.identToString(e),
                                params: t.toArray()
                            });
                        }), g._parser.setEscHandlerFallback(function(e) {
                            g._logService.debug("Unknown ESC code: ", {
                                identifier: g._parser.identToString(e)
                            });
                        }), g._parser.setExecuteHandlerFallback(function(e) {
                            g._logService.debug("Unknown EXECUTE code: ", {
                                code: e
                            });
                        }), g._parser.setOscHandlerFallback(function(e, t, r) {
                            g._logService.debug("Unknown OSC code: ", {
                                identifier: e,
                                action: t,
                                data: r
                            });
                        }), g._parser.setDcsHandlerFallback(function(e, t, r) {
                            "HOOK" === t && (r = r.toArray()), g._logService.debug("Unknown DCS code: ", {
                                identifier: g._parser.identToString(e),
                                action: t,
                                payload: r
                            });
                        }), g._parser.setPrintHandler(function(e, t, r) {
                            return g.print(e, t, r);
                        }), g._parser.registerCsiHandler({
                            final: "@"
                        }, function(e) {
                            return g.insertChars(e);
                        }), g._parser.registerCsiHandler({
                            intermediates: " ",
                            final: "@"
                        }, function(e) {
                            return g.scrollLeft(e);
                        }), g._parser.registerCsiHandler({
                            final: "A"
                        }, function(e) {
                            return g.cursorUp(e);
                        }), g._parser.registerCsiHandler({
                            intermediates: " ",
                            final: "A"
                        }, function(e) {
                            return g.scrollRight(e);
                        }), g._parser.registerCsiHandler({
                            final: "B"
                        }, function(e) {
                            return g.cursorDown(e);
                        }), g._parser.registerCsiHandler({
                            final: "C"
                        }, function(e) {
                            return g.cursorForward(e);
                        }), g._parser.registerCsiHandler({
                            final: "D"
                        }, function(e) {
                            return g.cursorBackward(e);
                        }), g._parser.registerCsiHandler({
                            final: "E"
                        }, function(e) {
                            return g.cursorNextLine(e);
                        }), g._parser.registerCsiHandler({
                            final: "F"
                        }, function(e) {
                            return g.cursorPrecedingLine(e);
                        }), g._parser.registerCsiHandler({
                            final: "G"
                        }, function(e) {
                            return g.cursorCharAbsolute(e);
                        }), g._parser.registerCsiHandler({
                            final: "H"
                        }, function(e) {
                            return g.cursorPosition(e);
                        }), g._parser.registerCsiHandler({
                            final: "I"
                        }, function(e) {
                            return g.cursorForwardTab(e);
                        }), g._parser.registerCsiHandler({
                            final: "J"
                        }, function(e) {
                            return g.eraseInDisplay(e);
                        }), g._parser.registerCsiHandler({
                            prefix: "?",
                            final: "J"
                        }, function(e) {
                            return g.eraseInDisplay(e);
                        }), g._parser.registerCsiHandler({
                            final: "K"
                        }, function(e) {
                            return g.eraseInLine(e);
                        }), g._parser.registerCsiHandler({
                            prefix: "?",
                            final: "K"
                        }, function(e) {
                            return g.eraseInLine(e);
                        }), g._parser.registerCsiHandler({
                            final: "L"
                        }, function(e) {
                            return g.insertLines(e);
                        }), g._parser.registerCsiHandler({
                            final: "M"
                        }, function(e) {
                            return g.deleteLines(e);
                        }), g._parser.registerCsiHandler({
                            final: "P"
                        }, function(e) {
                            return g.deleteChars(e);
                        }), g._parser.registerCsiHandler({
                            final: "S"
                        }, function(e) {
                            return g.scrollUp(e);
                        }), g._parser.registerCsiHandler({
                            final: "T"
                        }, function(e) {
                            return g.scrollDown(e);
                        }), g._parser.registerCsiHandler({
                            final: "X"
                        }, function(e) {
                            return g.eraseChars(e);
                        }), g._parser.registerCsiHandler({
                            final: "Z"
                        }, function(e) {
                            return g.cursorBackwardTab(e);
                        }), g._parser.registerCsiHandler({
                            final: "`"
                        }, function(e) {
                            return g.charPosAbsolute(e);
                        }), g._parser.registerCsiHandler({
                            final: "a"
                        }, function(e) {
                            return g.hPositionRelative(e);
                        }), g._parser.registerCsiHandler({
                            final: "b"
                        }, function(e) {
                            return g.repeatPrecedingCharacter(e);
                        }), g._parser.registerCsiHandler({
                            final: "c"
                        }, function(e) {
                            return g.sendDeviceAttributesPrimary(e);
                        }), g._parser.registerCsiHandler({
                            prefix: ">",
                            final: "c"
                        }, function(e) {
                            return g.sendDeviceAttributesSecondary(e);
                        }), g._parser.registerCsiHandler({
                            final: "d"
                        }, function(e) {
                            return g.linePosAbsolute(e);
                        }), g._parser.registerCsiHandler({
                            final: "e"
                        }, function(e) {
                            return g.vPositionRelative(e);
                        }), g._parser.registerCsiHandler({
                            final: "f"
                        }, function(e) {
                            return g.hVPosition(e);
                        }), g._parser.registerCsiHandler({
                            final: "g"
                        }, function(e) {
                            return g.tabClear(e);
                        }), g._parser.registerCsiHandler({
                            final: "h"
                        }, function(e) {
                            return g.setMode(e);
                        }), g._parser.registerCsiHandler({
                            prefix: "?",
                            final: "h"
                        }, function(e) {
                            return g.setModePrivate(e);
                        }), g._parser.registerCsiHandler({
                            final: "l"
                        }, function(e) {
                            return g.resetMode(e);
                        }), g._parser.registerCsiHandler({
                            prefix: "?",
                            final: "l"
                        }, function(e) {
                            return g.resetModePrivate(e);
                        }), g._parser.registerCsiHandler({
                            final: "m"
                        }, function(e) {
                            return g.charAttributes(e);
                        }), g._parser.registerCsiHandler({
                            final: "n"
                        }, function(e) {
                            return g.deviceStatus(e);
                        }), g._parser.registerCsiHandler({
                            prefix: "?",
                            final: "n"
                        }, function(e) {
                            return g.deviceStatusPrivate(e);
                        }), g._parser.registerCsiHandler({
                            intermediates: "!",
                            final: "p"
                        }, function(e) {
                            return g.softReset(e);
                        }), g._parser.registerCsiHandler({
                            intermediates: " ",
                            final: "q"
                        }, function(e) {
                            return g.setCursorStyle(e);
                        }), g._parser.registerCsiHandler({
                            final: "r"
                        }, function(e) {
                            return g.setScrollRegion(e);
                        }), g._parser.registerCsiHandler({
                            final: "s"
                        }, function(e) {
                            return g.saveCursor(e);
                        }), g._parser.registerCsiHandler({
                            final: "t"
                        }, function(e) {
                            return g.windowOptions(e);
                        }), g._parser.registerCsiHandler({
                            final: "u"
                        }, function(e) {
                            return g.restoreCursor(e);
                        }), g._parser.registerCsiHandler({
                            intermediates: "'",
                            final: "}"
                        }, function(e) {
                            return g.insertColumns(e);
                        }), g._parser.registerCsiHandler({
                            intermediates: "'",
                            final: "~"
                        }, function(e) {
                            return g.deleteColumns(e);
                        }), g._parser.setExecuteHandler(s32.C0.BEL, function() {
                            return g.bell();
                        }), g._parser.setExecuteHandler(s32.C0.LF, function() {
                            return g.lineFeed();
                        }), g._parser.setExecuteHandler(s32.C0.VT, function() {
                            return g.lineFeed();
                        }), g._parser.setExecuteHandler(s32.C0.FF, function() {
                            return g.lineFeed();
                        }), g._parser.setExecuteHandler(s32.C0.CR, function() {
                            return g.carriageReturn();
                        }), g._parser.setExecuteHandler(s32.C0.BS, function() {
                            return g.backspace();
                        }), g._parser.setExecuteHandler(s32.C0.HT, function() {
                            return g.tab();
                        }), g._parser.setExecuteHandler(s32.C0.SO, function() {
                            return g.shiftOut();
                        }), g._parser.setExecuteHandler(s32.C0.SI, function() {
                            return g.shiftIn();
                        }), g._parser.setExecuteHandler(s32.C1.IND, function() {
                            return g.index();
                        }), g._parser.setExecuteHandler(s32.C1.NEL, function() {
                            return g.nextLine();
                        }), g._parser.setExecuteHandler(s32.C1.HTS, function() {
                            return g.tabSet();
                        }), g._parser.registerOscHandler(0, new y.OscHandler(function(e) {
                            return g.setTitle(e), g.setIconName(e), !0;
                        })), g._parser.registerOscHandler(1, new y.OscHandler(function(e) {
                            return g.setIconName(e);
                        })), g._parser.registerOscHandler(2, new y.OscHandler(function(e) {
                            return g.setTitle(e);
                        })), g._parser.registerOscHandler(4, new y.OscHandler(function(e) {
                            return g.setOrReportIndexedColor(e);
                        })), g._parser.registerOscHandler(10, new y.OscHandler(function(e) {
                            return g.setOrReportFgColor(e);
                        })), g._parser.registerOscHandler(11, new y.OscHandler(function(e) {
                            return g.setOrReportBgColor(e);
                        })), g._parser.registerOscHandler(12, new y.OscHandler(function(e) {
                            return g.setOrReportCursorColor(e);
                        })), g._parser.registerOscHandler(104, new y.OscHandler(function(e) {
                            return g.restoreIndexedColor(e);
                        })), g._parser.registerOscHandler(110, new y.OscHandler(function(e) {
                            return g.restoreFgColor(e);
                        })), g._parser.registerOscHandler(111, new y.OscHandler(function(e) {
                            return g.restoreBgColor(e);
                        })), g._parser.registerOscHandler(112, new y.OscHandler(function(e) {
                            return g.restoreCursorColor(e);
                        })), g._parser.registerEscHandler({
                            final: "7"
                        }, function() {
                            return g.saveCursor();
                        }), g._parser.registerEscHandler({
                            final: "8"
                        }, function() {
                            return g.restoreCursor();
                        }), g._parser.registerEscHandler({
                            final: "D"
                        }, function() {
                            return g.index();
                        }), g._parser.registerEscHandler({
                            final: "E"
                        }, function() {
                            return g.nextLine();
                        }), g._parser.registerEscHandler({
                            final: "H"
                        }, function() {
                            return g.tabSet();
                        }), g._parser.registerEscHandler({
                            final: "M"
                        }, function() {
                            return g.reverseIndex();
                        }), g._parser.registerEscHandler({
                            final: "="
                        }, function() {
                            return g.keypadApplicationMode();
                        }), g._parser.registerEscHandler({
                            final: ">"
                        }, function() {
                            return g.keypadNumericMode();
                        }), g._parser.registerEscHandler({
                            final: "c"
                        }, function() {
                            return g.fullReset();
                        }), g._parser.registerEscHandler({
                            final: "n"
                        }, function() {
                            return g.setgLevel(2);
                        }), g._parser.registerEscHandler({
                            final: "o"
                        }, function() {
                            return g.setgLevel(3);
                        }), g._parser.registerEscHandler({
                            final: "|"
                        }, function() {
                            return g.setgLevel(3);
                        }), g._parser.registerEscHandler({
                            final: "}"
                        }, function() {
                            return g.setgLevel(2);
                        }), g._parser.registerEscHandler({
                            final: "~"
                        }, function() {
                            return g.setgLevel(1);
                        }), g._parser.registerEscHandler({
                            intermediates: "%",
                            final: "@"
                        }, function() {
                            return g.selectDefaultCharset();
                        }), g._parser.registerEscHandler({
                            intermediates: "%",
                            final: "G"
                        }, function() {
                            return g.selectDefaultCharset();
                        });
                        var m = function(e) {
                            S._parser.registerEscHandler({
                                intermediates: "(",
                                final: e
                            }, function() {
                                return g.selectCharset("(" + e);
                            }), S._parser.registerEscHandler({
                                intermediates: ")",
                                final: e
                            }, function() {
                                return g.selectCharset(")" + e);
                            }), S._parser.registerEscHandler({
                                intermediates: "*",
                                final: e
                            }, function() {
                                return g.selectCharset("*" + e);
                            }), S._parser.registerEscHandler({
                                intermediates: "+",
                                final: e
                            }, function() {
                                return g.selectCharset("+" + e);
                            }), S._parser.registerEscHandler({
                                intermediates: "-",
                                final: e
                            }, function() {
                                return g.selectCharset("-" + e);
                            }), S._parser.registerEscHandler({
                                intermediates: ".",
                                final: e
                            }, function() {
                                return g.selectCharset("." + e);
                            }), S._parser.registerEscHandler({
                                intermediates: "/",
                                final: e
                            }, function() {
                                return g.selectCharset("/" + e);
                            });
                        }, S = this;
                        for(var C in a29.CHARSETS)m(C);
                        return g._parser.registerEscHandler({
                            intermediates: "#",
                            final: "8"
                        }, function() {
                            return g.screenAlignmentPattern();
                        }), g._parser.setErrorHandler(function(e) {
                            return g._logService.error("Parsing error: ", e), e;
                        }), g._parser.registerDcsHandler({
                            intermediates: "$",
                            final: "q"
                        }, new L(g._bufferService, g._coreService, g._logService, g._optionsService)), g;
                    }
                    return n33(t94, e132), Object.defineProperty(t94.prototype, "onRequestBell", {
                        get: function() {
                            return this._onRequestBell.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t94.prototype, "onRequestRefreshRows", {
                        get: function() {
                            return this._onRequestRefreshRows.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t94.prototype, "onRequestReset", {
                        get: function() {
                            return this._onRequestReset.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t94.prototype, "onRequestSendFocus", {
                        get: function() {
                            return this._onRequestSendFocus.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t94.prototype, "onRequestSyncScrollBar", {
                        get: function() {
                            return this._onRequestSyncScrollBar.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t94.prototype, "onRequestWindowsOptionsReport", {
                        get: function() {
                            return this._onRequestWindowsOptionsReport.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t94.prototype, "onA11yChar", {
                        get: function() {
                            return this._onA11yChar.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t94.prototype, "onA11yTab", {
                        get: function() {
                            return this._onA11yTab.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t94.prototype, "onCursorMove", {
                        get: function() {
                            return this._onCursorMove.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t94.prototype, "onLineFeed", {
                        get: function() {
                            return this._onLineFeed.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t94.prototype, "onScroll", {
                        get: function() {
                            return this._onScroll.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t94.prototype, "onTitleChange", {
                        get: function() {
                            return this._onTitleChange.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t94.prototype, "onColor", {
                        get: function() {
                            return this._onColor.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t94.prototype.dispose = function() {
                        e132.prototype.dispose.call(this);
                    }, t94.prototype._preserveStack = function(e, t, r, i) {
                        this._parseStack.paused = !0, this._parseStack.cursorStartX = e, this._parseStack.cursorStartY = t, this._parseStack.decodedLength = r, this._parseStack.position = i;
                    }, t94.prototype._logSlowResolvingAsync = function(e133) {
                        this._logService.logLevel <= g3.LogLevelEnum.WARN && Promise.race([
                            e133,
                            new Promise(function(e, t) {
                                return setTimeout(function() {
                                    return t("#SLOW_TIMEOUT");
                                }, 5000);
                            })
                        ]).catch(function(e) {
                            if ("#SLOW_TIMEOUT" !== e) throw e;
                            console.warn("async parser handler taking longer than 5000 ms");
                        });
                    }, t94.prototype.parse = function(e134, t) {
                        var r, i = this._activeBuffer.x, n = this._activeBuffer.y, o = 0, s = this._parseStack.paused;
                        if (s) {
                            if (r = this._parser.parse(this._parseBuffer, this._parseStack.decodedLength, t)) return this._logSlowResolvingAsync(r), r;
                            i = this._parseStack.cursorStartX, n = this._parseStack.cursorStartY, this._parseStack.paused = !1, e134.length > b && (o = this._parseStack.position + b);
                        }
                        if (this._logService.logLevel <= g3.LogLevelEnum.DEBUG && this._logService.debug("parsing data" + ("string" == typeof e134 ? ' "' + e134 + '"' : ""), "string" == typeof e134 ? e134.split("").map(function(e) {
                            return e.charCodeAt(0);
                        }) : e134), this._parseBuffer.length < e134.length && this._parseBuffer.length < b && (this._parseBuffer = new Uint32Array(Math.min(e134.length, b))), s || this._dirtyRowService.clearRange(), e134.length > b) for(var a = o; a < e134.length; a += b){
                            var c = a + b < e134.length ? a + b : e134.length, l = "string" == typeof e134 ? this._stringDecoder.decode(e134.substring(a, c), this._parseBuffer) : this._utf8Decoder.decode(e134.subarray(a, c), this._parseBuffer);
                            if (r = this._parser.parse(this._parseBuffer, l)) return this._preserveStack(i, n, l, a), this._logSlowResolvingAsync(r), r;
                        }
                        else if (!s && (l = "string" == typeof e134 ? this._stringDecoder.decode(e134, this._parseBuffer) : this._utf8Decoder.decode(e134, this._parseBuffer), r = this._parser.parse(this._parseBuffer, l))) return this._preserveStack(i, n, l, 0), this._logSlowResolvingAsync(r), r;
                        this._activeBuffer.x === i && this._activeBuffer.y === n || this._onCursorMove.fire(), this._onRequestRefreshRows.fire(this._dirtyRowService.start, this._dirtyRowService.end);
                    }, t94.prototype.print = function(e, t, r) {
                        var i, n, o = this._charsetService.charset, s = this._optionsService.options.screenReaderMode, a = this._bufferService.cols, c = this._coreService.decPrivateModes.wraparound, l = this._coreService.modes.insertMode, h = this._curAttrData, f = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                        this._dirtyRowService.markDirty(this._activeBuffer.y), this._activeBuffer.x && r - t > 0 && 2 === f.getWidth(this._activeBuffer.x - 1) && f.setCellFromCodePoint(this._activeBuffer.x - 1, 0, 1, h.fg, h.bg, h.extended);
                        for(var _ = t; _ < r; ++_){
                            if (i = e[_], n = this._unicodeService.wcwidth(i), i < 127 && o) {
                                var p = o[String.fromCharCode(i)];
                                p && (i = p.charCodeAt(0));
                            }
                            if (s && this._onA11yChar.fire((0, u.stringFromCodePoint)(i)), n || !this._activeBuffer.x) {
                                if (this._activeBuffer.x + n - 1 >= a) {
                                    if (c) {
                                        for(; this._activeBuffer.x < a;)f.setCellFromCodePoint(this._activeBuffer.x++, 0, 1, h.fg, h.bg, h.extended);
                                        this._activeBuffer.x = 0, this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData(), !0)) : (this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = !0), f = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                                    } else if (this._activeBuffer.x = a - 1, 2 === n) continue;
                                }
                                if (l && (f.insertCells(this._activeBuffer.x, n, this._activeBuffer.getNullCell(h), h), 2 === f.getWidth(a - 1) && f.setCellFromCodePoint(a - 1, d4.NULL_CELL_CODE, d4.NULL_CELL_WIDTH, h.fg, h.bg, h.extended)), f.setCellFromCodePoint(this._activeBuffer.x++, i, n, h.fg, h.bg, h.extended), n > 0) for(; --n;)f.setCellFromCodePoint(this._activeBuffer.x++, 0, 0, h.fg, h.bg, h.extended);
                            } else f.getWidth(this._activeBuffer.x - 1) ? f.addCodepointToCell(this._activeBuffer.x - 1, i) : f.addCodepointToCell(this._activeBuffer.x - 2, i);
                        }
                        r - t > 0 && (f.loadCell(this._activeBuffer.x - 1, this._workCell), 2 === this._workCell.getWidth() || this._workCell.getCode() > 65535 ? this._parser.precedingCodepoint = 0 : this._workCell.isCombined() ? this._parser.precedingCodepoint = this._workCell.getChars().charCodeAt(0) : this._parser.precedingCodepoint = this._workCell.content), this._activeBuffer.x < a && r - t > 0 && 0 === f.getWidth(this._activeBuffer.x) && !f.hasContent(this._activeBuffer.x) && f.setCellFromCodePoint(this._activeBuffer.x, 0, 1, h.fg, h.bg, h.extended), this._dirtyRowService.markDirty(this._activeBuffer.y);
                    }, t94.prototype.registerCsiHandler = function(e135, t) {
                        var r = this;
                        return "t" !== e135.final || e135.prefix || e135.intermediates ? this._parser.registerCsiHandler(e135, t) : this._parser.registerCsiHandler(e135, function(e) {
                            return !w(e.params[0], r._optionsService.options.windowOptions) || t(e);
                        });
                    }, t94.prototype.registerDcsHandler = function(e, t) {
                        return this._parser.registerDcsHandler(e, new m3.DcsHandler(t));
                    }, t94.prototype.registerEscHandler = function(e, t) {
                        return this._parser.registerEscHandler(e, t);
                    }, t94.prototype.registerOscHandler = function(e, t) {
                        return this._parser.registerOscHandler(e, new y.OscHandler(t));
                    }, t94.prototype.bell = function() {
                        return this._onRequestBell.fire(), !0;
                    }, t94.prototype.lineFeed = function() {
                        return this._dirtyRowService.markDirty(this._activeBuffer.y), this._optionsService.options.convertEol && (this._activeBuffer.x = 0), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._activeBuffer.x >= this._bufferService.cols && this._activeBuffer.x--, this._dirtyRowService.markDirty(this._activeBuffer.y), this._onLineFeed.fire(), !0;
                    }, t94.prototype.carriageReturn = function() {
                        return this._activeBuffer.x = 0, !0;
                    }, t94.prototype.backspace = function() {
                        var e;
                        if (!this._coreService.decPrivateModes.reverseWraparound) return this._restrictCursor(), this._activeBuffer.x > 0 && this._activeBuffer.x--, !0;
                        if (this._restrictCursor(this._bufferService.cols), this._activeBuffer.x > 0) this._activeBuffer.x--;
                        else if (0 === this._activeBuffer.x && this._activeBuffer.y > this._activeBuffer.scrollTop && this._activeBuffer.y <= this._activeBuffer.scrollBottom && (null === (e = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y)) || void 0 === e ? void 0 : e.isWrapped)) {
                            this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = !1, this._activeBuffer.y--, this._activeBuffer.x = this._bufferService.cols - 1;
                            var t = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                            t.hasWidth(this._activeBuffer.x) && !t.hasContent(this._activeBuffer.x) && this._activeBuffer.x--;
                        }
                        return this._restrictCursor(), !0;
                    }, t94.prototype.tab = function() {
                        if (this._activeBuffer.x >= this._bufferService.cols) return !0;
                        var e = this._activeBuffer.x;
                        return this._activeBuffer.x = this._activeBuffer.nextStop(), this._optionsService.options.screenReaderMode && this._onA11yTab.fire(this._activeBuffer.x - e), !0;
                    }, t94.prototype.shiftOut = function() {
                        return this._charsetService.setgLevel(1), !0;
                    }, t94.prototype.shiftIn = function() {
                        return this._charsetService.setgLevel(0), !0;
                    }, t94.prototype._restrictCursor = function(e) {
                        void 0 === e && (e = this._bufferService.cols - 1), this._activeBuffer.x = Math.min(e, Math.max(0, this._activeBuffer.x)), this._activeBuffer.y = this._coreService.decPrivateModes.origin ? Math.min(this._activeBuffer.scrollBottom, Math.max(this._activeBuffer.scrollTop, this._activeBuffer.y)) : Math.min(this._bufferService.rows - 1, Math.max(0, this._activeBuffer.y)), this._dirtyRowService.markDirty(this._activeBuffer.y);
                    }, t94.prototype._setCursor = function(e, t) {
                        this._dirtyRowService.markDirty(this._activeBuffer.y), this._coreService.decPrivateModes.origin ? (this._activeBuffer.x = e, this._activeBuffer.y = this._activeBuffer.scrollTop + t) : (this._activeBuffer.x = e, this._activeBuffer.y = t), this._restrictCursor(), this._dirtyRowService.markDirty(this._activeBuffer.y);
                    }, t94.prototype._moveCursor = function(e, t) {
                        this._restrictCursor(), this._setCursor(this._activeBuffer.x + e, this._activeBuffer.y + t);
                    }, t94.prototype.cursorUp = function(e) {
                        var t = this._activeBuffer.y - this._activeBuffer.scrollTop;
                        return t >= 0 ? this._moveCursor(0, -Math.min(t, e.params[0] || 1)) : this._moveCursor(0, -(e.params[0] || 1)), !0;
                    }, t94.prototype.cursorDown = function(e) {
                        var t = this._activeBuffer.scrollBottom - this._activeBuffer.y;
                        return t >= 0 ? this._moveCursor(0, Math.min(t, e.params[0] || 1)) : this._moveCursor(0, e.params[0] || 1), !0;
                    }, t94.prototype.cursorForward = function(e) {
                        return this._moveCursor(e.params[0] || 1, 0), !0;
                    }, t94.prototype.cursorBackward = function(e) {
                        return this._moveCursor(-(e.params[0] || 1), 0), !0;
                    }, t94.prototype.cursorNextLine = function(e) {
                        return this.cursorDown(e), this._activeBuffer.x = 0, !0;
                    }, t94.prototype.cursorPrecedingLine = function(e) {
                        return this.cursorUp(e), this._activeBuffer.x = 0, !0;
                    }, t94.prototype.cursorCharAbsolute = function(e) {
                        return this._setCursor((e.params[0] || 1) - 1, this._activeBuffer.y), !0;
                    }, t94.prototype.cursorPosition = function(e) {
                        return this._setCursor(e.length >= 2 ? (e.params[1] || 1) - 1 : 0, (e.params[0] || 1) - 1), !0;
                    }, t94.prototype.charPosAbsolute = function(e) {
                        return this._setCursor((e.params[0] || 1) - 1, this._activeBuffer.y), !0;
                    }, t94.prototype.hPositionRelative = function(e) {
                        return this._moveCursor(e.params[0] || 1, 0), !0;
                    }, t94.prototype.linePosAbsolute = function(e) {
                        return this._setCursor(this._activeBuffer.x, (e.params[0] || 1) - 1), !0;
                    }, t94.prototype.vPositionRelative = function(e) {
                        return this._moveCursor(0, e.params[0] || 1), !0;
                    }, t94.prototype.hVPosition = function(e) {
                        return this.cursorPosition(e), !0;
                    }, t94.prototype.tabClear = function(e) {
                        var t = e.params[0];
                        return 0 === t ? delete this._activeBuffer.tabs[this._activeBuffer.x] : 3 === t && (this._activeBuffer.tabs = {
                        }), !0;
                    }, t94.prototype.cursorForwardTab = function(e) {
                        if (this._activeBuffer.x >= this._bufferService.cols) return !0;
                        for(var t = e.params[0] || 1; t--;)this._activeBuffer.x = this._activeBuffer.nextStop();
                        return !0;
                    }, t94.prototype.cursorBackwardTab = function(e) {
                        if (this._activeBuffer.x >= this._bufferService.cols) return !0;
                        for(var t = e.params[0] || 1; t--;)this._activeBuffer.x = this._activeBuffer.prevStop();
                        return !0;
                    }, t94.prototype._eraseInBufferLine = function(e, t, r, i) {
                        void 0 === i && (i = !1);
                        var n = this._activeBuffer.lines.get(this._activeBuffer.ybase + e);
                        n.replaceCells(t, r, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i && (n.isWrapped = !1);
                    }, t94.prototype._resetBufferLine = function(e) {
                        var t = this._activeBuffer.lines.get(this._activeBuffer.ybase + e);
                        t.fill(this._activeBuffer.getNullCell(this._eraseAttrData())), t.isWrapped = !1;
                    }, t94.prototype.eraseInDisplay = function(e) {
                        var t;
                        switch(this._restrictCursor(this._bufferService.cols), e.params[0]){
                            case 0:
                                for(t = this._activeBuffer.y, this._dirtyRowService.markDirty(t), this._eraseInBufferLine(t++, this._activeBuffer.x, this._bufferService.cols, 0 === this._activeBuffer.x); t < this._bufferService.rows; t++)this._resetBufferLine(t);
                                this._dirtyRowService.markDirty(t);
                                break;
                            case 1:
                                for(t = this._activeBuffer.y, this._dirtyRowService.markDirty(t), this._eraseInBufferLine(t, 0, this._activeBuffer.x + 1, !0), this._activeBuffer.x + 1 >= this._bufferService.cols && (this._activeBuffer.lines.get(t + 1).isWrapped = !1); t--;)this._resetBufferLine(t);
                                this._dirtyRowService.markDirty(0);
                                break;
                            case 2:
                                for(t = this._bufferService.rows, this._dirtyRowService.markDirty(t - 1); t--;)this._resetBufferLine(t);
                                this._dirtyRowService.markDirty(0);
                                break;
                            case 3:
                                var r = this._activeBuffer.lines.length - this._bufferService.rows;
                                r > 0 && (this._activeBuffer.lines.trimStart(r), this._activeBuffer.ybase = Math.max(this._activeBuffer.ybase - r, 0), this._activeBuffer.ydisp = Math.max(this._activeBuffer.ydisp - r, 0), this._onScroll.fire(0));
                        }
                        return !0;
                    }, t94.prototype.eraseInLine = function(e) {
                        switch(this._restrictCursor(this._bufferService.cols), e.params[0]){
                            case 0:
                                this._eraseInBufferLine(this._activeBuffer.y, this._activeBuffer.x, this._bufferService.cols, 0 === this._activeBuffer.x);
                                break;
                            case 1:
                                this._eraseInBufferLine(this._activeBuffer.y, 0, this._activeBuffer.x + 1, !1);
                                break;
                            case 2:
                                this._eraseInBufferLine(this._activeBuffer.y, 0, this._bufferService.cols, !0);
                        }
                        return this._dirtyRowService.markDirty(this._activeBuffer.y), !0;
                    }, t94.prototype.insertLines = function(e) {
                        this._restrictCursor();
                        var t = e.params[0] || 1;
                        if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return !0;
                        for(var r = this._activeBuffer.ybase + this._activeBuffer.y, i = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, n = this._bufferService.rows - 1 + this._activeBuffer.ybase - i + 1; t--;)this._activeBuffer.lines.splice(n - 1, 1), this._activeBuffer.lines.splice(r, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
                        return this._dirtyRowService.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, !0;
                    }, t94.prototype.deleteLines = function(e) {
                        this._restrictCursor();
                        var t = e.params[0] || 1;
                        if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return !0;
                        var r, i = this._activeBuffer.ybase + this._activeBuffer.y;
                        for(r = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, r = this._bufferService.rows - 1 + this._activeBuffer.ybase - r; t--;)this._activeBuffer.lines.splice(i, 1), this._activeBuffer.lines.splice(r, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
                        return this._dirtyRowService.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, !0;
                    }, t94.prototype.insertChars = function(e) {
                        this._restrictCursor();
                        var t = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                        return t && (t.insertCells(this._activeBuffer.x, e.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), this._dirtyRowService.markDirty(this._activeBuffer.y)), !0;
                    }, t94.prototype.deleteChars = function(e) {
                        this._restrictCursor();
                        var t = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                        return t && (t.deleteCells(this._activeBuffer.x, e.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), this._dirtyRowService.markDirty(this._activeBuffer.y)), !0;
                    }, t94.prototype.scrollUp = function(e) {
                        for(var t = e.params[0] || 1; t--;)this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
                        return this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
                    }, t94.prototype.scrollDown = function(e) {
                        for(var t = e.params[0] || 1; t--;)this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 0, this._activeBuffer.getBlankLine(f10.DEFAULT_ATTR_DATA));
                        return this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
                    }, t94.prototype.scrollLeft = function(e) {
                        if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return !0;
                        for(var t = e.params[0] || 1, r = this._activeBuffer.scrollTop; r <= this._activeBuffer.scrollBottom; ++r){
                            var i = this._activeBuffer.lines.get(this._activeBuffer.ybase + r);
                            i.deleteCells(0, t, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i.isWrapped = !1;
                        }
                        return this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
                    }, t94.prototype.scrollRight = function(e) {
                        if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return !0;
                        for(var t = e.params[0] || 1, r = this._activeBuffer.scrollTop; r <= this._activeBuffer.scrollBottom; ++r){
                            var i = this._activeBuffer.lines.get(this._activeBuffer.ybase + r);
                            i.insertCells(0, t, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i.isWrapped = !1;
                        }
                        return this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
                    }, t94.prototype.insertColumns = function(e) {
                        if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return !0;
                        for(var t = e.params[0] || 1, r = this._activeBuffer.scrollTop; r <= this._activeBuffer.scrollBottom; ++r){
                            var i = this._activeBuffer.lines.get(this._activeBuffer.ybase + r);
                            i.insertCells(this._activeBuffer.x, t, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i.isWrapped = !1;
                        }
                        return this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
                    }, t94.prototype.deleteColumns = function(e) {
                        if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return !0;
                        for(var t = e.params[0] || 1, r = this._activeBuffer.scrollTop; r <= this._activeBuffer.scrollBottom; ++r){
                            var i = this._activeBuffer.lines.get(this._activeBuffer.ybase + r);
                            i.deleteCells(this._activeBuffer.x, t, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i.isWrapped = !1;
                        }
                        return this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
                    }, t94.prototype.eraseChars = function(e) {
                        this._restrictCursor();
                        var t = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                        return t && (t.replaceCells(this._activeBuffer.x, this._activeBuffer.x + (e.params[0] || 1), this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), this._dirtyRowService.markDirty(this._activeBuffer.y)), !0;
                    }, t94.prototype.repeatPrecedingCharacter = function(e) {
                        if (!this._parser.precedingCodepoint) return !0;
                        for(var t = e.params[0] || 1, r = new Uint32Array(t), i = 0; i < t; ++i)r[i] = this._parser.precedingCodepoint;
                        return this.print(r, 0, r.length), !0;
                    }, t94.prototype.sendDeviceAttributesPrimary = function(e) {
                        return e.params[0] > 0 || (this._is("xterm") || this._is("rxvt-unicode") || this._is("screen") ? this._coreService.triggerDataEvent(s32.C0.ESC + "[?1;2c") : this._is("linux") && this._coreService.triggerDataEvent(s32.C0.ESC + "[?6c")), !0;
                    }, t94.prototype.sendDeviceAttributesSecondary = function(e) {
                        return e.params[0] > 0 || (this._is("xterm") ? this._coreService.triggerDataEvent(s32.C0.ESC + "[>0;276;0c") : this._is("rxvt-unicode") ? this._coreService.triggerDataEvent(s32.C0.ESC + "[>85;95;0c") : this._is("linux") ? this._coreService.triggerDataEvent(e.params[0] + "c") : this._is("screen") && this._coreService.triggerDataEvent(s32.C0.ESC + "[>83;40003;0c")), !0;
                    }, t94.prototype._is = function(e) {
                        return 0 === (this._optionsService.options.termName + "").indexOf(e);
                    }, t94.prototype.setMode = function(e) {
                        for(var t = 0; t < e.length; t++)4 === e.params[t] && (this._coreService.modes.insertMode = !0);
                        return !0;
                    }, t94.prototype.setModePrivate = function(e) {
                        for(var t = 0; t < e.length; t++)switch(e.params[t]){
                            case 1:
                                this._coreService.decPrivateModes.applicationCursorKeys = !0;
                                break;
                            case 2:
                                this._charsetService.setgCharset(0, a29.DEFAULT_CHARSET), this._charsetService.setgCharset(1, a29.DEFAULT_CHARSET), this._charsetService.setgCharset(2, a29.DEFAULT_CHARSET), this._charsetService.setgCharset(3, a29.DEFAULT_CHARSET);
                                break;
                            case 3:
                                this._optionsService.options.windowOptions.setWinLines && (this._bufferService.resize(132, this._bufferService.rows), this._onRequestReset.fire());
                                break;
                            case 6:
                                this._coreService.decPrivateModes.origin = !0, this._setCursor(0, 0);
                                break;
                            case 7:
                                this._coreService.decPrivateModes.wraparound = !0;
                                break;
                            case 12:
                                break;
                            case 45:
                                this._coreService.decPrivateModes.reverseWraparound = !0;
                                break;
                            case 66:
                                this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = !0, this._onRequestSyncScrollBar.fire();
                                break;
                            case 9:
                                this._coreMouseService.activeProtocol = "X10";
                                break;
                            case 1000:
                                this._coreMouseService.activeProtocol = "VT200";
                                break;
                            case 1002:
                                this._coreMouseService.activeProtocol = "DRAG";
                                break;
                            case 1003:
                                this._coreMouseService.activeProtocol = "ANY";
                                break;
                            case 1004:
                                this._coreService.decPrivateModes.sendFocus = !0, this._onRequestSendFocus.fire();
                                break;
                            case 1005:
                                this._logService.debug("DECSET 1005 not supported (see #2507)");
                                break;
                            case 1006:
                                this._coreMouseService.activeEncoding = "SGR";
                                break;
                            case 1015:
                                this._logService.debug("DECSET 1015 not supported (see #2507)");
                                break;
                            case 25:
                                this._coreService.isCursorHidden = !1;
                                break;
                            case 1048:
                                this.saveCursor();
                                break;
                            case 1049:
                                this.saveCursor();
                            case 47:
                            case 1047:
                                this._bufferService.buffers.activateAltBuffer(this._eraseAttrData()), this._coreService.isCursorInitialized = !0, this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1), this._onRequestSyncScrollBar.fire();
                                break;
                            case 2004:
                                this._coreService.decPrivateModes.bracketedPasteMode = !0;
                        }
                        return !0;
                    }, t94.prototype.resetMode = function(e) {
                        for(var t = 0; t < e.length; t++)4 === e.params[t] && (this._coreService.modes.insertMode = !1);
                        return !0;
                    }, t94.prototype.resetModePrivate = function(e) {
                        for(var t = 0; t < e.length; t++)switch(e.params[t]){
                            case 1:
                                this._coreService.decPrivateModes.applicationCursorKeys = !1;
                                break;
                            case 3:
                                this._optionsService.options.windowOptions.setWinLines && (this._bufferService.resize(80, this._bufferService.rows), this._onRequestReset.fire());
                                break;
                            case 6:
                                this._coreService.decPrivateModes.origin = !1, this._setCursor(0, 0);
                                break;
                            case 7:
                                this._coreService.decPrivateModes.wraparound = !1;
                                break;
                            case 12:
                                break;
                            case 45:
                                this._coreService.decPrivateModes.reverseWraparound = !1;
                                break;
                            case 66:
                                this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = !1, this._onRequestSyncScrollBar.fire();
                                break;
                            case 9:
                            case 1000:
                            case 1002:
                            case 1003:
                                this._coreMouseService.activeProtocol = "NONE";
                                break;
                            case 1004:
                                this._coreService.decPrivateModes.sendFocus = !1;
                                break;
                            case 1005:
                                this._logService.debug("DECRST 1005 not supported (see #2507)");
                                break;
                            case 1006:
                                this._coreMouseService.activeEncoding = "DEFAULT";
                                break;
                            case 1015:
                                this._logService.debug("DECRST 1015 not supported (see #2507)");
                                break;
                            case 25:
                                this._coreService.isCursorHidden = !0;
                                break;
                            case 1048:
                                this.restoreCursor();
                                break;
                            case 1049:
                            case 47:
                            case 1047:
                                this._bufferService.buffers.activateNormalBuffer(), 1049 === e.params[t] && this.restoreCursor(), this._coreService.isCursorInitialized = !0, this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1), this._onRequestSyncScrollBar.fire();
                                break;
                            case 2004:
                                this._coreService.decPrivateModes.bracketedPasteMode = !1;
                        }
                        return !0;
                    }, t94.prototype._updateAttrColor = function(e, t, r, i, n) {
                        return 2 === t ? (e |= 50331648, e &= -16777216, e |= v3.AttributeData.fromColorRGB([
                            r,
                            i,
                            n
                        ])) : 5 === t && (e &= -50331904, e |= 33554432 | 255 & r), e;
                    }, t94.prototype._extractColor = function(e, t, r) {
                        var i = [
                            0,
                            0,
                            -1,
                            0,
                            0,
                            0
                        ], n = 0, o = 0;
                        do {
                            if (i[o + n] = e.params[t + o], e.hasSubParams(t + o)) {
                                var s = e.getSubParams(t + o), a = 0;
                                do 5 === i[1] && (n = 1), i[o + a + 1 + n] = s[a];
                                while (++a < s.length && a + o + 1 + n < i.length)
                                break;
                            }
                            if (5 === i[1] && o + n >= 2 || 2 === i[1] && o + n >= 5) break;
                            i[1] && (n = 1);
                        }while (++o + t < e.length && o + n < i.length)
                        for(a = 2; a < i.length; ++a)-1 === i[a] && (i[a] = 0);
                        switch(i[0]){
                            case 38:
                                r.fg = this._updateAttrColor(r.fg, i[1], i[3], i[4], i[5]);
                                break;
                            case 48:
                                r.bg = this._updateAttrColor(r.bg, i[1], i[3], i[4], i[5]);
                                break;
                            case 58:
                                r.extended = r.extended.clone(), r.extended.underlineColor = this._updateAttrColor(r.extended.underlineColor, i[1], i[3], i[4], i[5]);
                        }
                        return o;
                    }, t94.prototype._processUnderline = function(e, t) {
                        t.extended = t.extended.clone(), (!~e || e > 5) && (e = 1), t.extended.underlineStyle = e, t.fg |= 268435456, 0 === e && (t.fg &= -268435457), t.updateExtended();
                    }, t94.prototype.charAttributes = function(e) {
                        if (1 === e.length && 0 === e.params[0]) return this._curAttrData.fg = f10.DEFAULT_ATTR_DATA.fg, this._curAttrData.bg = f10.DEFAULT_ATTR_DATA.bg, !0;
                        for(var t, r = e.length, i = this._curAttrData, n = 0; n < r; n++)(t = e.params[n]) >= 30 && t <= 37 ? (i.fg &= -50331904, i.fg |= 16777216 | t - 30) : t >= 40 && t <= 47 ? (i.bg &= -50331904, i.bg |= 16777216 | t - 40) : t >= 90 && t <= 97 ? (i.fg &= -50331904, i.fg |= 16777224 | t - 90) : t >= 100 && t <= 107 ? (i.bg &= -50331904, i.bg |= 16777224 | t - 100) : 0 === t ? (i.fg = f10.DEFAULT_ATTR_DATA.fg, i.bg = f10.DEFAULT_ATTR_DATA.bg) : 1 === t ? i.fg |= 134217728 : 3 === t ? i.bg |= 67108864 : 4 === t ? (i.fg |= 268435456, this._processUnderline(e.hasSubParams(n) ? e.getSubParams(n)[0] : 1, i)) : 5 === t ? i.fg |= 536870912 : 7 === t ? i.fg |= 67108864 : 8 === t ? i.fg |= 1073741824 : 9 === t ? i.fg |= 2147483648 : 2 === t ? i.bg |= 134217728 : 21 === t ? this._processUnderline(2, i) : 22 === t ? (i.fg &= -134217729, i.bg &= -134217729) : 23 === t ? i.bg &= -67108865 : 24 === t ? i.fg &= -268435457 : 25 === t ? i.fg &= -536870913 : 27 === t ? i.fg &= -67108865 : 28 === t ? i.fg &= -1073741825 : 29 === t ? i.fg &= 2147483647 : 39 === t ? (i.fg &= -67108864, i.fg |= 16777215 & f10.DEFAULT_ATTR_DATA.fg) : 49 === t ? (i.bg &= -67108864, i.bg |= 16777215 & f10.DEFAULT_ATTR_DATA.bg) : 38 === t || 48 === t || 58 === t ? n += this._extractColor(e, n, i) : 59 === t ? (i.extended = i.extended.clone(), i.extended.underlineColor = -1, i.updateExtended()) : 100 === t ? (i.fg &= -67108864, i.fg |= 16777215 & f10.DEFAULT_ATTR_DATA.fg, i.bg &= -67108864, i.bg |= 16777215 & f10.DEFAULT_ATTR_DATA.bg) : this._logService.debug("Unknown SGR attribute: %d.", t);
                        return !0;
                    }, t94.prototype.deviceStatus = function(e) {
                        switch(e.params[0]){
                            case 5:
                                this._coreService.triggerDataEvent(s32.C0.ESC + "[0n");
                                break;
                            case 6:
                                var t = this._activeBuffer.y + 1, r = this._activeBuffer.x + 1;
                                this._coreService.triggerDataEvent(s32.C0.ESC + "[" + t + ";" + r + "R");
                        }
                        return !0;
                    }, t94.prototype.deviceStatusPrivate = function(e) {
                        if (6 === e.params[0]) {
                            var t = this._activeBuffer.y + 1, r = this._activeBuffer.x + 1;
                            this._coreService.triggerDataEvent(s32.C0.ESC + "[?" + t + ";" + r + "R");
                        }
                        return !0;
                    }, t94.prototype.softReset = function(e) {
                        return this._coreService.isCursorHidden = !1, this._onRequestSyncScrollBar.fire(), this._activeBuffer.scrollTop = 0, this._activeBuffer.scrollBottom = this._bufferService.rows - 1, this._curAttrData = f10.DEFAULT_ATTR_DATA.clone(), this._coreService.reset(), this._charsetService.reset(), this._activeBuffer.savedX = 0, this._activeBuffer.savedY = this._activeBuffer.ybase, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, this._coreService.decPrivateModes.origin = !1, !0;
                    }, t94.prototype.setCursorStyle = function(e) {
                        var t = e.params[0] || 1;
                        switch(t){
                            case 1:
                            case 2:
                                this._optionsService.options.cursorStyle = "block";
                                break;
                            case 3:
                            case 4:
                                this._optionsService.options.cursorStyle = "underline";
                                break;
                            case 5:
                            case 6:
                                this._optionsService.options.cursorStyle = "bar";
                        }
                        var r = t % 2 == 1;
                        return this._optionsService.options.cursorBlink = r, !0;
                    }, t94.prototype.setScrollRegion = function(e) {
                        var t, r = e.params[0] || 1;
                        return (e.length < 2 || (t = e.params[1]) > this._bufferService.rows || 0 === t) && (t = this._bufferService.rows), t > r && (this._activeBuffer.scrollTop = r - 1, this._activeBuffer.scrollBottom = t - 1, this._setCursor(0, 0)), !0;
                    }, t94.prototype.windowOptions = function(e) {
                        if (!w(e.params[0], this._optionsService.options.windowOptions)) return !0;
                        var t = e.length > 1 ? e.params[1] : 0;
                        switch(e.params[0]){
                            case 14:
                                2 !== t && this._onRequestWindowsOptionsReport.fire(o30.GET_WIN_SIZE_PIXELS);
                                break;
                            case 16:
                                this._onRequestWindowsOptionsReport.fire(o30.GET_CELL_SIZE_PIXELS);
                                break;
                            case 18:
                                this._bufferService && this._coreService.triggerDataEvent(s32.C0.ESC + "[8;" + this._bufferService.rows + ";" + this._bufferService.cols + "t");
                                break;
                            case 22:
                                0 !== t && 2 !== t || (this._windowTitleStack.push(this._windowTitle), this._windowTitleStack.length > 10 && this._windowTitleStack.shift()), 0 !== t && 1 !== t || (this._iconNameStack.push(this._iconName), this._iconNameStack.length > 10 && this._iconNameStack.shift());
                                break;
                            case 23:
                                0 !== t && 2 !== t || this._windowTitleStack.length && this.setTitle(this._windowTitleStack.pop()), 0 !== t && 1 !== t || this._iconNameStack.length && this.setIconName(this._iconNameStack.pop());
                        }
                        return !0;
                    }, t94.prototype.saveCursor = function(e) {
                        return this._activeBuffer.savedX = this._activeBuffer.x, this._activeBuffer.savedY = this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, !0;
                    }, t94.prototype.restoreCursor = function(e) {
                        return this._activeBuffer.x = this._activeBuffer.savedX || 0, this._activeBuffer.y = Math.max(this._activeBuffer.savedY - this._activeBuffer.ybase, 0), this._curAttrData.fg = this._activeBuffer.savedCurAttrData.fg, this._curAttrData.bg = this._activeBuffer.savedCurAttrData.bg, this._charsetService.charset = this._savedCharset, this._activeBuffer.savedCharset && (this._charsetService.charset = this._activeBuffer.savedCharset), this._restrictCursor(), !0;
                    }, t94.prototype.setTitle = function(e) {
                        return this._windowTitle = e, this._onTitleChange.fire(e), !0;
                    }, t94.prototype.setIconName = function(e) {
                        return this._iconName = e, !0;
                    }, t94.prototype.setOrReportIndexedColor = function(e) {
                        for(var t = [], r = e.split(";"); r.length > 1;){
                            var i = r.shift(), n = r.shift();
                            if (/^\d+$/.exec(i)) {
                                var o = parseInt(i);
                                if (0 <= o && o < 256) {
                                    if ("?" === n) t.push({
                                        type: 0,
                                        index: o
                                    });
                                    else {
                                        var s = (0, S2.parseColor)(n);
                                        s && t.push({
                                            type: 1,
                                            index: o,
                                            color: s
                                        });
                                    }
                                }
                            }
                        }
                        return t.length && this._onColor.fire(t), !0;
                    }, t94.prototype._setOrReportSpecialColor = function(e, t) {
                        for(var r = e.split(";"), i = 0; i < r.length && !(t >= this._specialColors.length); ++i, ++t)if ("?" === r[i]) this._onColor.fire([
                            {
                                type: 0,
                                index: this._specialColors[t]
                            }
                        ]);
                        else {
                            var n = (0, S2.parseColor)(r[i]);
                            n && this._onColor.fire([
                                {
                                    type: 1,
                                    index: this._specialColors[t],
                                    color: n
                                }
                            ]);
                        }
                        return !0;
                    }, t94.prototype.setOrReportFgColor = function(e) {
                        return this._setOrReportSpecialColor(e, 0);
                    }, t94.prototype.setOrReportBgColor = function(e) {
                        return this._setOrReportSpecialColor(e, 1);
                    }, t94.prototype.setOrReportCursorColor = function(e) {
                        return this._setOrReportSpecialColor(e, 2);
                    }, t94.prototype.restoreIndexedColor = function(e) {
                        if (!e) return this._onColor.fire([
                            {
                                type: 2
                            }
                        ]), !0;
                        for(var t = [], r = e.split(";"), i = 0; i < r.length; ++i)if (/^\d+$/.exec(r[i])) {
                            var n = parseInt(r[i]);
                            0 <= n && n < 256 && t.push({
                                type: 2,
                                index: n
                            });
                        }
                        return t.length && this._onColor.fire(t), !0;
                    }, t94.prototype.restoreFgColor = function(e) {
                        return this._onColor.fire([
                            {
                                type: 2,
                                index: 256
                            }
                        ]), !0;
                    }, t94.prototype.restoreBgColor = function(e) {
                        return this._onColor.fire([
                            {
                                type: 2,
                                index: 257
                            }
                        ]), !0;
                    }, t94.prototype.restoreCursorColor = function(e) {
                        return this._onColor.fire([
                            {
                                type: 2,
                                index: 258
                            }
                        ]), !0;
                    }, t94.prototype.nextLine = function() {
                        return this._activeBuffer.x = 0, this.index(), !0;
                    }, t94.prototype.keypadApplicationMode = function() {
                        return this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = !0, this._onRequestSyncScrollBar.fire(), !0;
                    }, t94.prototype.keypadNumericMode = function() {
                        return this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = !1, this._onRequestSyncScrollBar.fire(), !0;
                    }, t94.prototype.selectDefaultCharset = function() {
                        return this._charsetService.setgLevel(0), this._charsetService.setgCharset(0, a29.DEFAULT_CHARSET), !0;
                    }, t94.prototype.selectCharset = function(e) {
                        return 2 !== e.length ? (this.selectDefaultCharset(), !0) : ("/" === e[0] || this._charsetService.setgCharset(C1[e[0]], a29.CHARSETS[e[1]] || a29.DEFAULT_CHARSET), !0);
                    }, t94.prototype.index = function() {
                        return this._restrictCursor(), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._restrictCursor(), !0;
                    }, t94.prototype.tabSet = function() {
                        return this._activeBuffer.tabs[this._activeBuffer.x] = !0, !0;
                    }, t94.prototype.reverseIndex = function() {
                        if (this._restrictCursor(), this._activeBuffer.y === this._activeBuffer.scrollTop) {
                            var e = this._activeBuffer.scrollBottom - this._activeBuffer.scrollTop;
                            this._activeBuffer.lines.shiftElements(this._activeBuffer.ybase + this._activeBuffer.y, e, 1), this._activeBuffer.lines.set(this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.getBlankLine(this._eraseAttrData())), this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom);
                        } else this._activeBuffer.y--, this._restrictCursor();
                        return !0;
                    }, t94.prototype.fullReset = function() {
                        return this._parser.reset(), this._onRequestReset.fire(), !0;
                    }, t94.prototype.reset = function() {
                        this._curAttrData = f10.DEFAULT_ATTR_DATA.clone(), this._eraseAttrDataInternal = f10.DEFAULT_ATTR_DATA.clone();
                    }, t94.prototype._eraseAttrData = function() {
                        return this._eraseAttrDataInternal.bg &= -67108864, this._eraseAttrDataInternal.bg |= 67108863 & this._curAttrData.bg, this._eraseAttrDataInternal;
                    }, t94.prototype.setgLevel = function(e) {
                        return this._charsetService.setgLevel(e), !0;
                    }, t94.prototype.screenAlignmentPattern = function() {
                        var e = new p3.CellData;
                        e.content = 4194304 | "E".charCodeAt(0), e.fg = this._curAttrData.fg, e.bg = this._curAttrData.bg, this._setCursor(0, 0);
                        for(var t = 0; t < this._bufferService.rows; ++t){
                            var r = this._activeBuffer.ybase + this._activeBuffer.y + t, i = this._activeBuffer.lines.get(r);
                            i && (i.fill(e), i.isWrapped = !1);
                        }
                        return this._dirtyRowService.markAllDirty(), this._setCursor(0, 0), !0;
                    }, t94;
                }(l18.Disposable);
                t92.InputHandler = E;
            },
            844: (e136, t96)=>{
                Object.defineProperty(t96, "__esModule", {
                    value: !0
                }), t96.getDisposeArrayDisposable = t96.disposeArray = t96.Disposable = void 0;
                var r52 = function() {
                    function e137() {
                        this._disposables = [], this._isDisposed = !1;
                    }
                    return e137.prototype.dispose = function() {
                        this._isDisposed = !0;
                        for(var e = 0, t = this._disposables; e < t.length; e++)t[e].dispose();
                        this._disposables.length = 0;
                    }, e137.prototype.register = function(e) {
                        return this._disposables.push(e), e;
                    }, e137.prototype.unregister = function(e) {
                        var t = this._disposables.indexOf(e);
                        -1 !== t && this._disposables.splice(t, 1);
                    }, e137;
                }();
                function i(e) {
                    for(var t = 0, r = e; t < r.length; t++)r[t].dispose();
                    e.length = 0;
                }
                t96.Disposable = r52, t96.disposeArray = i, t96.getDisposeArrayDisposable = function(e) {
                    return {
                        dispose: function() {
                            return i(e);
                        }
                    };
                };
            },
            6114: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isLinux = t.isWindows = t.isIphone = t.isIpad = t.isMac = t.isSafari = t.isFirefox = void 0;
                var r = "undefined" == typeof navigator, i = r ? "node" : navigator.userAgent, n = r ? "node" : navigator.platform;
                t.isFirefox = i.includes("Firefox"), t.isSafari = /^((?!chrome|android).)*safari/i.test(i), t.isMac = [
                    "Macintosh",
                    "MacIntel",
                    "MacPPC",
                    "Mac68K"
                ].includes(n), t.isIpad = "iPad" === n, t.isIphone = "iPhone" === n, t.isWindows = [
                    "Windows",
                    "Win16",
                    "Win32",
                    "WinCE"
                ].includes(n), t.isLinux = n.indexOf("Linux") >= 0;
            },
            8273: (e138, t97)=>{
                function r53(e, t, r, i) {
                    if (void 0 === r && (r = 0), void 0 === i && (i = e.length), r >= e.length) return e;
                    r = (e.length + r) % e.length, i = i >= e.length ? e.length : (e.length + i) % e.length;
                    for(var n = r; n < i; ++n)e[n] = t;
                    return e;
                }
                Object.defineProperty(t97, "__esModule", {
                    value: !0
                }), t97.concat = t97.fillFallback = t97.fill = void 0, t97.fill = function(e, t, i, n) {
                    return e.fill ? e.fill(t, i, n) : r53(e, t, i, n);
                }, t97.fillFallback = r53, t97.concat = function(e, t) {
                    var r = new e.constructor(e.length + t.length);
                    return r.set(e), r.set(t, e.length), r;
                };
            },
            9282: (e139, t98, r54)=>{
                Object.defineProperty(t98, "__esModule", {
                    value: !0
                }), t98.updateWindowsModeWrappedState = void 0;
                var i = r54(643);
                t98.updateWindowsModeWrappedState = function(e) {
                    var t = e.buffer.lines.get(e.buffer.ybase + e.buffer.y - 1), r = null == t ? void 0 : t.get(e.cols - 1), n = e.buffer.lines.get(e.buffer.ybase + e.buffer.y);
                    n && r && (n.isWrapped = r[i.CHAR_DATA_CODE_INDEX] !== i.NULL_CELL_CODE && r[i.CHAR_DATA_CODE_INDEX] !== i.WHITESPACE_CELL_CODE);
                };
            },
            3734: (e140, t99)=>{
                Object.defineProperty(t99, "__esModule", {
                    value: !0
                }), t99.ExtendedAttrs = t99.AttributeData = void 0;
                var r = function() {
                    function e141() {
                        this.fg = 0, this.bg = 0, this.extended = new i;
                    }
                    return e141.toColorRGB = function(e) {
                        return [
                            e >>> 16 & 255,
                            e >>> 8 & 255,
                            255 & e
                        ];
                    }, e141.fromColorRGB = function(e) {
                        return (255 & e[0]) << 16 | (255 & e[1]) << 8 | 255 & e[2];
                    }, e141.prototype.clone = function() {
                        var t = new e141;
                        return t.fg = this.fg, t.bg = this.bg, t.extended = this.extended.clone(), t;
                    }, e141.prototype.isInverse = function() {
                        return 67108864 & this.fg;
                    }, e141.prototype.isBold = function() {
                        return 134217728 & this.fg;
                    }, e141.prototype.isUnderline = function() {
                        return 268435456 & this.fg;
                    }, e141.prototype.isBlink = function() {
                        return 536870912 & this.fg;
                    }, e141.prototype.isInvisible = function() {
                        return 1073741824 & this.fg;
                    }, e141.prototype.isItalic = function() {
                        return 67108864 & this.bg;
                    }, e141.prototype.isDim = function() {
                        return 134217728 & this.bg;
                    }, e141.prototype.isStrikethrough = function() {
                        return 2147483648 & this.fg;
                    }, e141.prototype.getFgColorMode = function() {
                        return 50331648 & this.fg;
                    }, e141.prototype.getBgColorMode = function() {
                        return 50331648 & this.bg;
                    }, e141.prototype.isFgRGB = function() {
                        return 50331648 == (50331648 & this.fg);
                    }, e141.prototype.isBgRGB = function() {
                        return 50331648 == (50331648 & this.bg);
                    }, e141.prototype.isFgPalette = function() {
                        return 16777216 == (50331648 & this.fg) || 33554432 == (50331648 & this.fg);
                    }, e141.prototype.isBgPalette = function() {
                        return 16777216 == (50331648 & this.bg) || 33554432 == (50331648 & this.bg);
                    }, e141.prototype.isFgDefault = function() {
                        return 0 == (50331648 & this.fg);
                    }, e141.prototype.isBgDefault = function() {
                        return 0 == (50331648 & this.bg);
                    }, e141.prototype.isAttributeDefault = function() {
                        return 0 === this.fg && 0 === this.bg;
                    }, e141.prototype.getFgColor = function() {
                        switch(50331648 & this.fg){
                            case 16777216:
                            case 33554432:
                                return 255 & this.fg;
                            case 50331648:
                                return 16777215 & this.fg;
                            default:
                                return -1;
                        }
                    }, e141.prototype.getBgColor = function() {
                        switch(50331648 & this.bg){
                            case 16777216:
                            case 33554432:
                                return 255 & this.bg;
                            case 50331648:
                                return 16777215 & this.bg;
                            default:
                                return -1;
                        }
                    }, e141.prototype.hasExtendedAttrs = function() {
                        return 268435456 & this.bg;
                    }, e141.prototype.updateExtended = function() {
                        this.extended.isEmpty() ? this.bg &= -268435457 : this.bg |= 268435456;
                    }, e141.prototype.getUnderlineColor = function() {
                        if (268435456 & this.bg && ~this.extended.underlineColor) switch(50331648 & this.extended.underlineColor){
                            case 16777216:
                            case 33554432:
                                return 255 & this.extended.underlineColor;
                            case 50331648:
                                return 16777215 & this.extended.underlineColor;
                            default:
                                return this.getFgColor();
                        }
                        return this.getFgColor();
                    }, e141.prototype.getUnderlineColorMode = function() {
                        return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 & this.extended.underlineColor : this.getFgColorMode();
                    }, e141.prototype.isUnderlineColorRGB = function() {
                        return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 == (50331648 & this.extended.underlineColor) : this.isFgRGB();
                    }, e141.prototype.isUnderlineColorPalette = function() {
                        return 268435456 & this.bg && ~this.extended.underlineColor ? 16777216 == (50331648 & this.extended.underlineColor) || 33554432 == (50331648 & this.extended.underlineColor) : this.isFgPalette();
                    }, e141.prototype.isUnderlineColorDefault = function() {
                        return 268435456 & this.bg && ~this.extended.underlineColor ? 0 == (50331648 & this.extended.underlineColor) : this.isFgDefault();
                    }, e141.prototype.getUnderlineStyle = function() {
                        return 268435456 & this.fg ? 268435456 & this.bg ? this.extended.underlineStyle : 1 : 0;
                    }, e141;
                }();
                t99.AttributeData = r;
                var i = function() {
                    function e142(e, t) {
                        void 0 === e && (e = 0), void 0 === t && (t = -1), this.underlineStyle = e, this.underlineColor = t;
                    }
                    return e142.prototype.clone = function() {
                        return new e142(this.underlineStyle, this.underlineColor);
                    }, e142.prototype.isEmpty = function() {
                        return 0 === this.underlineStyle;
                    }, e142;
                }();
                t99.ExtendedAttrs = i;
            },
            9092: (e143, t100, r55)=>{
                Object.defineProperty(t100, "__esModule", {
                    value: !0
                }), t100.BufferStringIterator = t100.Buffer = t100.MAX_BUFFER_SIZE = void 0;
                var i38 = r55(6349), n34 = r55(8437), o31 = r55(511), s33 = r55(643), a30 = r55(4634), c17 = r55(4863), l19 = r55(7116), h15 = r55(3734);
                t100.MAX_BUFFER_SIZE = 4294967295;
                var u12 = function() {
                    function e144(e, t, r) {
                        this._hasScrollback = e, this._optionsService = t, this._bufferService = r, this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.savedY = 0, this.savedX = 0, this.savedCurAttrData = n34.DEFAULT_ATTR_DATA.clone(), this.savedCharset = l19.DEFAULT_CHARSET, this.markers = [], this._nullCell = o31.CellData.fromCharData([
                            0,
                            s33.NULL_CELL_CHAR,
                            s33.NULL_CELL_WIDTH,
                            s33.NULL_CELL_CODE
                        ]), this._whitespaceCell = o31.CellData.fromCharData([
                            0,
                            s33.WHITESPACE_CELL_CHAR,
                            s33.WHITESPACE_CELL_WIDTH,
                            s33.WHITESPACE_CELL_CODE
                        ]), this._cols = this._bufferService.cols, this._rows = this._bufferService.rows, this.lines = new i38.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
                    }
                    return e144.prototype.getNullCell = function(e) {
                        return e ? (this._nullCell.fg = e.fg, this._nullCell.bg = e.bg, this._nullCell.extended = e.extended) : (this._nullCell.fg = 0, this._nullCell.bg = 0, this._nullCell.extended = new h15.ExtendedAttrs), this._nullCell;
                    }, e144.prototype.getWhitespaceCell = function(e) {
                        return e ? (this._whitespaceCell.fg = e.fg, this._whitespaceCell.bg = e.bg, this._whitespaceCell.extended = e.extended) : (this._whitespaceCell.fg = 0, this._whitespaceCell.bg = 0, this._whitespaceCell.extended = new h15.ExtendedAttrs), this._whitespaceCell;
                    }, e144.prototype.getBlankLine = function(e, t) {
                        return new n34.BufferLine(this._bufferService.cols, this.getNullCell(e), t);
                    }, Object.defineProperty(e144.prototype, "hasScrollback", {
                        get: function() {
                            return this._hasScrollback && this.lines.maxLength > this._rows;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e144.prototype, "isCursorInViewport", {
                        get: function() {
                            var e = this.ybase + this.y - this.ydisp;
                            return e >= 0 && e < this._rows;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e144.prototype._getCorrectBufferLength = function(e) {
                        if (!this._hasScrollback) return e;
                        var r = e + this._optionsService.options.scrollback;
                        return r > t100.MAX_BUFFER_SIZE ? t100.MAX_BUFFER_SIZE : r;
                    }, e144.prototype.fillViewportRows = function(e) {
                        if (0 === this.lines.length) {
                            void 0 === e && (e = n34.DEFAULT_ATTR_DATA);
                            for(var t = this._rows; t--;)this.lines.push(this.getBlankLine(e));
                        }
                    }, e144.prototype.clear = function() {
                        this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.lines = new i38.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
                    }, e144.prototype.resize = function(e, t) {
                        var r = this.getNullCell(n34.DEFAULT_ATTR_DATA), i = this._getCorrectBufferLength(t);
                        if (i > this.lines.maxLength && (this.lines.maxLength = i), this.lines.length > 0) {
                            if (this._cols < e) for(var o = 0; o < this.lines.length; o++)this.lines.get(o).resize(e, r);
                            var s = 0;
                            if (this._rows < t) for(var a = this._rows; a < t; a++)this.lines.length < t + this.ybase && (this._optionsService.options.windowsMode ? this.lines.push(new n34.BufferLine(e, r)) : this.ybase > 0 && this.lines.length <= this.ybase + this.y + s + 1 ? (this.ybase--, s++, this.ydisp > 0 && this.ydisp--) : this.lines.push(new n34.BufferLine(e, r)));
                            else for(a = this._rows; a > t; a--)this.lines.length > t + this.ybase && (this.lines.length > this.ybase + this.y + 1 ? this.lines.pop() : (this.ybase++, this.ydisp++));
                            if (i < this.lines.maxLength) {
                                var c = this.lines.length - i;
                                c > 0 && (this.lines.trimStart(c), this.ybase = Math.max(this.ybase - c, 0), this.ydisp = Math.max(this.ydisp - c, 0), this.savedY = Math.max(this.savedY - c, 0)), this.lines.maxLength = i;
                            }
                            this.x = Math.min(this.x, e - 1), this.y = Math.min(this.y, t - 1), s && (this.y += s), this.savedX = Math.min(this.savedX, e - 1), this.scrollTop = 0;
                        }
                        if (this.scrollBottom = t - 1, this._isReflowEnabled && (this._reflow(e, t), this._cols > e)) for(o = 0; o < this.lines.length; o++)this.lines.get(o).resize(e, r);
                        this._cols = e, this._rows = t;
                    }, Object.defineProperty(e144.prototype, "_isReflowEnabled", {
                        get: function() {
                            return this._hasScrollback && !this._optionsService.options.windowsMode;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e144.prototype._reflow = function(e, t) {
                        this._cols !== e && (e > this._cols ? this._reflowLarger(e, t) : this._reflowSmaller(e, t));
                    }, e144.prototype._reflowLarger = function(e, t) {
                        var r = (0, a30.reflowLargerGetLinesToRemove)(this.lines, this._cols, e, this.ybase + this.y, this.getNullCell(n34.DEFAULT_ATTR_DATA));
                        if (r.length > 0) {
                            var i = (0, a30.reflowLargerCreateNewLayout)(this.lines, r);
                            (0, a30.reflowLargerApplyNewLayout)(this.lines, i.layout), this._reflowLargerAdjustViewport(e, t, i.countRemoved);
                        }
                    }, e144.prototype._reflowLargerAdjustViewport = function(e, t, r) {
                        for(var i = this.getNullCell(n34.DEFAULT_ATTR_DATA), o = r; o-- > 0;)0 === this.ybase ? (this.y > 0 && this.y--, this.lines.length < t && this.lines.push(new n34.BufferLine(e, i))) : (this.ydisp === this.ybase && this.ydisp--, this.ybase--);
                        this.savedY = Math.max(this.savedY - r, 0);
                    }, e144.prototype._reflowSmaller = function(e, t) {
                        for(var r = this.getNullCell(n34.DEFAULT_ATTR_DATA), i = [], o = 0, s = this.lines.length - 1; s >= 0; s--){
                            var c = this.lines.get(s);
                            if (!(!c || !c.isWrapped && c.getTrimmedLength() <= e)) {
                                for(var l = [
                                    c
                                ]; c.isWrapped && s > 0;)c = this.lines.get(--s), l.unshift(c);
                                var h = this.ybase + this.y;
                                if (!(h >= s && h < s + l.length)) {
                                    var u, f = l[l.length - 1].getTrimmedLength(), _ = (0, a30.reflowSmallerGetNewLineLengths)(l, this._cols, e), d = _.length - l.length;
                                    u = 0 === this.ybase && this.y !== this.lines.length - 1 ? Math.max(0, this.y - this.lines.maxLength + d) : Math.max(0, this.lines.length - this.lines.maxLength + d);
                                    for(var p = [], v = 0; v < d; v++){
                                        var g = this.getBlankLine(n34.DEFAULT_ATTR_DATA, !0);
                                        p.push(g);
                                    }
                                    p.length > 0 && (i.push({
                                        start: s + l.length + o,
                                        newLines: p
                                    }), o += p.length), l.push.apply(l, p);
                                    var y = _.length - 1, m = _[y];
                                    0 === m && (m = _[--y]);
                                    for(var S = l.length - d - 1, C = f; S >= 0;){
                                        var b = Math.min(C, m);
                                        if (l[y].copyCellsFrom(l[S], C - b, m - b, b, !0), 0 == (m -= b) && (m = _[--y]), 0 == (C -= b)) {
                                            S--;
                                            var w = Math.max(S, 0);
                                            C = (0, a30.getWrappedLineTrimmedLength)(l, w, this._cols);
                                        }
                                    }
                                    for(v = 0; v < l.length; v++)_[v] < e && l[v].setCell(_[v], r);
                                    for(var L = d - u; L-- > 0;)0 === this.ybase ? this.y < t - 1 ? (this.y++, this.lines.pop()) : (this.ybase++, this.ydisp++) : this.ybase < Math.min(this.lines.maxLength, this.lines.length + o) - t && (this.ybase === this.ydisp && this.ydisp++, this.ybase++);
                                    this.savedY = Math.min(this.savedY + d, this.ybase + t - 1);
                                }
                            }
                        }
                        if (i.length > 0) {
                            var E = [], x = [];
                            for(v = 0; v < this.lines.length; v++)x.push(this.lines.get(v));
                            var M = this.lines.length, k = M - 1, A = 0, R = i[A];
                            this.lines.length = Math.min(this.lines.maxLength, this.lines.length + o);
                            var T = 0;
                            for(v = Math.min(this.lines.maxLength - 1, M + o - 1); v >= 0; v--)if (R && R.start > k + T) {
                                for(var B = R.newLines.length - 1; B >= 0; B--)this.lines.set(v--, R.newLines[B]);
                                v++, E.push({
                                    index: k + 1,
                                    amount: R.newLines.length
                                }), T += R.newLines.length, R = i[++A];
                            } else this.lines.set(v, x[k--]);
                            var O = 0;
                            for(v = E.length - 1; v >= 0; v--)E[v].index += O, this.lines.onInsertEmitter.fire(E[v]), O += E[v].amount;
                            var D = Math.max(0, M + o - this.lines.maxLength);
                            D > 0 && this.lines.onTrimEmitter.fire(D);
                        }
                    }, e144.prototype.stringIndexToBufferIndex = function(e, t, r) {
                        for(void 0 === r && (r = !1); t;){
                            var i = this.lines.get(e);
                            if (!i) return [
                                -1,
                                -1
                            ];
                            for(var n = r ? i.getTrimmedLength() : i.length, o = 0; o < n; ++o)if (i.get(o)[s33.CHAR_DATA_WIDTH_INDEX] && (t -= i.get(o)[s33.CHAR_DATA_CHAR_INDEX].length || 1), t < 0) return [
                                e,
                                o
                            ];
                            e++;
                        }
                        return [
                            e,
                            0
                        ];
                    }, e144.prototype.translateBufferLineToString = function(e, t, r, i) {
                        void 0 === r && (r = 0);
                        var n = this.lines.get(e);
                        return n ? n.translateToString(t, r, i) : "";
                    }, e144.prototype.getWrappedRangeForLine = function(e) {
                        for(var t = e, r = e; t > 0 && this.lines.get(t).isWrapped;)t--;
                        for(; r + 1 < this.lines.length && this.lines.get(r + 1).isWrapped;)r++;
                        return {
                            first: t,
                            last: r
                        };
                    }, e144.prototype.setupTabStops = function(e) {
                        for(null != e ? this.tabs[e] || (e = this.prevStop(e)) : (this.tabs = {
                        }, e = 0); e < this._cols; e += this._optionsService.options.tabStopWidth)this.tabs[e] = !0;
                    }, e144.prototype.prevStop = function(e) {
                        for(null == e && (e = this.x); !this.tabs[--e] && e > 0;);
                        return e >= this._cols ? this._cols - 1 : e < 0 ? 0 : e;
                    }, e144.prototype.nextStop = function(e) {
                        for(null == e && (e = this.x); !this.tabs[++e] && e < this._cols;);
                        return e >= this._cols ? this._cols - 1 : e < 0 ? 0 : e;
                    }, e144.prototype.addMarker = function(e145) {
                        var t = this, r = new c17.Marker(e145);
                        return this.markers.push(r), r.register(this.lines.onTrim(function(e) {
                            r.line -= e, r.line < 0 && r.dispose();
                        })), r.register(this.lines.onInsert(function(e) {
                            r.line >= e.index && (r.line += e.amount);
                        })), r.register(this.lines.onDelete(function(e) {
                            r.line >= e.index && r.line < e.index + e.amount && r.dispose(), r.line > e.index && (r.line -= e.amount);
                        })), r.register(r.onDispose(function() {
                            return t._removeMarker(r);
                        })), r;
                    }, e144.prototype._removeMarker = function(e) {
                        this.markers.splice(this.markers.indexOf(e), 1);
                    }, e144.prototype.iterator = function(e, t, r, i, n) {
                        return new f11(this, e, t, r, i, n);
                    }, e144;
                }();
                t100.Buffer = u12;
                var f11 = function() {
                    function e146(e, t, r, i, n, o) {
                        void 0 === r && (r = 0), void 0 === i && (i = e.lines.length), void 0 === n && (n = 0), void 0 === o && (o = 0), this._buffer = e, this._trimRight = t, this._startIndex = r, this._endIndex = i, this._startOverscan = n, this._endOverscan = o, this._startIndex < 0 && (this._startIndex = 0), this._endIndex > this._buffer.lines.length && (this._endIndex = this._buffer.lines.length), this._current = this._startIndex;
                    }
                    return e146.prototype.hasNext = function() {
                        return this._current < this._endIndex;
                    }, e146.prototype.next = function() {
                        var e = this._buffer.getWrappedRangeForLine(this._current);
                        e.first < this._startIndex - this._startOverscan && (e.first = this._startIndex - this._startOverscan), e.last > this._endIndex + this._endOverscan && (e.last = this._endIndex + this._endOverscan), e.first = Math.max(e.first, 0), e.last = Math.min(e.last, this._buffer.lines.length);
                        for(var t = "", r = e.first; r <= e.last; ++r)t += this._buffer.translateBufferLineToString(r, this._trimRight);
                        return this._current = e.last + 1, {
                            range: e,
                            content: t
                        };
                    }, e146;
                }();
                t100.BufferStringIterator = f11;
            },
            8437: (e147, t101, r56)=>{
                Object.defineProperty(t101, "__esModule", {
                    value: !0
                }), t101.BufferLine = t101.DEFAULT_ATTR_DATA = void 0;
                var i39 = r56(482), n35 = r56(643), o32 = r56(511), s34 = r56(3734);
                t101.DEFAULT_ATTR_DATA = Object.freeze(new s34.AttributeData);
                var a31 = function() {
                    function e148(e, t, r) {
                        void 0 === r && (r = !1), this.isWrapped = r, this._combined = {
                        }, this._extendedAttrs = {
                        }, this._data = new Uint32Array(3 * e);
                        for(var i = t || o32.CellData.fromCharData([
                            0,
                            n35.NULL_CELL_CHAR,
                            n35.NULL_CELL_WIDTH,
                            n35.NULL_CELL_CODE
                        ]), s = 0; s < e; ++s)this.setCell(s, i);
                        this.length = e;
                    }
                    return e148.prototype.get = function(e) {
                        var t = this._data[3 * e + 0], r = 2097151 & t;
                        return [
                            this._data[3 * e + 1],
                            2097152 & t ? this._combined[e] : r ? (0, i39.stringFromCodePoint)(r) : "",
                            t >> 22,
                            2097152 & t ? this._combined[e].charCodeAt(this._combined[e].length - 1) : r
                        ];
                    }, e148.prototype.set = function(e, t) {
                        this._data[3 * e + 1] = t[n35.CHAR_DATA_ATTR_INDEX], t[n35.CHAR_DATA_CHAR_INDEX].length > 1 ? (this._combined[e] = t[1], this._data[3 * e + 0] = 2097152 | e | t[n35.CHAR_DATA_WIDTH_INDEX] << 22) : this._data[3 * e + 0] = t[n35.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | t[n35.CHAR_DATA_WIDTH_INDEX] << 22;
                    }, e148.prototype.getWidth = function(e) {
                        return this._data[3 * e + 0] >> 22;
                    }, e148.prototype.hasWidth = function(e) {
                        return 12582912 & this._data[3 * e + 0];
                    }, e148.prototype.getFg = function(e) {
                        return this._data[3 * e + 1];
                    }, e148.prototype.getBg = function(e) {
                        return this._data[3 * e + 2];
                    }, e148.prototype.hasContent = function(e) {
                        return 4194303 & this._data[3 * e + 0];
                    }, e148.prototype.getCodePoint = function(e) {
                        var t = this._data[3 * e + 0];
                        return 2097152 & t ? this._combined[e].charCodeAt(this._combined[e].length - 1) : 2097151 & t;
                    }, e148.prototype.isCombined = function(e) {
                        return 2097152 & this._data[3 * e + 0];
                    }, e148.prototype.getString = function(e) {
                        var t = this._data[3 * e + 0];
                        return 2097152 & t ? this._combined[e] : 2097151 & t ? (0, i39.stringFromCodePoint)(2097151 & t) : "";
                    }, e148.prototype.loadCell = function(e, t) {
                        var r = 3 * e;
                        return t.content = this._data[r + 0], t.fg = this._data[r + 1], t.bg = this._data[r + 2], 2097152 & t.content && (t.combinedData = this._combined[e]), 268435456 & t.bg && (t.extended = this._extendedAttrs[e]), t;
                    }, e148.prototype.setCell = function(e, t) {
                        2097152 & t.content && (this._combined[e] = t.combinedData), 268435456 & t.bg && (this._extendedAttrs[e] = t.extended), this._data[3 * e + 0] = t.content, this._data[3 * e + 1] = t.fg, this._data[3 * e + 2] = t.bg;
                    }, e148.prototype.setCellFromCodePoint = function(e, t, r, i, n, o) {
                        268435456 & n && (this._extendedAttrs[e] = o), this._data[3 * e + 0] = t | r << 22, this._data[3 * e + 1] = i, this._data[3 * e + 2] = n;
                    }, e148.prototype.addCodepointToCell = function(e, t) {
                        var r = this._data[3 * e + 0];
                        2097152 & r ? this._combined[e] += (0, i39.stringFromCodePoint)(t) : (2097151 & r ? (this._combined[e] = (0, i39.stringFromCodePoint)(2097151 & r) + (0, i39.stringFromCodePoint)(t), r &= -2097152, r |= 2097152) : r = t | 4194304, this._data[3 * e + 0] = r);
                    }, e148.prototype.insertCells = function(e, t, r, i) {
                        if ((e %= this.length) && 2 === this.getWidth(e - 1) && this.setCellFromCodePoint(e - 1, 0, 1, (null == i ? void 0 : i.fg) || 0, (null == i ? void 0 : i.bg) || 0, (null == i ? void 0 : i.extended) || new s34.ExtendedAttrs), t < this.length - e) {
                            for(var n = new o32.CellData, a = this.length - e - t - 1; a >= 0; --a)this.setCell(e + t + a, this.loadCell(e + a, n));
                            for(a = 0; a < t; ++a)this.setCell(e + a, r);
                        } else for(a = e; a < this.length; ++a)this.setCell(a, r);
                        2 === this.getWidth(this.length - 1) && this.setCellFromCodePoint(this.length - 1, 0, 1, (null == i ? void 0 : i.fg) || 0, (null == i ? void 0 : i.bg) || 0, (null == i ? void 0 : i.extended) || new s34.ExtendedAttrs);
                    }, e148.prototype.deleteCells = function(e, t, r, i) {
                        if (e %= this.length, t < this.length - e) {
                            for(var n = new o32.CellData, a = 0; a < this.length - e - t; ++a)this.setCell(e + a, this.loadCell(e + t + a, n));
                            for(a = this.length - t; a < this.length; ++a)this.setCell(a, r);
                        } else for(a = e; a < this.length; ++a)this.setCell(a, r);
                        e && 2 === this.getWidth(e - 1) && this.setCellFromCodePoint(e - 1, 0, 1, (null == i ? void 0 : i.fg) || 0, (null == i ? void 0 : i.bg) || 0, (null == i ? void 0 : i.extended) || new s34.ExtendedAttrs), 0 !== this.getWidth(e) || this.hasContent(e) || this.setCellFromCodePoint(e, 0, 1, (null == i ? void 0 : i.fg) || 0, (null == i ? void 0 : i.bg) || 0, (null == i ? void 0 : i.extended) || new s34.ExtendedAttrs);
                    }, e148.prototype.replaceCells = function(e, t, r, i) {
                        for(e && 2 === this.getWidth(e - 1) && this.setCellFromCodePoint(e - 1, 0, 1, (null == i ? void 0 : i.fg) || 0, (null == i ? void 0 : i.bg) || 0, (null == i ? void 0 : i.extended) || new s34.ExtendedAttrs), t < this.length && 2 === this.getWidth(t - 1) && this.setCellFromCodePoint(t, 0, 1, (null == i ? void 0 : i.fg) || 0, (null == i ? void 0 : i.bg) || 0, (null == i ? void 0 : i.extended) || new s34.ExtendedAttrs); e < t && e < this.length;)this.setCell(e++, r);
                    }, e148.prototype.resize = function(e, t) {
                        if (e !== this.length) {
                            if (e > this.length) {
                                var r = new Uint32Array(3 * e);
                                this.length && (3 * e < this._data.length ? r.set(this._data.subarray(0, 3 * e)) : r.set(this._data)), this._data = r;
                                for(var i = this.length; i < e; ++i)this.setCell(i, t);
                            } else if (e) {
                                (r = new Uint32Array(3 * e)).set(this._data.subarray(0, 3 * e)), this._data = r;
                                var n = Object.keys(this._combined);
                                for(i = 0; i < n.length; i++){
                                    var o = parseInt(n[i], 10);
                                    o >= e && delete this._combined[o];
                                }
                            } else this._data = new Uint32Array(0), this._combined = {
                            };
                            this.length = e;
                        }
                    }, e148.prototype.fill = function(e) {
                        this._combined = {
                        }, this._extendedAttrs = {
                        };
                        for(var t = 0; t < this.length; ++t)this.setCell(t, e);
                    }, e148.prototype.copyFrom = function(e) {
                        for(var t in this.length !== e.length ? this._data = new Uint32Array(e._data) : this._data.set(e._data), this.length = e.length, this._combined = {
                        }, e._combined)this._combined[t] = e._combined[t];
                        for(var t in this._extendedAttrs = {
                        }, e._extendedAttrs)this._extendedAttrs[t] = e._extendedAttrs[t];
                        this.isWrapped = e.isWrapped;
                    }, e148.prototype.clone = function() {
                        var t = new e148(0);
                        for(var r in t._data = new Uint32Array(this._data), t.length = this.length, this._combined)t._combined[r] = this._combined[r];
                        for(var r in this._extendedAttrs)t._extendedAttrs[r] = this._extendedAttrs[r];
                        return t.isWrapped = this.isWrapped, t;
                    }, e148.prototype.getTrimmedLength = function() {
                        for(var e = this.length - 1; e >= 0; --e)if (4194303 & this._data[3 * e + 0]) return e + (this._data[3 * e + 0] >> 22);
                        return 0;
                    }, e148.prototype.copyCellsFrom = function(e, t, r, i, n) {
                        var o = e._data;
                        if (n) for(var s = i - 1; s >= 0; s--)for(var a = 0; a < 3; a++)this._data[3 * (r + s) + a] = o[3 * (t + s) + a];
                        else for(s = 0; s < i; s++)for(a = 0; a < 3; a++)this._data[3 * (r + s) + a] = o[3 * (t + s) + a];
                        var c = Object.keys(e._combined);
                        for(a = 0; a < c.length; a++){
                            var l = parseInt(c[a], 10);
                            l >= t && (this._combined[l - t + r] = e._combined[l]);
                        }
                    }, e148.prototype.translateToString = function(e, t, r) {
                        void 0 === e && (e = !1), void 0 === t && (t = 0), void 0 === r && (r = this.length), e && (r = Math.min(r, this.getTrimmedLength()));
                        for(var o = ""; t < r;){
                            var s = this._data[3 * t + 0], a = 2097151 & s;
                            o += 2097152 & s ? this._combined[t] : a ? (0, i39.stringFromCodePoint)(a) : n35.WHITESPACE_CELL_CHAR, t += s >> 22 || 1;
                        }
                        return o;
                    }, e148;
                }();
                t101.BufferLine = a31;
            },
            4841: (e149, t102)=>{
                Object.defineProperty(t102, "__esModule", {
                    value: !0
                }), t102.getRangeLength = void 0, t102.getRangeLength = function(e, t) {
                    if (e.start.y > e.end.y) throw new Error("Buffer range end (" + e.end.x + ", " + e.end.y + ") cannot be before start (" + e.start.x + ", " + e.start.y + ")");
                    return t * (e.end.y - e.start.y) + (e.end.x - e.start.x + 1);
                };
            },
            4634: (e150, t103)=>{
                function r57(e, t, r) {
                    if (t === e.length - 1) return e[t].getTrimmedLength();
                    var i = !e[t].hasContent(r - 1) && 1 === e[t].getWidth(r - 1), n = 2 === e[t + 1].getWidth(0);
                    return i && n ? r - 1 : r;
                }
                Object.defineProperty(t103, "__esModule", {
                    value: !0
                }), t103.getWrappedLineTrimmedLength = t103.reflowSmallerGetNewLineLengths = t103.reflowLargerApplyNewLayout = t103.reflowLargerCreateNewLayout = t103.reflowLargerGetLinesToRemove = void 0, t103.reflowLargerGetLinesToRemove = function(e, t, i, n, o) {
                    for(var s = [], a = 0; a < e.length - 1; a++){
                        var c = a, l = e.get(++c);
                        if (l.isWrapped) {
                            for(var h = [
                                e.get(a)
                            ]; c < e.length && l.isWrapped;)h.push(l), l = e.get(++c);
                            if (n >= a && n < c) a += h.length - 1;
                            else {
                                for(var u = 0, f = r57(h, u, t), _ = 1, d = 0; _ < h.length;){
                                    var p = r57(h, _, t), v = p - d, g = i - f, y = Math.min(v, g);
                                    h[u].copyCellsFrom(h[_], d, f, y, !1), (f += y) === i && (u++, f = 0), (d += y) === p && (_++, d = 0), 0 === f && 0 !== u && 2 === h[u - 1].getWidth(i - 1) && (h[u].copyCellsFrom(h[u - 1], i - 1, f++, 1, !1), h[u - 1].setCell(i - 1, o));
                                }
                                h[u].replaceCells(f, i, o);
                                for(var m = 0, S = h.length - 1; S > 0 && (S > u || 0 === h[S].getTrimmedLength()); S--)m++;
                                m > 0 && (s.push(a + h.length - m), s.push(m)), a += h.length - 1;
                            }
                        }
                    }
                    return s;
                }, t103.reflowLargerCreateNewLayout = function(e, t) {
                    for(var r = [], i = 0, n = t[i], o = 0, s = 0; s < e.length; s++)if (n === s) {
                        var a = t[++i];
                        e.onDeleteEmitter.fire({
                            index: s - o,
                            amount: a
                        }), s += a - 1, o += a, n = t[++i];
                    } else r.push(s);
                    return {
                        layout: r,
                        countRemoved: o
                    };
                }, t103.reflowLargerApplyNewLayout = function(e, t) {
                    for(var r = [], i = 0; i < t.length; i++)r.push(e.get(t[i]));
                    for(i = 0; i < r.length; i++)e.set(i, r[i]);
                    e.length = t.length;
                }, t103.reflowSmallerGetNewLineLengths = function(e151, t104, i) {
                    for(var n36 = [], o = e151.map(function(i, n) {
                        return r57(e151, n, t104);
                    }).reduce(function(e, t) {
                        return e + t;
                    }), s = 0, a = 0, c = 0; c < o;){
                        if (o - c < i) {
                            n36.push(o - c);
                            break;
                        }
                        s += i;
                        var l = r57(e151, a, t104);
                        s > l && (s -= l, a++);
                        var h = 2 === e151[a].getWidth(s - 1);
                        h && s--;
                        var u = h ? i - 1 : i;
                        n36.push(u), c += u;
                    }
                    return n36;
                }, t103.getWrappedLineTrimmedLength = r57;
            },
            5295: function(e152, t105, r58) {
                var i40, n = this && this.__extends || (i40 = function(e153, t106) {
                    return i40 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i40(e153, t106);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i40(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                });
                Object.defineProperty(t105, "__esModule", {
                    value: !0
                }), t105.BufferSet = void 0;
                var o = r58(9092), s = r58(8460), a = function(e154) {
                    function t107(t, r) {
                        var i = e154.call(this) || this;
                        return i._optionsService = t, i._bufferService = r, i._onBufferActivate = i.register(new s.EventEmitter), i.reset(), i;
                    }
                    return n(t107, e154), Object.defineProperty(t107.prototype, "onBufferActivate", {
                        get: function() {
                            return this._onBufferActivate.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t107.prototype.reset = function() {
                        this._normal = new o.Buffer(!0, this._optionsService, this._bufferService), this._normal.fillViewportRows(), this._alt = new o.Buffer(!1, this._optionsService, this._bufferService), this._activeBuffer = this._normal, this._onBufferActivate.fire({
                            activeBuffer: this._normal,
                            inactiveBuffer: this._alt
                        }), this.setupTabStops();
                    }, Object.defineProperty(t107.prototype, "alt", {
                        get: function() {
                            return this._alt;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t107.prototype, "active", {
                        get: function() {
                            return this._activeBuffer;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t107.prototype, "normal", {
                        get: function() {
                            return this._normal;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t107.prototype.activateNormalBuffer = function() {
                        this._activeBuffer !== this._normal && (this._normal.x = this._alt.x, this._normal.y = this._alt.y, this._alt.clear(), this._activeBuffer = this._normal, this._onBufferActivate.fire({
                            activeBuffer: this._normal,
                            inactiveBuffer: this._alt
                        }));
                    }, t107.prototype.activateAltBuffer = function(e) {
                        this._activeBuffer !== this._alt && (this._alt.fillViewportRows(e), this._alt.x = this._normal.x, this._alt.y = this._normal.y, this._activeBuffer = this._alt, this._onBufferActivate.fire({
                            activeBuffer: this._alt,
                            inactiveBuffer: this._normal
                        }));
                    }, t107.prototype.resize = function(e, t) {
                        this._normal.resize(e, t), this._alt.resize(e, t);
                    }, t107.prototype.setupTabStops = function(e) {
                        this._normal.setupTabStops(e), this._alt.setupTabStops(e);
                    }, t107;
                }(r58(844).Disposable);
                t105.BufferSet = a;
            },
            511: function(e155, t108, r59) {
                var i41, n = this && this.__extends || (i41 = function(e156, t109) {
                    return i41 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i41(e156, t109);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i41(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                });
                Object.defineProperty(t108, "__esModule", {
                    value: !0
                }), t108.CellData = void 0;
                var o = r59(482), s = r59(643), a = r59(3734), c = function(e157) {
                    function t110() {
                        var t = null !== e157 && e157.apply(this, arguments) || this;
                        return t.content = 0, t.fg = 0, t.bg = 0, t.extended = new a.ExtendedAttrs, t.combinedData = "", t;
                    }
                    return n(t110, e157), t110.fromCharData = function(e) {
                        var r = new t110;
                        return r.setFromCharData(e), r;
                    }, t110.prototype.isCombined = function() {
                        return 2097152 & this.content;
                    }, t110.prototype.getWidth = function() {
                        return this.content >> 22;
                    }, t110.prototype.getChars = function() {
                        return 2097152 & this.content ? this.combinedData : 2097151 & this.content ? (0, o.stringFromCodePoint)(2097151 & this.content) : "";
                    }, t110.prototype.getCode = function() {
                        return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : 2097151 & this.content;
                    }, t110.prototype.setFromCharData = function(e) {
                        this.fg = e[s.CHAR_DATA_ATTR_INDEX], this.bg = 0;
                        var t = !1;
                        if (e[s.CHAR_DATA_CHAR_INDEX].length > 2) t = !0;
                        else if (2 === e[s.CHAR_DATA_CHAR_INDEX].length) {
                            var r = e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(0);
                            if (55296 <= r && r <= 56319) {
                                var i = e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(1);
                                56320 <= i && i <= 57343 ? this.content = 1024 * (r - 55296) + i - 56320 + 65536 | e[s.CHAR_DATA_WIDTH_INDEX] << 22 : t = !0;
                            } else t = !0;
                        } else this.content = e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | e[s.CHAR_DATA_WIDTH_INDEX] << 22;
                        t && (this.combinedData = e[s.CHAR_DATA_CHAR_INDEX], this.content = 2097152 | e[s.CHAR_DATA_WIDTH_INDEX] << 22);
                    }, t110.prototype.getAsCharData = function() {
                        return [
                            this.fg,
                            this.getChars(),
                            this.getWidth(),
                            this.getCode()
                        ];
                    }, t110;
                }(a.AttributeData);
                t108.CellData = c;
            },
            643: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.WHITESPACE_CELL_CODE = t.WHITESPACE_CELL_WIDTH = t.WHITESPACE_CELL_CHAR = t.NULL_CELL_CODE = t.NULL_CELL_WIDTH = t.NULL_CELL_CHAR = t.CHAR_DATA_CODE_INDEX = t.CHAR_DATA_WIDTH_INDEX = t.CHAR_DATA_CHAR_INDEX = t.CHAR_DATA_ATTR_INDEX = t.DEFAULT_ATTR = t.DEFAULT_COLOR = void 0, t.DEFAULT_COLOR = 256, t.DEFAULT_ATTR = 256 | t.DEFAULT_COLOR << 9, t.CHAR_DATA_ATTR_INDEX = 0, t.CHAR_DATA_CHAR_INDEX = 1, t.CHAR_DATA_WIDTH_INDEX = 2, t.CHAR_DATA_CODE_INDEX = 3, t.NULL_CELL_CHAR = "", t.NULL_CELL_WIDTH = 1, t.NULL_CELL_CODE = 0, t.WHITESPACE_CELL_CHAR = " ", t.WHITESPACE_CELL_WIDTH = 1, t.WHITESPACE_CELL_CODE = 32;
            },
            4863: function(e158, t111, r60) {
                var i42, n = this && this.__extends || (i42 = function(e159, t112) {
                    return i42 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i42(e159, t112);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i42(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                });
                Object.defineProperty(t111, "__esModule", {
                    value: !0
                }), t111.Marker = void 0;
                var o = r60(8460), s = function(e) {
                    function t(r) {
                        var i = e.call(this) || this;
                        return i.line = r, i._id = t._nextId++, i.isDisposed = !1, i._onDispose = new o.EventEmitter, i;
                    }
                    return n(t, e), Object.defineProperty(t.prototype, "id", {
                        get: function() {
                            return this._id;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "onDispose", {
                        get: function() {
                            return this._onDispose.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.dispose = function() {
                        this.isDisposed || (this.isDisposed = !0, this.line = -1, this._onDispose.fire(), e.prototype.dispose.call(this));
                    }, t._nextId = 1, t;
                }(r60(844).Disposable);
                t111.Marker = s;
            },
            7116: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.DEFAULT_CHARSET = t.CHARSETS = void 0, t.CHARSETS = {
                }, t.DEFAULT_CHARSET = t.CHARSETS.B, t.CHARSETS[0] = {
                    "`": "◆",
                    a: "▒",
                    b: "␉",
                    c: "␌",
                    d: "␍",
                    e: "␊",
                    f: "°",
                    g: "±",
                    h: "␤",
                    i: "␋",
                    j: "┘",
                    k: "┐",
                    l: "┌",
                    m: "└",
                    n: "┼",
                    o: "⎺",
                    p: "⎻",
                    q: "─",
                    r: "⎼",
                    s: "⎽",
                    t: "├",
                    u: "┤",
                    v: "┴",
                    w: "┬",
                    x: "│",
                    y: "≤",
                    z: "≥",
                    "{": "π",
                    "|": "≠",
                    "}": "£",
                    "~": "·"
                }, t.CHARSETS.A = {
                    "#": "£"
                }, t.CHARSETS.B = void 0, t.CHARSETS[4] = {
                    "#": "£",
                    "@": "¾",
                    "[": "ij",
                    "\\": "½",
                    "]": "|",
                    "{": "¨",
                    "|": "f",
                    "}": "¼",
                    "~": "´"
                }, t.CHARSETS.C = t.CHARSETS[5] = {
                    "[": "Ä",
                    "\\": "Ö",
                    "]": "Å",
                    "^": "Ü",
                    "`": "é",
                    "{": "ä",
                    "|": "ö",
                    "}": "å",
                    "~": "ü"
                }, t.CHARSETS.R = {
                    "#": "£",
                    "@": "à",
                    "[": "°",
                    "\\": "ç",
                    "]": "§",
                    "{": "é",
                    "|": "ù",
                    "}": "è",
                    "~": "¨"
                }, t.CHARSETS.Q = {
                    "@": "à",
                    "[": "â",
                    "\\": "ç",
                    "]": "ê",
                    "^": "î",
                    "`": "ô",
                    "{": "é",
                    "|": "ù",
                    "}": "è",
                    "~": "û"
                }, t.CHARSETS.K = {
                    "@": "§",
                    "[": "Ä",
                    "\\": "Ö",
                    "]": "Ü",
                    "{": "ä",
                    "|": "ö",
                    "}": "ü",
                    "~": "ß"
                }, t.CHARSETS.Y = {
                    "#": "£",
                    "@": "§",
                    "[": "°",
                    "\\": "ç",
                    "]": "é",
                    "`": "ù",
                    "{": "à",
                    "|": "ò",
                    "}": "è",
                    "~": "ì"
                }, t.CHARSETS.E = t.CHARSETS[6] = {
                    "@": "Ä",
                    "[": "Æ",
                    "\\": "Ø",
                    "]": "Å",
                    "^": "Ü",
                    "`": "ä",
                    "{": "æ",
                    "|": "ø",
                    "}": "å",
                    "~": "ü"
                }, t.CHARSETS.Z = {
                    "#": "£",
                    "@": "§",
                    "[": "¡",
                    "\\": "Ñ",
                    "]": "¿",
                    "{": "°",
                    "|": "ñ",
                    "}": "ç"
                }, t.CHARSETS.H = t.CHARSETS[7] = {
                    "@": "É",
                    "[": "Ä",
                    "\\": "Ö",
                    "]": "Å",
                    "^": "Ü",
                    "`": "é",
                    "{": "ä",
                    "|": "ö",
                    "}": "å",
                    "~": "ü"
                }, t.CHARSETS["="] = {
                    "#": "ù",
                    "@": "à",
                    "[": "é",
                    "\\": "ç",
                    "]": "ê",
                    "^": "î",
                    _: "è",
                    "`": "ô",
                    "{": "ä",
                    "|": "ö",
                    "}": "ü",
                    "~": "û"
                };
            },
            2584: (e, t)=>{
                var r, i;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.C1 = t.C0 = void 0, (i = t.C0 || (t.C0 = {
                })).NUL = "\0", i.SOH = "", i.STX = "", i.ETX = "", i.EOT = "", i.ENQ = "", i.ACK = "", i.BEL = "", i.BS = "\b", i.HT = "\t", i.LF = "\n", i.VT = "\v", i.FF = "\f", i.CR = "\r", i.SO = "", i.SI = "", i.DLE = "", i.DC1 = "", i.DC2 = "", i.DC3 = "", i.DC4 = "", i.NAK = "", i.SYN = "", i.ETB = "", i.CAN = "", i.EM = "", i.SUB = "", i.ESC = "", i.FS = "", i.GS = "", i.RS = "", i.US = "", i.SP = " ", i.DEL = "", (r = t.C1 || (t.C1 = {
                })).PAD = "", r.HOP = "", r.BPH = "", r.NBH = "", r.IND = "", r.NEL = "", r.SSA = "", r.ESA = "", r.HTS = "", r.HTJ = "", r.VTS = "", r.PLD = "", r.PLU = "", r.RI = "", r.SS2 = "", r.SS3 = "", r.DCS = "", r.PU1 = "", r.PU2 = "", r.STS = "", r.CCH = "", r.MW = "", r.SPA = "", r.EPA = "", r.SOS = "", r.SGCI = "", r.SCI = "", r.CSI = "", r.ST = "", r.OSC = "", r.PM = "", r.APC = "";
            },
            7399: (e160, t113, r61)=>{
                Object.defineProperty(t113, "__esModule", {
                    value: !0
                }), t113.evaluateKeyboardEvent = void 0;
                var i = r61(2584), n = {
                    48: [
                        "0",
                        ")"
                    ],
                    49: [
                        "1",
                        "!"
                    ],
                    50: [
                        "2",
                        "@"
                    ],
                    51: [
                        "3",
                        "#"
                    ],
                    52: [
                        "4",
                        "$"
                    ],
                    53: [
                        "5",
                        "%"
                    ],
                    54: [
                        "6",
                        "^"
                    ],
                    55: [
                        "7",
                        "&"
                    ],
                    56: [
                        "8",
                        "*"
                    ],
                    57: [
                        "9",
                        "("
                    ],
                    186: [
                        ";",
                        ":"
                    ],
                    187: [
                        "=",
                        "+"
                    ],
                    188: [
                        ",",
                        "<"
                    ],
                    189: [
                        "-",
                        "_"
                    ],
                    190: [
                        ".",
                        ">"
                    ],
                    191: [
                        "/",
                        "?"
                    ],
                    192: [
                        "`",
                        "~"
                    ],
                    219: [
                        "[",
                        "{"
                    ],
                    220: [
                        "\\",
                        "|"
                    ],
                    221: [
                        "]",
                        "}"
                    ],
                    222: [
                        "'",
                        '"'
                    ]
                };
                t113.evaluateKeyboardEvent = function(e, t, r, o) {
                    var s = {
                        type: 0,
                        cancel: !1,
                        key: void 0
                    }, a = (e.shiftKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.ctrlKey ? 4 : 0) | (e.metaKey ? 8 : 0);
                    switch(e.keyCode){
                        case 0:
                            "UIKeyInputUpArrow" === e.key ? s.key = t ? i.C0.ESC + "OA" : i.C0.ESC + "[A" : "UIKeyInputLeftArrow" === e.key ? s.key = t ? i.C0.ESC + "OD" : i.C0.ESC + "[D" : "UIKeyInputRightArrow" === e.key ? s.key = t ? i.C0.ESC + "OC" : i.C0.ESC + "[C" : "UIKeyInputDownArrow" === e.key && (s.key = t ? i.C0.ESC + "OB" : i.C0.ESC + "[B");
                            break;
                        case 8:
                            if (e.shiftKey) {
                                s.key = i.C0.BS;
                                break;
                            }
                            if (e.altKey) {
                                s.key = i.C0.ESC + i.C0.DEL;
                                break;
                            }
                            s.key = i.C0.DEL;
                            break;
                        case 9:
                            if (e.shiftKey) {
                                s.key = i.C0.ESC + "[Z";
                                break;
                            }
                            s.key = i.C0.HT, s.cancel = !0;
                            break;
                        case 13:
                            s.key = e.altKey ? i.C0.ESC + i.C0.CR : i.C0.CR, s.cancel = !0;
                            break;
                        case 27:
                            s.key = i.C0.ESC, e.altKey && (s.key = i.C0.ESC + i.C0.ESC), s.cancel = !0;
                            break;
                        case 37:
                            if (e.metaKey) break;
                            a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "D", s.key === i.C0.ESC + "[1;3D" && (s.key = i.C0.ESC + (r ? "b" : "[1;5D"))) : s.key = t ? i.C0.ESC + "OD" : i.C0.ESC + "[D";
                            break;
                        case 39:
                            if (e.metaKey) break;
                            a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "C", s.key === i.C0.ESC + "[1;3C" && (s.key = i.C0.ESC + (r ? "f" : "[1;5C"))) : s.key = t ? i.C0.ESC + "OC" : i.C0.ESC + "[C";
                            break;
                        case 38:
                            if (e.metaKey) break;
                            a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "A", r || s.key !== i.C0.ESC + "[1;3A" || (s.key = i.C0.ESC + "[1;5A")) : s.key = t ? i.C0.ESC + "OA" : i.C0.ESC + "[A";
                            break;
                        case 40:
                            if (e.metaKey) break;
                            a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "B", r || s.key !== i.C0.ESC + "[1;3B" || (s.key = i.C0.ESC + "[1;5B")) : s.key = t ? i.C0.ESC + "OB" : i.C0.ESC + "[B";
                            break;
                        case 45:
                            e.shiftKey || e.ctrlKey || (s.key = i.C0.ESC + "[2~");
                            break;
                        case 46:
                            s.key = a ? i.C0.ESC + "[3;" + (a + 1) + "~" : i.C0.ESC + "[3~";
                            break;
                        case 36:
                            s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "H" : t ? i.C0.ESC + "OH" : i.C0.ESC + "[H";
                            break;
                        case 35:
                            s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "F" : t ? i.C0.ESC + "OF" : i.C0.ESC + "[F";
                            break;
                        case 33:
                            e.shiftKey ? s.type = 2 : s.key = i.C0.ESC + "[5~";
                            break;
                        case 34:
                            e.shiftKey ? s.type = 3 : s.key = i.C0.ESC + "[6~";
                            break;
                        case 112:
                            s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "P" : i.C0.ESC + "OP";
                            break;
                        case 113:
                            s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "Q" : i.C0.ESC + "OQ";
                            break;
                        case 114:
                            s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "R" : i.C0.ESC + "OR";
                            break;
                        case 115:
                            s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "S" : i.C0.ESC + "OS";
                            break;
                        case 116:
                            s.key = a ? i.C0.ESC + "[15;" + (a + 1) + "~" : i.C0.ESC + "[15~";
                            break;
                        case 117:
                            s.key = a ? i.C0.ESC + "[17;" + (a + 1) + "~" : i.C0.ESC + "[17~";
                            break;
                        case 118:
                            s.key = a ? i.C0.ESC + "[18;" + (a + 1) + "~" : i.C0.ESC + "[18~";
                            break;
                        case 119:
                            s.key = a ? i.C0.ESC + "[19;" + (a + 1) + "~" : i.C0.ESC + "[19~";
                            break;
                        case 120:
                            s.key = a ? i.C0.ESC + "[20;" + (a + 1) + "~" : i.C0.ESC + "[20~";
                            break;
                        case 121:
                            s.key = a ? i.C0.ESC + "[21;" + (a + 1) + "~" : i.C0.ESC + "[21~";
                            break;
                        case 122:
                            s.key = a ? i.C0.ESC + "[23;" + (a + 1) + "~" : i.C0.ESC + "[23~";
                            break;
                        case 123:
                            s.key = a ? i.C0.ESC + "[24;" + (a + 1) + "~" : i.C0.ESC + "[24~";
                            break;
                        default:
                            if (!e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
                                if (r && !o || !e.altKey || e.metaKey) !r || e.altKey || e.ctrlKey || e.shiftKey || !e.metaKey ? e.key && !e.ctrlKey && !e.altKey && !e.metaKey && e.keyCode >= 48 && 1 === e.key.length ? s.key = e.key : e.key && e.ctrlKey && "_" === e.key && (s.key = i.C0.US) : 65 === e.keyCode && (s.type = 1);
                                else {
                                    var c = n[e.keyCode], l = null == c ? void 0 : c[e.shiftKey ? 1 : 0];
                                    if (l) s.key = i.C0.ESC + l;
                                    else if (e.keyCode >= 65 && e.keyCode <= 90) {
                                        var h = e.ctrlKey ? e.keyCode - 64 : e.keyCode + 32;
                                        s.key = i.C0.ESC + String.fromCharCode(h);
                                    }
                                }
                            } else e.keyCode >= 65 && e.keyCode <= 90 ? s.key = String.fromCharCode(e.keyCode - 64) : 32 === e.keyCode ? s.key = i.C0.NUL : e.keyCode >= 51 && e.keyCode <= 55 ? s.key = String.fromCharCode(e.keyCode - 51 + 27) : 56 === e.keyCode ? s.key = i.C0.DEL : 219 === e.keyCode ? s.key = i.C0.ESC : 220 === e.keyCode ? s.key = i.C0.FS : 221 === e.keyCode && (s.key = i.C0.GS);
                    }
                    return s;
                };
            },
            482: (e161, t114)=>{
                Object.defineProperty(t114, "__esModule", {
                    value: !0
                }), t114.Utf8ToUtf32 = t114.StringToUtf32 = t114.utf32ToString = t114.stringFromCodePoint = void 0, t114.stringFromCodePoint = function(e) {
                    return e > 65535 ? (e -= 65536, String.fromCharCode(55296 + (e >> 10)) + String.fromCharCode(e % 1024 + 56320)) : String.fromCharCode(e);
                }, t114.utf32ToString = function(e, t, r) {
                    void 0 === t && (t = 0), void 0 === r && (r = e.length);
                    for(var i = "", n = t; n < r; ++n){
                        var o = e[n];
                        o > 65535 ? (o -= 65536, i += String.fromCharCode(55296 + (o >> 10)) + String.fromCharCode(o % 1024 + 56320)) : i += String.fromCharCode(o);
                    }
                    return i;
                };
                var r62 = function() {
                    function e162() {
                        this._interim = 0;
                    }
                    return e162.prototype.clear = function() {
                        this._interim = 0;
                    }, e162.prototype.decode = function(e, t) {
                        var r = e.length;
                        if (!r) return 0;
                        var i = 0, n = 0;
                        this._interim && (56320 <= (a = e.charCodeAt(n++)) && a <= 57343 ? t[i++] = 1024 * (this._interim - 55296) + a - 56320 + 65536 : (t[i++] = this._interim, t[i++] = a), this._interim = 0);
                        for(var o = n; o < r; ++o){
                            var s = e.charCodeAt(o);
                            if (55296 <= s && s <= 56319) {
                                if (++o >= r) return this._interim = s, i;
                                var a;
                                56320 <= (a = e.charCodeAt(o)) && a <= 57343 ? t[i++] = 1024 * (s - 55296) + a - 56320 + 65536 : (t[i++] = s, t[i++] = a);
                            } else 65279 !== s && (t[i++] = s);
                        }
                        return i;
                    }, e162;
                }();
                t114.StringToUtf32 = r62;
                var i43 = function() {
                    function e163() {
                        this.interim = new Uint8Array(3);
                    }
                    return e163.prototype.clear = function() {
                        this.interim.fill(0);
                    }, e163.prototype.decode = function(e, t) {
                        var r = e.length;
                        if (!r) return 0;
                        var i, n, o, s, a = 0, c = 0, l = 0;
                        if (this.interim[0]) {
                            var h = !1, u = this.interim[0];
                            u &= 192 == (224 & u) ? 31 : 224 == (240 & u) ? 15 : 7;
                            for(var f = 0, _ = void 0; (_ = 63 & this.interim[++f]) && f < 4;)u <<= 6, u |= _;
                            for(var d = 192 == (224 & this.interim[0]) ? 2 : 224 == (240 & this.interim[0]) ? 3 : 4, p = d - f; l < p;){
                                if (l >= r) return 0;
                                if (128 != (192 & (_ = e[l++]))) {
                                    l--, h = !0;
                                    break;
                                }
                                this.interim[f++] = _, u <<= 6, u |= 63 & _;
                            }
                            h || (2 === d ? u < 128 ? l-- : t[a++] = u : 3 === d ? u < 2048 || u >= 55296 && u <= 57343 || 65279 === u || (t[a++] = u) : u < 65536 || u > 1114111 || (t[a++] = u)), this.interim.fill(0);
                        }
                        for(var v = r - 4, g = l; g < r;){
                            for(; !(!(g < v) || 128 & (i = e[g]) || 128 & (n = e[g + 1]) || 128 & (o = e[g + 2]) || 128 & (s = e[g + 3]));)t[a++] = i, t[a++] = n, t[a++] = o, t[a++] = s, g += 4;
                            if ((i = e[g++]) < 128) t[a++] = i;
                            else if (192 == (224 & i)) {
                                if (g >= r) return this.interim[0] = i, a;
                                if (128 != (192 & (n = e[g++]))) {
                                    g--;
                                    continue;
                                }
                                if ((c = (31 & i) << 6 | 63 & n) < 128) {
                                    g--;
                                    continue;
                                }
                                t[a++] = c;
                            } else if (224 == (240 & i)) {
                                if (g >= r) return this.interim[0] = i, a;
                                if (128 != (192 & (n = e[g++]))) {
                                    g--;
                                    continue;
                                }
                                if (g >= r) return this.interim[0] = i, this.interim[1] = n, a;
                                if (128 != (192 & (o = e[g++]))) {
                                    g--;
                                    continue;
                                }
                                if ((c = (15 & i) << 12 | (63 & n) << 6 | 63 & o) < 2048 || c >= 55296 && c <= 57343 || 65279 === c) continue;
                                t[a++] = c;
                            } else if (240 == (248 & i)) {
                                if (g >= r) return this.interim[0] = i, a;
                                if (128 != (192 & (n = e[g++]))) {
                                    g--;
                                    continue;
                                }
                                if (g >= r) return this.interim[0] = i, this.interim[1] = n, a;
                                if (128 != (192 & (o = e[g++]))) {
                                    g--;
                                    continue;
                                }
                                if (g >= r) return this.interim[0] = i, this.interim[1] = n, this.interim[2] = o, a;
                                if (128 != (192 & (s = e[g++]))) {
                                    g--;
                                    continue;
                                }
                                if ((c = (7 & i) << 18 | (63 & n) << 12 | (63 & o) << 6 | 63 & s) < 65536 || c > 1114111) continue;
                                t[a++] = c;
                            }
                        }
                        return a;
                    }, e163;
                }();
                t114.Utf8ToUtf32 = i43;
            },
            225: (e164, t115, r63)=>{
                Object.defineProperty(t115, "__esModule", {
                    value: !0
                }), t115.UnicodeV6 = void 0;
                var i44, n37 = r63(8273), o = [
                    [
                        768,
                        879
                    ],
                    [
                        1155,
                        1158
                    ],
                    [
                        1160,
                        1161
                    ],
                    [
                        1425,
                        1469
                    ],
                    [
                        1471,
                        1471
                    ],
                    [
                        1473,
                        1474
                    ],
                    [
                        1476,
                        1477
                    ],
                    [
                        1479,
                        1479
                    ],
                    [
                        1536,
                        1539
                    ],
                    [
                        1552,
                        1557
                    ],
                    [
                        1611,
                        1630
                    ],
                    [
                        1648,
                        1648
                    ],
                    [
                        1750,
                        1764
                    ],
                    [
                        1767,
                        1768
                    ],
                    [
                        1770,
                        1773
                    ],
                    [
                        1807,
                        1807
                    ],
                    [
                        1809,
                        1809
                    ],
                    [
                        1840,
                        1866
                    ],
                    [
                        1958,
                        1968
                    ],
                    [
                        2027,
                        2035
                    ],
                    [
                        2305,
                        2306
                    ],
                    [
                        2364,
                        2364
                    ],
                    [
                        2369,
                        2376
                    ],
                    [
                        2381,
                        2381
                    ],
                    [
                        2385,
                        2388
                    ],
                    [
                        2402,
                        2403
                    ],
                    [
                        2433,
                        2433
                    ],
                    [
                        2492,
                        2492
                    ],
                    [
                        2497,
                        2500
                    ],
                    [
                        2509,
                        2509
                    ],
                    [
                        2530,
                        2531
                    ],
                    [
                        2561,
                        2562
                    ],
                    [
                        2620,
                        2620
                    ],
                    [
                        2625,
                        2626
                    ],
                    [
                        2631,
                        2632
                    ],
                    [
                        2635,
                        2637
                    ],
                    [
                        2672,
                        2673
                    ],
                    [
                        2689,
                        2690
                    ],
                    [
                        2748,
                        2748
                    ],
                    [
                        2753,
                        2757
                    ],
                    [
                        2759,
                        2760
                    ],
                    [
                        2765,
                        2765
                    ],
                    [
                        2786,
                        2787
                    ],
                    [
                        2817,
                        2817
                    ],
                    [
                        2876,
                        2876
                    ],
                    [
                        2879,
                        2879
                    ],
                    [
                        2881,
                        2883
                    ],
                    [
                        2893,
                        2893
                    ],
                    [
                        2902,
                        2902
                    ],
                    [
                        2946,
                        2946
                    ],
                    [
                        3008,
                        3008
                    ],
                    [
                        3021,
                        3021
                    ],
                    [
                        3134,
                        3136
                    ],
                    [
                        3142,
                        3144
                    ],
                    [
                        3146,
                        3149
                    ],
                    [
                        3157,
                        3158
                    ],
                    [
                        3260,
                        3260
                    ],
                    [
                        3263,
                        3263
                    ],
                    [
                        3270,
                        3270
                    ],
                    [
                        3276,
                        3277
                    ],
                    [
                        3298,
                        3299
                    ],
                    [
                        3393,
                        3395
                    ],
                    [
                        3405,
                        3405
                    ],
                    [
                        3530,
                        3530
                    ],
                    [
                        3538,
                        3540
                    ],
                    [
                        3542,
                        3542
                    ],
                    [
                        3633,
                        3633
                    ],
                    [
                        3636,
                        3642
                    ],
                    [
                        3655,
                        3662
                    ],
                    [
                        3761,
                        3761
                    ],
                    [
                        3764,
                        3769
                    ],
                    [
                        3771,
                        3772
                    ],
                    [
                        3784,
                        3789
                    ],
                    [
                        3864,
                        3865
                    ],
                    [
                        3893,
                        3893
                    ],
                    [
                        3895,
                        3895
                    ],
                    [
                        3897,
                        3897
                    ],
                    [
                        3953,
                        3966
                    ],
                    [
                        3968,
                        3972
                    ],
                    [
                        3974,
                        3975
                    ],
                    [
                        3984,
                        3991
                    ],
                    [
                        3993,
                        4028
                    ],
                    [
                        4038,
                        4038
                    ],
                    [
                        4141,
                        4144
                    ],
                    [
                        4146,
                        4146
                    ],
                    [
                        4150,
                        4151
                    ],
                    [
                        4153,
                        4153
                    ],
                    [
                        4184,
                        4185
                    ],
                    [
                        4448,
                        4607
                    ],
                    [
                        4959,
                        4959
                    ],
                    [
                        5906,
                        5908
                    ],
                    [
                        5938,
                        5940
                    ],
                    [
                        5970,
                        5971
                    ],
                    [
                        6002,
                        6003
                    ],
                    [
                        6068,
                        6069
                    ],
                    [
                        6071,
                        6077
                    ],
                    [
                        6086,
                        6086
                    ],
                    [
                        6089,
                        6099
                    ],
                    [
                        6109,
                        6109
                    ],
                    [
                        6155,
                        6157
                    ],
                    [
                        6313,
                        6313
                    ],
                    [
                        6432,
                        6434
                    ],
                    [
                        6439,
                        6440
                    ],
                    [
                        6450,
                        6450
                    ],
                    [
                        6457,
                        6459
                    ],
                    [
                        6679,
                        6680
                    ],
                    [
                        6912,
                        6915
                    ],
                    [
                        6964,
                        6964
                    ],
                    [
                        6966,
                        6970
                    ],
                    [
                        6972,
                        6972
                    ],
                    [
                        6978,
                        6978
                    ],
                    [
                        7019,
                        7027
                    ],
                    [
                        7616,
                        7626
                    ],
                    [
                        7678,
                        7679
                    ],
                    [
                        8203,
                        8207
                    ],
                    [
                        8234,
                        8238
                    ],
                    [
                        8288,
                        8291
                    ],
                    [
                        8298,
                        8303
                    ],
                    [
                        8400,
                        8431
                    ],
                    [
                        12330,
                        12335
                    ],
                    [
                        12441,
                        12442
                    ],
                    [
                        43014,
                        43014
                    ],
                    [
                        43019,
                        43019
                    ],
                    [
                        43045,
                        43046
                    ],
                    [
                        64286,
                        64286
                    ],
                    [
                        65024,
                        65039
                    ],
                    [
                        65056,
                        65059
                    ],
                    [
                        65279,
                        65279
                    ],
                    [
                        65529,
                        65531
                    ]
                ], s = [
                    [
                        68097,
                        68099
                    ],
                    [
                        68101,
                        68102
                    ],
                    [
                        68108,
                        68111
                    ],
                    [
                        68152,
                        68154
                    ],
                    [
                        68159,
                        68159
                    ],
                    [
                        119143,
                        119145
                    ],
                    [
                        119155,
                        119170
                    ],
                    [
                        119173,
                        119179
                    ],
                    [
                        119210,
                        119213
                    ],
                    [
                        119362,
                        119364
                    ],
                    [
                        917505,
                        917505
                    ],
                    [
                        917536,
                        917631
                    ],
                    [
                        917760,
                        917999
                    ]
                ], a = function() {
                    function e165() {
                        if (this.version = "6", !i44) {
                            i44 = new Uint8Array(65536), (0, n37.fill)(i44, 1), i44[0] = 0, (0, n37.fill)(i44, 0, 1, 32), (0, n37.fill)(i44, 0, 127, 160), (0, n37.fill)(i44, 2, 4352, 4448), i44[9001] = 2, i44[9002] = 2, (0, n37.fill)(i44, 2, 11904, 42192), i44[12351] = 1, (0, n37.fill)(i44, 2, 44032, 55204), (0, n37.fill)(i44, 2, 63744, 64256), (0, n37.fill)(i44, 2, 65040, 65050), (0, n37.fill)(i44, 2, 65072, 65136), (0, n37.fill)(i44, 2, 65280, 65377), (0, n37.fill)(i44, 2, 65504, 65511);
                            for(var e = 0; e < o.length; ++e)(0, n37.fill)(i44, 0, o[e][0], o[e][1] + 1);
                        }
                    }
                    return e165.prototype.wcwidth = function(e166) {
                        return e166 < 32 ? 0 : e166 < 127 ? 1 : e166 < 65536 ? i44[e166] : (function(e, t) {
                            var r, i = 0, n = t.length - 1;
                            if (e < t[0][0] || e > t[n][1]) return !1;
                            for(; n >= i;)if (e > t[r = i + n >> 1][1]) i = r + 1;
                            else {
                                if (!(e < t[r][0])) return !0;
                                n = r - 1;
                            }
                            return !1;
                        })(e166, s) ? 0 : e166 >= 131072 && e166 <= 196605 || e166 >= 196608 && e166 <= 262141 ? 2 : 1;
                    }, e165;
                }();
                t115.UnicodeV6 = a;
            },
            5981: (e167, t116)=>{
                Object.defineProperty(t116, "__esModule", {
                    value: !0
                }), t116.WriteBuffer = void 0;
                var r64 = "undefined" == typeof queueMicrotask ? function(e) {
                    Promise.resolve().then(e);
                } : queueMicrotask, i45 = function() {
                    function e168(e) {
                        this._action = e, this._writeBuffer = [], this._callbacks = [], this._pendingData = 0, this._bufferOffset = 0, this._isSyncWriting = !1, this._syncCalls = 0;
                    }
                    return e168.prototype.writeSync = function(e, t) {
                        if (void 0 !== t && this._syncCalls > t) this._syncCalls = 0;
                        else if (this._pendingData += e.length, this._writeBuffer.push(e), this._callbacks.push(void 0), this._syncCalls++, !this._isSyncWriting) {
                            var r;
                            for(this._isSyncWriting = !0; r = this._writeBuffer.shift();){
                                this._action(r);
                                var i = this._callbacks.shift();
                                i && i();
                            }
                            this._pendingData = 0, this._bufferOffset = 2147483647, this._isSyncWriting = !1, this._syncCalls = 0;
                        }
                    }, e168.prototype.write = function(e, t) {
                        var r = this;
                        if (this._pendingData > 50000000) throw new Error("write data discarded, use flow control to avoid losing data");
                        this._writeBuffer.length || (this._bufferOffset = 0, setTimeout(function() {
                            return r._innerWrite();
                        })), this._pendingData += e.length, this._writeBuffer.push(e), this._callbacks.push(t);
                    }, e168.prototype._innerWrite = function(e169, t) {
                        var i = this;
                        void 0 === e169 && (e169 = 0), void 0 === t && (t = !0);
                        for(var n = e169 || Date.now(); this._writeBuffer.length > this._bufferOffset;){
                            var o = this._writeBuffer[this._bufferOffset], s = this._action(o, t);
                            if (s) return void s.catch(function(e) {
                                return r64(function() {
                                    throw e;
                                }), Promise.resolve(!1);
                            }).then(function(e) {
                                return Date.now() - n >= 12 ? setTimeout(function() {
                                    return i._innerWrite(0, e);
                                }) : i._innerWrite(n, e);
                            });
                            var a = this._callbacks[this._bufferOffset];
                            if (a && a(), this._bufferOffset++, this._pendingData -= o.length, Date.now() - n >= 12) break;
                        }
                        this._writeBuffer.length > this._bufferOffset ? (this._bufferOffset > 50 && (this._writeBuffer = this._writeBuffer.slice(this._bufferOffset), this._callbacks = this._callbacks.slice(this._bufferOffset), this._bufferOffset = 0), setTimeout(function() {
                            return i._innerWrite();
                        })) : (this._writeBuffer.length = 0, this._callbacks.length = 0, this._pendingData = 0, this._bufferOffset = 0);
                    }, e168;
                }();
                t116.WriteBuffer = i45;
            },
            5941: (e170, t117)=>{
                Object.defineProperty(t117, "__esModule", {
                    value: !0
                }), t117.toRgbString = t117.parseColor = void 0;
                var r65 = /^([\da-f]{1})\/([\da-f]{1})\/([\da-f]{1})$|^([\da-f]{2})\/([\da-f]{2})\/([\da-f]{2})$|^([\da-f]{3})\/([\da-f]{3})\/([\da-f]{3})$|^([\da-f]{4})\/([\da-f]{4})\/([\da-f]{4})$/, i46 = /^[\da-f]+$/;
                function n38(e, t) {
                    var r = e.toString(16), i = r.length < 2 ? "0" + r : r;
                    switch(t){
                        case 4:
                            return r[0];
                        case 8:
                            return i;
                        case 12:
                            return (i + i).slice(0, 3);
                        default:
                            return i + i;
                    }
                }
                t117.parseColor = function(e) {
                    if (e) {
                        var t = e.toLowerCase();
                        if (0 === t.indexOf("rgb:")) {
                            t = t.slice(4);
                            var n = r65.exec(t);
                            if (n) {
                                var o = n[1] ? 15 : n[4] ? 255 : n[7] ? 4095 : 65535;
                                return [
                                    Math.round(parseInt(n[1] || n[4] || n[7] || n[10], 16) / o * 255),
                                    Math.round(parseInt(n[2] || n[5] || n[8] || n[11], 16) / o * 255),
                                    Math.round(parseInt(n[3] || n[6] || n[9] || n[12], 16) / o * 255)
                                ];
                            }
                        } else if (0 === t.indexOf("#") && (t = t.slice(1), i46.exec(t) && [
                            3,
                            6,
                            9,
                            12
                        ].includes(t.length))) {
                            for(var s = t.length / 3, a = [
                                0,
                                0,
                                0
                            ], c = 0; c < 3; ++c){
                                var l = parseInt(t.slice(s * c, s * c + s), 16);
                                a[c] = 1 === s ? l << 4 : 2 === s ? l : 3 === s ? l >> 4 : l >> 8;
                            }
                            return a;
                        }
                    }
                }, t117.toRgbString = function(e, t) {
                    void 0 === t && (t = 16);
                    var r = e[0], i = e[1], o = e[2];
                    return "rgb:" + n38(r, t) + "/" + n38(i, t) + "/" + n38(o, t);
                };
            },
            5770: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.PAYLOAD_LIMIT = void 0, t.PAYLOAD_LIMIT = 10000000;
            },
            6351: (e171, t118, r66)=>{
                Object.defineProperty(t118, "__esModule", {
                    value: !0
                }), t118.DcsHandler = t118.DcsParser = void 0;
                var i47 = r66(482), n39 = r66(8742), o = r66(5770), s = [], a = function() {
                    function e172() {
                        this._handlers = Object.create(null), this._active = s, this._ident = 0, this._handlerFb = function() {
                        }, this._stack = {
                            paused: !1,
                            loopPosition: 0,
                            fallThrough: !1
                        };
                    }
                    return e172.prototype.dispose = function() {
                        this._handlers = Object.create(null), this._handlerFb = function() {
                        }, this._active = s;
                    }, e172.prototype.registerHandler = function(e173, t) {
                        void 0 === this._handlers[e173] && (this._handlers[e173] = []);
                        var r = this._handlers[e173];
                        return r.push(t), {
                            dispose: function() {
                                var e = r.indexOf(t);
                                -1 !== e && r.splice(e, 1);
                            }
                        };
                    }, e172.prototype.clearHandler = function(e) {
                        this._handlers[e] && delete this._handlers[e];
                    }, e172.prototype.setHandlerFallback = function(e) {
                        this._handlerFb = e;
                    }, e172.prototype.reset = function() {
                        if (this._active.length) for(var e = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; e >= 0; --e)this._active[e].unhook(!1);
                        this._stack.paused = !1, this._active = s, this._ident = 0;
                    }, e172.prototype.hook = function(e, t) {
                        if (this.reset(), this._ident = e, this._active = this._handlers[e] || s, this._active.length) for(var r = this._active.length - 1; r >= 0; r--)this._active[r].hook(t);
                        else this._handlerFb(this._ident, "HOOK", t);
                    }, e172.prototype.put = function(e, t, r) {
                        if (this._active.length) for(var n = this._active.length - 1; n >= 0; n--)this._active[n].put(e, t, r);
                        else this._handlerFb(this._ident, "PUT", (0, i47.utf32ToString)(e, t, r));
                    }, e172.prototype.unhook = function(e, t) {
                        if (void 0 === t && (t = !0), this._active.length) {
                            var r = !1, i = this._active.length - 1, n = !1;
                            if (this._stack.paused && (i = this._stack.loopPosition - 1, r = t, n = this._stack.fallThrough, this._stack.paused = !1), !n && !1 === r) {
                                for(; i >= 0 && !0 !== (r = this._active[i].unhook(e)); i--)if (r instanceof Promise) return this._stack.paused = !0, this._stack.loopPosition = i, this._stack.fallThrough = !1, r;
                                i--;
                            }
                            for(; i >= 0; i--)if ((r = this._active[i].unhook(!1)) instanceof Promise) return this._stack.paused = !0, this._stack.loopPosition = i, this._stack.fallThrough = !0, r;
                        } else this._handlerFb(this._ident, "UNHOOK", e);
                        this._active = s, this._ident = 0;
                    }, e172;
                }();
                t118.DcsParser = a;
                var c = new n39.Params;
                c.addParam(0);
                var l = function() {
                    function e174(e) {
                        this._handler = e, this._data = "", this._params = c, this._hitLimit = !1;
                    }
                    return e174.prototype.hook = function(e) {
                        this._params = e.length > 1 || e.params[0] ? e.clone() : c, this._data = "", this._hitLimit = !1;
                    }, e174.prototype.put = function(e, t, r) {
                        this._hitLimit || (this._data += (0, i47.utf32ToString)(e, t, r), this._data.length > o.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = !0));
                    }, e174.prototype.unhook = function(e175) {
                        var t = this, r = !1;
                        if (this._hitLimit) r = !1;
                        else if (e175 && (r = this._handler(this._data, this._params)) instanceof Promise) return r.then(function(e) {
                            return t._params = c, t._data = "", t._hitLimit = !1, e;
                        });
                        return this._params = c, this._data = "", this._hitLimit = !1, r;
                    }, e174;
                }();
                t118.DcsHandler = l;
            },
            2015: function(e176, t119, r67) {
                var i48, n40 = this && this.__extends || (i48 = function(e177, t120) {
                    return i48 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i48(e177, t120);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i48(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                });
                Object.defineProperty(t119, "__esModule", {
                    value: !0
                }), t119.EscapeSequenceParser = t119.VT500_TRANSITION_TABLE = t119.TransitionTable = void 0;
                var o33 = r67(844), s35 = r67(8273), a32 = r67(8742), c18 = r67(6242), l20 = r67(6351), h16 = function() {
                    function e178(e) {
                        this.table = new Uint8Array(e);
                    }
                    return e178.prototype.setDefault = function(e, t) {
                        (0, s35.fill)(this.table, e << 4 | t);
                    }, e178.prototype.add = function(e, t, r, i) {
                        this.table[t << 8 | e] = r << 4 | i;
                    }, e178.prototype.addMany = function(e, t, r, i) {
                        for(var n = 0; n < e.length; n++)this.table[t << 8 | e[n]] = r << 4 | i;
                    }, e178;
                }();
                t119.TransitionTable = h16;
                var u = 160;
                t119.VT500_TRANSITION_TABLE = (function() {
                    var e179 = new h16(4095), t121 = Array.apply(null, Array(256)).map(function(e, t) {
                        return t;
                    }), r68 = function(e, r) {
                        return t121.slice(e, r);
                    }, i = r68(32, 127), n = r68(0, 24);
                    n.push(25), n.push.apply(n, r68(28, 32));
                    var o, s = r68(0, 14);
                    for(o in e179.setDefault(1, 0), e179.addMany(i, 0, 2, 0), s)e179.addMany([
                        24,
                        26,
                        153,
                        154
                    ], o, 3, 0), e179.addMany(r68(128, 144), o, 3, 0), e179.addMany(r68(144, 152), o, 3, 0), e179.add(156, o, 0, 0), e179.add(27, o, 11, 1), e179.add(157, o, 4, 8), e179.addMany([
                        152,
                        158,
                        159
                    ], o, 0, 7), e179.add(155, o, 11, 3), e179.add(144, o, 11, 9);
                    return e179.addMany(n, 0, 3, 0), e179.addMany(n, 1, 3, 1), e179.add(127, 1, 0, 1), e179.addMany(n, 8, 0, 8), e179.addMany(n, 3, 3, 3), e179.add(127, 3, 0, 3), e179.addMany(n, 4, 3, 4), e179.add(127, 4, 0, 4), e179.addMany(n, 6, 3, 6), e179.addMany(n, 5, 3, 5), e179.add(127, 5, 0, 5), e179.addMany(n, 2, 3, 2), e179.add(127, 2, 0, 2), e179.add(93, 1, 4, 8), e179.addMany(i, 8, 5, 8), e179.add(127, 8, 5, 8), e179.addMany([
                        156,
                        27,
                        24,
                        26,
                        7
                    ], 8, 6, 0), e179.addMany(r68(28, 32), 8, 0, 8), e179.addMany([
                        88,
                        94,
                        95
                    ], 1, 0, 7), e179.addMany(i, 7, 0, 7), e179.addMany(n, 7, 0, 7), e179.add(156, 7, 0, 0), e179.add(127, 7, 0, 7), e179.add(91, 1, 11, 3), e179.addMany(r68(64, 127), 3, 7, 0), e179.addMany(r68(48, 60), 3, 8, 4), e179.addMany([
                        60,
                        61,
                        62,
                        63
                    ], 3, 9, 4), e179.addMany(r68(48, 60), 4, 8, 4), e179.addMany(r68(64, 127), 4, 7, 0), e179.addMany([
                        60,
                        61,
                        62,
                        63
                    ], 4, 0, 6), e179.addMany(r68(32, 64), 6, 0, 6), e179.add(127, 6, 0, 6), e179.addMany(r68(64, 127), 6, 0, 0), e179.addMany(r68(32, 48), 3, 9, 5), e179.addMany(r68(32, 48), 5, 9, 5), e179.addMany(r68(48, 64), 5, 0, 6), e179.addMany(r68(64, 127), 5, 7, 0), e179.addMany(r68(32, 48), 4, 9, 5), e179.addMany(r68(32, 48), 1, 9, 2), e179.addMany(r68(32, 48), 2, 9, 2), e179.addMany(r68(48, 127), 2, 10, 0), e179.addMany(r68(48, 80), 1, 10, 0), e179.addMany(r68(81, 88), 1, 10, 0), e179.addMany([
                        89,
                        90,
                        92
                    ], 1, 10, 0), e179.addMany(r68(96, 127), 1, 10, 0), e179.add(80, 1, 11, 9), e179.addMany(n, 9, 0, 9), e179.add(127, 9, 0, 9), e179.addMany(r68(28, 32), 9, 0, 9), e179.addMany(r68(32, 48), 9, 9, 12), e179.addMany(r68(48, 60), 9, 8, 10), e179.addMany([
                        60,
                        61,
                        62,
                        63
                    ], 9, 9, 10), e179.addMany(n, 11, 0, 11), e179.addMany(r68(32, 128), 11, 0, 11), e179.addMany(r68(28, 32), 11, 0, 11), e179.addMany(n, 10, 0, 10), e179.add(127, 10, 0, 10), e179.addMany(r68(28, 32), 10, 0, 10), e179.addMany(r68(48, 60), 10, 8, 10), e179.addMany([
                        60,
                        61,
                        62,
                        63
                    ], 10, 0, 11), e179.addMany(r68(32, 48), 10, 9, 12), e179.addMany(n, 12, 0, 12), e179.add(127, 12, 0, 12), e179.addMany(r68(28, 32), 12, 0, 12), e179.addMany(r68(32, 48), 12, 9, 12), e179.addMany(r68(48, 64), 12, 0, 11), e179.addMany(r68(64, 127), 12, 12, 13), e179.addMany(r68(64, 127), 10, 12, 13), e179.addMany(r68(64, 127), 9, 12, 13), e179.addMany(n, 13, 13, 13), e179.addMany(i, 13, 13, 13), e179.add(127, 13, 0, 13), e179.addMany([
                        27,
                        156,
                        24,
                        26
                    ], 13, 14, 0), e179.add(u, 0, 2, 0), e179.add(u, 8, 5, 8), e179.add(u, 6, 0, 6), e179.add(u, 11, 0, 11), e179.add(u, 13, 13, 13), e179;
                })();
                var f12 = function(e180) {
                    function r69(r) {
                        void 0 === r && (r = t119.VT500_TRANSITION_TABLE);
                        var i = e180.call(this) || this;
                        return i._transitions = r, i._parseStack = {
                            state: 0,
                            handlers: [],
                            handlerPos: 0,
                            transition: 0,
                            chunkPos: 0
                        }, i.initialState = 0, i.currentState = i.initialState, i._params = new a32.Params, i._params.addParam(0), i._collect = 0, i.precedingCodepoint = 0, i._printHandlerFb = function(e, t, r) {
                        }, i._executeHandlerFb = function(e) {
                        }, i._csiHandlerFb = function(e, t) {
                        }, i._escHandlerFb = function(e) {
                        }, i._errorHandlerFb = function(e) {
                            return e;
                        }, i._printHandler = i._printHandlerFb, i._executeHandlers = Object.create(null), i._csiHandlers = Object.create(null), i._escHandlers = Object.create(null), i._oscParser = new c18.OscParser, i._dcsParser = new l20.DcsParser, i._errorHandler = i._errorHandlerFb, i.registerEscHandler({
                            final: "\\"
                        }, function() {
                            return !0;
                        }), i;
                    }
                    return n40(r69, e180), r69.prototype._identifier = function(e, t) {
                        void 0 === t && (t = [
                            64,
                            126
                        ]);
                        var r = 0;
                        if (e.prefix) {
                            if (e.prefix.length > 1) throw new Error("only one byte as prefix supported");
                            if ((r = e.prefix.charCodeAt(0)) && 60 > r || r > 63) throw new Error("prefix must be in range 0x3c .. 0x3f");
                        }
                        if (e.intermediates) {
                            if (e.intermediates.length > 2) throw new Error("only two bytes as intermediates are supported");
                            for(var i = 0; i < e.intermediates.length; ++i){
                                var n = e.intermediates.charCodeAt(i);
                                if (32 > n || n > 47) throw new Error("intermediate must be in range 0x20 .. 0x2f");
                                r <<= 8, r |= n;
                            }
                        }
                        if (1 !== e.final.length) throw new Error("final must be a single byte");
                        var o = e.final.charCodeAt(0);
                        if (t[0] > o || o > t[1]) throw new Error("final must be in range " + t[0] + " .. " + t[1]);
                        return (r <<= 8) | o;
                    }, r69.prototype.identToString = function(e) {
                        for(var t = []; e;)t.push(String.fromCharCode(255 & e)), e >>= 8;
                        return t.reverse().join("");
                    }, r69.prototype.dispose = function() {
                        this._csiHandlers = Object.create(null), this._executeHandlers = Object.create(null), this._escHandlers = Object.create(null), this._oscParser.dispose(), this._dcsParser.dispose();
                    }, r69.prototype.setPrintHandler = function(e) {
                        this._printHandler = e;
                    }, r69.prototype.clearPrintHandler = function() {
                        this._printHandler = this._printHandlerFb;
                    }, r69.prototype.registerEscHandler = function(e181, t) {
                        var r = this._identifier(e181, [
                            48,
                            126
                        ]);
                        void 0 === this._escHandlers[r] && (this._escHandlers[r] = []);
                        var i = this._escHandlers[r];
                        return i.push(t), {
                            dispose: function() {
                                var e = i.indexOf(t);
                                -1 !== e && i.splice(e, 1);
                            }
                        };
                    }, r69.prototype.clearEscHandler = function(e) {
                        this._escHandlers[this._identifier(e, [
                            48,
                            126
                        ])] && delete this._escHandlers[this._identifier(e, [
                            48,
                            126
                        ])];
                    }, r69.prototype.setEscHandlerFallback = function(e) {
                        this._escHandlerFb = e;
                    }, r69.prototype.setExecuteHandler = function(e, t) {
                        this._executeHandlers[e.charCodeAt(0)] = t;
                    }, r69.prototype.clearExecuteHandler = function(e) {
                        this._executeHandlers[e.charCodeAt(0)] && delete this._executeHandlers[e.charCodeAt(0)];
                    }, r69.prototype.setExecuteHandlerFallback = function(e) {
                        this._executeHandlerFb = e;
                    }, r69.prototype.registerCsiHandler = function(e182, t) {
                        var r = this._identifier(e182);
                        void 0 === this._csiHandlers[r] && (this._csiHandlers[r] = []);
                        var i = this._csiHandlers[r];
                        return i.push(t), {
                            dispose: function() {
                                var e = i.indexOf(t);
                                -1 !== e && i.splice(e, 1);
                            }
                        };
                    }, r69.prototype.clearCsiHandler = function(e) {
                        this._csiHandlers[this._identifier(e)] && delete this._csiHandlers[this._identifier(e)];
                    }, r69.prototype.setCsiHandlerFallback = function(e) {
                        this._csiHandlerFb = e;
                    }, r69.prototype.registerDcsHandler = function(e, t) {
                        return this._dcsParser.registerHandler(this._identifier(e), t);
                    }, r69.prototype.clearDcsHandler = function(e) {
                        this._dcsParser.clearHandler(this._identifier(e));
                    }, r69.prototype.setDcsHandlerFallback = function(e) {
                        this._dcsParser.setHandlerFallback(e);
                    }, r69.prototype.registerOscHandler = function(e, t) {
                        return this._oscParser.registerHandler(e, t);
                    }, r69.prototype.clearOscHandler = function(e) {
                        this._oscParser.clearHandler(e);
                    }, r69.prototype.setOscHandlerFallback = function(e) {
                        this._oscParser.setHandlerFallback(e);
                    }, r69.prototype.setErrorHandler = function(e) {
                        this._errorHandler = e;
                    }, r69.prototype.clearErrorHandler = function() {
                        this._errorHandler = this._errorHandlerFb;
                    }, r69.prototype.reset = function() {
                        this.currentState = this.initialState, this._oscParser.reset(), this._dcsParser.reset(), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingCodepoint = 0, 0 !== this._parseStack.state && (this._parseStack.state = 2, this._parseStack.handlers = []);
                    }, r69.prototype._preserveStack = function(e, t, r, i, n) {
                        this._parseStack.state = e, this._parseStack.handlers = t, this._parseStack.handlerPos = r, this._parseStack.transition = i, this._parseStack.chunkPos = n;
                    }, r69.prototype.parse = function(e, t, r) {
                        var i, n = 0, o = 0, s = 0;
                        if (this._parseStack.state) {
                            if (2 === this._parseStack.state) this._parseStack.state = 0, s = this._parseStack.chunkPos + 1;
                            else {
                                if (void 0 === r || 1 === this._parseStack.state) throw this._parseStack.state = 1, new Error("improper continuation due to previous async handler, giving up parsing");
                                var a = this._parseStack.handlers, c = this._parseStack.handlerPos - 1;
                                switch(this._parseStack.state){
                                    case 3:
                                        if (!1 === r && c > -1) {
                                            for(; c >= 0 && !0 !== (i = a[c](this._params)); c--)if (i instanceof Promise) return this._parseStack.handlerPos = c, i;
                                        }
                                        this._parseStack.handlers = [];
                                        break;
                                    case 4:
                                        if (!1 === r && c > -1) {
                                            for(; c >= 0 && !0 !== (i = a[c]()); c--)if (i instanceof Promise) return this._parseStack.handlerPos = c, i;
                                        }
                                        this._parseStack.handlers = [];
                                        break;
                                    case 6:
                                        if (n = e[this._parseStack.chunkPos], i = this._dcsParser.unhook(24 !== n && 26 !== n, r)) return i;
                                        27 === n && (this._parseStack.transition |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0;
                                        break;
                                    case 5:
                                        if (n = e[this._parseStack.chunkPos], i = this._oscParser.end(24 !== n && 26 !== n, r)) return i;
                                        27 === n && (this._parseStack.transition |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0;
                                }
                                this._parseStack.state = 0, s = this._parseStack.chunkPos + 1, this.precedingCodepoint = 0, this.currentState = 15 & this._parseStack.transition;
                            }
                        }
                        for(var l = s; l < t; ++l){
                            switch(n = e[l], (o = this._transitions.table[this.currentState << 8 | (n < 160 ? n : u)]) >> 4){
                                case 2:
                                    for(var h = l + 1;; ++h){
                                        if (h >= t || (n = e[h]) < 32 || n > 126 && n < u) {
                                            this._printHandler(e, l, h), l = h - 1;
                                            break;
                                        }
                                        if (++h >= t || (n = e[h]) < 32 || n > 126 && n < u) {
                                            this._printHandler(e, l, h), l = h - 1;
                                            break;
                                        }
                                        if (++h >= t || (n = e[h]) < 32 || n > 126 && n < u) {
                                            this._printHandler(e, l, h), l = h - 1;
                                            break;
                                        }
                                        if (++h >= t || (n = e[h]) < 32 || n > 126 && n < u) {
                                            this._printHandler(e, l, h), l = h - 1;
                                            break;
                                        }
                                    }
                                    break;
                                case 3:
                                    this._executeHandlers[n] ? this._executeHandlers[n]() : this._executeHandlerFb(n), this.precedingCodepoint = 0;
                                    break;
                                case 0:
                                    break;
                                case 1:
                                    if (this._errorHandler({
                                        position: l,
                                        code: n,
                                        currentState: this.currentState,
                                        collect: this._collect,
                                        params: this._params,
                                        abort: !1
                                    }).abort) return;
                                    break;
                                case 7:
                                    for(var f = (a = this._csiHandlers[this._collect << 8 | n]) ? a.length - 1 : -1; f >= 0 && !0 !== (i = a[f](this._params)); f--)if (i instanceof Promise) return this._preserveStack(3, a, f, o, l), i;
                                    f < 0 && this._csiHandlerFb(this._collect << 8 | n, this._params), this.precedingCodepoint = 0;
                                    break;
                                case 8:
                                    do switch(n){
                                        case 59:
                                            this._params.addParam(0);
                                            break;
                                        case 58:
                                            this._params.addSubParam(-1);
                                            break;
                                        default:
                                            this._params.addDigit(n - 48);
                                    }
                                    while (++l < t && (n = e[l]) > 47 && n < 60)
                                    l--;
                                    break;
                                case 9:
                                    this._collect <<= 8, this._collect |= n;
                                    break;
                                case 10:
                                    for(var _ = this._escHandlers[this._collect << 8 | n], d = _ ? _.length - 1 : -1; d >= 0 && !0 !== (i = _[d]()); d--)if (i instanceof Promise) return this._preserveStack(4, _, d, o, l), i;
                                    d < 0 && this._escHandlerFb(this._collect << 8 | n), this.precedingCodepoint = 0;
                                    break;
                                case 11:
                                    this._params.reset(), this._params.addParam(0), this._collect = 0;
                                    break;
                                case 12:
                                    this._dcsParser.hook(this._collect << 8 | n, this._params);
                                    break;
                                case 13:
                                    for(var p = l + 1;; ++p)if (p >= t || 24 === (n = e[p]) || 26 === n || 27 === n || n > 127 && n < u) {
                                        this._dcsParser.put(e, l, p), l = p - 1;
                                        break;
                                    }
                                    break;
                                case 14:
                                    if (i = this._dcsParser.unhook(24 !== n && 26 !== n)) return this._preserveStack(6, [], 0, o, l), i;
                                    27 === n && (o |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingCodepoint = 0;
                                    break;
                                case 4:
                                    this._oscParser.start();
                                    break;
                                case 5:
                                    for(var v = l + 1;; v++)if (v >= t || (n = e[v]) < 32 || n > 127 && n < u) {
                                        this._oscParser.put(e, l, v), l = v - 1;
                                        break;
                                    }
                                    break;
                                case 6:
                                    if (i = this._oscParser.end(24 !== n && 26 !== n)) return this._preserveStack(5, [], 0, o, l), i;
                                    27 === n && (o |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingCodepoint = 0;
                            }
                            this.currentState = 15 & o;
                        }
                    }, r69;
                }(o33.Disposable);
                t119.EscapeSequenceParser = f12;
            },
            6242: (e183, t122, r70)=>{
                Object.defineProperty(t122, "__esModule", {
                    value: !0
                }), t122.OscHandler = t122.OscParser = void 0;
                var i49 = r70(5770), n41 = r70(482), o = [], s = function() {
                    function e184() {
                        this._state = 0, this._active = o, this._id = -1, this._handlers = Object.create(null), this._handlerFb = function() {
                        }, this._stack = {
                            paused: !1,
                            loopPosition: 0,
                            fallThrough: !1
                        };
                    }
                    return e184.prototype.registerHandler = function(e185, t) {
                        void 0 === this._handlers[e185] && (this._handlers[e185] = []);
                        var r = this._handlers[e185];
                        return r.push(t), {
                            dispose: function() {
                                var e = r.indexOf(t);
                                -1 !== e && r.splice(e, 1);
                            }
                        };
                    }, e184.prototype.clearHandler = function(e) {
                        this._handlers[e] && delete this._handlers[e];
                    }, e184.prototype.setHandlerFallback = function(e) {
                        this._handlerFb = e;
                    }, e184.prototype.dispose = function() {
                        this._handlers = Object.create(null), this._handlerFb = function() {
                        }, this._active = o;
                    }, e184.prototype.reset = function() {
                        if (2 === this._state) for(var e = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; e >= 0; --e)this._active[e].end(!1);
                        this._stack.paused = !1, this._active = o, this._id = -1, this._state = 0;
                    }, e184.prototype._start = function() {
                        if (this._active = this._handlers[this._id] || o, this._active.length) for(var e = this._active.length - 1; e >= 0; e--)this._active[e].start();
                        else this._handlerFb(this._id, "START");
                    }, e184.prototype._put = function(e, t, r) {
                        if (this._active.length) for(var i = this._active.length - 1; i >= 0; i--)this._active[i].put(e, t, r);
                        else this._handlerFb(this._id, "PUT", (0, n41.utf32ToString)(e, t, r));
                    }, e184.prototype.start = function() {
                        this.reset(), this._state = 1;
                    }, e184.prototype.put = function(e, t, r) {
                        if (3 !== this._state) {
                            if (1 === this._state) for(; t < r;){
                                var i = e[t++];
                                if (59 === i) {
                                    this._state = 2, this._start();
                                    break;
                                }
                                if (i < 48 || 57 < i) return void (this._state = 3);
                                -1 === this._id && (this._id = 0), this._id = 10 * this._id + i - 48;
                            }
                            2 === this._state && r - t > 0 && this._put(e, t, r);
                        }
                    }, e184.prototype.end = function(e, t) {
                        if (void 0 === t && (t = !0), 0 !== this._state) {
                            if (3 !== this._state) {
                                if (1 === this._state && this._start(), this._active.length) {
                                    var r = !1, i = this._active.length - 1, n = !1;
                                    if (this._stack.paused && (i = this._stack.loopPosition - 1, r = t, n = this._stack.fallThrough, this._stack.paused = !1), !n && !1 === r) {
                                        for(; i >= 0 && !0 !== (r = this._active[i].end(e)); i--)if (r instanceof Promise) return this._stack.paused = !0, this._stack.loopPosition = i, this._stack.fallThrough = !1, r;
                                        i--;
                                    }
                                    for(; i >= 0; i--)if ((r = this._active[i].end(!1)) instanceof Promise) return this._stack.paused = !0, this._stack.loopPosition = i, this._stack.fallThrough = !0, r;
                                } else this._handlerFb(this._id, "END", e);
                            }
                            this._active = o, this._id = -1, this._state = 0;
                        }
                    }, e184;
                }();
                t122.OscParser = s;
                var a = function() {
                    function e186(e) {
                        this._handler = e, this._data = "", this._hitLimit = !1;
                    }
                    return e186.prototype.start = function() {
                        this._data = "", this._hitLimit = !1;
                    }, e186.prototype.put = function(e, t, r) {
                        this._hitLimit || (this._data += (0, n41.utf32ToString)(e, t, r), this._data.length > i49.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = !0));
                    }, e186.prototype.end = function(e187) {
                        var t = this, r = !1;
                        if (this._hitLimit) r = !1;
                        else if (e187 && (r = this._handler(this._data)) instanceof Promise) return r.then(function(e) {
                            return t._data = "", t._hitLimit = !1, e;
                        });
                        return this._data = "", this._hitLimit = !1, r;
                    }, e186;
                }();
                t122.OscHandler = a;
            },
            8742: (e188, t123)=>{
                Object.defineProperty(t123, "__esModule", {
                    value: !0
                }), t123.Params = void 0;
                var r71 = 2147483647, i50 = function() {
                    function e189(e, t) {
                        if (void 0 === e && (e = 32), void 0 === t && (t = 32), this.maxLength = e, this.maxSubParamsLength = t, t > 256) throw new Error("maxSubParamsLength must not be greater than 256");
                        this.params = new Int32Array(e), this.length = 0, this._subParams = new Int32Array(t), this._subParamsLength = 0, this._subParamsIdx = new Uint16Array(e), this._rejectDigits = !1, this._rejectSubDigits = !1, this._digitIsSub = !1;
                    }
                    return e189.fromArray = function(t) {
                        var r = new e189;
                        if (!t.length) return r;
                        for(var i = Array.isArray(t[0]) ? 1 : 0; i < t.length; ++i){
                            var n = t[i];
                            if (Array.isArray(n)) for(var o = 0; o < n.length; ++o)r.addSubParam(n[o]);
                            else r.addParam(n);
                        }
                        return r;
                    }, e189.prototype.clone = function() {
                        var t = new e189(this.maxLength, this.maxSubParamsLength);
                        return t.params.set(this.params), t.length = this.length, t._subParams.set(this._subParams), t._subParamsLength = this._subParamsLength, t._subParamsIdx.set(this._subParamsIdx), t._rejectDigits = this._rejectDigits, t._rejectSubDigits = this._rejectSubDigits, t._digitIsSub = this._digitIsSub, t;
                    }, e189.prototype.toArray = function() {
                        for(var e = [], t = 0; t < this.length; ++t){
                            e.push(this.params[t]);
                            var r = this._subParamsIdx[t] >> 8, i = 255 & this._subParamsIdx[t];
                            i - r > 0 && e.push(Array.prototype.slice.call(this._subParams, r, i));
                        }
                        return e;
                    }, e189.prototype.reset = function() {
                        this.length = 0, this._subParamsLength = 0, this._rejectDigits = !1, this._rejectSubDigits = !1, this._digitIsSub = !1;
                    }, e189.prototype.addParam = function(e) {
                        if (this._digitIsSub = !1, this.length >= this.maxLength) this._rejectDigits = !0;
                        else {
                            if (e < -1) throw new Error("values lesser than -1 are not allowed");
                            this._subParamsIdx[this.length] = this._subParamsLength << 8 | this._subParamsLength, this.params[this.length++] = e > r71 ? r71 : e;
                        }
                    }, e189.prototype.addSubParam = function(e) {
                        if (this._digitIsSub = !0, this.length) {
                            if (this._rejectDigits || this._subParamsLength >= this.maxSubParamsLength) this._rejectSubDigits = !0;
                            else {
                                if (e < -1) throw new Error("values lesser than -1 are not allowed");
                                this._subParams[this._subParamsLength++] = e > r71 ? r71 : e, this._subParamsIdx[this.length - 1]++;
                            }
                        }
                    }, e189.prototype.hasSubParams = function(e) {
                        return (255 & this._subParamsIdx[e]) - (this._subParamsIdx[e] >> 8) > 0;
                    }, e189.prototype.getSubParams = function(e) {
                        var t = this._subParamsIdx[e] >> 8, r = 255 & this._subParamsIdx[e];
                        return r - t > 0 ? this._subParams.subarray(t, r) : null;
                    }, e189.prototype.getSubParamsAll = function() {
                        for(var e = {
                        }, t = 0; t < this.length; ++t){
                            var r = this._subParamsIdx[t] >> 8, i = 255 & this._subParamsIdx[t];
                            i - r > 0 && (e[t] = this._subParams.slice(r, i));
                        }
                        return e;
                    }, e189.prototype.addDigit = function(e) {
                        var t;
                        if (!(this._rejectDigits || !(t = this._digitIsSub ? this._subParamsLength : this.length) || this._digitIsSub && this._rejectSubDigits)) {
                            var i = this._digitIsSub ? this._subParams : this.params, n = i[t - 1];
                            i[t - 1] = ~n ? Math.min(10 * n + e, r71) : e;
                        }
                    }, e189;
                }();
                t123.Params = i50;
            },
            5741: (e190, t124)=>{
                Object.defineProperty(t124, "__esModule", {
                    value: !0
                }), t124.AddonManager = void 0;
                var r72 = function() {
                    function e191() {
                        this._addons = [];
                    }
                    return e191.prototype.dispose = function() {
                        for(var e = this._addons.length - 1; e >= 0; e--)this._addons[e].instance.dispose();
                    }, e191.prototype.loadAddon = function(e, t) {
                        var r = this, i = {
                            instance: t,
                            dispose: t.dispose,
                            isDisposed: !1
                        };
                        this._addons.push(i), t.dispose = function() {
                            return r._wrappedAddonDispose(i);
                        }, t.activate(e);
                    }, e191.prototype._wrappedAddonDispose = function(e) {
                        if (!e.isDisposed) {
                            for(var t = -1, r = 0; r < this._addons.length; r++)if (this._addons[r] === e) {
                                t = r;
                                break;
                            }
                            if (-1 === t) throw new Error("Could not dispose an addon that has not been loaded");
                            e.isDisposed = !0, e.dispose.apply(e.instance), this._addons.splice(t, 1);
                        }
                    }, e191;
                }();
                t124.AddonManager = r72;
            },
            8771: (e192, t125, r)=>{
                Object.defineProperty(t125, "__esModule", {
                    value: !0
                }), t125.BufferApiView = void 0;
                var i = r(3785), n = r(511), o = function() {
                    function e193(e, t) {
                        this._buffer = e, this.type = t;
                    }
                    return e193.prototype.init = function(e) {
                        return this._buffer = e, this;
                    }, Object.defineProperty(e193.prototype, "cursorY", {
                        get: function() {
                            return this._buffer.y;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e193.prototype, "cursorX", {
                        get: function() {
                            return this._buffer.x;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e193.prototype, "viewportY", {
                        get: function() {
                            return this._buffer.ydisp;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e193.prototype, "baseY", {
                        get: function() {
                            return this._buffer.ybase;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e193.prototype, "length", {
                        get: function() {
                            return this._buffer.lines.length;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e193.prototype.getLine = function(e) {
                        var t = this._buffer.lines.get(e);
                        if (t) return new i.BufferLineApiView(t);
                    }, e193.prototype.getNullCell = function() {
                        return new n.CellData;
                    }, e193;
                }();
                t125.BufferApiView = o;
            },
            3785: (e194, t126, r73)=>{
                Object.defineProperty(t126, "__esModule", {
                    value: !0
                }), t126.BufferLineApiView = void 0;
                var i = r73(511), n = function() {
                    function e195(e) {
                        this._line = e;
                    }
                    return Object.defineProperty(e195.prototype, "isWrapped", {
                        get: function() {
                            return this._line.isWrapped;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e195.prototype, "length", {
                        get: function() {
                            return this._line.length;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e195.prototype.getCell = function(e, t) {
                        if (!(e < 0 || e >= this._line.length)) return t ? (this._line.loadCell(e, t), t) : this._line.loadCell(e, new i.CellData);
                    }, e195.prototype.translateToString = function(e, t, r) {
                        return this._line.translateToString(e, t, r);
                    }, e195;
                }();
                t126.BufferLineApiView = n;
            },
            8285: (e196, t127, r)=>{
                Object.defineProperty(t127, "__esModule", {
                    value: !0
                }), t127.BufferNamespaceApi = void 0;
                var i = r(8771), n = r(8460), o = function() {
                    function e197(e) {
                        var t = this;
                        this._core = e, this._onBufferChange = new n.EventEmitter, this._normal = new i.BufferApiView(this._core.buffers.normal, "normal"), this._alternate = new i.BufferApiView(this._core.buffers.alt, "alternate"), this._core.buffers.onBufferActivate(function() {
                            return t._onBufferChange.fire(t.active);
                        });
                    }
                    return Object.defineProperty(e197.prototype, "onBufferChange", {
                        get: function() {
                            return this._onBufferChange.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e197.prototype, "active", {
                        get: function() {
                            if (this._core.buffers.active === this._core.buffers.normal) return this.normal;
                            if (this._core.buffers.active === this._core.buffers.alt) return this.alternate;
                            throw new Error("Active buffer is neither normal nor alternate");
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e197.prototype, "normal", {
                        get: function() {
                            return this._normal.init(this._core.buffers.normal);
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e197.prototype, "alternate", {
                        get: function() {
                            return this._alternate.init(this._core.buffers.alt);
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e197;
                }();
                t127.BufferNamespaceApi = o;
            },
            7975: (e198, t128)=>{
                Object.defineProperty(t128, "__esModule", {
                    value: !0
                }), t128.ParserApi = void 0;
                var r74 = function() {
                    function e199(e) {
                        this._core = e;
                    }
                    return e199.prototype.registerCsiHandler = function(e200, t) {
                        return this._core.registerCsiHandler(e200, function(e) {
                            return t(e.toArray());
                        });
                    }, e199.prototype.addCsiHandler = function(e, t) {
                        return this.registerCsiHandler(e, t);
                    }, e199.prototype.registerDcsHandler = function(e201, t) {
                        return this._core.registerDcsHandler(e201, function(e, r) {
                            return t(e, r.toArray());
                        });
                    }, e199.prototype.addDcsHandler = function(e, t) {
                        return this.registerDcsHandler(e, t);
                    }, e199.prototype.registerEscHandler = function(e, t) {
                        return this._core.registerEscHandler(e, t);
                    }, e199.prototype.addEscHandler = function(e, t) {
                        return this.registerEscHandler(e, t);
                    }, e199.prototype.registerOscHandler = function(e, t) {
                        return this._core.registerOscHandler(e, t);
                    }, e199.prototype.addOscHandler = function(e, t) {
                        return this.registerOscHandler(e, t);
                    }, e199;
                }();
                t128.ParserApi = r74;
            },
            7090: (e202, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.UnicodeApi = void 0;
                var r = function() {
                    function e203(e) {
                        this._core = e;
                    }
                    return e203.prototype.register = function(e) {
                        this._core.unicodeService.register(e);
                    }, Object.defineProperty(e203.prototype, "versions", {
                        get: function() {
                            return this._core.unicodeService.versions;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e203.prototype, "activeVersion", {
                        get: function() {
                            return this._core.unicodeService.activeVersion;
                        },
                        set: function(e) {
                            this._core.unicodeService.activeVersion = e;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e203;
                }();
                t.UnicodeApi = r;
            },
            744: function(e204, t129, r75) {
                var i51, n42 = this && this.__extends || (i51 = function(e205, t130) {
                    return i51 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i51(e205, t130);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i51(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o34 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s36 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t129, "__esModule", {
                    value: !0
                }), t129.BufferService = t129.MINIMUM_ROWS = t129.MINIMUM_COLS = void 0;
                var a33 = r75(2585), c = r75(5295), l = r75(8460), h = r75(844);
                t129.MINIMUM_COLS = 2, t129.MINIMUM_ROWS = 1;
                var u = function(e206) {
                    function r76(r) {
                        var i = e206.call(this) || this;
                        return i._optionsService = r, i.isUserScrolling = !1, i._onResize = new l.EventEmitter, i._onScroll = new l.EventEmitter, i.cols = Math.max(r.options.cols || 0, t129.MINIMUM_COLS), i.rows = Math.max(r.options.rows || 0, t129.MINIMUM_ROWS), i.buffers = new c.BufferSet(r, i), i;
                    }
                    return n42(r76, e206), Object.defineProperty(r76.prototype, "onResize", {
                        get: function() {
                            return this._onResize.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(r76.prototype, "onScroll", {
                        get: function() {
                            return this._onScroll.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(r76.prototype, "buffer", {
                        get: function() {
                            return this.buffers.active;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), r76.prototype.dispose = function() {
                        e206.prototype.dispose.call(this), this.buffers.dispose();
                    }, r76.prototype.resize = function(e, t) {
                        this.cols = e, this.rows = t, this.buffers.resize(e, t), this.buffers.setupTabStops(this.cols), this._onResize.fire({
                            cols: e,
                            rows: t
                        });
                    }, r76.prototype.reset = function() {
                        this.buffers.reset(), this.isUserScrolling = !1;
                    }, r76.prototype.scroll = function(e, t) {
                        void 0 === t && (t = !1);
                        var r, i = this.buffer;
                        (r = this._cachedBlankLine) && r.length === this.cols && r.getFg(0) === e.fg && r.getBg(0) === e.bg || (r = i.getBlankLine(e, t), this._cachedBlankLine = r), r.isWrapped = t;
                        var n = i.ybase + i.scrollTop, o = i.ybase + i.scrollBottom;
                        if (0 === i.scrollTop) {
                            var s = i.lines.isFull;
                            o === i.lines.length - 1 ? s ? i.lines.recycle().copyFrom(r) : i.lines.push(r.clone()) : i.lines.splice(o + 1, 0, r.clone()), s ? this.isUserScrolling && (i.ydisp = Math.max(i.ydisp - 1, 0)) : (i.ybase++, this.isUserScrolling || i.ydisp++);
                        } else {
                            var a = o - n + 1;
                            i.lines.shiftElements(n + 1, a - 1, -1), i.lines.set(o, r.clone());
                        }
                        this.isUserScrolling || (i.ydisp = i.ybase), this._onScroll.fire(i.ydisp);
                    }, r76.prototype.scrollLines = function(e, t, r) {
                        var i = this.buffer;
                        if (e < 0) {
                            if (0 === i.ydisp) return;
                            this.isUserScrolling = !0;
                        } else e + i.ydisp >= i.ybase && (this.isUserScrolling = !1);
                        var n = i.ydisp;
                        i.ydisp = Math.max(Math.min(i.ydisp + e, i.ybase), 0), n !== i.ydisp && (t || this._onScroll.fire(i.ydisp));
                    }, r76.prototype.scrollPages = function(e) {
                        this.scrollLines(e * (this.rows - 1));
                    }, r76.prototype.scrollToTop = function() {
                        this.scrollLines(-this.buffer.ydisp);
                    }, r76.prototype.scrollToBottom = function() {
                        this.scrollLines(this.buffer.ybase - this.buffer.ydisp);
                    }, r76.prototype.scrollToLine = function(e) {
                        var t = e - this.buffer.ydisp;
                        0 !== t && this.scrollLines(t);
                    }, o34([
                        s36(0, a33.IOptionsService)
                    ], r76);
                }(h.Disposable);
                t129.BufferService = u;
            },
            7994: (e207, t131)=>{
                Object.defineProperty(t131, "__esModule", {
                    value: !0
                }), t131.CharsetService = void 0;
                var r = function() {
                    function e208() {
                        this.glevel = 0, this._charsets = [];
                    }
                    return e208.prototype.reset = function() {
                        this.charset = void 0, this._charsets = [], this.glevel = 0;
                    }, e208.prototype.setgLevel = function(e) {
                        this.glevel = e, this.charset = this._charsets[e];
                    }, e208.prototype.setgCharset = function(e, t) {
                        this._charsets[e] = t, this.glevel === e && (this.charset = t);
                    }, e208;
                }();
                t131.CharsetService = r;
            },
            1753: function(e209, t132, r77) {
                var i52 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, n43 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t132, "__esModule", {
                    value: !0
                }), t132.CoreMouseService = void 0;
                var o35 = r77(2585), s37 = r77(8460), a34 = {
                    NONE: {
                        events: 0,
                        restrict: function() {
                            return !1;
                        }
                    },
                    X10: {
                        events: 1,
                        restrict: function(e) {
                            return 4 !== e.button && 1 === e.action && (e.ctrl = !1, e.alt = !1, e.shift = !1, !0);
                        }
                    },
                    VT200: {
                        events: 19,
                        restrict: function(e) {
                            return 32 !== e.action;
                        }
                    },
                    DRAG: {
                        events: 23,
                        restrict: function(e) {
                            return 32 !== e.action || 3 !== e.button;
                        }
                    },
                    ANY: {
                        events: 31,
                        restrict: function(e) {
                            return !0;
                        }
                    }
                };
                function c19(e, t) {
                    var r = (e.ctrl ? 16 : 0) | (e.shift ? 4 : 0) | (e.alt ? 8 : 0);
                    return 4 === e.button ? (r |= 64, r |= e.action) : (r |= 3 & e.button, 4 & e.button && (r |= 64), 8 & e.button && (r |= 128), 32 === e.action ? r |= 32 : 0 !== e.action || t || (r |= 3)), r;
                }
                var l21 = String.fromCharCode, h = {
                    DEFAULT: function(e) {
                        var t = [
                            c19(e, !1) + 32,
                            e.col + 32,
                            e.row + 32
                        ];
                        return t[0] > 255 || t[1] > 255 || t[2] > 255 ? "" : "[M" + l21(t[0]) + l21(t[1]) + l21(t[2]);
                    },
                    SGR: function(e) {
                        var t = 0 === e.action && 4 !== e.button ? "m" : "M";
                        return "[<" + c19(e, !0) + ";" + e.col + ";" + e.row + t;
                    }
                }, u = function() {
                    function e210(e, t) {
                        this._bufferService = e, this._coreService = t, this._protocols = {
                        }, this._encodings = {
                        }, this._activeProtocol = "", this._activeEncoding = "", this._onProtocolChange = new s37.EventEmitter, this._lastEvent = null;
                        for(var r = 0, i = Object.keys(a34); r < i.length; r++){
                            var n = i[r];
                            this.addProtocol(n, a34[n]);
                        }
                        for(var o = 0, c = Object.keys(h); o < c.length; o++){
                            var l = c[o];
                            this.addEncoding(l, h[l]);
                        }
                        this.reset();
                    }
                    return e210.prototype.addProtocol = function(e, t) {
                        this._protocols[e] = t;
                    }, e210.prototype.addEncoding = function(e, t) {
                        this._encodings[e] = t;
                    }, Object.defineProperty(e210.prototype, "activeProtocol", {
                        get: function() {
                            return this._activeProtocol;
                        },
                        set: function(e) {
                            if (!this._protocols[e]) throw new Error('unknown protocol "' + e + '"');
                            this._activeProtocol = e, this._onProtocolChange.fire(this._protocols[e].events);
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e210.prototype, "areMouseEventsActive", {
                        get: function() {
                            return 0 !== this._protocols[this._activeProtocol].events;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e210.prototype, "activeEncoding", {
                        get: function() {
                            return this._activeEncoding;
                        },
                        set: function(e) {
                            if (!this._encodings[e]) throw new Error('unknown encoding "' + e + '"');
                            this._activeEncoding = e;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e210.prototype.reset = function() {
                        this.activeProtocol = "NONE", this.activeEncoding = "DEFAULT", this._lastEvent = null;
                    }, Object.defineProperty(e210.prototype, "onProtocolChange", {
                        get: function() {
                            return this._onProtocolChange.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e210.prototype.triggerMouseEvent = function(e) {
                        if (e.col < 0 || e.col >= this._bufferService.cols || e.row < 0 || e.row >= this._bufferService.rows) return !1;
                        if (4 === e.button && 32 === e.action) return !1;
                        if (3 === e.button && 32 !== e.action) return !1;
                        if (4 !== e.button && (2 === e.action || 3 === e.action)) return !1;
                        if (e.col++, e.row++, 32 === e.action && this._lastEvent && this._compareEvents(this._lastEvent, e)) return !1;
                        if (!this._protocols[this._activeProtocol].restrict(e)) return !1;
                        var t = this._encodings[this._activeEncoding](e);
                        return t && ("DEFAULT" === this._activeEncoding ? this._coreService.triggerBinaryEvent(t) : this._coreService.triggerDataEvent(t, !0)), this._lastEvent = e, !0;
                    }, e210.prototype.explainEvents = function(e) {
                        return {
                            down: !!(1 & e),
                            up: !!(2 & e),
                            drag: !!(4 & e),
                            move: !!(8 & e),
                            wheel: !!(16 & e)
                        };
                    }, e210.prototype._compareEvents = function(e, t) {
                        return e.col === t.col && e.row === t.row && e.button === t.button && e.action === t.action && e.ctrl === t.ctrl && e.alt === t.alt && e.shift === t.shift;
                    }, i52([
                        n43(0, o35.IBufferService),
                        n43(1, o35.ICoreService)
                    ], e210);
                }();
                t132.CoreMouseService = u;
            },
            6975: function(e211, t133, r78) {
                var i53, n44 = this && this.__extends || (i53 = function(e212, t134) {
                    return i53 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i53(e212, t134);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i53(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o36 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s38 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t133, "__esModule", {
                    value: !0
                }), t133.CoreService = void 0;
                var a35 = r78(2585), c = r78(8460), l = r78(1439), h = r78(844), u = Object.freeze({
                    insertMode: !1
                }), f = Object.freeze({
                    applicationCursorKeys: !1,
                    applicationKeypad: !1,
                    bracketedPasteMode: !1,
                    origin: !1,
                    reverseWraparound: !1,
                    sendFocus: !1,
                    wraparound: !0
                }), _ = function(e213) {
                    function t135(t, r, i, n) {
                        var o = e213.call(this) || this;
                        return o._bufferService = r, o._logService = i, o._optionsService = n, o.isCursorInitialized = !1, o.isCursorHidden = !1, o._onData = o.register(new c.EventEmitter), o._onUserInput = o.register(new c.EventEmitter), o._onBinary = o.register(new c.EventEmitter), o._scrollToBottom = t, o.register({
                            dispose: function() {
                                return o._scrollToBottom = void 0;
                            }
                        }), o.modes = (0, l.clone)(u), o.decPrivateModes = (0, l.clone)(f), o;
                    }
                    return n44(t135, e213), Object.defineProperty(t135.prototype, "onData", {
                        get: function() {
                            return this._onData.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t135.prototype, "onUserInput", {
                        get: function() {
                            return this._onUserInput.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t135.prototype, "onBinary", {
                        get: function() {
                            return this._onBinary.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t135.prototype.reset = function() {
                        this.modes = (0, l.clone)(u), this.decPrivateModes = (0, l.clone)(f);
                    }, t135.prototype.triggerDataEvent = function(e214, t) {
                        if (void 0 === t && (t = !1), !this._optionsService.options.disableStdin) {
                            var r = this._bufferService.buffer;
                            r.ybase !== r.ydisp && this._scrollToBottom(), t && this._onUserInput.fire(), this._logService.debug('sending data "' + e214 + '"', function() {
                                return e214.split("").map(function(e) {
                                    return e.charCodeAt(0);
                                });
                            }), this._onData.fire(e214);
                        }
                    }, t135.prototype.triggerBinaryEvent = function(e215) {
                        this._optionsService.options.disableStdin || (this._logService.debug('sending binary "' + e215 + '"', function() {
                            return e215.split("").map(function(e) {
                                return e.charCodeAt(0);
                            });
                        }), this._onBinary.fire(e215));
                    }, o36([
                        s38(1, a35.IBufferService),
                        s38(2, a35.ILogService),
                        s38(3, a35.IOptionsService)
                    ], t135);
                }(h.Disposable);
                t133.CoreService = _;
            },
            3730: function(e216, t136, r79) {
                var i54 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, n45 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t136, "__esModule", {
                    value: !0
                }), t136.DirtyRowService = void 0;
                var o37 = r79(2585), s39 = function() {
                    function e217(e) {
                        this._bufferService = e, this.clearRange();
                    }
                    return Object.defineProperty(e217.prototype, "start", {
                        get: function() {
                            return this._start;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e217.prototype, "end", {
                        get: function() {
                            return this._end;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e217.prototype.clearRange = function() {
                        this._start = this._bufferService.buffer.y, this._end = this._bufferService.buffer.y;
                    }, e217.prototype.markDirty = function(e) {
                        e < this._start ? this._start = e : e > this._end && (this._end = e);
                    }, e217.prototype.markRangeDirty = function(e, t) {
                        if (e > t) {
                            var r = e;
                            e = t, t = r;
                        }
                        e < this._start && (this._start = e), t > this._end && (this._end = t);
                    }, e217.prototype.markAllDirty = function() {
                        this.markRangeDirty(0, this._bufferService.rows - 1);
                    }, i54([
                        n45(0, o37.IBufferService)
                    ], e217);
                }();
                t136.DirtyRowService = s39;
            },
            4348: function(e218, t137, r80) {
                var i55 = this && this.__spreadArray || function(e, t, r) {
                    if (r || 2 === arguments.length) for(var i, n = 0, o = t.length; n < o; n++)!i && n in t || (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
                    return e.concat(i || Array.prototype.slice.call(t));
                };
                Object.defineProperty(t137, "__esModule", {
                    value: !0
                }), t137.InstantiationService = t137.ServiceCollection = void 0;
                var n46 = r80(2585), o38 = r80(8343), s40 = function() {
                    function e219() {
                        for(var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
                        this._entries = new Map;
                        for(var r = 0, i = e; r < i.length; r++){
                            var n = i[r], o = n[0], s = n[1];
                            this.set(o, s);
                        }
                    }
                    return e219.prototype.set = function(e, t) {
                        var r = this._entries.get(e);
                        return this._entries.set(e, t), r;
                    }, e219.prototype.forEach = function(e) {
                        this._entries.forEach(function(t, r) {
                            return e(r, t);
                        });
                    }, e219.prototype.has = function(e) {
                        return this._entries.has(e);
                    }, e219.prototype.get = function(e) {
                        return this._entries.get(e);
                    }, e219;
                }();
                t137.ServiceCollection = s40;
                var a36 = function() {
                    function e220() {
                        this._services = new s40, this._services.set(n46.IInstantiationService, this);
                    }
                    return e220.prototype.setService = function(e, t) {
                        this._services.set(e, t);
                    }, e220.prototype.getService = function(e) {
                        return this._services.get(e);
                    }, e220.prototype.createInstance = function(e221) {
                        for(var t138 = [], r = 1; r < arguments.length; r++)t138[r - 1] = arguments[r];
                        for(var n = (0, o38.getServiceDependencies)(e221).sort(function(e, t) {
                            return e.index - t.index;
                        }), s = [], a = 0, c = n; a < c.length; a++){
                            var l = c[a], h = this._services.get(l.id);
                            if (!h) throw new Error("[createInstance] " + e221.name + " depends on UNKNOWN service " + l.id + ".");
                            s.push(h);
                        }
                        var u = n.length > 0 ? n[0].index : t138.length;
                        if (t138.length !== u) throw new Error("[createInstance] First service dependency of " + e221.name + " at position " + (u + 1) + " conflicts with " + t138.length + " static arguments");
                        return new (e221.bind.apply(e221, i55([
                            void 0
                        ], i55(i55([], t138, !0), s, !0), !1)));
                    }, e220;
                }();
                t137.InstantiationService = a36;
            },
            7866: function(e222, t139, r81) {
                var i56 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, n47 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                }, o39 = this && this.__spreadArray || function(e, t, r) {
                    if (r || 2 === arguments.length) for(var i, n = 0, o = t.length; n < o; n++)!i && n in t || (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
                    return e.concat(i || Array.prototype.slice.call(t));
                };
                Object.defineProperty(t139, "__esModule", {
                    value: !0
                }), t139.LogService = void 0;
                var s41 = r81(2585), a37 = {
                    debug: s41.LogLevelEnum.DEBUG,
                    info: s41.LogLevelEnum.INFO,
                    warn: s41.LogLevelEnum.WARN,
                    error: s41.LogLevelEnum.ERROR,
                    off: s41.LogLevelEnum.OFF
                }, c = function() {
                    function e223(e224) {
                        var t = this;
                        this._optionsService = e224, this.logLevel = s41.LogLevelEnum.OFF, this._updateLogLevel(), this._optionsService.onOptionChange(function(e) {
                            "logLevel" === e && t._updateLogLevel();
                        });
                    }
                    return e223.prototype._updateLogLevel = function() {
                        this.logLevel = a37[this._optionsService.options.logLevel];
                    }, e223.prototype._evalLazyOptionalParams = function(e) {
                        for(var t = 0; t < e.length; t++)"function" == typeof e[t] && (e[t] = e[t]());
                    }, e223.prototype._log = function(e, t, r) {
                        this._evalLazyOptionalParams(r), e.call.apply(e, o39([
                            console,
                            "xterm.js: " + t
                        ], r, !1));
                    }, e223.prototype.debug = function(e) {
                        for(var t = [], r = 1; r < arguments.length; r++)t[r - 1] = arguments[r];
                        this.logLevel <= s41.LogLevelEnum.DEBUG && this._log(console.log, e, t);
                    }, e223.prototype.info = function(e) {
                        for(var t = [], r = 1; r < arguments.length; r++)t[r - 1] = arguments[r];
                        this.logLevel <= s41.LogLevelEnum.INFO && this._log(console.info, e, t);
                    }, e223.prototype.warn = function(e) {
                        for(var t = [], r = 1; r < arguments.length; r++)t[r - 1] = arguments[r];
                        this.logLevel <= s41.LogLevelEnum.WARN && this._log(console.warn, e, t);
                    }, e223.prototype.error = function(e) {
                        for(var t = [], r = 1; r < arguments.length; r++)t[r - 1] = arguments[r];
                        this.logLevel <= s41.LogLevelEnum.ERROR && this._log(console.error, e, t);
                    }, i56([
                        n47(0, s41.IOptionsService)
                    ], e223);
                }();
                t139.LogService = c;
            },
            7302: function(e225, t140, r82) {
                var i57 = this && this.__assign || function() {
                    return i57 = Object.assign || function(e) {
                        for(var t, r = 1, i = arguments.length; r < i; r++)for(var n in t = arguments[r])Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e;
                    }, i57.apply(this, arguments);
                };
                Object.defineProperty(t140, "__esModule", {
                    value: !0
                }), t140.OptionsService = t140.DEFAULT_OPTIONS = t140.DEFAULT_BELL_SOUND = void 0;
                var n48 = r82(8460), o40 = r82(6114);
                t140.DEFAULT_BELL_SOUND = "data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjMyLjEwNAAAAAAAAAAAAAAA//tQxAADB8AhSmxhIIEVCSiJrDCQBTcu3UrAIwUdkRgQbFAZC1CQEwTJ9mjRvBA4UOLD8nKVOWfh+UlK3z/177OXrfOdKl7pyn3Xf//WreyTRUoAWgBgkOAGbZHBgG1OF6zM82DWbZaUmMBptgQhGjsyYqc9ae9XFz280948NMBWInljyzsNRFLPWdnZGWrddDsjK1unuSrVN9jJsK8KuQtQCtMBjCEtImISdNKJOopIpBFpNSMbIHCSRpRR5iakjTiyzLhchUUBwCgyKiweBv/7UsQbg8isVNoMPMjAAAA0gAAABEVFGmgqK////9bP/6XCykxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", t140.DEFAULT_OPTIONS = {
                    cols: 80,
                    rows: 24,
                    cursorBlink: !1,
                    cursorStyle: "block",
                    cursorWidth: 1,
                    customGlyphs: !0,
                    bellSound: t140.DEFAULT_BELL_SOUND,
                    bellStyle: "none",
                    drawBoldTextInBrightColors: !0,
                    fastScrollModifier: "alt",
                    fastScrollSensitivity: 5,
                    fontFamily: "courier-new, courier, monospace",
                    fontSize: 15,
                    fontWeight: "normal",
                    fontWeightBold: "bold",
                    lineHeight: 1,
                    linkTooltipHoverDuration: 500,
                    letterSpacing: 0,
                    logLevel: "info",
                    scrollback: 1000,
                    scrollSensitivity: 1,
                    screenReaderMode: !1,
                    macOptionIsMeta: !1,
                    macOptionClickForcesSelection: !1,
                    minimumContrastRatio: 1,
                    disableStdin: !1,
                    allowProposedApi: !0,
                    allowTransparency: !1,
                    tabStopWidth: 8,
                    theme: {
                    },
                    rightClickSelectsWord: o40.isMac,
                    rendererType: "canvas",
                    windowOptions: {
                    },
                    windowsMode: !1,
                    wordSeparator: " ()[]{}',\"`",
                    altClickMovesCursor: !0,
                    convertEol: !1,
                    termName: "xterm",
                    cancelEvents: !1
                };
                var s42 = [
                    "normal",
                    "bold",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900"
                ], a = function() {
                    function e226(e) {
                        for(var r in this._onOptionChange = new n48.EventEmitter, this._options = i57({
                        }, t140.DEFAULT_OPTIONS), e)if (r in this._options) try {
                            var o = e[r];
                            this._options[r] = this._sanitizeAndValidateOption(r, o);
                        } catch (e227) {
                            console.error(e227);
                        }
                        this.options = this._setupOptions(this._options);
                    }
                    return Object.defineProperty(e226.prototype, "onOptionChange", {
                        get: function() {
                            return this._onOptionChange.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e226.prototype._setupOptions = function(e228) {
                        var r = this, n = i57({
                        }, e228), o = function(e) {
                            Object.defineProperty(n, e, {
                                get: function() {
                                    if (!(e in t140.DEFAULT_OPTIONS)) throw new Error('No option with key "' + e + '"');
                                    return r._options[e];
                                },
                                set: function(i) {
                                    if (!(e in t140.DEFAULT_OPTIONS)) throw new Error('No option with key "' + e + '"');
                                    i = r._sanitizeAndValidateOption(e, i), r._options[e] !== i && (r._options[e] = i, r._onOptionChange.fire(e));
                                }
                            });
                        };
                        for(var s in n)o(s);
                        return n;
                    }, e226.prototype.setOption = function(e, t) {
                        this.options[e] = t;
                    }, e226.prototype._sanitizeAndValidateOption = function(e, r) {
                        switch(e){
                            case "bellStyle":
                            case "cursorStyle":
                            case "rendererType":
                            case "wordSeparator":
                                r || (r = t140.DEFAULT_OPTIONS[e]);
                                break;
                            case "fontWeight":
                            case "fontWeightBold":
                                if ("number" == typeof r && 1 <= r && r <= 1000) break;
                                r = s42.includes(r) ? r : t140.DEFAULT_OPTIONS[e];
                                break;
                            case "cursorWidth":
                                r = Math.floor(r);
                            case "lineHeight":
                            case "tabStopWidth":
                                if (r < 1) throw new Error(e + " cannot be less than 1, value: " + r);
                                break;
                            case "minimumContrastRatio":
                                r = Math.max(1, Math.min(21, Math.round(10 * r) / 10));
                                break;
                            case "scrollback":
                                if ((r = Math.min(r, 4294967295)) < 0) throw new Error(e + " cannot be less than 0, value: " + r);
                                break;
                            case "fastScrollSensitivity":
                            case "scrollSensitivity":
                                if (r <= 0) throw new Error(e + " cannot be less than or equal to 0, value: " + r);
                            case "rows":
                            case "cols":
                                if (!r && 0 !== r) throw new Error(e + " must be numeric, value: " + r);
                        }
                        return r;
                    }, e226.prototype.getOption = function(e) {
                        return this.options[e];
                    }, e226;
                }();
                t140.OptionsService = a;
            },
            8343: (e229, t141)=>{
                function r83(e, t, r) {
                    t.di$target === t ? t.di$dependencies.push({
                        id: e,
                        index: r
                    }) : (t.di$dependencies = [
                        {
                            id: e,
                            index: r
                        }
                    ], t.di$target = t);
                }
                Object.defineProperty(t141, "__esModule", {
                    value: !0
                }), t141.createDecorator = t141.getServiceDependencies = t141.serviceRegistry = void 0, t141.serviceRegistry = new Map, t141.getServiceDependencies = function(e) {
                    return e.di$dependencies || [];
                }, t141.createDecorator = function(e230) {
                    if (t141.serviceRegistry.has(e230)) return t141.serviceRegistry.get(e230);
                    var i = function(e, t, n) {
                        if (3 !== arguments.length) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
                        r83(i, e, n);
                    };
                    return i.toString = function() {
                        return e230;
                    }, t141.serviceRegistry.set(e230, i), i;
                };
            },
            2585: (e, t, r)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.IUnicodeService = t.IOptionsService = t.ILogService = t.LogLevelEnum = t.IInstantiationService = t.IDirtyRowService = t.ICharsetService = t.ICoreService = t.ICoreMouseService = t.IBufferService = void 0;
                var i, n = r(8343);
                t.IBufferService = (0, n.createDecorator)("BufferService"), t.ICoreMouseService = (0, n.createDecorator)("CoreMouseService"), t.ICoreService = (0, n.createDecorator)("CoreService"), t.ICharsetService = (0, n.createDecorator)("CharsetService"), t.IDirtyRowService = (0, n.createDecorator)("DirtyRowService"), t.IInstantiationService = (0, n.createDecorator)("InstantiationService"), (i = t.LogLevelEnum || (t.LogLevelEnum = {
                }))[i.DEBUG = 0] = "DEBUG", i[i.INFO = 1] = "INFO", i[i.WARN = 2] = "WARN", i[i.ERROR = 3] = "ERROR", i[i.OFF = 4] = "OFF", t.ILogService = (0, n.createDecorator)("LogService"), t.IOptionsService = (0, n.createDecorator)("OptionsService"), t.IUnicodeService = (0, n.createDecorator)("UnicodeService");
            },
            1480: (e231, t142, r84)=>{
                Object.defineProperty(t142, "__esModule", {
                    value: !0
                }), t142.UnicodeService = void 0;
                var i58 = r84(8460), n49 = r84(225), o41 = function() {
                    function e232() {
                        this._providers = Object.create(null), this._active = "", this._onChange = new i58.EventEmitter;
                        var e = new n49.UnicodeV6;
                        this.register(e), this._active = e.version, this._activeProvider = e;
                    }
                    return Object.defineProperty(e232.prototype, "onChange", {
                        get: function() {
                            return this._onChange.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e232.prototype, "versions", {
                        get: function() {
                            return Object.keys(this._providers);
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e232.prototype, "activeVersion", {
                        get: function() {
                            return this._active;
                        },
                        set: function(e) {
                            if (!this._providers[e]) throw new Error('unknown Unicode version "' + e + '"');
                            this._active = e, this._activeProvider = this._providers[e], this._onChange.fire(e);
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e232.prototype.register = function(e) {
                        this._providers[e.version] = e;
                    }, e232.prototype.wcwidth = function(e) {
                        return this._activeProvider.wcwidth(e);
                    }, e232.prototype.getStringCellWidth = function(e) {
                        for(var t = 0, r = e.length, i = 0; i < r; ++i){
                            var n = e.charCodeAt(i);
                            if (55296 <= n && n <= 56319) {
                                if (++i >= r) return t + this.wcwidth(n);
                                var o = e.charCodeAt(i);
                                56320 <= o && o <= 57343 ? n = 1024 * (n - 55296) + o - 56320 + 65536 : t += this.wcwidth(o);
                            }
                            t += this.wcwidth(n);
                        }
                        return t;
                    }, e232;
                }();
                t142.UnicodeService = o41;
            }
        }, t1 = {
        };
        function r1(i) {
            var n = t1[i];
            if (void 0 !== n) return n.exports;
            var o = t1[i] = {
                exports: {
                }
            };
            return e1[i].call(o.exports, o, o.exports, r1), o.exports;
        }
        var i1 = {
        };
        return (()=>{
            var e233 = i1;
            Object.defineProperty(e233, "__esModule", {
                value: !0
            }), e233.Terminal = void 0;
            var t143 = r1(3236), n50 = r1(9042), o42 = r1(7975), s = r1(7090), a = r1(5741), c = r1(8285), l = [
                "cols",
                "rows"
            ], h = function() {
                function e234(e235) {
                    var r = this;
                    this._core = new t143.Terminal(e235), this._addonManager = new a.AddonManager, this._publicOptions = {
                    };
                    var i = function(e) {
                        Object.defineProperty(n._publicOptions, e, {
                            get: function() {
                                return r._core.options[e];
                            },
                            set: function(t) {
                                r._checkReadonlyOptions(e), r._core.options[e] = t;
                            }
                        });
                    }, n = this;
                    for(var o in this._core.options)i(o);
                }
                return e234.prototype._checkReadonlyOptions = function(e) {
                    if (l.includes(e)) throw new Error('Option "' + e + '" can only be set in the constructor');
                }, e234.prototype._checkProposedApi = function() {
                    if (!this._core.optionsService.options.allowProposedApi) throw new Error("You must set the allowProposedApi option to true to use proposed API");
                }, Object.defineProperty(e234.prototype, "onBell", {
                    get: function() {
                        return this._core.onBell;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e234.prototype, "onBinary", {
                    get: function() {
                        return this._core.onBinary;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e234.prototype, "onCursorMove", {
                    get: function() {
                        return this._core.onCursorMove;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e234.prototype, "onData", {
                    get: function() {
                        return this._core.onData;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e234.prototype, "onKey", {
                    get: function() {
                        return this._core.onKey;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e234.prototype, "onLineFeed", {
                    get: function() {
                        return this._core.onLineFeed;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e234.prototype, "onRender", {
                    get: function() {
                        return this._core.onRender;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e234.prototype, "onResize", {
                    get: function() {
                        return this._core.onResize;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e234.prototype, "onScroll", {
                    get: function() {
                        return this._core.onScroll;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e234.prototype, "onSelectionChange", {
                    get: function() {
                        return this._core.onSelectionChange;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e234.prototype, "onTitleChange", {
                    get: function() {
                        return this._core.onTitleChange;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e234.prototype, "element", {
                    get: function() {
                        return this._core.element;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e234.prototype, "parser", {
                    get: function() {
                        return this._checkProposedApi(), this._parser || (this._parser = new o42.ParserApi(this._core)), this._parser;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e234.prototype, "unicode", {
                    get: function() {
                        return this._checkProposedApi(), new s.UnicodeApi(this._core);
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e234.prototype, "textarea", {
                    get: function() {
                        return this._core.textarea;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e234.prototype, "rows", {
                    get: function() {
                        return this._core.rows;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e234.prototype, "cols", {
                    get: function() {
                        return this._core.cols;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e234.prototype, "buffer", {
                    get: function() {
                        return this._checkProposedApi(), this._buffer || (this._buffer = new c.BufferNamespaceApi(this._core)), this._buffer;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e234.prototype, "markers", {
                    get: function() {
                        return this._checkProposedApi(), this._core.markers;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e234.prototype, "modes", {
                    get: function() {
                        var e = this._core.coreService.decPrivateModes, t = "none";
                        switch(this._core.coreMouseService.activeProtocol){
                            case "X10":
                                t = "x10";
                                break;
                            case "VT200":
                                t = "vt200";
                                break;
                            case "DRAG":
                                t = "drag";
                                break;
                            case "ANY":
                                t = "any";
                        }
                        return {
                            applicationCursorKeysMode: e.applicationCursorKeys,
                            applicationKeypadMode: e.applicationKeypad,
                            bracketedPasteMode: e.bracketedPasteMode,
                            insertMode: this._core.coreService.modes.insertMode,
                            mouseTrackingMode: t,
                            originMode: e.origin,
                            reverseWraparoundMode: e.reverseWraparound,
                            sendFocusMode: e.sendFocus,
                            wraparoundMode: e.wraparound
                        };
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e234.prototype, "options", {
                    get: function() {
                        return this._publicOptions;
                    },
                    set: function(e) {
                        for(var t in e)this._publicOptions[t] = e[t];
                    },
                    enumerable: !1,
                    configurable: !0
                }), e234.prototype.blur = function() {
                    this._core.blur();
                }, e234.prototype.focus = function() {
                    this._core.focus();
                }, e234.prototype.resize = function(e, t) {
                    this._verifyIntegers(e, t), this._core.resize(e, t);
                }, e234.prototype.open = function(e) {
                    this._core.open(e);
                }, e234.prototype.attachCustomKeyEventHandler = function(e) {
                    this._core.attachCustomKeyEventHandler(e);
                }, e234.prototype.registerLinkMatcher = function(e, t, r) {
                    return this._checkProposedApi(), this._core.registerLinkMatcher(e, t, r);
                }, e234.prototype.deregisterLinkMatcher = function(e) {
                    this._checkProposedApi(), this._core.deregisterLinkMatcher(e);
                }, e234.prototype.registerLinkProvider = function(e) {
                    return this._checkProposedApi(), this._core.registerLinkProvider(e);
                }, e234.prototype.registerCharacterJoiner = function(e) {
                    return this._checkProposedApi(), this._core.registerCharacterJoiner(e);
                }, e234.prototype.deregisterCharacterJoiner = function(e) {
                    this._checkProposedApi(), this._core.deregisterCharacterJoiner(e);
                }, e234.prototype.registerMarker = function(e) {
                    return this._checkProposedApi(), this._verifyIntegers(e), this._core.addMarker(e);
                }, e234.prototype.addMarker = function(e) {
                    return this.registerMarker(e);
                }, e234.prototype.hasSelection = function() {
                    return this._core.hasSelection();
                }, e234.prototype.select = function(e, t, r) {
                    this._verifyIntegers(e, t, r), this._core.select(e, t, r);
                }, e234.prototype.getSelection = function() {
                    return this._core.getSelection();
                }, e234.prototype.getSelectionPosition = function() {
                    return this._core.getSelectionPosition();
                }, e234.prototype.clearSelection = function() {
                    this._core.clearSelection();
                }, e234.prototype.selectAll = function() {
                    this._core.selectAll();
                }, e234.prototype.selectLines = function(e, t) {
                    this._verifyIntegers(e, t), this._core.selectLines(e, t);
                }, e234.prototype.dispose = function() {
                    this._addonManager.dispose(), this._core.dispose();
                }, e234.prototype.scrollLines = function(e) {
                    this._verifyIntegers(e), this._core.scrollLines(e);
                }, e234.prototype.scrollPages = function(e) {
                    this._verifyIntegers(e), this._core.scrollPages(e);
                }, e234.prototype.scrollToTop = function() {
                    this._core.scrollToTop();
                }, e234.prototype.scrollToBottom = function() {
                    this._core.scrollToBottom();
                }, e234.prototype.scrollToLine = function(e) {
                    this._verifyIntegers(e), this._core.scrollToLine(e);
                }, e234.prototype.clear = function() {
                    this._core.clear();
                }, e234.prototype.write = function(e, t) {
                    this._core.write(e, t);
                }, e234.prototype.writeUtf8 = function(e, t) {
                    this._core.write(e, t);
                }, e234.prototype.writeln = function(e, t) {
                    this._core.write(e), this._core.write("\r\n", t);
                }, e234.prototype.paste = function(e) {
                    this._core.paste(e);
                }, e234.prototype.getOption = function(e) {
                    return this._core.optionsService.getOption(e);
                }, e234.prototype.setOption = function(e, t) {
                    this._checkReadonlyOptions(e), this._core.optionsService.setOption(e, t);
                }, e234.prototype.refresh = function(e, t) {
                    this._verifyIntegers(e, t), this._core.refresh(e, t);
                }, e234.prototype.reset = function() {
                    this._core.reset();
                }, e234.prototype.clearTextureAtlas = function() {
                    this._core.clearTextureAtlas();
                }, e234.prototype.loadAddon = function(e) {
                    return this._addonManager.loadAddon(this, e);
                }, Object.defineProperty(e234, "strings", {
                    get: function() {
                        return n50;
                    },
                    enumerable: !1,
                    configurable: !0
                }), e234.prototype._verifyIntegers = function() {
                    for(var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
                    for(var r = 0, i = e; r < i.length; r++){
                        var n = i[r];
                        if (n === 1 / 0 || isNaN(n) || n % 1 != 0) throw new Error("This API only accepts integers");
                    }
                }, e234;
            }();
            e233.Terminal = h;
        })(), i1;
    })();
});

},{}],"7SVCt":[function() {},{}],"7GwBM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Protocol version.
 *
 * @public
 */ parcelHelpers.export(exports, "protocol", ()=>_socketIoParser.protocol
);
/**
 * Expose constructors for standalone build.
 *
 * @public
 */ parcelHelpers.export(exports, "Manager", ()=>_managerJs.Manager
);
parcelHelpers.export(exports, "Socket", ()=>_socketJs.Socket
);
parcelHelpers.export(exports, "io", ()=>lookup
);
parcelHelpers.export(exports, "connect", ()=>lookup
);
parcelHelpers.export(exports, "default", ()=>lookup
);
var _urlJs = require("./url.js");
var _managerJs = require("./manager.js");
var _socketJs = require("./socket.js");
var _socketIoParser = require("socket.io-parser");
/**
 * Managers cache.
 */ const cache = {
};
function lookup(uri, opts) {
    if (typeof uri === "object") {
        opts = uri;
        uri = undefined;
    }
    opts = opts || {
    };
    const parsed = _urlJs.url(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
    let io;
    if (newConnection) io = new _managerJs.Manager(source, opts);
    else {
        if (!cache[id]) cache[id] = new _managerJs.Manager(source, opts);
        io = cache[id];
    }
    if (parsed.query && !opts.query) opts.query = parsed.queryKey;
    return io.socket(parsed.path, opts);
}
// so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
// namespace (e.g. `io.connect(...)`), for backward compatibility
Object.assign(lookup, {
    Manager: _managerJs.Manager,
    Socket: _socketJs.Socket,
    io: lookup,
    connect: lookup
});

},{"./url.js":"4ur6q","./manager.js":"bLkMx","./socket.js":"31FZk","socket.io-parser":"37ak3","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4ur6q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * URL parser.
 *
 * @param uri - url
 * @param path - the request path of the connection
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */ parcelHelpers.export(exports, "url", ()=>url
);
var _parseuri = require("parseuri");
var _parseuriDefault = parcelHelpers.interopDefault(_parseuri);
function url(uri, path = "", loc) {
    let obj = uri;
    // default to window.location
    loc = loc || typeof location !== "undefined" && location;
    if (null == uri) uri = loc.protocol + "//" + loc.host;
    // relative path support
    if (typeof uri === "string") {
        if ("/" === uri.charAt(0)) {
            if ("/" === uri.charAt(1)) uri = loc.protocol + uri;
            else uri = loc.host + uri;
        }
        if (!/^(https?|wss?):\/\//.test(uri)) {
            if ("undefined" !== typeof loc) uri = loc.protocol + "//" + uri;
            else uri = "https://" + uri;
        }
        // parse
        obj = _parseuriDefault.default(uri);
    }
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) obj.port = "80";
        else if (/^(http|ws)s$/.test(obj.protocol)) obj.port = "443";
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    // define unique id
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    // define href
    obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
}

},{"parseuri":"3wsji","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3wsji":[function(require,module,exports) {
/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */ var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = [
    'source',
    'protocol',
    'authority',
    'userInfo',
    'user',
    'password',
    'host',
    'port',
    'relative',
    'path',
    'directory',
    'file',
    'query',
    'anchor'
];
module.exports = function parseuri(str) {
    var src = str, b = str.indexOf('['), e = str.indexOf(']');
    if (b != -1 && e != -1) str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    var m = re.exec(str || ''), uri = {
    }, i = 14;
    while(i--)uri[parts[i]] = m[i] || '';
    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);
    return uri;
};
function pathNames(obj, path) {
    var regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
    if (path.substr(0, 1) == '/' || path.length === 0) names.splice(0, 1);
    if (path.substr(path.length - 1, 1) == '/') names.splice(names.length - 1, 1);
    return names;
}
function queryKey(uri, query) {
    var data = {
    };
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
        if ($1) data[$1] = $2;
    });
    return data;
}

},{}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bLkMx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Manager", ()=>Manager
);
var _engineIoClient = require("engine.io-client");
var _socketJs = require("./socket.js");
var _socketIoParser = require("socket.io-parser");
var _onJs = require("./on.js");
var _backo2 = require("backo2");
var _backo2Default = parcelHelpers.interopDefault(_backo2);
var _componentEmitter = require("@socket.io/component-emitter");
class Manager extends _componentEmitter.Emitter {
    constructor(uri, opts){
        var _a;
        super();
        this.nsps = {
        };
        this.subs = [];
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = undefined;
        }
        opts = opts || {
        };
        opts.path = opts.path || "/socket.io";
        this.opts = opts;
        _engineIoClient.installTimerFunctions(this, opts);
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1000);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
        this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
        this.backoff = new _backo2Default.default({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        });
        this.timeout(null == opts.timeout ? 20000 : opts.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts.parser || _socketIoParser;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = opts.autoConnect !== false;
        if (this._autoConnect) this.open();
    }
    reconnection(v) {
        if (!arguments.length) return this._reconnection;
        this._reconnection = !!v;
        return this;
    }
    reconnectionAttempts(v) {
        if (v === undefined) return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
    }
    reconnectionDelay(v) {
        var _a;
        if (v === undefined) return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a = this.backoff) === null || _a === void 0 || _a.setMin(v);
        return this;
    }
    randomizationFactor(v) {
        var _a;
        if (v === undefined) return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a = this.backoff) === null || _a === void 0 || _a.setJitter(v);
        return this;
    }
    reconnectionDelayMax(v) {
        var _a;
        if (v === undefined) return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a = this.backoff) === null || _a === void 0 || _a.setMax(v);
        return this;
    }
    timeout(v) {
        if (!arguments.length) return this._timeout;
        this._timeout = v;
        return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */ maybeReconnectOnOpen() {
        // Only try to reconnect if it's the first time we're connecting
        if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) // keeps reconnection from firing twice for the same reconnection loop
        this.reconnect();
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */ open(fn) {
        if (~this._readyState.indexOf("open")) return this;
        this.engine = new _engineIoClient.Socket(this.uri, this.opts);
        const socket = this.engine;
        const self = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        // emit `open`
        const openSubDestroy = _onJs.on(socket, "open", function() {
            self.onopen();
            fn && fn();
        });
        // emit `error`
        const errorSub = _onJs.on(socket, "error", (err)=>{
            self.cleanup();
            self._readyState = "closed";
            this.emitReserved("error", err);
            if (fn) fn(err);
            else // Only do this if there is no fn to handle the error
            self.maybeReconnectOnOpen();
        });
        if (false !== this._timeout) {
            const timeout = this._timeout;
            if (timeout === 0) openSubDestroy(); // prevents a race condition with the 'open' event
            // set timer
            const timer = this.setTimeoutFn(()=>{
                openSubDestroy();
                socket.close();
                // @ts-ignore
                socket.emit("error", new Error("timeout"));
            }, timeout);
            if (this.opts.autoUnref) timer.unref();
            this.subs.push(function subDestroy() {
                clearTimeout(timer);
            });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */ connect(fn) {
        return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */ onopen() {
        // clear old subs
        this.cleanup();
        // mark as open
        this._readyState = "open";
        this.emitReserved("open");
        // add new subs
        const socket = this.engine;
        this.subs.push(_onJs.on(socket, "ping", this.onping.bind(this)), _onJs.on(socket, "data", this.ondata.bind(this)), _onJs.on(socket, "error", this.onerror.bind(this)), _onJs.on(socket, "close", this.onclose.bind(this)), _onJs.on(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */ onping() {
        this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */ ondata(data) {
        this.decoder.add(data);
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */ ondecoded(packet) {
        this.emitReserved("packet", packet);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */ onerror(err) {
        this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */ socket(nsp, opts) {
        let socket = this.nsps[nsp];
        if (!socket) {
            socket = new _socketJs.Socket(this, nsp, opts);
            this.nsps[nsp] = socket;
        }
        return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */ _destroy(socket) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps){
            const socket = this.nsps[nsp];
            if (socket.active) return;
        }
        this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */ _packet(packet) {
        const encodedPackets = this.encoder.encode(packet);
        for(let i = 0; i < encodedPackets.length; i++)this.engine.write(encodedPackets[i], packet.options);
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */ cleanup() {
        this.subs.forEach((subDestroy)=>subDestroy()
        );
        this.subs.length = 0;
        this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */ _close() {
        this.skipReconnect = true;
        this._reconnecting = false;
        this.onclose("forced close");
        if (this.engine) this.engine.close();
    }
    /**
     * Alias for close()
     *
     * @private
     */ disconnect() {
        return this._close();
    }
    /**
     * Called upon engine close.
     *
     * @private
     */ onclose(reason) {
        this.cleanup();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason);
        if (this._reconnection && !this.skipReconnect) this.reconnect();
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */ reconnect() {
        if (this._reconnecting || this.skipReconnect) return this;
        const self = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
        } else {
            const delay = this.backoff.duration();
            this._reconnecting = true;
            const timer = this.setTimeoutFn(()=>{
                if (self.skipReconnect) return;
                this.emitReserved("reconnect_attempt", self.backoff.attempts);
                // check again for the case socket closed in above events
                if (self.skipReconnect) return;
                self.open((err)=>{
                    if (err) {
                        self._reconnecting = false;
                        self.reconnect();
                        this.emitReserved("reconnect_error", err);
                    } else self.onreconnect();
                });
            }, delay);
            if (this.opts.autoUnref) timer.unref();
            this.subs.push(function subDestroy() {
                clearTimeout(timer);
            });
        }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */ onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
    }
}

},{"engine.io-client":"kQeoz","./socket.js":"31FZk","socket.io-parser":"37ak3","./on.js":"foI8Q","backo2":"antcs","@socket.io/component-emitter":"kgnXr","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kQeoz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Socket", ()=>_socketJs.Socket
);
parcelHelpers.export(exports, "protocol", ()=>protocol
);
parcelHelpers.export(exports, "Transport", ()=>_transportJs.Transport
);
parcelHelpers.export(exports, "transports", ()=>_indexJs.transports
);
parcelHelpers.export(exports, "installTimerFunctions", ()=>_utilJs.installTimerFunctions
);
var _socketJs = require("./socket.js");
var _transportJs = require("./transport.js");
var _indexJs = require("./transports/index.js");
var _utilJs = require("./util.js");
const protocol = _socketJs.Socket.protocol;

},{"./socket.js":"59l3f","./transport.js":"heRxf","./transports/index.js":"ltUaM","./util.js":"d3Esz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"59l3f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Socket", ()=>Socket
);
var _indexJs = require("./transports/index.js");
var _utilJs = require("./util.js");
var _parseqs = require("parseqs");
var _parseqsDefault = parcelHelpers.interopDefault(_parseqs);
var _parseuri = require("parseuri");
var _parseuriDefault = parcelHelpers.interopDefault(_parseuri);
var _componentEmitter = require("@socket.io/component-emitter");
var _engineIoParser = require("engine.io-parser");
class Socket extends _componentEmitter.Emitter {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri or options
     * @param {Object} opts - options
     * @api public
     */ constructor(uri, opts = {
    }){
        super();
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = null;
        }
        if (uri) {
            uri = _parseuriDefault.default(uri);
            opts.hostname = uri.host;
            opts.secure = uri.protocol === "https" || uri.protocol === "wss";
            opts.port = uri.port;
            if (uri.query) opts.query = uri.query;
        } else if (opts.host) opts.hostname = _parseuriDefault.default(opts.host).host;
        _utilJs.installTimerFunctions(this, opts);
        this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
        if (opts.hostname && !opts.port) // if no port is specified manually, use the protocol default
        opts.port = this.secure ? "443" : "80";
        this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
        this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
        this.transports = opts.transports || [
            "polling",
            "websocket"
        ];
        this.readyState = "";
        this.writeBuffer = [];
        this.prevBufferLen = 0;
        this.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            timestampParam: "t",
            rememberUpgrade: false,
            rejectUnauthorized: true,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {
            },
            closeOnBeforeunload: true
        }, opts);
        this.opts.path = this.opts.path.replace(/\/$/, "") + "/";
        if (typeof this.opts.query === "string") this.opts.query = _parseqsDefault.default.decode(this.opts.query);
        // set on handshake
        this.id = null;
        this.upgrades = null;
        this.pingInterval = null;
        this.pingTimeout = null;
        // set on heartbeat
        this.pingTimeoutTimer = null;
        if (typeof addEventListener === "function") {
            if (this.opts.closeOnBeforeunload) // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
            // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
            // closed/reloaded)
            addEventListener("beforeunload", ()=>{
                if (this.transport) {
                    // silently close the transport
                    this.transport.removeAllListeners();
                    this.transport.close();
                }
            }, false);
            if (this.hostname !== "localhost") {
                this.offlineEventListener = ()=>{
                    this.onClose("transport close");
                };
                addEventListener("offline", this.offlineEventListener, false);
            }
        }
        this.open();
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} transport name
     * @return {Transport}
     * @api private
     */ createTransport(name) {
        const query = clone(this.opts.query);
        // append engine.io protocol identifier
        query.EIO = _engineIoParser.protocol;
        // transport name
        query.transport = name;
        // session id if we already have one
        if (this.id) query.sid = this.id;
        const opts = Object.assign({
        }, this.opts.transportOptions[name], this.opts, {
            query,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        });
        return new _indexJs.transports[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @api private
     */ open() {
        let transport;
        if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) transport = "websocket";
        else if (0 === this.transports.length) {
            // Emit error on next tick so it can be listened to
            this.setTimeoutFn(()=>{
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        } else transport = this.transports[0];
        this.readyState = "opening";
        // Retry with the next transport if the transport is disabled (jsonp: false)
        try {
            transport = this.createTransport(transport);
        } catch (e) {
            this.transports.shift();
            this.open();
            return;
        }
        transport.open();
        this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @api private
     */ setTransport(transport) {
        if (this.transport) this.transport.removeAllListeners();
        // set up transport
        this.transport = transport;
        // set up transport listeners
        transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", ()=>{
            this.onClose("transport close");
        });
    }
    /**
     * Probes a transport.
     *
     * @param {String} transport name
     * @api private
     */ probe(name) {
        let transport = this.createTransport(name);
        let failed = false;
        Socket.priorWebsocketSuccess = false;
        const onTransportOpen = ()=>{
            if (failed) return;
            transport.send([
                {
                    type: "ping",
                    data: "probe"
                }
            ]);
            transport.once("packet", (msg)=>{
                if (failed) return;
                if ("pong" === msg.type && "probe" === msg.data) {
                    this.upgrading = true;
                    this.emitReserved("upgrading", transport);
                    if (!transport) return;
                    Socket.priorWebsocketSuccess = "websocket" === transport.name;
                    this.transport.pause(()=>{
                        if (failed) return;
                        if ("closed" === this.readyState) return;
                        cleanup();
                        this.setTransport(transport);
                        transport.send([
                            {
                                type: "upgrade"
                            }
                        ]);
                        this.emitReserved("upgrade", transport);
                        transport = null;
                        this.upgrading = false;
                        this.flush();
                    });
                } else {
                    const err = new Error("probe error");
                    // @ts-ignore
                    err.transport = transport.name;
                    this.emitReserved("upgradeError", err);
                }
            });
        };
        function freezeTransport() {
            if (failed) return;
            // Any callback called by transport should be ignored since now
            failed = true;
            cleanup();
            transport.close();
            transport = null;
        }
        // Handle any error that happens while probing
        const onerror = (err)=>{
            const error = new Error("probe error: " + err);
            // @ts-ignore
            error.transport = transport.name;
            freezeTransport();
            this.emitReserved("upgradeError", error);
        };
        function onTransportClose() {
            onerror("transport closed");
        }
        // When the socket is closed while we're probing
        function onclose() {
            onerror("socket closed");
        }
        // When the socket is upgraded while we're probing
        function onupgrade(to) {
            if (transport && to.name !== transport.name) freezeTransport();
        }
        // Remove all listeners on the transport and on self
        const cleanup = ()=>{
            transport.removeListener("open", onTransportOpen);
            transport.removeListener("error", onerror);
            transport.removeListener("close", onTransportClose);
            this.off("close", onclose);
            this.off("upgrading", onupgrade);
        };
        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        transport.open();
    }
    /**
     * Called when connection is deemed open.
     *
     * @api private
     */ onOpen() {
        this.readyState = "open";
        Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
        this.emitReserved("open");
        this.flush();
        // we check for `readyState` in case an `open`
        // listener already closed the socket
        if ("open" === this.readyState && this.opts.upgrade && this.transport.pause) {
            let i = 0;
            const l = this.upgrades.length;
            for(; i < l; i++)this.probe(this.upgrades[i]);
        }
    }
    /**
     * Handles a packet.
     *
     * @api private
     */ onPacket(packet) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            this.emitReserved("packet", packet);
            // Socket is live - any packet counts
            this.emitReserved("heartbeat");
            switch(packet.type){
                case "open":
                    this.onHandshake(JSON.parse(packet.data));
                    break;
                case "ping":
                    this.resetPingTimeout();
                    this.sendPacket("pong");
                    this.emitReserved("ping");
                    this.emitReserved("pong");
                    break;
                case "error":
                    const err = new Error("server error");
                    // @ts-ignore
                    err.code = packet.data;
                    this.onError(err);
                    break;
                case "message":
                    this.emitReserved("data", packet.data);
                    this.emitReserved("message", packet.data);
                    break;
            }
        }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @api private
     */ onHandshake(data) {
        this.emitReserved("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this.upgrades = this.filterUpgrades(data.upgrades);
        this.pingInterval = data.pingInterval;
        this.pingTimeout = data.pingTimeout;
        this.onOpen();
        // In case open handler closes socket
        if ("closed" === this.readyState) return;
        this.resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @api private
     */ resetPingTimeout() {
        this.clearTimeoutFn(this.pingTimeoutTimer);
        this.pingTimeoutTimer = this.setTimeoutFn(()=>{
            this.onClose("ping timeout");
        }, this.pingInterval + this.pingTimeout);
        if (this.opts.autoUnref) this.pingTimeoutTimer.unref();
    }
    /**
     * Called on `drain` event
     *
     * @api private
     */ onDrain() {
        this.writeBuffer.splice(0, this.prevBufferLen);
        // setting prevBufferLen = 0 is very important
        // for example, when upgrading, upgrade packet is sent over,
        // and a nonzero prevBufferLen could cause problems on `drain`
        this.prevBufferLen = 0;
        if (0 === this.writeBuffer.length) this.emitReserved("drain");
        else this.flush();
    }
    /**
     * Flush write buffers.
     *
     * @api private
     */ flush() {
        if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            this.transport.send(this.writeBuffer);
            // keep track of current length of writeBuffer
            // splice writeBuffer and callbackBuffer on `drain`
            this.prevBufferLen = this.writeBuffer.length;
            this.emitReserved("flush");
        }
    }
    /**
     * Sends a message.
     *
     * @param {String} message.
     * @param {Function} callback function.
     * @param {Object} options.
     * @return {Socket} for chaining.
     * @api public
     */ write(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
    }
    send(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} callback function.
     * @api private
     */ sendPacket(type, data, options, fn) {
        if ("function" === typeof data) {
            fn = data;
            data = undefined;
        }
        if ("function" === typeof options) {
            fn = options;
            options = null;
        }
        if ("closing" === this.readyState || "closed" === this.readyState) return;
        options = options || {
        };
        options.compress = false !== options.compress;
        const packet = {
            type: type,
            data: data,
            options: options
        };
        this.emitReserved("packetCreate", packet);
        this.writeBuffer.push(packet);
        if (fn) this.once("flush", fn);
        this.flush();
    }
    /**
     * Closes the connection.
     *
     * @api public
     */ close() {
        const close = ()=>{
            this.onClose("forced close");
            this.transport.close();
        };
        const cleanupAndClose = ()=>{
            this.off("upgrade", cleanupAndClose);
            this.off("upgradeError", cleanupAndClose);
            close();
        };
        const waitForUpgrade = ()=>{
            // wait for upgrade to finish since we can't send packets while pausing a transport
            this.once("upgrade", cleanupAndClose);
            this.once("upgradeError", cleanupAndClose);
        };
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            if (this.writeBuffer.length) this.once("drain", ()=>{
                if (this.upgrading) waitForUpgrade();
                else close();
            });
            else if (this.upgrading) waitForUpgrade();
            else close();
        }
        return this;
    }
    /**
     * Called upon transport error
     *
     * @api private
     */ onError(err) {
        Socket.priorWebsocketSuccess = false;
        this.emitReserved("error", err);
        this.onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @api private
     */ onClose(reason, desc) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            // clear timers
            this.clearTimeoutFn(this.pingTimeoutTimer);
            // stop event from firing again for transport
            this.transport.removeAllListeners("close");
            // ensure transport won't stay open
            this.transport.close();
            // ignore further transport communication
            this.transport.removeAllListeners();
            if (typeof removeEventListener === "function") removeEventListener("offline", this.offlineEventListener, false);
            // set ready state
            this.readyState = "closed";
            // clear session id
            this.id = null;
            // emit close event
            this.emitReserved("close", reason, desc);
            // clean buffers after, so users can still
            // grab the buffers on `close` event
            this.writeBuffer = [];
            this.prevBufferLen = 0;
        }
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} server upgrades
     * @api private
     *
     */ filterUpgrades(upgrades) {
        const filteredUpgrades = [];
        let i = 0;
        const j = upgrades.length;
        for(; i < j; i++)if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
        return filteredUpgrades;
    }
}
Socket.protocol = _engineIoParser.protocol;
function clone(obj) {
    const o = {
    };
    for(let i in obj)if (obj.hasOwnProperty(i)) o[i] = obj[i];
    return o;
}

},{"./transports/index.js":"ltUaM","./util.js":"d3Esz","parseqs":"9ozfP","parseuri":"3wsji","@socket.io/component-emitter":"kgnXr","engine.io-parser":"1k1e7","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ltUaM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transports", ()=>transports
);
var _pollingXhrJs = require("./polling-xhr.js");
var _websocketJs = require("./websocket.js");
const transports = {
    websocket: _websocketJs.WS,
    polling: _pollingXhrJs.XHR
};

},{"./polling-xhr.js":"1bHFr","./websocket.js":"2R4hk","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1bHFr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "XHR", ()=>XHR
);
parcelHelpers.export(exports, "Request", ()=>Request
);
/* global attachEvent */ var _xmlhttprequestJs = require("./xmlhttprequest.js");
var _xmlhttprequestJsDefault = parcelHelpers.interopDefault(_xmlhttprequestJs);
var _globalThisJs = require("../globalThis.js");
var _globalThisJsDefault = parcelHelpers.interopDefault(_globalThisJs);
var _utilJs = require("../util.js");
var _componentEmitter = require("@socket.io/component-emitter");
var _pollingJs = require("./polling.js");
/**
 * Empty function
 */ function empty() {
}
const hasXHR2 = function() {
    const xhr = new _xmlhttprequestJsDefault.default({
        xdomain: false
    });
    return null != xhr.responseType;
}();
class XHR extends _pollingJs.Polling {
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @api public
     */ constructor(opts){
        super(opts);
        if (typeof location !== "undefined") {
            const isSSL = "https:" === location.protocol;
            let port = location.port;
            // some user agents have empty `location.port`
            if (!port) port = isSSL ? "443" : "80";
            this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
            this.xs = opts.secure !== isSSL;
        }
        /**
         * XHR supports binary
         */ const forceBase64 = opts && opts.forceBase64;
        this.supportsBinary = hasXHR2 && !forceBase64;
    }
    /**
     * Creates a request.
     *
     * @param {String} method
     * @api private
     */ request(opts = {
    }) {
        Object.assign(opts, {
            xd: this.xd,
            xs: this.xs
        }, this.opts);
        return new Request(this.uri(), opts);
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @api private
     */ doWrite(data, fn) {
        const req = this.request({
            method: "POST",
            data: data
        });
        req.on("success", fn);
        req.on("error", (err)=>{
            this.onError("xhr post error", err);
        });
    }
    /**
     * Starts a poll cycle.
     *
     * @api private
     */ doPoll() {
        const req = this.request();
        req.on("data", this.onData.bind(this));
        req.on("error", (err)=>{
            this.onError("xhr poll error", err);
        });
        this.pollXhr = req;
    }
}
class Request extends _componentEmitter.Emitter {
    /**
     * Request constructor
     *
     * @param {Object} options
     * @api public
     */ constructor(uri, opts){
        super();
        _utilJs.installTimerFunctions(this, opts);
        this.opts = opts;
        this.method = opts.method || "GET";
        this.uri = uri;
        this.async = false !== opts.async;
        this.data = undefined !== opts.data ? opts.data : null;
        this.create();
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @api private
     */ create() {
        const opts = _utilJs.pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        opts.xdomain = !!this.opts.xd;
        opts.xscheme = !!this.opts.xs;
        const xhr = this.xhr = new _xmlhttprequestJsDefault.default(opts);
        try {
            xhr.open(this.method, this.uri, this.async);
            try {
                if (this.opts.extraHeaders) {
                    xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                    for(let i in this.opts.extraHeaders)if (this.opts.extraHeaders.hasOwnProperty(i)) xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
                }
            } catch (e) {
            }
            if ("POST" === this.method) try {
                xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
            } catch (e1) {
            }
            try {
                xhr.setRequestHeader("Accept", "*/*");
            } catch (e2) {
            }
            // ie6 check
            if ("withCredentials" in xhr) xhr.withCredentials = this.opts.withCredentials;
            if (this.opts.requestTimeout) xhr.timeout = this.opts.requestTimeout;
            xhr.onreadystatechange = ()=>{
                if (4 !== xhr.readyState) return;
                if (200 === xhr.status || 1223 === xhr.status) this.onLoad();
                else // make sure the `error` event handler that's user-set
                // does not throw in the same tick and gets caught here
                this.setTimeoutFn(()=>{
                    this.onError(typeof xhr.status === "number" ? xhr.status : 0);
                }, 0);
            };
            xhr.send(this.data);
        } catch (e) {
            // Need to defer since .create() is called directly from the constructor
            // and thus the 'error' event can only be only bound *after* this exception
            // occurs.  Therefore, also, we cannot throw here at all.
            this.setTimeoutFn(()=>{
                this.onError(e);
            }, 0);
            return;
        }
        if (typeof document !== "undefined") {
            this.index = Request.requestsCount++;
            Request.requests[this.index] = this;
        }
    }
    /**
     * Called upon successful response.
     *
     * @api private
     */ onSuccess() {
        this.emit("success");
        this.cleanup();
    }
    /**
     * Called if we have data.
     *
     * @api private
     */ onData(data) {
        this.emit("data", data);
        this.onSuccess();
    }
    /**
     * Called upon error.
     *
     * @api private
     */ onError(err) {
        this.emit("error", err);
        this.cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @api private
     */ cleanup(fromError) {
        if ("undefined" === typeof this.xhr || null === this.xhr) return;
        this.xhr.onreadystatechange = empty;
        if (fromError) try {
            this.xhr.abort();
        } catch (e) {
        }
        if (typeof document !== "undefined") delete Request.requests[this.index];
        this.xhr = null;
    }
    /**
     * Called upon load.
     *
     * @api private
     */ onLoad() {
        const data = this.xhr.responseText;
        if (data !== null) this.onData(data);
    }
    /**
     * Aborts the request.
     *
     * @api public
     */ abort() {
        this.cleanup();
    }
}
Request.requestsCount = 0;
Request.requests = {
};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */ if (typeof document !== "undefined") {
    // @ts-ignore
    if (typeof attachEvent === "function") // @ts-ignore
    attachEvent("onunload", unloadHandler);
    else if (typeof addEventListener === "function") {
        const terminationEvent = "onpagehide" in _globalThisJsDefault.default ? "pagehide" : "unload";
        addEventListener(terminationEvent, unloadHandler, false);
    }
}
function unloadHandler() {
    for(let i in Request.requests)if (Request.requests.hasOwnProperty(i)) Request.requests[i].abort();
}

},{"./xmlhttprequest.js":"835QK","../globalThis.js":"gdRVd","../util.js":"d3Esz","@socket.io/component-emitter":"kgnXr","./polling.js":"9pBIv","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"835QK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// browser shim for xmlhttprequest module
var _hasCors = require("has-cors");
var _hasCorsDefault = parcelHelpers.interopDefault(_hasCors);
var _globalThisJs = require("../globalThis.js");
var _globalThisJsDefault = parcelHelpers.interopDefault(_globalThisJs);
exports.default = function(opts) {
    const xdomain = opts.xdomain;
    // XMLHttpRequest can be disabled on IE
    try {
        if ("undefined" !== typeof XMLHttpRequest && (!xdomain || _hasCorsDefault.default)) return new XMLHttpRequest();
    } catch (e) {
    }
    if (!xdomain) try {
        return new _globalThisJsDefault.default[[
            "Active"
        ].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e1) {
    }
};

},{"has-cors":"hESuY","../globalThis.js":"gdRVd","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hESuY":[function(require,module,exports) {
/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */ try {
    module.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
} catch (err) {
    // if XMLHttp support is disabled in IE then it will throw
    // when trying to create
    module.exports = false;
}

},{}],"gdRVd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (()=>{
    if (typeof self !== "undefined") return self;
    else if (typeof window !== "undefined") return window;
    else return Function("return this")();
})();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"d3Esz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pick", ()=>pick
);
parcelHelpers.export(exports, "installTimerFunctions", ()=>installTimerFunctions
);
var _globalThisJs = require("./globalThis.js");
var _globalThisJsDefault = parcelHelpers.interopDefault(_globalThisJs);
function pick(obj, ...attr) {
    return attr.reduce((acc, k)=>{
        if (obj.hasOwnProperty(k)) acc[k] = obj[k];
        return acc;
    }, {
    });
}
// Keep a reference to the real timeout functions so they can be used when overridden
const NATIVE_SET_TIMEOUT = setTimeout;
const NATIVE_CLEAR_TIMEOUT = clearTimeout;
function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
        obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(_globalThisJsDefault.default);
        obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(_globalThisJsDefault.default);
    } else {
        obj.setTimeoutFn = setTimeout.bind(_globalThisJsDefault.default);
        obj.clearTimeoutFn = clearTimeout.bind(_globalThisJsDefault.default);
    }
}

},{"./globalThis.js":"gdRVd","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kgnXr":[function(require,module,exports) {
/**
 * Expose `Emitter`.
 */ exports.Emitter = Emitter;
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */ function Emitter(obj) {
    if (obj) return mixin(obj);
}
/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */ function mixin(obj) {
    for(var key in Emitter.prototype)obj[key] = Emitter.prototype[key];
    return obj;
}
/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {
    };
    (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
    return this;
};
/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.once = function(event, fn) {
    function on() {
        this.off(event, on);
        fn.apply(this, arguments);
    }
    on.fn = fn;
    this.on(event, on);
    return this;
};
/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {
    };
    // all
    if (0 == arguments.length) {
        this._callbacks = {
        };
        return this;
    }
    // specific event
    var callbacks = this._callbacks['$' + event];
    if (!callbacks) return this;
    // remove all handlers
    if (1 == arguments.length) {
        delete this._callbacks['$' + event];
        return this;
    }
    // remove specific handler
    var cb;
    for(var i = 0; i < callbacks.length; i++){
        cb = callbacks[i];
        if (cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1);
            break;
        }
    }
    // Remove event specific arrays for event types that no
    // one is subscribed for to avoid memory leak.
    if (callbacks.length === 0) delete this._callbacks['$' + event];
    return this;
};
/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */ Emitter.prototype.emit = function(event) {
    this._callbacks = this._callbacks || {
    };
    var args = new Array(arguments.length - 1), callbacks = this._callbacks['$' + event];
    for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    if (callbacks) {
        callbacks = callbacks.slice(0);
        for(var i = 0, len = callbacks.length; i < len; ++i)callbacks[i].apply(this, args);
    }
    return this;
};
// alias used for reserved events (protected method)
Emitter.prototype.emitReserved = Emitter.prototype.emit;
/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */ Emitter.prototype.listeners = function(event) {
    this._callbacks = this._callbacks || {
    };
    return this._callbacks['$' + event] || [];
};
/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */ Emitter.prototype.hasListeners = function(event) {
    return !!this.listeners(event).length;
};

},{}],"9pBIv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Polling", ()=>Polling
);
var _transportJs = require("../transport.js");
var _yeast = require("yeast");
var _yeastDefault = parcelHelpers.interopDefault(_yeast);
var _parseqs = require("parseqs");
var _parseqsDefault = parcelHelpers.interopDefault(_parseqs);
var _engineIoParser = require("engine.io-parser");
class Polling extends _transportJs.Transport {
    constructor(){
        super(...arguments);
        this.polling = false;
    }
    /**
     * Transport name.
     */ get name() {
        return "polling";
    }
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @api private
     */ doOpen() {
        this.poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} callback upon buffers are flushed and transport is paused
     * @api private
     */ pause(onPause) {
        this.readyState = "pausing";
        const pause = ()=>{
            this.readyState = "paused";
            onPause();
        };
        if (this.polling || !this.writable) {
            let total = 0;
            if (this.polling) {
                total++;
                this.once("pollComplete", function() {
                    --total || pause();
                });
            }
            if (!this.writable) {
                total++;
                this.once("drain", function() {
                    --total || pause();
                });
            }
        } else pause();
    }
    /**
     * Starts polling cycle.
     *
     * @api public
     */ poll() {
        this.polling = true;
        this.doPoll();
        this.emit("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @api private
     */ onData(data) {
        const callback = (packet)=>{
            // if its the first message we consider the transport open
            if ("opening" === this.readyState && packet.type === "open") this.onOpen();
            // if its a close packet, we close the ongoing requests
            if ("close" === packet.type) {
                this.onClose();
                return false;
            }
            // otherwise bypass onData and handle the message
            this.onPacket(packet);
        };
        // decode payload
        _engineIoParser.decodePayload(data, this.socket.binaryType).forEach(callback);
        // if an event did not trigger closing
        if ("closed" !== this.readyState) {
            // if we got data we're not polling
            this.polling = false;
            this.emit("pollComplete");
            if ("open" === this.readyState) this.poll();
        }
    }
    /**
     * For polling, send a close packet.
     *
     * @api private
     */ doClose() {
        const close = ()=>{
            this.write([
                {
                    type: "close"
                }
            ]);
        };
        if ("open" === this.readyState) close();
        else // in case we're trying to close while
        // handshaking is in progress (GH-164)
        this.once("open", close);
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} data packets
     * @param {Function} drain callback
     * @api private
     */ write(packets) {
        this.writable = false;
        _engineIoParser.encodePayload(packets, (data)=>{
            this.doWrite(data, ()=>{
                this.writable = true;
                this.emit("drain");
            });
        });
    }
    /**
     * Generates uri for connection.
     *
     * @api private
     */ uri() {
        let query = this.query || {
        };
        const schema = this.opts.secure ? "https" : "http";
        let port = "";
        // cache busting is forced
        if (false !== this.opts.timestampRequests) query[this.opts.timestampParam] = _yeastDefault.default();
        if (!this.supportsBinary && !query.sid) query.b64 = 1;
        // avoid port if default for schema
        if (this.opts.port && ("https" === schema && Number(this.opts.port) !== 443 || "http" === schema && Number(this.opts.port) !== 80)) port = ":" + this.opts.port;
        const encodedQuery = _parseqsDefault.default.encode(query);
        const ipv6 = this.opts.hostname.indexOf(":") !== -1;
        return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
    }
}

},{"../transport.js":"heRxf","yeast":"f8fLx","parseqs":"9ozfP","engine.io-parser":"1k1e7","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"heRxf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transport", ()=>Transport
);
var _engineIoParser = require("engine.io-parser");
var _componentEmitter = require("@socket.io/component-emitter");
var _utilJs = require("./util.js");
class Transport extends _componentEmitter.Emitter {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} options.
     * @api private
     */ constructor(opts){
        super();
        this.writable = false;
        _utilJs.installTimerFunctions(this, opts);
        this.opts = opts;
        this.query = opts.query;
        this.readyState = "";
        this.socket = opts.socket;
    }
    /**
     * Emits an error.
     *
     * @param {String} str
     * @return {Transport} for chaining
     * @api protected
     */ onError(msg, desc) {
        const err = new Error(msg);
        // @ts-ignore
        err.type = "TransportError";
        // @ts-ignore
        err.description = desc;
        super.emit("error", err);
        return this;
    }
    /**
     * Opens the transport.
     *
     * @api public
     */ open() {
        if ("closed" === this.readyState || "" === this.readyState) {
            this.readyState = "opening";
            this.doOpen();
        }
        return this;
    }
    /**
     * Closes the transport.
     *
     * @api public
     */ close() {
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.doClose();
            this.onClose();
        }
        return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     * @api public
     */ send(packets) {
        if ("open" === this.readyState) this.write(packets);
    }
    /**
     * Called upon open
     *
     * @api protected
     */ onOpen() {
        this.readyState = "open";
        this.writable = true;
        super.emit("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @api protected
     */ onData(data) {
        const packet = _engineIoParser.decodePacket(data, this.socket.binaryType);
        this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @api protected
     */ onPacket(packet) {
        super.emit("packet", packet);
    }
    /**
     * Called upon close.
     *
     * @api protected
     */ onClose() {
        this.readyState = "closed";
        super.emit("close");
    }
}

},{"engine.io-parser":"1k1e7","@socket.io/component-emitter":"kgnXr","./util.js":"d3Esz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1k1e7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "protocol", ()=>protocol
);
parcelHelpers.export(exports, "encodePacket", ()=>_encodePacketJsDefault.default
);
parcelHelpers.export(exports, "encodePayload", ()=>encodePayload
);
parcelHelpers.export(exports, "decodePacket", ()=>_decodePacketJsDefault.default
);
parcelHelpers.export(exports, "decodePayload", ()=>decodePayload
);
var _encodePacketJs = require("./encodePacket.js");
var _encodePacketJsDefault = parcelHelpers.interopDefault(_encodePacketJs);
var _decodePacketJs = require("./decodePacket.js");
var _decodePacketJsDefault = parcelHelpers.interopDefault(_decodePacketJs);
const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
const encodePayload = (packets, callback)=>{
    // some packets may be added to the array while encoding, so the initial length must be saved
    const length = packets.length;
    const encodedPackets = new Array(length);
    let count = 0;
    packets.forEach((packet, i)=>{
        // force base64 encoding for binary packets
        _encodePacketJsDefault.default(packet, false, (encodedPacket)=>{
            encodedPackets[i] = encodedPacket;
            if (++count === length) callback(encodedPackets.join(SEPARATOR));
        });
    });
};
const decodePayload = (encodedPayload, binaryType)=>{
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for(let i = 0; i < encodedPackets.length; i++){
        const decodedPacket = _decodePacketJsDefault.default(encodedPackets[i], binaryType);
        packets.push(decodedPacket);
        if (decodedPacket.type === "error") break;
    }
    return packets;
};
const protocol = 4;

},{"./encodePacket.js":"k2Mjc","./decodePacket.js":"gFioO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"k2Mjc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _commonsJs = require("./commons.js");
const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
// ArrayBuffer.isView method is not defined in IE10
const isView = (obj)=>{
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
const encodePacket = ({ type , data  }, supportsBinary, callback)=>{
    if (withNativeBlob && data instanceof Blob) {
        if (supportsBinary) return callback(data);
        else return encodeBlobAsBase64(data, callback);
    } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
        if (supportsBinary) return callback(data);
        else return encodeBlobAsBase64(new Blob([
            data
        ]), callback);
    }
    // plain string
    return callback(_commonsJs.PACKET_TYPES[type] + (data || ""));
};
const encodeBlobAsBase64 = (data, callback)=>{
    const fileReader = new FileReader();
    fileReader.onload = function() {
        const content = fileReader.result.split(",")[1];
        callback("b" + content);
    };
    return fileReader.readAsDataURL(data);
};
exports.default = encodePacket;

},{"./commons.js":"bXajh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bXajh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PACKET_TYPES", ()=>PACKET_TYPES
);
parcelHelpers.export(exports, "PACKET_TYPES_REVERSE", ()=>PACKET_TYPES_REVERSE
);
parcelHelpers.export(exports, "ERROR_PACKET", ()=>ERROR_PACKET
);
const PACKET_TYPES = Object.create(null); // no Map = no polyfill
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach((key)=>{
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = {
    type: "error",
    data: "parser error"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gFioO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _commonsJs = require("./commons.js");
var _base64Arraybuffer = require("base64-arraybuffer");
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const decodePacket = (encodedPacket, binaryType)=>{
    if (typeof encodedPacket !== "string") return {
        type: "message",
        data: mapBinary(encodedPacket, binaryType)
    };
    const type = encodedPacket.charAt(0);
    if (type === "b") return {
        type: "message",
        data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
    const packetType = _commonsJs.PACKET_TYPES_REVERSE[type];
    if (!packetType) return _commonsJs.ERROR_PACKET;
    return encodedPacket.length > 1 ? {
        type: _commonsJs.PACKET_TYPES_REVERSE[type],
        data: encodedPacket.substring(1)
    } : {
        type: _commonsJs.PACKET_TYPES_REVERSE[type]
    };
};
const decodeBase64Packet = (data, binaryType)=>{
    if (withNativeArrayBuffer) {
        const decoded = _base64Arraybuffer.decode(data);
        return mapBinary(decoded, binaryType);
    } else return {
        base64: true,
        data
    }; // fallback for old browsers
};
const mapBinary = (data, binaryType)=>{
    switch(binaryType){
        case "blob":
            return data instanceof ArrayBuffer ? new Blob([
                data
            ]) : data;
        case "arraybuffer":
        default:
            return data; // assuming the data is already an ArrayBuffer
    }
};
exports.default = decodePacket;

},{"./commons.js":"bXajh","base64-arraybuffer":"jdSE9","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jdSE9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decode", ()=>decode
);
parcelHelpers.export(exports, "encode", ()=>encode
);
/*
 * base64-arraybuffer 1.0.1 <https://github.com/niklasvh/base64-arraybuffer>
 * Copyright (c) 2021 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */ var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for(var i = 0; i < chars.length; i++)lookup[chars.charCodeAt(i)] = i;
var encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer), i1, len = bytes.length, base64 = '';
    for(i1 = 0; i1 < len; i1 += 3){
        base64 += chars[bytes[i1] >> 2];
        base64 += chars[(bytes[i1] & 3) << 4 | bytes[i1 + 1] >> 4];
        base64 += chars[(bytes[i1 + 1] & 15) << 2 | bytes[i1 + 2] >> 6];
        base64 += chars[bytes[i1 + 2] & 63];
    }
    if (len % 3 === 2) base64 = base64.substring(0, base64.length - 1) + '=';
    else if (len % 3 === 1) base64 = base64.substring(0, base64.length - 2) + '==';
    return base64;
};
var decode = function(base64) {
    var bufferLength = base64.length * 0.75, len = base64.length, i2, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') bufferLength--;
    }
    var arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for(i2 = 0; i2 < len; i2 += 4){
        encoded1 = lookup[base64.charCodeAt(i2)];
        encoded2 = lookup[base64.charCodeAt(i2 + 1)];
        encoded3 = lookup[base64.charCodeAt(i2 + 2)];
        encoded4 = lookup[base64.charCodeAt(i2 + 3)];
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return arraybuffer;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"f8fLx":[function(require,module,exports) {
'use strict';
var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''), length = 64, map = {
}, seed = 0, i = 0, prev;
/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */ function encode(num) {
    var encoded = '';
    do {
        encoded = alphabet[num % length] + encoded;
        num = Math.floor(num / length);
    }while (num > 0)
    return encoded;
}
/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */ function decode(str) {
    var decoded = 0;
    for(i = 0; i < str.length; i++)decoded = decoded * length + map[str.charAt(i)];
    return decoded;
}
/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */ function yeast() {
    var now = encode(+new Date());
    if (now !== prev) return seed = 0, prev = now;
    return now + '.' + encode(seed++);
}
//
// Map each character to its index.
//
for(; i < length; i++)map[alphabet[i]] = i;
//
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;

},{}],"9ozfP":[function(require,module,exports) {
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */ exports.encode = function(obj) {
    var str = '';
    for(var i in obj)if (obj.hasOwnProperty(i)) {
        if (str.length) str += '&';
        str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
    return str;
};
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */ exports.decode = function(qs) {
    var qry = {
    };
    var pairs = qs.split('&');
    for(var i = 0, l = pairs.length; i < l; i++){
        var pair = pairs[i].split('=');
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
};

},{}],"2R4hk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WS", ()=>WS
);
var _transportJs = require("../transport.js");
var _parseqs = require("parseqs");
var _parseqsDefault = parcelHelpers.interopDefault(_parseqs);
var _yeast = require("yeast");
var _yeastDefault = parcelHelpers.interopDefault(_yeast);
var _utilJs = require("../util.js");
var _websocketConstructorJs = require("./websocket-constructor.js");
var _engineIoParser = require("engine.io-parser");
var Buffer = require("buffer").Buffer;
// detect ReactNative environment
const isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
class WS extends _transportJs.Transport {
    /**
     * WebSocket transport constructor.
     *
     * @api {Object} connection options
     * @api public
     */ constructor(opts){
        super(opts);
        this.supportsBinary = !opts.forceBase64;
    }
    /**
     * Transport name.
     *
     * @api public
     */ get name() {
        return "websocket";
    }
    /**
     * Opens socket.
     *
     * @api private
     */ doOpen() {
        if (!this.check()) // let probe timeout
        return;
        const uri = this.uri();
        const protocols = this.opts.protocols;
        // React Native only supports the 'headers' option, and will print a warning if anything else is passed
        const opts = isReactNative ? {
        } : _utilJs.pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        if (this.opts.extraHeaders) opts.headers = this.opts.extraHeaders;
        try {
            this.ws = _websocketConstructorJs.usingBrowserWebSocket && !isReactNative ? protocols ? new _websocketConstructorJs.WebSocket(uri, protocols) : new _websocketConstructorJs.WebSocket(uri) : new _websocketConstructorJs.WebSocket(uri, protocols, opts);
        } catch (err) {
            return this.emit("error", err);
        }
        this.ws.binaryType = this.socket.binaryType || _websocketConstructorJs.defaultBinaryType;
        this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @api private
     */ addEventListeners() {
        this.ws.onopen = ()=>{
            if (this.opts.autoUnref) this.ws._socket.unref();
            this.onOpen();
        };
        this.ws.onclose = this.onClose.bind(this);
        this.ws.onmessage = (ev)=>this.onData(ev.data)
        ;
        this.ws.onerror = (e)=>this.onError("websocket error", e)
        ;
    }
    /**
     * Writes data to socket.
     *
     * @param {Array} array of packets.
     * @api private
     */ write(packets) {
        this.writable = false;
        // encodePacket efficient as it uses WS framing
        // no need for encodePayload
        for(let i = 0; i < packets.length; i++){
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            _engineIoParser.encodePacket(packet, this.supportsBinary, (data)=>{
                // always create a new object (GH-437)
                const opts = {
                };
                if (!_websocketConstructorJs.usingBrowserWebSocket) {
                    if (packet.options) opts.compress = packet.options.compress;
                    if (this.opts.perMessageDeflate) {
                        const len = "string" === typeof data ? Buffer.byteLength(data) : data.length;
                        if (len < this.opts.perMessageDeflate.threshold) opts.compress = false;
                    }
                }
                // Sometimes the websocket has already been closed but the browser didn't
                // have a chance of informing us about it yet, in that case send will
                // throw an error
                try {
                    if (_websocketConstructorJs.usingBrowserWebSocket) // TypeError is thrown when passing the second argument on Safari
                    this.ws.send(data);
                    else this.ws.send(data, opts);
                } catch (e) {
                }
                if (lastPacket) // fake drain
                // defer to next tick to allow Socket to clear writeBuffer
                _websocketConstructorJs.nextTick(()=>{
                    this.writable = true;
                    this.emit("drain");
                }, this.setTimeoutFn);
            });
        }
    }
    /**
     * Closes socket.
     *
     * @api private
     */ doClose() {
        if (typeof this.ws !== "undefined") {
            this.ws.close();
            this.ws = null;
        }
    }
    /**
     * Generates uri for connection.
     *
     * @api private
     */ uri() {
        let query = this.query || {
        };
        const schema = this.opts.secure ? "wss" : "ws";
        let port = "";
        // avoid port if default for schema
        if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) port = ":" + this.opts.port;
        // append timestamp to URI
        if (this.opts.timestampRequests) query[this.opts.timestampParam] = _yeastDefault.default();
        // communicate binary support capabilities
        if (!this.supportsBinary) query.b64 = 1;
        const encodedQuery = _parseqsDefault.default.encode(query);
        const ipv6 = this.opts.hostname.indexOf(":") !== -1;
        return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
    }
    /**
     * Feature detection for WebSocket.
     *
     * @return {Boolean} whether this transport is available.
     * @api public
     */ check() {
        return !!_websocketConstructorJs.WebSocket && !("__initialize" in _websocketConstructorJs.WebSocket && this.name === WS.prototype.name);
    }
}

},{"buffer":"bOetu","../transport.js":"heRxf","parseqs":"9ozfP","yeast":"f8fLx","../util.js":"d3Esz","./websocket-constructor.js":"9jCat","engine.io-parser":"1k1e7","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bOetu":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';
var base64 = require('base64-js');
var ieee754 = require('ieee754');
var customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
var K_MAX_LENGTH = 2147483647;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        var arr = new Uint8Array(1);
        var proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    var buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    var valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    var b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    var length = byteLength(string, encoding) | 0;
    var buf = createBuffer(length);
    var actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    var buf = createBuffer(length);
    for(var i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    var buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    var i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for(i = 0; i < list.length; ++i){
        var buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) Buffer.from(buf).copy(buffer, pos);
            else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof string);
    var len = string.length;
    var mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    var loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return utf8Slice(this, start, end);
        case 'ascii':
            return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return latin1Slice(this, start, end);
        case 'base64':
            return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(var i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(var i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(var i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    var length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for(var i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 2147483647) byteOffset = 2147483647;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 255 // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    var i1;
    if (dir) {
        var foundIndex = -1;
        for(i1 = byteOffset; i1 < arrLength; i1++)if (read(arr, i1) === read(val, foundIndex === -1 ? 0 : i1 - foundIndex)) {
            if (foundIndex === -1) foundIndex = i1;
            if (i1 - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i1 -= i1 - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i1 = byteOffset; i1 >= 0; i1--){
            var found = true;
            for(var j = 0; j < valLength; j++)if (read(arr, i1 + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i1;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    var strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    for(var i = 0; i < length; ++i){
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while(i < end){
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 128) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 192) === 128) {
                        tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                        if (tempCodePoint > 127) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                        if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                        if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 65533;
            bytesPerSequence = 1;
        } else if (codePoint > 65535) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 127);
    return ret;
}
function latin1Slice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = '';
    for(var i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(var i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    var newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength1 && (mul *= 256))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength2, this.length);
    var val = this[offset + --byteLength2];
    var mul = 1;
    while(byteLength2 > 0 && (mul *= 256))val += this[offset + --byteLength2] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength3, noAssert) {
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength3, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength3 && (mul *= 256))val += this[offset + i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength3);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength4, noAssert) {
    offset = offset >>> 0;
    byteLength4 = byteLength4 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength4, this.length);
    var i = byteLength4;
    var mul = 1;
    var val = this[offset + --i];
    while(i > 0 && (mul *= 256))val += this[offset + --i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength4);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 128)) return this[offset];
    return (255 - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength5, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength5 = byteLength5 >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength5) - 1;
        checkInt(this, value, offset, byteLength5, maxBytes, 0);
    }
    var mul = 1;
    var i = 0;
    this[offset] = value & 255;
    while(++i < byteLength5 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength5;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength6, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength6 = byteLength6 >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength6) - 1;
        checkInt(this, value, offset, byteLength6, maxBytes, 0);
    }
    var i = byteLength6 - 1;
    var mul = 1;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength6;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength7, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength7 - 1);
        checkInt(this, value, offset, byteLength7, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 255;
    while(++i < byteLength7 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength7;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength8, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength8 - 1);
        checkInt(this, value, offset, byteLength8, limit - 1, -limit);
    }
    var i = byteLength8 - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength8;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
    if (value < 0) value = 255 + value + 1;
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    if (value < 0) value = 4294967295 + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    var len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        var len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// HELPER FUNCTIONS
// ================
var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for(var i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 55295 && codePoint < 57344) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 56319) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 56320) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function asciiToBytes(str) {
    var byteArray = [];
    for(var i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 255);
    return byteArray;
}
function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for(var i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    for(var i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable = function() {
    var alphabet = '0123456789abcdef';
    var table = new Array(256);
    for(var i = 0; i < 16; ++i){
        var i16 = i * 16;
        for(var j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();

},{"base64-js":"nR26C","ieee754":"ljh7N"}],"nR26C":[function(require,module,exports) {
'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len1 = b64.length;
    if (len1 % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len1;
    var placeHoldersLen = validLen === len1 ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i1;
    for(i1 = 0; i1 < len2; i1 += 4){
        tmp = revLookup[b64.charCodeAt(i1)] << 18 | revLookup[b64.charCodeAt(i1 + 1)] << 12 | revLookup[b64.charCodeAt(i1 + 2)] << 6 | revLookup[b64.charCodeAt(i1 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i1)] << 2 | revLookup[b64.charCodeAt(i1 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i1)] << 10 | revLookup[b64.charCodeAt(i1 + 1)] << 4 | revLookup[b64.charCodeAt(i1 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i2 = start; i2 < end; i2 += 3){
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len3 = uint8.length;
    var extraBytes = len3 % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i3 = 0, len2 = len3 - extraBytes; i3 < len2; i3 += maxChunkLength)parts.push(encodeChunk(uint8, i3, i3 + maxChunkLength > len2 ? len2 : i3 + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len3 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len3 - 2] << 8) + uint8[len3 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + '=');
    }
    return parts.join('');
}

},{}],"ljh7N":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"9jCat":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nextTick", ()=>nextTick
);
parcelHelpers.export(exports, "WebSocket", ()=>WebSocket
);
parcelHelpers.export(exports, "usingBrowserWebSocket", ()=>usingBrowserWebSocket
);
parcelHelpers.export(exports, "defaultBinaryType", ()=>defaultBinaryType
);
var _globalThisJs = require("../globalThis.js");
var _globalThisJsDefault = parcelHelpers.interopDefault(_globalThisJs);
const nextTick = (()=>{
    const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
    if (isPromiseAvailable) return (cb)=>Promise.resolve().then(cb)
    ;
    else return (cb, setTimeoutFn)=>setTimeoutFn(cb, 0)
    ;
})();
const WebSocket = _globalThisJsDefault.default.WebSocket || _globalThisJsDefault.default.MozWebSocket;
const usingBrowserWebSocket = true;
const defaultBinaryType = "arraybuffer";

},{"../globalThis.js":"gdRVd","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"31FZk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Socket", ()=>Socket
);
var _socketIoParser = require("socket.io-parser");
var _onJs = require("./on.js");
var _componentEmitter = require("@socket.io/component-emitter");
/**
 * Internal events.
 * These events can't be emitted by the user.
 */ const RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1
});
class Socket extends _componentEmitter.Emitter {
    /**
     * `Socket` constructor.
     *
     * @public
     */ constructor(io, nsp, opts){
        super();
        this.connected = false;
        this.disconnected = true;
        this.receiveBuffer = [];
        this.sendBuffer = [];
        this.ids = 0;
        this.acks = {
        };
        this.flags = {
        };
        this.io = io;
        this.nsp = nsp;
        if (opts && opts.auth) this.auth = opts.auth;
        if (this.io._autoConnect) this.open();
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */ subEvents() {
        if (this.subs) return;
        const io = this.io;
        this.subs = [
            _onJs.on(io, "open", this.onopen.bind(this)),
            _onJs.on(io, "packet", this.onpacket.bind(this)),
            _onJs.on(io, "error", this.onerror.bind(this)),
            _onJs.on(io, "close", this.onclose.bind(this)), 
        ];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects
     */ get active() {
        return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @public
     */ connect() {
        if (this.connected) return this;
        this.subEvents();
        if (!this.io["_reconnecting"]) this.io.open(); // ensure open
        if ("open" === this.io._readyState) this.onopen();
        return this;
    }
    /**
     * Alias for connect()
     */ open() {
        return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * @return self
     * @public
     */ send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @return self
     * @public
     */ emit(ev, ...args) {
        if (RESERVED_EVENTS.hasOwnProperty(ev)) throw new Error('"' + ev + '" is a reserved event name');
        args.unshift(ev);
        const packet = {
            type: _socketIoParser.PacketType.EVENT,
            data: args
        };
        packet.options = {
        };
        packet.options.compress = this.flags.compress !== false;
        // event ack callback
        if ("function" === typeof args[args.length - 1]) {
            const id = this.ids++;
            const ack = args.pop();
            this._registerAckCallback(id, ack);
            packet.id = id;
        }
        const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
        const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
        if (discardPacket) ;
        else if (this.connected) this.packet(packet);
        else this.sendBuffer.push(packet);
        this.flags = {
        };
        return this;
    }
    /**
     * @private
     */ _registerAckCallback(id, ack) {
        const timeout = this.flags.timeout;
        if (timeout === undefined) {
            this.acks[id] = ack;
            return;
        }
        // @ts-ignore
        const timer = this.io.setTimeoutFn(()=>{
            delete this.acks[id];
            for(let i = 0; i < this.sendBuffer.length; i++)if (this.sendBuffer[i].id === id) this.sendBuffer.splice(i, 1);
            ack.call(this, new Error("operation has timed out"));
        }, timeout);
        this.acks[id] = (...args)=>{
            // @ts-ignore
            this.io.clearTimeoutFn(timer);
            ack.apply(this, [
                null,
                ...args
            ]);
        };
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */ packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */ onopen() {
        if (typeof this.auth == "function") this.auth((data)=>{
            this.packet({
                type: _socketIoParser.PacketType.CONNECT,
                data
            });
        });
        else this.packet({
            type: _socketIoParser.PacketType.CONNECT,
            data: this.auth
        });
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */ onerror(err) {
        if (!this.connected) this.emitReserved("connect_error", err);
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @private
     */ onclose(reason) {
        this.connected = false;
        this.disconnected = true;
        delete this.id;
        this.emitReserved("disconnect", reason);
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */ onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace) return;
        switch(packet.type){
            case _socketIoParser.PacketType.CONNECT:
                if (packet.data && packet.data.sid) {
                    const id = packet.data.sid;
                    this.onconnect(id);
                } else this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case _socketIoParser.PacketType.EVENT:
                this.onevent(packet);
                break;
            case _socketIoParser.PacketType.BINARY_EVENT:
                this.onevent(packet);
                break;
            case _socketIoParser.PacketType.ACK:
                this.onack(packet);
                break;
            case _socketIoParser.PacketType.BINARY_ACK:
                this.onack(packet);
                break;
            case _socketIoParser.PacketType.DISCONNECT:
                this.ondisconnect();
                break;
            case _socketIoParser.PacketType.CONNECT_ERROR:
                this.destroy();
                const err = new Error(packet.data.message);
                // @ts-ignore
                err.data = packet.data.data;
                this.emitReserved("connect_error", err);
                break;
        }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */ onevent(packet) {
        const args = packet.data || [];
        if (null != packet.id) args.push(this.ack(packet.id));
        if (this.connected) this.emitEvent(args);
        else this.receiveBuffer.push(Object.freeze(args));
    }
    emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
            const listeners = this._anyListeners.slice();
            for (const listener of listeners)listener.apply(this, args);
        }
        super.emit.apply(this, args);
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */ ack(id) {
        const self = this;
        let sent = false;
        return function(...args) {
            // prevent double callbacks
            if (sent) return;
            sent = true;
            self.packet({
                type: _socketIoParser.PacketType.ACK,
                id: id,
                data: args
            });
        };
    }
    /**
     * Called upon a server acknowlegement.
     *
     * @param packet
     * @private
     */ onack(packet) {
        const ack = this.acks[packet.id];
        if ("function" === typeof ack) {
            ack.apply(this, packet.data);
            delete this.acks[packet.id];
        }
    }
    /**
     * Called upon server connect.
     *
     * @private
     */ onconnect(id) {
        this.id = id;
        this.connected = true;
        this.disconnected = false;
        this.emitBuffered();
        this.emitReserved("connect");
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */ emitBuffered() {
        this.receiveBuffer.forEach((args)=>this.emitEvent(args)
        );
        this.receiveBuffer = [];
        this.sendBuffer.forEach((packet)=>this.packet(packet)
        );
        this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */ ondisconnect() {
        this.destroy();
        this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */ destroy() {
        if (this.subs) {
            // clean subscriptions to avoid reconnections
            this.subs.forEach((subDestroy)=>subDestroy()
            );
            this.subs = undefined;
        }
        this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually.
     *
     * @return self
     * @public
     */ disconnect() {
        if (this.connected) this.packet({
            type: _socketIoParser.PacketType.DISCONNECT
        });
        // remove socket from pool
        this.destroy();
        if (this.connected) // fire events
        this.onclose("io client disconnect");
        return this;
    }
    /**
     * Alias for disconnect()
     *
     * @return self
     * @public
     */ close() {
        return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     * @public
     */ compress(compress) {
        this.flags.compress = compress;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @returns self
     * @public
     */ get volatile() {
        this.flags.volatile = true;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * ```
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     * ```
     *
     * @returns self
     * @public
     */ timeout(timeout) {
        this.flags.timeout = timeout;
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @param listener
     * @public
     */ onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @param listener
     * @public
     */ prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @param listener
     * @public
     */ offAny(listener) {
        if (!this._anyListeners) return this;
        if (listener) {
            const listeners = this._anyListeners;
            for(let i = 0; i < listeners.length; i++)if (listener === listeners[i]) {
                listeners.splice(i, 1);
                return this;
            }
        } else this._anyListeners = [];
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     *
     * @public
     */ listenersAny() {
        return this._anyListeners || [];
    }
}

},{"socket.io-parser":"37ak3","./on.js":"foI8Q","@socket.io/component-emitter":"kgnXr","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"37ak3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "protocol", ()=>protocol
);
parcelHelpers.export(exports, "PacketType", ()=>PacketType
);
/**
 * A socket.io Encoder instance
 */ parcelHelpers.export(exports, "Encoder", ()=>Encoder
);
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */ parcelHelpers.export(exports, "Decoder", ()=>Decoder
);
var _componentEmitter = require("@socket.io/component-emitter");
var _binaryJs = require("./binary.js");
var _isBinaryJs = require("./is-binary.js");
const protocol = 5;
var PacketType;
(function(PacketType1) {
    PacketType1[PacketType1["CONNECT"] = 0] = "CONNECT";
    PacketType1[PacketType1["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType1[PacketType1["EVENT"] = 2] = "EVENT";
    PacketType1[PacketType1["ACK"] = 3] = "ACK";
    PacketType1[PacketType1["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType1[PacketType1["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType1[PacketType1["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {
}));
class Encoder {
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */ encode(obj) {
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
            if (_isBinaryJs.hasBinary(obj)) {
                obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
                return this.encodeAsBinary(obj);
            }
        }
        return [
            this.encodeAsString(obj)
        ];
    }
    /**
     * Encode packet as string.
     */ encodeAsString(obj) {
        // first is type
        let str = "" + obj.type;
        // attachments if we have them
        if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) str += obj.attachments + "-";
        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (obj.nsp && "/" !== obj.nsp) str += obj.nsp + ",";
        // immediately followed by the id
        if (null != obj.id) str += obj.id;
        // json data
        if (null != obj.data) str += JSON.stringify(obj.data);
        return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */ encodeAsBinary(obj) {
        const deconstruction = _binaryJs.deconstructPacket(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack); // add packet info to beginning of data list
        return buffers; // write all the buffers
    }
}
class Decoder extends _componentEmitter.Emitter {
    constructor(){
        super();
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */ add(obj) {
        let packet;
        if (typeof obj === "string") {
            packet = this.decodeString(obj);
            if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet);
                // no attachments, labeled binary but no binary data to follow
                if (packet.attachments === 0) super.emitReserved("decoded", packet);
            } else // non-binary full packet
            super.emitReserved("decoded", packet);
        } else if (_isBinaryJs.isBinary(obj) || obj.base64) {
            // raw binary data
            if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
            else {
                packet = this.reconstructor.takeBinaryData(obj);
                if (packet) {
                    // received final buffer
                    this.reconstructor = null;
                    super.emitReserved("decoded", packet);
                }
            }
        } else throw new Error("Unknown type: " + obj);
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */ decodeString(str) {
        let i = 0;
        // look up type
        const p = {
            type: Number(str.charAt(0))
        };
        if (PacketType[p.type] === undefined) throw new Error("unknown packet type " + p.type);
        // look up attachments if type binary
        if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
            const start = i + 1;
            while(str.charAt(++i) !== "-" && i != str.length);
            const buf = str.substring(start, i);
            if (buf != Number(buf) || str.charAt(i) !== "-") throw new Error("Illegal attachments");
            p.attachments = Number(buf);
        }
        // look up namespace (if any)
        if ("/" === str.charAt(i + 1)) {
            const start = i + 1;
            while(++i){
                const c = str.charAt(i);
                if ("," === c) break;
                if (i === str.length) break;
            }
            p.nsp = str.substring(start, i);
        } else p.nsp = "/";
        // look up id
        const next = str.charAt(i + 1);
        if ("" !== next && Number(next) == next) {
            const start = i + 1;
            while(++i){
                const c = str.charAt(i);
                if (null == c || Number(c) != c) {
                    --i;
                    break;
                }
                if (i === str.length) break;
            }
            p.id = Number(str.substring(start, i + 1));
        }
        // look up json data
        if (str.charAt(++i)) {
            const payload = tryParse(str.substr(i));
            if (Decoder.isPayloadValid(p.type, payload)) p.data = payload;
            else throw new Error("invalid payload");
        }
        return p;
    }
    static isPayloadValid(type, payload) {
        switch(type){
            case PacketType.CONNECT:
                return typeof payload === "object";
            case PacketType.DISCONNECT:
                return payload === undefined;
            case PacketType.CONNECT_ERROR:
                return typeof payload === "string" || typeof payload === "object";
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                return Array.isArray(payload) && payload.length > 0;
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                return Array.isArray(payload);
        }
    }
    /**
     * Deallocates a parser's resources
     */ destroy() {
        if (this.reconstructor) this.reconstructor.finishedReconstruction();
    }
}
function tryParse(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return false;
    }
}
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */ class BinaryReconstructor {
    constructor(packet){
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */ takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
            // done with buffer list
            const packet = _binaryJs.reconstructPacket(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
        }
        return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */ finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
    }
}

},{"@socket.io/component-emitter":"kgnXr","./binary.js":"cUXVr","./is-binary.js":"dZPgJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cUXVr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */ parcelHelpers.export(exports, "deconstructPacket", ()=>deconstructPacket
);
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */ parcelHelpers.export(exports, "reconstructPacket", ()=>reconstructPacket
);
var _isBinaryJs = require("./is-binary.js");
function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return {
        packet: pack,
        buffers: buffers
    };
}
function _deconstructPacket(data, buffers) {
    if (!data) return data;
    if (_isBinaryJs.isBinary(data)) {
        const placeholder = {
            _placeholder: true,
            num: buffers.length
        };
        buffers.push(data);
        return placeholder;
    } else if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for(let i = 0; i < data.length; i++)newData[i] = _deconstructPacket(data[i], buffers);
        return newData;
    } else if (typeof data === "object" && !(data instanceof Date)) {
        const newData = {
        };
        for(const key in data)if (data.hasOwnProperty(key)) newData[key] = _deconstructPacket(data[key], buffers);
        return newData;
    }
    return data;
}
function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    packet.attachments = undefined; // no longer useful
    return packet;
}
function _reconstructPacket(data, buffers) {
    if (!data) return data;
    if (data && data._placeholder) return buffers[data.num]; // appropriate buffer (should be natural order anyway)
    else if (Array.isArray(data)) for(let i = 0; i < data.length; i++)data[i] = _reconstructPacket(data[i], buffers);
    else if (typeof data === "object") {
        for(const key in data)if (data.hasOwnProperty(key)) data[key] = _reconstructPacket(data[key], buffers);
    }
    return data;
}

},{"./is-binary.js":"dZPgJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dZPgJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */ parcelHelpers.export(exports, "isBinary", ()=>isBinary
);
parcelHelpers.export(exports, "hasBinary", ()=>hasBinary
);
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = (obj)=>{
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
const toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
const withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
function isBinary(obj) {
    return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") return false;
    if (Array.isArray(obj)) {
        for(let i = 0, l = obj.length; i < l; i++){
            if (hasBinary(obj[i])) return true;
        }
        return false;
    }
    if (isBinary(obj)) return true;
    if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) return hasBinary(obj.toJSON(), true);
    for(const key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) return true;
    }
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"foI8Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "on", ()=>on
);
function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
        obj.off(ev, fn);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"antcs":[function(require,module,exports) {
/**
 * Expose `Backoff`.
 */ module.exports = Backoff;
/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */ function Backoff(opts) {
    opts = opts || {
    };
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */ Backoff.prototype.duration = function() {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */ Backoff.prototype.reset = function() {
    this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */ Backoff.prototype.setMin = function(min) {
    this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */ Backoff.prototype.setMax = function(max) {
    this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */ Backoff.prototype.setJitter = function(jitter) {
    this.jitter = jitter;
};

},{}]},["j1F46","hD4hw"], "hD4hw", "parcelRequiree8ef")

//# sourceMappingURL=index.379dd93c.js.map
