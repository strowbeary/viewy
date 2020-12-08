import {View} from "../View/View";
import "./TextField.scss";
import {text} from "incremental-dom";
import {autoSize} from "../../utils/autoResizeTextarea.util";
export const TextField = ({ name, value, type = "text", placeholder = "", autoSizing = false }) => {
    const baseView = View()
        .addClass("text_field")
        .addClass('type-' + type)
        .tagName(type !== "textarea" ? 'input' : 'textarea')
        .setAttribute("name", name)
        .setAttribute("placeholder", placeholder)
        .on("input", e => {
            if(type === "textarea" && autoSizing) {
                autoSize(e.target)
            }
        });
    if(type !== "textarea") {
        baseView.setAttribute("type", type);
        baseView.setAttribute("value", value);
    }
    else {
        baseView.children.push({
            render() {
                text(value)
            }
        })
    }
    if(autoSizing) baseView.viewStyle.resize = "none";
    return baseView;
};
