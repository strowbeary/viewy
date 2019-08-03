import {html} from "//unpkg.com/lighterhtml?module";

export function NavigationView(...children) {
    return {
        render() {
            return html`
                <div class="navigation_view">
                    ${children.map(c => c.render())}
                </div>
            `;
        }
    }
}
