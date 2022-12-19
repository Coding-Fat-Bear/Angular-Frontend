import { AbstractControl } from "@angular/forms";
import { timeToHM } from "../tools/timeToHM";

export function timeRangeValidator(control: AbstractControl) {
    const [hours,minutes] = timeToHM(control.value);
    if (hours < 8 || hours > 18 || (hours === 18 && minutes > 0)) {
        return { timeRange: true };
      }else{
      return null;
    }
    }
