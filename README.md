# eslint-config-alfonz

Strict eslint config with defined codestyle for use with typescript and React.

## Installation 
```shell
yarn add -D \
  eslint@^8.20.0 \
  eslint-config-alfonz@^1.0.0 \
  @typescript-eslint/eslint-plugin@^5.30.6 \
  @typescript-eslint/parser@^5.30.6 \
  eslint-config-standard@^17.0.0 \
  eslint-plugin-import@^2.26.0 \
  eslint-plugin-n@^15.2.4 \
  eslint-plugin-promise@^6.0.0 \
  eslint-plugin-react@^7.30.1 \
  eslint-plugin-react-hooks@^4.6.0
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