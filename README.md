# Viewy
A UI toolkit that combine the advantages of a design system and an ui library.

- Customizable theme via config file (planned)
- Pure JS API
- For small and more complex projects

## Example
### Bootstrapping app
```javascript
createApp(
    "app", // Mounting node id
    () => View() // Root view
);
```
```html
<div id="app">
    <div class="view"></div>
</div>
```

### Component
```javascript
// MyComponent.js
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
