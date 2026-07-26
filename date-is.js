function toDate(date) {
    if (date instanceof Date) return date;
    if (typeof date === 'number') return new Date(date);
    return date;
}

function isValid(date) {
    const d = toDate(date);
    return d instanceof Date && !isNaN(d.getTime());
}

function isAfter(date1, date2) {
    return toDate(date1).getTime() > toDate(date2).getTime();
}

function isBefore(date1, date2) {
    return toDate(date1).getTime() < toDate(date2).getTime();
}

function isFuture(date) {
    const d = toDate(date);
    return isValid(d) && d.getTime() > Date.now();
}

function isPast(date) {
    const d = toDate(date);
    return isValid(d) && d.getTime() < Date.now();
}
