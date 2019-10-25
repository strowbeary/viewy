import {View} from "../View";
import "./TextField.scss";
import {bind_style} from "../../utils/bind_style.util";
import {bind_class} from "../../utils/bind_class.util";
import {elementVoid} from "incremental-dom";
export const TextField = (name, value, type = "text", placeholder = "") => ({
    ...View(),
    onChangeHandler: () => {},
    onChange(cb) {
        this.onChangeHandler = cb;
        return this;
    },
    render () {
        const el = elementVoid(
            type !== "textarea" ? 'input' : 'textarea', null, null,
            "style", bind_style(this.viewStyle),
            "class", bind_class(this.classList, 'view'),
            "name", name,
            "type", type,
            "value", value,
            "placeholder", placeholder,
            "onkeyup", this.onChangeHandler,
        );
    }
})
    .addClass("text_field");
