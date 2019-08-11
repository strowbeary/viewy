import {UIView} from "../View";

export class UINavigationView extends UIView {
    constructor(...children) {
        super(...children);
        this.title = "";
    }

    set_title(text) {
        this.title = text;
        return this;
    }
}

export function NavigationView(...children) {
    return new UINavigationView(...children);
}
