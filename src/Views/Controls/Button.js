import {UIView} from "../View";
import {html} from "lighterhtml";
import {bind_class} from "../../utils/bind_class.util";
import {bind_style} from "../../utils/bind_style.util";
import {Icon} from "./Icon";

export class UIButtonView extends UIView{
    constructor (label) {
        super();
        this.label = label;
        this.action = () => {};
        this.icon = {
            render() {return html``}
        };
    }

    set_action(action) {
        this.action = action;
        return this;
    }

    set_icon(icon) {
        this.icon = icon;
        this.add_class("icon_button");
        return this;
    }

    render() {
        return html`
            <button  
                class=${bind_class(this.class_list, 'view')}
                style="${bind_style(this.view_style)}"
                onclick=${e => {
                    e.stopPropagation();
                    this.action();
                }}
            >
                ${this.icon.render()}
                ${this.label}
            </button>
        `;
    }
}

export function Button(label) {
    return new UIButtonView(label);
}
