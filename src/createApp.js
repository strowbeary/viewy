import {patch, skip, currentElement} from "incremental-dom";
import {augmentor} from "augmentor";

export const createApp = (elementId, rootComponent) => {
    const render = () => {
        const mountingNode = document.getElementById(elementId);
        mountingNode.style.height = "100vh";
        mountingNode.style.background = "var(--background)";
        patch(mountingNode, () => rootComponent().render());
    }
    window.addEventListener("load", () => {
        render()
    });
    window.addEventListener("forceUpdate", () => {
        render();
    });
    return () => render();
};

export const forceUpdate = () => window.dispatchEvent(new CustomEvent("forceUpdate"));

function reactify(data, onUpdate) {
    return new Proxy(data, {
        get(obj, prop) {
            return obj[prop];
        },
        set(obj, prop, value) {
            obj[prop] = value;
            onUpdate();
            return true;
        }
    })
}

export function component({data = async () => ({}), view}) {
    const eventTarget = new EventTarget();

    function render(mountingNode, data, props) {
        patch(mountingNode, () => view.call(data, ...props).render());
    }

    function mount(props) {
        const mountingNode = currentElement();
        data().then(dataObj => {
            const state = reactify({
                ...dataObj,
                ...props
            }, () => eventTarget.dispatchEvent(new CustomEvent("update")));
            eventTarget.addEventListener("update", () => render(mountingNode, state, props));
            eventTarget.dispatchEvent(new CustomEvent("update"));
        });
    }


    return (...props) => ({
        render() {
            skip();
            mount(props);
        }
    })
}