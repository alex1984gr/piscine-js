const pick = (obj, keys) => {
    const arr = [].concat(keys)
    return Object.fromEntries(arr.filter(k => Object.prototype.hasOwnProperty.call(obj, k)).map(k => [k, obj[k]]))
}

const omit = (obj, keys) => {
    const arr = [].concat(keys)
    return Object.fromEntries(Object.entries(obj).filter(([k]) => !arr.includes(k)))
}
