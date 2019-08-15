import {View} from "../View";
import {EmptyView} from "../Presentation/EmptyView";
import "./NavigationView.scss"

export const NavigationView =
    (title, {leftItem = EmptyView(), rightItem = EmptyView()}, view_builder) => (
        (navigationBar, state) => ({
            ...View(),
            state,
            title: (typeof title === "string") ? title : title(state),
            navigationBar,
            leftItem,
            rightItem,
            get children () {
                return [
                    view_builder(this.state)
                ]
            }
        })
    );

