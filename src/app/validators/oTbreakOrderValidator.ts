import { AbstractControl } from "@angular/forms";
import { timeToDate } from "../tools/timeToDate";

export function oTbreakOrderValidator(control: AbstractControl) {
     const OtStart = control.get('OtStart');
     const OtEnd = control.get("OtEnd");
     const BtOtStart = control.get('BtOtStart');
     const BtOtEnd = control.get("BtOtEnd");
    const date1 = timeToDate(OtStart?.value)
    const date2 = timeToDate(OtEnd?.value)
    const date3 = timeToDate(BtOtStart?.value)
    const date4 = timeToDate(BtOtEnd?.value)
    
    // console.log(date1 );
    // console.log(date2 );
    // console.log(date3 );
    // console.log(date4 );

    // console.log(date3 >date1);
    // console.log(date2>date4);
    // console.log(date3 >date1 && date2>date4);
    // console.log(control.get('BtOtStart')?.touched &&control.get('BtOtEnd')?.touched );
    
    
    if(control.get('BtOtStart')?.touched ||control.get('BtOtEnd')?.touched ){
        if(date3 >date1 && date2>date4){
            console.log(3);
            return null
            
        }else{
            console.log(2);
            
            return {dateOtBreakOrder: true}
        }
    }
    else{
        console.log(1);
        return null
    }
    
    }

    