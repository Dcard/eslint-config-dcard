module.exports = {
  extends: './eslint.js',
  rules: {
    'no-unused-expressions': 0,
    'mocha/no-exclusive-tests': 2,
    'mocha/handle-done-callback': 2
  },
  env: {
    mocha: true
  },
  plugins: ['mocha']
};
