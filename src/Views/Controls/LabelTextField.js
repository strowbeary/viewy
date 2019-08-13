import { VStack} from "../Layouts/Stack";
import {Text, TEXT_STYLE} from "./Text";
import {TextField} from "./TextField";
import {View} from "../View";

export const LabelTextField = (label, name, type, placeholder, formater) => ({
    ...View(),
    textField: TextField(name, type, placeholder, formater),
    value: "",
    setValue(value) {
        this.value = value;
        return this;
    },
    get children() {
        return [
            VStack(
                Text(label, TEXT_STYLE.label),
                TextField(name, type, placeholder, formater)
                    .setValue(this.value)
                    .marginTop(8)
            )
        ]
    }
});
