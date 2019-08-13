import {View} from "../View";
import {html} from "lighterhtml";
import {bind_class} from "../../utils/bind_class.util";
import {bind_style} from "../../utils/bind_style.util";
import {EmptyView} from "../..";

export const Button = (label = () => {}, action = () => {}) => ({
    ...View(),
    icon: EmptyView(),
    setIcon(icon) {
        this.icon = icon;
        return this;
    },
    render () {
        return html`
            <button  
                class=${bind_class(this.class_list)}
                style="${bind_style(this.view_style)}"
                onclick=${e => {
                    e.stopPropagation();
                    this.action();
                }}
            >
                ${this.icon.render()}
                ${this.label}
            </button>
        `;
    }

});
