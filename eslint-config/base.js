module.exports = {
  root: true,

  env: {
    browser: true,
    es6: true,
    node: true,
  },

  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
  },

  extends: ["prettier", "plugin:prettier/recommended"],

  plugins: ["prettier", "import"],

  rules: {
    "import/order": "error",
    "import/first": "error",
    "import/no-mutable-exports": "error",
    "import/no-unresolved": "off",
    "import/newline-after-import": ["error"],
  },
};
