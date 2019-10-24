import { patch } from "incremental-dom";

export function render(node, callback) {
    patch(node, () => callback().render(), {});
}
