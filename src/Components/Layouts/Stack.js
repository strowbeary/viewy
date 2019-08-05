import {html} from "//unpkg.com/lighterhtml?module";

function HStack(...children) {
    return {
        render() {
            return html`
                <div class="stack horizontal">
                    ${children.map(c => c.render())}
                </div>
            `;
        }
    };
}

function VStack(...children) {
    return {
        render() {
            return html`
                <div class="stack vertical">
                    ${children.map(c => c.render())}
                </div>
            `;
        }
    };
}

export const Stack =  {
    vertical: VStack,
    horizontal: HStack,
};
