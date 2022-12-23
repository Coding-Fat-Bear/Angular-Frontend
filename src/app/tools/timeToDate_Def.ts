export function timeToDate_Def (tsdate:Date,time :any) { 
    
    const [hours, minutes] = time.split(":").map(Number);
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setDate( tsdate.getDate());
    date.setMonth( tsdate.getMonth());
    date.setFullYear( tsdate.getFullYear());
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
} 