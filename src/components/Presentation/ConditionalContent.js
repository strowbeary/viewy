import {EmptyView} from "../EmptyView";

export const ConditionalContent = (expr, trueView, falseView = EmptyView()) => ({
    render() {
        return expr ? trueView : falseView;
    }
});
