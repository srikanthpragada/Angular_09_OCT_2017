import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
                password: ["", Validators.required]
            }
        )
    }

    login() {
        if (this.loginForm.valid) {
            console.log(this.loginForm.controls["username"].value);
            console.log(this.loginForm);
        }

    }
}