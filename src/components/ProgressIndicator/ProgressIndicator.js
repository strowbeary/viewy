import "./ProgressIndicator.scss";
import {View} from "../..";
import {elementVoid} from "incremental-dom";
import {bind_class} from "../../utils/bind_class.util";
const content = `<svg class="lds-spinner" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="rotate(0 50 50)">
  <rect x="46" y="6" rx="29.44" ry="3.84" width="8" height="20" fill="currentColor">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2s" begin="-1.0999999999999999s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(30 50 50)">
  <rect x="46" y="6" rx="29.44" ry="3.84" width="8" height="20" fill="currentColor">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2s" begin="-1s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(60 50 50)">
  <rect x="46" y="6" rx="29.44" ry="3.84" width="8" height="20" fill="currentColor">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2s" begin="-0.8999999999999999s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(90 50 50)">
  <rect x="46" y="6" rx="29.44" ry="3.84" width="8" height="20" fill="currentColor">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2s" begin="-0.7999999999999999s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(120 50 50)">
  <rect x="46" y="6" rx="29.44" ry="3.84" width="8" height="20" fill="currentColor">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2s" begin="-0.7000000000000001s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(150 50 50)">
  <rect x="46" y="6" rx="29.44" ry="3.84" width="8" height="20" fill="currentColor">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2s" begin="-0.6s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(180 50 50)">
  <rect x="46" y="6" rx="29.44" ry="3.84" width="8" height="20" fill="currentColor">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2s" begin="-0.5s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(210 50 50)">
  <rect x="46" y="6" rx="29.44" ry="3.84" width="8" height="20" fill="currentColor">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2s" begin="-0.39999999999999997s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(240 50 50)">
  <rect x="46" y="6" rx="29.44" ry="3.84" width="8" height="20" fill="currentColor">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2s" begin="-0.3s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(270 50 50)">
  <rect x="46" y="6" rx="29.44" ry="3.84" width="8" height="20" fill="currentColor">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2s" begin="-0.19999999999999998s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(300 50 50)">
  <rect x="46" y="6" rx="29.44" ry="3.84" width="8" height="20" fill="currentColor">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2s" begin="-0.09999999999999999s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(330 50 50)">
  <rect x="46" y="6" rx="29.44" ry="3.84" width="8" height="20" fill="currentColor">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2s" begin="0s" repeatCount="indefinite"></animate>
  </rect>
</g></svg>
`;
export const ProgressIndicator = (size = 24) => {
    return {
        ...View()
            .addClass("progress-indicator"),
        render () {

            this.viewStyle.width = `${size / 16}rem`;
            this.viewStyle.height = `${size / 16}rem`;
            const el = elementVoid(
                this.renderedTagName,
                null,
                null,
                "style", this.viewStyle,
                "class", bind_class(this.classList, 'view'),
                ...this.customAttributes
            );

            if (el.__cachedInnerHtml !== content) {
                el.__cachedInnerHtml = content;
                el.innerHTML = content;
            }
            if(el.firstChild) {
                el.firstChild.setAttribute("width", `100%`);
                el.firstChild.setAttribute("height", `100%`);
                el.firstChild.setAttribute("stroke-width", 3);
            }
            return el;
        }
    }
};
