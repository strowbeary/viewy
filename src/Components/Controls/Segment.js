import {View} from "../View";
import "./Segment.scss"

export const Segment = (action = () => {}, ...items) => ({
    ...View().addClass("segment"),
    selectedItem: 0,
    select (itemValue) {
        this.selectedItem = items.findIndex(({value}) => {
            return value === itemValue;
        });
        return this;
    },
    padding () {
        throw Error("padding can't be set on Segment view");
    },
    get children () {
        const select = (i) => this.select(i);
        return items.map(({value, label}, i) => ({
            ...View(),
            classList: {
                item: true,
                selected: i === this.selectedItem
            },
            children: [label],
            onclick (e) {
                select(value);
                action(value);
            }
        }))
    }
});
