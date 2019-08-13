import {View} from "../View";
import {html} from "lighterhtml";
import {render_controller} from "../../Controllers/RenderController";

export const Segment = (action = () => {},...items) => ({
    ...View().addClass("segment"),
    selectedItem: 0,
    select(itemValue) {
        this.selectedItem = items.findIndex(([value]) => {
            return value === itemValue;
        });
        return this;
    },
    padding() {
        throw Error("padding can't be set on Segment view");
    },
    get children() {
        return this.items.map(([value, view], i) => ({
            ...View(),
            classList: {
                item: true,
                selected: i === this.selected_item
            },
            render() {
                return html`
                <div 
                    onclick="${() => {
                    this.select(value);
                    this.action(value);
                    render_controller.render();
                }}"
                >
                    ${view.render()}
                </div>
            `;
            }
        }))
    }
});
