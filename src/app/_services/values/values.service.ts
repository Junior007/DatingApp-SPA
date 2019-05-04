import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ValuesService {
  constructor(private http: HttpClient) { }
    //
    getValues() {
      return this.http.get('values');
    }
}
