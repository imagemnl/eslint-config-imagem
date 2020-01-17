# Lint configuration Imagem

Lint configuration files voor projecten binnen Imagem.
Bevat bestanden voor:

- Eslint
- Stylelint
- Prettier
- VS Code settings.json

Omdat prettier niet de configuratie bevat die gewenst is,
wordt gebruik gemaakt van de formatting style van eslint en stylelint.
Deze instellingen voor vscode zijn bijgeleverd zodat dit automatisch wordt toegepast.

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

## Visual Studio Code settings

Deze settings zorgen ervoor dat de `.js` en `.vue` bestanden worden gestyled aan de hand van eslint configuratie. Voor alle andere bestanden wordt prettier gebruikt.

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true,
    "editor.action.formatDocument": true
  },

  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,

  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[vue]": {
    "editor.formatOnSave": false
  }
}
```

Enjoy! :)
