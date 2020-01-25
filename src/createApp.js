import {patch} from "incremental-dom";
import {augmentor} from "augmentor";
export const createApp = (elementId, rootView) => {
    const render = augmentor(function () {
        const renderResult = rootView();
        const mountingNode = document.getElementById(elementId);
        mountingNode.style.height = "100%";
        patch(mountingNode, () => renderResult.render(), {});
    });

    window.addEventListener("load", () => render());
    return () => render();
};
