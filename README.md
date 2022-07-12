# eslint-config-dcard

ESLint config for Dcard projects

## Installation

``` bash
# Install peer dependencies
yarn add @next/eslint-plugin-next @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-node eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unicorn -D
# Install eslint-config-dcard
yarn add eslint-config-dcard -D
```

## Usage

In `.eslintrc.cjs`

``` js
module.exports = {
  extends: 'dcard/base',

  // Extends config for specific files
  overrides: [
    {
      files: ['*.tsx'],
      extends: ['dcard/react'],
    },
    {
      files: ['*.test.tsx'],
      extends: ['@dcard/eslint-config/jest'],
    },
    // ...
  ]
}
```

## Supported Configurations

- `dcard/base`
- `dcard/react`
- `dcard/jest`
- `dcard/next`

## License

MIT
