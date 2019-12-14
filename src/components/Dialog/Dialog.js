import {elementClose, elementOpen, patch} from "incremental-dom";
import "./Dialog.scss";
import {HStack, VStack} from "../Stack/Stack";
import {Button} from "../Button/Button";

export const Dialog = (...children) => ({
    get dialogWrapper() {
        let el = document.getElementById("dialog-wrapper");
        if(!el) {
            console.log("dialog wrapper creation");
            el = document.createElement("div");
            el.id = "dialog-wrapper";
            document.body.appendChild(el);
        }
        return el;
    },
    hide() {
        this.dialogWrapper.remove()
    },
    get children() {
        return [
            VStack(
                ...children,
                HStack(
                    Button("Ok", () => this.hide(), "flat")
                )
                    .addClass("footer")
                    .justifyContent("flex-end")
            )
                .minWidth(250)

        ]
    },
    render() {
        const el = elementOpen("div", null ,["class", "dialog-view"]);
        this.children.forEach(child => child.render());
        elementClose("div");
        return el;
    },

    show() {
        console.log(this.dialogWrapper);
        patch(this.dialogWrapper, () => this.render(), {});
    }
});
