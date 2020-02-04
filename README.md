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

Windows:

```
> npm i -D git+ssh://git@github.com/imagemnl/eslint-config-imagem.git
```

## Configuration

Om deze lint instellingen in een project te gebruiken zijn de volgende instellingen nodig:

`eslint.config.js`

```javascript
{
  extends: ["imagem/eslint"],
}
```

---

`stylelint.config.js`

```javascript
module.exports = require("eslint-config-imagem/stylelint");
```

---

`prettier.config.js`

```javascript
module.exports = require("eslint-config-imagem/prettier");
```

---

### Uitbreidingen

Om de eslint instellingen voor Vue of Nuxt projecten toe te passen kan de volgende configuratie worden toegepast

`eslint.config.js in Vue projecten`

```javascript
{
  extends: ["imagem/eslint-vue"],
}
```

`eslint.config.js in Nuxt projecten`

```javascript
{
  extends: ["imagem/eslint-nuxt"],
}
```

## Visual Studio Code settings

Simpele vscode settings om prettier te gebruiken als code formatter.

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

## TODO's

- Controle of het inladen van Vue en Nuxt specifieke configuratie goed gaat
- Correct instellen van peer dependencies
- Typescript ondersteuning
- Optioneel maken van stylelint (voor backend projecten die deze lint vorm niet nodig hebben)

Enjoy! :)
