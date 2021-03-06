module.exports = {
  "@typescript-eslint/no-extra-parens": ["warn", "all", { ignoreJSX: "multi-line" }],
  "@typescript-eslint/semi": ["warn", "always", { omitLastInOneLineBlock: true }],
  "@typescript-eslint/member-delimiter-style": "warn",
  "@typescript-eslint/await-thenable": "error",
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
  "@typescript-eslint/naming-convention": [
    "error",
    {
      selector: "default",
      format: ["camelCase", "PascalCase"]
    },
    {
      selector: "variable",
      types: ["function"],
      format: ["camelCase", "PascalCase"]
    },
    {
      selector: "variable",
      format: ["camelCase", "UPPER_CASE"]
    },
    {
      selector: "parameter",
      format: ["camelCase"],
      leadingUnderscore: "allow"
    },
    {
      selector: "memberLike",
      modifiers: ["private"],
      format: ["camelCase", "PascalCase", "UPPER_CASE"],
      leadingUnderscore: "require"
    },
    {
      selector: "typeLike",
      format: ["PascalCase"]
    }
  ],
  "@typescript-eslint/no-extra-non-null-assertion": "warn",
  "@typescript-eslint/no-extra-semi": ["warn"],
  "@typescript-eslint/no-implied-eval": "error",
  "@typescript-eslint/no-misused-promises": [
    "error",
    {
      checksVoidReturn: false
    }
  ],
  "@typescript-eslint/no-throw-literal": "error",
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
  "@typescript-eslint/no-unnecessary-condition": ["off", { ignoreRhs: true }],
  // "@typescript-eslint/no-unnecessary-type-arguments": "warn",
  "@typescript-eslint/no-unnecessary-type-assertion": "warn",
  "@typescript-eslint/prefer-nullish-coalescing": "warn",
  "@typescript-eslint/prefer-optional-chain": "warn",
  "@typescript-eslint/quotes": ["warn", "double", { avoidEscape: true, allowTemplateLiterals: false }],
  "@typescript-eslint/restrict-template-expressions": ["error", { allowNumber: true, allowBoolean: true, allowAny: true }]
};
