import {View} from "../View";

export const UpdatableView = (viewBuilder, persistent_id = Math.random().toString(36).substring(7)) => ({
    ...View(),
    persistent_id,
    children: [
        viewBuilder(persistent_id)
    ]
});