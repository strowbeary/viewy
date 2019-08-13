import {View} from "../View";

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
        this.view_style.fontSize = value + "px";
        return this;
    },
    font(fontStack) {
        this.view_style.fontFamily = fontStack;
        return this;
    },
    children: [{
        render() {
            return value
        }
    }]
});
