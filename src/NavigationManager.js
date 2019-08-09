import {render} from "lighterhtml";

class NavigationManager {
    constructor () {
        this.pages = new Map();
    }

    _add_page(path, navigation_view) {
        this.pages.set(path, navigation_view);
        return this;
    }

    render() {
        render(document.body, () => this.pages.get(location.pathname).render());
    }
}
const navigation_manager = new NavigationManager();

window.addEventListener("load", () => navigation_manager.render());

export default navigation_manager;
