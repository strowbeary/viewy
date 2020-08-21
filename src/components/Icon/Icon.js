import "./Icon.scss"
import iconPaths from "../../../node_modules/feather-icons/dist/icons/*.svg";
import {elementClose, elementOpen, skip} from "incremental-dom";
import {bind_class} from "../../utils/bind_class.util";
import {View} from "../View/View";
import {useState} from "augmentor";

export const Icon = (icon = "box", size = 24) => {
    const [content, setContent] = useState("");
    return {
        ...View()
            .addClass("icon"),
        render () {
            (async () => {
                const res = await fetch((iconPaths[icon]));
                const svg = await res.text();
                setContent(svg);
            })();
            this.viewStyle.width = `${size / 16}rem`;
            this.viewStyle.height = `${size / 16}rem`;
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
            if(el.firstChild) {
                el.firstChild.setAttribute("width", `100%`);
                el.firstChild.setAttribute("height", `100%`);
                el.firstChild.setAttribute("stroke-width", 3);
            }
            skip();

            elementClose(this.renderedTagName);
            return el;
        }
    };
};
