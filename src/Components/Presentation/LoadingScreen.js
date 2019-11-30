import {VStack} from "../Stack/Stack";
import {Loader} from "../ProgressIndicator/Loader";
import {Text, TEXT_STYLE} from "../Text/Text";

export default () => VStack(
    Loader(),
    Text("Your app is starting", TEXT_STYLE.footnote)
        .marginTop(16)
)
    .alignItems("center")
    .justifyContent("center")
    .addClass("loading_screen")
