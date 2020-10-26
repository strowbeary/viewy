import {View} from "../View/View";
import "./Stack.scss";

export const Stack = (children) => ({
    ...View().addClass("stack"),
    alignItems (alignment) {
        this.viewStyle.alignItems = alignment;
        return this;
    },
    justifyContent (justification) {
        this.viewStyle.justifyContent = justification;
        return this;
    },
    reverse() {
        this.addClass("reversed");
        return this;
    },
    gap (h, v) {
        if (typeof h === "number" && typeof v === "undefined") {
            v = h;
        }
        this.viewStyle['--hgap'] = `${h}px`;
        this.viewStyle['--vgap'] = `${v}px`;
        return this;
    },
    children
});

export const HStack = (...children) => Stack(children).addClass("horizontal");
export const VStack = (...children) => Stack(children).addClass("vertical");
