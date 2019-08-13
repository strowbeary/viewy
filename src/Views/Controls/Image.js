import {View} from "../View";
import {html} from "lighterhtml";
import {bind_class} from "../../utils/bind_class.util";
import {bind_style} from "../../utils/bind_style.util";
import {box_arguments_behavior} from "../../utils/box_arguments_behavior.util";

export const Image = (src) => ({
    ...View(),
    cornerRadius(top_left, top_right, bottom_right, bottom_left) {
        const [tl, tr, br, bl] = box_arguments_behavior([top_left, top_right, bottom_right, bottom_left]);
        this.view_style.borderRadius = `${tl}px ${tr}px ${br}px ${bl}px`;
        return this;
    },
    mask(src) {
        this.view_style.mask= `url(${src}) luminance 20%`;
        return this;
    },
    size(width, height) {
        this.view_style.width = width + "px";
        this.view_style.height = height + "px";
        return this;
    },
    render() {
        return html`
            <img 
                class=${bind_class(this.class_list, 'image')}
                style="${bind_style(this.view_style)}" 
                src="${this.src}" 
                alt=""
            >
        `;
    }
});

