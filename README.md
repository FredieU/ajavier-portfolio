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

Once the files are built, deployment is done through Firebase. Run `yarn deploy` to use Firebase to deploy the contents of `dist`.
