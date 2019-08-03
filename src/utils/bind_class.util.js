export function bind_class (classes, static_class) {
    return [
        ...Object
            .keys(classes)
            .filter(classname => classes[classname]), static_class
        ]
        .join(" ");
}
