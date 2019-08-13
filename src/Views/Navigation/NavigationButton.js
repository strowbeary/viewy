import {html} from "lighterhtml";
import {bind_class} from "../../utils/bind_class.util";
import {bind_style} from "../../utils/bind_style.util";
import {View} from "../View";
import {Icon} from "../..";
import {navigation_controller} from "../../Controllers/NavigationController";

export const NavigationButton = ({destination, state}, ...children) => ({
    ...View(),
    children,
    render() {
        return html`
            <div 
                onclick="${e => {
                    e.stopPropagation();
                    navigation_controller.navigate(destination, state);
                }}"
                class=${bind_class(this.class_list, 'navigation_button')}
                style="${bind_style(this.view_style)}">
                ${this.children.map(child => child.render())}
                ${Icon("navigation/chevron_right").setSize(18).render()}
            </div>
        `;
    }
});
