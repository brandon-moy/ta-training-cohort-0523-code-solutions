# es6-destructuring-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is destructuring, conceptually?

- What is the syntax for `Object` destructuring?

Variable keyword (var, let, or const) curly brackets with names of properties to destructure into variables inside, assignment operator, object on right side of assignment operator

eg.
const fullName = {
firstName: 'Brandon',
lastName: 'Moy'
}

const { firstName, lastName } = fullName

- What is the syntax for `Array` destructuring?

Variable keyword (var, let, or const) square brackets with names of variables to create inside using position as array index (or comma to skip), assignment operator, object on right side of assignment operator

eg.
const names = [
'Brandon',
'Brett',
'Shawn',
]

const [ brandon, brett, shawn ] = names;

- How can you tell the difference between destructuring and creating `Object`/`Array` literals?

Square brackets versus curly brackets

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
