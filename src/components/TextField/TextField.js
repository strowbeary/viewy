import {View} from "../View/View";
import "./TextField.scss";
import {bind_style} from "../../utils/bind_style.util";
import {bind_class} from "../../utils/bind_class.util";
import {elementVoid} from "incremental-dom";
import {autoSize} from "../../utils/autoResizeTextarea.util";
export const TextField = ({ name, value, type = "text", placeholder = "", autoSizing = false }) => {
    const baseView = View()
        .addClass("text_field")
        .addClass('type-' + type)
        .tagName(type !== "textarea" ? 'input' : 'textarea')
        .setAttribute("name", name)
        .setAttribute("placeholder", placeholder)
        .setAttribute("value", value)
        .on("input", e => {
            if(type === "textarea" && autoSizing) {
                autoSize(e.target)
            }
        });
    if(type !== "textarea") baseView.setAttribute("type", type);
    if(autoSizing) baseView.viewStyle.resize = "none";
    return baseView;
};
