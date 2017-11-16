module.exports = {
  extends: './eslint.js',
  rules: {
    "jest/no-focused-tests": 2,
    "jest/no-identical-title": 2,
    "jest/prefer-to-have-length": 1,
    "jest/valid-expect": 2
  },
  env: {
    jest: true
  },
  plugins: ['jest']
};
