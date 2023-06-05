# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  They can be used to evaluate if both or either statements are true and can be used to assign default values outside of if statements
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  For && it does not apply because both need to be evaluated as true but for ||, if the first case is true it will not even look at the second case
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  ?? only returns the right hand operand when the left side is null or undefined (otherwise returns the null or undefined) whereas the || will return the right side as the default value
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  It is basically a different way of running an if/else statement. If else is a block of code and a ternary is a single statement
- What is the `?.` (optional chaining) operator? When would you use it?
  It short circuits and evaluates to undefined if an object property or function call is undefined or null. Good for exploring content of an object when we don't know what properties are guaranteed
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  It is used to make shallow copies of arrays or objects. You use the ... inside of square brackets for an array or inside curly braces for an object
- What data types can be spread into an array? Into an object?
  Numbers, strings, boolean, null, undefined, arrays, and objects

- How does spread syntax differ from rest syntax?

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
