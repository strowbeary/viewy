import {html} from "lighterhtml";
import {bind_class} from "../utils/bind_class.util";
import {bind_style} from "../utils/bind_style.util";
import {box_arguments_behavior} from "../utils/box_arguments_behavior.util";


export const View = (...children) => ({
    children,
    classList: {},
    view_style: {},
    addClass(className) {
        this.classList[className] = true;
        return this;
    },
    removeClass(className) {
        this.classList[className] = false;
        return this;
    },
    padding(top = 0, right, bottom, left) {
        const [t, b, l, r] = box_arguments_behavior([top, bottom, left, right]);
        this.view_style.padding = `${t}px ${b}px ${l}px ${r}px`;
        return this;
    },
    margin(top = 0, right, bottom, left) {
        const [t, b, l, r] = box_arguments_behavior([top, bottom, left, right]);
        this.view_style.margin = `${t}px ${b}px ${l}px ${r}px`;
        return this;
    },
    marginTop(value) {
        this.view_style.marginTop = value + "px";
        return this;
    },
    marginRight(value) {
        this.view_style.marginRight = value + "px";
        return this;
    },
    marginBottom(value) {
        this.view_style.marginBottom= value + "px";
        return this;
    },
    marginLeft(value) {
        this.view_style.marginLeft = value + "px";
        return this;
    },
    render () {
        return html`
            <div 
                class=${bind_class(this.classList, 'view')}
                style="${bind_style(this.view_style)}">
                ${this.children.map(child => child.render())}
            </div>
        `;
    }
});
