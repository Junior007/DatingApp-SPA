import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/all';
import { AlertifyService } from 'src/app/_services/alertify/alertify.service';
import { UsersService } from 'src/app/_services/users/Users.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {

  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private userService: UsersService, private alertifyService: AlertifyService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.loadUser();
    this.activatedRoute.data.subscribe(
      data => {
        this.user = data['user'];
      }
    );
    this.setGalleryOptions();
    this.galleryImages = this.getImages();
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

  //
  setGalleryOptions() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
  }
  //
  getImages(): NgxGalleryImage[] {
    const imagesUrl = [];
    for (const photo of this.user.photos) {
      imagesUrl.push({
        small: photo.url,
        medium: photo.url,
        big: photo.url,
        description: photo.description
      });
    }
    return imagesUrl;
  }
}
