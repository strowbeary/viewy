'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lighterhtml = require('lighterhtml');

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

function bind_class(classes, static_class) {
  return [...Object.keys(classes).filter(classname => classes[classname]), static_class].join(" ");
}

function bind_style(style_object) {
  return Object.entries(style_object).reduce((styleString, [propName, propValue]) => {
    propName = propName.replace(/([A-Z])/g, matches => `-${matches[0].toLowerCase()}`);
    return `${styleString}${propName}:${propValue};`;
  }, '');
}

class UIView {
  constructor(...children) {
    _defineProperty(this, "class_list", {});

    _defineProperty(this, "view_style", {});

    this.children = children;
  }

  transform() {
    return this;
  }

  add_class(class_name) {
    this.class_list[class_name] = true;
    return this;
  }

  remove_class(class_name) {
    this.class_list[class_name] = false;
    return this;
  }

  padding(top, right, bottom, left) {
    this.view_style.padding = `${top}px ${right}px ${bottom}px ${left}px`;
    return this;
  }

  margin(top, right, bottom, left) {
    this.view_style.margin = `${top}px ${right}px ${bottom}px ${left}px`;
    return this;
  }

  render() {
    return lighterhtml.html`
            <div 
                class=${bind_class(this.class_list, 'view')}
                style="${bind_style(this.view_style)}">
                ${this.children.map(c => c.render())}
            </div>
        `;
  }

}
function View(...children) {
  return new UIView(...children);
}

class UIButton extends UIView {
  constructor(label) {
    super();

    _defineProperty(this, "action", () => {});

    _defineProperty(this, "label", "");

    this.label = label;
  }

  set_action(action) {
    this.action = action;
    return this;
  }

  render() {
    return lighterhtml.html`
            <button onclick=${() => this.action()}>${this.label}</button>
        `;
  }

}
function Button(label) {
  return new UIButton(label);
}

class UIStack extends UIView {
  constructor(...children) {
    super(...children);
    this.add_class("stack");
  }

}

class UIHorizontalStack extends UIStack {
  constructor(...children) {
    super(...children);
    this.add_class("horizontal");
  }

}
class UIVerticalStack extends UIStack {
  constructor(...children) {
    super(...children);
    this.add_class("vertical");
  }

}
function HStack(...children) {
  return new UIHorizontalStack(...children);
}
function VStack(...children) {
  return new UIVerticalStack(...children);
}

const TEXT_STYLE = {
  large_title: "large_title",
  subheadline: "subheadline",
  footnote: "footnote",
  body: "body",
  label: "label"
};
class UIText extends UIView {
  constructor(value, style) {
    super({
      render() {
        return value;
      }

    });

    _defineProperty(this, "is_uppercase", false);

    _defineProperty(this, "is_bold", false);

    _defineProperty(this, "style", TEXT_STYLE.body);

    this.value = value;
    this.style = style;
    this.add_class("text");
    this.add_class(style);
  }

  uppercase() {
    this.add_class("uppercase");
    return this;
  }

  bold() {
    this.add_class("bold");
    return this;
  }

  underline() {
    this.add_class("underline");
    return this;
  }

  italic() {
    this.add_class("italic");
    return this;
  }

  size(value) {
    return this;
  }

  font(font_stack) {
    return this;
  }

}
function Text(value, style = TEXT_STYLE.body) {
  return new UIText(value, style);
}

class UITextField extends UIView {
  constructor(name, type = "text", placeholder = "", formater) {
    super();

    _defineProperty(this, "view_style", {});

    this.name = name;
    this.type = type;
    this.placeholder = placeholder;
    this.formater = formater;
  }

  margin(top, right, bottom, left) {
    this.view_style.margin = `${top}px ${right}px ${bottom}px ${left}px`;
    return this;
  }

  render() {
    return lighterhtml.html`
            <input class="text_field" style="${bind_style(this.view_style)}" type="${this.type}" name="${this.name}" placeholder="${this.placeholder}"/>
        `;
  }

}
function TextField(name, type = "text", placeholder = "", formater) {
  return new UITextField(name, type, placeholder, formater);
}

class UILabelTextField extends UIVerticalStack {
  constructor(label, name, type, placeholder, formater) {
    super(Text(label, TEXT_STYLE.label), TextField(name, type, placeholder, formater).margin(8, 0, 0, 0));
    this.label = label;
    this.name = name;
    this.type = type;
    this.placeholder = placeholder;
    this.formater = formater;
  }

}
function LabelTextField(label, name, type, placeholder, formater) {
  return new UILabelTextField(label, name, type, placeholder, formater);
}

class UISegment extends UIView {
  constructor(items) {
    super();

    _defineProperty(this, "action", () => {});

    _defineProperty(this, "selected_item", 0);

    _defineProperty(this, "view_style", {});

    this.items = items;
  }

  set_action(action) {
    this.action = action;
    return this;
  }

  set_default_element(index) {
    this.selected_item = index;
    return this;
  }

  margin(top, right, bottom, left) {
    this.view_style.margin = `${top}px ${right}px ${bottom}px ${left}px`;
    return this;
  }

  render() {
    return lighterhtml.html`
            <div 
                class="segment"
                style="${bind_style(this.view_style)}"
            >
                ${this.items.map(([value, view], i) => lighterhtml.html`
                    <div 
                        class="${bind_class({
      selected: i === this.selected_item
    }, 'item')}" 
                        onclick="${() => {
      this.selected_item = i;
      this.action(value);
      need_update();
    }}"
                    >
                        ${view.render()}
                    </div>
                `)}
            </div>
        `;
  }

}
function Segment(...items) {
  return new UISegment(...items);
}

const pages = new Map();
function add_page(path, navigation_view) {
  pages.set(path, navigation_view);
}

class UINavigationView extends UIView {
  constructor(path, ...children) {
    super(...children);
    add_page(path, this);
  }

}
function NavigationView(...children) {
  return new UINavigationView('/', ...children);
}

function need_update() {
  lighterhtml.render(document.body, () => Router.mount());
}

exports.Button = Button;
exports.HStack = HStack;
exports.LabelTextField = LabelTextField;
exports.NavigationView = NavigationView;
exports.Segment = Segment;
exports.TEXT_STYLE = TEXT_STYLE;
exports.Text = Text;
exports.TextField = TextField;
exports.UIButton = UIButton;
exports.UIHorizontalStack = UIHorizontalStack;
exports.UILabelTextField = UILabelTextField;
exports.UINavigationView = UINavigationView;
exports.UISegment = UISegment;
exports.UIText = UIText;
exports.UITextField = UITextField;
exports.UIVerticalStack = UIVerticalStack;
exports.UIView = UIView;
exports.VStack = VStack;
exports.View = View;
exports.need_update = need_update;
