# eslint-config-alfonz

Strict eslint config with defined codestyle for use with typescript and React.

## Installation 
```
yarn add -D eslint eslint-config-alfonz @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-standard
```

## Example
```
{
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "alfonz"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```