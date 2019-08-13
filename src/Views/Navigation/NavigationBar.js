import {Grid} from "../Layouts/Grid";
import {Button} from "../Controls/Button";
import {Text, TEXT_STYLE} from "../Controls/Text";
import {Icon} from "../Controls/Icon";
import {EmptyView} from "../Presentation/EmptyView";
import {HStack} from "../Layouts/Stack";
import {UpdatableView} from "../..";
import {View} from "../View";

export const NavigationBar = () => ({
    ...View(),
    title: "View title",
    setTitle (text) {
        this.title = text;
        return this;
    },
    _getBackButton () {
        if (history.state.view_stack_id > 0) {
            return Button(
                "hello",//navigation_controller.viewStack[history.state.view_stack_id - 1].title,
                () => history.back())
                .addClass("button_back supplemented")
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
            UpdatableView(() => Grid({
                    left_item: HStack(
                        this._getBackButton(),
                        Button("Left item")
                    ),
                    right_item: Button("Right item"),
                    title: Text(this.title, TEXT_STYLE.large_title)
                })
                    .gap(8, 24)
                    .areas(`"left_item . right_item" "title title title"`)
                    .columns("auto 1fr auto")
                    .rows("36px auto")
                    .add_class("navigation_bar")
            )
        ]
    }
});
