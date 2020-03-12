# Portfolio website for photography & videography

## Local dev setup

1. Install dependencies with `yarn`
2. Start the development server with `yarn start`
3. Happy coding!

## Build

Webpack is used to generate the following files in a `dist` directory:

```
dist
  |_ index.html
  |_ index.js
  |_ manifest.json
  |_ robots.txt
```

Run `yarn build` to remove the current `dist` directory and its contents (if present) and rebuild these from `src`.

## Deploy

Run `yarn deploy` to use Firebase to deploy the contents of `dist` to the hosting project.
