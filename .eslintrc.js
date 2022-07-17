const config = require("./index");

module.exports = {
  ...config,
  parserOptions: {
    project: "tsconfig.json"
  },
  env: {
    node: true
  }
};
