import {
    NavigationButton,
    NavigationView,
    VStack,
    Image,
    Text,
    TEXT_STYLE
} from "UIKit";

export default (user) => NavigationView(
    user.name,
    {},
    () => VStack(
        Image("https://cdn.mgig.fr/2019/06/mg-818a12f0-e85c-4c65-aeef-w1000h562-sc.jpg")
            .cornerRadius(64)
            .size(128, 128),
        NavigationButton(`/contact-${user.id}/write`,
            Text(user.email, TEXT_STYLE.large_title)
        )
            .marginTop(16)
    )
        .alignItems("center")
        .margin(16)
)
