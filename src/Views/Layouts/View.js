import {html} from "lighterhtml";
import {bind_class} from "../../utils/bind_class.util";
import {bind_style} from "../../utils/bind_style.util";

export class UIView {
    constructor (...children) {
        this.children = children;
        this.class_list = {};
        this.view_style = {};
    }

    transform () {
        return this;
    }

    add_class (class_name) {
        this.class_list[class_name] = true;
        return this;
    }

    remove_class (class_name) {
        this.class_list[class_name] = false;
        return this;
    }

    padding (top = 0, right, bottom, left) {

        if (
            typeof top === "number" &&
            typeof right === "number" &&
            typeof bottom === "undefined" &&
            typeof left === "undefined"
        ) {
            bottom = top;
            left = right;
        } else if (typeof right === "undefined" && typeof bottom === "undefined" && typeof left === "undefined") {
            bottom = top;
            right = top;
            left = top;
        }

        this.view_style.padding = `${top}px ${right}px ${bottom}px ${left}px`;
        return this;
    }

    margin (top = 0, right, bottom, left) {
        if (
            typeof top === "number" &&
            typeof right === "number" &&
            typeof bottom === "undefined" &&
            typeof left === "undefined"
        ) {
            bottom = top;
            left = right;
        } else if (typeof right === "undefined" && typeof bottom === "undefined" && typeof left === "undefined") {
            bottom = top;
            right = top;
            left = top;
        }

        this.view_style.margin = `${top}px ${right}px ${bottom}px ${left}px`;
        return this;
    }

    render () {
        return html`
            <div 
                class=${bind_class(this.class_list, 'view')}
                style="${bind_style(this.view_style)}">
                ${this.children.map(c => c.render())}
            </div>
        `;
    }
}

export function View (...children) {
    return new UIView(...children);
}
