import {View} from "../View";
import {EmptyView} from "../Presentation/EmptyView";
import "./NavigationView.scss"
import {NavigationBar} from "./NavigationBar";

export const NavigationView =
    (title, {leftItem = EmptyView(), rightItem = EmptyView()}, view_builder) => ({
        ...View(),
        title: title,
        leftItem,
        rightItem,
        get children () {
            return [
                NavigationBar(this),
                view_builder()
            ]
        }
    });

