import {html} from "lighterhtml";
import {bind_class} from "../../utils/bind_class.util";
import {bind_style} from "../../utils/bind_style.util";
import {UIView} from "../View";
import {Icon} from "../..";
import {navigation_controller} from "../../Controllers/NavigationController";

export class UINavigationButtonView extends UIView {
    constructor({destination, state}, ...children) {
        super(...children);
        this.destination = destination;
        this.state_to_pass = state;
    }

    handleClick(e) {
        e.stopPropagation();
        navigation_controller.navigate(this.destination, this.state_to_pass);
    }

    render () {
        return html`
            <div 
                onclick="${e => this.handleClick(e)}"
                class=${bind_class(this.class_list, 'navigation_button')}
                style="${bind_style(this.view_style)}">
                ${this.children.map(child => child.render())}
                ${Icon("navigation/chevron_right").set_size(18).render()}
            </div>
        `;
    }
}

export function NavigationButton(destination, ...children) {
    return new UINavigationButtonView(destination, ...children);
}
