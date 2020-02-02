import "./Dialog.scss";
import {View} from "../View";

export const Dialog = (...children) => ({
    ...View()
        .addClass("dialog"),
    onClose(cb) {
        this
            .onClick(cb)
            .removeClass("clickable");
        return this;
    },
    visible(isVisible) {
        if(isVisible) this.addClass("visible");
        return this;
    },
    get children() {
        return [
            View(
                ...children
            )
                .onClick(e => e.stopPropagation())
                .removeClass("clickable")
                .addClass("dialog-window")
        ];
    }
});

export const DialogHeader= (title, type = "normal") => ({
    ...View()
});
