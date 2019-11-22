import {HStack, VStack} from "../Layouts/Stack";
import "./Tabs.scss";
import {Text, TEXT_STYLE} from "../..";


export const Tabs = (tabrouter, ...tabs) => ({
    ...VStack()
        .addClass("tabs"),
    get children () {
        return [
            HStack(
                ...tabs.map((view, i) => {
                    const tab = Text(view.viewName, TEXT_STYLE.headline)
                        .addClass("tab")
                        .onClick(() => {
                            tabrouter.select(i)
                        });
                    if (tabrouter.state === i) {
                        tab.addClass("selected");
                    }
                    return tab;
                })
            )
                .addClass("tabs-bar"),
            tabs[tabrouter.state]
        ];
    }
});
