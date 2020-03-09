# JavaScript Linting

**THIS MODULE IS DEPRECATED** Please switch to semistandard or standard for linting.

The baseline configuration for linting JavaScript files using [eslint](http://eslint.org/) is contained in this module. The explicitly specified settings in this file are mostly non-defaults values. In a few potentially controversial cases, a value matching the default has been explicitly specified so readers considering altering the value are aware that an explicit decision was made to use it.

## Usage

Install this module as a `devDependency` and reference it from your eslint configuration. Here's one way to install the module and reference it from a repo-local eslint YAML file:

```
npm i 360incentives/eslint-config-base -D
echo 'extends: base' > .eslintrc
```

The base configuration is not optimized for linting tests. Instead of declaring globals  like `describe`, `it` and `before` in each test file, create an override `.eslintrc` file inside your `test` directory which is configured for the `mocha` test environment.

```
echo '
env:
  mocha: true
' > ./test/.eslintrc
```

## Additional linting configurations

For linting React JSX files see the [360incentives/eslint-config-react](https://github.com/360incentives/eslint-config-react) module
