module.exports = {
  rules: {
    "arrow-parens": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    curly: ["error", "multi-line"],
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    "max-len": [
      "error",
      {
        code: 100,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
