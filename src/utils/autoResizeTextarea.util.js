export function autoSize(el) {
    const measurment_div = document.createElement("div");
    measurment_div.style.border = "2px solid black";
    measurment_div.style.opacity = 0;
    measurment_div.style.pointerEvents = "none";
    measurment_div.style.position = "absolute";
    measurment_div.style.bottom = 0;
    measurment_div.style.right = 0;
    measurment_div.style.wordWrap = "break-word";
    const {
        fontFamily,
        fontSize,
        fontWeight,
        width,
        paddingLeft,
        paddingRight,
        paddingBottom,
        paddingTop,
    } = getComputedStyle(el);
    measurment_div.style.fontFamily = fontFamily;
    measurment_div.style.fontSize = fontSize;
    measurment_div.style.fontWeight = fontWeight;
    measurment_div.style.maxWidth = width;
    measurment_div.style.paddingLeft = paddingLeft;
    measurment_div.style.paddingRight = paddingRight;
    measurment_div.style.paddingBottom = paddingBottom;
    measurment_div.style.paddingTop = paddingTop;
    measurment_div.innerHTML = el.value.replace(/\n/gi, '<br>') + '<br>h';
    document.body.appendChild(measurment_div);
    const measured_style = getComputedStyle(measurment_div);
    el.style.height = measured_style.height;
    document.body.removeChild(measurment_div);
}
