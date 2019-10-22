import {html} from "lighterhtml";
import {bind_class} from "../utils/bind_class.util";
import {bind_style} from "../utils/bind_style.util";
import {box_arguments_behavior} from "../utils/box_arguments_behavior.util";
import "./View.scss";

export const View = (...children) => ({
    children,
    classList: {},
    viewStyle: {},
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
    borderRight(width, style, color) {
        this.viewStyle.borderRight = `${width}px ${style} ${color}`;
        return this;
    },
    minWidth(value) {
        this.viewStyle.minWidth = `${value}px`;
        return this;
    },
    minHeight(value) {
        this.viewStyle.minHeight = `${value}px`;
        return this;
    },
    maxWidth(value) {
        this.viewStyle.maxWidth = `${value}px`;
        return this;
    },
    maxHeight(value) {
        this.viewStyle.maxHeight = `${value}px`;
        return this;
    },
    width(value) {
        this.viewStyle.width = `${value}px`;
        return this;
    },
    height(value) {
        this.viewStyle.height = `${value}px`;
        return this;
    },
    onClick(eventListener) {
        this.addClass("clickable");
        this.eventListener = eventListener;
        return this;
    },
    render () {
        return html`
            <div 
                onclick="${e => this.eventListener(e)}"
                class=${bind_class(this.classList, 'view')}
                style="${bind_style(this.viewStyle)}">
                ${this.children.map(child => child.render())}
            </div>
        `;
    }
});
