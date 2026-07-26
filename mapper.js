const map = (arr, fn) => {
    const result = []
    for (let i = 0; i < arr.length; i++) result[i] = fn(arr[i], i, arr)
    return result
}

const flatMap = (arr, fn) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const val = fn(arr[i], i, arr)
        if (Array.isArray(val)) for (const v of val) result.push(v)
        else result.push(val)
    }
    return result
}
