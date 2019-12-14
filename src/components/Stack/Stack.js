import {View} from "../View";
import "./Stack.scss";
export const Stack = (children) => ({
    ...View().addClass("stack"),
    alignItems(alignment) {
        this.viewStyle.alignItems = alignment;
        return this;
    },
    justifyContent(justification) {
        this.viewStyle.justifyContent = justification;
        return this;
    },
    gap(h, v) {
        if (typeof h === "number" && typeof v === "undefined") {
            v = h;
        }
        this.viewStyle.gridGap = `${h}px ${v}px`;
        return this;
    },
    children
});

export const HStack = (...children) => Stack(children).addClass("horizontal");
export const VStack = (...children) => Stack(children).addClass("vertical");
