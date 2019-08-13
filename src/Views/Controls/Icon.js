import {View} from "../View";

export const Icon = (iconName) => ({
    ...View().addClass("icon"),
    size: 24,
    setSize (size) {
        switch (size) {
            case 18:case 24:case 36:case 48:
                this.size = size;
                this.add_class("size_" + size);
                break;
            default:
                throw Error(`Size value ${size} is invalid. Authorized values : 18, 24, 36, 48.`);
        }
        return this;
    }
});
