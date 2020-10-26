import {patch, skip} from "incremental-dom";
import {augmentor} from "augmentor";
import {View} from "./components/View/View";

export const createApp = (elementId, rootView) => {
    const render = augmentor(() => {
        const renderable = rootView();
        const mountingNode = document.getElementById(elementId);
        mountingNode.style.height = "100vh";
        renderable.render(mountingNode, true);
    });

    window.addEventListener("load", () => {
        render()
    });
    window.addEventListener("forceUpdate", () => {
        render();
    });
    return () => render();
};

export const forceUpdate = () => window.dispatchEvent(new CustomEvent("forceUpdate"));

export const component = (view) => {
    const componentRender = augmentor((parentEl, isRoot = false, attrs) => {
        if (!isRoot) {
            skip();
        }
        return patch(parentEl, () => view(...attrs).render(), {});
    });
    return (...attrs) => ({
        ...View(),
        render(...params) {
            componentRender(...params, attrs)
        }
    });
};
