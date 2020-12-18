import {patch} from "incremental-dom";

export const createApp = (elementId, rootComponent) => {
    const render = () => {
        const mountingNode = document.getElementById(elementId);
        mountingNode.style.height = "100vh";
        mountingNode.style.background = "var(--background)";
        patch(mountingNode, () => rootComponent().render(mountingNode));
    }
    window.addEventListener("load", () => {
        render();
    });
    window.addEventListener("forceUpdate", () => {
        render();
    });
    return () => render();
};

export const forceUpdate = () => window.dispatchEvent(new CustomEvent("forceUpdate"));
