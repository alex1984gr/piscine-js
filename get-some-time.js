function firstDayWeek(week, year) {
    let jan1 = new Date(year, 0, 1);
    let dayOfWeek = jan1.getDay();
    let diff = (dayOfWeek === 0) ? -6 : 1 - dayOfWeek;
    let monday = new Date(year, 0, 1 + diff);
    let target = new Date(monday);
    target.setDate(target.getDate() + (week - 1) * 7);
    if (week === 1 && target.getFullYear() < year) {
        target = jan1;
    }
    let dd = String(target.getDate()).padStart(2, '0');
    let mm = String(target.getMonth() + 1).padStart(2, '0');
    let yyyy = String(target.getFullYear());
    return `${dd}-${mm}-${yyyy}`;
}