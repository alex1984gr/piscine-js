const invert = (obj) => Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]))
