# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?

Variable keyword, function name, assignment operator, parenthesis for 0 or 1+ parameters, arrow, curly brackets for function code block

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?

It returns the result of the expression that is on the same line as the return statement is implied

- When using _concise body syntax_, how do you return an object literal?

You wrap the object literal in parenthesis

- In the expression

  ```js
  foo(() => 42);
  ```

  - Identify the arrow function
    () => 42
  - How many arguments does the arrow function take?
    0
  - What value does it return?
    Why doesn't this log? - because the function regardless of input returns the console log
  - How many arguments are passed to the function `foo`?
    1
  - What type of argument is passed to the function `foo`?
    an arrow function

- In the expression

  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```

  - Identify the arrow function
    (y) => {
    console.log(`4y = ${4 * y}`);
    }
  - How many arguments does the arrow function take?
    1
  - What value does it return?
    it returns undefined, nothing being returns from the function
  - How many arguments are passed to the function `bar`?
    1
  - What type of argument is passed to the function `bar`?
    an arrow function
  - When does the arrow function's code get executed?
    When the bar function is called?

- How does the value of `this` differ between standard functions and arrow functions?
  Standard: defined when the function is called
  Arrow function: taken from lexical scope

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
