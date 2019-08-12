import {Grid} from "../Layouts/Grid";
import {Button} from "../Controls/Button";
import {Text, TEXT_STYLE} from "../Controls/Text";
import {Icon} from "../Controls/Icon";
import {EmptyView} from "../Presentation/EmptyView";
import {navigation_controller} from "../../Controllers/NavigationController";
import {HStack} from "../Layouts/Stack";
import {UpdatableView} from "../..";


export class UINavigationBarView {
    constructor () {
        this.title = "View title";
    }

    set_title (text) {
        this.title = text;
    }

    _get_back_button() {
        if(history.state.view_stack_id > 0) {
            return Button(navigation_controller.view_stack[history.state.view_stack_id - 1].title)
                .add_class("button_back supplemented")
                .set_icon(
                    Icon("navigation/chevron_left")
                        .set_size(36)
                )
                .set_action(() => history.back())
        } else {
            return EmptyView();
        }


    }
    render () {
        return UpdatableView(() => Grid({
            left_item: HStack(
                this._get_back_button(),
                Button("Left item")
            ),
            right_item: Button("Right item"),
            title: Text(this.title, TEXT_STYLE.large_title)
        })
            .gap( 8, 24)
            .areas(`"left_item . right_item" "title title title"`)
            .columns("auto 1fr auto")
            .rows("36px auto")
            .add_class("navigation_bar")
        )
            .render()
    }
}

export function NavigationBar () {
    return new UINavigationBarView();
}
