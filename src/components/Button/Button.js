import {View} from "../View/View";
import {Text, TEXT_STYLE} from "../Text/Text";
import "./Button.scss";

export const Button = (
    label = "Button",
    action = () => {},
    type = "outlined",
) => ({
    ...View()
        .tagName("button")
        .on("click", e => {
            e.stopPropagation();
            action();
        })
        .addClass(type),
    get children() {
        return [
            Text(label, TEXT_STYLE.button),
        ];
    }
});
