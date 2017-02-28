
class Position {
  constructor(line, column) {
    this.line = line || 0;
    this.column = column || 0;
  }
}

class LintError {

}


class HtmlFormatter {
  constructor() {

  }

  format(a, b) {
    console.log(a.length);
    console.log(b.length);
    console.log('-------------------------------------------------------------------------------------');
    console.log(`File name: ${a[0].fileName}`);
    console.log('-------------------------------------------------------------------------------------');
    console.log(Object.keys(a[0]));
    console.log(a[0].startPosition);
    console.log(a[0].endPosition);
    console.log(a[0].ruleName);
    console.log(a[0].failure);
    console.log(a[0].rawLines);
    return '';
  }
}

module.exports = {
  Formatter: HtmlFormatter
}