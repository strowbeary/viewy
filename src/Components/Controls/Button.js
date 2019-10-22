import {View} from "../View";
import {html} from "lighterhtml";
import {bind_class} from "../../utils/bind_class.util";
import {bind_style} from "../../utils/bind_style.util";
import {EmptyView} from "../Presentation/EmptyView";
import {Text, TEXT_STYLE} from "../Controls/Text";
import {colorToCssVariable} from "../../colors";
import "./Button.scss"

export const Button = (label = "Button", action = () => {
}, type = "outlined", color = "blue") => ({
    ...View(),
    el: document.createElement("button"),
    icon: EmptyView(),
    setIcon (icon) {
        this.icon = icon;
        this.addClass("icon_button");
        return this;
    },
    render () {
        this.el.style = {
            ...this.el.style,
            ...this.viewStyle,
            ...colorToCssVariable(color)
        };
        this.el.addEventListener("click", e => {
            e.stopPropagation();
            action();
        });
        this.el.append(
            this.icon.render(),
            Text(label, TEXT_STYLE.label).render()
        );
        return this.el;
    }

}).addClass(type);
