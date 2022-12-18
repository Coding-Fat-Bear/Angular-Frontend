export function timeToHM (time :any) { 
    const [hours, minutes] = time.split(":").map(Number);
        return [hours, minutes] ;
} 