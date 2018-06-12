# F1 Statistics [![Build Status](https://travis-ci.com/sparkbuzz/react-formula1.svg?branch=master)](https://travis-ci.com/sparkbuzz/react-formula1)

This app displays some Formula 1 racing statistics, using the [Ergast Developer API](http://ergast.com/mrd/).

# About the app

The application fetches data from the Ergast Developer API and caches data in the browsers local storage. Successive 
fetches are done from local storage, thus preventing any possible rate limiting imposed by the API. 
This also helps improve application performance.

# Architecture

The primary project stack includes:

  - React 16.4
  - Redux 4
  - WebPack 4 + Babel
  - Jest + Enzyme
  
Source code style guid uses a relaxed version of the AirBNB coding standard.

# Demo

The project is built and deployed to GitHub Pages, and can be viewed at 
https://sparkbuzz.github.io/react-formula1

# Yarn/NPM scripts

The following Yarn scripts are a available for this project.

| Command | Description |
| ------- | ----------- |
| `yarn start` | Starts Webpack Dev Server on `https://localhost:9000` |
| `yarn build` | Performs a production build and outputs the results to `./build` |
| `yarn deploy` | Deploys the built content in `./build` to GitHub Pages. |
| `yarn test` | Runs the unit test suite. |
| `yarn lint` | Run Eslint to check code quality. |

### Disclaimer

This project might at times not work 100%, it might also not be safe to use in production. Use at your own discretion.

Suggestions and pull requests are welcome.
