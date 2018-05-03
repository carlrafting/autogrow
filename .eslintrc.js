module.exports = {
  "env": {
    "browser": true
  },
  "globals": {
    "autogrow": true
  },    
  "extends": "eslint:recommended",
  "rules": {
    "indent": [
        "error",
        2
    ],
    "linebreak-style": [
        "error",
        "unix"
    ],
    "quotes": [
        "error",
        "single"
    ],
    "semi": [
        "error",
        "always"
    ],
    "strict": "error",
    "wrap-iife": "error",
    "yoda": "error",
    "space-in-parens": "error",
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never"
    }],
    "space-before-blocks": "error",
    "radix": "warn",
    "object-curly-spacing": [
        "error",
        "always"
    ],
    "array-bracket-spacing": "error",
    "eqeqeq": "error",
    "brace-style": "error"
  }
};