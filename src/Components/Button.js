import {UIView} from "./View";
import {html} from "lighterhtml";

export class UIButtonView extends UIView{


    constructor (label) {
        super();
        this.label = label;
        this.action = () => {};
    }

    set_action(action) {
        this.action = action;
        return this;
    }

    render() {
        return html`
            <button onclick=${() => this.action()}>${this.label}</button>
        `;
    }
}

export function Button(label) {
    return new UIButtonView(label);
}
