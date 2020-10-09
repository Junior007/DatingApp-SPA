import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../_services/auth/auth.service';
import { LoginUser } from 'src/app/models/all';
import { AlertifyService } from 'src/app/_services/alertify/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: LoginUser = {username: '', password: ''};
  @Output() cancelRegister = new EventEmitter();

  constructor(private authService: AuthService, private alertifyService:AlertifyService) { }

  ngOnInit() {
  }
  //
  register(){
    this.authService.register(this.model)
    .subscribe(
      () => {
        this.alertifyService.message('Registro completo');
      }
      , error => {
        this.alertifyService.warning(error);

      });
  }
  //
  cancel(){
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }
}
