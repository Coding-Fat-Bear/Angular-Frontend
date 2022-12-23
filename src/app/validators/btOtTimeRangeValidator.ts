import { AbstractControl } from "@angular/forms";
import { timeToHM } from "../tools/timeToHM";

export function btOtTimeRangeValidator(control: AbstractControl) {
    const [hours,minutes] = timeToHM(control.value);
    if (hours < 18 || hours > 23 || (hours === 23 && minutes > 0)) {
        return { btOtTimeRange: true };
      }else{
      return null;
    }
    }
