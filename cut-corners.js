function trunc(n) {
  if (!isFinite(n) || n === 0 || n === -0) return n;
  const sign = n < 0 ? -1 : 1;
  n = n < 0 ? -n : n;
  if (n < 1) return 0;

  let result = 0;
  let step = 1;
  while (result + step * 10 <= n) {
    step *= 10;
  }
  while (step >= 1) {
    while (result + step <= n) {
      result += step;
    }
    step = step / 10;
  }
  return sign * result;
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