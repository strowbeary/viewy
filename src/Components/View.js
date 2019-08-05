import {html} from "lighterhtml";
import {bind_class} from "../utils/bind_class.util.js";
import {bind_style} from "../utils/bind_style.util";

export class UIView {
    class_list = {};
    specific_style = {};

    constructor(...children) {
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
        this.specific_style.padding = `${top}px ${right}px ${bottom}px ${left}px`;
        return this;
    }
    margin(top, right, bottom, left) {
        this.specific_style.margin = `${top}px ${right}px ${bottom}px ${left}px`;
        return this;
    }
    render() {
        return html`
            <div 
                class=${bind_class(this.class_list, 'view')}
                style="${bind_style(this.specific_style)}">
                ${this.children.map(c => c.render())}
            </div>
        `;
    }
}

export function View(...children) {
    return new UIView(...children);
}
