import {View} from "../View";
import {Icon} from "../Controls/Icon";
import {navigation_controller} from "../../Controllers/NavigationController";
import "./NavigationButton.scss"

export const NavigationButton = (path, ...children) => ({
    ...View().addClass("navigation_button"),
    children,
    onclick(e) {
        e.stopPropagation();
        navigation_controller.navigate(path);
    }
});
