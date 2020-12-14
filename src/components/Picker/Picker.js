import {View} from "../View/View";
import "./Picker.scss"
import {Text, TEXT_STYLE} from "../Text/Text";
import {Icon} from "../Icon/Icon";
import {HStack, VStack} from "../Stack/Stack";
import {S} from "../../ressources/SizingScale";

export const Picker = ({
                           label,
                           name,
                           action = () => {
                           },
                           value: selectedItemValue,
                           items = []
                       }) => {
    let pickerStyle = "segmented";
    let disabled = false;

    function SegmentedPicker () {
        return VStack(
            Text(label, TEXT_STYLE.label),
            HStack(...items.map(({value, label: optionLabel, icon}) => {
                const baseView = View()
                    .addClass("item")
                    .on('click', () => action(value));
                if (icon) baseView.children.push(Icon(icon, 16).marginRight(S(2)));
                if (optionLabel) baseView.children.push(Text(optionLabel, TEXT_STYLE.button));
                if (value === selectedItemValue) baseView.addClass("selected");
                return baseView;
            }))
        )
            .gap(S(2));
    }

    function DropdownPicker () {
        const select = View(
            ...items.map(({value, label: optionLabel}) => {
                const option = Text(optionLabel, TEXT_STYLE.label)
                    .tagName("option")
                    .on('click', () => action(value));
                if (value === selectedItemValue) option.addClass("selected");
                return option;
            })
        )
            .tagName("select");
        if (disabled) select.setAttribute("disabled", "disabled");

        return VStack(
            Text(label, TEXT_STYLE.label),
            View(
                select,
            )
                .addClass("dropdown")
        )
            .gap(S(2));
    }

    function RadioGroupPicker () {
        return VStack(
            Text(label, TEXT_STYLE.label),
            ...items.map(({value, label: optionLabel}, i) => {
                const input = View()
                    .tagName("input")
                    .setAttribute("type", "radio")
                    .setAttribute("name", name)
                    .setAttribute("id", `picker-radio-${name}-${optionLabel}`)
                    .setAttribute("onchange", () => action(value));
                if (value === selectedItemValue) {
                    input.setAttribute("checked", true);
                }
                if (disabled) {
                    input.setAttribute("disabled", "disabled");
                }

                const radio = HStack(
                    input,
                    Text(optionLabel, TEXT_STYLE.body2, "label")
                        .setAttribute("for", `picker-radio-${name}-${optionLabel}`)
                )
                    .addClass("radio")
                    .alignItems("center")
                    .gap(S(2));

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
        segmentedStyle () {
            pickerStyle = "segmented";
            return this;
        },
        dropdownStyle () {
            pickerStyle = "dropdown";
            return this;
        },
        radioGroupStyle () {
            pickerStyle = "radioGroup";
            return this;
        },
        disabled (isDisabled) {
            disabled = isDisabled;
            if (isDisabled) this.addClass("disabled");
            return this;
        },
        get children () {
            switch (pickerStyle) {
                case "radioGroup":
                    return [RadioGroupPicker()];
                case "dropdown":
                    return [DropdownPicker()];
                default:
                case "segmented":
                    return [SegmentedPicker()];
            }
        }
    }
};
