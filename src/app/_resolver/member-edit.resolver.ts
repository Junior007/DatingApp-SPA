import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/all';
import { AlertifyService } from '../_services/alertify/alertify.service';
import { AuthService } from '../_services/auth/auth.service';
import { UsersService } from '../_services/users/users.service';


@Injectable()

export class MemberEditResolve implements Resolve<User>{

    constructor(private userService: UsersService
              , private authService: AuthService
              , private router: Router
              , private alertifyService: AlertifyService) {

    }
    //
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
        return this.userService.getUser(this.authService.userId()).pipe(
            catchError(
                error => {
                    this.alertifyService.message(error);
                    this.router.navigate(['/members']);
                    return of(null);
                }
            )
        );

    }

}
