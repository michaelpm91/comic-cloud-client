/**
 * Created by Michael on 27/08/2016.
 */

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

    //based on: https://github.com/auth0-blog/angular2-authentication-sample/blob/master/src/login/login.ts
    //isLoggedIn: boolean = false;

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    /*login() {
        return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    }*/

    constructor(public router: Router) {}


    logout() {
        localStorage.removeItem('loggedIn')
    }


    login(username, password) {
        let body = JSON.stringify({username, password});
        console.log(body);
        return Observable.of(true).delay(1000).do(val => localStorage.setItem('loggedIn', true));

    }

    isLoggedIn(){
        return localStorage.getItem('loggedIn') || false;
    }
}