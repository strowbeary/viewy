import {
    TextField,
    NavigationView,
    LabelTextField,
    Grid
} from "UIKit";

export default (user) => NavigationView(
    "Write an email",
    {},
    () => Grid(
        LabelTextField("Recipient", "destination", "email", "someone@domain.com")
            .setValue(user.email),
        TextField("mail_body", "textarea", "Type your message...")
    )
        .gap(16)
        .margin(16)
);
