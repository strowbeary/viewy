import {useContext} from "augmentor";
import {routerCtx} from "../../services/navigation";

export const RouterMountPoint = () => {
    let viewParams = [];
    if(history.state) {
        viewParams = Array.from(Object.values(history.state));
    }
    return useContext(routerCtx)(...viewParams);
};
