import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/_services/alertify/alertify.service';
import { UsersService } from 'src/app/_services/users/Users.service';

import { User } from 'src/app/models/all';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  users: User[];
  constructor(private usersService: UsersService, private alertifyService: AlertifyService) { }

  ngOnInit() {
    this.loadUsers()
  }
  //
  loadUsers() {
    this.usersService.getUsers().subscribe(
      data => { this.users = data; },
      error => { this.alertifyService.error(error); }
    );
  }
}
