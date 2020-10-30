import {patch, skip, currentElement} from "incremental-dom";
import {augmentor} from "augmentor";
import LoadingScreen from "./components/Presentation/LoadingScreen";

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



export function component({name, data = async () => ({}), view = () => {}}) {
    let eventTarget = new EventTarget();
    let initializedData = null;
    let loading = true;

    function render(mountingNode, props) {
        patch(mountingNode, () => {
            if(initializedData && !loading) {
                view.call(initializedData, ...props).render()
            } else {
                LoadingScreen().render()
            }
        });
    }

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
        });
    }

    function mount(props) {
        eventTarget = new EventTarget();
        const mountingNode = currentElement();
        console.log("MOUNT", name, mountingNode);
        eventTarget.addEventListener("update", () => render(mountingNode, props));
        render(mountingNode, props)
        loading = true;
        data().then(dataObj => {
            initializedData = reactify(dataObj, () => eventTarget.dispatchEvent(new CustomEvent("update")));
            eventTarget.dispatchEvent(new CustomEvent("update"));
            loading = false;
        });
    }


    return (...props) => ({
        render() {
            skip();
            mount(props);
        }
    })
}