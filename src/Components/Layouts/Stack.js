import {View} from "../View";
import "./Stack.scss";
export const Stack = () => ({
    ...View().addClass("stack"),
    alignItems(alignment) {
        this.viewStyle.alignItems = alignment;
        return this;
    },
    justifyContent(justification) {
        this.viewStyle.justifyContent = justification;
        return this;
    }
});

export const HStack = (...children) => ({
    ...Stack().addClass("horizontal"),
    children
});
export const VStack = (...children) => ({
    ...Stack().addClass("vertical"),
    children
});
