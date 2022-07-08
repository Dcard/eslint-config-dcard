module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    jsxPragma: null, // for @typescript/eslint-parser
  },

  extends: [
    './rules/base/suggestions',
    './rules/base/possible-problems',
    './rules/base/layout-formatting',
    './rules/import/all',
    './rules/node/all',
    './rules/typescript/all',
    './rules/typescript/extension',
    './rules/unicorn/all',
  ],
};
