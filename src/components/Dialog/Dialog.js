import "./Dialog.scss";
import {View} from "../View/View";

export const Dialog = (...children) => ({
    ...View()
        .addClass("dialog"),
    onClose(cb) {
        this
            .on('click', cb)
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
                .on('click',e => e.stopPropagation())
                .removeClass("clickable")
                .addClass("dialog-window")
        ];
    }
});

export const DialogHeader= (title, type = "normal") => ({
    ...View()
});
