import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'st-login',
    templateUrl: './rlogin.component.html'
})
export class RLoginComponent {
    loginForm: FormGroup;
    constructor(private fb: FormBuilder) {
        this.loginForm = this.fb.group(
            {
                username: ["", Validators.compose
                    ([Validators.required, Validators.minLength(4)])],
                password: ["", Validators.compose
                    ([Validators.required, this.mustHaveStar])]
            }
        )
    }

    login() {
        console.log(this.loginForm);
        if (this.loginForm.valid) {
            console.log(this.loginForm.controls["username"].value);
            console.log(this.loginForm);
        }

    }

    //  must return null on success, object on error 
    mustHaveStar(formControl: FormControl) {
        // do not validate if value is missing 
        if (formControl.value.length == 0)
            return null;  // success

        if (formControl.value.indexOf('*') < 0)  // star not found
            return { mustHaveStar: { actualValue: formControl.value } };  // Error as validation failed  

        return null;  // Success 
    }
}