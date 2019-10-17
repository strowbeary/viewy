import {View} from "../Components/View";
import {Text} from "../Components/Controls/Text";
import {TitleBar} from "../Components/Architectural/TitleBar";
import rlite from "rlite-router";
import LoadingScreen from "../Components/Presentation/LoadingScreen";
import {render_controller} from "./RenderController";


export const NavigationController = () => {
    return {
        ...View().addClass("navigation_controller"),
        currentView: View(
            Text("Page not found")
        ),
        appName: "App name",
        resolveRoute () {
            return LoadingScreen();
        },
        setAppName(name) {
            this.appName = name;
            return this;
        },
        setRoutes (routes) {
            this.resolveRoute = rlite(
                () => View(
                    Text("Page not found")
                ),
                routes
            );
            this.navigate(location.pathname);

            window.addEventListener("popstate", () => {
                this.currentView = this.resolveRoute(location.pathname);
                document.title = this.appName + " • " + this.currentView.title;
                render_controller.render();
            });
            return this;
        },
        navigate(path) {
            history.pushState({}, "", path);
            this.currentView = this.resolveRoute(path);
            document.title = this.appName + " • " + this.currentView.title;
            render_controller.render();
        },
        get children () {
            return [
                this.currentView
            ];
        }
    };
};


export const navigation_controller = NavigationController();
