const filterKeys = (obj, fn) =>
    Object.fromEntries(Object.entries(obj).filter(([k]) => fn(k)))

const mapKeys = (obj, fn) =>
    Object.fromEntries(Object.entries(obj).map(([k, v]) => [fn(k), v]))

const reduceKeys = (obj, fn, init) => {
    const keys = Object.keys(obj)
    return init !== undefined ? keys.reduce(fn, init) : keys.reduce(fn)
}
