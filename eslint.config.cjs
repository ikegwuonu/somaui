const tsParser = require('@typescript-eslint/parser');

module.exports = [
  {
    ignores: [
      'docs/**',
      '**/docs/**',
      'node_modules/**',
      '**/node_modules/**',
      'coverage/**',
      '**/coverage/**',
      '**/dist/**',
      '**/build/**',
      'cli/src/assets/**',
    ],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser, // <- use the actual object
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        project: ['./tsconfig.json', './vite-app/tsconfig.json'], // multiple projects
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      react: require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      jest: require('eslint-plugin-jest'),
    },
    rules: {
      // General
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'error',

      // TypeScript
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/no-explicit-any': 'warn',
      // '@typescript-eslint/consistent-type-imports': 'error',

      // React
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-key': 'error',

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // '@typescript-eslint/no-floating-promises': 'error',
      // '@typescript-eslint/no-misused-promises': 'error',
      // eqeqeq: ['error', 'always'],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
