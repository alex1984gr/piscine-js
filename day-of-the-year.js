const dayOfTheYear = (date) => {
    const start = new Date(date.getTime())
    start.setMonth(0, 1)
    start.setHours(0, 0, 0, 0)
    return Math.round((date - start) / 86400000) + 1
}
