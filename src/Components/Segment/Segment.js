import {html} from "//unpkg.com/lighterhtml?module";
import {bind_class} from "../../utils/bind_class.util.js";
import {need_update} from "../../index.js";

export function Segment (items) {
    let segment_action = () => {};
    let selected_item = 0;
    const PUBLIC_INTERFACE = {
        set_action (action) {
            segment_action = action;
            return PUBLIC_INTERFACE;
        },
        set_default_element(index) {
            selected_item = index;
            return PUBLIC_INTERFACE;
        },
        render () {
            return html`
                <div class="segment">
                   ${items.map(([value, view], i) => html`
                        <div class="${bind_class({
                            selected: i === selected_item
                        }, 'item')}" onclick="${() => {
                            selected_item = i;
                            segment_action(value);
                            need_update();
                        }}">
                            ${view.render()}
                        </div>
                   `)}
                </div>
            `;
        }
    };

    return PUBLIC_INTERFACE;
}
