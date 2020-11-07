import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/all';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  getUser(id: number): Observable<User> {
    return this.http.get<User>('users/' + id.toString());
  }
  //
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('users');
  }
  //
  putUser(id: number, user: User) {
    return this.http.put('users/' + id, user);
  }

}
