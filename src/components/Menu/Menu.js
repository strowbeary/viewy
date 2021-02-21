import "./Menu.scss";
import {View} from "../View/View";
import {HStack, VStack} from "../Stack/Stack";
import {Icon} from "../Icon/Icon";
import {EmptyView} from "../EmptyView";
import {Text, TEXT_STYLE} from "../Text/Text";
import {sp} from "../../ressources/SizingScale";


export const Menu = ({ name, items = []}) => {
    function ContextualStyle() {

    }

    function InlineStyle() {

    }
    return VStack(...items)
        .setKey(name)
        .addClass("menu")
}

export const MenuSection = ({name, items = []}) => VStack(
    Text(name, TEXT_STYLE.overline)
        .addClass("menu-section__title"),
    VStack(...items)
)
    .addClass("menu-section")

export const MENU_ITEM_STYLE = {
    normal: "normal",
    destructive: "destructive",
}

export const MenuItem= ({
    icon= null,
    label= "",
    style = MENU_ITEM_STYLE.normal
}) => ({
    ...HStack(
        icon ? Icon(icon, sp(16)) : EmptyView(),
        Text(label, TEXT_STYLE.label)
    )
        .gap(sp(12))
        .alignItems("center")
        .addClass("menu-item"),
    selected(isSelected = true) {
        if (isSelected) this.addClass("menu-item--selected");
        return this;
    }
})
