// @ts-check
const childProcess = require("child_process");
const { promises: fs } = require("fs");
const { promisify } = require("util");

const exec = promisify(childProcess.exec);

const main = async () => {
  // eslint-disable-next-line max-len
  await exec("yarn add -D eslint eslint-config-alfonz @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-standard");

  await fs.writeFile("./.eslintrc.json", JSON.stringify(template, null, 2));

  process.exit();
};

main();

const template = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "alfonz"
  ],
  settings: {
    react: {
      version: "detect"
    }
  }
};
