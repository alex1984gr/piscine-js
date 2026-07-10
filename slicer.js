function slice(input, start, end) {
  const len = input.length;
  
  if (start < 0) {
    start = Math.max(0, len + start);
  }
  if (start > len) {
    start = len;
  }
  
  if (end === undefined) {
    end = len;
  } else if (end < 0) {
    end = Math.max(0, len + end);
  }
  if (end > len) {
    end = len;
  }
  
  if (end <= start) {
    return Array.isArray(input) ? [] : '';
  }
  
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(input[i]);
  }
  
  return Array.isArray(input) ? result : result.join('');
}