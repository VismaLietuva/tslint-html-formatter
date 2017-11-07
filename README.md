# tslint-html-formatter
HTML formatter for TSLint.

![TSLint report](https://user-images.githubusercontent.com/514899/32494105-0702fa1c-c3c9-11e7-8354-941fe4cff130.png)

## Installation
```
npm install VismaLietuva/tslint-html-formatter --save-dev
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
