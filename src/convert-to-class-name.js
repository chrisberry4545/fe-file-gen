module.exports = (str) => {
  const camelized = str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
  return camelized.charAt(0).toUpperCase() + camelized.slice(1);
}
