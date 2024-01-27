module.exports = {
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "react-app/jest",
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {ecmaVersion: 'latest', sourceType: 'module'},
  plugins: ['react', 'react-refresh', '@typescript-eslint','prettier'],
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  rules: {
    'react-refresh/only-export-components': 'off',
    'prettier/prettier': [
      'error', {
        'endOfLine': 'auto'
      }
    ],
    'react/jsx-key': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off'
  }
};


