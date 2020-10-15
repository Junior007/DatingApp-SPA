import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth/auth.service';
import { AlertifyService } from '../../_services/alertify/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private authService: AuthService, private alertifyService: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  //
  isLogged() {
    return this.authService.isLogged();
  }
  user() {

    return this.authService.user();

  }
  //
  //
  logOut() {
    this.authService.logOut().subscribe(
      next => {
        this.router.navigate(['/home']);
        this.alertifyService.message('Cerró la sesión');
      }

    );
  }
}
