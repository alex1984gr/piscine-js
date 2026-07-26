function createUtcDate(year, month, day) {
    const date = new Date(Date.UTC(1970, 0, 1));
    date.setUTCFullYear(year, month, day);
    return date;
}

function firstDayWeek(week, year) {
    const targetYear = Number(year);
    const targetWeek = Number(week);

    const jan1 = createUtcDate(targetYear, 0, 1);
    const dayOfWeek = jan1.getUTCDay();
    const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const mondayOfWeek1 = createUtcDate(targetYear, 0, 1 + diff);
    const target = createUtcDate(targetYear, 0, 1 + diff + (targetWeek - 1) * 7);

    const result = targetWeek === 1 && target.getUTCFullYear() < targetYear ? jan1 : target;

    const dd = String(result.getUTCDate()).padStart(2, '0');
    const mm = String(result.getUTCMonth() + 1).padStart(2, '0');
    const yyyy = String(result.getUTCFullYear()).padStart(4, '0');

    return `${dd}-${mm}-${yyyy}`;
}