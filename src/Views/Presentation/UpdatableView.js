import {UIView} from "../View";

export function UpdatableView(view_builder) {
    return new class extends UIView {
        constructor (view_builder) {
            super();
            this.view_buidler = view_builder;
            this.persistent_id =  Math.random().toString(36).substring(7);
        }

        render() {
            return this.view_buidler(this.persistent_id).render();
        }
    }(view_builder);
}
