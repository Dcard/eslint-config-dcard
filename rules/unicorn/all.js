module.exports = {
  plugins: ['unicorn'],

  rules: {
    // Add expiration conditions to TODO comments.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md
    'unicorn/expiring-todo-comments': [
      'warn',
      {
        allowWarningComments: true,
        ignoreDatesOnPullRequests: true,
      },
    ],
  },
};
