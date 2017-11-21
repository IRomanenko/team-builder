import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'tb-nav',
  templateUrl: './tb-nav.component.html',
  styleUrls: ['./tb-nav.component.css']
})
export class TbNavComponent implements OnInit {

  ngOnInit() {
  }

  email: string;
  password: string;

  constructor(public authService: AuthService) {}

  /*signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }
  */

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

  logout() {
    this.authService.logout();
  }
}
