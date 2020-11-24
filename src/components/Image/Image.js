import {View} from "../View/View";
import "./Image.scss";
import {elementVoid} from "incremental-dom";
import {bind_class} from "../../utils/bind_class.util";

export const Image = (src, alt = "") => ({
    ...View()
        .tagName("img")
        .addClass("image")
        .setAttribute("src", src)
        .setAttribute("alt", alt),
    mask (src) {
        this.viewStyle.mask = `url(${src}) luminance 20%`;
        return this;
    },
    size (width, height) {
        this.viewStyle.width = width + "px";
        this.viewStyle.height = height + "px";
        return this;
    },
    objectPosition (align) {
        this.viewStyle.objectPosition = align;
        return this;
    }
});

export const Svg = (svg_content) => ({
    ...View()
        .addClass("svg"),
    render () {
        const el = elementVoid(
            this.renderedTagName,
            this.key,
            null,
            "style", this.viewStyle,
            "class", bind_class(this.classList, 'view'),
            ...this.customAttributes);

        el.innerHTML = svg_content;
        return el;
    }
});
