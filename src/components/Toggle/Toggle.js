import {View} from "../View";
import "./Toggle.scss"
import {TEXT_STYLE, Text} from "../Text/Text";

export const Toggle = () => ({
    ...View()
        .addClass("picker"),
    padding () {
        throw Error("padding can't be set on Segment view");
    },
});
