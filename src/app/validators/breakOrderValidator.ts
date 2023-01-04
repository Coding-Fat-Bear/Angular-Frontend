import { AbstractControl } from "@angular/forms";
import { timeToDate } from "../tools/timeToDate";

export function breakOrderValidator(control: AbstractControl) {
     const checkin = control.get('checkin');
     const checkout = control.get("checkout");
     const BtStart = control.get('BtStart');
     const BtEnd = control.get("BtEnd");
    const date1 = timeToDate(checkin?.value)
    const date2 = timeToDate(checkout?.value)
    const date3 = timeToDate(BtStart?.value)
    const date4 = timeToDate(BtEnd?.value)
    
    // console.log(date1 );
    // console.log(date2 );
    // console.log(date3 );
    // console.log(date4 );

    // console.log(date3 >date1);
    // console.log(date2>date4);
    // console.log(date3 >date1 && date2>date4);
    // console.log(control.get('BtStart')?.touched &&control.get('BtEnd')?.touched );
    
    
    if(control.get('BtStart')?.touched ||control.get('BtEnd')?.touched ){
        if(date3 >date1 && date2>date4){
            // console.log(3);
            return null
            
        }else{
            // console.log(2);
            
            return {dateBreakOrder: true}
        }
    }
    else{
        // console.log(1);
        return null
    }
    
    }

    