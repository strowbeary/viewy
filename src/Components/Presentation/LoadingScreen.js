import {VStack} from "../../Components/Layouts/Stack";
import {Loader} from "../../Components/Controls/Loader";
import {Text, TEXT_STYLE} from "../../Components/Controls/Text";

export default () => VStack(
    Loader(),
    Text("Your app is starting", TEXT_STYLE.footnote)
        .marginTop(16)
)
    .alignItems("center")
    .justifyContent("center")
    .addClass("loading_screen")
