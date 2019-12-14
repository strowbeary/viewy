import {createContext} from "augmentor";
import {EmptyView} from "../components/EmptyView"
import {NavigationView, VStack, Text} from "../";

export const pageMapping = (() => {
    const viewToPath = new WeakMap();
    const pathToView = new Map();
    return {
        getViewFromPath (path) {
            if(pathToView.has(path)) {
                return pathToView.get(path);
            } else {
                return () => VStack(
                    Text("404 not found")
                )
                    .alignItems("center")
                    .justifyContent("center")
                    .height("100%")
            }
        },
        getPathFromView (view) {
            return viewToPath.get(view);
        },
        set (view, path) {
            console.log("new route", path);
            viewToPath.set(view, path);
            pathToView.set(path, view);
        },
    }
})();

export const routerCtx = createContext(() => NavigationView("/", EmptyView()));

window.addEventListener("load", () => {
    routerCtx.provide(pageMapping.getViewFromPath(location.pathname));
});

window.addEventListener("popstate", () => {
    routerCtx.provide(pageMapping.getViewFromPath(location.pathname));
});

