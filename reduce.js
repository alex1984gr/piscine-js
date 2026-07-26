const fold = (arr, fn, acc) => {
    for (let i = 0; i < arr.length; i++) acc = fn(acc, arr[i])
    return acc
}

const foldRight = (arr, fn, acc) => {
    for (let i = arr.length - 1; i >= 0; i--) acc = fn(acc, arr[i])
    return acc
}

const reduce = (arr, fn) => {
    if (arr.length < 1) throw new Error('empty array')
    let acc = arr[0]
    for (let i = 1; i < arr.length; i++) acc = fn(acc, arr[i])
    return acc
}

const reduceRight = (arr, fn) => {
    if (arr.length < 1) throw new Error('empty array')
    let acc = arr[arr.length - 1]
    for (let i = arr.length - 2; i >= 0; i--) acc = fn(acc, arr[i])
    return acc
}
