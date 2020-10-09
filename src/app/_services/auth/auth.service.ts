import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EnvironmentService } from '../environment/environment.service';
import { LoginUser } from 'src/app/models/all';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient, private env: EnvironmentService) { }

  login(model: LoginUser) {
    return this.http.post('auth/login', model)
      .pipe(map((response: any) => {
        const user = response;
        if (user) {
          this.env.setAuthToken(user.token);
        }

      }));

  }
  //
  logOut(): Observable<boolean> {
    this.env.removeAuthToken();
    return new Observable<boolean>(
      subscriber=>{
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
    return !!token;
  }
}
