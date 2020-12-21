import {component} from "./component";

export const createRouter = ({ layouts = {default(currentView) { return currentView}}, routes = []}) => {
    const eventTarget = new EventTarget();
    const getMatchingRoute = () => routes.find(route => route.path === location.pathname);

    function go(routeName, params = {}) {
        const matchingRoute = routes.find(route => route.name === routeName);
        history.pushState(params, "", matchingRoute.path);
        eventTarget.dispatchEvent(new CustomEvent("navigate"))
    }

    return {
        routerView: component({
            name: "Router",
            async initState() {
                return {
                    currentRoute: getMatchingRoute()
                }
            },
            async beforeMount() {
                window.addEventListener("popstate", () => {
                    this.currentRoute = getMatchingRoute();
                });
                eventTarget.addEventListener("navigate", () => {
                    this.currentRoute = getMatchingRoute();
                });
            },
            async beforeUpdate() {
                if(this.currentRoute.guards) {
                    const gardResults = await Promise.all(this.currentRoute.guards.map(guard => guard()));
                    const redirection = gardResults.find(result => result !== "Ok");
                    console.log(this.currentRoute.name, gardResults, redirection);
                    if(redirection && redirection !== this.currentRoute.name) {
                        go(redirection);
                    }
                }
            },
            view() {
                const layoutName = this.currentRoute.layout ?  this.currentRoute.layout : 'default';
                return layouts[layoutName](this.currentRoute.component(history.state));
            }
        }),
        go
    }
}
