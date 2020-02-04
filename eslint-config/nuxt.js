module.exports = {
  extends: [
    "@nuxtjs",
    "prettier",
    "prettier/vue",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
  ],
  rules: {
    "nuxt/no-cjs-in-config": "off",
  },
};