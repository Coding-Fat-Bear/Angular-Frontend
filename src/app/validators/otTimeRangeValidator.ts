import { AbstractControl } from "@angular/forms";
import { timeToHM } from "../tools/timeToHM";

export function otTimeRangeValidator(control: AbstractControl) {
    const [hours,minutes] = timeToHM(control.value);

    let btotstartvalue = false;
    let btotendvalue = false;

    if(control.get('OtStart')?.value =="" ){
        btotstartvalue = false
        // console.log("has no value");
        
    }else{btotstartvalue = true}

    if(control.get('OtEnd')?.value ==""){
        btotendvalue = false;
    }else{ btotendvalue = true;}

    if ((hours < 18 || hours > 23 || (hours === 23 && minutes > 0)) && (btotstartvalue  || btotendvalue)) {
        return { otTimeRange: true };
      }else{
      return null;
    }
    }


    