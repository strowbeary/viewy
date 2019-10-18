import {Grid, Image, List, Text, TEXT_STYLE, TitleBar, VStack} from "UIKit";
import ContactDetailView from "./ContactDetailView";
import {need_update} from "../index";
import {TextField} from "../../src";
import {ScrollView} from "../../src/Components/Layouts/ScrollView";

let selectedItem = {
    email: ""
};

function openHandler (contact) {
    selectedItem = contact;
    need_update();
}

const ContactRow = (item) => Grid({
    img: Image("https://cdn.mgig.fr/2019/06/mg-818a12f0-e85c-4c65-aeef-w1000h562-sc.jpg")
        .cornerRadius(16)
        .size(32, 32),
    text: VStack(
        Text(item.name, TEXT_STYLE.label),
        Text(item.email, TEXT_STYLE.subheadline)
    ),
})
    .columns("auto auto 1fr auto")
    .areas(`"img text . action"`)
    .alignItems("center")
    .gap(12)
    .onClick(() => openHandler(item));

export default (users) => Grid(
    ScrollView(
        TitleBar({
            title: "Contacts",
            bottom_item: TextField("contact_search", "text", "Search a contact")
                .marginTop(16)
        }),
        List(users, ContactRow)
    )
        .borderRight(1, "solid", "var(--color-border)")
        .minWidth(400),
    ContactDetailView(selectedItem)
)
    .columns("auto 1fr")
