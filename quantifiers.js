const every = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) if (!fn(arr[i], i, arr)) return false
    return true
}

const some = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) if (fn(arr[i], i, arr)) return true
    return false
}

const none = (arr, fn) => !some(arr, fn)
