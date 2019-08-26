import {
    Button,
    Grid,
    Image,
    List,
    NavigationButton,
    NavigationView,
    render_controller,
    Segment,
    Text,
    TEXT_STYLE,
    VStack
} from "UIKit";
import ContactDetailView from "./ContactDetailView";

export default NavigationView(
    "Contacts",
    {
        rightItem: Segment(
            value => render_controller.setTheme(value),
            ["dark", Text("Dark", TEXT_STYLE.label)],
            ["light", Text("Light", TEXT_STYLE.label)]
        )
            .select(render_controller.theme)
    },
    state =>
    List(state, item =>
        NavigationButton(
            {
                destination: ContactDetailView,
                state: item
            },
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
        )
    )
)
