import {View} from "../View";
import {box_arguments_behavior} from "../../utils/box_arguments_behavior.util";
import "./Image.scss"
import {elementClose, elementOpen} from "incremental-dom";
import {bind_style} from "../../utils/bind_style.util";
import {bind_class} from "../../utils/bind_class.util";

export const Image = (src, alt = "") => ({
    ...View(),
    cornerRadius(top_left, top_right, bottom_right, bottom_left) {
        const [tl, tr, br, bl] = box_arguments_behavior([top_left, top_right, bottom_right, bottom_left]);
        this.viewStyle.borderRadius = `${tl}px ${tr}px ${br}px ${bl}px`;
        return this;
    },
    mask(src) {
        this.viewStyle.mask= `url(${src}) luminance 20%`;
        return this;
    },
    size(width, height) {
        this.viewStyle.width = width + "px";
        this.viewStyle.height = height + "px";
        return this;
    },
    render() {
        const el = elementOpen(
            "img", null, null,
            "style", bind_style(this.viewStyle),
            "class", bind_class(this.classList, 'image'),
            "src", src,
            "alt", alt,
            'onclick', this.eventListener
        );
        elementClose("img");
    }
});

