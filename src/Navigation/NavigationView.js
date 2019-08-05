import {UIView} from "../Components/View";

export class UINavigationView extends UIView {
    constructor (path, ...children) {
        super(...children);
        console.log("PATH", path);
    }
}

export function NavigationView(...children) {
    return new UINavigationView('/', ...children);
}
