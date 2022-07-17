const confusingBrowserGlobals = require("confusing-browser-globals");

module.exports = {
  "array-bracket-newline": ["warn", "consistent"],
  "array-element-newline": ["warn", "consistent"],
  "arrow-spacing": ["warn"],
  "dot-location": "warn",
  "jsx-quotes": ["error", "prefer-double"],
  "keyword-spacing": "warn",
  "linebreak-style": ["error", "unix"],
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
  "max-statements-per-line": ["warn", { max: 1 }],
  "multiline-ternary": "off",
  "no-case-declarations": "off",
  "no-console": ["error", { allow: ["warn", "error", "info", "trace", "clear"] }],
  "no-prototype-builtins": "off",
  "no-restricted-globals": ["error"].concat(confusingBrowserGlobals),
  "no-undef": "off",
  "no-unused-expressions": "off",
  "no-unused-vars": "off",
  "no-use-before-define": "off",
  "no-void": "off",
  "object-curly-spacing": ["warn", "always"],
  "quote-props": ["warn", "consistent-as-needed"],

  // Disabled in favor of typescript rules
  "brace-style": "off",
  "camelcase": "off",
  "comma-spacing": "off",
  "func-call-spacing": "off",
  "indent": "off",
  "no-extra-parens": "off",
  "no-extra-semi": "off",
  "no-return-await": "off",
  "no-shadow": "off",
  "quotes": "off",
  "semi": "off",
  "space-before-blocks": "off",
  "space-before-function-paren": "off",
  "space-infix-ops": "off"
};
