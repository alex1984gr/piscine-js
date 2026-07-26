const matchCron = (cron, date) => {
    const [minute, hour, dom, month, dow] = cron.split(' ')
    const match = (field, value) => field === '*' || Number(field) === value
    const day = date.getDay() === 0 ? 7 : date.getDay() // Sun=0 -> 7
    return (
        match(minute, date.getMinutes()) &&
        match(hour, date.getHours()) &&
        match(dom, date.getDate()) &&
        match(month, date.getMonth() + 1) &&
        match(dow, day)
    )
}
