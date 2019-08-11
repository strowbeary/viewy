import {Loader} from "../Views/Presentation/Loader";
import {render} from "lighterhtml";
import {VStack} from "../Views/Layouts/Stack";
import {Text, TEXT_STYLE} from "../Views/Controls/Text";

class RenderController {
    constructor () {
        this.current_view = VStack(
            Loader(),
            Text("Your app is starting", TEXT_STYLE.footnote)
                .margin(16, 0, 0, 0)
        )
            .align_items("center")
            .justify_content("center");
        this.current_view.view_style.height = "100vh";
    }

    set_current_view(view) {
        this.current_view = view;
        this.render();
    }

    render() {
        render(document.body, () => this.current_view.render());
    }
}

export const render_controller = new RenderController();

window.addEventListener("load", () => render_controller.render());

