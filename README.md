# eslint-config-alfonz

Strict eslint config with defined codestyle for use with typescript and React.

## Installation 
```
yarn add -D https://github.com/AlfonzAlfonz/eslint-config-alfonz eslint-plugin-react@7.x eslint-plugin-react-hooks@2.x @typescript-eslint/eslint-plugin@2.x @typescript-eslint/parser@2.x
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