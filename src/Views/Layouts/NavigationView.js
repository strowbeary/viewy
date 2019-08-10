import {Grid} from "./Grid";
import {View} from "./View";
import {Button} from "../Controls/Button";
import {Text, TEXT_STYLE} from "../Controls/Text";
import NavigationManager from "../../NavigationManager";
import {Icon} from "../Controls/Icon";

export class UINavigationView {
    constructor (path, view) {
        NavigationManager._add_page(path, this);
        this.view = view;
        this.title = {
            text: "",
            style: TEXT_STYLE.large_title,
        };
    }

    set_title(text, style = TEXT_STYLE.large_title) {
        this.title = {
            text,
            style
        };
    }

    render() {
        return View(
            Grid({
                left_item: Button("Back")
                    .add_class("button_back")
                    .set_icon(
                        Icon("navigation/chevron_left")
                            .set_size(36)
                    ),
                right_item: Button("Right item"),
                title: Text(this.title.text, this.title.style)
            })
                .gap(24)
                .add_class("header")
                .areas(`"left_item . right_item" "title title title"`)
                .columns("auto 1fr auto"),
            this.view
                .add_class("main")
        )
            .add_class("navigation_view")
            .render();
    }
}

export function NavigationView(path, view) {
    return new UINavigationView(path, view);
}
