import {TEXT_STYLE, Text} from "./Text";
import "./Tag.scss"
export const Tag = (value) => ({
    ...Text(value, TEXT_STYLE.label)
        .addClass("tag")
});
