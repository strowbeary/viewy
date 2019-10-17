
import {render} from "lighterhtml";
import LoadingScreen from "../Components/Presentation/LoadingScreen";

const RenderController = () => ({
    theme: "dark",
    currentView: LoadingScreen(),
    setCurrentView (view) {
        this.currentView = view;
        this.render();
    },
    setTheme (variant) {
        if (variant !== "light" && variant !== "dark") throw Error("variant parameter must be either light or dark");
        this.theme = variant;
        return this;
    },
    render () {
        this.currentView.addClass("rootView");
        render(document.body, () => this.currentView.render());
    }
});

export const render_controller = RenderController();


