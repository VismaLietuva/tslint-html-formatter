# tslint-html-formatter
HTML formatter for TSLint.

![TSLint report](https://user-images.githubusercontent.com/6364586/32483253-84e35194-c39b-11e7-84ad-8aedbe607893.png)

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
