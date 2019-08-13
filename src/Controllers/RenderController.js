import {Loader} from "../Views/Presentation/Loader";
import {render} from "lighterhtml";
import {VStack} from "../Views/Layouts/Stack";
import {Text, TEXT_STYLE} from "../Views/Controls/Text";

const RenderController = () => ({
    currentView: VStack(
        Loader(),
        Text("Your app is starting", TEXT_STYLE.footnote)
            .marginTop(16)
    )
        .alignItems("center")
        .justifyContent("center")
        .addClass("loading_screen"),
    setCurrentView(view) {
        console.log(view);
        this.currentView = view;
        this.render();
    },
    render() {
        render(document.body, () => this.currentView.render());
    }
});

export const render_controller = RenderController();

window.addEventListener("load", () => render_controller.render());

