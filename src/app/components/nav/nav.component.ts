import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  isLogged() {
    return this.authService.isLogged();
  }

  logOut() {
    this.authService.logOut();
  }
}
