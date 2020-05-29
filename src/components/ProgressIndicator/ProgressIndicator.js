
import "./ProgressIndicator.scss";
import loader from "../../assets/loader.svg";
import {View} from "../..";
import {elementClose, elementOpen, skip} from "incremental-dom";
import {bind_class} from "../../utils/bind_class.util";

export const ProgressIndicator = (size = 24) => ({
    ...View()
        .addClass("progress-indicator"),
    render () {
        const el = elementOpen(
            this.renderedTagName, null, null,
            "style", this.viewStyle,
            "class", bind_class(this.classList, 'view'),
            ...this.customAttributes
        );

        if (el.__cachedInnerHtml !== loader) {
            el.__cachedInnerHtml = loader;
            el.innerHTML = loader;
        }
        skip();

        elementClose(this.renderedTagName);
        return el;
    }
})
