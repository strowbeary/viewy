import {html} from "//unpkg.com/lighterhtml?module";

export function Button (label, action) {
    return {
        render() {
            return html`
                <button onclick=${action}>${label}</button>
            `;
        }
    }
}
