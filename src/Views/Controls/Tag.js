import {TEXT_STYLE, UITextView} from "./Text";

export class UITagView extends UITextView {
    constructor (value) {
        super(value, TEXT_STYLE.label);
        this.add_class("tag");
    }
}

export function Tag (value) {
    return new UITagView(value);
}
