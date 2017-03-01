const fs = require('fs');
const path = require('path');
const vash = require('vash');

const FileLintingInfo = require('./file-linting-info');
const LintError = require('./lint-error');
const LintStats = require('./lint-stats');


class HtmlFormatter {
    constructor() {
        this.fileErrors = {};
        this.stats = {
            totalFilesWithErrors: 0,
            totalErrors: 0,
            ruleErrors: {},
        };
    }

    format(failures) {
        if (!failures || failures.length === 0) {
            return '';
        }

        failures.forEach((failure) => {
            const filePath = failure.fileName;
            if (!(filePath in this.fileErrors)) {
                this.fileErrors[filePath] = new FileLintingInfo(filePath);
            }

            const lintError = new LintError(failure);
            this.fileErrors[filePath].errors.push(lintError);
        });

        const stats = new LintStats(this.fileErrors);
        const keys = Object.keys(this.fileErrors);
        const results = keys
            .map((key) => {
                return this.fileErrors[key];
            })
            .sort((a, b) => b.errorCount - a.errorCount);

        const template = fs.readFileSync(path.join(__dirname, 'html/template.html'), 'utf-8');
        const css = fs.readFileSync(path.join(__dirname, 'html/styles.css'), 'utf-8');
        const js = fs.readFileSync(path.join(__dirname, 'html/report.js'), 'utf-8');

        const compiled = vash.compile(template);
        return compiled({ results, css, js, stats });
    }
}

module.exports = {
    Formatter: HtmlFormatter,
};
