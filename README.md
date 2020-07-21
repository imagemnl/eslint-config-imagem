# Lint configuration Imagem

Lint configuration files voor projecten binnen Imagem.
Bevat bestanden voor:

- Eslint (Vue & Nuxt projecten)
- Stylelint
- Prettier
- VS Code settings.json

Alle code wordt geformat aan de hand van de prettier en eslint richtlijnen. Meer info op [Prettier vs. Linters](https://prettier.io/docs/en/comparison.html)

## Requirements

| Package | Version |
| ------- | ------- |
| NodeJs  | 12.14.0 |

## Install

Use the package using the following line.

```
$ npm i -D eslint babel-eslint @imagem/eslint-config
```

### Vue or Nuxt configuration

When you want to use the Vue or Nuxt settings, you need the right dependencies. These are marked as peerDependencies.

#### Using Vue

```
$ npm i -D eslint-plugin-vue
```

#### Using Nuxt

```
$ npm i -D eslint-plugin-nuxt
```

#### Stylelint

If you want to use stylelint in the project, you need the configurations from prettier. These are marked as peerDependencies.

```
$ npm i -D stylelint stylelint-prettier stylelint-config-prettier
```

## Configuration

Om deze lint instellingen in een project te gebruiken zijn de volgende instellingen nodig:

`eslint.config.js`

```javascript
{
  extends: ["@imagem/eslint-config"],
}
```

---

`stylelint.config.js`

```javascript
module.exports = require("@imagem/eslint-config/stylelint");
```

---

`prettier.config.js`

```javascript
module.exports = require("@imagem/eslint-config/prettier");
```

---

### Uitbreidingen

Om de eslint instellingen voor Vue of Nuxt projecten toe te passen kan de volgende configuratie worden toegepast

`eslint.config.js in Vue projecten`

```javascript
{
  extends: ["@imagem/eslint-config/vue"],
}
```

`eslint.config.js in Nuxt projecten`

```javascript
{
  extends: ["@imagem/eslint-config/nuxt"],
}
```

## Visual Studio Code settings

Copy file from `.vscode/settings.json`

## TODO's

- Typescript support

Enjoy! :)
