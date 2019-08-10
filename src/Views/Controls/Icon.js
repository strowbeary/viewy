import icons from "../../assets/icons/*/svg/production/*.svg";
import {html, svg} from "lighterhtml";
import navigation_manager from "../../NavigationManager";
import {bind_class} from "../../utils/bind_class.util";
import {bind_style} from "../../utils/bind_style.util";
import {UIView} from "../Layouts/View";

export class UiIconView extends UIView {
    constructor (icon_name) {
        super(icon_name);
        this.ref = {current: null};
        this.add_class("icon");
        this.size = 24;
        const [family, name] = icon_name.split("/");
        if (typeof icons[family] !== "undefined") {
            if (typeof icons[family][`ic_${name}_${this.size}px`] !== "undefined") {

            } else {
                throw Error(`${name} icon of size ${this.size}px doesn't exist in ${family} family`)
            }
        } else {
            throw Error(`${family} icon family doesn't exist`);
        }
        this.src = icons[family][`ic_${name}_${this.size}px`];
        (async () => {
            const res = await fetch(this.src);
            this.ref.current.innerHTML = await res.text();
        })();
    }

    set_size (size) {
        switch (size) {
            case 18:
            case 24:
            case 36:
            case 48:
                this.size = size;
                this.add_class("size_" + size);
                break;
            default:
                throw Error(`Size value ${size} is invalid. Authorized values : 18, 24, 36, 48.`);

        }
        return this;

    }

    render () {
        return html`
            <span 
                ref="${this.ref}"
                class=${bind_class(this.class_list, 'icon')}
                style="${bind_style(this.view_style)}"
            >
            </span>
        `;
    }
}

export function Icon (icon_name) {

    return new UiIconView(icon_name);
}
