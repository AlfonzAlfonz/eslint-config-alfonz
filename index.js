const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks'
  ],
  rules: {
    '@typescript-eslint/member-delimiter-style': ['error'],
    '@typescript-eslint/type-annotation-spacing': ['warn'],
    'comma-spacing': 'warn',
    'indent': ['error', 2],
    'jsx-quotes': ['error', 'prefer-double'],
    'keyword-spacing': 'warn',
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', { 'code': 120, 'tabWidth': 2, 'ignoreTemplateLiterals': true, 'ignoreComments': true }],
    'no-case-declarations': 'off',
    'no-prototype-builtins': 'off',
    'no-restricted-globals': ['error'].concat(confusingBrowserGlobals),
    'no-unused-vars': 'off',
    'object-curly-spacing': ['warn', 'always'],
    'quotes': ['error', 'single'],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'warn',
    'react/display-name': 'off',
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-max-props-per-line': ['error', { 'maximum': 1, 'when': 'multiline' }],
    'react/jsx-tag-spacing': ['warn', { 'beforeSelfClosing': 'always' }],
    'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
    'react/jsx-wrap-multilines': ['warn', {
      'declaration': 'parens-new-line',
      'assignment': 'parens-new-line',
      'return': 'parens-new-line',
      'arrow': 'parens-new-line',
      'condition': 'parens-new-line',
      'logical': 'parens-new-line',
      'prop': 'ignore'
    }],
    'react/prop-types': ['off'],
    'semi': ['error', 'always'],
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['warn', 'all', { 'ignoreJSX': 'multi-line' }],
    'space-before-blocks': ['warn', 'always'],
    'brace-style': ['warn', '1tbs', { 'allowSingleLine': true }],
    'max-statements-per-line': ['warn', { max: 1 }],
    'arrow-spacing': ['warn']
  }
};
