import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { EnvironmentService } from '../environment/environment.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private env: EnvironmentService) { }

  login(model: any) {
    return this.http.post('auth/login', model)
      .pipe(map((response: any) => {
        const user = response;
        if (user) {
          this.env.setAuthToken(user.token);
        }

      }));

  }
  //
  logOut(){
    this.env.removeAuthToken();
  }
  //
  register(model: any) {
    return this.http.post('auth/register', model);
  }
  //
  isLogged(){
    const token = this.env.authToken();
    return !!token;
  }
}
