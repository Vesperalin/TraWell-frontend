module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  globals: {
    process: true,
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier', 'import'],
  root: true,
  ignorePatterns: ['build'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'eol-last': [2, 'always'],
    quotes: ['error', 'single'],
    'no-used-vars': 'off',
    indent: ['error', 2],
    '@typescript-eslint/no-used-vars': ['off'],
    semi: ['error', 'always'],
    camelcase: 'error',
    'spaced-comment': 'error',
    'no-duplicate-imports': 'error',
    'no-const-assign': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'no-multi-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { beforeColon: false }],
    'react/jsx-uses-react': 'error',
    'space-infix-ops': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          { pattern: 'api/**', group: 'internal' },
          { pattern: 'enums/**', group: 'internal' },
          { pattern: 'hooks/**', group: 'internal' },
          { pattern: 'theme/**', group: 'internal' },
          { pattern: 'utils/**', group: 'internal' },
          { pattern: 'components/**', group: 'internal' },
          { pattern: 'pages/**', group: 'internal' },
          { pattern: 'features/**', group: 'internal' },
          { pattern: 'models/**', group: 'internal' },
          { pattern: 'assets/**', group: 'internal' },
          { pattern: 'context/**', group: 'internal' },
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
};
