class Position {
    constructor(line, column) {
        this.line = line || 0;
        this.column = column || 0;
    }
}

module.exports = Position;
