function isValid(date) {
    if (date instanceof Date) {
        return !isNaN(date.getTime());
    }
    if (typeof date === 'number' || typeof date === 'string') {
        const d = new Date(date);
        return !isNaN(d.getTime());
    }
    return false;
}

function isAfter(date1, date2) {
    if (!isValid(date1) || !isValid(date2)) return false;
    const d1 = date1 instanceof Date ? date1 : new Date(date1);
    const d2 = date2 instanceof Date ? date2 : new Date(date2);
    return d1.getTime() > d2.getTime();
}

function isBefore(date1, date2) {
    if (!isValid(date1) || !isValid(date2)) return false;
    const d1 = date1 instanceof Date ? date1 : new Date(date1);
    const d2 = date2 instanceof Date ? date2 : new Date(date2);
    return d1.getTime() < d2.getTime();
}

function isFuture(date) {
    if (!isValid(date)) return false;
    const d = date instanceof Date ? date : new Date(date);
    return d.getTime() > Date.now();
}

function isPast(date) {
    if (!isValid(date)) return false;
    const d = date instanceof Date ? date : new Date(date);
    return d.getTime() < Date.now();
}
