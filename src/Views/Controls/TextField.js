import {UIView} from "../View";
import {html} from "lighterhtml";
import {bind_style} from "../../utils/bind_style.util";

export class UITextFieldView extends UIView {

    constructor (name, type = "text", placeholder = "", formater) {
        super();
        this.name = name;
        this.type = type;
        this.placeholder = placeholder;
        this.formater = formater;
        this.view_style = {};
    }

    margin(top, right, bottom, left) {
        this.view_style.margin = `${top}px ${right}px ${bottom}px ${left}px`;
        return this;
    }

    set_value(value) {
        this.value = value;
        return this;
    }

    render () {
        if(this.type !== "textarea") {
            return html`
                <input class="text_field" value="${this.value}" style="${bind_style(this.view_style)}" type="${this.type}" name="${this.name}" placeholder="${this.placeholder}"/>
            `;
        } else {
            return html`
                <textarea class="text_field" style="${bind_style(this.view_style)}" name="${this.name}" placeholder="${this.placeholder}">${this.value}</textarea>
            `;
        }
    }
}

export function TextField(name, type = "text", placeholder = "", formater) {
    return new UITextFieldView(name, type, placeholder, formater);
}
