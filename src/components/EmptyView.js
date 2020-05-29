import {View} from "./View/View";

export const EmptyView = () => ({
    ...View(),
    render() {},
    get isEmptyView() {
        return true
    }
});
