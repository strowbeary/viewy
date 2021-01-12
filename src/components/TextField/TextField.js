import {View} from "../View/View";
import "./TextField.scss";
import {text} from "incremental-dom";
import {autoSize} from "../../utils/autoResizeTextarea.util";

export const TextField = ({name, type = "text", placeholder = "", autoSizing = false}) => {
    const baseView = {
        ...View()
            .setKey(name)
            .addClass("text-field")
            .addClass('type-' + type)
            .tagName(type !== "textarea" ? 'input' : 'textarea')
            .setAttribute("name", name)
            .setAttribute("type", type)
            .setAttribute("placeholder", placeholder)
            .on("input", e => {
                if (type === "textarea" && autoSizing) {
                    autoSize(e.target)
                }
            }),
        value (value) {
            if (type !== "textarea") {
                this.setAttribute("type", type);
                this.setAttribute("value", value);
            } else {
                this.children.push({
                    render () {
                        text(value)
                    }
                })
            }
            return this;
        },
        model ([state, key]) {
            this
                .value(state[key])
                .on("input", e => state[key] = e.target.value)
                .on("change", e => state[key] = e.target.value);
            return this;
        }
    };

    if (autoSizing) baseView.viewStyle.resize = "none";
    return baseView;
};
