import {html} from "//unpkg.com/lighterhtml?module";
import {bind_class} from "../../utils/bind_class.util.js";

export function Text(value, style = Text.styles.body) {
    const class_list = {
        uppercase: false,
        bold: false,
        underline: false,
        italic: false,
    };

    const PUBLIC_INTERFACE = {
        uppercase() {
            class_list.uppercase = true;
            return PUBLIC_INTERFACE;
        },
        bold() {
            class_list.bold = true;
            return PUBLIC_INTERFACE;
        },
        underline() {
            class_list.underline = true;
            return PUBLIC_INTERFACE;
        },
        italic() {
            class_list.italic = true;
            return PUBLIC_INTERFACE;
        },
        size(value) {
            return PUBLIC_INTERFACE;
        },
        font(font_stack) {
            return PUBLIC_INTERFACE;
        },
        render() {
            return html`
                <span class=${bind_class(class_list, 'text ' + style)}>${value}</span>
            `;
        }
    };

    return PUBLIC_INTERFACE;
}

Text.styles = {
    large_title: "large_title",
    subheadline: "subheadline",
    footnote: "footnote",
    body: "body",
    label: "label"
};
