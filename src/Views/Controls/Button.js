import {UIView} from "../Layouts/View";
import {html} from "lighterhtml";
import {bind_class} from "../../utils/bind_class.util";
import {bind_style} from "../../utils/bind_style.util";

export class UIButtonView extends UIView{


    constructor (label) {
        super();
        this.label = label;
        this.action = () => {};
        this.icon = null;
    }

    set_action(action) {
        this.action = action;
        return this;
    }

    set_icon(icon, side) {
        this.icon = {icon, side};
    }

    render() {
        return html`
            <button  
                class=${bind_class(this.class_list, 'view')}
                style="${bind_style(this.view_style)}"
                onclick=${() => this.action()}
            >
                ${this.icon ? Icon().render() : html``}
                ${this.label}
            </button>
        `;
    }
}

export function Button(label) {
    return new UIButtonView(label);
}
