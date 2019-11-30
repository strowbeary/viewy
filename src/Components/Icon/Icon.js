import "./Icon.scss"
import {View} from "../View";

export const Icon = (iconPath, size = 24) => ({
    ...View().addClass("icon"),
    setSize (size) {
        switch (size) {
            case 16:case 24:case 32:case 48:
                this.size = size;
                this.addClass("size_" + size);
                break;
            default:
                throw Error(`Size value ${size} is invalid. Authorized values : 16, 24, 32, 48.`);
        }
        return this;
    },
    render() {

    }
});
