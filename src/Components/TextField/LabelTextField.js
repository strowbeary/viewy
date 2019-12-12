import { VStack} from "../Stack/Stack";
import {Text, TEXT_STYLE} from "../Text/Text";
import {TextField} from "./TextField";
import {View} from "../View";
import {EmptyView} from "../EmptyView";

export const LabelTextField = (label, name, value, type, placeholder) => ({
    ...View(),
    textField: TextField(name, value, type, placeholder),
    value: "",
    helperMessage: null,
    setValue(value) {
        this.value = value;
        return this;
    },
    setHelperMessage(msg) {
        this.helperMessage = msg;
        return this;
    },
    onChangeHandler: () => {},
    onChange(cb) {
        this.textField.onChangeHandler = cb;
        return this;
    },
    autoSize() {
        this.textField.autoSize();
        return this;
    },
    get children() {
        return [
            VStack(
                Text(label, TEXT_STYLE.label),
                this.textField.marginTop(4),
                this.helperMessage ? Text(this.helperMessage, TEXT_STYLE.caption)
                    .color("var(--color-text-secondary)")
                    .marginTop(4) : EmptyView()
            )
        ]
    }
});
