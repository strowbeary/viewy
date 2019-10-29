import {View} from "../View";
import {EmptyView} from "../Presentation/EmptyView";
import {Text, TEXT_STYLE} from "../Controls/Text";
import {colorToCssVariable} from "../../ressources/colors";
import "./Button.scss"
import {elementClose, elementOpen} from "incremental-dom";
import {bind_style} from "../../utils/bind_style.util";
import {bind_class} from "../../utils/bind_class.util";

export const Button = (label = "Button", action = () => {
}, type = "outlined", color = "blue") => ({
    ...View(),
    icon: EmptyView(),
    setIcon (icon) {
        this.icon = icon;
        this.addClass("icon_button");
        return this;
    },
    render () {
        const el = elementOpen(
            "button", null, null,
            "style", bind_style({...this.viewStyle, ...colorToCssVariable(color)}),
            "class", bind_class(this.classList, 'view'),
            "onclick", e => {
                e.stopPropagation();
                action();
            }
        );
        this.icon.render();
        Text(label, TEXT_STYLE.button).render();
        elementClose("button");
    }

}).addClass(type);
