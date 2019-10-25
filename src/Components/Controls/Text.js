import {View} from "../View";
import "./Text.scss"
import {text} from "incremental-dom";
export const TEXT_STYLE = {
    large_title: "large_title",
    title1: "title1",
    title2: "title2",
    title3: "title3",
    headline: "headline",
    button: "button",
    body: "body",
    callout: "callout",
    subhead: "subhead",
    footnote: "footnote",
    caption1: "caption1",
    caption2: "caption2"
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
            text(value);
        }
    }]
});
