'use strict';

var lighterhtml = require('lighterhtml');

function HStack(...children) {
    return {
        render() {
            return lighterhtml.html`
                <div class="stack horizontal">
                    ${children}
                </div>
            `;
        }
    };
}

function VStack(...children) {
    return {
        render() {
            return lighterhtml.html`
                <div class="stack vertical">
                    ${children}
                </div>
            `;
        }
    };
}

const Stack =  {
    vertical: VStack,
    horizontal: HStack,
};

function NavigationView(...children) {
    return {
        render() {
            return lighterhtml.html`
                <div class="navigation_view">
                    ${children}
                </div>
            `;
        }
    }
}

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
            return lighterhtml.html`
                <span class=${bind_class(class_list, 'text')}>${value}</span>
            `;
        }
    };

    return PUBLIC_INTERFACE;
}

console.log(NavigationView(
    Stack.vertical(
        Text("Hello")
            .uppercase()
    )
));
