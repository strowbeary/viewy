'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _defineProperty = _interopDefault(require('@babel/runtime/helpers/defineProperty'));
var _taggedTemplateLiteral = _interopDefault(require('@babel/runtime/helpers/taggedTemplateLiteral'));
var _slicedToArray = _interopDefault(require('@babel/runtime/helpers/slicedToArray'));
var lighterhtml = require('lighterhtml');
var _toConsumableArray = _interopDefault(require('@babel/runtime/helpers/toConsumableArray'));
var _regeneratorRuntime = _interopDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator = _interopDefault(require('@babel/runtime/helpers/asyncToGenerator'));

function bind_class(classes, static_class) {
  return [].concat(_toConsumableArray(Object.keys(classes).filter(function (classname) {
    return classes[classname];
  })), [static_class]).join(" ");
}

function bind_style(style_object) {
  return Object.entries(style_object).reduce(function (styleString, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        propName = _ref2[0],
        propValue = _ref2[1];

    propName = propName.replace(/([A-Z])/g, function (matches) {
      return "-".concat(matches[0].toLowerCase());
    });
    return "".concat(styleString).concat(propName, ":").concat(propValue, ";");
  }, '');
}

function box_arguments_behavior(_ref) {
  var _ref2 = _slicedToArray(_ref, 4),
      top = _ref2[0],
      bottom = _ref2[1],
      left = _ref2[2],
      right = _ref2[3];

  if (typeof top === "number" && typeof right === "number" && typeof bottom === "undefined" && typeof left === "undefined") {
    bottom = top;
    left = right;
  } else if (typeof right === "undefined" && typeof bottom === "undefined" && typeof left === "undefined") {
    bottom = top;
    right = top;
    left = top;
  }

  return [top, bottom, left, right];
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["<div class=\"", "\" style=\"", "\">", "</div>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var View = function View() {
  for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) {
    children[_key] = arguments[_key];
  }

  return {
    children: children,
    classList: {},
    viewStyle: {},
    addClass: function addClass(className) {
      this.classList[className] = true;
      return this;
    },
    removeClass: function removeClass(className) {
      this.classList[className] = false;
      return this;
    },
    padding: function padding() {
      var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var right = arguments.length > 1 ? arguments[1] : undefined;
      var bottom = arguments.length > 2 ? arguments[2] : undefined;
      var left = arguments.length > 3 ? arguments[3] : undefined;

      var _box_arguments_behavi = box_arguments_behavior([top, bottom, left, right]),
          _box_arguments_behavi2 = _slicedToArray(_box_arguments_behavi, 4),
          t = _box_arguments_behavi2[0],
          b = _box_arguments_behavi2[1],
          l = _box_arguments_behavi2[2],
          r = _box_arguments_behavi2[3];

      this.viewStyle.padding = "".concat(t, "px ").concat(b, "px ").concat(l, "px ").concat(r, "px");
      return this;
    },
    margin: function margin() {
      var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var right = arguments.length > 1 ? arguments[1] : undefined;
      var bottom = arguments.length > 2 ? arguments[2] : undefined;
      var left = arguments.length > 3 ? arguments[3] : undefined;

      var _box_arguments_behavi3 = box_arguments_behavior([top, bottom, left, right]),
          _box_arguments_behavi4 = _slicedToArray(_box_arguments_behavi3, 4),
          t = _box_arguments_behavi4[0],
          b = _box_arguments_behavi4[1],
          l = _box_arguments_behavi4[2],
          r = _box_arguments_behavi4[3];

      this.viewStyle.margin = "".concat(t, "px ").concat(b, "px ").concat(l, "px ").concat(r, "px");
      return this;
    },
    marginTop: function marginTop(value) {
      this.viewStyle.marginTop = value + "px";
      return this;
    },
    marginRight: function marginRight(value) {
      this.viewStyle.marginRight = value + "px";
      return this;
    },
    marginBottom: function marginBottom(value) {
      this.viewStyle.marginBottom = value + "px";
      return this;
    },
    marginLeft: function marginLeft(value) {
      this.viewStyle.marginLeft = value + "px";
      return this;
    },
    render: function render() {
      return lighterhtml.html(_templateObject(), bind_class(this.classList, 'view'), bind_style(this.viewStyle), this.children.map(function (child) {
        return child.render();
      }));
    }
  };
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var TEXT_STYLE = {
  large_title: "large_title",
  subheadline: "subheadline",
  footnote: "footnote",
  body: "body",
  label: "label"
};
var Text = function Text(value, style) {
  return _objectSpread({}, View().addClass("text").addClass(style), {
    uppercase: function uppercase() {
      this.addClass("uppercase");
      return this;
    },
    bold: function bold() {
      this.addClass("bold");
      return this;
    },
    underline: function underline() {
      this.addClass("underline");
      return this;
    },
    italic: function italic() {
      this.addClass("italic");
      return this;
    },
    size: function size(value) {
      this.viewStyle.fontSize = value + "px";
      return this;
    },
    font: function font(fontStack) {
      this.viewStyle.fontFamily = fontStack;
      return this;
    },
    children: [{
      render: function render() {
        return value;
      }
    }]
  });
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Tag = function Tag(value) {
  return _objectSpread$1({}, Text(value, TEXT_STYLE.label).addClass("tag"));
};

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["<div>"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var EmptyView = function EmptyView() {
  return _objectSpread$2({}, View(), {
    render: function render() {
      return lighterhtml.html(_templateObject$1());
    }
  });
};

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["<button class=\"", "\" style=\"", "\" onclick=\"", "\">", " ", "</button>"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Button = function Button() {
  return _objectSpread$3({}, View(), {
    icon: EmptyView(),
    setIcon: function setIcon(icon) {
      this.icon = icon;
      return this;
    },
    render: function render() {
      var _this = this;

      return lighterhtml.html(_templateObject$2(), bind_class(this.classList), bind_style(this.viewStyle), function (e) {
        e.stopPropagation();

        _this.action();
      }, this.icon.render(), this.label);
    }
  });
};

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Icon = function Icon(iconName) {
  return _objectSpread$4({}, View().addClass("icon"), {
    size: 24,
    setSize: function setSize(size) {
      switch (size) {
        case 18:
        case 24:
        case 36:
        case 48:
          this.size = size;
          this.addClass("size_" + size);
          break;

        default:
          throw Error("Size value ".concat(size, " is invalid. Authorized values : 18, 24, 36, 48."));
      }

      return this;
    }
  });
};

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["<img class=\"", "\" style=\"", "\" src=\"", "\" alt=\"\">"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Image = function Image(src) {
  return _objectSpread$5({}, View(), {
    cornerRadius: function cornerRadius(top_left, top_right, bottom_right, bottom_left) {
      var _box_arguments_behavi = box_arguments_behavior([top_left, top_right, bottom_right, bottom_left]),
          _box_arguments_behavi2 = _slicedToArray(_box_arguments_behavi, 4),
          tl = _box_arguments_behavi2[0],
          tr = _box_arguments_behavi2[1],
          br = _box_arguments_behavi2[2],
          bl = _box_arguments_behavi2[3];

      this.viewStyle.borderRadius = "".concat(tl, "px ").concat(tr, "px ").concat(br, "px ").concat(bl, "px");
      return this;
    },
    mask: function mask(src) {
      this.viewStyle.mask = "url(".concat(src, ") luminance 20%");
      return this;
    },
    size: function size(width, height) {
      this.viewStyle.width = width + "px";
      this.viewStyle.height = height + "px";
      return this;
    },
    render: function render() {
      return lighterhtml.html(_templateObject$3(), bind_class(this.classList, 'image'), bind_style(this.viewStyle), this.src);
    }
  });
};

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Stack = function Stack() {
  return _objectSpread$6({}, View().addClass("stack"), {
    alignItems: function alignItems(alignment) {
      this.viewStyle.alignItems = alignment;
      return this;
    },
    justifyContent: function justifyContent(justification) {
      this.viewStyle.justifyContent = justification;
      return this;
    }
  });
};
var HStack = function HStack() {
  for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) {
    children[_key] = arguments[_key];
  }

  return _objectSpread$6({}, Stack().addClass("horizontal"), {
    children: children
  });
};
var VStack = function VStack() {
  for (var _len2 = arguments.length, children = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    children[_key2] = arguments[_key2];
  }

  return _objectSpread$6({}, Stack().addClass("vertical"), {
    children: children
  });
};

function _templateObject2() {
  var data = _taggedTemplateLiteral(["<textarea class=\"text_field\" style=\"", "\" name=\"", "\" placeholder=\"", "\">", "</textarea>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["<input class=\"text_field\" value=\"", "\" style=\"", "\" type=\"", "\" name=\"", "\" placeholder=\"", "\">"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var TextField = function TextField(name) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "text";
  var placeholder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  return _objectSpread$7({}, View(), {
    value: "",
    setValue: function setValue(value) {
      this.value = value;
      return this;
    },
    render: function render() {
      if (type !== "textarea") {
        return lighterhtml.html(_templateObject$4(), this.value, bind_style(this.viewStyle), type, name, placeholder);
      } else {
        return lighterhtml.html(_templateObject2(), bind_style(this.viewStyle), name, placeholder, this.value);
      }
    }
  });
};

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var LabelTextField = function LabelTextField(label, name, type, placeholder, formater) {
  return _objectSpread$8({}, View(), {
    textField: TextField(name, type, placeholder, formater),
    value: "",
    setValue: function setValue(value) {
      this.value = value;
      return this;
    },

    get children() {
      return [VStack(Text(label, TEXT_STYLE.label), TextField(name, type, placeholder, formater).setValue(this.value).marginTop(8))];
    }

  });
};

var loader_svg = "<svg class=\"lds-spinner\" width=\"71px\"  height=\"71px\"  xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" style=\"background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;\"><g transform=\"rotate(0 50 50)\">\n  <rect x=\"46\" y=\"6\" rx=\"29.44\" ry=\"3.84\" width=\"8\" height=\"20\" fill=\"currentColor\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1.2s\" begin=\"-1.0999999999999999s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(30 50 50)\">\n  <rect x=\"46\" y=\"6\" rx=\"29.44\" ry=\"3.84\" width=\"8\" height=\"20\" fill=\"currentColor\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1.2s\" begin=\"-1s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(60 50 50)\">\n  <rect x=\"46\" y=\"6\" rx=\"29.44\" ry=\"3.84\" width=\"8\" height=\"20\" fill=\"currentColor\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1.2s\" begin=\"-0.8999999999999999s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(90 50 50)\">\n  <rect x=\"46\" y=\"6\" rx=\"29.44\" ry=\"3.84\" width=\"8\" height=\"20\" fill=\"currentColor\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1.2s\" begin=\"-0.7999999999999999s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(120 50 50)\">\n  <rect x=\"46\" y=\"6\" rx=\"29.44\" ry=\"3.84\" width=\"8\" height=\"20\" fill=\"currentColor\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1.2s\" begin=\"-0.7000000000000001s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(150 50 50)\">\n  <rect x=\"46\" y=\"6\" rx=\"29.44\" ry=\"3.84\" width=\"8\" height=\"20\" fill=\"currentColor\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1.2s\" begin=\"-0.6s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(180 50 50)\">\n  <rect x=\"46\" y=\"6\" rx=\"29.44\" ry=\"3.84\" width=\"8\" height=\"20\" fill=\"currentColor\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1.2s\" begin=\"-0.5s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(210 50 50)\">\n  <rect x=\"46\" y=\"6\" rx=\"29.44\" ry=\"3.84\" width=\"8\" height=\"20\" fill=\"currentColor\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1.2s\" begin=\"-0.39999999999999997s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(240 50 50)\">\n  <rect x=\"46\" y=\"6\" rx=\"29.44\" ry=\"3.84\" width=\"8\" height=\"20\" fill=\"currentColor\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1.2s\" begin=\"-0.3s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(270 50 50)\">\n  <rect x=\"46\" y=\"6\" rx=\"29.44\" ry=\"3.84\" width=\"8\" height=\"20\" fill=\"currentColor\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1.2s\" begin=\"-0.19999999999999998s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(300 50 50)\">\n  <rect x=\"46\" y=\"6\" rx=\"29.44\" ry=\"3.84\" width=\"8\" height=\"20\" fill=\"currentColor\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1.2s\" begin=\"-0.09999999999999999s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(330 50 50)\">\n  <rect x=\"46\" y=\"6\" rx=\"29.44\" ry=\"3.84\" width=\"8\" height=\"20\" fill=\"currentColor\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1.2s\" begin=\"0s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g></svg>";

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["<span class=\"", "\" style=\"", "\">", "</span>"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Loader = function Loader() {
  var content = "";

  _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee() {
    var res;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(loader_svg);

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.text();

          case 5:
            content = _context.sent;
            render_controller.render();

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }))();

  return _objectSpread$9({}, View(), {
    render: function render() {
      return lighterhtml.html(_templateObject$5(), bind_class(this.classList, 'loader'), bind_style(this.viewStyle), {
        html: content
      });
    }
  });
};

var RenderController = function RenderController() {
  return {
    theme: "light",
    currentView: VStack(Loader(), Text("Your app is starting", TEXT_STYLE.footnote).marginTop(16)).alignItems("center").justifyContent("center").addClass("loading_screen"),
    setCurrentView: function setCurrentView(view) {
      console.log(view);
      this.currentView = view;
      this.render();
    },
    setTheme: function setTheme(variant) {
      if (variant !== "light" && variant !== "dark") throw Error("Theme is either light or dark");
      this.theme = variant;
      return this;
    },
    render: function render() {
      var _this = this;

      lighterhtml.render(document.body, function () {
        return _this.currentView.render();
      });

      (this.theme === "light" ? function () {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
      } : function () {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
      })();
    }
  };
};

var render_controller = RenderController();
window.addEventListener("load", function () {
  return render_controller.render();
});

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["<div onclick=\"", "\">", "</div>"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$a(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$a(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Segment = function Segment() {

  for (var _len = arguments.length, items = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    items[_key - 1] = arguments[_key];
  }

  return _objectSpread$a({}, View().addClass("segment"), {
    selectedItem: 0,
    select: function select(itemValue) {
      this.selectedItem = items.findIndex(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            value = _ref2[0];

        return value === itemValue;
      });
      return this;
    },
    padding: function padding() {
      throw Error("padding can't be set on Segment view");
    },

    get children() {
      var _this = this;

      return this.items.map(function (_ref3, i) {
        var _ref4 = _slicedToArray(_ref3, 2),
            value = _ref4[0],
            view = _ref4[1];

        return _objectSpread$a({}, View(), {
          classList: {
            item: true,
            selected: i === _this.selected_item
          },
          render: function render() {
            var _this2 = this;

            return lighterhtml.html(_templateObject$6(), function () {
              _this2.select(value);

              _this2.action(value);

              render_controller.render();
            }, view.render());
          }
        });
      });
    }

  });
};

function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$b(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$b(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var UpdatableView = function UpdatableView(viewBuilder) {
  var persistent_id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Math.random().toString(36).substring(7);
  return _objectSpread$b({}, View(), {
    persistent_id: persistent_id,
    render: function render() {
      return viewBuilder(persistent_id).render();
    }
  });
};

function ConditionalContent(expr) {
  return expr.render();
}

function ownKeys$c(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$c(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$c(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ListRow = function ListRow() {
  return _objectSpread$c({}, View.apply(void 0, arguments).addClass("list_row"));
};
var List = function List(items) {
  var cell_view_builder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return EmptyView();
  };
  return _objectSpread$c({}, View().addClass("list"), {
    children: items.map(function (item) {
      return ListRow(cell_view_builder(item).padding(8, 16));
    })
  });
};

function ownKeys$d(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$d(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$d(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$d(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Grid = function Grid() {
  for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) {
    children[_key] = arguments[_key];
  }

  return _objectSpread$d({}, Stack().removeClass("stack").addClass("grid"), {
    gap: function gap(h, v) {
      if (typeof h === "number" && typeof v === "undefined") {
        v = h;
      }

      this.viewStyle.gridGap = "".concat(h, "px ").concat(v, "px");
      return this;
    },
    areas: function areas(schema) {
      var _this = this;

      this.children = Array.from(Object.keys(this.children[0])).map(function (area) {
        _this.children[0][area].viewStyle.gridArea = area;
        return _this.children[0][area];
      });
      this.viewStyle.gridTemplateAreas = schema;
      return this;
    },
    columns: function columns(schema) {
      this.viewStyle.gridTemplateColumns = schema;
      return this;
    },
    rows: function rows(schema) {
      this.viewStyle.gridTemplateRows = schema;
      return this;
    },
    children: children
  });
};

function ownKeys$e(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$e(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$e(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$e(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var NavigationBar = function NavigationBar() {
  return _objectSpread$e({}, View().addClass("navigation_bar"), {
    title: "View title",
    setTitle: function setTitle(text) {
      this.title = text;
      return this;
    },
    _getBackButton: function _getBackButton() {
      if (history.state.view_stack_id > 0) {
        return Button().addClass("button_back supplemented").setIcon(Icon().setSize(36));
      } else {
        return EmptyView();
      }
    },

    get children() {
      var _this = this;

      return [UpdatableView(function () {
        return Grid({
          left_item: HStack(_this._getBackButton(), Button()),
          right_item: Button(),
          title: Text(_this.title, TEXT_STYLE.large_title)
        }).gap(8, 24).areas("\"left_item . right_item\" \"title title title\"").columns("auto 1fr auto").rows("36px auto");
      })];
    }

  });
};

function ownKeys$f(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$f(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$f(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$f(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var NavigationController = function NavigationController(render_controller) {
  return _objectSpread$f({}, View().addClass("navigation_view"), {
    viewStack: [],
    navigationBar: NavigationBar(),
    onPopState: function onPopState() {
      this.viewStack.pop();
      this.navigationBar.setTitle(this.viewStack[history.state.view_stack_id].title);
      render_controller.render();
    },
    navigate: function navigate(navigation_view, state) {
      navigation_view.setState(state);
      this.viewStack.push(navigation_view);
      this.navigationBar.setTitle(navigation_view.title);
      history.pushState({
        view_stack_id: this.viewStack.length - 1
      }, navigation_view.title, "/" + this.viewStack.slice(1).map(function (view) {
        return view.title.toLowerCase().replace(' ', '-');
      }).join('/'));
    },

    get children() {
      return [this.navigationBar, this.viewStack[history.state.view_stack_id].addClass("main")];
    }

  });
};
var navigation_controller = NavigationController();
window.addEventListener("onpopstate", function () {
  return navigation_controller.onPopState();
});

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["<div onclick=\"", "\" class=\"", "\" style=\"", "\">", " ", "</div>"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys$g(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$g(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$g(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$g(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var NavigationButton = function NavigationButton(_ref) {
  var destination = _ref.destination,
      state = _ref.state;

  for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }

  return _objectSpread$g({}, View(), {
    children: children,
    render: function render() {
      return lighterhtml.html(_templateObject$7(), function (e) {
        e.stopPropagation();
        navigation_controller.navigate(destination, state);
      }, bind_class(this.classList, 'navigation_button'), bind_style(this.viewStyle), this.children.map(function (child) {
        return child.render();
      }), Icon().setSize(18).render());
    }
  });
};

function ownKeys$h(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$h(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$h(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$h(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var NavigationView = function NavigationView(view_builder) {
  return _objectSpread$h({}, View(), {
    _title: "",
    state: {},
    setTitle: function setTitle(title) {
      this._title = title;
      return this;
    },

    get title() {
      if (typeof this._title === "function") {
        return this._title(this.state);
      } else {
        return this._title;
      }
    },

    setState: function setState(state) {
      this.state = state;
      return this;
    },

    get children() {
      console.log(view_builder(this.state));
      return [view_builder(this.state)];
    }

  });
};

exports.Button = Button;
exports.ConditionalContent = ConditionalContent;
exports.EmptyView = EmptyView;
exports.Grid = Grid;
exports.HStack = HStack;
exports.Icon = Icon;
exports.Image = Image;
exports.LabelTextField = LabelTextField;
exports.List = List;
exports.ListRow = ListRow;
exports.Loader = Loader;
exports.NavigationBar = NavigationBar;
exports.NavigationButton = NavigationButton;
exports.NavigationController = NavigationController;
exports.NavigationView = NavigationView;
exports.Segment = Segment;
exports.Stack = Stack;
exports.TEXT_STYLE = TEXT_STYLE;
exports.Tag = Tag;
exports.Text = Text;
exports.TextField = TextField;
exports.UpdatableView = UpdatableView;
exports.VStack = VStack;
exports.View = View;
exports.navigation_controller = navigation_controller;
exports.render_controller = render_controller;
