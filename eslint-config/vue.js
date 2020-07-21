module.exports = {
  extends: [
    "standard",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier",
    "prettier/vue",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "import/order": "error",
    "import/first": "error",
    "import/no-mutable-exports": "error",
    "import/no-unresolved": "off",
    "import/newline-after-import": ["error"],

    // Vue overrides
    "vue/html-self-closing": "off",
    "vue/max-attributes-per-line": "off",
    "vue/singleline-html-element-content-newline": "off",
  },
};
