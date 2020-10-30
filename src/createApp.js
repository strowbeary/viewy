import {patch, skip, currentElement} from "incremental-dom";
import {augmentor} from "augmentor";
import {View} from "./components/View/View";

export const createApp = (elementId, rootComponent) => {
    const mountingNode = document.getElementById(elementId);
    mountingNode.style.height = "100vh";
    mountingNode.style.background = "var(--background)";
    const render = () => rootComponent().render();
    window.addEventListener("load", () => {
        render()
    });
    window.addEventListener("forceUpdate", () => {
        render();
    });
    return () => render();
};

export const forceUpdate = () => window.dispatchEvent(new CustomEvent("forceUpdate"));

export function component({data = () => async () => ({}), render}) {
    return (params) => ({
        ...View(),
        render() {
            skip();
            data().then(dataObj => augmentor(() => {
                patch(currentElement(), () => render.call({
                    ...params,
                    ...dataObj
                }))
            }))
        }
    })
}