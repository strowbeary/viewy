import {View} from "../View/View";
import {EmptyView} from "../EmptyView";
import "./List.scss";

export const ListRow = (...children) => View(...children).addClass("list_row");

export const List = (items, cell_view_builder = () => EmptyView(), withSeparator = true) => ({
    ...View().addClass("list"),
    children: items.map((data, i) => withSeparator
        ? ListRow(
            cell_view_builder(data, i)
        )
        : cell_view_builder(data, i)
    )
});
