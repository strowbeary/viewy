import {UIView} from "../Components/View";
import * as Router from "./Router";

export class UINavigationView extends UIView {
    constructor (path, ...children) {
        super(...children);
        Router.add_page(path, this);
    }
}

export function NavigationView(path, ...children) {
    return new UINavigationView('/', ...children);
}
