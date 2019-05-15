import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Value } from '../../models/all';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ValuesService {
  constructor(private http: HttpClient) { }
    //
    getValues(): Observable<Value[]> {
      return this.http.get<Value[]>('values');
      // .pipe(map((data: any[]) => data.map((item: any) => new Value(item.id, item.name))));
    }
}
