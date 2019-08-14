import {View} from "../View";
import "./Text.scss"
export const TEXT_STYLE = {
    large_title: "large_title",
    subheadline: "subheadline",
    footnote: "footnote",
    body: "body",
    label: "label"
};

export const Text = (value, style) => ({
    ...View()
        .addClass("text")
        .addClass(style),
    uppercase() {
        this.addClass("uppercase");
        return this;
    },
    bold() {
        this.addClass("bold");
        return this;
    },
    underline() {
        this.addClass("underline");
        return this;
    },
    italic() {
        this.addClass("italic");
        return this;
    },
    size(value) {
        this.viewStyle.fontSize = value + "px";
        return this;
    },
    font(fontStack) {
        this.viewStyle.fontFamily = fontStack;
        return this;
    },
    children: [{
        render() {
            return value
        }
    }]
});
