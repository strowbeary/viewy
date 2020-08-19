import {View} from "../View/View";
import {Text, TEXT_STYLE} from "../Text/Text";
import "./Button.scss";
import {EmptyView, HStack, Icon, S} from "../..";

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
    get children() {
        const content = HStack(
            icon
                ? Icon(icon, 16)
                : EmptyView(),
            Text(label, TEXT_STYLE.button),
        )
            .gap(S(2));
        return [
            reversed ? content.reverse() : content
        ];
    }
});
