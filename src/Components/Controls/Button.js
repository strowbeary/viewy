import {View} from "../View";
import {html} from "lighterhtml";
import {bind_class} from "../../utils/bind_class.util";
import {bind_style} from "../../utils/bind_style.util";
import {EmptyView} from "../Presentation/EmptyView";
import {Text, TEXT_STYLE} from "../Controls/Text";
import "./Button.scss"
export const Button = (label = "Button", action = () => {}) => ({
    ...View(),
    icon: EmptyView(),
    setIcon(icon) {
        this.icon = icon;
        this.addClass("icon_button");
        return this;
    },
    render () {
        return html`
            <button  
                class=${bind_class(this.classList)}
                style="${bind_style(this.viewStyle)}"
                onclick=${e => {
                    e.stopPropagation();
                    action();
                }}
            >
                ${this.icon.render()}
                ${Text(label, TEXT_STYLE.label).render()}
            </button>
        `;
    }

});
