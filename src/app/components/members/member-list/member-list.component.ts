import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/_services/alertify/alertify.service';
import { UsersService } from 'src/app/_services/users/users.service';

import { User } from 'src/app/models/all';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  users: User[];
  constructor(private usersService: UsersService, private alertifyService: AlertifyService, private  activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.loadUsers()
    this.activatedRoute.data.subscribe(
      data => {
        this.users = data['users'];
      }
    );
  }
  //
  /*
  loadUsers() {
    this.usersService.getUsers().subscribe(
      data => { this.users = data; },
      error => { this.alertifyService.error(error); }
    );
  }*/
}
