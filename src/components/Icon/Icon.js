import "./Icon.scss"
import icons from "feather-icons/dist/icons.json";
import {elementVoid} from "incremental-dom";
import {bind_class} from "../../utils/bind_class.util";
import {View} from "../View/View";
import {sp} from "../../ressources/SizingScale";
export const Icon = (icon, size = 24) => {
    return {
        ...View()
            .addClass("icon"),
        color(color) {
            this.viewStyle.color = color;
            return this;
        },
        render() {
            this.viewStyle.width = sp(size);
            this.viewStyle.height = sp(size);
            const el = elementVoid(
                'svg',
                null,
                null,
                "style", this.viewStyle,
                "class", bind_class(this.classList, 'view'),
                "viewBox", "0 0 24 24",
                "fill", "none",
                "stroke", "currentColor",
                'stroke-width', 3,
                "stroke-linecap", "round",
                "stroke-linejoin", "round",
                "width", `${size}px`,
                "height", `${size}px`,
                ...this.customAttributes
            );

            el.innerHTML = icons[icon];
            return el;
        }
    };
};
