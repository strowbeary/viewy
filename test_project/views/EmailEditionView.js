import {
    TextField,
    NavigationView,
    LabelTextField,
    Grid
} from "UIKit";

export default NavigationView(
    "Write an email",
    {},
    state => Grid(
        LabelTextField("Recipient", "destination", "email", "someone@domain.com")
            .setValue(state.email),
        TextField("mail_body", "textarea", "Type your message...")
    )
    .gap(16)
    .margin(16)
);
