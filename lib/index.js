'use strict';

var lighterhtml_module = require('../../../../../unpkg.com/lighterhtml?module');

function NavigationView(...children) {
    return {
        render() {
            return lighterhtml_module.html`
                <div class="navigation_view">
                    ${children.map(c => c.render())}
                </div>
            `;
        }
    }
}

function HStack(...children) {
    return {
        render() {
            return lighterhtml_module.html`
                <div class="stack horizontal">
                    ${children.map(c => c.render())}
                </div>
            `;
        }
    };
}

function VStack(...children) {
    return {
        render() {
            return lighterhtml_module.html`
                <div class="stack vertical">
                    ${children.map(c => c.render())}
                </div>
            `;
        }
    };
}

const Stack =  {
    vertical: VStack,
    horizontal: HStack,
};

function bind_class (classes, static_class) {
    return [
        ...Object
            .keys(classes)
            .filter(classname => classes[classname]), static_class
        ]
        .join(" ");
}

function Text(value) {
    const class_list = {
        uppercase: false,
        bold: false,
        underline: false,
        italic: false
    };

    const PUBLIC_INTERFACE = {
        uppercase() {
            class_list.uppercase = true;
            return PUBLIC_INTERFACE;
        },
        bold() {
            class_list.bold = true;
            return PUBLIC_INTERFACE;
        },
        underline() {
            class_list.underline = true;
            return PUBLIC_INTERFACE;
        },
        italic() {
            class_list.italic = true;
            return PUBLIC_INTERFACE;
        },
        size(value) {
            return PUBLIC_INTERFACE;
        },
        font(font_stack) {
            return PUBLIC_INTERFACE;
        },
        render() {
            return lighterhtml_module.html`
                <span class=${bind_class(class_list, 'text')}>${value}</span>
            `;
        }
    };

    return PUBLIC_INTERFACE;
}

lighterhtml_module.render(document.body, () =>
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
