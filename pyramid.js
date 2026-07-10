function pyramid(char, depth) {
  let result = '';
  const charLen = char.length;
  for (let i = 0; i < depth; i++) {
    const spaces = ' '.repeat((depth - i - 1) * charLen);
    const chars = char.repeat(2 * i + 1);
    result += spaces + chars;
    if (i < depth - 1) result += '\n';
  }
  return result;
}
