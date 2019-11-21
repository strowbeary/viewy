import {View} from "../View";
import {HStack, VStack} from "../Layouts/Stack";

export const Tabs = (...tabs) => ({
    ...VStack()
        .addClass("tabs"),

    get children () {
        return [
            HStack(),
        ]
    }
});
