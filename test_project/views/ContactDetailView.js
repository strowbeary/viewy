import {Image, Text, TEXT_STYLE, TitleBar, ScrollView, VStack, EmptyView} from "UIKit";
import {Button} from "../../src";

export default (user) => user ? ScrollView(
    TitleBar({
        title: user.name ? user.name : '-',
        right_item: Button("Edit", () => {}, "flat")
    }),
    VStack(
        Image("https://cdn.mgig.fr/2019/06/mg-818a12f0-e85c-4c65-aeef-w1000h562-sc.jpg")
            .cornerRadius(64)
            .size(128, 128),
        Text(user.email, TEXT_STYLE.large_title)
            .marginTop(16)
    )
        .alignItems("center")
        .margin(16)
) : EmptyView();

