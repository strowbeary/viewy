// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../src/index.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/@ungap/weakmap/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*! (c) Andrea Giammarchi - ISC */
var self = void 0 ||
/* istanbul ignore next */
{};

try {
  self.WeakMap = WeakMap;
} catch (WeakMap) {
  // this could be better but 90% of the time
  // it's everything developers need as fallback
  self.WeakMap = function (id, Object) {
    'use strict';

    var dP = Object.defineProperty;
    var hOP = Object.hasOwnProperty;
    var proto = WeakMap.prototype;

    proto.delete = function (key) {
      return this.has(key) && delete key[this._];
    };

    proto.get = function (key) {
      return this.has(key) ? key[this._] : void 0;
    };

    proto.has = function (key) {
      return hOP.call(key, this._);
    };

    proto.set = function (key, value) {
      dP(key, this._, {
        configurable: true,
        value: value
      });
      return this;
    };

    return WeakMap;

    function WeakMap(iterable) {
      dP(this, '_', {
        value: '_@ungap/weakmap' + id++
      });
      if (iterable) iterable.forEach(add, this);
    }

    function add(pair) {
      this.set(pair[0], pair[1]);
    }
  }(Math.random(), Object);
}

var _default = self.WeakMap;
exports.default = _default;
},{}],"../node_modules/@ungap/template-literal/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _weakmap = _interopRequireDefault(require("@ungap/weakmap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isNoOp = typeof document !== 'object';

var templateLiteral = function (tl) {
  var RAW = 'raw';

  var isBroken = function (UA) {
    return /(Firefox|Safari)\/(\d+)/.test(UA) && !/(Chrom|Android)\/(\d+)/.test(UA);
  };

  var broken = isBroken((document.defaultView.navigator || {}).userAgent);
  var FTS = !(RAW in tl) || tl.propertyIsEnumerable(RAW) || !Object.isFrozen(tl[RAW]);

  if (broken || FTS) {
    var forever = {};

    var foreverCache = function (tl) {
      for (var key = '.', i = 0; i < tl.length; i++) key += tl[i].length + '.' + tl[i];

      return forever[key] || (forever[key] = tl);
    }; // Fallback TypeScript shenanigans


    if (FTS) templateLiteral = foreverCache; // try fast path for other browsers:
    // store the template as WeakMap key
    // and forever cache it only when it's not there.
    // this way performance is still optimal,
    // penalized only when there are GC issues
    else {
        var wm = new _weakmap.default();

        var set = function (tl, unique) {
          wm.set(tl, unique);
          return unique;
        };

        templateLiteral = function (tl) {
          return wm.get(tl) || set(tl, foreverCache(tl));
        };
      }
  } else {
    isNoOp = true;
  }

  return TL(tl);
};

var _default = TL;
exports.default = _default;

function TL(tl) {
  return isNoOp ? tl : templateLiteral(tl);
}
},{"@ungap/weakmap":"../node_modules/@ungap/weakmap/esm/index.js"}],"../node_modules/@ungap/template-tag-arguments/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _templateLiteral = _interopRequireDefault(require("@ungap/template-literal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(template) {
  var length = arguments.length;
  var args = [(0, _templateLiteral.default)(template)];
  var i = 1;

  while (i < length) args.push(arguments[i++]);

  return args;
}

;
},{"@ungap/template-literal":"../node_modules/@ungap/template-literal/esm/index.js"}],"../node_modules/hyperhtml-wire/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*! (c) Andrea Giammarchi - ISC */
var Wire = function (slice, proto) {
  proto = Wire.prototype;
  proto.ELEMENT_NODE = 1;
  proto.nodeType = 111;

  proto.remove = function (keepFirst) {
    var childNodes = this.childNodes;
    var first = this.firstChild;
    var last = this.lastChild;
    this._ = null;

    if (keepFirst && childNodes.length === 2) {
      last.parentNode.removeChild(last);
    } else {
      var range = this.ownerDocument.createRange();
      range.setStartBefore(keepFirst ? childNodes[1] : first);
      range.setEndAfter(last);
      range.deleteContents();
    }

    return first;
  };

  proto.valueOf = function (forceAppend) {
    var fragment = this._;
    var noFragment = fragment == null;
    if (noFragment) fragment = this._ = this.ownerDocument.createDocumentFragment();

    if (noFragment || forceAppend) {
      for (var n = this.childNodes, i = 0, l = n.length; i < l; i++) fragment.appendChild(n[i]);
    }

    return fragment;
  };

  return Wire;

  function Wire(childNodes) {
    var nodes = this.childNodes = slice.call(childNodes, 0);
    this.firstChild = nodes[0];
    this.lastChild = nodes[nodes.length - 1];
    this.ownerDocument = nodes[0].ownerDocument;
    this._ = null;
  }
}([].slice);

var _default = Wire;
exports.default = _default;
},{}],"../node_modules/lighterhtml/esm/shared.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Wire", {
  enumerable: true,
  get: function () {
    return _hyperhtmlWire.default;
  }
});
exports.wireType = exports.isArray = void 0;

var _hyperhtmlWire = _interopRequireDefault(require("hyperhtml-wire"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  isArray
} = Array;
exports.isArray = isArray;
const wireType = _hyperhtmlWire.default.prototype.nodeType;
exports.wireType = wireType;
},{"hyperhtml-wire":"../node_modules/hyperhtml-wire/esm/index.js"}],"../node_modules/@ungap/create-content/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*! (c) Andrea Giammarchi - ISC */
var createContent = function (document) {
  'use strict';

  var FRAGMENT = 'fragment';
  var TEMPLATE = 'template';
  var HAS_CONTENT = 'content' in create(TEMPLATE);
  var createHTML = HAS_CONTENT ? function (html) {
    var template = create(TEMPLATE);
    template.innerHTML = html;
    return template.content;
  } : function (html) {
    var content = create(FRAGMENT);
    var template = create(TEMPLATE);
    var childNodes = null;

    if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(html)) {
      var selector = RegExp.$1;
      template.innerHTML = '<table>' + html + '</table>';
      childNodes = template.querySelectorAll(selector);
    } else {
      template.innerHTML = html;
      childNodes = template.childNodes;
    }

    append(content, childNodes);
    return content;
  };
  return function createContent(markup, type) {
    return (type === 'svg' ? createSVG : createHTML)(markup);
  };

  function append(root, childNodes) {
    var length = childNodes.length;

    while (length--) root.appendChild(childNodes[0]);
  }

  function create(element) {
    return element === FRAGMENT ? document.createDocumentFragment() : document.createElementNS('http://www.w3.org/1999/xhtml', element);
  } // it could use createElementNS when hasNode is there
  // but this fallback is equally fast and easier to maintain
  // it is also battle tested already in all IE


  function createSVG(svg) {
    var content = create(FRAGMENT);
    var template = create('div');
    template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + svg + '</svg>';
    append(content, template.firstChild.childNodes);
    return content;
  }
}(document);

var _default = createContent;
exports.default = _default;
},{}],"../node_modules/@ungap/essential-map/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*! (c) Andrea Giammarchi - ISC */
var self = void 0 ||
/* istanbul ignore next */
{};

try {
  self.Map = Map;
} catch (Map) {
  self.Map = function Map() {
    var i = 0;
    var k = [];
    var v = [];
    return {
      delete: function (key) {
        var had = contains(key);

        if (had) {
          k.splice(i, 1);
          v.splice(i, 1);
        }

        return had;
      },
      forEach: function forEach(callback, context) {
        k.forEach(function (key, i) {
          callback.call(context, v[i], key, this);
        }, this);
      },
      get: function get(key) {
        return contains(key) ? v[i] : void 0;
      },
      has: function has(key) {
        return contains(key);
      },
      set: function set(key, value) {
        v[contains(key) ? i : k.push(key) - 1] = value;
        return this;
      }
    };

    function contains(v) {
      i = k.indexOf(v);
      return -1 < i;
    }
  };
}

var _default = self.Map;
exports.default = _default;
},{}],"../node_modules/domdiff/esm/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smartDiff = exports.remove = exports.next = exports.isReversed = exports.indexOf = exports.identity = exports.eqeq = exports.append = void 0;

var _essentialMap = _interopRequireDefault(require("@ungap/essential-map"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const append = (get, parent, children, start, end, before) => {
  const isSelect = 'selectedIndex' in parent;
  let selectedIndex = -1;

  while (start < end) {
    const child = get(children[start], 1);
    if (isSelect && selectedIndex < 0 && child.selected) selectedIndex = start;
    parent.insertBefore(child, before);
    start++;
  }

  if (isSelect && -1 < selectedIndex) parent.selectedIndex = selectedIndex;
};

exports.append = append;

const eqeq = (a, b) => a == b;

exports.eqeq = eqeq;

const identity = O => O;

exports.identity = identity;

const indexOf = (moreNodes, moreStart, moreEnd, lessNodes, lessStart, lessEnd, compare) => {
  const length = lessEnd - lessStart;
  /* istanbul ignore if */

  if (length < 1) return -1;

  while (moreEnd - moreStart >= length) {
    let m = moreStart;
    let l = lessStart;

    while (m < moreEnd && l < lessEnd && compare(moreNodes[m], lessNodes[l])) {
      m++;
      l++;
    }

    if (l === lessEnd) return moreStart;
    moreStart = m + 1;
  }

  return -1;
};

exports.indexOf = indexOf;

const isReversed = (futureNodes, futureEnd, currentNodes, currentStart, currentEnd, compare) => {
  while (currentStart < currentEnd && compare(currentNodes[currentStart], futureNodes[futureEnd - 1])) {
    currentStart++;
    futureEnd--;
  }

  ;
  return futureEnd === 0;
};

exports.isReversed = isReversed;

const next = (get, list, i, length, before) => i < length ? get(list[i], 0) : 0 < i ? get(list[i - 1], -0).nextSibling : before;

exports.next = next;

const remove = (get, parent, children, start, end) => {
  if (end - start < 2) parent.removeChild(get(children[start], -1));else {
    const range = parent.ownerDocument.createRange();
    range.setStartBefore(get(children[start], -1));
    range.setEndAfter(get(children[end - 1], -1));
    range.deleteContents();
  }
}; // - - - - - - - - - - - - - - - - - - -
// diff related constants and utilities
// - - - - - - - - - - - - - - - - - - -


exports.remove = remove;
const DELETION = -1;
const INSERTION = 1;
const SKIP = 0;
const SKIP_OND = 50;

const HS = (futureNodes, futureStart, futureEnd, futureChanges, currentNodes, currentStart, currentEnd, currentChanges) => {
  let k = 0;
  /* istanbul ignore next */

  let minLen = futureChanges < currentChanges ? futureChanges : currentChanges;
  const link = Array(minLen++);
  const tresh = Array(minLen);
  tresh[0] = -1;

  for (let i = 1; i < minLen; i++) tresh[i] = currentEnd;

  const keymap = new _essentialMap.default();

  for (let i = currentStart; i < currentEnd; i++) keymap.set(currentNodes[i], i);

  for (let i = futureStart; i < futureEnd; i++) {
    const idxInOld = keymap.get(futureNodes[i]);

    if (idxInOld != null) {
      k = findK(tresh, minLen, idxInOld);
      /* istanbul ignore else */

      if (-1 < k) {
        tresh[k] = idxInOld;
        link[k] = {
          newi: i,
          oldi: idxInOld,
          prev: link[k - 1]
        };
      }
    }
  }

  k = --minLen;
  --currentEnd;

  while (tresh[k] > currentEnd) --k;

  minLen = currentChanges + futureChanges - k;
  const diff = Array(minLen);
  let ptr = link[k];
  --futureEnd;

  while (ptr) {
    const {
      newi,
      oldi
    } = ptr;

    while (futureEnd > newi) {
      diff[--minLen] = INSERTION;
      --futureEnd;
    }

    while (currentEnd > oldi) {
      diff[--minLen] = DELETION;
      --currentEnd;
    }

    diff[--minLen] = SKIP;
    --futureEnd;
    --currentEnd;
    ptr = ptr.prev;
  }

  while (futureEnd >= futureStart) {
    diff[--minLen] = INSERTION;
    --futureEnd;
  }

  while (currentEnd >= currentStart) {
    diff[--minLen] = DELETION;
    --currentEnd;
  }

  return diff;
}; // this is pretty much the same petit-dom code without the delete map part
// https://github.com/yelouafi/petit-dom/blob/bd6f5c919b5ae5297be01612c524c40be45f14a7/src/vdom.js#L556-L561


const OND = (futureNodes, futureStart, rows, currentNodes, currentStart, cols, compare) => {
  const length = rows + cols;
  const v = [];
  let d, k, r, c, pv, cv, pd;

  outer: for (d = 0; d <= length; d++) {
    /* istanbul ignore if */
    if (d > SKIP_OND) return null;
    pd = d - 1;
    /* istanbul ignore next */

    pv = d ? v[d - 1] : [0, 0];
    cv = v[d] = [];

    for (k = -d; k <= d; k += 2) {
      if (k === -d || k !== d && pv[pd + k - 1] < pv[pd + k + 1]) {
        c = pv[pd + k + 1];
      } else {
        c = pv[pd + k - 1] + 1;
      }

      r = c - k;

      while (c < cols && r < rows && compare(currentNodes[currentStart + c], futureNodes[futureStart + r])) {
        c++;
        r++;
      }

      if (c === cols && r === rows) {
        break outer;
      }

      cv[d + k] = c;
    }
  }

  const diff = Array(d / 2 + length / 2);
  let diffIdx = diff.length - 1;

  for (d = v.length - 1; d >= 0; d--) {
    while (c > 0 && r > 0 && compare(currentNodes[currentStart + c - 1], futureNodes[futureStart + r - 1])) {
      // diagonal edge = equality
      diff[diffIdx--] = SKIP;
      c--;
      r--;
    }

    if (!d) break;
    pd = d - 1;
    /* istanbul ignore next */

    pv = d ? v[d - 1] : [0, 0];
    k = c - r;

    if (k === -d || k !== d && pv[pd + k - 1] < pv[pd + k + 1]) {
      // vertical edge = insertion
      r--;
      diff[diffIdx--] = INSERTION;
    } else {
      // horizontal edge = deletion
      c--;
      diff[diffIdx--] = DELETION;
    }
  }

  return diff;
};

const applyDiff = (diff, get, parentNode, futureNodes, futureStart, currentNodes, currentStart, currentLength, before) => {
  const live = new _essentialMap.default();
  const length = diff.length;
  let currentIndex = currentStart;
  let i = 0;

  while (i < length) {
    switch (diff[i++]) {
      case SKIP:
        futureStart++;
        currentIndex++;
        break;

      case INSERTION:
        // TODO: bulk appends for sequential nodes
        live.set(futureNodes[futureStart], 1);
        append(get, parentNode, futureNodes, futureStart++, futureStart, currentIndex < currentLength ? get(currentNodes[currentIndex], 0) : before);
        break;

      case DELETION:
        currentIndex++;
        break;
    }
  }

  i = 0;

  while (i < length) {
    switch (diff[i++]) {
      case SKIP:
        currentStart++;
        break;

      case DELETION:
        // TODO: bulk removes for sequential nodes
        if (live.has(currentNodes[currentStart])) currentStart++;else remove(get, parentNode, currentNodes, currentStart++, currentStart);
        break;
    }
  }
};

const findK = (ktr, length, j) => {
  let lo = 1;
  let hi = length;

  while (lo < hi) {
    const mid = (lo + hi) / 2 >>> 0;
    if (j < ktr[mid]) hi = mid;else lo = mid + 1;
  }

  return lo;
};

const smartDiff = (get, parentNode, futureNodes, futureStart, futureEnd, futureChanges, currentNodes, currentStart, currentEnd, currentChanges, currentLength, compare, before) => {
  applyDiff(OND(futureNodes, futureStart, futureChanges, currentNodes, currentStart, currentChanges, compare) || HS(futureNodes, futureStart, futureEnd, futureChanges, currentNodes, currentStart, currentEnd, currentChanges), get, parentNode, futureNodes, futureStart, currentNodes, currentStart, currentLength, before);
};

exports.smartDiff = smartDiff;
},{"@ungap/essential-map":"../node_modules/@ungap/essential-map/esm/index.js"}],"../node_modules/domdiff/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("./utils.js");

/*! (c) 2018 Andrea Giammarchi (ISC) */
const domdiff = (parentNode, // where changes happen
currentNodes, // Array of current items/nodes
futureNodes, // Array of future items/nodes
options // optional object with one of the following properties
//  before: domNode
//  compare(generic, generic) => true if same generic
//  node(generic) => Node
) => {
  if (!options) options = {};
  const compare = options.compare || _utils.eqeq;
  const get = options.node || _utils.identity;
  const before = options.before == null ? null : get(options.before, 0);
  const currentLength = currentNodes.length;
  let currentEnd = currentLength;
  let currentStart = 0;
  let futureEnd = futureNodes.length;
  let futureStart = 0; // common prefix

  while (currentStart < currentEnd && futureStart < futureEnd && compare(currentNodes[currentStart], futureNodes[futureStart])) {
    currentStart++;
    futureStart++;
  } // common suffix


  while (currentStart < currentEnd && futureStart < futureEnd && compare(currentNodes[currentEnd - 1], futureNodes[futureEnd - 1])) {
    currentEnd--;
    futureEnd--;
  }

  const currentSame = currentStart === currentEnd;
  const futureSame = futureStart === futureEnd; // same list

  if (currentSame && futureSame) return futureNodes; // only stuff to add

  if (currentSame && futureStart < futureEnd) {
    (0, _utils.append)(get, parentNode, futureNodes, futureStart, futureEnd, (0, _utils.next)(get, currentNodes, currentStart, currentLength, before));
    return futureNodes;
  } // only stuff to remove


  if (futureSame && currentStart < currentEnd) {
    (0, _utils.remove)(get, parentNode, currentNodes, currentStart, currentEnd);
    return futureNodes;
  }

  const currentChanges = currentEnd - currentStart;
  const futureChanges = futureEnd - futureStart;
  let i = -1; // 2 simple indels: the shortest sequence is a subsequence of the longest

  if (currentChanges < futureChanges) {
    i = (0, _utils.indexOf)(futureNodes, futureStart, futureEnd, currentNodes, currentStart, currentEnd, compare); // inner diff

    if (-1 < i) {
      (0, _utils.append)(get, parentNode, futureNodes, futureStart, i, get(currentNodes[currentStart], 0));
      (0, _utils.append)(get, parentNode, futureNodes, i + currentChanges, futureEnd, (0, _utils.next)(get, currentNodes, currentEnd, currentLength, before));
      return futureNodes;
    }
  }
  /* istanbul ignore else */
  else if (futureChanges < currentChanges) {
      i = (0, _utils.indexOf)(currentNodes, currentStart, currentEnd, futureNodes, futureStart, futureEnd, compare); // outer diff

      if (-1 < i) {
        (0, _utils.remove)(get, parentNode, currentNodes, currentStart, i);
        (0, _utils.remove)(get, parentNode, currentNodes, i + futureChanges, currentEnd);
        return futureNodes;
      }
    } // common case with one replacement for many nodes
  // or many nodes replaced for a single one

  /* istanbul ignore else */


  if (currentChanges < 2 || futureChanges < 2) {
    (0, _utils.append)(get, parentNode, futureNodes, futureStart, futureEnd, get(currentNodes[currentStart], 0));
    (0, _utils.remove)(get, parentNode, currentNodes, currentStart, currentEnd);
    return futureNodes;
  } // the half match diff part has been skipped in petit-dom
  // https://github.com/yelouafi/petit-dom/blob/bd6f5c919b5ae5297be01612c524c40be45f14a7/src/vdom.js#L391-L397
  // accordingly, I think it's safe to skip in here too
  // if one day it'll come out like the speediest thing ever to do
  // then I might add it in here too
  // Extra: before going too fancy, what about reversed lists ?
  //        This should bail out pretty quickly if that's not the case.


  if (currentChanges === futureChanges && (0, _utils.isReversed)(futureNodes, futureEnd, currentNodes, currentStart, currentEnd, compare)) {
    (0, _utils.append)(get, parentNode, futureNodes, futureStart, futureEnd, (0, _utils.next)(get, currentNodes, currentEnd, currentLength, before));
    return futureNodes;
  } // last resort through a smart diff


  (0, _utils.smartDiff)(get, parentNode, futureNodes, futureStart, futureEnd, futureChanges, currentNodes, currentStart, currentEnd, currentChanges, currentLength, compare, before);
  return futureNodes;
};

var _default = domdiff;
exports.default = _default;
},{"./utils.js":"../node_modules/domdiff/esm/utils.js"}],"../node_modules/@ungap/import-node/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*! (c) Andrea Giammarchi - ISC */
var importNode = function (document, appendChild, cloneNode, createTextNode, importNode) {
  var native = importNode in document; // IE 11 has problems with cloning templates:
  // it "forgets" empty childNodes. This feature-detects that.

  var fragment = document.createDocumentFragment();
  fragment[appendChild](document[createTextNode]('g'));
  fragment[appendChild](document[createTextNode](''));
  var content = native ? document[importNode](fragment, true) : fragment[cloneNode](true);
  return content.childNodes.length < 2 ? function importNode(node, deep) {
    var clone = node[cloneNode]();

    for (var childNodes = node.childNodes || [], length = childNodes.length, i = 0; deep && i < length; i++) {
      clone[appendChild](importNode(childNodes[i], deep));
    }

    return clone;
  } : native ? document[importNode] : function (node, deep) {
    return node[cloneNode](!!deep);
  };
}(document, 'appendChild', 'cloneNode', 'createTextNode', 'importNode');

var _default = importNode;
exports.default = _default;
},{}],"../node_modules/@ungap/trim/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var trim = ''.trim || function () {
  return String(this).replace(/^\s+|\s+/g, '');
};

var _default = trim;
exports.default = _default;
},{}],"../node_modules/domconstants/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VOID_ELEMENTS = exports.SHOULD_USE_TEXT_CONTENT = exports.TEXT_NODE = exports.ELEMENT_NODE = exports.DOCUMENT_FRAGMENT_NODE = exports.COMMENT_NODE = exports.UID_IE = exports.UIDC = exports.UID = void 0;

/*! (c) Andrea Giammarchi - ISC */
// Custom
var UID = '-' + Math.random().toFixed(6) + '%'; //                           Edge issue!

exports.UID = UID;
var UID_IE = false;
exports.UID_IE = UID_IE;

try {
  if (!function (template, content, tabindex) {
    return content in template && (template.innerHTML = '<p ' + tabindex + '="' + UID + '"></p>', template[content].childNodes[0].getAttribute(tabindex) == UID);
  }(document.createElement('template'), 'content', 'tabindex')) {
    exports.UID = UID = '_dt: ' + UID.slice(1, -1) + ';';
    exports.UID_IE = UID_IE = true;
  }
} catch (meh) {}

var UIDC = '<!--' + UID + '-->'; // DOM

exports.UIDC = UIDC;
var COMMENT_NODE = 8;
exports.COMMENT_NODE = COMMENT_NODE;
var DOCUMENT_FRAGMENT_NODE = 11;
exports.DOCUMENT_FRAGMENT_NODE = DOCUMENT_FRAGMENT_NODE;
var ELEMENT_NODE = 1;
exports.ELEMENT_NODE = ELEMENT_NODE;
var TEXT_NODE = 3;
exports.TEXT_NODE = TEXT_NODE;
var SHOULD_USE_TEXT_CONTENT = /^(?:style|textarea)$/i;
exports.SHOULD_USE_TEXT_CONTENT = SHOULD_USE_TEXT_CONTENT;
var VOID_ELEMENTS = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
exports.VOID_ELEMENTS = VOID_ELEMENTS;
},{}],"../node_modules/domsanitizer/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _domconstants = require("domconstants");

/*! (c) Andrea Giammarchi - ISC */
function _default(template) {
  return template.join(_domconstants.UIDC).replace(selfClosing, fullClosing).replace(attrSeeker, attrReplacer);
}

var spaces = ' \\f\\n\\r\\t';
var almostEverything = '[^' + spaces + '\\/>"\'=]+';
var attrName = '[' + spaces + ']+' + almostEverything;
var tagName = '<([A-Za-z]+[A-Za-z0-9:._-]*)((?:';
var attrPartials = '(?:\\s*=\\s*(?:\'[^\']*?\'|"[^"]*?"|<[^>]*?>|' + almostEverything.replace('\\/', '') + '))?)';
var attrSeeker = new RegExp(tagName + attrName + attrPartials + '+)([' + spaces + ']*/?>)', 'g');
var selfClosing = new RegExp(tagName + attrName + attrPartials + '*)([' + spaces + ']*/>)', 'g');
var findAttributes = new RegExp('(' + attrName + '\\s*=\\s*)([\'"]?)' + _domconstants.UIDC + '\\2', 'gi');

function attrReplacer($0, $1, $2, $3) {
  return '<' + $1 + $2.replace(findAttributes, replaceAttributes) + $3;
}

function replaceAttributes($0, $1, $2) {
  return $1 + ($2 || '"') + _domconstants.UID + ($2 || '"');
}

function fullClosing($0, $1, $2) {
  return _domconstants.VOID_ELEMENTS.test($1) ? $0 : '<' + $1 + $2 + '></' + $1 + '>';
}
},{"domconstants":"../node_modules/domconstants/esm/index.js"}],"../node_modules/domtagger/esm/walker.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.find = find;
exports.parse = parse;

var _essentialMap = _interopRequireDefault(require("@ungap/essential-map"));

var _trim = _interopRequireDefault(require("@ungap/trim"));

var _domconstants = require("domconstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function find(node, path) {
  var length = path.length;
  var i = 0;

  while (i < length) node = node.childNodes[path[i++]];

  return node;
}

function parse(node, holes, parts, path) {
  var childNodes = node.childNodes;
  var length = childNodes.length;
  var i = 0;

  while (i < length) {
    var child = childNodes[i];

    switch (child.nodeType) {
      case _domconstants.ELEMENT_NODE:
        var childPath = path.concat(i);
        parseAttributes(child, holes, parts, childPath);
        parse(child, holes, parts, childPath);
        break;

      case _domconstants.COMMENT_NODE:
        var textContent = child.textContent;

        if (textContent === _domconstants.UID) {
          parts.shift();
          holes.push( // basicHTML or other non standard engines
          // might end up having comments in nodes
          // where they shouldn't, hence this check.
          _domconstants.SHOULD_USE_TEXT_CONTENT.test(node.nodeName) ? Text(node, path) : Any(child, path.concat(i)));
        } else {
          switch (textContent.slice(0, 2)) {
            case '/*':
              if (textContent.slice(-2) !== '*/') break;

            case '\uD83D\uDC7B':
              // ghost
              node.removeChild(child);
              i--;
              length--;
          }
        }

        break;

      case _domconstants.TEXT_NODE:
        // the following ignore is actually covered by browsers
        // only basicHTML ends up on previous COMMENT_NODE case
        // instead of TEXT_NODE because it knows nothing about
        // special style or textarea behavior

        /* istanbul ignore if */
        if (_domconstants.SHOULD_USE_TEXT_CONTENT.test(node.nodeName) && _trim.default.call(child.textContent) === _domconstants.UIDC) {
          parts.shift();
          holes.push(Text(node, path));
        }

        break;
    }

    i++;
  }
}

function parseAttributes(node, holes, parts, path) {
  var cache = new _essentialMap.default();
  var attributes = node.attributes;
  var remove = [];
  var array = remove.slice.call(attributes, 0);
  var length = array.length;
  var i = 0;

  while (i < length) {
    var attribute = array[i++];
    var direct = attribute.value === _domconstants.UID;
    var sparse;

    if (direct || 1 < (sparse = attribute.value.split(_domconstants.UIDC)).length) {
      var name = attribute.name; // the following ignore is covered by IE
      // and the IE9 double viewBox test

      /* istanbul ignore else */

      if (!cache.has(name)) {
        var realName = parts.shift().replace(direct ? /^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/ : new RegExp('^(?:|[\\S\\s]*?\\s)(' + name + ')\\s*=\\s*(\'|")', 'i'), '$1');
        var value = attributes[realName] || // the following ignore is covered by browsers
        // while basicHTML is already case-sensitive

        /* istanbul ignore next */
        attributes[realName.toLowerCase()];
        cache.set(name, value);
        if (direct) holes.push(Attr(value, path, realName, null));else {
          var skip = sparse.length - 2;

          while (skip--) parts.shift();

          holes.push(Attr(value, path, realName, sparse));
        }
      }

      remove.push(attribute);
    }
  }

  length = remove.length;
  i = 0;

  while (i < length) {
    // Edge HTML bug #16878726
    var attr = remove[i++];
    if (/^id$/i.test(attr.name)) node.removeAttribute(attr.name); // standard browsers would work just fine here
    else node.removeAttributeNode(attr);
  } // This is a very specific Firefox/Safari issue
  // but since it should be a not so common pattern,
  // it's probably worth patching regardless.
  // Basically, scripts created through strings are death.
  // You need to create fresh new scripts instead.
  // TODO: is there any other node that needs such nonsense?


  var nodeName = node.nodeName;

  if (/^script$/i.test(nodeName)) {
    // this used to be like that
    // var script = createElement(node, nodeName);
    // then Edge arrived and decided that scripts created
    // through template documents aren't worth executing
    // so it became this ... hopefully it won't hurt in the wild
    var script = document.createElement(nodeName);
    length = attributes.length;
    i = 0;

    while (i < length) script.setAttributeNode(attributes[i++].cloneNode(true));

    script.textContent = node.textContent;
    node.parentNode.replaceChild(script, node);
  }
}

function Any(node, path) {
  return {
    type: 'any',
    node: node,
    path: path
  };
}

function Attr(node, path, name, sparse) {
  return {
    type: 'attr',
    node: node,
    path: path,
    name: name,
    sparse: sparse
  };
}

function Text(node, path) {
  return {
    type: 'text',
    node: node,
    path: path
  };
}
},{"@ungap/essential-map":"../node_modules/@ungap/essential-map/esm/index.js","@ungap/trim":"../node_modules/@ungap/trim/esm/index.js","domconstants":"../node_modules/domconstants/esm/index.js"}],"../node_modules/domtagger/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _weakmap = _interopRequireDefault(require("@ungap/weakmap"));

var _createContent = _interopRequireDefault(require("@ungap/create-content"));

var _importNode = _interopRequireDefault(require("@ungap/import-node"));

var _trim = _interopRequireDefault(require("@ungap/trim"));

var _domsanitizer = _interopRequireDefault(require("domsanitizer"));

var _walker = require("./walker.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// globals
// utils
// local
// the domtagger 🎉
var _default = domtagger;
exports.default = _default;
var parsed = new _weakmap.default();
var referenced = new _weakmap.default();

function createInfo(options, template) {
  var markup = (0, _domsanitizer.default)(template);
  var transform = options.transform;
  if (transform) markup = transform(markup);
  var content = (0, _createContent.default)(markup, options.type);
  cleanContent(content);
  var holes = [];
  (0, _walker.parse)(content, holes, template.slice(0), []);
  var info = {
    content: content,
    updates: function (content) {
      var updates = [];
      var len = holes.length;
      var i = 0;
      var off = 0;

      while (i < len) {
        var info = holes[i++];
        var node = (0, _walker.find)(content, info.path);

        switch (info.type) {
          case 'any':
            updates.push({
              fn: options.any(node, []),
              sparse: false
            });
            break;

          case 'attr':
            var sparse = info.sparse;
            var fn = options.attribute(node, info.name, info.node);
            if (sparse === null) updates.push({
              fn: fn,
              sparse: false
            });else {
              off += sparse.length - 2;
              updates.push({
                fn: fn,
                sparse: true,
                values: sparse
              });
            }
            break;

          case 'text':
            updates.push({
              fn: options.text(node),
              sparse: false
            });
            node.textContent = '';
            break;
        }
      }

      len += off;
      return function () {
        var length = arguments.length;

        if (len !== length - 1) {
          throw new Error(length - 1 + ' values instead of ' + len + '\n' + template.join('${value}'));
        }

        var i = 1;
        var off = 1;

        while (i < length) {
          var update = updates[i - off];

          if (update.sparse) {
            var values = update.values;
            var value = values[0];
            var j = 1;
            var l = values.length;
            off += l - 2;

            while (j < l) value += arguments[i++] + values[j++];

            update.fn(value);
          } else update.fn(arguments[i++]);
        }

        return content;
      };
    }
  };
  parsed.set(template, info);
  return info;
}

function createDetails(options, template) {
  var info = parsed.get(template) || createInfo(options, template);

  var content = _importNode.default.call(document, info.content, true);

  var details = {
    content: content,
    template: template,
    updates: info.updates(content)
  };
  referenced.set(options, details);
  return details;
}

function domtagger(options) {
  return function (template) {
    var details = referenced.get(options);
    if (details == null || details.template !== template) details = createDetails(options, template);
    details.updates.apply(null, arguments);
    return details.content;
  };
}

function cleanContent(fragment) {
  var childNodes = fragment.childNodes;
  var i = childNodes.length;

  while (i--) {
    var child = childNodes[i];

    if (child.nodeType !== 1 && _trim.default.call(child.textContent).length === 0) {
      fragment.removeChild(child);
    }
  }
}
},{"@ungap/weakmap":"../node_modules/@ungap/weakmap/esm/index.js","@ungap/create-content":"../node_modules/@ungap/create-content/esm/index.js","@ungap/import-node":"../node_modules/@ungap/import-node/esm/index.js","@ungap/trim":"../node_modules/@ungap/trim/esm/index.js","domsanitizer":"../node_modules/domsanitizer/esm/index.js","./walker.js":"../node_modules/domtagger/esm/walker.js"}],"../node_modules/hyperhtml-style/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*! (c) Andrea Giammarchi - ISC */
var hyperStyle = function () {
  'use strict'; // from https://github.com/developit/preact/blob/33fc697ac11762a1cb6e71e9847670d047af7ce5/src/varants.js

  var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
  var hyphen = /([^A-Z])([A-Z]+)/g;
  return function hyperStyle(node, original) {
    return 'ownerSVGElement' in node ? svg(node, original) : update(node.style, false);
  };

  function ized($0, $1, $2) {
    return $1 + '-' + $2.toLowerCase();
  }

  function svg(node, original) {
    var style;
    if (original) style = original.cloneNode(true);else {
      node.setAttribute('style', '--hyper:style;');
      style = node.getAttributeNode('style');
    }
    style.value = '';
    node.setAttributeNode(style);
    return update(style, true);
  }

  function toStyle(object) {
    var key,
        css = [];

    for (key in object) css.push(key.replace(hyphen, ized), ':', object[key], ';');

    return css.join('');
  }

  function update(style, isSVG) {
    var oldType, oldValue;
    return function (newValue) {
      var info, key, styleValue, value;

      switch (typeof newValue) {
        case 'object':
          if (newValue) {
            if (oldType === 'object') {
              if (!isSVG) {
                if (oldValue !== newValue) {
                  for (key in oldValue) {
                    if (!(key in newValue)) {
                      style[key] = '';
                    }
                  }
                }
              }
            } else {
              if (isSVG) style.value = '';else style.cssText = '';
            }

            info = isSVG ? {} : style;

            for (key in newValue) {
              value = newValue[key];
              styleValue = typeof value === 'number' && !IS_NON_DIMENSIONAL.test(key) ? value + 'px' : value;
              if (!isSVG && /^--/.test(key)) info.setProperty(key, styleValue);else info[key] = styleValue;
            }

            oldType = 'object';
            if (isSVG) style.value = toStyle(oldValue = info);else oldValue = newValue;
            break;
          }

        default:
          if (oldValue != newValue) {
            oldType = 'string';
            oldValue = newValue;
            if (isSVG) style.value = newValue || '';else style.cssText = newValue || '';
          }

          break;
      }
    };
  }
}();

var _default = hyperStyle;
exports.default = _default;
},{}],"../node_modules/lighterhtml/esm/tagger.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Tagger;

var _createContent = _interopRequireDefault(require("@ungap/create-content"));

var _domdiff = _interopRequireDefault(require("domdiff"));

var _domtagger = _interopRequireDefault(require("domtagger"));

var _hyperhtmlStyle = _interopRequireDefault(require("hyperhtml-style"));

var _shared = require("./shared.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OWNER_SVG_ELEMENT = 'ownerSVGElement'; // returns nodes from wires and components

const asNode = (item, i) => item.nodeType === _shared.wireType ? 1 / i < 0 ? i ? item.remove(true) : item.lastChild : i ? item.valueOf(true) : item.firstChild : item; // returns true if domdiff can handle the value


const canDiff = value => 'ELEMENT_NODE' in value; // generic attributes helpers


const hyperAttribute = (node, original) => {
  let oldValue;
  let owner = false;
  const attribute = original.cloneNode(true);
  return newValue => {
    if (oldValue !== newValue) {
      oldValue = newValue;

      if (attribute.value !== newValue) {
        if (newValue == null) {
          if (owner) {
            owner = false;
            node.removeAttributeNode(attribute);
          }

          attribute.value = newValue;
        } else {
          attribute.value = newValue;

          if (!owner) {
            owner = true;
            node.setAttributeNode(attribute);
          }
        }
      }
    }
  };
}; // events attributes helpers


const hyperEvent = (node, name) => {
  let oldValue;
  let type = name.slice(2);
  if (name.toLowerCase() in node) type = type.toLowerCase();
  return newValue => {
    if (oldValue !== newValue) {
      if (oldValue) node.removeEventListener(type, oldValue, false);
      oldValue = newValue;
      if (newValue) node.addEventListener(type, newValue, false);
    }
  };
}; // special attributes helpers


const hyperProperty = (node, name) => {
  let oldValue;
  return newValue => {
    if (oldValue !== newValue) {
      oldValue = newValue;

      if (node[name] !== newValue) {
        if (newValue == null) {
          // cleanup before dropping the attribute to fix IE/Edge gotcha
          node[name] = '';
          node.removeAttribute(name);
        } else node[name] = newValue;
      }
    }
  };
}; // special hooks helpers


const hyperRef = node => {
  return ref => {
    ref.current = node;
  };
};

const hyperSetter = (node, name) => value => {
  node[name] = value;
}; // list of attributes that should not be directly assigned


const readOnly = /^(?:form|list)$/i; // reused every slice time

const slice = [].slice; // simplifies text node creation

const text = (node, text) => node.ownerDocument.createTextNode(text);

function Tagger(type) {
  this.type = type;
  return (0, _domtagger.default)(this);
}

Tagger.prototype = {
  // there are four kind of attributes, and related behavior:
  //  * events, with a name starting with `on`, to add/remove event listeners
  //  * special, with a name present in their inherited prototype, accessed directly
  //  * regular, accessed through get/setAttribute standard DOM methods
  //  * style, the only regular attribute that also accepts an object as value
  //    so that you can style=${{width: 120}}. In this case, the behavior has been
  //    fully inspired by Preact library and its simplicity.
  attribute(node, name, original) {
    switch (name) {
      case 'class':
        if (OWNER_SVG_ELEMENT in node) return hyperAttribute(node, original);
        name = 'className';

      case 'data':
      case 'props':
        return hyperProperty(node, name);

      case 'style':
        return (0, _hyperhtmlStyle.default)(node, original, OWNER_SVG_ELEMENT in node);

      case 'ref':
        return hyperRef(node);

      default:
        if (name.slice(0, 1) === '.') return hyperSetter(node, name.slice(1));
        if (name.slice(0, 2) === 'on') return hyperEvent(node, name);
        if (name in node && !(OWNER_SVG_ELEMENT in node || readOnly.test(name))) return hyperProperty(node, name);
        return hyperAttribute(node, original);
    }
  },

  // in a hyper(node)`<div>${content}</div>` case
  // everything could happen:
  //  * it's a JS primitive, stored as text
  //  * it's null or undefined, the node should be cleaned
  //  * it's a promise, update the content once resolved
  //  * it's an explicit intent, perform the desired operation
  //  * it's an Array, resolve all values if Promises and/or
  //    update the node with the resulting list of content
  any(node, childNodes) {
    const diffOptions = {
      node: asNode,
      before: node
    };
    const nodeType = OWNER_SVG_ELEMENT in node ?
    /* istanbul ignore next */
    'svg' : 'html';
    let fastPath = false;
    let oldValue;

    const anyContent = value => {
      switch (typeof value) {
        case 'string':
        case 'number':
        case 'boolean':
          if (fastPath) {
            if (oldValue !== value) {
              oldValue = value;
              childNodes[0].textContent = value;
            }
          } else {
            fastPath = true;
            oldValue = value;
            childNodes = (0, _domdiff.default)(node.parentNode, childNodes, [text(node, value)], diffOptions);
          }

          break;

        case 'function':
          anyContent(value(node));
          break;

        case 'object':
        case 'undefined':
          if (value == null) {
            fastPath = false;
            childNodes = (0, _domdiff.default)(node.parentNode, childNodes, [], diffOptions);
            break;
          }

        default:
          fastPath = false;
          oldValue = value;

          if ((0, _shared.isArray)(value)) {
            if (value.length === 0) {
              if (childNodes.length) {
                childNodes = (0, _domdiff.default)(node.parentNode, childNodes, [], diffOptions);
              }
            } else {
              switch (typeof value[0]) {
                case 'string':
                case 'number':
                case 'boolean':
                  anyContent(String(value));
                  break;

                case 'function':
                  anyContent(value.map(invoke, node));
                  break;

                case 'object':
                  if ((0, _shared.isArray)(value[0])) {
                    value = value.concat.apply([], value);
                  }

                default:
                  childNodes = (0, _domdiff.default)(node.parentNode, childNodes, value, diffOptions);
                  break;
              }
            }
          } else if (canDiff(value)) {
            childNodes = (0, _domdiff.default)(node.parentNode, childNodes, value.nodeType === 11 ? slice.call(value.childNodes) : [value], diffOptions);
          } else if ('text' in value) {
            anyContent(String(value.text));
          } else if ('any' in value) {
            anyContent(value.any);
          } else if ('html' in value) {
            childNodes = (0, _domdiff.default)(node.parentNode, childNodes, slice.call((0, _createContent.default)([].concat(value.html).join(''), nodeType).childNodes), diffOptions);
          } else if ('length' in value) {
            anyContent(slice.call(value));
          }

          break;
      }
    };

    return anyContent;
  },

  // style or textareas don't accept HTML as content
  // it's pointless to transform or analyze anything
  // different from text there but it's worth checking
  // for possible defined intents.
  text(node) {
    let oldValue;

    const textContent = value => {
      if (oldValue !== value) {
        oldValue = value;
        const type = typeof value;

        if (type === 'object' && value) {
          if ('text' in value) {
            textContent(String(value.text));
          } else if ('any' in value) {
            textContent(value.any);
          } else if ('html' in value) {
            textContent([].concat(value.html).join(''));
          } else if ('length' in value) {
            textContent(slice.call(value).join(''));
          }
        } else if (type === 'function') {
          textContent(value(node));
        } else {
          node.textContent = value == null ? '' : value;
        }
      }
    };

    return textContent;
  }

};

function invoke(callback) {
  return callback(this);
}
},{"@ungap/create-content":"../node_modules/@ungap/create-content/esm/index.js","domdiff":"../node_modules/domdiff/esm/index.js","domtagger":"../node_modules/domtagger/esm/index.js","hyperhtml-style":"../node_modules/hyperhtml-style/esm/index.js","./shared.js":"../node_modules/lighterhtml/esm/shared.js"}],"../node_modules/lighterhtml/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;
exports.Hole = Hole;
exports.transform = exports.svg = exports.html = exports.hook = void 0;

var _weakmap = _interopRequireDefault(require("@ungap/weakmap"));

var _templateTagArguments = _interopRequireDefault(require("@ungap/template-tag-arguments"));

var _shared = require("./shared.js");

var _tagger = _interopRequireDefault(require("./tagger.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const wm = new _weakmap.default();
const container = new _weakmap.default();
let current = null; // can be used with any useRef hook
// returns an `html` and `svg` function

const hook = useRef => ({
  html: createHook(useRef, html),
  svg: createHook(useRef, svg)
}); // generic content render


exports.hook = hook;

function render(node, callback) {
  const value = update.call(this, node, callback);

  if (container.get(node) !== value) {
    container.set(node, value);
    appendClean(node, value);
  }

  return node;
} // keyed render via render(node, () => html`...`)
// non keyed renders in the wild via html`...`


const html = outer('html');
exports.html = html;
const svg = outer('svg'); // an indirect exposure of a domtagger capability
// usable to transform once per template any layout

exports.svg = svg;

const transform = callback => {
  const {
    transform
  } = _tagger.default.prototype;
  _tagger.default.prototype.transform = transform ? markup => callback(transform(markup)) : callback;
}; // - - - - - - - - - - - - - - - - - - - - - - - - - - - -


exports.transform = transform;

function appendClean(node, fragment) {
  node.textContent = '';
  node.appendChild(fragment);
}

function asNode(result, forceFragment) {
  return result.nodeType === _shared.wireType ? result.valueOf(forceFragment) : result;
}

function createHook(useRef, view) {
  return function () {
    const ref = useRef(null);
    if (ref.current === null) ref.current = view.for(ref);
    return asNode(ref.current.apply(null, arguments), false);
  };
}

function outer(type) {
  const wm = new _weakmap.default();

  tag.for = (identity, id) => {
    const ref = wm.get(identity) || set(identity);
    if (id == null) id = '$';
    return ref[id] || create(ref, id);
  };

  return tag;

  function create(ref, id) {
    let args = [];
    let wire = null;
    const tagger = new _tagger.default(type);

    const callback = () => tagger.apply(null, unrollArray(args, 1, 1));

    return ref[id] = function () {
      args = _templateTagArguments.default.apply(null, arguments);
      const result = update(tagger, callback);
      return wire || (wire = wiredContent(result));
    };
  }

  function set(identity) {
    const ref = {
      '$': null
    };
    wm.set(identity, ref);
    return ref;
  }

  function tag() {
    const args = _templateTagArguments.default.apply(null, arguments);

    return current ? new Hole(type, args) : new _tagger.default(type).apply(null, args);
  }
}

function set(node) {
  const info = {
    i: 0,
    length: 0,
    stack: [],
    update: false
  };
  wm.set(node, info);
  return info;
}

function update(reference, callback) {
  const prev = current;
  current = wm.get(reference) || set(reference);
  current.i = 0;
  const ret = callback.call(this);
  let value;

  if (ret instanceof Hole) {
    value = asNode(unroll(ret, 0), current.update);
    const {
      i,
      length,
      stack,
      update
    } = current;
    if (i < length) stack.splice(current.length = i);
    if (update) current.update = false;
  } else {
    value = asNode(ret, false);
  }

  current = prev;
  return value;
}

function unroll(hole, level) {
  const {
    i,
    length,
    stack
  } = current;
  const {
    type,
    args
  } = hole;
  const stacked = i < length;
  current.i++;
  if (!stacked) current.length = stack.push({
    l: level,
    kind: type,
    tag: null,
    tpl: args[0],
    wire: null
  });
  unrollArray(args, 1, level + 1);
  const info = stack[i];

  if (stacked) {
    const {
      l: control,
      kind,
      tag,
      tpl,
      wire
    } = info;

    if (control === level && type === kind && tpl === args[0]) {
      tag.apply(null, args);
      return wire;
    }
  }

  const tag = new _tagger.default(type);
  const wire = wiredContent(tag.apply(null, args));
  info.l = level;
  info.kind = type;
  info.tag = tag;
  info.tpl = args[0];
  info.wire = wire;
  if (i < 1) current.update = true;
  return wire;
}

function unrollArray(arr, i, level) {
  for (const {
    length
  } = arr; i < length; i++) {
    const value = arr[i];

    if (typeof value === 'object' && value) {
      if (value instanceof Hole) {
        arr[i] = unroll(value, level - 1);
      } else if ((0, _shared.isArray)(value)) {
        arr[i] = unrollArray(value, 0, level++);
      }
    }
  }

  return arr;
}

function wiredContent(node) {
  const childNodes = node.childNodes;
  const {
    length
  } = childNodes;
  return length === 1 ? childNodes[0] : length ? new _shared.Wire(childNodes) : node;
}

Object.freeze(Hole);

function Hole(type, args) {
  this.type = type;
  this.args = args;
}
},{"@ungap/weakmap":"../node_modules/@ungap/weakmap/esm/index.js","@ungap/template-tag-arguments":"../node_modules/@ungap/template-tag-arguments/esm/index.js","./shared.js":"../node_modules/lighterhtml/esm/shared.js","./tagger.js":"../node_modules/lighterhtml/esm/tagger.js"}],"../src/utils/bind_class.util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bind_class = bind_class;

function bind_class(classes, static_class) {
  return [...Object.keys(classes).filter(classname => classes[classname]), static_class].join(" ");
}
},{}],"../src/utils/bind_style.util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bind_style = bind_style;

function bind_style(style_object) {
  return Object.entries(style_object).reduce((styleString, [propName, propValue]) => {
    propName = propName.replace(/([A-Z])/g, matches => `-${matches[0].toLowerCase()}`);
    return `${styleString}${propName}:${propValue};`;
  }, '');
}
},{}],"../src/utils/box_arguments_behavior.util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.box_arguments_behavior = box_arguments_behavior;

function box_arguments_behavior([top, right, bottom, left]) {
  if (typeof top === "number" && typeof right === "number" && typeof bottom === "undefined" && typeof left === "undefined") {
    bottom = top;
    left = right;
  } else if (typeof right === "undefined" && typeof bottom === "undefined" && typeof left === "undefined") {
    bottom = top;
    right = top;
    left = top;
  }

  return [top, right, bottom, left];
}
},{}],"../src/Components/View.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/Components/View.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.View = void 0;

var _lighterhtml = require("lighterhtml");

var _bind_class = require("../utils/bind_class.util");

var _bind_style = require("../utils/bind_style.util");

var _box_arguments_behavior = require("../utils/box_arguments_behavior.util");

require("./View.scss");

const View = (...children) => ({
  children,
  classList: {},
  viewStyle: {},

  get isEmptyView() {
    return false;
  },

  addClass(className) {
    this.classList[className] = true;
    return this;
  },

  removeClass(className) {
    this.classList[className] = false;
    return this;
  },

  padding(top = 0, right, bottom, left) {
    const [t, r, b, l] = (0, _box_arguments_behavior.box_arguments_behavior)([top, right, bottom, left]);
    this.viewStyle.padding = `${t}px ${r}px ${b}px ${l}px`;
    return this;
  },

  margin(top = 0, right, bottom, left) {
    const [t, r, b, l] = (0, _box_arguments_behavior.box_arguments_behavior)([top, right, bottom, left]);
    this.viewStyle.margin = `${t}px ${r}px ${b}px ${l}px`;
    return this;
  },

  marginTop(value) {
    this.viewStyle.marginTop = value + "px";
    return this;
  },

  marginRight(value) {
    this.viewStyle.marginRight = value + "px";
    return this;
  },

  marginBottom(value) {
    this.viewStyle.marginBottom = value + "px";
    return this;
  },

  marginLeft(value) {
    this.viewStyle.marginLeft = value + "px";
    return this;
  },

  onclick(e) {},

  render() {
    return _lighterhtml.html`<div onclick="${e => this.onclick(e)}" class="${(0, _bind_class.bind_class)(this.classList, 'view')}" style="${(0, _bind_style.bind_style)(this.viewStyle)}">${this.children.map(child => child.render())}</div>`;
  }

});

exports.View = View;
},{"lighterhtml":"../node_modules/lighterhtml/esm/index.js","../utils/bind_class.util":"../src/utils/bind_class.util.js","../utils/bind_style.util":"../src/utils/bind_style.util.js","../utils/box_arguments_behavior.util":"../src/utils/box_arguments_behavior.util.js","./View.scss":"../src/Components/View.scss"}],"../src/Components/Controls/Text.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/Components/Controls/Text.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.TEXT_STYLE = void 0;

var _View = require("../View");

require("./Text.scss");

const TEXT_STYLE = {
  large_title: "large_title",
  subheadline: "subheadline",
  footnote: "footnote",
  body: "body",
  label: "label"
};
exports.TEXT_STYLE = TEXT_STYLE;

const Text = (value, style) => ({ ...(0, _View.View)().addClass("text").addClass(style),

  uppercase() {
    this.addClass("uppercase");
    return this;
  },

  bold() {
    this.addClass("bold");
    return this;
  },

  underline() {
    this.addClass("underline");
    return this;
  },

  italic() {
    this.addClass("italic");
    return this;
  },

  size(value) {
    this.viewStyle.fontSize = value + "px";
    return this;
  },

  font(fontStack) {
    this.viewStyle.fontFamily = fontStack;
    return this;
  },

  children: [{
    render() {
      return value;
    }

  }]
});

exports.Text = Text;
},{"../View":"../src/Components/View.js","./Text.scss":"../src/Components/Controls/Text.scss"}],"../src/Components/Controls/Tag.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/Components/Controls/Tag.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tag = void 0;

var _Text = require("./Text");

require("./Tag.scss");

const Tag = value => ({ ...(0, _Text.Text)(value, _Text.TEXT_STYLE.label).addClass("tag")
});

exports.Tag = Tag;
},{"./Text":"../src/Components/Controls/Text.js","./Tag.scss":"../src/Components/Controls/Tag.scss"}],"../src/Components/Presentation/EmptyView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyView = void 0;

var _lighterhtml = require("lighterhtml");

var _View = require("../View");

const EmptyView = () => ({ ...(0, _View.View)(),

  render() {
    return _lighterhtml.html``;
  },

  get isEmptyView() {
    return true;
  }

});

exports.EmptyView = EmptyView;
},{"lighterhtml":"../node_modules/lighterhtml/esm/index.js","../View":"../src/Components/View.js"}],"../src/Components/Controls/Button.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/Components/Controls/Button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _View = require("../View");

var _lighterhtml = require("lighterhtml");

var _bind_class = require("../../utils/bind_class.util");

var _bind_style = require("../../utils/bind_style.util");

var _EmptyView = require("../Presentation/EmptyView");

var _Text = require("../Controls/Text");

require("./Button.scss");

const Button = (label = "Button", action = () => {}) => ({ ...(0, _View.View)(),
  icon: (0, _EmptyView.EmptyView)(),

  setIcon(icon) {
    this.icon = icon;
    this.addClass("icon_button");
    return this;
  },

  render() {
    return _lighterhtml.html`<button class="${(0, _bind_class.bind_class)(this.classList)}" style="${(0, _bind_style.bind_style)(this.viewStyle)}" onclick="${e => {
      e.stopPropagation();
      action();
    }}">${this.icon.render()} ${(0, _Text.Text)(label, _Text.TEXT_STYLE.label).render()}</button>`;
  }

});

exports.Button = Button;
},{"../View":"../src/Components/View.js","lighterhtml":"../node_modules/lighterhtml/esm/index.js","../../utils/bind_class.util":"../src/utils/bind_class.util.js","../../utils/bind_style.util":"../src/utils/bind_style.util.js","../Presentation/EmptyView":"../src/Components/Presentation/EmptyView.js","../Controls/Text":"../src/Components/Controls/Text.js","./Button.scss":"../src/Components/Controls/Button.scss"}],"../src/Components/Controls/Icon.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/Components/Controls/Icon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;

require("./Icon.scss");

var _View = require("../View");

const Icon = iconPath => ({ ...(0, _View.View)().addClass("icon"),
  size: 24,

  setSize(size) {
    switch (size) {
      case 18:
      case 24:
      case 36:
      case 48:
        this.size = size;
        this.addClass("size_" + size);
        break;

      default:
        throw Error(`Size value ${size} is invalid. Authorized values : 18, 24, 36, 48.`);
    }

    return this;
  }

});

exports.Icon = Icon;
},{"./Icon.scss":"../src/Components/Controls/Icon.scss","../View":"../src/Components/View.js"}],"../src/Components/Controls/Image.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/Components/Controls/Image.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = void 0;

var _View = require("../View");

var _lighterhtml = require("lighterhtml");

var _bind_class = require("../../utils/bind_class.util");

var _bind_style = require("../../utils/bind_style.util");

var _box_arguments_behavior = require("../../utils/box_arguments_behavior.util");

require("./Image.scss");

const Image = src => ({ ...(0, _View.View)(),

  cornerRadius(top_left, top_right, bottom_right, bottom_left) {
    const [tl, tr, br, bl] = (0, _box_arguments_behavior.box_arguments_behavior)([top_left, top_right, bottom_right, bottom_left]);
    this.viewStyle.borderRadius = `${tl}px ${tr}px ${br}px ${bl}px`;
    return this;
  },

  mask(src) {
    this.viewStyle.mask = `url(${src}) luminance 20%`;
    return this;
  },

  size(width, height) {
    this.viewStyle.width = width + "px";
    this.viewStyle.height = height + "px";
    return this;
  },

  render() {
    return _lighterhtml.html`<img class="${(0, _bind_class.bind_class)(this.classList, 'image')}" style="${(0, _bind_style.bind_style)(this.viewStyle)}" src="${src}" alt="">`;
  }

});

exports.Image = Image;
},{"../View":"../src/Components/View.js","lighterhtml":"../node_modules/lighterhtml/esm/index.js","../../utils/bind_class.util":"../src/utils/bind_class.util.js","../../utils/bind_style.util":"../src/utils/bind_style.util.js","../../utils/box_arguments_behavior.util":"../src/utils/box_arguments_behavior.util.js","./Image.scss":"../src/Components/Controls/Image.scss"}],"../src/Components/Layouts/Stack.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/Components/Layouts/Stack.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VStack = exports.HStack = exports.Stack = void 0;

var _View = require("../View");

require("./Stack.scss");

const Stack = children => ({ ...(0, _View.View)().addClass("stack"),

  alignItems(alignment) {
    this.viewStyle.alignItems = alignment;
    return this;
  },

  justifyContent(justification) {
    this.viewStyle.justifyContent = justification;
    return this;
  },

  children
});

exports.Stack = Stack;

const HStack = (...children) => Stack(children).addClass("horizontal");

exports.HStack = HStack;

const VStack = (...children) => Stack(children).addClass("vertical");

exports.VStack = VStack;
},{"../View":"../src/Components/View.js","./Stack.scss":"../src/Components/Layouts/Stack.scss"}],"../src/Components/Controls/TextField.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/Components/Controls/TextField.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = void 0;

var _View = require("../View");

var _lighterhtml = require("lighterhtml");

var _bind_style = require("../../utils/bind_style.util");

require("./TextField.scss");

const TextField = (name, type = "text", placeholder = "", formater) => ({ ...(0, _View.View)(),
  value: "",

  setValue(value) {
    this.value = value;
    return this;
  },

  render() {
    if (type !== "textarea") {
      return _lighterhtml.html`<input class="text_field" value="${this.value}" style="${(0, _bind_style.bind_style)(this.viewStyle)}" type="${type}" name="${name}" placeholder="${placeholder}">`;
    } else {
      return _lighterhtml.html`<textarea class="text_field" style="${(0, _bind_style.bind_style)(this.viewStyle)}" name="${name}" placeholder="${placeholder}">${this.value}</textarea>`;
    }
  }

});

exports.TextField = TextField;
},{"../View":"../src/Components/View.js","lighterhtml":"../node_modules/lighterhtml/esm/index.js","../../utils/bind_style.util":"../src/utils/bind_style.util.js","./TextField.scss":"../src/Components/Controls/TextField.scss"}],"../src/Components/Controls/LabelTextField.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelTextField = void 0;

var _Stack = require("../Layouts/Stack");

var _Text = require("./Text");

var _TextField = require("./TextField");

var _View = require("../View");

const LabelTextField = (label, name, type, placeholder, formater) => ({ ...(0, _View.View)(),
  textField: (0, _TextField.TextField)(name, type, placeholder, formater),
  value: "",

  setValue(value) {
    this.value = value;
    return this;
  },

  get children() {
    return [(0, _Stack.VStack)((0, _Text.Text)(label, _Text.TEXT_STYLE.label), (0, _TextField.TextField)(name, type, placeholder, formater).setValue(this.value).marginTop(8))];
  }

});

exports.LabelTextField = LabelTextField;
},{"../Layouts/Stack":"../src/Components/Layouts/Stack.js","./Text":"../src/Components/Controls/Text.js","./TextField":"../src/Components/Controls/TextField.js","../View":"../src/Components/View.js"}],"../src/Components/Controls/Loader.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/Components/Controls/Loader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = void 0;

var _View = require("../View");

require("./Loader.scss");

var _Icon = require("./Icon");

const Loader = () => {
  return (0, _Icon.Icon)("../../assets/loader.svg").addClass("loader");
};

exports.Loader = Loader;
},{"../View":"../src/Components/View.js","./Loader.scss":"../src/Components/Controls/Loader.scss","./Icon":"../src/Components/Controls/Icon.js"}],"../src/Components/Presentation/LoadingScreen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Stack = require("../../Components/Layouts/Stack");

var _Loader = require("../../Components/Controls/Loader");

var _Text = require("../../Components/Controls/Text");

var _default = () => (0, _Stack.VStack)((0, _Loader.Loader)(), (0, _Text.Text)("Your app is starting", _Text.TEXT_STYLE.footnote).marginTop(16)).alignItems("center").justifyContent("center").addClass("loading_screen");

exports.default = _default;
},{"../../Components/Layouts/Stack":"../src/Components/Layouts/Stack.js","../../Components/Controls/Loader":"../src/Components/Controls/Loader.js","../../Components/Controls/Text":"../src/Components/Controls/Text.js"}],"../src/Controllers/RenderController.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render_controller = void 0;

var _lighterhtml = require("lighterhtml");

var _LoadingScreen = _interopRequireDefault(require("../Components/Presentation/LoadingScreen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RenderController = () => ({
  theme: "dark",
  currentView: (0, _LoadingScreen.default)(),

  setCurrentView(view) {
    this.currentView = view;
    this.render();
  },

  setTheme(variant) {
    if (variant !== "light" && variant !== "dark") throw Error("variant parameter must be either light or dark");
    this.theme = variant;
    return this;
  },

  render() {
    this.currentView.addClass("rootView");
    (0, _lighterhtml.render)(document.body, () => this.currentView.render());
  }

});

const render_controller = RenderController();
exports.render_controller = render_controller;
},{"lighterhtml":"../node_modules/lighterhtml/esm/index.js","../Components/Presentation/LoadingScreen":"../src/Components/Presentation/LoadingScreen.js"}],"../src/Components/Controls/Segment.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/Components/Controls/Segment.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Segment = void 0;

var _View = require("../View");

var _RenderController = require("../../Controllers/RenderController");

require("./Segment.scss");

const Segment = (action = () => {}, ...items) => ({ ...(0, _View.View)().addClass("segment"),
  selectedItem: 0,

  select(itemValue) {
    this.selectedItem = items.findIndex(({
      value
    }) => {
      return value === itemValue;
    });
    return this;
  },

  padding() {
    throw Error("padding can't be set on Segment view");
  },

  get children() {
    const select = i => this.select(i);

    return items.map(({
      value,
      label
    }, i) => ({ ...(0, _View.View)(),
      classList: {
        item: true,
        selected: i === this.selectedItem
      },
      children: [label],

      onclick(e) {
        select(value);
        action(value);

        _RenderController.render_controller.render();
      }

    }));
  }

});

exports.Segment = Segment;
},{"../View":"../src/Components/View.js","../../Controllers/RenderController":"../src/Controllers/RenderController.js","./Segment.scss":"../src/Components/Controls/Segment.scss"}],"../src/Components/Presentation/ConditionalContent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConditionalContent = ConditionalContent;

function ConditionalContent(expr) {
  return expr.render();
}
},{}],"../src/Components/Layouts/List.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/Components/Layouts/List.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = exports.ListRow = void 0;

var _View = require("../View");

var _EmptyView = require("../Presentation/EmptyView");

require("./List.scss");

const ListRow = (...children) => ({ ...(0, _View.View)(...children).addClass("list_row")
});

exports.ListRow = ListRow;

const List = (items, cell_view_builder = () => (0, _EmptyView.EmptyView)()) => ({ ...(0, _View.View)().addClass("list"),
  children: items.map(item => ListRow(cell_view_builder(item).padding(8, 16)))
});

exports.List = List;
},{"../View":"../src/Components/View.js","../Presentation/EmptyView":"../src/Components/Presentation/EmptyView.js","./List.scss":"../src/Components/Layouts/List.scss"}],"../src/Components/Layouts/Grid.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/Components/Layouts/Grid.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = void 0;

var _Stack = require("./Stack");

require("./Grid.scss");

const Grid = (...children) => ({ ...(0, _Stack.Stack)().removeClass("stack").addClass("grid"),

  gap(h, v) {
    if (typeof h === "number" && typeof v === "undefined") {
      v = h;
    }

    this.viewStyle.gridGap = `${h}px ${v}px`;
    return this;
  },

  areas(schema) {
    this.children = Array.from(Object.keys(this.children[0])).map(area => {
      console.log(this.children[0], area);
      this.children[0][area].viewStyle.gridArea = area;
      return this.children[0][area];
    });
    this.viewStyle.gridTemplateAreas = schema;
    return this;
  },

  columns(schema) {
    this.viewStyle.gridTemplateColumns = schema;
    return this;
  },

  rows(schema) {
    this.viewStyle.gridTemplateRows = schema;
    return this;
  },

  children
});

exports.Grid = Grid;
},{"./Stack":"../src/Components/Layouts/Stack.js","./Grid.scss":"../src/Components/Layouts/Grid.scss"}],"../src/Components/Architectural/TitleBar.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/Components/Architectural/TitleBar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleBar = void 0;

var _Grid = require("../Layouts/Grid");

var _Text = require("../Controls/Text");

var _EmptyView = require("../Presentation/EmptyView");

var _Stack = require("../Layouts/Stack");

var _View = require("../View");

require("./TitleBar.scss");

var _ = require("../..");

const TitleBar = ({
  title,
  left_item = (0, _View.View)(),
  right_item = (0, _View.View)()
}) => ({ ...(0, _View.View)().addClass("navigation_bar"),

  get children() {
    return [(0, _Grid.Grid)({
      left_item,
      right_item,
      title: (0, _Text.Text)(title, _Text.TEXT_STYLE.large_title)
    }).gap(8, 24).areas(`"left_item . right_item" "title title title"`).columns("auto 1fr auto").rows("36px auto")];
  }

});

exports.TitleBar = TitleBar;
},{"../Layouts/Grid":"../src/Components/Layouts/Grid.js","../Controls/Text":"../src/Components/Controls/Text.js","../Presentation/EmptyView":"../src/Components/Presentation/EmptyView.js","../Layouts/Stack":"../src/Components/Layouts/Stack.js","../View":"../src/Components/View.js","./TitleBar.scss":"../src/Components/Architectural/TitleBar.scss","../..":"../src/index.js"}],"../node_modules/rlite-router/rlite.js":[function(require,module,exports) {
var define;
// This library started as an experiment to see how small I could make
// a functional router. It has since been optimized (and thus grown).
// The redundancy and inelegance here is for the sake of either size
// or speed.
//
// That's why router params are marked with a single char: `~` and named params are denoted `:`
(function (root, factory) {
  var define = root && root.define;

  if (define && define.amd) {
    define('rlite', [], factory);
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  } else {
    root.Rlite = factory();
  }
}(this, function () {
  return function (notFound, routeDefinitions) {
    var routes = {};
    var decode = decodeURIComponent;

    init();

    return run;

    function init() {
      for (var key in routeDefinitions) {
        add(key, routeDefinitions[key]);
      }
    };

    function noop(s) { return s; }

    function sanitize(url) {
      ~url.indexOf('/?') && (url = url.replace('/?', '?'));
      url[0] == '/' && (url = url.slice(1));
      url[url.length - 1] == '/' && (url = url.slice(0, -1));

      return url;
    }

    // Recursively searches the route tree for a matching route
    // pieces: an array of url parts, ['users', '1', 'edit']
    // esc: the function used to url escape values
    // i: the index of the piece being processed
    // rules: the route tree
    // params: the computed route parameters (this is mutated), and is a stack since we don't have fast immutable datatypes
    //
    // This attempts to match the most specific route, but may end int a dead-end. We then attempt a less specific
    // route, following named route parameters. In searching this secondary branch, we need to make sure to clear
    // any route params that were generated during the search of the dead-end branch.
    function recurseUrl(pieces, esc, i, rules, params) {
      if (!rules) {
        return;
      }

      if (i >= pieces.length) {
        var cb = rules['@'];
        return cb && {
          cb: cb,
          params: params.reduce(function(h, kv) { h[kv[0]] = kv[1]; return h; }, {}),
        };
      }

      var piece = esc(pieces[i]);
      var paramLen = params.length;
      return recurseUrl(pieces, esc, i + 1, rules[piece.toLowerCase()], params)
        || recurseNamedUrl(pieces, esc, i + 1, rules, ':', piece, params, paramLen)
        || recurseNamedUrl(pieces, esc, pieces.length, rules, '*', pieces.slice(i).join('/'), params, paramLen);
    }

    // Recurses for a named route, where the name is looked up via key and associated with val
    function recurseNamedUrl(pieces, esc, i, rules, key, val, params, paramLen) {
      params.length = paramLen; // Reset any params generated in the unsuccessful search branch
      var subRules = rules[key];
      subRules && params.push([subRules['~'], val]);
      return recurseUrl(pieces, esc, i, subRules, params);
    }

    function processQuery(url, ctx, esc) {
      if (url && ctx.cb) {
        var hash = url.indexOf('#'),
            query = (hash < 0 ? url : url.slice(0, hash)).split('&');

        for (var i = 0; i < query.length; ++i) {
          var nameValue = query[i].split('=');

          ctx.params[nameValue[0]] = esc(nameValue[1]);
        }
      }

      return ctx;
    }

    function lookup(url) {
      var querySplit = sanitize(url).split('?');
      var esc = ~url.indexOf('%') ? decode : noop;

      return processQuery(querySplit[1], recurseUrl(querySplit[0].split('/'), esc, 0, routes, []) || {}, esc);
    }

    function add(route, handler) {
      var pieces = route.split('/');
      var rules = routes;

      for (var i = +(route[0] === '/'); i < pieces.length; ++i) {
        var piece = pieces[i];
        var name = piece[0] == ':' ? ':' : piece[0] == '*' ? '*' : piece.toLowerCase();

        rules = rules[name] || (rules[name] = {});

        (name == ':' || name == '*') && (rules['~'] = piece.slice(1));
      }

      rules['@'] = handler;
    }

    function run(url, arg) {
      var result = lookup(url);

      return (result.cb || notFound)(result.params, arg, url);
    };
  };
}));

},{}],"../src/Controllers/NavigationController.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigation_controller = exports.NavigationController = void 0;

var _View = require("../Components/View");

var _Text = require("../Components/Controls/Text");

var _TitleBar = require("../Components/Architectural/TitleBar");

var _rliteRouter = _interopRequireDefault(require("rlite-router"));

var _LoadingScreen = _interopRequireDefault(require("../Components/Presentation/LoadingScreen"));

var _RenderController = require("./RenderController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NavigationController = () => {
  return { ...(0, _View.View)().addClass("navigation_controller"),
    currentView: (0, _View.View)((0, _Text.Text)("Page not found")),
    appName: "App name",

    resolveRoute() {
      return (0, _LoadingScreen.default)();
    },

    setAppName(name) {
      this.appName = name;
      return this;
    },

    setRoutes(routes) {
      this.resolveRoute = (0, _rliteRouter.default)(() => (0, _View.View)((0, _Text.Text)("Page not found")), routes);
      this.navigate(location.pathname);
      window.addEventListener("popstate", () => {
        this.currentView = this.resolveRoute(location.pathname);
        document.title = this.appName + " • " + this.currentView.title;

        _RenderController.render_controller.render();
      });
      return this;
    },

    navigate(path) {
      history.pushState({}, "", path);
      this.currentView = this.resolveRoute(path);
      document.title = this.appName + " • " + this.currentView.title;

      _RenderController.render_controller.render();
    },

    get children() {
      return [this.currentView];
    }

  };
};

exports.NavigationController = NavigationController;
const navigation_controller = NavigationController();
exports.navigation_controller = navigation_controller;
},{"../Components/View":"../src/Components/View.js","../Components/Controls/Text":"../src/Components/Controls/Text.js","../Components/Architectural/TitleBar":"../src/Components/Architectural/TitleBar.js","rlite-router":"../node_modules/rlite-router/rlite.js","../Components/Presentation/LoadingScreen":"../src/Components/Presentation/LoadingScreen.js","./RenderController":"../src/Controllers/RenderController.js"}],"../src/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("./index.scss");

var _Tag = require("./Components/Controls/Tag");

Object.keys(_Tag).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Tag[key];
    }
  });
});

var _Button = require("./Components/Controls/Button");

Object.keys(_Button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Button[key];
    }
  });
});

var _Icon = require("./Components/Controls/Icon");

Object.keys(_Icon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Icon[key];
    }
  });
});

var _Image = require("./Components/Controls/Image");

Object.keys(_Image).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Image[key];
    }
  });
});

var _LabelTextField = require("./Components/Controls/LabelTextField");

Object.keys(_LabelTextField).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _LabelTextField[key];
    }
  });
});

var _Segment = require("./Components/Controls/Segment");

Object.keys(_Segment).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Segment[key];
    }
  });
});

var _Text = require("./Components/Controls/Text");

Object.keys(_Text).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Text[key];
    }
  });
});

var _TextField = require("./Components/Controls/TextField");

Object.keys(_TextField).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TextField[key];
    }
  });
});

var _ConditionalContent = require("./Components/Presentation/ConditionalContent");

Object.keys(_ConditionalContent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ConditionalContent[key];
    }
  });
});

var _EmptyView = require("./Components/Presentation/EmptyView");

Object.keys(_EmptyView).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _EmptyView[key];
    }
  });
});

var _Loader = require("./Components/Controls/Loader");

Object.keys(_Loader).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Loader[key];
    }
  });
});

var _List = require("./Components/Layouts/List");

Object.keys(_List).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _List[key];
    }
  });
});

var _Stack = require("./Components/Layouts/Stack");

Object.keys(_Stack).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Stack[key];
    }
  });
});

var _Grid = require("./Components/Layouts/Grid");

Object.keys(_Grid).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Grid[key];
    }
  });
});

var _TitleBar = require("./Components/Architectural/TitleBar");

Object.keys(_TitleBar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TitleBar[key];
    }
  });
});

var _View = require("./Components/View");

Object.keys(_View).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _View[key];
    }
  });
});

var _RenderController = require("./Controllers/RenderController");

Object.keys(_RenderController).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _RenderController[key];
    }
  });
});

var _NavigationController = require("./Controllers/NavigationController");

Object.keys(_NavigationController).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _NavigationController[key];
    }
  });
});
},{"./index.scss":"../src/index.scss","./Components/Controls/Tag":"../src/Components/Controls/Tag.js","./Components/Controls/Button":"../src/Components/Controls/Button.js","./Components/Controls/Icon":"../src/Components/Controls/Icon.js","./Components/Controls/Image":"../src/Components/Controls/Image.js","./Components/Controls/LabelTextField":"../src/Components/Controls/LabelTextField.js","./Components/Controls/Segment":"../src/Components/Controls/Segment.js","./Components/Controls/Text":"../src/Components/Controls/Text.js","./Components/Controls/TextField":"../src/Components/Controls/TextField.js","./Components/Presentation/ConditionalContent":"../src/Components/Presentation/ConditionalContent.js","./Components/Presentation/EmptyView":"../src/Components/Presentation/EmptyView.js","./Components/Controls/Loader":"../src/Components/Controls/Loader.js","./Components/Layouts/List":"../src/Components/Layouts/List.js","./Components/Layouts/Stack":"../src/Components/Layouts/Stack.js","./Components/Layouts/Grid":"../src/Components/Layouts/Grid.js","./Components/Architectural/TitleBar":"../src/Components/Architectural/TitleBar.js","./Components/View":"../src/Components/View.js","./Controllers/RenderController":"../src/Controllers/RenderController.js","./Controllers/NavigationController":"../src/Controllers/NavigationController.js"}],"views/ContactListView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UIKit = require("UIKit");

const ContactRow = item => (0, _UIKit.View)((0, _UIKit.Grid)({
  img: (0, _UIKit.Image)("https://cdn.mgig.fr/2019/06/mg-818a12f0-e85c-4c65-aeef-w1000h562-sc.jpg").cornerRadius(16).size(32, 32),
  text: (0, _UIKit.VStack)((0, _UIKit.Text)(item.name, _UIKit.TEXT_STYLE.label), (0, _UIKit.Text)(item.email, _UIKit.TEXT_STYLE.subheadline)),
  action: (0, _UIKit.Button)("Delete")
}).columns("auto auto 1fr auto").areas(`"img text . action"`).alignItems("center").gap(12));

var _default = users => (0, _UIKit.View)((0, _UIKit.TitleBar)({
  title: "Contacts"
}), (0, _UIKit.List)(users, ContactRow));

exports.default = _default;
},{"UIKit":"../src/index.js"}],"views/ContactDetailView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UIKit = require("UIKit");

var _default = user => (0, _UIKit.NavigationView)(user.name, {}, () => (0, _UIKit.VStack)((0, _UIKit.Image)("https://cdn.mgig.fr/2019/06/mg-818a12f0-e85c-4c65-aeef-w1000h562-sc.jpg").cornerRadius(64).size(128, 128), (0, _UIKit.NavigationButton)(`/contact-${user.id}/write`, (0, _UIKit.Text)(user.email, _UIKit.TEXT_STYLE.large_title)).marginTop(16)).alignItems("center").margin(16));

exports.default = _default;
},{"UIKit":"../src/index.js"}],"views/EmailEditionView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UIKit = require("UIKit");

var _default = user => (0, _UIKit.NavigationView)("Write an email", {}, () => (0, _UIKit.Grid)((0, _UIKit.LabelTextField)("Recipient", "destination", "email", "someone@domain.com").setValue(user.email), (0, _UIKit.TextField)("mail_body", "textarea", "Type your message...")).gap(16).margin(16));

exports.default = _default;
},{"UIKit":"../src/index.js"}],"users.json":[function(require,module,exports) {
module.exports = [{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}, {
  "id": 2,
  "name": "Ervin Howell",
  "username": "Antonette",
  "email": "Shanna@melissa.tv",
  "address": {
    "street": "Victor Plains",
    "suite": "Suite 879",
    "city": "Wisokyburgh",
    "zipcode": "90566-7771",
    "geo": {
      "lat": "-43.9509",
      "lng": "-34.4618"
    }
  },
  "phone": "010-692-6593 x09125",
  "website": "anastasia.net",
  "company": {
    "name": "Deckow-Crist",
    "catchPhrase": "Proactive didactic contingency",
    "bs": "synergize scalable supply-chains"
  }
}, {
  "id": 3,
  "name": "Clementine Bauch",
  "username": "Samantha",
  "email": "Nathan@yesenia.net",
  "address": {
    "street": "Douglas Extension",
    "suite": "Suite 847",
    "city": "McKenziehaven",
    "zipcode": "59590-4157",
    "geo": {
      "lat": "-68.6102",
      "lng": "-47.0653"
    }
  },
  "phone": "1-463-123-4447",
  "website": "ramiro.info",
  "company": {
    "name": "Romaguera-Jacobson",
    "catchPhrase": "Face to face bifurcated interface",
    "bs": "e-enable strategic applications"
  }
}, {
  "id": 4,
  "name": "Patricia Lebsack",
  "username": "Karianne",
  "email": "Julianne.OConner@kory.org",
  "address": {
    "street": "Hoeger Mall",
    "suite": "Apt. 692",
    "city": "South Elvis",
    "zipcode": "53919-4257",
    "geo": {
      "lat": "29.4572",
      "lng": "-164.2990"
    }
  },
  "phone": "493-170-9623 x156",
  "website": "kale.biz",
  "company": {
    "name": "Robel-Corkery",
    "catchPhrase": "Multi-tiered zero tolerance productivity",
    "bs": "transition cutting-edge web services"
  }
}, {
  "id": 5,
  "name": "Chelsey Dietrich",
  "username": "Kamren",
  "email": "Lucio_Hettinger@annie.ca",
  "address": {
    "street": "Skiles Walks",
    "suite": "Suite 351",
    "city": "Roscoeview",
    "zipcode": "33263",
    "geo": {
      "lat": "-31.8129",
      "lng": "62.5342"
    }
  },
  "phone": "(254)954-1289",
  "website": "demarco.info",
  "company": {
    "name": "Keebler LLC",
    "catchPhrase": "User-centric fault-tolerant solution",
    "bs": "revolutionize end-to-end systems"
  }
}, {
  "id": 6,
  "name": "Mrs. Dennis Schulist",
  "username": "Leopoldo_Corkery",
  "email": "Karley_Dach@jasper.info",
  "address": {
    "street": "Norberto Crossing",
    "suite": "Apt. 950",
    "city": "South Christy",
    "zipcode": "23505-1337",
    "geo": {
      "lat": "-71.4197",
      "lng": "71.7478"
    }
  },
  "phone": "1-477-935-8478 x6430",
  "website": "ola.org",
  "company": {
    "name": "Considine-Lockman",
    "catchPhrase": "Synchronised bottom-line interface",
    "bs": "e-enable innovative applications"
  }
}, {
  "id": 7,
  "name": "Kurtis Weissnat",
  "username": "Elwyn.Skiles",
  "email": "Telly.Hoeger@billy.biz",
  "address": {
    "street": "Rex Trail",
    "suite": "Suite 280",
    "city": "Howemouth",
    "zipcode": "58804-1099",
    "geo": {
      "lat": "24.8918",
      "lng": "21.8984"
    }
  },
  "phone": "210.067.6132",
  "website": "elvis.io",
  "company": {
    "name": "Johns Group",
    "catchPhrase": "Configurable multimedia task-force",
    "bs": "generate enterprise e-tailers"
  }
}, {
  "id": 8,
  "name": "Nicholas Runolfsdottir V",
  "username": "Maxime_Nienow",
  "email": "Sherwood@rosamond.me",
  "address": {
    "street": "Ellsworth Summit",
    "suite": "Suite 729",
    "city": "Aliyaview",
    "zipcode": "45169",
    "geo": {
      "lat": "-14.3990",
      "lng": "-120.7677"
    }
  },
  "phone": "586.493.6943 x140",
  "website": "jacynthe.com",
  "company": {
    "name": "Abernathy Group",
    "catchPhrase": "Implemented secondary concept",
    "bs": "e-enable extensible e-tailers"
  }
}, {
  "id": 9,
  "name": "Glenna Reichert",
  "username": "Delphine",
  "email": "Chaim_McDermott@dana.io",
  "address": {
    "street": "Dayna Park",
    "suite": "Suite 449",
    "city": "Bartholomebury",
    "zipcode": "76495-3109",
    "geo": {
      "lat": "24.6463",
      "lng": "-168.8889"
    }
  },
  "phone": "(775)976-6794 x41206",
  "website": "conrad.com",
  "company": {
    "name": "Yost and Sons",
    "catchPhrase": "Switchable contextually-based project",
    "bs": "aggregate real-time technologies"
  }
}, {
  "id": 10,
  "name": "Clementina DuBuque",
  "username": "Moriah.Stanton",
  "email": "Rey.Padberg@karina.biz",
  "address": {
    "street": "Kattie Turnpike",
    "suite": "Suite 198",
    "city": "Lebsackbury",
    "zipcode": "31428-2261",
    "geo": {
      "lat": "-38.2386",
      "lng": "57.2232"
    }
  },
  "phone": "024-648-3804",
  "website": "ambrose.net",
  "company": {
    "name": "Hoeger LLC",
    "catchPhrase": "Centralized empowering task-force",
    "bs": "target end-to-end models"
  }
}];
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _UIKit = require("UIKit");

var _ContactListView = _interopRequireDefault(require("./views/ContactListView"));

var _ContactDetailView = _interopRequireDefault(require("./views/ContactDetailView"));

var _EmailEditionView = _interopRequireDefault(require("./views/EmailEditionView"));

var _users = _interopRequireDefault(require("./users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener("load", () => _UIKit.render_controller.render());

_UIKit.render_controller.setCurrentView((0, _ContactListView.default)(_users.default));
},{"UIKit":"../src/index.js","./views/ContactListView":"views/ContactListView.js","./views/ContactDetailView":"views/ContactDetailView.js","./views/EmailEditionView":"views/EmailEditionView.js","./users":"users.json"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51576" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/test_project.e31bb0bc.js.map