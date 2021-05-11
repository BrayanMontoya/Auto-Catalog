import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, ValidatorFn, AbstractControl, Validator, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appForbiddenName]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator {

  @Input('appForbiddenName') forbiddenName: string ='';

  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenName ? this.forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
                              : null;
  }

  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
  }
}
