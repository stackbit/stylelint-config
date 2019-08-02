# stylelint-config [![NPM version](https://img.shields.io/npm/v/@stackbit/stylelint-config.svg)](https://www.npmjs.com/package/@stackbit/stylelint-config)

Stackbit's [shareable config](https://stylelint.io/user-guide/configuration#extends) for [stylelint](https://stylelint.io/)

## Installation

Install stylelint and `@stackbit/stylelint-config`:

```
npm install --save-dev stylelint @stackbit/stylelint-config
```

### Prettier

`@stackbit/eslint-config` should be used in conjunction with [Prettier](https://prettier.io/). See the [`@stackbit/prettier-config` installation guide](https://github.com/stackbithq/prettier-config#installation) for more details.

## Usage
Stackbit's stylelint rules come bundled in `@stackbit/stylelint-config`. To enable these rules, add a `stylelint` property in your `package.json`. See the [stylelint configuration docs](https://stylelint.io/user-guide/configuration/) for more details.

```
"stylelint": {
  "extends": ["@stackbit/stylelint-config"]
}
```

Now you can run stylelint by adding the following scripts to your `package.json`. See the [stylelint CLI docs](https://stylelint.io/user-guide/cli/) for more details.

```
"scripts": {
  "lint:css": "stylelint '**/*.{css,scss}'",
  "format:css": "npm run lint:css -- --fix"
}
```

Lint it:

```
npm run lint:css
```

Format it:

```
npm run format:css
```

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)
