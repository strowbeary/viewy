import {HStack, VStack} from "../Layouts/Stack";
import {TEXT_STYLE, Text} from "../Controls/Text";
import "./Tabs.scss";

export const Tabs = (...tabs) => ({
    ...VStack()
        .addClass("tabs"),
    get children () {
        return [
            HStack(
                ...tabs.map((view, i) =>
                    Text(view.viewName, TEXT_STYLE.headline)
                        .addClass("tab")
                        .onClick(() => {

                        })
                )
            )
                .addClass("tabs-bar"),
            tabs[0]
        ];
    }
});
