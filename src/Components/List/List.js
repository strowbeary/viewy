import {View} from "../View";
import {EmptyView} from "../EmptyView";
import "./List.scss";

export const ListRow = (...children) => View(...children).addClass("list_row");

export const List = (items, cell_view_builder = () => EmptyView()) => ({
    ...View().addClass("list"),
    children: items.map((data, i) => ListRow(
        cell_view_builder(data, i)
    ))
});
