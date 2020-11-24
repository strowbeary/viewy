import {component} from "../../createApp";
import "./popover.scss";
import {createPopper} from "@popperjs/core";
import {View} from "./View";
import {EmptyView} from "../EmptyView";

export default component({
    name: "popover",
    async initState () {
        return {}
    },
    mounted (mountedEl, elToAttachTo, { placement, isVisible }) {
        if(isVisible) {
            createPopper(elToAttachTo, mountedEl, {
                placement,
                modifiers: [
                    {
                        name: 'preventOverflow',
                        options: {
                            padding: 16,
                        },
                    },
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 8],
                        },
                    },
                ],
            })
        }
    },
    view (elToAttachTo, {view, isVisible}) {
        return isVisible ? View(
            view(),
            View()
                .addClass("arrow")
                .setAttribute("data-popper-arrow", true)
        ).addClass("popover") : EmptyView()
    }
})
