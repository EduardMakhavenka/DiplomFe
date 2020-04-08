module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "arrow-spacing": 1,
    "camelcase": 1,
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "func-names": 0,
    "func-style": [
      0,
      "declaration"
    ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": {
          "var": 2,
          "let": 2,
          "const": 2
        }
      }
    ],
    "key-spacing": [
      0,
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "max-len": [
      1,
      {
        "code": 150
      }
    ],
    "no-undef": 2,
    "no-alert": 2,
    "no-console": 2,
    "no-eval": 2,
    "no-extra-semi": 2,
    "no-var": 2,
    "no-multiple-empty-lines": [
      1,
      {
        "max": 2
      }
    ],
    "no-unused-expressions": [
      2,
      {
        "allowShortCircuit": true,
        "allowTernary": true
      }
    ],
    "quotes": [
      1,
      "single",
      "avoid-escape"
    ],
    "rest-spread-spacing": [2,
      "never"
    ],
    "semi": [
      1,
      "always"
    ],
    "space-before-function-paren": ["error", "always"]
  },
}