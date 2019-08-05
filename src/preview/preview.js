import {
    Button,
    HStack,
    VStack,
    Text,
    TEXT_STYLE,
    Segment,
    TextField,
    LabelTextField,
    View
} from "../index";
import {render} from "lighterhtml";

const test_view = View(
    VStack(
        HStack(
            Text("Book my ticket", TEXT_STYLE.large_title),
            Button("Hello")
                .set_action(() => console.log("button_click"))
        ),
        Segment([
            ["a_value", Text("A", TEXT_STYLE.label)],
            ["b_value", Text("B", TEXT_STYLE.label)],
            ["c_value", Text("C", TEXT_STYLE.label)],
            ["d_value", Text("D", TEXT_STYLE.label)],
        ])
            .margin(8, 0, 8, 0)
            .set_default_element(2)
            .set_action(selected_value => console.log(selected_value)),
        TextField("test", "text", "Test input")
            .margin(8, 0, 8, 0),
        LabelTextField("Label", "test", "text", "Test input")
    )
        .margin(8, 8, 8, 8),
);

export function need_update () {
    render(document.body, () => test_view.render());
}

window.addEventListener("load", need_update);
