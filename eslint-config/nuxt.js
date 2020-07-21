module.exports = {
  extends: [
    "@nuxtjs",
    "prettier",
    "prettier/vue",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
  ],
  rules: {
    "import/order": "error",
    "import/first": "error",
    "import/no-mutable-exports": "error",
    "import/no-unresolved": "off",
    "import/newline-after-import": ["error"],

    "nuxt/no-cjs-in-config": "off",
  },
};
