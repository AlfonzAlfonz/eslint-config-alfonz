module.exports = {
  "react-hooks/exhaustive-deps": "warn",
  "react-hooks/rules-of-hooks": "warn",
  "react/display-name": "off",
  "react/jsx-boolean-value": ["warn", "never"],
  "react/jsx-child-element-spacing": "error",
  "react/jsx-closing-bracket-location": ["warn", "tag-aligned"],
  "react/jsx-closing-tag-location": "warn",
  "react/jsx-curly-brace-presence": ["warn", { props: "never", children: "never" }],
  "react/jsx-curly-newline": ["warn", { multiline: "forbid", singleline: "forbid" }],
  "react/jsx-curly-spacing": ["warn", "never"],
  "react/jsx-equals-spacing": "warn",
  "react/jsx-first-prop-new-line": ["error", "multiline"],
  "react/jsx-fragments": "warn",
  "react/jsx-indent": ["warn", 2],
  "react/jsx-indent-props": ["warn", 2],
  "react/jsx-max-props-per-line": ["error", { maximum: 1, when: "multiline" }],
  "react/jsx-props-no-multi-spaces": "warn",
  "react/jsx-tag-spacing": ["warn", { beforeClosing: "never" }],
  "react/jsx-wrap-multilines": ["warn", {
    declaration: "parens-new-line",
    assignment: "parens-new-line",
    return: "parens-new-line",
    arrow: "parens-new-line",
    condition: "parens-new-line",
    logical: "parens-new-line",
    prop: "parens-new-line"
  }],
  "react/no-danger-with-children": "error",
  "react/no-deprecated": "error",
  "react/no-direct-mutation-state": "error",
  "react/no-unescaped-entities": "off",
  "react/prop-types": "off",
  "react/react-in-jsx-scope": "off"
};
