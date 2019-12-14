import {View} from "../View";
import {EmptyView} from "../EmptyView";
import {Text, TEXT_STYLE} from "../Text/Text";
import "./Button.scss"
import {elementClose, elementOpen} from "incremental-dom";
import {bind_style} from "../../utils/bind_style.util";
import {bind_class} from "../../utils/bind_class.util";

export const Button = (
    label = "Button",
    action = () => {},
    type = "outlined",
) => ({
    ...View(),
    icon: EmptyView(),
    color: 'blue',
    setIcon (icon) {
        this.icon = icon;
        this.addClass("icon_button");
        return this;
    },
    render () {
        const el = elementOpen(
            "button", null, null,
            "style", bind_style({
                ...this.viewStyle,
            }),
            "class", bind_class(this.classList, 'view'),
            "onclick", e => {
                e.stopPropagation();
                action();
            }
        );
        this.icon.render();
        Text(label, TEXT_STYLE.button).render();
        elementClose("button");
        return el;
    }

}).addClass(type);
