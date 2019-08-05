import {UIView} from "./View";
import {html} from "lighterhtml";
import {bind_style} from "../utils/bind_style.util";

export class UITextField extends UIView {
    specific_style = {};
    constructor (name, type = "text", placeholder = "", formater) {
        super();
        this.name = name;
        this.type = type;
        this.placeholder = placeholder;
        this.formater = formater;
    }

    margin(top, right, bottom, left) {
        this.specific_style.margin = `${top}px ${right}px ${bottom}px ${left}px`;
        return this;
    }

    render () {
        return html`
            <input class="text_field" style="${bind_style(this.specific_style)}" type="${this.type}" name="${this.name}" placeholder="${this.placeholder}"/>
        `;
    }
}

export function TextField(name, type = "text", placeholder = "", formater) {
    return new UITextField(name, type, placeholder, formater);
}
