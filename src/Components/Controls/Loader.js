import {View} from "../View";
import {html} from "lighterhtml";
import {bind_class} from "../../utils/bind_class.util";
import {bind_style} from "../../utils/bind_style.util";
import loader_svg from "../../assets/loader.svg";
import {render_controller} from "../../Controllers/RenderController";
import "./Loader.scss"

export const Loader = () => {
    let content = "";
    (async () => {
        const res = await fetch(loader_svg);
        content = await res.text();
        render_controller.render();
    })();
    return {
        ...View(),
        render () {
            return html`
            <span class=${bind_class(this.classList, 'loader')}
            style="${bind_style(this.viewStyle)}">
                ${{html: content}}
            </span>
        `;
        }
    }
};
