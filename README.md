# seng-keycodes

Contains the key codes as static values for keys on your keyboard. Useful for auto completion and readability.

[![Travis](https://img.shields.io/travis/mediamonks/seng-boilerplate.svg?maxAge=2592000)](https://travis-ci.org/mediamonks/seng-boilerplate)
[![Code Climate](https://img.shields.io/codeclimate/github/mediamonks/seng-boilerplate.svg?maxAge=2592000)](https://codeclimate.com/github/mediamonks/seng-boilerplate)
[![Coveralls](https://img.shields.io/coveralls/mediamonks/seng-boilerplate.svg?maxAge=2592000)](https://coveralls.io/github/mediamonks/seng-boilerplate?branch=master)
[![npm](https://img.shields.io/npm/v/seng-boilerplate.svg?maxAge=2592000)](https://www.npmjs.com/package/seng-boilerplate)
[![npm](https://img.shields.io/npm/dm/seng-boilerplate.svg?maxAge=2592000)](https://www.npmjs.com/package/seng-boilerplate)

## Installation

```sh
yarn add seng-keycodes
```

```sh
npm i -S seng-keycodes
```


## Basic Usage

```ts
import SengKeycodes from 'seng-keycodes';
// import SengKeycodes from 'seng-keycodes/lib/classname';

// do something with SengKeycodes
```


## Building

In order to build seng-keycodes, ensure that you have [Git](http://git-scm.com/downloads)
and [Node.js](http://nodejs.org/) installed.

Clone a copy of the repo:
```sh
git clone https://github.com/mediamonks/seng-keycodes.git
```

Change to the seng-keycodes directory:
```sh
cd seng-keycodes
```

Install dev dependencies:
```sh
yarn
```

Use one of the following main scripts:
```sh
yarn build            # build this project
yarn dev              # run compilers in watch mode, both for babel and typescript
yarn test             # run the unit tests incl coverage
yarn test:dev         # run the unit tests in watch mode
yarn lint             # run eslint and tslint on this project
yarn doc              # generate typedoc documentation
```

When installing this module, it adds a pre-commit hook, that runs lint and prettier commands
before committing, so you can be sure that everything checks out.


## Contribute

View [CONTRIBUTING.md](./CONTRIBUTING.md)


## Changelog

View [CHANGELOG.md](./CHANGELOG.md)


## Authors

View [AUTHORS.md](./AUTHORS.md)


## LICENSE

[MIT](./LICENSE) © MediaMonks

