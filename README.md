
# Charter Challenge

Basic Charter challenge found at (https://github.com/d3r1v3d/charter-dynexp-challenge). Recreated the core graphql connectivity in my own way with sagas, leveraging my own boilerplate to get started.

This project was bootstrapped with [Greenfield](https://github.com/bfillmer/greenfield).

## Requred Modifications to Run

In order to get the application up and running you will need to create a `.env.local` file within the root directory with the following variables:

```bash
REACT_APP_PAT= # Personal access token with read access to the user's repositories.
REACT_APP_USER= # Username whose repositories we would like to view.
```

## Commands

```bash
yarn start # development server
yarn build # production build
yarn test # Jest in watch-mode
yarn coverage # Jest coverage report
yarn lint # fix basic linting errors
```

## Overview

* Commands include `NODE_PATH` to leverage absolute pathing to `src/` for cleaner imports.
* `standardjs` linting (https://standardjs.com/)
* `styled-components` css-in-js (https://www.styled-components.com)
* `redux-first-router` routing as state (https://github.com/faceyspacey/redux-first-router)
* `redux-saga` side-effects (https://redux-saga.js.org/)
* `redux-actions` simplify actions boilerplate (https://github.com/acdlite/redux-actions)
* `redux-data-structures` simplify reducer boilerplate (https://redux-data-structures.js.org/)
* `axios` just-works http client (https://github.com/axios/axios)

## Notes on Routing

Routes are state. In this implementation that state is stored in Redux and managed primarily by `redux-first-router`. There are three mappings of route state, the impelmentation of actual browser url to type (`state/routes`), the mapping of types to UI components (`view/Routes`), and the mapping of types to sagas for side-effects (`state/sagas/routes`).
