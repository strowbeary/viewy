import {UIView} from "./View";

class UIStack extends UIView {
    constructor (...children) {
        super(...children);
        this.add_class("stack");
    }
}

export class UIHStackView extends UIStack {
    constructor (...children) {
        super(...children);
        this.add_class("horizontal")
    }
}

export class UIVStackView extends UIStack {
    constructor (...children) {
        super(...children);
        this.add_class("vertical")
    }
}

export function HStack(...children) {
    return new UIHStackView(...children);
}

export function VStack(...children) {
    return new UIVStackView(...children);
}
