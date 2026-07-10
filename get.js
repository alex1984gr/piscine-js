function get(src, path) {
  const keys = path.split('.');
  let result = src;
  for (let i = 0; i < keys.length; i++) {
    if (result === undefined || result === null) return undefined;
    result = result[keys[i]];
  }
  return result;
}