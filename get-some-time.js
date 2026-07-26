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

    // Week 1 starts on Jan 1; week 2 starts on the following Monday, then every 7 days
    const daysInTargetYear = isLeapYear(targetYear) ? 366 : 365;
    const jan1Dow = getDayOfWeek(targetYear, 1, 1); // 0=Sun,1=Mon,...6=Sat
    const isoJan1 = jan1Dow === 0 ? 7 : jan1Dow;   // 1=Mon..7=Sun
    const daysUntilNextMonday = (8 - isoJan1) % 7 || 7; // days from Jan 1 to next Monday

    let targetDayOfYear;
    if (targetWeek === 1) {
        targetDayOfYear = 1;
    } else {
        targetDayOfYear = 1 + daysUntilNextMonday + (targetWeek - 2) * 7;
    }
    let outYear = targetYear;

    if (targetDayOfYear > daysInTargetYear) {
        targetDayOfYear -= daysInTargetYear;
        outYear = targetYear + 1;
    }

    const { day, month } = getDateFromDayOfYear(targetDayOfYear, outYear);

    const dd = String(day).padStart(2, '0');
    const mm = String(month).padStart(2, '0');
    const yyyy = String(outYear).padStart(4, '0');

    return `${dd}-${mm}-${yyyy}`;
}