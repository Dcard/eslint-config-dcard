module.exports = {
  extends: './eslint.js',
  rules: {
    'react/no-deprecated': 1,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': [2, {
      ignoreStateless: true
    }],
    'react/no-unknown-property': 2,
    'react/prefer-es6-class': [2, 'always'],
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': 2,
    'react/jsx-wrap-multilines': 2,
    'react/jsx-closing-bracket-location': [2, 'after-props'],
    'react/jsx-curly-spacing': [2, 'never', {
      allowMultiline: true
    }],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-handler-names': 2,
    'react/jsx-indent-props': [2, 2],
    'react/jsx-indent': [2, 2],
    'react/jsx-key': 2,
    'react/jsx-no-bind': [2, {
      ignoreRefs: true
    }],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-tag-spacing': [2, {
      closingSlash: 'never',
      beforeSelfClosing: 'never',
      afterOpening: 'never'
    }],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-string-refs': 2,
    'react/no-unknown-property': 2,
    'react/require-render-return': 2,
    'react/style-prop-object': 2,
    'react/jsx-filename-extension': 2
  },
  plugins: ['react'],
  env: {
    browser: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
};
