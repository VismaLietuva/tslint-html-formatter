module.exports = {
    env: {
        es6: true,
        node: true
    },
    parserOptions: {
        sourceType: "module"
    },
    extends: "airbnb-base",
    rules: {
        'class-methods-use-this': 'off',
        'import/no-extraneous-dependencies': ['error', {'devDependencies': ['**/*.specs.js']}],
        'indent': ['error', 4],
        'linebreak-style': 'off',
        'no-implied-eval': 'error',
        'no-script-url': 'error'
    }
}