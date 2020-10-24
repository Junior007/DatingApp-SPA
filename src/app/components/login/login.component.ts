import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth/auth.service';
import { LoginUser } from 'src/app/models/all';
import { AlertifyService } from '../../_services/alertify/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  model: LoginUser = {username: '', password: ''};

  constructor(private authService: AuthService, private alertifyService: AlertifyService, private router: Router) { }

  ngOnInit() {
  }
  //
  login() {
    this.authService.logIn(this.model).subscribe(
      next => {
        this.alertifyService.message('login realizado');
      },
      error => {
        this.alertifyService.warning('Error de autentificación');
      },
      () => {
        this.router.navigate(['/members']);
      });
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
  //
  isLogged(){
    return this.authService.isLogged();
  }

}
