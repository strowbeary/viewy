# Viewy
[![Build Status](https://ci.remicaillot.fr/api/badges/webcraftman/uikit/status.svg)](https://ci.remicaillot.fr/webcraftman/uikit)

https://www.npmjs.com/package/viewy

A UI toolkit that combine the advantages of a design system and an ui library.

- Customizable theme via config file (planned)
- Pure JS API
- For small and more complex projects

## Installation
`npm i viewy`

Viewy is an ES6 module, it is best to use parcel bundler with it or no bundler at all.

## Example
### Create an app
createApp function will mount your app.
with:
```javascript
import { createApp, View } from "viewy";
createApp(
        "app", // Mounting node id
        () => View() // Root view
);
```
you get:
```html
<div id="app">
  <div class="view"></div>
</div>
```

### Declare and use a component
```javascript
// MyComponent.js
import { component } from "viewy";
export default component({
  name: "my-component",
  async initState() {
    return {
      asyncData: await fetch(),
      syncData: "Hello"
    }
  },
  view() {
    return VStack(
            Text(this.asyncData, TEXT_STYLE.body1),
            Text(this.syncData, TEXT_STYLE.body1),
            Button({
              label: "Change sync data",
            })
                    .on("click", () => {
                      this.syncData = "Goodbye"
                    })
    )
  }
})
// index.js
import MyComponent from "./MyComponent";

createApp(
        "app", // Mounting node id
        () => MyComponent() // Root view
);
```

## Features
- Router
  - Route guard
  - Named route by default
- Form validation
