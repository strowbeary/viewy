import {View} from "../View";

export const ScrollView = (...children) => ({
    ...View(),
    children,
    viewStyle: {
        overflow: "auto",
        height: "100%",
        scrollbarWidth: "none"
    }
});
