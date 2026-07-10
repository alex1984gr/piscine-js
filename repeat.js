function repeat(str, num) {
  if (num <= 0) return '';
  if (num === 1) return str;
  return str + repeat(str, num - 1);
}