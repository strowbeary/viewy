import {box_arguments_behavior} from "../utils/box_arguments_behavior.util";
import "./View.scss";
import {elementClose, elementOpen} from "incremental-dom";
import {bind_class} from "../utils/bind_class.util";

export const View = (...children) => ({
    children,
    classList: {},
    viewStyle: {},
    tag: [],
    viewName: "",
    eventListener: () => {},
    get isEmptyView() {
        return false
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
        const [t, r, b, l] = box_arguments_behavior([top, right, bottom, left]);
        this.viewStyle.padding = `${t}px ${r}px ${b}px ${l}px`;
        return this;
    },
    margin(top = 0, right, bottom, left) {
        const [t, r, b, l] = box_arguments_behavior([top, right, bottom, left]);
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
        this.viewStyle.marginBottom= value + "px";
        return this;
    },
    marginLeft(value) {
        this.viewStyle.marginLeft = value + "px";
        return this;
    },
    borderRight(width, style, color = "var(--color-border)") {
        this.viewStyle.borderRight = `${width}px ${style} ${color}`;
        return this;
    },
    borderLeft(width, style, color = "var(--color-border)") {
        this.viewStyle.borderLeft = `${width}px ${style} ${color}`;
        return this;
    },
    minWidth(value) {
        this.viewStyle.minWidth = value;
        return this;
    },
    minHeight(value) {
        this.viewStyle.minHeight = value;
        return this;
    },
    maxWidth(value) {
        this.viewStyle.maxWidth = value;
        return this;
    },
    maxHeight(value) {
        this.viewStyle.maxHeight = value;
        return this;
    },
    width(value) {
        this.viewStyle.width = value;
        return this;
    },
    alignSelf(value) {
        this.viewStyle.alignSelf = `${value}`;
        return this;
    },
    justifySelf(value) {
        this.viewStyle.justifySelf = `${value}`;
        return this;
    },
    height(value) {
        this.viewStyle.height = value;
        return this;
    },
    onClick(eventListener) {
        this.addClass("clickable");
        this.eventListener = eventListener;
        return this;
    },
    name(viewName) {
        this.viewName = viewName;
        return this;
    },
    render () {
        const el = elementOpen(
            "div", null, null,
            "style", this.viewStyle,
            "class", bind_class(this.classList, 'view'),
            'onclick', this.eventListener);
        this.children.forEach(child => child.render());
        elementClose("div");
        return el;
    }
});