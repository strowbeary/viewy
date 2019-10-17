import {View} from "../Components/View";
import {TitleBar} from "../Components/Architectural/TitleBar";
import {render_controller} from "./RenderController";
export const NavigationController = () => ({
    ...View().addClass("navigation_view"),
    viewStack: [],
    navigationBar: TitleBar(),
    onPopState() {
        this.viewStack.pop();
        console.log(history.state.view_stack_id, this.viewStack);
        this.navigationBar.title  = this.viewStack[history.state.view_stack_id].title;
        render_controller.render();
    },
    navigate(navigation_view, state) {
        navigation_view = navigation_view(this.navigationBar, state);
        this.navigationBar.title = navigation_view.title;
        this.navigationBar.leftItem = navigation_view.leftItem;
        this.navigationBar.rightItem = navigation_view.rightItem;
        try{
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

window.addEventListener("popstate", () => navigation_controller.onPopState());

