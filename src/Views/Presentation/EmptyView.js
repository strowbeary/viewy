import {html} from "lighterhtml";

export function EmptyView () {
    return new class {
        render() {
            return html``;
        }
    }();
}
