module.exports = {
  rules: {
    // enforce `return` statements in callbacks of array methods
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': ['error', { allowImplicit: true }],

    // require `super()` calls in constructors
    // https://eslint.org/docs/rules/constructor-super
    // ts(2335) & ts(2377)
    'constructor-super': 'off',

    // enforce "for" loop update clause moving the counter in the right direction.
    // https://eslint.org/docs/rules/for-direction
    'for-direction': 'error',

    // enforce `return` statements in getters
    // https://eslint.org/docs/rules/getter-return
    // ts(2378)
    'getter-return': 'off',

    // disallow using an async function as a Promise executor
    // https://eslint.org/docs/rules/no-async-promise-executor
    'no-async-promise-executor': 'error',

    // disallow `await` inside of loops
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'off',

    // disallow reassigning class members
    // https://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'error',

    // disallow comparing against -0
    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'error',

    // disallow assignment operators in conditional expressions
    // https://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': ['error', 'except-parens'],

    // disallow reassigning `const` variables
    // https://eslint.org/docs/rules/no-const-assign
    // ts(2588)
    'no-const-assign': 'off',

    // disallow expressions where the operation doesn't affect the value
    // https://eslint.org/docs/rules/no-constant-binary-expression
    // TODO: semver-major, enable
    'no-constant-binary-expression': 'off',

    // disallow constant expressions in conditions
    // https://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': 'warn',

    // disallow returning value from constructor
    // https://eslint.org/docs/rules/no-constructor-return
    'no-constructor-return': 'error',

    // disallow control characters in regular expressions
    // https://eslint.org/docs/rules/no-control-regex
    'no-control-regex': 'error',

    // disallow the use of `debugger`
    // https://eslint.org/docs/rules/no-debugger
    'no-debugger': 'error',

    // disallow duplicate arguments in `function` definitions
    // https://eslint.org/docs/rules/no-dupe-args
    // ts(2300)
    'no-dupe-args': 'off',

    // disallow duplicate class members
    // https://eslint.org/docs/rules/no-dupe-class-members
    // ts(2393) & ts(2300)
    'no-dupe-class-members': 'off',

    // disallow duplicate conditions in if-else-if chains
    // https://eslint.org/docs/rules/no-dupe-else-if
    'no-dupe-else-if': 'error',

    // disallow duplicate keys in object literals
    // https://eslint.org/docs/rules/no-dupe-keys
    // ts(1117)
    'no-dupe-keys': 'off',

    // disallow duplicate case labels
    // https://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': 'error',

    // disallow duplicate module imports
    // https://eslint.org/docs/rules/no-duplicate-imports
    // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'no-duplicate-imports': 'off',

    // disallow empty character classes in regular expressions
    // https://eslint.org/docs/rules/no-empty-character-class
    'no-empty-character-class': 'error',

    // disallow empty destructuring patterns
    // https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // disallow reassigning exceptions in `catch` clauses
    // https://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': 'error',

    // disallow fallthrough of `case` statements
    // https://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 'error',

    // disallow reassigning `function` declarations
    // https://eslint.org/docs/rules/no-func-assign
    // ts(1117)
    'no-func-assign': 'off',

    // disallow assigning to imported bindings
    // https://eslint.org/docs/rules/no-import-assign
    // ts(2539) & ts(2540)
    'no-import-assign': 'off',

    // 	disallow variable or `function` declarations in nested blocks
    // https://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': 'error',

    // disallow invalid regular expression strings in `RegExp` constructors
    // https://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': 'error',

    // 	disallow irregular whitespace
    // https://eslint.org/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': 'error',

    // disallow literal numbers that lose precision
    // https://eslint.org/docs/rules/no-loss-of-precision
    // typescript-eslint
    'no-loss-of-precision': 'off',

    // disallow characters which are made with multiple code points in character class syntax
    // https://eslint.org/docs/rules/no-misleading-character-class
    'no-misleading-character-class': 'error',

    // 	disallow `new` operators with the `Symbol` object
    // https://eslint.org/docs/rules/no-new-symbol
    // ts(2588)
    'no-new-symbol': 'off',

    // disallow calling global object properties as functions
    // https://eslint.org/docs/rules/no-obj-calls
    // ts(2349)
    'no-obj-calls': 'off',

    // disallow returning values from Promise executor functions
    // https://eslint.org/docs/rules/no-promise-executor-return
    'no-promise-executor-return': 'off',

    // disallow calling some `Object.prototype` methods directly on objects
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',

    // disallow assignments where both sides are exactly the same
    // https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': [
      'error',
      {
        props: true,
      },
    ],

    // disallow comparisons where both sides are exactly the same
    // https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'error',

    // disallow returning values from setters
    // https://eslint.org/docs/rules/no-setter-return
    // ts(2408)
    'no-setter-return': 'off',

    // disallow sparse arrays
    // https://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': 'error',

    // disallow template literal placeholder syntax in regular strings
    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',

    // disallow `this`/`super` before calling `super()` in constructors
    // https://eslint.org/docs/rules/no-this-before-super
    // ts(2376)
    'no-this-before-super': 'off',

    // disallow the use of undeclared variables unless mentioned in `/*global */` comments
    // https://eslint.org/docs/rules/no-undef
    // ts(2304)
    'no-undef': 'off',

    // disallow confusing multiline expressions
    // https://eslint.org/docs/rules/no-unexpected-multiline
    // prettier
    'no-unexpected-multiline': 'off',

    // disallow unmodified loop conditions
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'off',

    // disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
    // https://eslint.org/docs/rules/no-unreachable
    // ts(7027)
    'no-unreachable': 'off',

    // disallow loops with a body that allows only one iteration
    // https://eslint.org/docs/rules/no-unreachable-loop
    'no-unreachable-loop': [
      'error',
      {
        ignore: [], // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
      },
    ],

    // disallow control flow statements in `finally` blocks
    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',

    // disallow negating the left operand of relational operators
    // https://eslint.org/docs/rules/no-unsafe-negation
    // ts(2365) & ts(2360) & ts(2358)
    'no-unsafe-negation': 'off',

    // disallow use of optional chaining in contexts where the `undefined` value is not allowed
    // https://eslint.org/docs/rules/no-unsafe-optional-chaining
    'no-unsafe-optional-chaining': [
      'error',
      { disallowArithmeticOperators: true },
    ],

    // disallow unused private class members
    // https://eslint.org/docs/rules/no-unused-private-class-members
    // TODO: enable once eslint 7 is dropped (which is semver-major)
    'no-unused-private-class-members': 'off',

    // disallow unused variables
    // https://eslint.org/docs/rules/no-unused-vars
    // typescript-eslint
    'no-unused-vars': 'off',

    // disallow the use of variables before they are defined
    // https://eslint.org/docs/rules/no-use-before-define
    // typescript-eslint
    'no-use-before-define': 'off',

    // disallow useless backreferences in regular expressions
    // https://eslint.org/docs/rules/no-useless-backreference
    'no-useless-backreference': 'error',

    // disallow assignments that can lead to race conditions due to usage of `await` or `yield`
    // https://eslint.org/docs/rules/require-atomic-updates
    // Note: not enabled because it is very buggy
    'require-atomic-updates': 'off',

    // require calls to `isNaN()` when checking for `NaN`
    // https://eslint.org/docs/rules/use-isnan
    'use-isnan': 'error',

    // enforce comparing `typeof` expressions against valid strings
    // https://eslint.org/docs/rules/valid-typeof
    // ts(2367)
    'valid-typeof': 'off',
  },
};
