module.exports = {
  plugins: ['@typescript-eslint'],

  rules: {
    // Enforce consistent brace style for blocks
    // https://typescript-eslint.io/rules/brace-style
    // prettier
    '@typescript-eslint/brace-style': 'off',

    // Require or disallow trailing comma
    // https://typescript-eslint.io/rules/comma-dangle
    // prettier
    '@typescript-eslint/comma-dangle': 'off',

    // Enforces consistent spacing before and after commas
    // https://typescript-eslint.io/rules/comma-spacing
    // prettier
    '@typescript-eslint/comma-spacing': 'off',

    // Enforce default parameters to be last
    // https://typescript-eslint.io/rules/default-param-last
    '@typescript-eslint/default-param-last': 'off',

    // enforce dot notation whenever possible
    // https://typescript-eslint.io/rules/dot-notation
    '@typescript-eslint/dot-notation': 'off',

    // Require or disallow spacing between function identifiers and their invocations
    // https://typescript-eslint.io/rules/func-call-spacing
    // prettier
    '@typescript-eslint/func-call-spacing': 'off',

    // Enforce consistent indentation
    // https://typescript-eslint.io/rules/indent
    // prettier
    '@typescript-eslint/indent': 'off',

    // require or disallow initialization in variable declarations
    // https://typescript-eslint.io/rules/init-declarations
    '@typescript-eslint/init-declarations': 'off',

    // Enforce consistent spacing before and after keywords
    // https://typescript-eslint.io/rules/keyword-spacing
    // prettier
    '@typescript-eslint/keyword-spacing': 'off',

    // Require or disallow an empty line between class members
    // https://typescript-eslint.io/rules/lines-between-class-members
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: false },
    ],

    // Disallow generic `Array` constructors
    // https://typescript-eslint.io/rules/no-array-constructor
    '@typescript-eslint/no-array-constructor': 'error',

    // Disallow duplicate class members
    // https://typescript-eslint.io/rules/no-dupe-class-members
    '@typescript-eslint/no-dupe-class-members': 'off',

    // Disallow duplicate imports
    // https://typescript-eslint.io/rules/no-duplicate-imports
    '@typescript-eslint/no-duplicate-imports': 'off',

    // Disallow empty functions
    // https://typescript-eslint.io/rules/no-empty-function
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods'],
      },
    ],

    // Disallow unnecessary parentheses.
    // https://typescript-eslint.io/rules/no-extra-parens
    // prettier
    '@typescript-eslint/no-extra-parens': 'off',

    // Disallow unnecessary semicolons
    // https://typescript-eslint.io/rules/no-extra-semi
    // prettier
    '@typescript-eslint/no-extra-semi': 'off',

    // Disallow the use of `eval()`-like methods
    // https://typescript-eslint.io/rules/no-implied-eval
    '@typescript-eslint/no-implied-eval': 'off',

    // Disallow `this` keywords outside of classes or class-like objects
    // https://typescript-eslint.io/rules/no-invalid-this
    '@typescript-eslint/no-invalid-this': 'off',

    // Disallow function declarations that contain unsafe references inside loop statements
    // https://typescript-eslint.io/rules/no-loop-func
    '@typescript-eslint/no-loop-func': 'off',

    // Disallow literal numbers that lose precision
    // https://typescript-eslint.io/rules/no-loss-of-precision
    '@typescript-eslint/no-loss-of-precision': 'error',

    // Disallow magic numbers
    // https://typescript-eslint.io/rules/no-magic-numbers
    '@typescript-eslint/no-magic-numbers': [
      'off',
      {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],

    // Disallow variable redeclaration
    // https://typescript-eslint.io/rules/no-redeclare
    '@typescript-eslint/no-redeclare': 'off',

    // Disallow specified modules when loaded by `import`
    // https://typescript-eslint.io/rules/no-restricted-imports
    '@typescript-eslint/no-restricted-imports': 'off',

    // Disallow variable declarations from shadowing variables declared in the outer scope
    // https://typescript-eslint.io/rules/no-shadow
    '@typescript-eslint/no-shadow': 'warn',

    // Disallow throwing literals as exceptions
    // https://typescript-eslint.io/rules/no-throw-literal
    '@typescript-eslint/no-throw-literal': 'off',

    // Disallow unused expressions
    // https://typescript-eslint.io/rules/no-unused-expressions
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
        enforceForJSX: true,
      },
    ],

    // Disallow unused variables
    // https://typescript-eslint.io/rules/no-unused-vars
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      },
    ],

    // Disallow the use of variables before they are defined.
    // https://typescript-eslint.io/rules/no-use-before-define
    '@typescript-eslint/no-use-before-define': [
      'off',
      { functions: true, classes: true, variables: true },
    ],

    // Disallow unnecessary constructors
    // https://typescript-eslint.io/rules/no-useless-constructor
    '@typescript-eslint/no-useless-constructor': 'error',

    // Enforce consistent spacing inside braces
    // https://typescript-eslint.io/rules/object-curly-spacing
    // prettier
    '@typescript-eslint/object-curly-spacing': 'off',

    // require or disallow padding lines between statements
    // https://typescript-eslint.io/rules/padding-line-between-statements
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: ['return', 'interface', 'type'] },
    ],

    // Enforce the consistent use of either backticks, double, or single quotes
    // https://typescript-eslint.io/rules/quotes
    // prettier
    '@typescript-eslint/quotes': 'off',

    // Enforces consistent returning of awaited values
    // https://typescript-eslint.io/rules/return-await
    '@typescript-eslint/require-await': 'off',

    // Enforces consistent returning of awaited values
    // https://typescript-eslint.io/rules/return-await
    '@typescript-eslint/return-await': 'off',

    // Require or disallow semicolons instead of ASI
    // https://typescript-eslint.io/rules/semi
    // prettier
    '@typescript-eslint/semi': 'off',

    // Enforces consistent spacing before blocks
    // https://typescript-eslint.io/rules/space-before-blocks
    // prettier
    '@typescript-eslint/space-before-blocks': 'off',

    // Enforces consistent spacing before function parenthesis
    // https://typescript-eslint.io/rules/space-before-function-paren
    // prettier
    '@typescript-eslint/space-before-function-paren': 'off',

    // This rule is aimed at ensuring there are spaces around infix operators
    // https://typescript-eslint.io/rules/space-infix-ops
    // prettier
    '@typescript-eslint/space-infix-ops': 'off',
  },
};
