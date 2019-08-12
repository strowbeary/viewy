import {html} from "lighterhtml";
import {UIView} from "../View";

export function EmptyView () {
    return new class extends UIView{
        render() {
            return html`<div/>`;
        }
    }();
}
