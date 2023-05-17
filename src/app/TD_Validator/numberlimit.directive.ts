import { Directive,Input } from '@angular/core';
import{ AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';


@Directive({
    selector: '[appSelectValidator]', 
    providers : [{
        provide : NG_VALIDATORS,
        useExisting : numberlimitValidatorDirective,
        multi : true
    }]
})
export class numberlimitValidatorDirective implements Validator{
    @Input() appSelectValidator : string;
    validate(control: AbstractControl): {[key : string ] : any } | null {
        console.log(this.appSelectValidator);
        console.log(control.value <=0);
        const a = control.parent?.get(this.appSelectValidator);
        console.log(a?.value);
        
        
        return control.value <-1 || control.value >100  ? {'sel' : true} : null ;
    }
}