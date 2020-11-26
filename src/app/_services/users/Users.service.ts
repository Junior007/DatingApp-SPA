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
    return this.http.get<User>('users/' + id);
  }
  //
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('users');
  }
  //
  putUser(id: number, user: User) {
    return this.http.put('users/' + id, user);
  }
  //
  setMainPhoto(userId: number, photoId: number) {
    return this.http.post('users/' + userId + '/photos/' + photoId + '/setMain/', {});
  }
  //
  deletePhoto(userId: number, photoId: number){
    return this.http.delete('users/' + userId + '/photos/' + photoId + '/DeletePhoto/', {});
  }

}
