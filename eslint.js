module.exports = {
  extends: 'eslint:recommended',
  rules: {
    'no-console': 0,
    'no-var': 2,
    'no-path-concat': 2,
    'handle-callback-err': 2,
    'no-use-before-define': [2, 'nofunc'],
    'no-undefined': 2,
    'no-shadow-restricted-names': 2,
    'block-scoped-var': 2,
    'dot-notation': 2,
    'eqeqeq': [2, 'allow-null'],
    'no-else-return': 1,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-implied-eval': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new-wrappers': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-throw-literal': 2,
    'no-unused-expressions': [2, {
      allowShortCircuit: true,
      allowTernary: true
    }],
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-with': 2,
    'radix': 2,
    'no-self-compare': 2,
    'no-unused-vars': [2, {
      vars: 'all',
      args: 'none'
    }],
    'strict': [2, 'global'],
    'require-yield': 0,
    'indent': [2, 2, {
      SwitchCase: 1
    }],
    'quotes': [2, 'single'],
    'jsx-quotes': [2, 'prefer-single'],
    'semi': [2, 'always'],
    'no-empty': [2, {
      allowEmptyCatch: true
    }],
    'brace-style': [2, '1tbs', {
      allowSingleLine: true
    }],
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': 2,
    'one-var': [2, {
      uninitialized: 'always',
      initialized: 'never'
    }],
    'dot-location': [2, 'property'],
    'operator-linebreak': [2, 'before'],
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true
    }],
    'space-unary-ops': [2, {
      words: false,
      nonwords: false
    }],
    'comma-spacing': [2, {
      before: false,
      after: true
    }],
    'semi-spacing': [2, {
      before: false,
      after: true
    }],
    'func-call-spacing': [2, 'never'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'comma-dangle': [2, 'never'],
    'no-trailing-spaces': 2,
    'yoda': [2, 'never'],
    'camelcase': 2,
    'comma-style': [2, 'last'],
    'curly': [2, 'multi-line', 'consistent'],
    'func-style': [2, 'declaration', {
      allowArrowFunctions: true
    }],
    'eol-last': 2,
    'wrap-iife': 2,
    'space-infix-ops': 2,
    'keyword-spacing': [2, {
      before: true,
      after: true
    }],
    'space-before-blocks': [2, 'always'],
    'no-extra-parens': [2, 'all', {
      ignoreJSX: 'all',
      conditionalAssign: false,
      returnAssign: false,
      nestedBinaryExpressions: false
    }],
    'no-unsafe-negation': 2,
    'array-callback-return': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-extra-label': 2,
    'no-implicit-globals': 2,
    'no-new-func': 2,
    'no-new': 2,
    'no-proto': 2,
    'no-sequences': 2,
    'no-useless-escape': 2,
    'no-useless-return': 2,
    'no-void': 2,
    'prefer-promise-reject-errors': 2,
    'no-label-var': 2,
    'no-undef-init': 2,
    'array-bracket-spacing': [2, 'never'],
    'computed-property-spacing': [2, 'never'],
    'block-spacing': [2, 'always'],
    'consistent-this': 2,
    'func-name-matching': [2, 'always'],
    'lines-around-comment': [2, {
      beforeBlockComment: true
    }],
    'new-cap': 2,
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-unneeded-ternary': 2,
    'no-whitespace-before-property': 2,
    'spaced-comment': [2, 'always'],
    'template-tag-spacing': [2, 'never'],
    'unicode-bom': [2, 'never'],
    'arrow-spacing': 2,
    'generator-star-spacing': [2, 'after'],
    'no-confusing-arrow': [2, {
      allowParens: true
    }],
    'no-duplicate-imports': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': 2,
    'prefer-const': 1,
    'rest-spread-spacing': [2, 'never'],
    'template-curly-spacing': [2, 'never'],
    'yield-star-spacing': [2, 'after'],
    'no-mixed-operators': 2
  },
  env: {
    node: true,
    es6: true
  }
};
