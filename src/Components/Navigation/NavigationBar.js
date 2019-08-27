import {Grid} from "../Layouts/Grid";
import {Text, TEXT_STYLE} from "../Controls/Text";
import {EmptyView} from "../Presentation/EmptyView";
import {HStack} from "../Layouts/Stack";
import {View} from "../View";
import "./NavigationBar.scss"
import {Button, Icon} from "../..";

export const NavigationBar = (currentNavigationView) => ({
    ...View().addClass("navigation_bar"),
    backButtonLabel: "Back",
    _getBackButton () {
        if (location.pathname !== "/") {
            return Button(
                this.backButtonLabel,
                () => history.back())
                .addClass("button_back supplemented text")
                .setIcon(
                    Icon("navigation/chevron_left")
                        .setSize(36)
                )
        } else {
            return EmptyView();
        }
    },
    get children() {
        return [
            Grid({
                left_item: HStack(
                    this._getBackButton(),
                    currentNavigationView.leftItem
                ),
                right_item: currentNavigationView.rightItem,
                title: Text(currentNavigationView.title, TEXT_STYLE.large_title)
            })
                .gap(8, 24)
                .areas(`"left_item . right_item" "title title title"`)
                .columns("auto 1fr auto")
                .rows("36px auto")

        ]
    }
});
