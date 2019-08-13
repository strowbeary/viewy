import {TEXT_STYLE, Text} from "./Text";

export const Tag = (value) => ({
    ...Text(value, TEXT_STYLE.label)
        .addClass("tag")
});
