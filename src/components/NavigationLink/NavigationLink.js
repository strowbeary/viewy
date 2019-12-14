import {View} from "../View";
import {routerCtx} from "../../services/navigation";

export const NavigationLink = (destination, data, ...children) => {
    return {
        ...View()
            .onClick(() => {
                history.pushState(
                    data,
                    destination().viewName,
                    destination().path
                );
                routerCtx.provide(destination);
            }),
        children
    }
};
