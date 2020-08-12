import "./Icon.scss"
import {icons} from "feather-icons";
import {elementClose, elementOpen, skip} from "incremental-dom";
import {bind_class} from "../../utils/bind_class.util";
import {View} from "../View/View";

export const Icon = (icon = "box", size = 24) => {
    return {
        ...View()
            .addClass("icon"),
        render () {
            const content = icons[icon].toSvg({
                width: size,
                height: size,
                stroke: 'currentColor',
                'stroke-width': 3
            });
            this.viewStyle.width = `${size}px`;
            this.viewStyle.height = `${size}px`;
            const el = elementOpen(
                this.renderedTagName,
                null,
                null,
                "style", this.viewStyle,
                "class", bind_class(this.classList, 'view'),
                ...this.customAttributes
            );

            if (el.__cachedInnerHtml !== content) {
                el.__cachedInnerHtml = content;
                el.innerHTML = content;
            }
            skip();

            elementClose(this.renderedTagName);
            return el;
        }
    };
};
