import {box_arguments_behavior} from "../../utils/box_arguments_behavior.util";
import "./View.scss";
import {elementClose, elementOpen} from "incremental-dom";
import {bind_class} from "../../utils/bind_class.util";

export const View = (...children) => ({
    children,
    classList: {},
    viewStyle: {},
    tag: [],
    viewName: "",
    renderedTagName: "div",
    customAttributes: [],
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
        const [t, r, b, l] = box_arguments_behavior([top, right, bottom, left]);
        this.viewStyle.padding = `${t}px ${r}px ${b}px ${l}px`;
        return this;
    },
    paddingTop(value) {
        this.viewStyle.paddingTop = value + "px";
        return this;
    },
    paddingRight(value) {
        this.viewStyle.paddingRight = value + "px";
        return this;
    },
    paddingBottom(value) {
        this.viewStyle.paddingBottom= value + "px";
        return this;
    },
    paddingLeft(value) {
        this.viewStyle.paddingLeft = value + "px";
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
    borderTop(width, style, color = "var(--color-border)") {
        this.viewStyle.borderTop = `${width}px ${style} ${color}`;
        return this;
    },
    borderBottom(width, style, color = "var(--color-border)") {
        this.viewStyle.borderBottom = `${width}px ${style} ${color}`;
        return this;
    },
    border(width, style, color = "var(--color-border)") {
        this.viewStyle.border = `${width}px ${style} ${color}`;
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
    backgroundColor(value) {
        this.viewStyle.backgroundColor = `${value}`;
        return this;
    },
    height(value) {
        this.viewStyle.height = value;
        return this;
    },
    cornerRadius(top_left, top_right, bottom_right, bottom_left) {
        const [tl, tr, br, bl] = box_arguments_behavior([top_left, top_right, bottom_right, bottom_left]);
        this.viewStyle.borderRadius = `${tl}px ${tr}px ${br}px ${bl}px`;
        return this;
    },
    sticky() {
        this.viewStyle.position = 'sticky';
        this.viewStyle.top = 0;
        return this;
    },
    on(eventName, callback) {
        this.customAttributes.push(`on${eventName}`, callback);
        return this;
    },
    name(viewName) {
        this.viewName = viewName;
        return this;
    },
    tagName(tagName) {
        this.renderedTagName = tagName;
        return this;
    },
    setAttribute(name, value) {
        this.customAttributes
            .push(name, value);
        return this;
    },
    render () {
        const el = elementOpen(
            this.renderedTagName, null, null,
            "style", this.viewStyle,
            "class", bind_class(this.classList, 'view'),
            ...this.customAttributes);
        this.children.forEach(child => child.render(el));
        elementClose(
            this.renderedTagName);
        return el;
    }
});
