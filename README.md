# tslint-html-formatter
HTML formatter for TSLint.

![TSLint report](https://user-images.githubusercontent.com/514899/32494384-2700ed0a-c3ca-11e7-9c7a-915cb49e9a03.png)

## Installation
**NPM CLI**
```
npm install @vismalietuva/tslint-formatter-html --save-dev
```

**Yarn CLI**
```
yarn add @vismalietuva/tslint-formatter-html --dev
```

## Usage
**TSLint CLI**
```
tslint --project tsconfig.json --formatters-dir node_modules/tslint-formatter-html/formatters --format html --out t
slint.html
```

**Angular CLI**
```
ng lint --format tslint-formatter-html > tslint.html
```
