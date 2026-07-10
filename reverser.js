function reverse(input) {
  const len = input.length;
  const result = new Array(len);
  for (let i = 0; i < len; i++) {
    result[i] = input[len - 1 - i];
  }
  return Array.isArray(input) ? result : result.join('');
}