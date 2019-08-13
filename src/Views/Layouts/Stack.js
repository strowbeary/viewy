import {View} from "../View";

export const Stack = () => ({
    ...View().addClass("stack"),
    alignItems(alignment) {
        this.view_style.alignItems = alignment;
        return this;
    },
    justifyContent(justification) {
        this.view_style.justifyContent = justification;
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
