function trunc(n) {
  if (n === 0) return 0;
  if (n > 0) {
    let result = 0;
    while (result + 1 <= n) result++;
    return result;
  }
  let result = 0;
  while (result - 1 >= n) result--;
  return result;
}

function floor(n) {
  const t = trunc(n);
  if (n >= 0) return t;
  return n === t ? t : t - 1;
}

function ceil(n) {
  const t = trunc(n);
  if (n <= 0) return t;
  return n === t ? t : t + 1;
}

function round(n) {
  const t = trunc(n);
  const diff = n - t;
  if (diff >= 0.5) return t + 1;
  if (diff <= -0.5) return t - 1;
  return t;
}