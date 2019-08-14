import {EmptyView} from "./EmptyView";
import {View} from "../View";
import {render_controller} from "../..";

export const AsyncView = (promise) => {
    let ref = {current: null};
    let content = EmptyView();
    (async () => {
        content = await promise();
    })();
    return {
        ...View(),
        children: [content]
    }
};
