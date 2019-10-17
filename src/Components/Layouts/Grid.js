import {Stack} from "./Stack";
import "./Grid.scss";
export const Grid = (...children) => ({
    ...Stack().removeClass("stack").addClass("grid"),
    gap(h, v) {
        if (typeof h === "number" && typeof v === "undefined") {
            v = h;
        }
        this.viewStyle.gridGap = `${h}px ${v}px`;
        return this;
    },
    areas (schema) {
        this.children = Array.from(Object.keys(this.children[0]))
            .map(area => {
                console.log(this.children[0], area);
                this.children[0][area].viewStyle.gridArea = area;
                return this.children[0][area];
            });
        this.viewStyle.gridTemplateAreas = schema;
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
    children
});