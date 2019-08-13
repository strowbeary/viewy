import {html} from "lighterhtml";
import {View} from "../View";

export const EmptyView = () => ({
    ...View(),
    render() {
        return html`<div/>`;
    }
});
