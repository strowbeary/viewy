import {UIView, View} from "../Views/View";
import {NavigationBar} from "../Views/Navigation/NavigationBar";
import {render_controller} from "./RenderController";

export class UINavigationControllerView extends UIView {
    constructor () {
        super();
        this.view_stack = [];
        this.navigation_bar =  NavigationBar();
        window.addEventListener("popstate", e => {
            render_controller.render();
        })
    }

    navigate(navigation_view, forced_path) {
        this.view_stack.push(navigation_view);
        this.navigation_bar.set_title(navigation_view.title);
        history.pushState({
            view_stack_id: this.view_stack.length - 1
        }, navigation_view.title, forced_path ? forced_path : navigation_view.title.toLowerCase().replace(' ', '-'));
        render_controller.render();

    }

    render() {
        return View(
            this.navigation_bar,
            this.view_stack[history.state.view_stack_id]
                .add_class("main")
        )
            .add_class("navigation_view")
            .render();
    }
}

export function NavigationController() {
    return new UINavigationControllerView();
}
