import {View} from "../View";
import "./TextField.scss";
import {bind_style} from "../../utils/bind_style.util";
import {bind_class} from "../../utils/bind_class.util";
import {elementVoid} from "incremental-dom";
import {autoSize} from "../../utils/autoResizeTextarea.util";
export const TextField = (name, value, type = "text", placeholder = "") => ({
    ...View()
        .addClass("text_field")
        .addClass('type-' + type),
    onChangeHandler: () => {},
    autoSizing: false,
    onChange(cb) {
        this.onChangeHandler = cb;
        return this;
    },
    autoSize() {
        this.viewStyle.resize = "none";
        this.autoSizing = true;
        return this;
    },
    render () {
        const el = elementVoid(
            type !== "textarea" ? 'input' : 'textarea', null, null,
            "style", bind_style(this.viewStyle),
            "class", bind_class(this.classList, 'view'),
            "name", name,
            "type", type,
            "id", `input-${name}`,
            "placeholder", placeholder,
            "onkeyup", this.onChangeHandler,
            "oninput", e => {
                if(type === "textarea" && this.autoSizing) {
                    autoSize(e.target)
                }
            },
        );
        el.value = value;
        if(type === "textarea" && this.autoSizing) {
            autoSize(el)
        }
        return el;
    }
});
