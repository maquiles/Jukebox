import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})
export class LoginComponent {
    constructor(public router: Router) {}
    login() {
        //TODO: add actual login or register at a later time
        //maybe login with google account?? makes life easier
        this.router.navigate(['/openJukeboxes']);
    }
}