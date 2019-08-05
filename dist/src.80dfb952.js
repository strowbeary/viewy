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
})({"../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js":[function(require,module,exports) {
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

module.exports = _taggedTemplateLiteral;
},{}],"../../node_modules/@babel/runtime/helpers/classCallCheck.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],"../../node_modules/@babel/runtime/helpers/createClass.js":[function(require,module,exports) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],"../../node_modules/@babel/runtime/helpers/typeof.js":[function(require,module,exports) {
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],"../../node_modules/@babel/runtime/helpers/assertThisInitialized.js":[function(require,module,exports) {
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],"../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":[function(require,module,exports) {
var _typeof = require("../helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"../helpers/typeof":"../../node_modules/@babel/runtime/helpers/typeof.js","./assertThisInitialized":"../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"}],"../../node_modules/@babel/runtime/helpers/getPrototypeOf.js":[function(require,module,exports) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{}],"../../node_modules/@babel/runtime/helpers/setPrototypeOf.js":[function(require,module,exports) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{}],"../../node_modules/@babel/runtime/helpers/inherits.js":[function(require,module,exports) {
var setPrototypeOf = require("./setPrototypeOf");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
},{"./setPrototypeOf":"../../node_modules/@babel/runtime/helpers/setPrototypeOf.js"}],"../../node_modules/@babel/runtime/helpers/defineProperty.js":[function(require,module,exports) {
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
},{}],"../../node_modules/@babel/runtime/helpers/construct.js":[function(require,module,exports) {
var setPrototypeOf = require("./setPrototypeOf");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
},{"./setPrototypeOf":"../../node_modules/@babel/runtime/helpers/setPrototypeOf.js"}],"../../node_modules/@ungap/weakmap/esm/index.js":[function(require,module,exports) {
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
},{}],"../../node_modules/@ungap/template-literal/esm/index.js":[function(require,module,exports) {
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
},{"@ungap/weakmap":"../../node_modules/@ungap/weakmap/esm/index.js"}],"../../node_modules/@ungap/template-tag-arguments/esm/index.js":[function(require,module,exports) {
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
},{"@ungap/template-literal":"../../node_modules/@ungap/template-literal/esm/index.js"}],"../../node_modules/hyperhtml-wire/esm/index.js":[function(require,module,exports) {
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
},{}],"../../node_modules/lighterhtml/esm/shared.js":[function(require,module,exports) {
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
},{"hyperhtml-wire":"../../node_modules/hyperhtml-wire/esm/index.js"}],"../../node_modules/@ungap/create-content/esm/index.js":[function(require,module,exports) {
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
},{}],"../../node_modules/@ungap/essential-map/esm/index.js":[function(require,module,exports) {
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
},{}],"../../node_modules/domdiff/esm/utils.js":[function(require,module,exports) {
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
},{"@ungap/essential-map":"../../node_modules/@ungap/essential-map/esm/index.js"}],"../../node_modules/domdiff/esm/index.js":[function(require,module,exports) {
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
},{"./utils.js":"../../node_modules/domdiff/esm/utils.js"}],"../../node_modules/@ungap/import-node/esm/index.js":[function(require,module,exports) {
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
},{}],"../../node_modules/@ungap/trim/esm/index.js":[function(require,module,exports) {
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
},{}],"../../node_modules/domconstants/esm/index.js":[function(require,module,exports) {
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
},{}],"../../node_modules/domsanitizer/esm/index.js":[function(require,module,exports) {
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
},{"domconstants":"../../node_modules/domconstants/esm/index.js"}],"../../node_modules/domtagger/esm/walker.js":[function(require,module,exports) {
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
},{"@ungap/essential-map":"../../node_modules/@ungap/essential-map/esm/index.js","@ungap/trim":"../../node_modules/@ungap/trim/esm/index.js","domconstants":"../../node_modules/domconstants/esm/index.js"}],"../../node_modules/domtagger/esm/index.js":[function(require,module,exports) {
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
},{"@ungap/weakmap":"../../node_modules/@ungap/weakmap/esm/index.js","@ungap/create-content":"../../node_modules/@ungap/create-content/esm/index.js","@ungap/import-node":"../../node_modules/@ungap/import-node/esm/index.js","@ungap/trim":"../../node_modules/@ungap/trim/esm/index.js","domsanitizer":"../../node_modules/domsanitizer/esm/index.js","./walker.js":"../../node_modules/domtagger/esm/walker.js"}],"../../node_modules/hyperhtml-style/esm/index.js":[function(require,module,exports) {
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
},{}],"../../node_modules/lighterhtml/esm/tagger.js":[function(require,module,exports) {
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
},{"@ungap/create-content":"../../node_modules/@ungap/create-content/esm/index.js","domdiff":"../../node_modules/domdiff/esm/index.js","domtagger":"../../node_modules/domtagger/esm/index.js","hyperhtml-style":"../../node_modules/hyperhtml-style/esm/index.js","./shared.js":"../../node_modules/lighterhtml/esm/shared.js"}],"../../node_modules/lighterhtml/esm/index.js":[function(require,module,exports) {
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
},{"@ungap/weakmap":"../../node_modules/@ungap/weakmap/esm/index.js","@ungap/template-tag-arguments":"../../node_modules/@ungap/template-tag-arguments/esm/index.js","./shared.js":"../../node_modules/lighterhtml/esm/shared.js","./tagger.js":"../../node_modules/lighterhtml/esm/tagger.js"}],"../../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":[function(require,module,exports) {
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;
},{}],"../../node_modules/@babel/runtime/helpers/iterableToArray.js":[function(require,module,exports) {
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;
},{}],"../../node_modules/@babel/runtime/helpers/nonIterableSpread.js":[function(require,module,exports) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;
},{}],"../../node_modules/@babel/runtime/helpers/toConsumableArray.js":[function(require,module,exports) {
var arrayWithoutHoles = require("./arrayWithoutHoles");

var iterableToArray = require("./iterableToArray");

var nonIterableSpread = require("./nonIterableSpread");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
},{"./arrayWithoutHoles":"../../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js","./iterableToArray":"../../node_modules/@babel/runtime/helpers/iterableToArray.js","./nonIterableSpread":"../../node_modules/@babel/runtime/helpers/nonIterableSpread.js"}],"../utils/bind_class.util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bind_class = bind_class;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bind_class(classes, static_class) {
  return [].concat((0, _toConsumableArray2.default)(Object.keys(classes).filter(function (classname) {
    return classes[classname];
  })), [static_class]).join(" ");
}
},{"@babel/runtime/helpers/toConsumableArray":"../../node_modules/@babel/runtime/helpers/toConsumableArray.js"}],"../../node_modules/@babel/runtime/helpers/arrayWithHoles.js":[function(require,module,exports) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
},{}],"../../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":[function(require,module,exports) {
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
},{}],"../../node_modules/@babel/runtime/helpers/nonIterableRest.js":[function(require,module,exports) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;
},{}],"../../node_modules/@babel/runtime/helpers/slicedToArray.js":[function(require,module,exports) {
var arrayWithHoles = require("./arrayWithHoles");

var iterableToArrayLimit = require("./iterableToArrayLimit");

var nonIterableRest = require("./nonIterableRest");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
},{"./arrayWithHoles":"../../node_modules/@babel/runtime/helpers/arrayWithHoles.js","./iterableToArrayLimit":"../../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js","./nonIterableRest":"../../node_modules/@babel/runtime/helpers/nonIterableRest.js"}],"../utils/bind_style.util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bind_style = bind_style;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bind_style(style_object) {
  return Object.entries(style_object).reduce(function (styleString, _ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        propName = _ref2[0],
        propValue = _ref2[1];

    propName = propName.replace(/([A-Z])/g, function (matches) {
      return "-".concat(matches[0].toLowerCase());
    });
    return "".concat(styleString).concat(propName, ":").concat(propValue, ";");
  }, '');
}
},{"@babel/runtime/helpers/slicedToArray":"../../node_modules/@babel/runtime/helpers/slicedToArray.js"}],"../Components/View.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.View = View;
exports.UIView = void 0;

var _construct2 = _interopRequireDefault(require("@babel/runtime/helpers/construct"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lighterhtml = require("lighterhtml");

var _bind_classUtil = require("../utils/bind_class.util.js");

var _bind_style = require("../utils/bind_style.util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["<div class=\"", "\" style=\"", "\">", "</div>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var UIView =
/*#__PURE__*/
function () {
  function UIView() {
    (0, _classCallCheck2.default)(this, UIView);
    (0, _defineProperty2.default)(this, "class_list", {});
    (0, _defineProperty2.default)(this, "specific_style", {});

    for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) {
      children[_key] = arguments[_key];
    }

    this.children = children;
  }

  (0, _createClass2.default)(UIView, [{
    key: "transform",
    value: function transform() {
      return this;
    }
  }, {
    key: "add_class",
    value: function add_class(class_name) {
      this.class_list[class_name] = true;
      return this;
    }
  }, {
    key: "remove_class",
    value: function remove_class(class_name) {
      this.class_list[class_name] = false;
      return this;
    }
  }, {
    key: "padding",
    value: function padding(top, right, bottom, left) {
      this.specific_style.padding = "".concat(top, "px ").concat(right, "px ").concat(bottom, "px ").concat(left, "px");
      return this;
    }
  }, {
    key: "margin",
    value: function margin(top, right, bottom, left) {
      this.specific_style.margin = "".concat(top, "px ").concat(right, "px ").concat(bottom, "px ").concat(left, "px");
      return this;
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _lighterhtml.html)(_templateObject(), (0, _bind_classUtil.bind_class)(this.class_list, 'view'), (0, _bind_style.bind_style)(this.specific_style), this.children.map(function (c) {
        return c.render();
      }));
    }
  }]);
  return UIView;
}();

exports.UIView = UIView;

function View() {
  for (var _len2 = arguments.length, children = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    children[_key2] = arguments[_key2];
  }

  return (0, _construct2.default)(UIView, children);
}
},{"@babel/runtime/helpers/construct":"../../node_modules/@babel/runtime/helpers/construct.js","@babel/runtime/helpers/taggedTemplateLiteral":"../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js","@babel/runtime/helpers/classCallCheck":"../../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../../node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/defineProperty":"../../node_modules/@babel/runtime/helpers/defineProperty.js","lighterhtml":"../../node_modules/lighterhtml/esm/index.js","../utils/bind_class.util.js":"../utils/bind_class.util.js","../utils/bind_style.util":"../utils/bind_style.util.js"}],"../Components/Button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;
exports.UIButton = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _View = require("./View");

var _lighterhtml = require("lighterhtml");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["<button onclick=\"", "\">", "</button>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var UIButton =
/*#__PURE__*/
function (_UIView) {
  (0, _inherits2.default)(UIButton, _UIView);

  function UIButton(label) {
    var _this;

    (0, _classCallCheck2.default)(this, UIButton);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(UIButton).call(this));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "action", function () {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "label", "");
    _this.label = label;
    return _this;
  }

  (0, _createClass2.default)(UIButton, [{
    key: "set_action",
    value: function set_action(action) {
      this.action = action;
      return this;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return (0, _lighterhtml.html)(_templateObject(), function () {
        return _this2.action();
      }, this.label);
    }
  }]);
  return UIButton;
}(_View.UIView);

exports.UIButton = UIButton;

function Button(label) {
  return new UIButton(label);
}
},{"@babel/runtime/helpers/taggedTemplateLiteral":"../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js","@babel/runtime/helpers/classCallCheck":"../../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../../node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/possibleConstructorReturn":"../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"../../node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/assertThisInitialized":"../../node_modules/@babel/runtime/helpers/assertThisInitialized.js","@babel/runtime/helpers/inherits":"../../node_modules/@babel/runtime/helpers/inherits.js","@babel/runtime/helpers/defineProperty":"../../node_modules/@babel/runtime/helpers/defineProperty.js","./View":"../Components/View.js","lighterhtml":"../../node_modules/lighterhtml/esm/index.js"}],"../Components/Stack.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HStack = HStack;
exports.VStack = VStack;
exports.UIVerticalStack = exports.UIHorizontalStack = void 0;

var _construct2 = _interopRequireDefault(require("@babel/runtime/helpers/construct"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf5 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _View = require("./View");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UIStack =
/*#__PURE__*/
function (_UIView) {
  (0, _inherits2.default)(UIStack, _UIView);

  function UIStack() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, UIStack);

    for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) {
      children[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf5.default)(UIStack)).call.apply(_getPrototypeOf2, [this].concat(children)));

    _this.add_class("stack");

    return _this;
  }

  return UIStack;
}(_View.UIView);

var UIHorizontalStack =
/*#__PURE__*/
function (_UIStack) {
  (0, _inherits2.default)(UIHorizontalStack, _UIStack);

  function UIHorizontalStack() {
    var _getPrototypeOf3;

    var _this2;

    (0, _classCallCheck2.default)(this, UIHorizontalStack);

    for (var _len2 = arguments.length, children = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      children[_key2] = arguments[_key2];
    }

    _this2 = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf3 = (0, _getPrototypeOf5.default)(UIHorizontalStack)).call.apply(_getPrototypeOf3, [this].concat(children)));

    _this2.add_class("horizontal");

    return _this2;
  }

  return UIHorizontalStack;
}(UIStack);

exports.UIHorizontalStack = UIHorizontalStack;

var UIVerticalStack =
/*#__PURE__*/
function (_UIStack2) {
  (0, _inherits2.default)(UIVerticalStack, _UIStack2);

  function UIVerticalStack() {
    var _getPrototypeOf4;

    var _this3;

    (0, _classCallCheck2.default)(this, UIVerticalStack);

    for (var _len3 = arguments.length, children = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      children[_key3] = arguments[_key3];
    }

    _this3 = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf4 = (0, _getPrototypeOf5.default)(UIVerticalStack)).call.apply(_getPrototypeOf4, [this].concat(children)));

    _this3.add_class("vertical");

    return _this3;
  }

  return UIVerticalStack;
}(UIStack);

exports.UIVerticalStack = UIVerticalStack;

function HStack() {
  for (var _len4 = arguments.length, children = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    children[_key4] = arguments[_key4];
  }

  return (0, _construct2.default)(UIHorizontalStack, children);
}

function VStack() {
  for (var _len5 = arguments.length, children = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    children[_key5] = arguments[_key5];
  }

  return (0, _construct2.default)(UIVerticalStack, children);
}
},{"@babel/runtime/helpers/construct":"../../node_modules/@babel/runtime/helpers/construct.js","@babel/runtime/helpers/classCallCheck":"../../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/possibleConstructorReturn":"../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"../../node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/inherits":"../../node_modules/@babel/runtime/helpers/inherits.js","./View":"../Components/View.js"}],"../Components/Text.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = Text;
exports.UIText = exports.TEXT_STYLE = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lighterhtml = require("lighterhtml");

var _bind_class = require("../utils/bind_class.util");

var _View = require("./View");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TEXT_STYLE = {
  large_title: "large_title",
  subheadline: "subheadline",
  footnote: "footnote",
  body: "body",
  label: "label"
};
exports.TEXT_STYLE = TEXT_STYLE;

var UIText =
/*#__PURE__*/
function (_UIView) {
  (0, _inherits2.default)(UIText, _UIView);

  function UIText(value, style) {
    var _this;

    (0, _classCallCheck2.default)(this, UIText);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(UIText).call(this, {
      render: function render() {
        return value;
      }
    }));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "is_uppercase", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "is_bold", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "style", TEXT_STYLE.body);
    _this.value = value;
    _this.style = style;

    _this.add_class("text");

    _this.add_class(style);

    return _this;
  }

  (0, _createClass2.default)(UIText, [{
    key: "uppercase",
    value: function uppercase() {
      this.add_class("uppercase");
      return this;
    }
  }, {
    key: "bold",
    value: function bold() {
      this.add_class("bold");
      return this;
    }
  }, {
    key: "underline",
    value: function underline() {
      this.add_class("underline");
      return this;
    }
  }, {
    key: "italic",
    value: function italic() {
      this.add_class("italic");
      return this;
    }
  }, {
    key: "size",
    value: function size(value) {
      return this;
    }
  }, {
    key: "font",
    value: function font(font_stack) {
      return this;
    }
  }]);
  return UIText;
}(_View.UIView);

exports.UIText = UIText;

function Text(value) {
  var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TEXT_STYLE.body;
  return new UIText(value, style);
}
},{"@babel/runtime/helpers/classCallCheck":"../../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../../node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/possibleConstructorReturn":"../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"../../node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/assertThisInitialized":"../../node_modules/@babel/runtime/helpers/assertThisInitialized.js","@babel/runtime/helpers/inherits":"../../node_modules/@babel/runtime/helpers/inherits.js","@babel/runtime/helpers/defineProperty":"../../node_modules/@babel/runtime/helpers/defineProperty.js","lighterhtml":"../../node_modules/lighterhtml/esm/index.js","../utils/bind_class.util":"../utils/bind_class.util.js","./View":"../Components/View.js"}],"../Components/TextField.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = TextField;
exports.UITextField = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _View = require("./View");

var _lighterhtml = require("lighterhtml");

var _bind_style = require("../utils/bind_style.util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["<input class=\"text_field\" style=\"", "\" type=\"", "\" name=\"", "\" placeholder=\"", "\">"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var UITextField =
/*#__PURE__*/
function (_UIView) {
  (0, _inherits2.default)(UITextField, _UIView);

  function UITextField(name) {
    var _this;

    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "text";
    var placeholder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var formater = arguments.length > 3 ? arguments[3] : undefined;
    (0, _classCallCheck2.default)(this, UITextField);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(UITextField).call(this));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "specific_style", {});
    _this.name = name;
    _this.type = type;
    _this.placeholder = placeholder;
    _this.formater = formater;
    return _this;
  }

  (0, _createClass2.default)(UITextField, [{
    key: "margin",
    value: function margin(top, right, bottom, left) {
      this.specific_style.margin = "".concat(top, "px ").concat(right, "px ").concat(bottom, "px ").concat(left, "px");
      return this;
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _lighterhtml.html)(_templateObject(), (0, _bind_style.bind_style)(this.specific_style), this.type, this.name, this.placeholder);
    }
  }]);
  return UITextField;
}(_View.UIView);

exports.UITextField = UITextField;

function TextField(name) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "text";
  var placeholder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var formater = arguments.length > 3 ? arguments[3] : undefined;
  return new UITextField(name, type, placeholder, formater);
}
},{"@babel/runtime/helpers/taggedTemplateLiteral":"../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js","@babel/runtime/helpers/classCallCheck":"../../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../../node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/possibleConstructorReturn":"../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"../../node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/assertThisInitialized":"../../node_modules/@babel/runtime/helpers/assertThisInitialized.js","@babel/runtime/helpers/inherits":"../../node_modules/@babel/runtime/helpers/inherits.js","@babel/runtime/helpers/defineProperty":"../../node_modules/@babel/runtime/helpers/defineProperty.js","./View":"../Components/View.js","lighterhtml":"../../node_modules/lighterhtml/esm/index.js","../utils/bind_style.util":"../utils/bind_style.util.js"}],"../Components/LabelTextField.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelTextField = LabelTextField;
exports.UILabelTextField = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _Stack = require("./Stack");

var _Text = require("./Text");

var _TextField = require("./TextField");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UILabelTextField =
/*#__PURE__*/
function (_UIVerticalStack) {
  (0, _inherits2.default)(UILabelTextField, _UIVerticalStack);

  function UILabelTextField(label, name, type, placeholder, formater) {
    var _this;

    (0, _classCallCheck2.default)(this, UILabelTextField);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(UILabelTextField).call(this, (0, _Text.Text)(label, _Text.TEXT_STYLE.label), (0, _TextField.TextField)(name, type, placeholder, formater).margin(8, 0, 0, 0)));
    _this.label = label;
    _this.name = name;
    _this.type = type;
    _this.placeholder = placeholder;
    _this.formater = formater;
    return _this;
  }

  return UILabelTextField;
}(_Stack.UIVerticalStack);

exports.UILabelTextField = UILabelTextField;

function LabelTextField(label, name, type, placeholder, formater) {
  return new UILabelTextField(label, name, type, placeholder, formater);
}
},{"@babel/runtime/helpers/classCallCheck":"../../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/possibleConstructorReturn":"../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"../../node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/inherits":"../../node_modules/@babel/runtime/helpers/inherits.js","./Stack":"../Components/Stack.js","./Text":"../Components/Text.js","./TextField":"../Components/TextField.js"}],"preview.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.need_update = need_update;

var _index = require("../index");

var _lighterhtml = require("lighterhtml");

var test_view = (0, _index.View)((0, _index.VStack)((0, _index.HStack)((0, _index.Text)("Book my ticket", _index.TEXT_STYLE.large_title), (0, _index.Button)("Hello").set_action(function () {
  return console.log("button_click");
})), (0, _index.Segment)([["a_value", (0, _index.Text)("A", _index.TEXT_STYLE.label)], ["b_value", (0, _index.Text)("B", _index.TEXT_STYLE.label)], ["c_value", (0, _index.Text)("C", _index.TEXT_STYLE.label)], ["d_value", (0, _index.Text)("D", _index.TEXT_STYLE.label)]]).margin(8, 0, 8, 0).set_default_element(2).set_action(function (selected_value) {
  return console.log(selected_value);
}), (0, _index.TextField)("test", "text", "Test input").margin(8, 0, 8, 0), (0, _index.LabelTextField)("Label", "test", "text", "Test input")).margin(8, 8, 8, 8));

function need_update() {
  (0, _lighterhtml.render)(document.body, function () {
    return test_view.render();
  });
}

window.addEventListener("load", need_update);
},{"../index":"../index.js","lighterhtml":"../../node_modules/lighterhtml/esm/index.js"}],"../Components/Segment.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Segment = Segment;
exports.UISegment = void 0;

var _construct2 = _interopRequireDefault(require("@babel/runtime/helpers/construct"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _View = require("./View");

var _bind_classUtil = require("../utils/bind_class.util.js");

var _lighterhtml = require("lighterhtml");

var _bind_style = require("../utils/bind_style.util");

var _preview = require("../preview/preview");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["<div class=\"", "\" onclick=\"", "\">", "</div>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["<div class=\"segment\" style=\"", "\">", "</div>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var UISegment =
/*#__PURE__*/
function (_UIView) {
  (0, _inherits2.default)(UISegment, _UIView);

  function UISegment(items) {
    var _this;

    (0, _classCallCheck2.default)(this, UISegment);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(UISegment).call(this));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "action", function () {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "selected_item", 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "specific_style", {});
    _this.items = items;
    return _this;
  }

  (0, _createClass2.default)(UISegment, [{
    key: "set_action",
    value: function set_action(action) {
      this.action = action;
      return this;
    }
  }, {
    key: "set_default_element",
    value: function set_default_element(index) {
      this.selected_item = index;
      return this;
    }
  }, {
    key: "margin",
    value: function margin(top, right, bottom, left) {
      this.specific_style.margin = "".concat(top, "px ").concat(right, "px ").concat(bottom, "px ").concat(left, "px");
      return this;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return (0, _lighterhtml.html)(_templateObject(), (0, _bind_style.bind_style)(this.specific_style), this.items.map(function (_ref, i) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
            value = _ref2[0],
            view = _ref2[1];

        return (0, _lighterhtml.html)(_templateObject2(), (0, _bind_classUtil.bind_class)({
          selected: i === _this2.selected_item
        }, 'item'), function () {
          _this2.selected_item = i;

          _this2.action(value);

          (0, _preview.need_update)();
        }, view.render());
      }));
    }
  }]);
  return UISegment;
}(_View.UIView);

exports.UISegment = UISegment;

function Segment() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }

  return (0, _construct2.default)(UISegment, items);
}
},{"@babel/runtime/helpers/construct":"../../node_modules/@babel/runtime/helpers/construct.js","@babel/runtime/helpers/slicedToArray":"../../node_modules/@babel/runtime/helpers/slicedToArray.js","@babel/runtime/helpers/taggedTemplateLiteral":"../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js","@babel/runtime/helpers/classCallCheck":"../../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../../node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/possibleConstructorReturn":"../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"../../node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/assertThisInitialized":"../../node_modules/@babel/runtime/helpers/assertThisInitialized.js","@babel/runtime/helpers/inherits":"../../node_modules/@babel/runtime/helpers/inherits.js","@babel/runtime/helpers/defineProperty":"../../node_modules/@babel/runtime/helpers/defineProperty.js","./View":"../Components/View.js","../utils/bind_class.util.js":"../utils/bind_class.util.js","lighterhtml":"../../node_modules/lighterhtml/esm/index.js","../utils/bind_style.util":"../utils/bind_style.util.js","../preview/preview":"preview.js"}],"../Navigation/NavigationView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigationView = NavigationView;
exports.UINavigationView = void 0;

var _construct2 = _interopRequireDefault(require("@babel/runtime/helpers/construct"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _View = require("../Components/View");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UINavigationView =
/*#__PURE__*/
function (_UIView) {
  (0, _inherits2.default)(UINavigationView, _UIView);

  function UINavigationView(path) {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, UINavigationView);

    for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      children[_key - 1] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(UINavigationView)).call.apply(_getPrototypeOf2, [this].concat(children)));
    console.log("PATH", path);
    return _this;
  }

  return UINavigationView;
}(_View.UIView);

exports.UINavigationView = UINavigationView;

function NavigationView() {
  for (var _len2 = arguments.length, children = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    children[_key2] = arguments[_key2];
  }

  return (0, _construct2.default)(UINavigationView, ['/'].concat(children));
}
},{"@babel/runtime/helpers/construct":"../../node_modules/@babel/runtime/helpers/construct.js","@babel/runtime/helpers/classCallCheck":"../../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/possibleConstructorReturn":"../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"../../node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/inherits":"../../node_modules/@babel/runtime/helpers/inherits.js","../Components/View":"../Components/View.js"}],"../index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function () {
    return _Button.Button;
  }
});
Object.defineProperty(exports, "UIButton", {
  enumerable: true,
  get: function () {
    return _Button.UIButton;
  }
});
Object.defineProperty(exports, "LabelTextField", {
  enumerable: true,
  get: function () {
    return _LabelTextField.LabelTextField;
  }
});
Object.defineProperty(exports, "UILabelTextField", {
  enumerable: true,
  get: function () {
    return _LabelTextField.UILabelTextField;
  }
});
Object.defineProperty(exports, "Segment", {
  enumerable: true,
  get: function () {
    return _Segment.Segment;
  }
});
Object.defineProperty(exports, "UISegment", {
  enumerable: true,
  get: function () {
    return _Segment.UISegment;
  }
});
Object.defineProperty(exports, "VStack", {
  enumerable: true,
  get: function () {
    return _Stack.VStack;
  }
});
Object.defineProperty(exports, "HStack", {
  enumerable: true,
  get: function () {
    return _Stack.HStack;
  }
});
Object.defineProperty(exports, "UIVerticalStack", {
  enumerable: true,
  get: function () {
    return _Stack.UIVerticalStack;
  }
});
Object.defineProperty(exports, "UIHorizontalStack", {
  enumerable: true,
  get: function () {
    return _Stack.UIHorizontalStack;
  }
});
Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function () {
    return _Text.Text;
  }
});
Object.defineProperty(exports, "UIText", {
  enumerable: true,
  get: function () {
    return _Text.UIText;
  }
});
Object.defineProperty(exports, "TEXT_STYLE", {
  enumerable: true,
  get: function () {
    return _Text.TEXT_STYLE;
  }
});
Object.defineProperty(exports, "TextField", {
  enumerable: true,
  get: function () {
    return _TextField.TextField;
  }
});
Object.defineProperty(exports, "UITextField", {
  enumerable: true,
  get: function () {
    return _TextField.UITextField;
  }
});
Object.defineProperty(exports, "View", {
  enumerable: true,
  get: function () {
    return _View.View;
  }
});
Object.defineProperty(exports, "UIView", {
  enumerable: true,
  get: function () {
    return _View.UIView;
  }
});
Object.defineProperty(exports, "NavigationView", {
  enumerable: true,
  get: function () {
    return _NavigationView.NavigationView;
  }
});
Object.defineProperty(exports, "UINavigationView", {
  enumerable: true,
  get: function () {
    return _NavigationView.UINavigationView;
  }
});

var _Button = require("./Components/Button");

var _LabelTextField = require("./Components/LabelTextField");

var _Segment = require("./Components/Segment");

var _Stack = require("./Components/Stack");

var _Text = require("./Components/Text");

var _TextField = require("./Components/TextField");

var _View = require("./Components/View");

var _NavigationView = require("./Navigation/NavigationView");
},{"./Components/Button":"../Components/Button.js","./Components/LabelTextField":"../Components/LabelTextField.js","./Components/Segment":"../Components/Segment.js","./Components/Stack":"../Components/Stack.js","./Components/Text":"../Components/Text.js","./Components/TextField":"../Components/TextField.js","./Components/View":"../Components/View.js","./Navigation/NavigationView":"../Navigation/NavigationView.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56727" + '/');

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
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../index.js"], null)
//# sourceMappingURL=/src.80dfb952.js.map