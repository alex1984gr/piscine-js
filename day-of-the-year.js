const dayOfTheYear = (date) => {
    const start = new Date(date.getFullYear(), 0, 1)
    return Math.round((date - start) / 86400000) + 1
}
