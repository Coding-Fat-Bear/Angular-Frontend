export function dateToHM(date : any){
    const value = new Date(date);
    const hour = (value.getHours())>9?value.getHours():"0"+value.getHours()
    const minute = (value.getMinutes())>9?value.getMinutes():"0"+value.getMinutes()
    return `${hour}:${minute}`
}