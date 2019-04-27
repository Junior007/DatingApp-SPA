import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ValuesService } from '../_services/values.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  values: any;
  constructor(private valuesService: ValuesService) {}

  ngOnInit() {
    this.getValues();
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
  getValues() {
    this.valuesService.getValues()
    .subscribe(response => {
      this.values = response;
      console.log('obtenidos valores');
    },
    error => {
      console.log(error);
    });

  }
}
