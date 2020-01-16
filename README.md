# Lint configuration Imagem

Lint configuration files voor projecten binnen Imagem.
Bevat bestanden voor:
- Eslint
- Stylelint
- Prettier
- VS Code settings.json

## Requirements

| Package | Version |
| ------- | ------- |
| NodeJs  | 12.14.0 |

## Install

Windows:
```
> npm i -D git+ssh://git@github.com/imagemnl/lint-config-imagem.git
```

---

## Visual Studio Code settings

Deze settings zorgen ervoor dat de `.js` en `.vue` bestanden worden gestyled aan de hand van eslint configuratie. Voor alle andere bestanden wordt prettier gebruikt.

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true, // For ESLint
    "source.fixAll.stylelint": true, // For Stylelint
    "editor.action.formatDocument": true // Other files
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
