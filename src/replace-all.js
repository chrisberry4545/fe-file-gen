module.exports = (string, search, replacement) => {
  return string.replace(new RegExp(search, 'g'), replacement);
}
