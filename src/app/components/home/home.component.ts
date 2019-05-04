import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  constructor() {}

  // Para ejemplo de paso de parametros
  values: any = ['valor 1', 'valor2'];
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
  // Ejemplo de recogida de eventos (parámetros)
  getEventFromChild(param: any) {
    alert(param.param1);
    alert(param.param2);
  }
}
