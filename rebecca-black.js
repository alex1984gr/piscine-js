const isFriday = (date) => date.getDay() === 5

const isWeekend = (date) => date.getDay() === 0 || date.getDay() === 6

const isLeapYear = (date) => {
    const y = date.getFullYear()
    return (y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0)
}

const isLastDayOfMonth = (date) => {
    const next = new Date(date)
    next.setDate(date.getDate() + 1)
    return next.getMonth() !== date.getMonth()
}
