import {View} from "../View/View";

export const Form = (...children) => {
    children = children.map(formControl => {
        formControl
            .on("input", e => console.log(formControl.name, e.target.value))
            .on("change", e => console.log(formControl.name, e.target.value))
    })
    return {
        ...View(),
        children,

    };
}
