import { VStack} from "../Layouts/Stack";
import {Text, TEXT_STYLE} from "./Text";
import {TextField} from "./TextField";
import {UIView} from "../View";

export class UILabelTextFieldView extends UIView {
    constructor (label, name, type, placeholder, formater) {
        super();
        this.label = label;
        this.name = name;
        this.type = type;
        this.placeholder = placeholder;
        this.formater = formater;
        this.value = "";
    }
    set_value(value) {
        this.value = value;
        return this;
    }

    render() {
        return VStack(
            Text(this.label, TEXT_STYLE.label),
            TextField(this.name, this.type, this.placeholder, this.formater)
                .set_value(this.value)
                .margin_top(8)
        ).render()
    }
}

export function LabelTextField(label, name, type, placeholder, formater) {
    return new UILabelTextFieldView(label, name, type, placeholder, formater);
}
