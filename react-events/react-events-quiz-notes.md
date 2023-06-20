# react-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is an "event" in React?
  Events are actions that are triggered based on user events
- What is an "event handler"? Which component declares the handler?
  It is a function that runs when an event is triggered. It can be the component that runs the event or if access is needed on an above level of state, the parent component can declare the handler and pass it as a prop
- How do you pass an event handler to a React component?
  You pass it as a prop
- What is the naming convention for event handlers?
  Starts with handle and then the type of event such as handleClick
- What is an "event handler prop"? Which component declares the prop?
  It is the prop that determines when the event should be run. It should be passed on the appropriate element that should trigger the event
- What are some custom event handler props a component may wish to define?
  custom click events
- What is the naming convention for custom event handler props?
  handleCustomEvent

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
