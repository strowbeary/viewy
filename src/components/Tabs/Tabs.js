import {HStack, VStack} from "../Stack/Stack";
import "./Tabs.scss";
import {Text, TEXT_STYLE} from "../Text/Text";

export const Tabs = ([currentTab, setCurrentTab], ...tabs) => {
    return {
        ...VStack()
            .addClass("tabs"),
        currentView: tabs[currentTab],
        get children () {
            return [
                HStack(
                    ...tabs.map((view, i) => {
                        const tab = Text(view.viewName, TEXT_STYLE.body1)
                            .addClass("tab")
                            .on('click',() => {
                                setCurrentTab(i)
                            })
                            .removeClass("clickable");
                        if (currentTab === i) {
                            tab.addClass("selected");
                        }
                        return tab;
                    })
                )
                    .addClass("tabs-bar"),
            ];
        }
    };
}
