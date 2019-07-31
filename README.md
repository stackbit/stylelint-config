# stylelint-config [![NPM version](https://img.shields.io/npm/v/@stackbit/stylelint-config.svg)](https://www.npmjs.com/package/@stackbit/stylelint-config)

Stackbit's shareable config for stylelint

## Installation

Install [stylelint](https://stylelint.io/), [prettier](https://github.com/prettier/prettier) and `@stackbit/stylelint-config`:

```
npm install stylelint prettier @stackbit/stylelint-config --save-dev
```

## Usage
Stackbit's stylelint rules come bundled in `@stackbit/stylelint-config`. To enable these rules, add a `stylelint` property in your `package.json`. See the [stylelint configuration docs](https://stylelint.io/user-guide/configuration/) for more details.
```
"stylelint": {
  "extends": ["@stackbit/stylelint-config"]
}
```

Now you can run stylelint by adding the following linting script to your `package.json`. See the [stylelint CLI docs](https://stylelint.io/user-guide/cli/) for more details.
```
"scripts": {
  "lint:css": "stylelint '**/*.{css,scss}'"
}
```
Run it:

```
npm run lint:css
```

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)
