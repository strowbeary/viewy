import {
    render_controller,
    navigation_controller,
    NavigationView,
    Text
} from "UIKit";
import TestView from "./views/TestView";
import users from "./users";

navigation_controller.navigate(TestView, users);
render_controller.setCurrentView(navigation_controller);

window.addEventListener("load", () => render_controller.render());

if (module.hot) {
    module.hot.accept(function() {
        render_controller.render();
    });
}
