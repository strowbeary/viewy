import {View} from "../View";
import "./Picker.scss"
import {TEXT_STYLE, Text} from "../Text/Text";

export const Picker = (action = () => {}, selectedItemValue, ...items) => ({
    ...View()
        .addClass("picker"),
    padding () {
        throw Error("padding can't be set on Segment view");
    },
    get children () {
        const select = (i) => this.select(i);
        return items.map(({value, label}, i) => ({
            ...View()
                .onClick(() => {
                    action(value)
                }),
            classList: {
                item: true,
                selected: value === selectedItemValue
            },
            children: [Text(label, TEXT_STYLE.button)],
        }))
    }
});
