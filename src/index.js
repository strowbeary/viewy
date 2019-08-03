import { NavigationView } from "./Navigation/NavigationView.js";
import { Stack } from "./Layouts/Stack.js";
import { Text } from "./Views/Text.js";
import {render} from "//unpkg.com/lighterhtml?module";

render(document.body, () =>
    NavigationView(
        Stack.vertical(
            Text("Hello"),

            Text("Jack")
                .uppercase()
        ),
        Stack.horizontal(
            Text("I'm a inline text")
        )
    )
        .render()
);
