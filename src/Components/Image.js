import {UIView} from "./View";
import {html} from "lighterhtml";
import {bind_class} from "../utils/bind_class.util";
import {bind_style} from "../utils/bind_style.util";

export class UIImageView extends UIView {
    constructor (src) {
        super();
        this.src = src;
    }

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

    corner_radius(...[top_left, top_right, bottom_right, bottom_left]) {
        if (
            typeof top_left === "number" &&
            typeof top_right === "number" &&
            typeof bottom_right === "undefined" &&
            typeof bottom_left === "undefined"
        ) {
            bottom_right = top_left;
            bottom_left = top_right;
        } else if (typeof top_right === "undefined" && typeof bottom_right === "undefined" && typeof bottom_left === "undefined") {
            top_right = bottom_right = bottom_left = top_left;
        }
        this.view_style.borderRadius = `${top_left}px ${top_right}px ${bottom_right}px ${bottom_left}px`;
        return this;
    }

    mask(src) {
        this.view_style.mask= `url(${src}) luminance 20%`;
        return this;
    }

}

export function Image(src) {
    return new UIImageView(src);
}
