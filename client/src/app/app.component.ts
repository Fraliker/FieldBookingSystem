import { Component } from '@angular/core';
import { AuthService } from './auth/auth-service';
import { Subscription }   from 'rxjs/Subscription';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscription: Subscription;
  private currentUser;
  title = 'app works!';

  constructor(private _cookieService:CookieService, private AuthService: AuthService) {

        this.subscription = AuthService.loginAnnounced.subscribe(
            currentUser => {
            this.currentUser = currentUser;
        });

        this.subscription = AuthService.logoutAnnounced.subscribe(
            empty => {
            this.currentUser = null;
       });
        //when the app refresh or initialized
        this.currentUser = _cookieService.get('User');
    }
}
