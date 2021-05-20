import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../_services/auth/auth.service';
import { LoginUser } from 'src/app/models/all';
import { AlertifyService } from 'src/app/_services/alertify/alertify.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: LoginUser = { username: '', password: '' };
  registerForm: FormGroup;
  @Output() cancelRegister = new EventEmitter();


  constructor(private authService: AuthService
            , private alertifyService: AlertifyService
            , private fb: FormBuilder) { }

  ngOnInit() {
    this.createRegisterForm();
  }
  //
  createRegisterForm() {
    this.registerForm = this.fb.group({
      gender: ['male', Validators.required],
      username: ['', Validators.required],
      knownAs: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', Validators.required]

    }, { validator: this.passwordMatchValidator });
    /*
    this.registerForm = new FormGroup(
      {
        username: new FormControl('', Validators.required),
        password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
        confirmPassword: new FormControl('', Validators.required)
      }, this.passwordMatchValidator
    );
    */
  }
  //
  register() {
    /*this.authService.register(this.model)
      .subscribe(
        () => {
          this.alertifyService.message('Registro completo');
        }
        , error => {
          this.alertifyService.warning(error);

        });*/
    console.log(this.registerForm.value);
  }
  //
  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : { mismatch: true };

  }
  //
  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }
}
