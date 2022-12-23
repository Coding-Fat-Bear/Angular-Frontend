import { AbstractControl } from "@angular/forms";
import { timeToHM } from "../tools/timeToHM";

export function otTimeRangeValidator(control: AbstractControl) {
    const [hours,minutes] = timeToHM(control.value);
    if (hours < 18 || hours > 23 || (hours === 23 && minutes > 0)) {
        return { otTimeRange: true };
      }else{
      return null;
    }
    }


    