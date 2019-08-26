import {View} from "../Components/View";
import {NavigationBar} from "../Components/Navigation/NavigationBar";
import LightRouter from "lightrouter";



export const NavigationController = (routes) => {

    return {
        ...View().addClass("navigation_view"),
        navigationBar: NavigationBar(),
        setRoutes(routes) {
            const router = new LightRouter({
                type: 'path',             // Default routing type
                pathRoot: '/',  // Base path for your app
                routes
            });
            router.run();
        },
        get children() {
            return [
                this.navigationBar,
            ];
        }
    };
};

export const navigation_controller = NavigationController();
