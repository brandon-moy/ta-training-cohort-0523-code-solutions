# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
  npm is a software registry where open source developers share and use packages to assist with development
- What is a package?
  it is like a bundle of code with a specific purpose
- What are some other popular package managers?
  Yarn
- How can you create a `package.json` with `npm`?
  npm init
- What is a dependency and how do you add one to a package?
  They are packages required by your application in production. You add it by installing using `npm i package-name` or full is `npm install package-name`
- What happens when you add a dependency to a package with `npm`?
  It creates a node_modules directory if there isn't one already and downloads all necessary files

- What is a devDependency and how do you add one to a package?
  devDependencies are packages only needed for local development and testing. You use the --save-dev tag or -D to save as a devDependency
- How do you define and run `npm` scripts? Why are these useful?
  You add them to a scripts tag. You can use them to have keywords for different tasks such as starting a dev server or running tests

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
