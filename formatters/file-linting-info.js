const path = require('path');

class FileLintingInfo {
    constructor(filePath) {
        this.dirName = '';
        this.fileName = '';
        this.errors = [];

        if (!filePath) {
            return;
        }

        this.dirName = path.dirname(filePath);
        this.fileName = path.basename(filePath);
    }

    get errorCount() {
        return this.errors.length;
    }
}

module.exports = FileLintingInfo;
