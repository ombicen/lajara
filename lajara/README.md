


# Next.js + WordPress skeleton project

This is a [Next.js](https://nextjs.org/) project configured to Acrowd standards for development against a headless WordPress CMS.

## Getting started

Install required dependencies using `yarn` by simply calling:
```bash
yarn
```

run the project using:
```bash
yarn dev
```

<br />

## Folder structure
The project is organized with a sort of modular folder structure which means that each component is placed in a folder with its common parts such as stories and testing files. The base structure looks like this:

```bash
/public
/src
    /blocks
        /[Name]
            /[Name].jsx                 # Main JSX block file.
            /[Name].stories.jsx         # Block story.
            /[Name].wordpress.jsx       # Wordpress wrapper.
            /components                 # Folder for sub-components made just for this block.
    /components
        /[Name]
            /[Name].jsx                 # Main JSX component file.
            /[Name].stories.jsx         # Component story.
    /elements
        /[Name]
            /[Name].jsx                 # Main JSX element file.
            /[Name].stories.jsx         # Element story.
    /hooks                              # Custom hooks, can be divided into sub-folders.
    /utils
/pages
    /api
    _app.js
    _document.js
    index.js
```

<br />

## Named exports & Absolute imports
The project is by default setup with a base path for absolute imports. Also all components and elements should be exported as named exports from the directory `index.js` file. The `elements` folder contains an `index.js` file that looks something like this:
```javascript
...

export * from "./Button/Button";

...
```
while the `Button.jsx` file exports its function like this:
```javascript
const Button = ({ children }) => ...

export { Button };
```
all of this is to allow for named imports ex:
```javascript
import { Button } from "src/elements";

...
```

<br />


