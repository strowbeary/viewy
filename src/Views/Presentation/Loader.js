import {UIView} from "../View";
import {html} from "lighterhtml";
import {bind_class} from "../../utils/bind_class.util";
import {bind_style} from "../../utils/bind_style.util";
import loader_svg from "../../assets/loader.svg";
import {render_controller} from "../..";

export class UILoaderView extends UIView {
    constructor() {
        super();
        this.content = "";
        (async () => {
            const res = await fetch(loader_svg);
            this.content = await res.text();
            render_controller.render();
        })();

    }

    render () {
        return html`
            <span class=${bind_class(this.class_list, 'loader')}
            style="${bind_style(this.view_style)}">
                ${{html: this.content}}
            </span>
        `;
    }
}

export function Loader() {
    return new UILoaderView();
}
