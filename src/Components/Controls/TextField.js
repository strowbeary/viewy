import {View} from "../View";
import {html} from "lighterhtml";
import {bind_style} from "../../utils/bind_style.util";
import "./TextField.scss"
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
                <input class="text_field" value="${this.value}" style="${bind_style(this.viewStyle)}" type="${type}" name="${name}" placeholder="${placeholder}"/>
            `;
        } else {
            return html`
                <textarea class="text_field" style="${bind_style(this.viewStyle)}" name="${name}" placeholder="${placeholder}">${this.value}</textarea>
            `;
        }
    }
});
