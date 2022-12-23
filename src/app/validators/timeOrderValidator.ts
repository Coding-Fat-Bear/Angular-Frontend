import { AbstractControl } from "@angular/forms";
import { timeToDate } from "../tools/timeToDate";

export function timeOrderValidator(control: AbstractControl) {

     const checkin = control.get('checkin');
     const checkout = control.get("checkout");
    const date1 = timeToDate(checkin?.value)
    const date2 = timeToDate(checkout?.value)
    if(date2 <date1){
        return {dateOrder: true}
    }else{
        return null
    }
    }

    