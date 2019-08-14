import {View} from "../View";
import "./NavigationView.scss"
export const NavigationView = (view_builder) => ({
    ...View(),
    _title: "",
    state: {},
    setTitle(title) {
        this._title = title;
        return this;
    },
    get title() {
        if (typeof this._title === "function") {
            return this._title(this.state);
        } else {
            return this._title;
        }
    },
    setState(state) {
        this.state = state;
        return this;
    },
    get children() {
        console.log(view_builder(this.state));
        return [
            view_builder(this.state)
        ]
    }
});
