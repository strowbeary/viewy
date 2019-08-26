import EmailEditionView from "./EmailEditionView";
import {
    NavigationButton,
    NavigationView,
    VStack,
    Image,
    Text,
    TEXT_STYLE
} from "UIKit";

export default NavigationView(
    state => state.name,
    {},
    state =>
    VStack(
        Image("https://cdn.mgig.fr/2019/06/mg-818a12f0-e85c-4c65-aeef-w1000h562-sc.jpg")
            .cornerRadius(64)
            .size(128, 128),
        NavigationButton({
            destination: EmailEditionView,
            state
        },
            Text(state.email, TEXT_STYLE.large_title)
        )
            .marginTop(16)

    )
        .alignItems("center")
        .margin(16)
)
