import {View} from "../..";
import {Text, TEXT_STYLE} from "../..";
import "./Button.scss";
import {HStack, Icon, S} from "../..";

export const BUTTON_STYLE = {
    link: "link",
    flat: "flat",
    outlined: "outlined",
    filled: "filled",
    destructive: "destructive"
};

export const BUTTON_TYPE = {
    submit: "submit",
    reset: "reset",
    button: "button"
}

export const Button = ({
    icon = null,
    label = "",
    style = BUTTON_STYLE.outlined,
    type = "",
    reversed = false
}) => ({
    ...View()
        .tagName("button")
        .addClass(style),
    disabled (isDisabled) {
        if (isDisabled) {
            this.setAttribute("disabled", "disabled");
        }
        return this;
    },
    get children () {
        let content = Text(label, TEXT_STYLE.button);
        if (icon) {
            content = HStack(Icon(icon, 16), content)
                .justifyContent("center")
                .gap(S(2))
            if (reversed) {
                content.reverse()
            }
        }
        if (icon && label === "") {
            content = Icon(icon, 16);
        }
        return [
            content
        ];
    }
});
