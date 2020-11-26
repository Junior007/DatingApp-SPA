import { EventEmitter, Injectable } from '@angular/core';
import { User } from 'src/app/models/all';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  private photoUrl: BehaviorSubject<string>;
  currentPhotoUrl: Observable<string>;


  constructor() {
    const user = this.getUser();
    if (user != null && user.photoUrl != null) {
      this.photoUrl = new BehaviorSubject<string>(user.photoUrl);
    } else {
      this.photoUrl = new BehaviorSubject<string>('../../assets/user.png');
    }
    this.currentPhotoUrl = this.photoUrl.asObservable();
  }
  //
  baseUrl(): string {
    return 'https://localhost:44367/api/';
  }
  //
  baseUrlClient(): string {
    return 'http://localhost:4200/';
  }
  //
  authToken(): string {
    return localStorage.getItem('token');
  }
  //
  setAuthToken(token: string) {
    localStorage.setItem('token', token);
  }
  //
  removeAuth() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
  //
  setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.photoUrl.next(user.photoUrl);
  }
  //
  getUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

}
