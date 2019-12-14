import {RouterContext, View} from "./components/View";
import {EmptyView} from "./components/EmptyView";

export function createView ({name = "", view = () => {}}) {
    return view()
}
