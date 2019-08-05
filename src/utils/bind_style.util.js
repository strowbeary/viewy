export function bind_style(style_object) {
    return Object.entries(style_object).reduce((styleString, [propName, propValue]) => {
        propName = propName.replace(/([A-Z])/g, matches => `-${matches[0].toLowerCase()}`);
        return `${styleString}${propName}:${propValue};`;
    }, '')
}
