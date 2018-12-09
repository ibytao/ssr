module.exports = 
{
  "parser": "babel-eslint",
  "env": {
    "es6": true
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "15.6.1"
    }
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [2, 2, {SwitchCase: 1}]
  }
}
