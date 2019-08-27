import "./Icon.scss"
import {View} from "../View";
import {html} from "lighterhtml";
import {AsyncView} from "../Presentation/AsyncView";
import iconUrl from "../../assets/icons/navigation/svg/production/ic_chevron_right_24px.svg";

export const Icon = (iconPath) => ({
    ...View().addClass("icon"),
    size: 24,
    setSize (size) {
        switch (size) {
            case 18:case 24:case 36:case 48:
                this.size = size;
                this.addClass("size_" + size);
                break;
            default:
                throw Error(`Size value ${size} is invalid. Authorized values : 18, 24, 36, 48.`);
        }
        return this;
    },
    async fetchIcon() {
        const res = await fetch(iconUrl);
        const svgContent = await res.text();
        return {
            ...View(),
            render() {
                return html`${{html: svgContent}}`
            }
        };
    },
    get children() {
        return [
            AsyncView(this.fetchIcon)
        ]
    }
});
