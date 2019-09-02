import {
    render_controller,
} from "UIKit";
import ContactListView from "./views/ContactListView";
import ContactDetailView from "./views/ContactDetailView";
import EmailEditionView from "./views/EmailEditionView";
import users from "./users";

window.addEventListener("load", () => render_controller.render());


render_controller.setCurrentView(ContactListView(users));


