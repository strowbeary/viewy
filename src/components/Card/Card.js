import {View} from "../View/View";
import "./Card.scss";
export const Card = (...children) => ({
    ...View().addClass("card"),
    children
});
