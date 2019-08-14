import {View} from "../Components/View";
import {NavigationBar} from "../Components/Navigation/NavigationBar";
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
        try{
            navigation_view.setState(state);
            this.viewStack.push(navigation_view);
            history.pushState({
                    view_stack_id: this.viewStack.length - 1
                },
                navigation_view.title,
                "/" + this.viewStack
                    .slice(1)
                    .map(view => view.title.toLowerCase().replace(' ', '-'))
                    .join('/')
            );
            this.navigationBar.updateOnNavigation(
                navigation_view.title,
                this.viewStack[history.state.view_stack_id - 1].title
            );
            render_controller.render();
        } catch (e) {
            console.error(e);
        }


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

