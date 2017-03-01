class LintStats {

    constructor(lintResult) {
        this.totalFilesWithErrors = 0;
        this.totalErrors = 0;
        this.ruleErrors = {};

        if (!lintResult) {
            return;
        }

        const keys = Object.keys(lintResult);

        this.totalFilesWithErrors = keys.length;
        keys.forEach((key) => {
            this.totalErrors += lintResult[key].errorCount;

            lintResult[key].errors.forEach((error) => {
                if (error.ruleId in this.ruleErrors) {
                    this.ruleErrors[error.ruleId] += 1;
                } else {
                    this.ruleErrors[error.ruleId] = 1;
                }
            });
        });
    }

    get topRuleFailures() {
        const keys = Object.keys(this.ruleErrors);
        return keys
            .map((key) => ({ rule: key, errors: this.ruleErrors[key] }))
            .sort((a, b) => b.errors - a.errors)
            .slice(0, 10);
    }
}

module.exports = LintStats;
