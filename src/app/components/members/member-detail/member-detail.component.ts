import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/all';
import { AlertifyService } from 'src/app/_services/alertify/alertify.service';
import { UsersService } from 'src/app/_services/users/Users.service';


@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {

  user: User;

  constructor(private userService: UsersService, private alertifyService: AlertifyService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //this.loadUser();
    this.activatedRoute.data.subscribe(
      data => {
        this.user = data['user'];
      }
    );

  }
  //
  /*
  loadUser() {
    this.userService.getUser(+this.activatedRoute.snapshot.params['id']).subscribe(
      (user: User) => {
        this.user = user;
      }
      ,
      error => {
        this.alertifyService.error(error);

      }


    );
  }*/
}
