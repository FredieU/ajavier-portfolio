# Portfolio website for photography & videography

## Local dev setup

1. Install dependencies with `yarn` or `npm i`
2. Start the development server with `yarn start`
3. Happy coding!

## Build

Webpack is used to generate the following files in a `dist` directory:

```
dist
  |- index.html
  |- index.js
  |- manifest.json
```

Run `yarn build` to remove the current `dist` directory and its contents (if present) and build these again from `src`.

## Deploy

Run `yarn deploy` to rebuild the project and uses Firebase to deploy the contents of `dist` to the hosting project.
