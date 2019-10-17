import {View} from "../View";
import "./NavigationView.scss"

export const NavigationView =
    (title, view_builder) => ({
        ...View(),
        title: title,
        get children () {
            return [
                view_builder()
            ]
        }
    });

