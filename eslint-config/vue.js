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
    // Enforce import order
    "import/order": "error",

    // Imports should come first
    "import/first": "error",

    // Other import rules
    "import/no-mutable-exports": "error",

    // Allow unresolved imports
    "import/no-unresolved": "off",

    // Vue overrides
    "vue/html-self-closing": "off",
    "vue/max-attributes-per-line": "off",
  },
};
