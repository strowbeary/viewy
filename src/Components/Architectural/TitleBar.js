import {Grid} from "../Layouts/Grid";
import {Text, TEXT_STYLE} from "../Controls/Text";
import {View} from "../View";
import "./TitleBar.scss"
import {EmptyView} from "../..";

export const TitleBar = ({title, left_item = EmptyView(), right_item = EmptyView(), bottom_item = EmptyView()}) => ({
    ...View()
        .addClass("navigation_bar"),
    title,
    get children() {
        return [
            Grid({
                left_item,
                right_item,
                title: title ? Text(title, TEXT_STYLE.large_title).addClass("titlebar_title") : EmptyView(),
                bottom_item,
            })
                .gap(0, 24)
                .areas(`"left_item . right_item" "title title title" "bottom_item bottom_item bottom_item"`)
                .columns("auto 1fr auto")
                .rows("auto auto auto")

        ]
    }
});
