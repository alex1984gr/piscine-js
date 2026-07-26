function toDate(value) {
    if (value instanceof Date) return value;
    if (typeof value === 'number') return new Date(value);
    return value;
}

function isValid(date) {
    const d = toDate(date);
    return d instanceof Date && !isNaN(d.getTime());
}

function isAfter(date1, date2) {
    if (!isValid(date1) || !isValid(date2)) return false;
    return toDate(date1).getTime() > toDate(date2).getTime();
}

function isBefore(date1, date2) {
    if (!isValid(date1) || !isValid(date2)) return false;
    return toDate(date1).getTime() < toDate(date2).getTime();
}

function isFuture(date) {
    if (!isValid(date)) return false;
    return toDate(date).getTime() > Date.now();
}

function isPast(date) {
    if (!isValid(date)) return false;
    return toDate(date).getTime() < Date.now();
}
