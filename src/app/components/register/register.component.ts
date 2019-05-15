import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../_services/auth/auth.service';
import { LoginUser } from 'src/app/models/all';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: LoginUser = {username: '', password: ''};
  @Output() cancelRegister = new EventEmitter();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  //
  register(){
    this.authService.register(this.model)
    .subscribe(
      () => {
        console.log('Registro completo');
      }
      , error => {
        console.log(error);
      });
  }
  //
  cancel(){
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }
}
