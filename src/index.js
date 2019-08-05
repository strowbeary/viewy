import {NavigationView} from "./Navigation/NavigationView.js";
import {Stack} from "./Components/Layouts/Stack.js";
import {Text} from "./Components/Text/Text.js";
import {render} from "//unpkg.com/lighterhtml?module";
import {Button} from "./Components/Button/Button.js";
import {Segment} from "./Components/Segment/Segment.js";

const test_view = NavigationView(
    Stack.vertical(
        Stack.horizontal(
            Text("Book my ticket", Text.styles.large_title),
            Button("Hello")
        ),
        Segment([
            ["a_value", Text("A", Text.styles.label)],
            ["b_value", Text("B", Text.styles.label)],
            ["c_value", Text("C", Text.styles.label)],
            ["d_value", Text("D", Text.styles.label)],
        ])
            .set_default_element(2)
            .set_action(selected_value => console.log(selected_value))
    ),
);

export function need_update() {
    render(document.body, () => test_view.render());
}

window.addEventListener("load", need_update);
