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

  plugins: ["prettier"],
};
