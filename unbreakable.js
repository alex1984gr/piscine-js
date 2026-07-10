function split(str, sep, limit) {
  if (limit === undefined) {
    limit = Infinity;
  }
  if (limit <= 0) return [];

  if (sep === undefined || sep === null) {
    return [str];
  }

  if (sep === '') {
    const result = [];
    for (let i = 0; i < str.length && result.length < limit; i++) {
      result.push(str[i]);
    }
    return result;
  }

  const result = [];
  let current = '';
  let i = 0;
  while (i < str.length && result.length < limit) {
    if (str.slice(i, i + sep.length) === sep) {
      result.push(current);
      if (result.length === limit) return result;
      current = '';
      i += sep.length;
    } else {
      current += str[i];
      i++;
    }
  }
  result.push(current);
  return result;
}

function join(arr, sep) {
  if (sep === undefined) {
    sep = ',';
  }
  if (arr.length === 0) return '';
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) result += sep;
    result += arr[i] === undefined || arr[i] === null ? '' : arr[i];
  }
  return result;
}