const countLeapYears = (date) => {
    const y = date.getFullYear() - 1
    return Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400)
}
