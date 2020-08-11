import {View} from "../View/View";
import {Text, TEXT_STYLE} from "../Text/Text";
import "./Button.scss";
import {EmptyView, Icon} from "../..";

export const Button = ({
    icon = null,
    label = "Button",
    action = () => {},
    type = "outlined",
}) => ({
    ...View()
        .tagName("button")
        .on("click", e => {
            e.stopPropagation();
            action();
        })
        .addClass(type),
    get children() {
        return [
            icon ? Icon(icon) : EmptyView(),
            Text(label, TEXT_STYLE.button),
        ];
    }
});
