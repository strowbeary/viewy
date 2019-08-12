import {UIView, View} from "../View";

export class UINavigationView extends UIView {
    constructor (view_builder) {
        super();
        this._title = "";
        this.view_builder = view_builder;
        this.state = {};
    }

    get title () {
        if (typeof this._title === "function") {
            return this._title(this.state);
        } else {
            return this._title;
        }
    }

    set_title (text) {
        this._title = text;
        return this;
    }

    set_state (state) {
        this.state = state;
        return this;
    }

    render () {
        return View(this.view_builder(this.state)).render()
    }
}

export function NavigationView (...children) {
    return new UINavigationView(...children);
}
