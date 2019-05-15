import { Component, OnInit, Input } from '@angular/core';
import { ValuesService } from 'src/app/_services/values/values.service';
import { Value } from 'src/app/models/all';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})

export class ValueComponent implements OnInit {
  //
  values: Value[];
  constructor(private valuesService: ValuesService) {}
  ngOnInit() { 
    this.valuesService.getValues().subscribe(
      data => this.values = data,
    );
  }


}
