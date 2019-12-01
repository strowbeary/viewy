import {RouterContext, View} from "./Components/View";
import {EmptyView} from "./Components/Presentation/EmptyView";

export function createView ({name = "", view = () => {}}) {
    RouterContext
    return view()
}
