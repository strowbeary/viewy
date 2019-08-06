import {UIView, View} from "./View";
import {html} from "lighterhtml";

export class UIListView extends UIView {
    constructor (items, cell_view_builder = () => View()) {
        super();
        this.children = items.map(item => cell_view_builder(item));
    }

    set_action(action) {
        this.action = action;
        return this;
    }

    render() {
        return html``;
    }
}
