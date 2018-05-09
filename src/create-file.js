const fs = require('fs');

module.exports = (className, fileName, contents) => {
  fs.writeFile(
    className + '/' + fileName,
    contents
  );
  console.log('File created:', fileName);
}
