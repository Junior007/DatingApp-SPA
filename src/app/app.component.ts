import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from './_services/environment/environment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private env: EnvironmentService) {

  }
  //
  ngOnInit() {

  }
}
