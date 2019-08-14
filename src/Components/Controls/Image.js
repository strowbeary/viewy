import {View} from "../View";
import {html} from "lighterhtml";
import {bind_class} from "../../utils/bind_class.util";
import {bind_style} from "../../utils/bind_style.util";
import {box_arguments_behavior} from "../../utils/box_arguments_behavior.util";
import "./Image.scss"

export const Image = (src) => ({
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
        return html`
            <img 
                class=${bind_class(this.classList, 'image')}
                style="${bind_style(this.viewStyle)}" 
                src="${src}" 
                alt=""
            >
        `;
    }
});

