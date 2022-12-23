import { AbstractControl } from "@angular/forms";
import { timeToDate } from "../tools/timeToDate";

export function otTimeOrderValidator(control: AbstractControl) {

     const OtStart = control.get('OtStart');
     const OtEnd = control.get("OtEnd");
    const date1 = timeToDate(OtStart?.value)
    const date2 = timeToDate(OtEnd?.value)
    if(date2 <date1){
        return {otDateOrder: true}
    }else{
        return null
    }
    }
