import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth/auth.service';
import { LoginUser } from 'src/app/models/all';
import {AlertifyService} from '../../_services/alertify/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  model: LoginUser = {username: '', password: ''};
  constructor(private authService: AuthService, private alertifyService: AlertifyService) { }

  ngOnInit() {
  }
  //
  login() {
    this.authService.login(this.model).subscribe(
      next => {
        this.alertifyService.message('login realizado');
      },
      error => {
        this.alertifyService.warning('Error de autentificación');
      });
  }

  //
  isLogged(){
    return this.authService.isLogged();
  }

}
