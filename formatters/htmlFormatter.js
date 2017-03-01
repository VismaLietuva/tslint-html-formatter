const fs = require('fs');
const path = require('path');
const vash = require('vash');
const process = require('process');

const FileLintingInfo = require('./file-linting-info');
const LintError = require('./lint-error');


class HtmlFormatter {
    constructor() {
        this.files = {};
    }

    format(failures) {
        const time = process.hrtime();

        if (!failures || failures.length === 0) {
            return '';
        }

        failures.forEach((failure) => {
            const filePath = failure.fileName;
            this.files[filePath] = this.files[filePath] || new FileLintingInfo(filePath);
            const fileLintingInfo = this.files[filePath];

            const lintError = new LintError(failure);
            fileLintingInfo.errors.push(lintError);
        });

        let totalErrors = 0;
        const keys = Object.keys(this.files);
        const results = keys.map((key) => {
            totalErrors += this.files[key].errorCount;
            return this.files[key];
        });

        const template = fs.readFileSync(path.join(__dirname, 'html/template.html'), 'utf-8');
        const css = fs.readFileSync(path.join(__dirname, 'html/styles.css'), 'utf-8');
        const js = fs.readFileSync(path.join(__dirname, 'html/report.js'), 'utf-8');

        const compiled = vash.compile(template);
        const diff = process.hrtime(time);
        console.log(`formatting took ${(diff[0] * 1e9 + diff[1]) / 1e6} miliseconds`);
        return compiled({ results, css, js, stats: { totalFilesWithErrors: keys.length, totalErrors } });
    }
}

module.exports = {
    Formatter: HtmlFormatter,
};
