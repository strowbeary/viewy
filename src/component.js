import {currentElement, patch, skip} from "incremental-dom";
import LoadingScreen from "./components/Presentation/LoadingScreen";
import {View} from "./components/View/View";

export function component(
    {
        name,
        initState = async () => ({}),
        beforeMount = async () => ({}),
        beforeUpdate = async () => {},
        mounted = () => {},
        view = () => {},
        overrideMountingElement = null
    }
) {
    let eventTarget = new EventTarget();
    let initializedData = null;
    let loading = true;

    function render(mountingNode, props) {
        try {
            patch(mountingNode, () => {
                if (initializedData && !loading) {
                    const mountedEl = view.call(initializedData, ...props).render();
                    mounted.call(initializedData, mountedEl, ...props);
                } else {
                    LoadingScreen().render()
                }
            });
        } catch (e) {
            console.error(name, e);
        }
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
        skip();
        eventTarget = new EventTarget();
        const mountingNode = overrideMountingElement ? overrideMountingElement() : currentElement();
        eventTarget.addEventListener("update", () => {
            beforeUpdate
                .call(initializedData, ...props)
                .then(() => {
                    loading = false;
                    render(mountingNode, props);
                });
        });

        render(mountingNode, props)
        loading = true;
        initState.call({}, ...props).then(dataObj => {
            initializedData = reactify(dataObj, () => eventTarget.dispatchEvent(new CustomEvent("update")));
            beforeMount.call(initializedData, ...props).then(() => {
                eventTarget.dispatchEvent(new CustomEvent("update"));
            });
        });
    }


    return (...props) => View({
        render() {
            mount(props);
        }
    })
        .addClass(`component-${name}`)
        .addClass(`component`)
}
