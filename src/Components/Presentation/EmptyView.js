import {View} from "../View";

export const EmptyView = () => ({
    ...View(),
    render() {},
    get isEmptyView() {
        return true
    }
});
