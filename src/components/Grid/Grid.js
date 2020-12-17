import {Stack} from "../..";
import "./Grid.scss";
export const Grid = (...children) => ({
    ...Stack(),
    gap(h, v) {
        if (typeof h === "number" && typeof v === "undefined") {
            v = h;
        }
        this.viewStyle.gridGap = `${h} ${v}`;
        return this;
    },
    areas (schema) {
        this.viewStyle.gridTemplateAreas = schema;
        this.children = Array.from(Object.keys(this.children[0]))
            .map(area => {
                this.children[0][area].viewStyle.gridArea = area;
                return this.children[0][area];
            });
        return this;
    },
    columns (schema) {
        this.viewStyle.gridTemplateColumns = schema;
        return this;
    },
    rows (schema) {
        this.viewStyle.gridTemplateRows = schema;
        return this;
    },
    autoRows (size) {
        this.viewStyle.gridAutoRows = size;
        return this;
    },
    autoColumns (size) {
        this.viewStyle.gridAutoColumns = size;
        return this;
    },
    autoFlow (direction) {
        this.viewStyle.gridAutoFlow= direction;
        return this;
    },
    children
})
    .removeClass("stack")
    .addClass("grid");
