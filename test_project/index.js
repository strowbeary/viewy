import {
    render_controller,
    navigation_controller,
    NavigationView,
    Text
} from "UIKit";
import ContactListView from "./views/ContactListView";
import users from "./users";
import ContactDetailView from "./views/ContactDetailView";
import EmailEditionView from "./views/EmailEditionView";

navigation_controller.setRoutes({
    "/": () => ContactListView,
    "/contact-{uid}": params => ContactDetailView,
    "/contact-{uid}/write": params => EmailEditionView,
});
render_controller.setCurrentView(navigation_controller);

window.addEventListener("load", () => render_controller.render());

if (module.hot) {
    module.hot.accept(function() {
        render_controller.render();
    });
}
