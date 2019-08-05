import {render} from "lighterhtml";

export {Button, UIButton} from "./Components/Button";
export {LabelTextField, UILabelTextField} from "./Components/LabelTextField";
export {Segment, UISegment} from "./Components/Segment";
export {VStack, HStack, UIVerticalStack, UIHorizontalStack} from "./Components/Stack";
export {Text, UIText, TEXT_STYLE} from "./Components/Text";
export {TextField, UITextField} from "./Components/TextField";
export {View, UIView} from "./Components/View";
export {NavigationView, UINavigationView} from "./Navigation/NavigationView";

export function need_update () {
    render(document.body, () => Router.mount());
}
