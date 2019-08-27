import {Loader} from "../Components/Controls/Loader";
import {render} from "lighterhtml";
import {VStack} from "../Components/Layouts/Stack";
import {Text, TEXT_STYLE} from "../Components/Controls/Text";
import LoadingScreen from "../Components/Presentation/LoadingScreen";

const RenderController = () => ({
    theme: "light",
    currentView: LoadingScreen(),
    setCurrentView (view) {
        console.log(view);
        this.currentView = view;
        this.render();
    },
    setTheme (variant) {
        if (variant !== "light" && variant !== "dark") throw Error("Theme is either light or dark");
        this.theme = variant;
        return this;
    },
    render () {
        try {
            render(document.body, () => this.currentView.render());
            (this.theme === "light" ? () => {
                document.body.classList.remove("dark");
                document.body.classList.add("light");
            } : () => {
                document.body.classList.remove("light");
                document.body.classList.add("dark");
            })();
        } catch (e) {
            console.error(e);
        }
    }
});

export const render_controller = RenderController();


