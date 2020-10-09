import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  constructor(private authService: AuthService) { }

  //  
  ngOnInit() {

  }
  //
  registerToggle() {
    this.registerMode = !this.registerMode;
  }
  //
  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode; //bastaría con poner false, pero así se ejemplifica el paso de parámetros
  }
  //
  isLogged() {
    return this.authService.isLogged();
  }
  //

}
