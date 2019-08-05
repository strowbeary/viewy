import {UIView} from "./View";
import {bind_class} from "../utils/bind_class.util.js";
import {html} from "lighterhtml";
import {bind_style} from "../utils/bind_style.util";
import {need_update} from "../preview/preview";

export class UISegment extends UIView {
    action = () => {};
    selected_item = 0;

    view_style = {};

    constructor (items) {
        super();
        this.items = items;
    }

    set_action (action) {
        this.action = action;
        return this;
    }

    set_default_element (index) {
        this.selected_item = index;
        return this;
    }


    margin(top, right, bottom, left) {
        this.view_style.margin = `${top}px ${right}px ${bottom}px ${left}px`;
        return this;
    }

    render () {
        return html`
            <div 
                class="segment"
                style="${bind_style(this.view_style)}"
            >
                ${this.items.map(([value, view], i) => html`
                    <div 
                        class="${bind_class({
                            selected: i === this.selected_item
                        }, 'item')}" 
                        onclick="${() => {
                            this.selected_item = i;
                            this.action(value);
                            need_update();
                        }}"
                    >
                        ${view.render()}
                    </div>
                `)}
            </div>
        `;
    }
}

export function Segment(...items) {
    return new UISegment(...items);
}
