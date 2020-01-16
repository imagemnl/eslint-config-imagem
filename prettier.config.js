module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  arrowParens: "always",
  overrides: [
    {
      files: "package*.json",
      options: {
        printWidth: 100,
      },
    },
  ],
};
