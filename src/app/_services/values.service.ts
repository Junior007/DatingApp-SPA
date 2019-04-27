import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ValuesService {
  baseUrl = 'http://localhost:5000/api/values';
  constructor(private http: HttpClient) { }

    //
    getValues() {
      return this.http.get(this.baseUrl);
      /*
      .subscribe(response => {
        this.values = response;
        console.log('obtenidos valores');
      },
      error => {
        console.log(error);
      });*/
    }
}
