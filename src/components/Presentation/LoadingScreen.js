import {VStack} from "../Stack/Stack";
import {ProgressIndicator} from "../ProgressIndicator/ProgressIndicator";

export default () => VStack(
    ProgressIndicator()
)
    .width("100%")
    .height("100%")
    .alignItems("center")
    .justifyContent("center")
