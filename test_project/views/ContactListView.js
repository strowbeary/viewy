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
    Tag,
    HStack,
    render_controller
} from "UIKit";
import ContactDetailView from "./ContactDetailView";
import {need_update} from "../index";
import {TextField} from "../../src";
import {ScrollView} from "../../src/Components/Layouts/ScrollView";
let selectedItem = {
    email: ""
};
function openHandler(contact) {
        selectedItem = contact;
        need_update();
}
const ContactRow = (item) => View(
    Grid({
        img: Image("https://cdn.mgig.fr/2019/06/mg-818a12f0-e85c-4c65-aeef-w1000h562-sc.jpg")
            .cornerRadius(16)
            .size(32, 32),
        text: VStack(
            Text(item.name, TEXT_STYLE.label),
            Text(item.email, TEXT_STYLE.subheadline)
        ),
        tag: Tag("Label"),
        action: Button("Open",() => openHandler(item), "outlined")
    })
        .columns("auto auto 1fr auto 1fr auto")
        .areas(`"img text . tag . action"`)
        .alignItems("center")
        .gap(12)
);

export default (users) => Grid(
    ScrollView(
        TitleBar({
            title: "Contacts",
            bottom_item: TextField("contact_search", "text", "Search a contact")
                .marginTop(16)
        }),
        List(users, ContactRow)
    )
        .borderRight(1, "solid", "var(--color-border)"),
    ContactDetailView(selectedItem)
)
    .columns("auto 1fr")
