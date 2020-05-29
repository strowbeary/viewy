import {Grid} from "../Grid/Grid";
import {Text, TEXT_STYLE} from "../Text/Text";
import {View} from "../View/View";
import "./TitleBar.scss"
import {EmptyView} from "../EmptyView";

export const TitleBar = ({title, left_item = EmptyView(), right_item = EmptyView(), bottom_item = EmptyView()}) => ({
    ...View()
        .addClass("navigation_bar"),
    get children() {
        return [
            Grid({
                left_item,
                right_item,
                title: title ? Text(title, TEXT_STYLE.largeTitle).addClass("titlebar_title") : EmptyView(),
                bottom_item,
            })
                .gap(0, 24)
                .areas(`"left_item . right_item" "title title title" "bottom_item bottom_item bottom_item"`)
                .columns("auto 1fr auto")
                .rows("auto auto auto")

        ]
    }
});
