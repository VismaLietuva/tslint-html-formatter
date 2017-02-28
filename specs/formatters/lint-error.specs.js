const assert = require('chai').assert;

const LintError = require('../../formatters/htmlFormatter');

let lintError;

describe('LintError should', () => {
    beforeEach(() => {
        lintError = new LintError();
    });

    afterEach(() => {
        lintError = null;
    });
});
