function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

function daysInMonth(year, month) {
    if (month === 2) {
        return isLeapYear(year) ? 29 : 28;
    }
    return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
}

function getDayOfWeek(year, month, day) {
    // Sakamoto's algorithm: returns 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    let y = Number(year);
    const m = Number(month);
    const d = Number(day);
    const t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    if (m < 3) y -= 1;
    const w = (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + t[m - 1] + d) % 7;
    return (w + 7) % 7; // ensure non-negative
}

function getDateFromDayOfYear(dayOfYear, year) {
    let month = 1;

    while (dayOfYear > daysInMonth(year, month)) {
        dayOfYear -= daysInMonth(year, month);
        month += 1;
    }

    return {
        day: dayOfYear,
        month
    };
}

function firstDayWeek(week, year) {
    const targetYear = Number(year);
    const targetWeek = Number(week);

    const jan1DayOfWeek = getDayOfWeek(targetYear, 1, 1);
    const diff = jan1DayOfWeek === 0 ? -6 : 1 - jan1DayOfWeek;
    let weekOneDayOfYear = 1 + diff;

    if (weekOneDayOfYear < 1) {
        weekOneDayOfYear = 1;
    }

    const targetDayOfYear = weekOneDayOfYear + (targetWeek - 1) * 7;
    const { day, month } = getDateFromDayOfYear(targetDayOfYear, targetYear);

    const dd = String(day).padStart(2, '0');
    const mm = String(month).padStart(2, '0');
    const yyyy = String(targetYear).padStart(4, '0');

    return `${dd}-${mm}-${yyyy}`;
}