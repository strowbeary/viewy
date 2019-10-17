import {
    Button,
    Grid,
    Image,
    List,
    Text,
    TEXT_STYLE,
    VStack,
    TitleBar,
    View,
} from "UIKit";

const ContactRow = (item) => View(
    Grid({
        img: Image("https://cdn.mgig.fr/2019/06/mg-818a12f0-e85c-4c65-aeef-w1000h562-sc.jpg")
            .cornerRadius(16)
            .size(32, 32),
        text: VStack(
            Text(item.name, TEXT_STYLE.label),
            Text(item.email, TEXT_STYLE.subheadline)
        ),
        action: Button("Delete")
    })
        .columns("auto auto 1fr auto")
        .areas(`"img text . action"`)
        .alignItems("center")
        .gap(12)
);

export default (users) => View(
    TitleBar({
        title: "Contacts",
    }),
    List(users, ContactRow)
)
