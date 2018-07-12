import { AuthService } from './auth.service';

import { Injectable } from '@angular/core';

import { Router, CanActivate } from '@angular/router';
@Injectable()

export class AuthGuard implements CanActivate {

    constructor(private route: Router, private authService: AuthService) { }
    canActivate() {
        if ( this.authService.isLoggedIn() ) {
            return true;
        }
        this.route.navigate(['/inicial']);
        return false;

    }

}