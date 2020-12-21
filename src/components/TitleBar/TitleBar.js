import {Grid} from "../Grid/Grid";
import {Text, TEXT_STYLE} from "../Text/Text";
import {View} from "../View/View";
import "./TitleBar.scss"
import {EmptyView} from "../EmptyView";
import {sp} from "../../ressources/SizingScale";

export const TitleBar = ({
                             title,
                             left_item = EmptyView(),
                             right_item = EmptyView(),
                             bottom_item = EmptyView()
                         }) => ({
    ...View()
        .addClass("navigation-bar"),
    get children () {
        let areas =  left_item.isEmptyView
            ? `"title title right_item"`
            : `"left_item . right_item" "title title title"`;
        if(!bottom_item.isEmptyView) {
            areas += ` "bottom_item bottom_item bottom_item"`
        }

        return [
            Grid({
                left_item,
                right_item,
                title: title ? Text(title, TEXT_STYLE.largeTitle).addClass("titlebar__title") : EmptyView(),
                bottom_item,
            })
                .gap(sp(8), sp(14))
                .areas(areas)
                .alignItems("center")
                .columns("auto 1fr auto")
                .autoRows("auto")

        ]
    }
});
