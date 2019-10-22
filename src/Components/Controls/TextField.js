import {View} from "../View";
import "./TextField.scss";
export const TextField = (name, type = "text", placeholder = "") => ({
    ...View(),
    el: document.createElement(type !== "textarea" ? 'input' : 'textarea'),
    value: "",
    setValue(value) {
        this.value = value;
        this.el.addEventListener("keyup", e => {
            this.value = e.target.value;
        });
        return this;
    },
    onChange(cb) {
        this.el.addEventListener("keyup", cb);
        return this;
    },
    render () {
        this.el.setAttribute("name", name);
        this.el.setAttribute("placeholder", placeholder);

        if(type !== "textarea") {
            this.el.setAttribute("type", type);
            this.el.setAttribute("value", this.value);
        } else {
            this.el.value = this.value;
        }
        return this.el;
    }
})
    .addClass("text_field");
