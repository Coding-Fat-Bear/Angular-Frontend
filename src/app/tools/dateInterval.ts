export function dateInterval(date1 :Date,date2 :Date){
    const time1 = date1.getTime();
    const time2 = date2.getTime();
  
  // Calculate the difference in milliseconds
  const diff = time2 - time1;
  
  // Convert the difference to days
//   const diffInDays = diff / (1000 * 60 * 60);
  return diff
}