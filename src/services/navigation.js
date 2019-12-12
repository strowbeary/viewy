import {createContext, useContext} from "augmentor";
import {EmptyView} from "../Components/EmptyView"
import {View} from "../Components/View";

export const SheetNavigationView = {
    leftSide: "left",
    rightSide: "right",
    bottomSide: "bottom",
};

const pageMapping = (() => {
    const viewToPath = new WeakMap();
    const pathToView = new Map();
    return {
        getViewFromPath (path) {
            return pathToView.get(path);
        },
        getPathFromView (view) {
            return viewToPath.get(view);
        },
        set (view, path) {
            console.log("new route", path);
            viewToPath.set(view, path);
            pathToView.set(path, view);
        },
        hasView (view) {
            return viewToPath.has(view);
        },
        hasPath (path) {
            return pathToView.has(path);
        }
    }
})();
const routerCtx = createContext(() => EmptyView());
export const RouterMountPoint = () => {
    return useContext(routerCtx)();
};

export const NavigationView = (path, viewConstructor) => {
    // router logic
    const commonView = View(viewConstructor());
    const navView = {
        ...commonView
            .addClass("navigation-view"),
        sheet (side = SheetNavigationView.leftSide) {
            commonView
                .addClass("sheet")
                .addClass(side);
            return this;
        },
        page () {

        },
        popover (side) {

        },
    };
    pageMapping.set(navView, path);
    return navView;
};

window.addEventListener("load", () => {
    routerCtx.provide(() => pageMapping.getViewFromPath(location.pathname));
});
window.addEventListener("popstate", () => {
    routerCtx.provide(() => pageMapping.getViewFromPath(location.pathname));
});

export const NavigationLink = (destination, ...children) => ({
    ...View()
        .onClick(() => {
            history.pushState(
                {},
                destination.viewName,
                pageMapping.getPathFromView(destination)
            );
            routerCtx.provide(() => destination);
        }),
    children
});
