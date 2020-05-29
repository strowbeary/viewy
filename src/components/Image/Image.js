import {View} from "../View/View";
import "./Image.scss";

export const Image = (src, alt = "") => ({
    ...View()
        .tagName("img")
        .addClass("image")
        .setAttribute("src", src)
        .setAttribute("alt", alt),
    mask(src) {
        this.viewStyle.mask= `url(${src}) luminance 20%`;
        return this;
    },
    size(width, height) {
        this.viewStyle.width = width + "px";
        this.viewStyle.height = height + "px";
        return this;
    },
    objectPosition(align) {
        this.viewStyle.objectPosition = align;
        return this;
    }
});

