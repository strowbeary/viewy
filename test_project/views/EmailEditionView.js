import {
    TextField,
    NavigationView,
    LabelTextField,
    Grid,
    View
} from "UIKit";
import {Button, TitleBar} from "../../src";

export default (user) => View(
    TitleBar({
        title: "Write email",
        right_item: Button("Envoyer", () => {})
    }),
    Grid(
        LabelTextField("Recipient", "destination", "email", "someone@domain.com")
            .setValue(user.email),
        TextField("mail_body", "textarea", "Type your message...")
    )
        .gap(16)
        .margin(16)
);

