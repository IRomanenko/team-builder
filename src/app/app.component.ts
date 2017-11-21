import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

import '../assets/css/styles.css';

@Component({
  selector: 'tb',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string;
  password: string;

  constructor(public authService: AuthService) {}

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

  logout() {
    this.authService.logout();
  }
}
