
# Simple JS App Skeleton

Here's an app skeleton that binds together common frameworks du-jour:

* [Babel](https://babeljs.io/)
* [React Semantic UI](http://react.semantic-ui.com/)
* [Webpack](http://webpack.github.io/)
* [ES6](https://babeljs.io/docs/learn-es2015/)
* [React](https://facebook.github.io/react/)
* [React Router](https://github.com/reactjs/react-router)
* [Redux](https://redux.js.org/)
* [Redux Form](https://redux-form.com)
* [Eslint](https://eslint.org/)

_Note: The purpose of this skeleton is to provide a simple UI skeleton that can be supplemented with backend/deployment specific tools (Node, Ethereum, Mobile, etc)._

## Other Features

* Seemless pushState routing using React Router
* Uses Webpack/HTMLWebpackPlugin to generate an index.html that has cache friendly bundle loaders
* All CSS and assets served via Webpack/StyleLoader
* Uses Semantic UI as a rich UI element base
* Bundles are split between vendor and app for better bundling/loading performance
* Uses ES6 style React components
* Code hotswapping

## Install Dependencies

Run in the project root folder:

```bash
yarn install
```

## Run

The following command serves all HTML/JS/CSS and watches all changes to `src/*.js`

```bash
yarn start
```

UI is running at [http://localhost:3000/](http://localhost:3000/)

## Directory Structure

* `package.json` - Configure dependencies
* `webpack.config.js` - Bundling and build configuration
* `dist/*` - Files generated by webpack, incuding index.html. These are the assets that should be HTTP served
* `src/utils` - Home of specific JS helper utilities like for example `request.js` for doing API requests
* `src/components` - Home of all React components
* `src/containers/*` - Components that are tightly coupled to the app pages
* `src/index.js` - Main entrypoint into application. Multi-app or sub-domain specific apps/logic could be implemented here.

## TODO

- [ ] Lint
- [ ] Clean up utils
- [ ] Finalize directory structure
- [ ] Add user state (name in dropdown menu)
- [ ] Use redux for user state
- [ ] Hook up reset password flow
- [ ] Focus first input box on load for forms
