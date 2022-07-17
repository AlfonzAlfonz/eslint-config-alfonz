module.exports = {
  "@typescript-eslint/await-thenable": "error",
  "@typescript-eslint/member-delimiter-style": "warn",
  "@typescript-eslint/naming-convention": "off",
  "@typescript-eslint/no-extra-non-null-assertion": "warn",
  "@typescript-eslint/no-floating-promises": "warn",
  "@typescript-eslint/no-for-in-array": "error",
  // "@typescript-eslint/no-meaningless-void-operator": "warn", // false positive: void (q === undefined && query.q && setQ(only(query.q)))
  "@typescript-eslint/no-misused-promises": "error",
  "@typescript-eslint/no-throw-literal": "error",
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
  "@typescript-eslint/no-unnecessary-condition": ["off", { ignoreRhs: true }],
  "@typescript-eslint/no-unnecessary-type-assertion": "warn",
  // "@typescript-eslint/no-unnecessary-type-constraint": "error", // false positives in JSX files
  "@typescript-eslint/prefer-nullish-coalescing": "warn",
  "@typescript-eslint/prefer-optional-chain": "warn",
  "@typescript-eslint/require-array-sort-compare": "error",
  "@typescript-eslint/restrict-template-expressions": ["error", { allowNumber: true, allowBoolean: true, allowAny: true }],
  "@typescript-eslint/semi": ["warn", "always", { omitLastInOneLineBlock: true }],
  "@typescript-eslint/switch-exhaustiveness-check": "error",
  "@typescript-eslint/type-annotation-spacing": "warn",

  // Extension rules
  "@typescript-eslint/brace-style": ["warn", "1tbs", { allowSingleLine: true }],
  "@typescript-eslint/comma-spacing": ["warn"],
  "@typescript-eslint/func-call-spacing": ["warn"],
  "@typescript-eslint/indent": ["warn", 2, {
    SwitchCase: 1,
    VariableDeclarator: 1,
    outerIIFEBody: 1,
    MemberExpression: 1,
    FunctionDeclaration: { parameters: 1, body: 1 },
    FunctionExpression: { parameters: 1, body: 1 },
    CallExpression: { arguments: 1 },
    ArrayExpression: 1,
    ObjectExpression: 1,
    ImportDeclaration: 1,
    flatTernaryExpressions: false,
    ignoreComments: false,
    ignoredNodes: ["TemplateLiteral *"]
  }],
  "@typescript-eslint/no-extra-parens": ["warn", "all", { ignoreJSX: "multi-line" }],
  "@typescript-eslint/no-extra-semi": ["warn"],
  "@typescript-eslint/no-implied-eval": "error",
  "@typescript-eslint/no-shadow": "warn",
  "@typescript-eslint/quotes": ["warn", "double", { avoidEscape: true, allowTemplateLiterals: false }],
  "@typescript-eslint/return-await": "warn",
  "@typescript-eslint/space-before-blocks": ["warn", "always"],
  "@typescript-eslint/space-before-function-paren": ["warn", "always"],
  "@typescript-eslint/space-infix-ops": ["error", { int32Hint: false }]
};
