export function timeToDate (time :any) { 
    const [hours, minutes] = time.split(":").map(Number);
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    return date;
} 