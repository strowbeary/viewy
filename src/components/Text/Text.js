import {View} from "../View/View";
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

export const Text = (value, style = TEXT_STYLE.body1, tagName = "span") => ({
    ...View()
        .addClass("text")
        .addClass(style)
        .tagName(tagName),
    size (value) {
        this.viewStyle.fontSize = value + "px";
        return this;
    },
    font (fontStack) {
        this.viewStyle.fontFamily = fontStack;
        return this;
    },
    textAlign (alignment) {
        this.viewStyle.textAlign = alignment;
        return this;
    },
    textOverflow (value) {
        this.viewStyle.textOverflow = value;
        return this;
    },
    lineHeight (value) {
        this.viewStyle.lineHeight = value;
        return this;
    },
    bold(isBold) {
        if(isBold) {
            this.viewStyle.fontWeight = "bold";
        }
        else {
            this.viewStyle.fontWeight = "normal";
        }
      return this;
    },
    children: [{
        render () {
            text(value);
        }
    }]
});
