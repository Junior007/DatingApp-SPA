import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/all';
import { AlertifyService } from '../_services/alertify/alertify.service';
import { UsersService } from '../_services/users/users.service';


@Injectable()

export class MemberDetailedResolve implements Resolve<User>{

    constructor(private userService: UsersService, private router: Router, private alertifyService: AlertifyService) {

    }
    //
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
        return this.userService.getUser(route.params['id']).pipe(
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
