import {UIView} from "./View";
import {bind_class} from "../utils/bind_class.util";
import {html} from "lighterhtml";
import {bind_style} from "../utils/bind_style.util";
import {need_update} from "../Navigation/Router";

export class UISegmentView extends UIView {


    constructor (items) {
        super();
        this.items = items;
        this.action = () => {
        };
        this.selected_item = 0;

        this.view_style = {};
    }

    set_action (action) {
        this.action = action;
        return this;
    }

    set_default_element (index) {
        this.selected_item = index;
        return this;
    }
    padding() {
        throw Error("padding can't be set on Segment view");
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

export function Segment (...items) {
    return new UISegmentView(...items);
}
