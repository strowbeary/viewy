import {patch} from "incremental-dom";
import {augmentor} from "augmentor";
export const createApp = (elementId, rootView) => {
    const render = augmentor(function () {
        const renderResult = rootView();
        patch(document.getElementById(elementId), () => renderResult.render(), {});
    });

    window.addEventListener("load", () => render());
    return render;
};
