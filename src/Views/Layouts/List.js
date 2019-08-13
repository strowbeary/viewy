import {View} from "../View";
import {html} from "lighterhtml";
import {bind_class} from "../../utils/bind_class.util";
import {bind_style} from "../../utils/bind_style.util";
import {EmptyView} from "../..";

export const ListRow = (...children) => ({
    ...View(...children).addClass("list_row")
});

export const List = (items, cell_view_builder = () => EmptyView()) => ({
    ...View(),
    children: items.map(item => ListRow(
        cell_view_builder(item)
            .padding(8, 16)
    ))
});
