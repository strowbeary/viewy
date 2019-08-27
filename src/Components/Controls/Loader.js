import {View} from "../View";
import "./Loader.scss"
import {Icon} from "./Icon";

export const Loader = () => {
    return Icon("../../assets/loader.svg")
        .addClass("loader")
};
