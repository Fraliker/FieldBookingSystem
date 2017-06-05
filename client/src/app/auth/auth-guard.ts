import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {CookieService} from 'angular2-cookie/core';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _cookieService:CookieService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this._cookieService.get('User')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/landing-screen'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
