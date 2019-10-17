
import {render} from "lighterhtml";
import LoadingScreen from "../Components/Presentation/LoadingScreen";

const RenderController = () => ({
    theme: "light",
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
        (this.theme === "light" ? () => {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } : () => {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        })();
        render(document.body, () => this.currentView.render());
    }
});

export const render_controller = RenderController();


