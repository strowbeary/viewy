import {box_arguments_behavior} from "../../utils/box_arguments_behavior.util";
import "./View.scss";
import {elementClose, elementOpen} from "incremental-dom";
import {bind_class} from "../../utils/bind_class.util";
import popover from "./popover";
import {EmptyView} from "../EmptyView";

/**
 * View is the main component of this library
 * @param {...View} children any Object composed of View
 * @returns {View}
 */
export const View = (...children) => ({
    children,
    classList: {
        view: true
    },
    viewStyle: {},
    tag: [],
    viewName: "",
    key: null,
    renderedTagName: "div",
    customAttributes: [],
    popoverConfig: null,
    get isEmptyView () {
        return false;
    },
    /**
     * Set text color
     * @param {color} color any valid css color
     * @returns {View}
     */
    color (color) {
        this.viewStyle.color = color;
        return this;
    },
    /**
     * Add a class to the class list
     * @param {String} className
     * @returns {View}
     */
    addClass (className) {
        this.classList[className] = true;
        return this;
    },
    /**
     * Remove matching class from the class list
     * @param {String} className
     * @returns {View}
     */
    removeClass (className) {
        this.classList[className] = false;
        return this;
    },
    /**
     * Set padding property
     * @param {number} top top or vertical padding
     * @param {number} right right or horizontal padding
     * @param {number} bottom bottom padding
     * @param {number} left left padding
     * @returns {View}
     */
    padding (top = 0, right, bottom, left) {
        const [t, r, b, l] = box_arguments_behavior([top, right, bottom, left]);
        this.viewStyle.padding = `${t} ${r} ${b} ${l}`;
        return this;
    },
    /**
     * Set padding-top property
     * @param {String} value any valid css spacing unit
     * @returns {View}
     */
    paddingTop (value) {
        this.viewStyle.paddingTop = value;
        return this;
    },
    /**
     * Set padding-right property
     * @param {String} value any valid css spacing unit
     * @returns {View}
     */
    paddingRight (value) {
        this.viewStyle.paddingRight = value;
        return this;
    },
    /**
     * Set padding-bottom property
     * @param {String} value any valid css spacing unit
     * @returns {View}
     */
    paddingBottom (value) {
        this.viewStyle.paddingBottom = value;
        return this;
    },
    /**
     * Set padding-left property
     * @param {String} value any valid css spacing unit
     * @returns {View}
     */
    paddingLeft (value) {
        this.viewStyle.paddingLeft = value;
        return this;
    },
    /**
     * Set margin property
     * @param {number} top top or vertical margin
     * @param {number} right right or horizontal margin
     * @param {number} bottom bottom margin
     * @param {number} left left margin
     * @returns {View}
     */
    margin (top = 0, right, bottom, left) {
        const [t, r, b, l] = box_arguments_behavior([top, right, bottom, left]);
        this.viewStyle.margin = `${t} ${r} ${b} ${l}`;
        return this;
    },
    /**
     * Set margin-top property
     * @param {String} value any valid css spacing unit
     * @returns {View}
     */
    marginTop (value) {
        this.viewStyle.marginTop = value;
        return this;
    },
    /**
     * Set margin-right property
     * @param {String} value any valid css spacing unit
     * @returns {View}
     */
    marginRight (value) {
        this.viewStyle.marginRight = value;
        return this;
    },
    /**
     * Set margin-bottom property
     * @param {String} value any valid css spacing unit
     * @returns {View}
     */
    marginBottom (value) {
        this.viewStyle.marginBottom = value;
        return this;
    },
    /**
     * Set margin-left property
     * @param {String} value any valid css spacing unit
     * @returns {View}
     */
    marginLeft (value) {
        this.viewStyle.marginLeft = value;
        return this;
    },
    /**
     * Set border-right property
     * @param {number} width width in pixels
     * @param {style} style [solid, dashed,...]
     * @param {color} color any valid css color
     * @returns {View}
     */
    borderRight (width, style, color = "var(--color-border)") {
        this.viewStyle.borderRight = `${width} ${style} ${color}`;
        return this;
    },
    /**
     * Set border-left property
     * @param {number} width width in pixels
     * @param {style} style [solid, dashed,...]
     * @param {color} color any valid css color
     * @returns {View}
     */
    borderLeft (width, style, color = "var(--color-border)") {
        this.viewStyle.borderLeft = `${width} ${style} ${color}`;
        return this;
    },
    /**
     * Set border-top property
     * @param {number} width width in pixels
     * @param {style} style [solid, dashed,...]
     * @param {color} color any valid css color
     * @returns {View}
     */
    borderTop (width, style, color = "var(--color-border)") {
        this.viewStyle.borderTop = `${width} ${style} ${color}`;
        return this;
    },
    /**
     * Set border-bottom property
     * @param {number} width width in pixels
     * @param {style} style [solid, dashed,...]
     * @param {color} color any valid css color
     * @returns {View}
     */
    borderBottom (width, style, color = "var(--color-border)") {
        this.viewStyle.borderBottom = `${width} ${style} ${color}`;
        return this;
    },
    /**
     * Set border property
     * @param {number} width width in pixels
     * @param {style} style [solid, dashed,...]
     * @param {color} color any valid css color
     * @returns {View}
     */
    border (width, style, color = "var(--color-border)") {
        this.viewStyle.border = `${width} ${style} ${color}`;
        return this;
    },
    /**
     * Set border-color property
     * @param {color} color any valid css color
     * @returns {View}
     */
    borderColor (color = "var(--color-border)") {
        this.viewStyle.borderColor = color;
        return this;
    },
    /**
     * Set min-width css property
     * @param {String} value any valid css spacing unit
     * @returns {View}
     */
    minWidth (value) {
        this.viewStyle.minWidth = value;
        return this;
    },
    /**
     * Set min-height css property
     * @param {String} value any valid css spacing unit
     * @returns {View}
     */
    minHeight (value) {
        this.viewStyle.minHeight = value;
        return this;
    },
    /**
     * Set max-width css property
     * @param {String} value any valid css spacing unit
     * @returns {View}
     */
    maxWidth (value) {
        this.viewStyle.maxWidth = value;
        return this;
    },
    /**
     * Set max-height css property
     * @param {String} value any valid css spacing unit
     * @returns {View}
     */
    maxHeight (value) {
        this.viewStyle.maxHeight = value;
        return this;
    },
    /**
     * Set width css property
     * @param {String} value any valid css spacing unit
     * @returns {View}
     */
    width (value) {
        this.viewStyle.width = value;
        return this;
    },
    /**
     * Set align-self css property
     * Use when the component is a child of a Grid or a Stack (HStack / VStack)
     * @param {String} value [flex-end, flex-start, center,...]
     * @returns {View}
     */
    alignSelf (value) {
        this.viewStyle.alignSelf = `${value}`;
        return this;
    },
    /**
     * Set justify-self css property
     * Use when the component is a child of a Grid or a Stack (HStack / VStack)
     * @param {String} value [flex-end, flex-start, center,...]
     * @returns {View}
     */
    justifySelf (value) {
        this.viewStyle.justifySelf = `${value}`;
        return this;
    },
    backgroundColor (value) {
        this.viewStyle.backgroundColor = `${value}`;
        return this;
    },
    /**
     * Set height css property
     * @param {String} value any valid css sizing unit
     * @returns {View}
     */
    height (value) {
        this.viewStyle.height = value;
        return this;
    },
    cornerRadius (top_left, top_right, bottom_right, bottom_left) {
        const [tl, tr, br, bl] = box_arguments_behavior([top_left, top_right, bottom_right, bottom_left]);
        this.viewStyle.borderRadius = `${tl} ${tr} ${br} ${bl}`;
        return this;
    },
    sticky () {
        this.viewStyle.position = 'sticky';
        this.viewStyle.top = 0;
        return this;
    },
    on (eventName, callback) {
        this.customAttributes.push(`on${eventName}`, callback);
        return this;
    },
    name (viewName) {
        this.viewName = viewName;
        return this;
    },
    /**
     * Change used HTML element tag name (default id <div>)
     * @param {String} tagName any valid html tag name
     * @returns {View}
     */
    tagName (tagName) {
        this.renderedTagName = tagName;
        return this;
    },
    setAttribute (name, value) {
        this.customAttributes
            .push(name, value);
        return this;
    },
    setKey (key) {
        this.key = key;
        return this;
    },
    gridColumn (column) {
        this.viewStyle.gridColumn = column;
        return this;
    },
    gridRow (column) {
        this.viewStyle.gridRow = column;
        return this;
    },
    flexGrow (value) {
        this.viewStyle.flexGrow = value;
        return this;
    },
    popover ({isVisible, placement, view = () => EmptyView()}) {
        this.popoverConfig = {isVisible, placement, view}
        return this;
    },
    render () {
        const el = elementOpen(
            this.renderedTagName, this.key, null,
            "style", this.viewStyle,
            "class", bind_class(this.classList),
            ...this.customAttributes);
        this.children.forEach(child => child.render(el));
        elementClose(
            this.renderedTagName);
        if (this.popoverConfig) popover(el, this.popoverConfig).render();
        return el;
    }
});
