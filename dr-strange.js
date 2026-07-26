function addWeek(date) {
    // Epoch: 0001-01-01 was a Monday
    const epoch = new Date('0001-01-01');
    const msPerDay = 1000 * 60 * 60 * 24;
    
    // Calculate days since epoch
    const daysSinceEpoch = Math.floor((date.getTime() - epoch.getTime()) / msPerDay);
    
    // 14-day week index (0 = Monday, 13 = secondSunday)
    const dayIndex = ((daysSinceEpoch % 14) + 14) % 14;
    
    const weekDays = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
        'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'
    ];
    
    return weekDays[dayIndex];
}

function timeTravel({ date, hour, minute, second }) {
    const newDate = new Date(date);
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    newDate.setSeconds(second);
    return newDate;
}