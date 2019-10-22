import domdiff from 'domdiff/esm';
let firstRender = true;
let currentNodes = [];
export function render(node, callback) {
        currentNodes = domdiff(
            node,
            currentNodes,
            [callback().render()]
        );
        console.log(currentNodes);

}
