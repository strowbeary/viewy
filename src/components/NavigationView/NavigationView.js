import "./NavigationView.scss";
import {pageMapping} from "../../services/navigation";

export const SheetNavigationView = {
    leftSide: "left",
    rightSide: "right",
    bottomSide: "bottom",
    centered: "centered"
};

export const NavigationView = (path, viewBuidler) => {
    pageMapping.set(viewBuidler, path);
    return {
        sheet (side = SheetNavigationView.leftSide) {
            return (...data) => ({
                ...viewBuidler(...data)
                    .addClass("navigation-view")
                    .addClass("sheet")
                    .addClass(side),
                path,

            });
        },
        page () {
            return (...data) => ({
                ...viewBuidler(...data)
                    .addClass("navigation-view")
                    .addClass("page"),
                path,

            });
        },
        popover (side) {

        },
    }
};




