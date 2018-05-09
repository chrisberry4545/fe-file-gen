const fs = require('fs');

module.exports = (className) => {
  const dir = './' + className;

  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    console.log('Directory created:', className);
    return true;
  } else {
    console.log('Overwriting content in directory:', className);
    return false;
  }
}
