const fusion = (a, b) => {
    const result = { ...a }
    for (const key of Object.keys(b)) {
        if (!(key in result)) {
            result[key] = b[key]
        } else if (Array.isArray(result[key]) && Array.isArray(b[key])) {
            result[key] = [...result[key], ...b[key]]
        } else if (typeof result[key] === 'string' && typeof b[key] === 'string') {
            result[key] = result[key] + ' ' + b[key]
        } else if (typeof result[key] === 'number' && typeof b[key] === 'number') {
            result[key] = result[key] + b[key]
        } else if (result[key] && typeof result[key] === 'object' && !Array.isArray(result[key]) &&
                   b[key] && typeof b[key] === 'object' && !Array.isArray(b[key])) {
            result[key] = fusion(result[key], b[key])
        } else {
            result[key] = b[key]
        }
    }
    return result
}
