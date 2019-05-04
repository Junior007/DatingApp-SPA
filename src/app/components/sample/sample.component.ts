import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  @Input() values: any = [];
  //More inputs if necesary
  @Output() eventToParent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  clickButton() {
    this.eventToParent.emit({param1 : 'hola', param2 : 'adios'});
  }
}
