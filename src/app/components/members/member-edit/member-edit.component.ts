import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/all';
import { AlertifyService } from 'src/app/_services/alertify/alertify.service';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { EnvironmentService } from 'src/app/_services/environment/environment.service';
import { UsersService } from 'src/app/_services/users/users.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  photoUrl: string;

  constructor(private route: ActivatedRoute,
              private alertify: AlertifyService,
              private userService: UsersService,
              private authService: AuthService,
              private env: EnvironmentService) { }

  @ViewChild('editForm') editForm: NgForm;

  user: User;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }
  //
  ngOnInit() {
    this.route.data.subscribe(
      data => { this.user = data['user']; }

    );
    this.env.currentPhotoUrl.subscribe(
      photoUrl => {
        this.photoUrl = photoUrl;
      }
    );
  }
  //
  updateUser() {
    this.userService.putUser(this.authService.userId(), this.user).subscribe(
      data => {
        this.editForm.reset(this.user);
        this.alertify.success('Your profile has been updated succesfully');
      },
      error => {
        this.alertify.error(error);
      }
    );

  }
  //
  updateMainPhoto(photoUrl) {
    this.user.photoUrl = photoUrl;
  }
}
