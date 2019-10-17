import {View} from "../View";
import {EmptyView} from "../Presentation/EmptyView";
import "./List.scss";

export const ListRow = (...children) => View(...children).addClass("list_row");

export const List = (items, cell_view_builder = () => EmptyView()) => ({
    ...View().addClass("list"),
    children: items.map(item => ListRow(
        cell_view_builder(item)
            .padding(8, 16)
    ))
});
