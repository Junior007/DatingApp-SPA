import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth/auth.service';
import { AlertifyService } from '../../_services/alertify/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private authService: AuthService, private alertifyService: AlertifyService) { }

  ngOnInit() {
  }

  //
  isLogged() {
    return this.authService.isLogged();
  }
  //
  //
  logOut() {
    this.authService.logOut().subscribe(
      next => { this.alertifyService.message('Cerró la sesión') }

    );
  }
}
