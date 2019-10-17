import {Grid} from "../Layouts/Grid";
import {Text, TEXT_STYLE} from "../Controls/Text";
import {EmptyView} from "../Presentation/EmptyView";
import {HStack} from "../Layouts/Stack";
import {View} from "../View";
import "./TitleBar.scss"
import {Button, Icon} from "../..";

export const TitleBar = ({title, left_item = View(), right_item = View()}) => ({
    ...View()
        .addClass("navigation_bar"),
    title,
    get children() {
        return [
            Grid({
                left_item,
                right_item,
                title: Text(title, TEXT_STYLE.large_title)
            })
                .gap(8, 24)
                .areas(`"left_item . right_item" "title title title"`)
                .columns("auto 1fr auto")
                .rows("36px auto")

        ]
    }
});
