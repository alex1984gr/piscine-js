const adder = (arr) => arr.reduce((acc, n) => acc + n, 0)

const sumOrMul = (arr, init = 0) =>
    arr.reduce((acc, n) => n % 2 === 0 ? acc * n : acc + n, init)

const funcExec = (arr, init) =>
    arr.reduce((acc, fn) => fn(acc), init)
