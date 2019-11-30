import {View} from "../View";
import "./Text.scss"
import {text} from "incremental-dom";
export const TEXT_STYLE = {
    largeTitle: "large-title",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    headline: "headline",
    subtitle1: "subtitle1",
    subtitle2: "subtitle2",
    body1: "body1",
    body2: "body2",
    button: "button",
    label: "label",
    overline: "overline",
    caption: "caption"
};

export const Text = (value, style = TEXT_STYLE.body1) => ({
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
    textAlign(alignment) {
        this.viewStyle.textAlign = alignment;
        return this;
    },
    color(color) {
        this.viewStyle.color = color;
        return this;
    },
    children: [{
        render() {
            text(value);
        }
    }]
});
