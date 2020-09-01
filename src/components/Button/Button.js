import {View} from "../..";
import {Text, TEXT_STYLE} from "../..";
import "./Button.scss";
import {HStack, Icon, S} from "../..";

export const BUTTON_STYLE = {
    link: "link",
    flat: "flat",
    outlined: "outlined",
    filled: "filled",
};

export const Button = ({
    icon = null,
    label = "Button",
    action = () => {},
    type = "outlined",
    reversed = false
}) => ({
    ...View()
        .tagName("button")
        .on("click", e => {
            e.stopPropagation();
            action();
        })
        .addClass(type),
    disabled(isDisabled) {
        if (isDisabled) {
            this.setAttribute("disabled", "disabled");
        }
        return this;
    },
    get children() {
        let content = Text(label, TEXT_STYLE.button);
        if (icon) {
            content = HStack(Icon(icon, 16), content)
                .gap(S(2))
            if (reversed) {
                content.reverse()
            }
        }
        if(icon && label === "") {
            content = Icon(icon, 16);
        }
        return [
            content
        ];
    }
});
