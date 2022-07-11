module.exports = {
  plugins: ['@typescript-eslint'],

  rules: {
    // Require that member overloads be consecutive
    // https://typescript-eslint.io/rules/adjacent-overload-signatures
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    // Requires using either T[] or Array<T> for arrays
    // https://typescript-eslint.io/rules/array-type/
    '@typescript-eslint/array-type': 'off',

    // Disallows awaiting a value that is not a Thenable
    // https://typescript-eslint.io/rules/await-thenable
    '@typescript-eslint/await-thenable': 'off',

    // Bans @ts-<directive> comments from being used or requires descriptions after directive
    // https://typescript-eslint.io/rules/ban-ts-comment
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
      },
    ],

    // Bans // tslint:<rule-flag> comments from being used
    // https://typescript-eslint.io/rules/ban-tslint-comment
    '@typescript-eslint/ban-tslint-comment': 'error',

    // Bans specific types from being used
    // https://typescript-eslint.io/rules/ban-types
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          object: false,
          '{}': false,
        },
      },
    ],

    // Ensures that literals on classes are exposed in a consistent style
    // https://typescript-eslint.io/rules/class-literal-property-style
    '@typescript-eslint/class-literal-property-style': 'off',

    // Enforce or disallow the use of the record type
    // https://typescript-eslint.io/rules/consistent-indexed-object-style
    '@typescript-eslint/consistent-indexed-object-style': 'off',

    // Enforces consistent usage of type assertions
    // https://typescript-eslint.io/rules/consistent-type-assertions
    '@typescript-eslint/consistent-type-assertions': 'off',

    // Consistent with type definition either interface or type
    // https://typescript-eslint.io/rules/consistent-type-definitions
    '@typescript-eslint/consistent-type-definitions': 'off',

    // Enforces consistent usage of type exports
    // https://typescript-eslint.io/rules/consistent-type-exports
    '@typescript-eslint/consistent-type-exports': 'off',

    // Enforces consistent usage of type imports
    // https://typescript-eslint.io/rules/consistent-type-imports
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],

    // Require explicit return types on functions and class methods
    // https://typescript-eslint.io/rules/explicit-function-return-type
    '@typescript-eslint/explicit-function-return-type': 'off',

    // Require explicit accessibility modifiers on class properties and methods
    // https://typescript-eslint.io/rules/explicit-member-accessibility

    '@typescript-eslint/explicit-member-accessibility': 'off',

    // Require explicit return and argument types on exported functions' and classes' public class methods
    // https://typescript-eslint.io/rules/explicit-module-boundary-types
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // Require a specific member delimiter style for interfaces and type literals
    // https://typescript-eslint.io/rules/member-delimiter-style
    // Prettier
    '@typescript-eslint/member-delimiter-style': 'off',

    // Require a consistent member declaration order
    // https://typescript-eslint.io/rules/member-ordering
    '@typescript-eslint/member-ordering': 'off',

    // Enforces using a particular method signature syntax
    // https://typescript-eslint.io/rules/method-signature-style
    '@typescript-eslint/method-signature-style': 'off',

    // Enforces naming conventions for everything across a codebase
    // https://typescript-eslint.io/rules/naming-convention
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'objectLiteralProperty',
        format: null,
      },
      {
        selector: 'objectLiteralMethod',
        format: null,
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase', 'snake_case'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
    ],

    // Requires that `.toString()` is only called on objects which provide useful information when stringified
    // https://typescript-eslint.io/rules/no-base-to-string/
    '@typescript-eslint/no-base-to-string': 'off',

    // Disallow non-null assertion in locations that may be confusing
    // https://typescript-eslint.io/rules/no-confusing-non-null-assertion
    '@typescript-eslint/no-confusing-non-null-assertion': 'off',

    // Requires expressions of type void to appear in statement position
    // https://typescript-eslint.io/rules/no-confusing-void-expression
    '@typescript-eslint/no-confusing-void-expression': 'off',

    // Disallow duplicate enum member values.
    // https://typescript-eslint.io/rules/no-duplicate-enum-values
    '@typescript-eslint/no-duplicate-enum-values': 'off',

    // Disallow the delete operator with computed key expressions
    // https://typescript-eslint.io/rules/no-dynamic-delete
    '@typescript-eslint/no-dynamic-delete': 'off',

    // Disallow the declaration of empty interfaces
    // https://typescript-eslint.io/rules/no-empty-interface
    '@typescript-eslint/no-empty-interface': 'error',

    // Disallow usage of the any type
    // https://typescript-eslint.io/rules/no-explicit-any
    '@typescript-eslint/no-explicit-any': 'off',

    // Disallow extra non-null assertion
    // https://typescript-eslint.io/rules/no-extra-non-null-assertion
    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    // Forbids the use of classes as namespaces
    // https://typescript-eslint.io/rules/no-extraneous-class
    '@typescript-eslint/no-extraneous-class': 'off',

    // Requires Promise-like statements to be handled appropriately
    // https://typescript-eslint.io/rules/no-floating-promises
    '@typescript-eslint/no-floating-promises': 'off',

    // Disallow iterating over an array with a for-in loop
    // https://typescript-eslint.io/rules/no-for-in-array
    '@typescript-eslint/no-for-in-array': 'off',

    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
    // https://typescript-eslint.io/rules/no-inferrable-types
    '@typescript-eslint/no-inferrable-types': 'error',

    // Disallows usage of `void` type outside of generic or return types
    // https://typescript-eslint.io/rules/no-invalid-void-type/
    '@typescript-eslint/no-invalid-void-type': 'off',

    // Disallow the void operator except when used to discard a value
    // https://typescript-eslint.io/rules/no-meaningless-void-operator
    '@typescript-eslint/no-meaningless-void-operator': 'off',

    // Enforce valid definition of `new` and `constructor`
    // https://typescript-eslint.io/rules/no-misused-new
    '@typescript-eslint/no-misused-new': 'error',

    // Avoid using Promises in places not designed to handle them
    // https://typescript-eslint.io/rules/no-misused-promises
    '@typescript-eslint/no-misused-promises': 'off',

    // Disallow the use of custom TypeScript modules and namespaces
    // https://typescript-eslint.io/rules/no-namespace
    '@typescript-eslint/no-namespace': 'error',

    // Disallows using a non-null assertion in the left operand of the nullish coalescing operator
    // https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'off',

    // Disallows using a non-null assertion after an optional chain expression
    // https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain/
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    // Disallows non-null assertions using the `!` postfix operator
    // https://typescript-eslint.io/rules/no-non-null-assertion
    '@typescript-eslint/no-non-null-assertion': 'error',

    // Disallow members of unions and intersections that do nothing or override type information.
    // https://typescript-eslint.io/rules/no-redundant-type-constituents
    '@typescript-eslint/no-redundant-type-constituents': 'off',

    // Disallows invocation of `require()`.
    // https://typescript-eslint.io/rules/no-require-imports
    '@typescript-eslint/no-require-imports': 'off',

    // Disallow aliasing `this`.
    // https://typescript-eslint.io/rules/no-this-alias
    '@typescript-eslint/no-this-alias': 'error',

    // Disallow the use of type aliases.
    // https://typescript-eslint.io/rules/no-type-alias
    '@typescript-eslint/no-type-alias': 'off',

    // Flags unnecessary equality comparisons against boolean literals.
    // https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',

    // Prevents conditionals where the type is always truthy or always falsy.
    // https://typescript-eslint.io/rules/no-unnecessary-condition
    '@typescript-eslint/no-unnecessary-condition': 'off',

    // Warns when a namespace qualifier is unnecessary.
    // https://typescript-eslint.io/rules/no-unnecessary-qualifier
    '@typescript-eslint/no-unnecessary-qualifier': 'off',

    // Enforces that type arguments will not be used if not required.
    // https://typescript-eslint.io/rules/no-unnecessary-type-arguments
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',

    // Warns if a type assertion does not change the type of an expression
    // https://typescript-eslint.io/rules/no-unnecessary-type-assertion
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',

    // Disallows unnecessary constraints on generic types
    // https://typescript-eslint.io/rules/no-unnecessary-type-constraint
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',

    // Disallows calling a function with an any type value
    // https://typescript-eslint.io/rules/no-unsafe-argument
    '@typescript-eslint/no-unsafe-argument': 'off',

    // Disallows assigning any to variables and properties
    // https://typescript-eslint.io/rules/no-unsafe-assignment
    '@typescript-eslint/no-unsafe-assignment': 'off',

    // Disallows calling an any type value
    // https://typescript-eslint.io/rules/no-unsafe-call
    '@typescript-eslint/no-unsafe-call': 'off',

    // Disallows member access on any typed variables
    // https://typescript-eslint.io/rules/no-unsafe-member-access
    '@typescript-eslint/no-unsafe-member-access': 'off',

    // Disallows returning any from a function
    // https://typescript-eslint.io/rules/no-unsafe-return
    '@typescript-eslint/no-unsafe-return': 'off',

    // Disallow empty exports that don't change anything in a module file
    // https://typescript-eslint.io/rules/no-useless-empty-export
    '@typescript-eslint/no-useless-empty-export': 'error',

    // Disallows the use of require statements except in import statements
    // https://typescript-eslint.io/rules/no-var-requires
    '@typescript-eslint/no-var-requires': 'error',

    // Prefers a non-null assertion over explicit type cast when possible
    // https://typescript-eslint.io/rules/non-nullable-type-assertion-style
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',

    // Require or disallow the use of parameter properties in class constructors
    // https://typescript-eslint.io/rules/parameter-properties
    '@typescript-eslint/parameter-properties': 'off',

    // Prefer usage of `as const` over literal type.
    // https://typescript-eslint.io/rules/prefer-as-const
    '@typescript-eslint/prefer-as-const': 'error',

    // Prefer initializing each enums member value
    // https://typescript-eslint.io/rules/prefer-enum-initializers
    '@typescript-eslint/prefer-enum-initializers': 'off',

    // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
    // https://typescript-eslint.io/rules/prefer-for-of
    '@typescript-eslint/prefer-for-of': 'off',

    // Use function types instead of interfaces with call signatures
    // https://typescript-eslint.io/rules/prefer-function-type
    '@typescript-eslint/prefer-function-type': 'off',

    // Enforce `includes` method over `indexOf` method
    // https://typescript-eslint.io/rules/prefer-includes
    '@typescript-eslint/prefer-includes': 'off',

    // Require that all enum members be literal values to prevent unintended enum member name shadow issues
    // https://typescript-eslint.io/rules/prefer-literal-enum-member
    '@typescript-eslint/prefer-literal-enum-member': 'off',

    // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
    // https://typescript-eslint.io/rules/prefer-namespace-keyword
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    // Enforce the usage of the nullish coalescing operator instead of logical chaining
    // https://typescript-eslint.io/rules/prefer-nullish-coalescing
    '@typescript-eslint/prefer-nullish-coalescing': 'off',

    // Prefer using concise optional chain expressions instead of chained logical ands.
    // https://typescript-eslint.io/rules/prefer-optional-chain
    '@typescript-eslint/prefer-optional-chain': 'off',

    // Requires that private members are marked as `readonly` if they're never modified outside of the constructor
    // https://typescript-eslint.io/rules/prefer-readonly
    '@typescript-eslint/prefer-readonly': 'off',

    // Requires that function parameters are typed as readonly to prevent accidental mutation of inputs
    // https://typescript-eslint.io/rules/prefer-readonly-parameter-types
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',

    // Prefer using type parameter when calling `Array#reduce` instead of casting
    // https://typescript-eslint.io/rules/prefer-reduce-type-parameter
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',

    // Enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided
    // https://typescript-eslint.io/rules/prefer-regexp-exec
    '@typescript-eslint/prefer-regexp-exec': 'off',

    // Enforce that `this` is used when only `this` type is returned.
    // https://typescript-eslint.io/rules/prefer-return-this-type
    '@typescript-eslint/prefer-return-this-type': 'off',

    // Enforce the use of `String#startsWith` and `String#endsWith` instead of other equivalent methods of checking substrings
    // https://typescript-eslint.io/rules/prefer-string-starts-ends-with
    '@typescript-eslint/prefer-string-starts-ends-with': 'off',

    // Recommends using `@ts-expect-error` over `@ts-ignore`
    // https://typescript-eslint.io/rules/prefer-ts-expect-error
    '@typescript-eslint/prefer-ts-expect-error': 'off',

    // Requires any function or method that returns a Promise to be marked async
    // https://typescript-eslint.io/rules/promise-function-async
    '@typescript-eslint/promise-function-async': 'off',

    // Requires `Array#sort` calls to always provide a `compareFunction`
    // https://typescript-eslint.io/rules/require-array-sort-compare
    '@typescript-eslint/require-array-sort-compare': 'off',

    // When adding two variables, operands must both be of type number or of type string
    // https://typescript-eslint.io/rules/restrict-plus-operands
    '@typescript-eslint/restrict-plus-operands': 'off',

    // Enforce template literal expressions to be of string type
    // https://typescript-eslint.io/rules/restrict-template-expressions
    '@typescript-eslint/restrict-template-expressions': 'off',

    // Enforces that members of a type union/intersection are sorted alphabetically
    // https://typescript-eslint.io/rules/sort-type-union-intersection-members
    '@typescript-eslint/sort-type-union-intersection-members': 'off',

    // Restricts the types allowed in boolean expressions
    // https://typescript-eslint.io/rules/strict-boolean-expressions
    '@typescript-eslint/strict-boolean-expressions': 'off',

    // Exhaustiveness checking in switch with union type
    // https://typescript-eslint.io/rules/switch-exhaustiveness-check
    '@typescript-eslint/switch-exhaustiveness-check': 'off',

    // Sets preference level for triple slash directives versus ES6-style import declarations
    // https://typescript-eslint.io/rules/triple-slash-reference
    '@typescript-eslint/triple-slash-reference': 'error',

    // Require consistent spacing around type annotations
    // https://typescript-eslint.io/rules/type-annotation-spacing
    // Prettier
    '@typescript-eslint/type-annotation-spacing': 'off',

    // Requires type annotations to exist
    // https://typescript-eslint.io/rules/typedef
    '@typescript-eslint/typedef': 'off',

    // Enforces unbound methods are called with their expected scope
    // https://typescript-eslint.io/rules/unbound-method
    '@typescript-eslint/unbound-method': 'off',

    // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
    // https://typescript-eslint.io/rules/unified-signatures
    '@typescript-eslint/unified-signatures': 'off',
  },
};
