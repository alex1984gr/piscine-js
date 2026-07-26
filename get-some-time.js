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
    let y = year;
    let m = month;

    if (m < 3) {
        y -= 1;
        m += 12;
    }

    const k = y % 100;
    const j = Math.floor(y / 100);
    const h = (day + Math.floor((13 * (m + 1)) / 5) + k + Math.floor(k / 4) + Math.floor(j / 4) + 5 * j) % 7;

    // Zeller's Congruence: 0 = Saturday, 1 = Sunday, 2 = Monday, ...
    return (h + 6) % 7;
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