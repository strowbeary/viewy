import {UIView} from "../View";

class UIStack extends UIView {
    constructor (...children) {
        super(...children);
        this.add_class("stack");
    }

    align_items(alignment) {
        this.view_style.alignItems = alignment;
        return this;
    }

    justify_content(justification) {
        this.view_style.justifyContent = justification;
        return this;
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
