import {UIView, View} from "../View";
import {html} from "lighterhtml";
import {bind_class} from "../../utils/bind_class.util";
import {bind_style} from "../../utils/bind_style.util";

export class UIListView extends UIView {
    constructor (items, cell_view_builder = () => ListRow()) {
        super();
        this.children = items.map(item => ListRow(
            cell_view_builder(item)
        ));
        this.add_class("list")
    }

    set_action(action) {
        this.action = action;
        return this;
    }
}

export class UIListRow extends UIView {
    constructor (...children) {
        super(...children);
        this.add_class("list_row");
    }
    render() {
        return html`
             <div 
                class=${bind_class(this.class_list, 'view')}
                style="${bind_style(this.view_style)}">
                ${this.children.map(c => c.render())}
            </div>
        `;
    }
}

function ListRow(...children) {
    return new UIListRow(...children);
}

export function List(items, cell_view_builder) {
    return new UIListView(items, cell_view_builder);
}
