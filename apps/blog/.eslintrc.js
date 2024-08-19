const { resolve } = require("node:path")
const project = resolve(process.cwd(), "tsconfig.json")

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve("./node_modules/@repo/config-eslint/next.js")],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json", // Ensure this path is correct
    tsconfigRootDir: __dirname,
  },
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "react-refresh/only-export-components": "off",
    "no-console": "off",
    "spaced-comment": "off", // 주석 스타일 강제 취소, html, css에서 주석을 달 수 있습니다.
    "no-param-reassign": "off", // 재할당 가능합니다.
    "prefer-arrow-callback": "off", // function 키워드를 사용할 수 있습니다. (this 사용)
    "no-await-in-loop": "warn", // for문 안에서 await을 사용할 수 있습니다.
    "quote-props": ["error", "as-needed"], // object의 key가 문자열이 아닌 경우에만 따옴표를 사용
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
  },
  ignorePatterns: ["*.html", ".*.js", ".*.cjs", "*.config.js", "node_modules/"],
}
