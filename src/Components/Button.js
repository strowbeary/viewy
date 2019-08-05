import {UIView} from "./View";
import {html} from "lighterhtml";

export class UIButton extends UIView{
    action = () => {};
    label = "";

    constructor (label) {
        super();
        this.label = label;
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
    return new UIButton(label);
}
