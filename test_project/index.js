import {
    render_controller,
    navigation_controller,
    NavigationView,
    Text
} from "UIKit";
import ContactListView from "./views/ContactListView";
import ContactDetailView from "./views/ContactDetailView";
import EmailEditionView from "./views/EmailEditionView";
import users from "./users";

navigation_controller
    .setAppName("Courrier")
    .setRoutes({
        "/": () => ContactListView(users),
        "/contact/:uid": ({uid}) => ContactDetailView(users.find(user => user.id === parseInt(uid))),
        "/contact/:uid/write": ({uid}) => EmailEditionView(users.find(user => user.id === parseInt(uid))),
    });

render_controller.setCurrentView(navigation_controller);

window.addEventListener("load", () => render_controller.render());

if (module.hot) {
    module.hot.accept(function () {
        render_controller.render();
    });
}
