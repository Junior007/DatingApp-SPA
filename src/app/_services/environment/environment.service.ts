import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

constructor() { }
  baseUrl(){
    return 'http://localhost:5000/api/';
  }
  authToken(){
    return localStorage.getItem('token');
  }
  setAuthToken(token: string){
    localStorage.setItem('token', token);
  }
  removeAuthToken(){
    localStorage.removeItem('token');
  }
}
