import {HStack, VStack} from "../Stack/Stack";
import "./Tabs.scss";
import {Text, TEXT_STYLE} from "../Text/Text";
import {useState} from "augmentor";

export const Tabs = (...tabs) => {
    const [currentTab, setTab] = useState(0);
    return {
        ...VStack()
            .addClass("tabs"),
        get children () {
            return [
                HStack(
                    ...tabs.map((view, i) => {
                        const tab = Text(view.viewName, TEXT_STYLE.headline)
                            .addClass("tab")
                            .onClick(() => {
                                setTab(i)
                            });
                        if (currentTab === i) {
                            tab.addClass("selected");
                        }
                        return tab;
                    })
                )
                    .addClass("tabs-bar"),
                tabs[currentTab]
            ];
        }
    };
}
