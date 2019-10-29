import {elementClose, elementOpen, patch} from "incremental-dom";
import "./Modal.scss";
import {HStack, VStack} from "./Layouts/Stack";
import {Button} from "./Controls/Button";
import {View} from "./View";

export const Modal = (...children) => ({
    get modalWrapper() {
        let el = document.getElementById("modal-wrapper");
        if(!el) {
            console.log("modal wrapper creation");
            el = document.createElement("div");
            el.id = "modal-wrapper";
            document.body.appendChild(el);
        }
        return el;
    },
    hide() {
        this.modalWrapper.remove()
    },
    get children() {
        return [
            VStack(
                View(
                    ...children
                ),
                HStack(
                    Button("Close", () => this.hide(), "flat")
                )
                    .justifyContent("flex-end")
            )
                .gap(16)

        ]
    },
    render() {
        elementOpen("div", null ,["class", "modal-view"]);
        this.children.forEach(child => child.render());
        elementClose("div");
    },

    show() {
        console.log(this.modalWrapper);
        patch(this.modalWrapper, () => this.render(), {});
    }
});