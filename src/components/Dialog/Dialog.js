import "./Dialog.scss";
import {View} from "../View/View";
import {EmptyView} from "../EmptyView";

export const Dialog = (...children) => ({
    ...View()
        .addClass("dialog"),
    isVisible: false,
    onClose(cb) {
        this
            .on('click', cb)
            .removeClass("clickable");
        return this;
    },
    visible(isVisible) {
        this.isVisible = isVisible;
        if(isVisible) {
            this.addClass("visible");
        } else {
            this.removeClass("visible");
        }
        return this;
    },
    get children() {
        const dialogWindow = this.isVisible ? View(...children) : View();
        return [
            dialogWindow
                .on('click',e => e.stopPropagation())
                .removeClass("clickable")
                .addClass("dialog-window")
        ];
    }
});

export const DialogHeader= (title, type = "normal") => ({
    ...View()
});
