// eslint.config.cjs
const { flatConfig } = require('@eslint/eslintrc');

module.exports = [
  {
    ignores: ['dist/**', 'build/**', 'node_modules/**', 'coverage/**'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      react: require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      jest: require('eslint-plugin-jest'),
    },
    rules: {
      // add your rules here
    },
  },
];
