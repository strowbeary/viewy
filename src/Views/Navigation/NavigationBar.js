import {Grid} from "../Layouts/Grid";
import {Button} from "../Controls/Button";
import {Text, TEXT_STYLE} from "../Controls/Text";
import {Icon} from "../Controls/Icon";

export class UINavigationBarView {
    constructor () {
        this.title = "View title";
    }

    set_title (text) {
        this.title = text;
    }

    render () {
        return Grid({
            back_button: Button("Back")
                .add_class("button_back supplemented")
                .set_icon(
                    Icon("navigation/chevron_left")
                        .set_size(36)
                ),
            left_item: Button("Left item"),
            right_item: Button("Right item"),
            title: Text(this.title, TEXT_STYLE.large_title)
        })
            .gap(24)
            .areas(`"back_button left_item . right_item" "title title title title"`)
            .columns("auto auto 1fr auto")
            .add_class("navigation_bar")
            .render()
    }
}

export function NavigationBar () {
    return new UINavigationBarView();
}
