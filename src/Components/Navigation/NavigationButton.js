import {View} from "../View";
import {Icon} from "../Controls/Icon";
import {navigation_controller} from "../../Controllers/NavigationController";
import "./NavigationButton.scss"

export const NavigationButton = ({destination, state}, ...children) => ({
    ...View().addClass("navigation_button"),
    get children() {
        return [
            ...children,
            Icon("navigation/chevron_right").setSize(18)
        ]
    },
    onclick(e) {
        e.stopPropagation();
        navigation_controller.navigate(destination, state);
    }
});
