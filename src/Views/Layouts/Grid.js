import {UIView} from "../View";

export class UIGridView extends UIView {
    constructor (...children) {
        super(...children);
        this.add_class("grid");
        this.named_grid = false;
    }

    gap (h, v) {
        if (typeof h === "number" && typeof v === "undefined") {
            v = h;
        }
        this.view_style.gridGap = `${h}px ${v}px`;
        return this;
    }

    areas (schema) {
        this.children = Array.from(Object.keys(this.children[0])).map(area => {
            this.children[0][area].view_style.gridArea = area;
            return this.children[0][area];
        });
        this.view_style.gridTemplateAreas = schema;
        return this;
    }

    columns (schema) {
        this.view_style.gridTemplateColumns = schema;
        return this;
    }

    rows (schema) {
        this.view_style.gridTemplateRows = schema;
        return this;
    }
    align_items(alignment) {
        this.view_style.alignItems = alignment;
        return this;
    }
}

export function Grid (...children) {
    return new UIGridView(...children);
}
