const Position = require('./position');

class LintError {
    constructor(failure) {
        const position = failure.startPosition.lineAndCharacter;
        const lines = failure.rawLines.split(/\n\r?/);
        this.start = new Position(position.line, position.character);
        this.message = failure.failure;
        this.ruleId = failure.ruleName;
        this.source = lines[this.start.line];
    }
}

module.exports = LintError;
