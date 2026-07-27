const filterValues = (obj, fn) =>
    Object.fromEntries(Object.entries(obj).filter(([, v]) => fn(v)))

const mapValues = (obj, fn) =>
    Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, fn(v)]))

const reduceValues = (obj, fn, init) => {
    const vals = Object.values(obj)
    return init !== undefined ? vals.reduce(fn, init) : vals.reduce(fn)
}
