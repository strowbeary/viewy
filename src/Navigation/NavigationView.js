import {UIView} from "../Components/View";
import * as Router from "./Router";

export class UINavigationView {
    constructor (path, view) {
        Router.add_page(path, this);
        this.view = view;
    }

    render() {
        return this.view().render();
    }
}

export function NavigationView(path, view) {
    return new UINavigationView('/', view);
}
