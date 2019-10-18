import users from "./users";
import {render} from "lighterhtml";
import ContactListView from "./views/ContactListView";


export function need_update() {
    render(document.body, () => ContactListView(users).addClass("rootView").render());
}

window.addEventListener("load", need_update);

if (module.hot) {
    module.hot.dispose(function() {
        // le module est sur le point d'être remplacé
    });

    module.hot.accept(need_update)
}
