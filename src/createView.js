import {RouterContext, View} from "./Components/View";
import {EmptyView} from "./Components/EmptyView";

export function createView ({name = "", view = () => {}}) {
    return view()
}
