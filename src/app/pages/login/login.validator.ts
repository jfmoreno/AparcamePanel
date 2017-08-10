import { AbstractControl, ValidatorFn } from '@angular/forms';

export function forbiddenTitleValidator (titleRe: RegExp): ValidatorFn {
    
    return (control: AbstractControl): {[key: string]: any} => {
        const email = control.value;
        const check = titleRe.test(email);
        return check ? { 'No eres un usuario autorizado': { email } } : null;

    };
}
