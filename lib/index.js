'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _taggedTemplateLiteral = _interopDefault(require('@babel/runtime/helpers/taggedTemplateLiteral'));
var _classCallCheck = _interopDefault(require('@babel/runtime/helpers/classCallCheck'));
var _createClass = _interopDefault(require('@babel/runtime/helpers/createClass'));
var _possibleConstructorReturn = _interopDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));
var _getPrototypeOf = _interopDefault(require('@babel/runtime/helpers/getPrototypeOf'));
var _inherits = _interopDefault(require('@babel/runtime/helpers/inherits'));
var _construct = _interopDefault(require('@babel/runtime/helpers/construct'));
var lighterhtml = require('lighterhtml');
var _toConsumableArray = _interopDefault(require('@babel/runtime/helpers/toConsumableArray'));
var _slicedToArray = _interopDefault(require('@babel/runtime/helpers/slicedToArray'));

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

function _templateObject() {
  var data = _taggedTemplateLiteral(["<div class=\"", "\" style=\"", "\">", "</div>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var UIView =
/*#__PURE__*/
function () {
  function UIView() {
    _classCallCheck(this, UIView);

    for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) {
      children[_key] = arguments[_key];
    }

    this.children = children;
    this.class_list = {};
    this.view_style = {};
  }

  _createClass(UIView, [{
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
    value: function padding() {
      var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var right = arguments.length > 1 ? arguments[1] : undefined;
      var bottom = arguments.length > 2 ? arguments[2] : undefined;
      var left = arguments.length > 3 ? arguments[3] : undefined;

      if (typeof top === "number" && typeof right === "number" && typeof bottom === "undefined" && typeof left === "undefined") {
        bottom = top;
        left = right;
      } else if (typeof right === "undefined" && typeof bottom === "undefined" && typeof left === "undefined") {
        bottom = top;
        right = top;
        left = top;
      }

      this.view_style.padding = "".concat(top, "px ").concat(right, "px ").concat(bottom, "px ").concat(left, "px");
      return this;
    }
  }, {
    key: "margin",
    value: function margin() {
      var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var right = arguments.length > 1 ? arguments[1] : undefined;
      var bottom = arguments.length > 2 ? arguments[2] : undefined;
      var left = arguments.length > 3 ? arguments[3] : undefined;

      if (typeof top === "number" && typeof right === "number" && typeof bottom === "undefined" && typeof left === "undefined") {
        bottom = top;
        left = right;
      } else if (typeof right === "undefined" && typeof bottom === "undefined" && typeof left === "undefined") {
        bottom = top;
        right = top;
        left = top;
      }

      this.view_style.margin = "".concat(top, "px ").concat(right, "px ").concat(bottom, "px ").concat(left, "px");
      return this;
    }
  }, {
    key: "render",
    value: function render() {
      return lighterhtml.html(_templateObject(), bind_class(this.class_list, 'view'), bind_style(this.view_style), this.children.map(function (c) {
        return c.render();
      }));
    }
  }]);

  return UIView;
}();
function View() {
  for (var _len2 = arguments.length, children = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    children[_key2] = arguments[_key2];
  }

  return _construct(UIView, children);
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["<button onclick=\"", "\">", "</button>"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var UIButtonView =
/*#__PURE__*/
function (_UIView) {
  _inherits(UIButtonView, _UIView);

  function UIButtonView(label) {
    var _this;

    _classCallCheck(this, UIButtonView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UIButtonView).call(this));
    _this.label = label;

    _this.action = function () {};

    return _this;
  }

  _createClass(UIButtonView, [{
    key: "set_action",
    value: function set_action(action) {
      this.action = action;
      return this;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return lighterhtml.html(_templateObject$1(), function () {
        return _this2.action();
      }, this.label);
    }
  }]);

  return UIButtonView;
}(UIView);
function Button(label) {
  return new UIButtonView(label);
}

var UIStack =
/*#__PURE__*/
function (_UIView) {
  _inherits(UIStack, _UIView);

  function UIStack() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UIStack);

    for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) {
      children[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UIStack)).call.apply(_getPrototypeOf2, [this].concat(children)));

    _this.add_class("stack");

    return _this;
  }

  return UIStack;
}(UIView);

var UIHStackView =
/*#__PURE__*/
function (_UIStack) {
  _inherits(UIHStackView, _UIStack);

  function UIHStackView() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, UIHStackView);

    for (var _len2 = arguments.length, children = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      children[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(UIHStackView)).call.apply(_getPrototypeOf3, [this].concat(children)));

    _this2.add_class("horizontal");

    return _this2;
  }

  return UIHStackView;
}(UIStack);
var UIVStackView =
/*#__PURE__*/
function (_UIStack2) {
  _inherits(UIVStackView, _UIStack2);

  function UIVStackView() {
    var _getPrototypeOf4;

    var _this3;

    _classCallCheck(this, UIVStackView);

    for (var _len3 = arguments.length, children = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      children[_key3] = arguments[_key3];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(UIVStackView)).call.apply(_getPrototypeOf4, [this].concat(children)));

    _this3.add_class("vertical");

    return _this3;
  }

  return UIVStackView;
}(UIStack);
function HStack() {
  for (var _len4 = arguments.length, children = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    children[_key4] = arguments[_key4];
  }

  return _construct(UIHStackView, children);
}
function VStack() {
  for (var _len5 = arguments.length, children = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    children[_key5] = arguments[_key5];
  }

  return _construct(UIVStackView, children);
}

var TEXT_STYLE = {
  large_title: "large_title",
  subheadline: "subheadline",
  footnote: "footnote",
  body: "body",
  label: "label"
};
var UITextView =
/*#__PURE__*/
function (_UIView) {
  _inherits(UITextView, _UIView);

  function UITextView(value, style) {
    var _this;

    _classCallCheck(this, UITextView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UITextView).call(this, {
      render: function render() {
        return value;
      }
    }));
    _this.value = value;
    _this.style = style;

    _this.add_class("text");

    _this.add_class(style);

    _this.is_uppercase = false;
    _this.is_bold = false;
    return _this;
  }

  _createClass(UITextView, [{
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

  return UITextView;
}(UIView);
function Text(value) {
  var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TEXT_STYLE.body;
  return new UITextView(value, style);
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["<input class=\"text_field\" style=\"", "\" type=\"", "\" name=\"", "\" placeholder=\"", "\">"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var UITextFieldView =
/*#__PURE__*/
function (_UIView) {
  _inherits(UITextFieldView, _UIView);

  function UITextFieldView(name) {
    var _this;

    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "text";
    var placeholder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var formater = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, UITextFieldView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UITextFieldView).call(this));
    _this.name = name;
    _this.type = type;
    _this.placeholder = placeholder;
    _this.formater = formater;
    _this.view_style = {};
    return _this;
  }

  _createClass(UITextFieldView, [{
    key: "margin",
    value: function margin(top, right, bottom, left) {
      this.view_style.margin = "".concat(top, "px ").concat(right, "px ").concat(bottom, "px ").concat(left, "px");
      return this;
    }
  }, {
    key: "render",
    value: function render() {
      return lighterhtml.html(_templateObject$2(), bind_style(this.view_style), this.type, this.name, this.placeholder);
    }
  }]);

  return UITextFieldView;
}(UIView);
function TextField(name) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "text";
  var placeholder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var formater = arguments.length > 3 ? arguments[3] : undefined;
  return new UITextFieldView(name, type, placeholder, formater);
}

var UILabelTextFieldView =
/*#__PURE__*/
function (_UIVStackView) {
  _inherits(UILabelTextFieldView, _UIVStackView);

  function UILabelTextFieldView(label, name, type, placeholder, formater) {
    var _this;

    _classCallCheck(this, UILabelTextFieldView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UILabelTextFieldView).call(this, Text(label, TEXT_STYLE.label), TextField(name, type, placeholder, formater).margin(8, 0, 0, 0)));
    _this.label = label;
    _this.name = name;
    _this.type = type;
    _this.placeholder = placeholder;
    _this.formater = formater;
    return _this;
  }

  return UILabelTextFieldView;
}(UIVStackView);
function LabelTextField(label, name, type, placeholder, formater) {
  return new UILabelTextFieldView(label, name, type, placeholder, formater);
}

var pages = new Map();
function add_page(path, navigation_view) {
  pages.set(path, navigation_view);
}
function mount() {
  return pages.get("/").render();
}
function need_update() {
  console.log("UPDATE");
  lighterhtml.render(document.body, function () {
    return mount();
  });
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["<div class=\"", "\" onclick=\"", "\">", "</div>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["<div class=\"segment\" style=\"", "\">", "</div>"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var UISegmentView =
/*#__PURE__*/
function (_UIView) {
  _inherits(UISegmentView, _UIView);

  function UISegmentView(items) {
    var _this;

    _classCallCheck(this, UISegmentView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UISegmentView).call(this));
    _this.items = items;

    _this.action = function () {};

    _this.selected_item = 0;
    _this.view_style = {};
    return _this;
  }

  _createClass(UISegmentView, [{
    key: "set_action",
    value: function set_action(action) {
      this.action = action;
      return this;
    }
  }, {
    key: "select",
    value: function select(item_value) {
      this.selected_item = this.items.findIndex(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            value = _ref2[0];

        return value === item_value;
      });
      return this;
    }
  }, {
    key: "padding",
    value: function padding() {
      throw Error("padding can't be set on Segment view");
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return lighterhtml.html(_templateObject$3(), bind_style(this.view_style), this.items.map(function (_ref3, i) {
        var _ref4 = _slicedToArray(_ref3, 2),
            value = _ref4[0],
            view = _ref4[1];

        return lighterhtml.html(_templateObject2(), bind_class({
          selected: i === _this2.selected_item
        }, 'item'), function () {
          _this2.selected_item = i;

          _this2.action(value);

          need_update();
        }, view.render());
      }));
    }
  }]);

  return UISegmentView;
}(UIView);
function Segment() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }

  return _construct(UISegmentView, items);
}

var UINavigationView =
/*#__PURE__*/
function () {
  function UINavigationView(path, view) {
    _classCallCheck(this, UINavigationView);

    add_page(path, this);
    this.view = view;
  }

  _createClass(UINavigationView, [{
    key: "render",
    value: function render() {
      return this.view().render();
    }
  }]);

  return UINavigationView;
}();
function NavigationView(path, view) {
  return new UINavigationView('/', view);
}

var UIGridView =
/*#__PURE__*/
function (_UIView) {
  _inherits(UIGridView, _UIView);

  function UIGridView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UIGridView);

    for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) {
      children[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UIGridView)).call.apply(_getPrototypeOf2, [this].concat(children)));

    _this.add_class("grid");

    _this.named_grid = false;
    return _this;
  }

  _createClass(UIGridView, [{
    key: "gap",
    value: function gap(h, v) {
      if (typeof h === "number" && typeof v === "undefined") {
        v = h;
      }

      this.view_style.gridGap = "".concat(h, "px ").concat(v, "px");
      return this;
    }
  }, {
    key: "areas",
    value: function areas(schema) {
      var _this2 = this;

      this.children = Array.from(Object.keys(this.children[0])).map(function (area) {
        _this2.children[0][area].view_style.gridArea = area;
        return _this2.children[0][area];
      });
      this.view_style.gridTemplateAreas = schema;
      return this;
    }
  }, {
    key: "columns",
    value: function columns(schema) {
      this.view_style.gridTemplateColumns = schema;
      return this;
    }
  }, {
    key: "rows",
    value: function rows(schema) {
      this.view_style.gridTemplateRows = schema;
      return this;
    }
  }]);

  return UIGridView;
}(UIView);
function Grid() {
  for (var _len2 = arguments.length, children = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    children[_key2] = arguments[_key2];
  }

  return _construct(UIGridView, children);
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["<img class=\"", "\" style=\"", "\" src=\"", "\" alt=\"\">"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var UIImageView =
/*#__PURE__*/
function (_UIView) {
  _inherits(UIImageView, _UIView);

  function UIImageView(src) {
    var _this;

    _classCallCheck(this, UIImageView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UIImageView).call(this));
    _this.src = src;
    return _this;
  }

  _createClass(UIImageView, [{
    key: "corner_radius",
    value: function corner_radius() {
      for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {
        _ref[_key] = arguments[_key];
      }

      var top_left = _ref[0],
          top_right = _ref[1],
          bottom_right = _ref[2],
          bottom_left = _ref[3];

      if (typeof top_left === "number" && typeof top_right === "number" && typeof bottom_right === "undefined" && typeof bottom_left === "undefined") {
        bottom_right = top_left;
        bottom_left = top_right;
      } else if (typeof top_right === "undefined" && typeof bottom_right === "undefined" && typeof bottom_left === "undefined") {
        top_right = bottom_right = bottom_left = top_left;
      }

      this.view_style.borderRadius = "".concat(top_left, "px ").concat(top_right, "px ").concat(bottom_right, "px ").concat(bottom_left, "px");
      return this;
    }
  }, {
    key: "mask",
    value: function mask(src) {
      this.view_style.mask = "url(".concat(src, ") luminance 20%");
      return this;
    }
  }, {
    key: "render",
    value: function render() {
      return lighterhtml.html(_templateObject$4(), bind_class(this.class_list, 'image'), bind_style(this.view_style), this.src);
    }
  }]);

  return UIImageView;
}(UIView);
function Image(src) {
  return new UIImageView(src);
}

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["<div class=\"", "\" style=\"", "\">", "</div>"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var UIListView =
/*#__PURE__*/
function (_UIView) {
  _inherits(UIListView, _UIView);

  function UIListView(items) {
    var _this;

    var cell_view_builder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
      return ListRow();
    };

    _classCallCheck(this, UIListView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UIListView).call(this));
    _this.children = items.map(function (item) {
      return ListRow(cell_view_builder(item));
    });

    _this.add_class("list");

    return _this;
  }

  _createClass(UIListView, [{
    key: "set_action",
    value: function set_action(action) {
      this.action = action;
      return this;
    }
  }]);

  return UIListView;
}(UIView);
var UIListRow =
/*#__PURE__*/
function (_UIView2) {
  _inherits(UIListRow, _UIView2);

  function UIListRow() {
    var _getPrototypeOf2;

    var _this2;

    _classCallCheck(this, UIListRow);

    for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) {
      children[_key] = arguments[_key];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UIListRow)).call.apply(_getPrototypeOf2, [this].concat(children)));

    _this2.add_class("list_row");

    return _this2;
  }

  _createClass(UIListRow, [{
    key: "render",
    value: function render() {
      return lighterhtml.html(_templateObject$5(), bind_class(this.class_list, 'view'), bind_style(this.view_style), this.children.map(function (c) {
        return c.render();
      }));
    }
  }]);

  return UIListRow;
}(UIView);

function ListRow() {
  for (var _len2 = arguments.length, children = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    children[_key2] = arguments[_key2];
  }

  return _construct(UIListRow, children);
}

function List(items, cell_view_builder) {
  return new UIListView(items, cell_view_builder);
}

var UITagView =
/*#__PURE__*/
function (_UITextView) {
  _inherits(UITagView, _UITextView);

  function UITagView(value) {
    var _this;

    _classCallCheck(this, UITagView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UITagView).call(this, value, TEXT_STYLE.label));

    _this.add_class("tag");

    return _this;
  }

  return UITagView;
}(UITextView);
function Tag(value) {
  return new UITagView(value);
}

exports.Button = Button;
exports.Grid = Grid;
exports.HStack = HStack;
exports.Image = Image;
exports.LabelTextField = LabelTextField;
exports.List = List;
exports.NavigationView = NavigationView;
exports.Segment = Segment;
exports.TEXT_STYLE = TEXT_STYLE;
exports.Tag = Tag;
exports.Text = Text;
exports.TextField = TextField;
exports.UIButtonView = UIButtonView;
exports.UIGridView = UIGridView;
exports.UIHStackView = UIHStackView;
exports.UIImageView = UIImageView;
exports.UILabelTextFieldView = UILabelTextFieldView;
exports.UIListRow = UIListRow;
exports.UIListView = UIListView;
exports.UINavigationView = UINavigationView;
exports.UISegmentView = UISegmentView;
exports.UITagView = UITagView;
exports.UITextFieldView = UITextFieldView;
exports.UITextView = UITextView;
exports.UIVStackView = UIVStackView;
exports.UIView = UIView;
exports.VStack = VStack;
exports.View = View;
exports.need_update = need_update;
