import {html} from "lighterhtml";
import {bind_class} from "../../utils/bind_class.util";
import {UIView} from "../View";

export const TEXT_STYLE = {
    large_title: "large_title",
    subheadline: "subheadline",
    footnote: "footnote",
    body: "body",
    label: "label"
};

export class UITextView extends UIView {



    constructor (value, style) {
        super({
            render() {
                return value;
            }
        });
        this.value = value;
        this.style = style;
        this.add_class("text");
        this.add_class(style);

        this.is_uppercase = false;
        this.is_bold = false;
    }

    uppercase() {
        this.add_class("uppercase");
        return this;
    }
    bold() {
        this.add_class("bold");
        return this;
    }
    underline() {
        this.add_class("underline");
        return this;
    }
    italic() {
        this.add_class("italic");
        return this;
    }
    size(value) {
        return this;
    }

    font(font_stack) {
        return this;
    }
}


export function Text(value, style = TEXT_STYLE.body) {
    return new UITextView(value, style);
}
