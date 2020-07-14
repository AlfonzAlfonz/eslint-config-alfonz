const confusingBrowserGlobals = require("confusing-browser-globals");

module.exports = {
  "jsx-quotes": ["error", "prefer-double"],
  "keyword-spacing": "warn",
  "linebreak-style": ["error", "unix"],
  "no-case-declarations": "off",
  "no-prototype-builtins": "off",
  "no-restricted-globals": ["error"].concat(confusingBrowserGlobals),
  "object-curly-spacing": ["warn", "always"],
  "space-before-blocks": ["warn", "always"],
  "max-statements-per-line": ["warn", { max: 1 }],
  "arrow-spacing": ["warn"],
  "no-unused-vars": "off",
  "no-unused-expressions": "off",
  "no-shadow": "error",
  "max-len": [
    "warn",
    {
      code: 140,
      tabWidth: 2,
      ignoreTemplateLiterals: true,
      ignoreComments: true,
      ignorePattern: '^\\s*\\w+(\\w|\\d)?=("|\').*("|\')$'
    }
  ],
  "no-undef": "off",
  "no-console": ["error", { allow: ["warn", "error", "info", "trace", "clear"] }],
  "dot-location": "warn",
  "array-bracket-newline": ["warn", "consistent"],
  "array-element-newline": ["warn", "consistent"],
  "quote-props": ["warn", "consistent-as-needed"],
  // Disabled in favor of typescript rules
  "quotes": "off",
  "no-extra-semi": "off",
  "indent": "off",
  "func-call-spacing": "off",
  "comma-spacing": "off",
  "camelcase": "off",
  "brace-style": "off",
  "semi": "off",
  "no-extra-parens": "off"
};
