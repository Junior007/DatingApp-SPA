import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EnvironmentService } from '../environment/environment.service';
import { LoginUser, UserToken } from 'src/app/models/all';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwtHelperService = new JwtHelperService();
  // private decodedToken: any;

  constructor(private http: HttpClient, private env: EnvironmentService) { }

  logIn(model: LoginUser): Observable<void> {
    return this.http.post('auth/login', model)
      .pipe(map((response: UserToken) => {
        const user = response;
        if (user) {
          this.env.setAuthToken(user.token);
        }

      }));

  }
  //
  user(): string {
    const token = this.env.authToken();
    if (token) {
      const decodedToken = this.jwtHelperService.decodeToken(token);
      return decodedToken.unique_name;
    } else {
      return '';
    }
  }
  //
  userId(): number {
    const token = this.env.authToken();
    if (token) {
      const decodedToken = this.jwtHelperService.decodeToken(token);
      return decodedToken.nameid;
    } else {
      return -1;
    }
  }
  //
  logOut(): Observable<boolean> {
    this.env.removeAuthToken();
    return new Observable<boolean>(
      subscriber => {
        subscriber.next(true);
      }
    );
  }
  //
  register(model: LoginUser) {
    return this.http.post('auth/register', model);
  }
  //
  isLogged() {
    const token = this.env.authToken();
    return !this.jwtHelperService.isTokenExpired(token);
  }
}
