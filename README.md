<p align="center">
  <a href="https://github.com/shipless/play">
    <img alt="shipless" src="https://res.cloudinary.com/muhrusdi/image/upload/v1627065579/SCREENSHOT.png" width="100%" />
  </a>
</p>

# Shipless Play

Shipless Play is a React simple playground for HTML, CSS and JavaScript

[![npm (scoped)](https://img.shields.io/npm/v/@shipless/play?style=for-the-badge)](https://www.npmjs.com/package/@shipless/play)
[![npm](https://img.shields.io/npm/dt/@shipless/play?label=Download&style=for-the-badge)](https://www.npmjs.com/package/@shipless/play)
![NPM](https://img.shields.io/npm/l/@shipless/highlight?style=for-the-badge)

## Features
- ✅ Realtime preview
- ⬜️ Support SCSS
- ⬜️ Support React

## Installation

Use the package manager `yarn` or `npm` to install this package.

```bash
yarn add @shipless/play
# or
npm install @shipless/play
```

## Usage

`import` @shipless/play package suck as the following:

```js
import ShiplessPlay from "@shipless/play"

const value = {
  html: `
<div class="section">
  <div>
    <h1>Welcome to Playground</h1>
    <p> A simple playground for HTML, CSS and JavaScript</p>
    <a href="https://github.com/shipless/drafteditor">Github</a>
  </div>
</div>
  `,
  css: `
body {
  background: #97a2a9;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
}
  `,
  javascript: `
console.log("your js")  
`
}

<ShiplessPlay defaultValue={value}>
```

 Then you must import style on your css file:
 ```css
 @import url("@shipless/play/dist/style.css");
 ```

 ## Format for initial snippet

```js
{
  html: `<h1>Title</h1>`,
  css: `h1 { color: red }`,
  javascript: `console.log("this")`
}
```

 ## Demo

 [Example](https://shipless-play.netlify.app/)

 ## API

|      Props       |                          description                       |   default                                | required |
| :--------------: | :--------------------------------------------------------: | :--------------------------------------: | :------: |
|        id        |             a unique identifier for the iFrame             |                                          |   false  |
|  defaultValue    |            Initial code to be displayed                    |                                          |   true   |

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)