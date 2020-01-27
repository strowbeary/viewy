import {View} from "../View";
import "./Picker.scss"
import {TEXT_STYLE, Text} from "../Text/Text";
import {VStack, HStack} from "../Stack/Stack";
import {S} from "../../ressources/SizingScale";

export const Picker = (name, action = () => {
}, selectedItemValue, ...items) => {
    let pickerStyle = "segmented";

    function SegmentedPicker () {
        return items.map(({value, label}, i) => ({
            ...View()
                .onClick(() => action(value)),
            classList: {
                item: true,
                selected: value === selectedItemValue
            },
            children: [Text(label, TEXT_STYLE.button)],
        }))
    }

    function RadioGroupPicker () {
        return VStack(
            ...items.map(({value, label}, i) => {
                const input = View()
                    .tagName("input")
                    .setAttribute("type", "radio")
                    .setAttribute("name", name)
                    .setAttribute("id", `picker-radio-${name}-${label}`)
                    .setAttribute("onchange", () => action(value));
                if (value === selectedItemValue) {
                    input.setAttribute("checked", true);
                }

                const radio = HStack(
                    input,
                    Text(label, TEXT_STYLE.label, "label")
                        .setAttribute("for", `picker-radio-${name}-${label}`)
                )
                    .addClass("radio")
                    .alignItems("center")
                    .gap(S(1));

                return radio;
            })
        )
            .gap(S(2));
    }

    return {
        ...View()
            .addClass("picker"),
        padding () {
            throw Error("padding can't be set on Segment view");
        },
        segmented () {
            pickerStyle = "segmented";
            return this;
        },
        radioGroup () {
            pickerStyle = "radioGroup";
            return this;
        },
        get children () {
            switch (pickerStyle) {
                case "radioGroup":
                    return [RadioGroupPicker()];
                default:
                case "segmented":
                    return SegmentedPicker();
            }
        }
    }
};
