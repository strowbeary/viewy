export function box_arguments_behavior([top, right, bottom, left]) {
    if (
        typeof top === "number" &&
        typeof right === "number" &&
        typeof bottom === "undefined" &&
        typeof left === "undefined"
    ) {
        bottom = top;
        left = right;
    } else if (typeof right === "undefined" && typeof bottom === "undefined" && typeof left === "undefined") {
        bottom = top;
        right = top;
        left = top;
    }
    return [top, right, bottom, left];
}
