import {EmptyView} from "./EmptyView";
import {View} from "../View";
import {render_controller} from "../..";

export const AsyncView = (promise) => {
    let content = EmptyView();
    (async () => {
        content = await promise();
        render_controller.render();
    })();
    return {
        ...View(),
        children: [
            content
        ]
    }
};
