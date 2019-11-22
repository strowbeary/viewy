import { patch } from "incremental-dom";

export async function render(node, callback) {
    const renderResult = await callback();
    patch(node, () => renderResult.render(), {});
}
