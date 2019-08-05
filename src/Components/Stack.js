import {UIView} from "./View";

class UIStack extends UIView {
    constructor (...children) {
        super(...children);
        this.add_class("stack");
    }
}

export class UIHorizontalStack extends UIStack {
    constructor (...children) {
        super(...children);
        this.add_class("horizontal")
    }
}

export class UIVerticalStack extends UIStack {
    constructor (...children) {
        super(...children);
        this.add_class("vertical")
    }
}

export function HStack(...children) {
    return new UIHorizontalStack(...children);
}

export function VStack(...children) {
    return new UIVerticalStack(...children);
}
