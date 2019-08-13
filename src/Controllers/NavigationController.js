import {View} from "../Views/View";
import {NavigationBar} from "../Views/Navigation/NavigationBar";
import {render_controller} from "./RenderController";
export const NavigationController = () => ({
    ...View().addClass("navigation_view"),
    viewStack: [],
    navigationBar: NavigationBar(),
    onPopState() {
        this.viewStack.pop();
        this.navigationBar.setTitle(this.viewStack[history.state.view_stack_id].title);
        render_controller.render();
    },
    navigate(navigation_view, state) {
        navigation_view.setState(state);
        this.viewStack.push(navigation_view);
        this.navigationBar.setTitle(navigation_view.title);
        history.pushState({
                view_stack_id: this.viewStack.length - 1
            },
            navigation_view.title,
            "/" + this.viewStack
                .slice(1)
                .map(view => view.title.toLowerCase().replace(' ', '-'))
                .join('/')
        );
        render_controller.render();
    },
    get children() {
        return [
            this.navigationBar,
            this.viewStack[history.state.view_stack_id]
                .addClass("main")
        ];
    }
});

export const navigation_controller = NavigationController();

window.addEventListener("onpopstate", () => navigation_controller.onPopState());

