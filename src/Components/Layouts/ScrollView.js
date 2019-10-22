import {View} from "../View";

export const ScrollView = (...children) => ({
    ...View(),
    children,
    viewStyle: {
        overflow: "auto",
        scrollbarWidth: "none"
    }
});
