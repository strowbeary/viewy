import {View} from "../View";
import "./ScrollView.scss";

export const ScrollView = (...children) => ({
    ...View(),
    children,
    viewStyle: {
        overflow: "auto",
        scrollbarWidth: "none"
    }
})
    .addClass("scrollview");
