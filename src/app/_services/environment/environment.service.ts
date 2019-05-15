import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

constructor() { }
  baseUrl(): string {
    return 'http://localhost:5000/api/';
  }
  authToken(): string {
    return localStorage.getItem('token');
  }
  setAuthToken(token: string) {
    localStorage.setItem('token', token);
  }
  removeAuthToken() {
    localStorage.removeItem('token');
  }
}
