import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth-service';
import {CookieService} from 'angular2-cookie/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private user;
  constructor(private CookieService: CookieService, private AuthService: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(this.CookieService.get('User'));

  }

  logout() {
    this.CookieService.removeAll();
    this.AuthService.announceLogout();
    this.router.navigate(['/landing-screen']);
  }

}
