import {
    render_controller,
    navigation_controller,
} from "UIKit";
import ContactListView from "./views/ContactListView";
import ContactDetailView from "./views/ContactDetailView";
import EmailEditionView from "./views/EmailEditionView";
import users from "./users";

window.addEventListener("load", () => {
    navigation_controller
        .setAppName("Courrier")
        .setRoutes({
            "/": () => ContactListView(users),
            "/contact/:uid": ({uid}) => ContactDetailView(users.find(user => user.id === parseInt(uid))),
            "/contact/:uid/write": ({uid}) => EmailEditionView(users.find(user => user.id === parseInt(uid))),
        });

    render_controller.setCurrentView(navigation_controller);
});

if (module.hot) {
    module.hot.dispose(function() {
        // le module est sur le point d'être remplacé
    });

    module.hot.accept(function() {
        render_controller.setCurrentView(navigation_controller);
    })
}
