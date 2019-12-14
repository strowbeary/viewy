import {View} from "../View";
import "./Card.scss";
export const Card = (...children) => ({
    ...View().addClass("card"),
    children
});
