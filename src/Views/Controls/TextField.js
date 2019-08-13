import {View} from "../View";
import {html} from "lighterhtml";
import {bind_style} from "../../utils/bind_style.util";

export const TextField = (name, type = "text", placeholder = "", formater) => ({
    ...View(),
    value: "",
    setValue(value) {
        this.value = value;
        return this;
    },
    render () {
        if(type !== "textarea") {
            return html`
                <input class="text_field" value="${this.value}" style="${bind_style(this.view_style)}" type="${type}" name="${name}" placeholder="${placeholder}"/>
            `;
        } else {
            return html`
                <textarea class="text_field" style="${bind_style(this.view_style)}" name="${name}" placeholder="${placeholder}">${this.value}</textarea>
            `;
        }
    }
});
