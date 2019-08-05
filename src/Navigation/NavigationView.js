import {UIView} from "../Components/View";
import * as Router from "./Router";

export class UINavigationView extends UIView {
    constructor (path, ...children) {
        super(...children);
        Router.add_page(path, this);
    }
}

export function NavigationView(...children) {
    return new UINavigationView('/', ...children);
}
