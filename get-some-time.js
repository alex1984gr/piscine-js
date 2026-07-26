function firstDayWeek(week, year) {
    let jan1 = new Date(year, 0, 1);
    let dayOfWeek = jan1.getDay();
    let diff = (dayOfWeek === 0) ? -6 : 1 - dayOfWeek;
    let start = new Date(year, 0, 1 + diff);
    
    // If the Monday of week 1 is in the previous year, use Jan 1
    if (diff < 0) {
        start = jan1;
    }
    
    // Move to target week
    let target = new Date(start);
    target.setDate(target.getDate() + (week - 1) * 7);
    
    // Format dd-mm-yyyy
    let dd = String(target.getDate()).padStart(2, '0');
    let mm = String(target.getMonth() + 1).padStart(2, '0');
    let yyyy = String(target.getFullYear());
    
    return `${dd}-${mm}-${yyyy}`;
}