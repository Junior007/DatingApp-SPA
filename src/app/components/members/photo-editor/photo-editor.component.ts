import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Photo } from 'src/app/models/all';
import { FileUploader } from 'ng2-file-upload';
import { EnvironmentService } from 'src/app/_services/environment/environment.service';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { UsersService } from 'src/app/_services/users/users.service';
import { AlertifyService } from 'src/app/_services/alertify/alertify.service';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {

  @Input() photos: Photo[];
  // @Output() getPhotoMemberChange = new EventEmitter<string>();

  public uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  hasAnotherDropZoneOver: boolean;
  response: string;
  currentMain: Photo;

  constructor(
    private environmentService: EnvironmentService,
    private authService: AuthService,
    private usersService: UsersService,
    private alertifyService: AlertifyService) { }

  ngOnInit() {
    this.initializeUploader();
  }

  //
  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.environmentService.baseUrl() + 'users/' + this.authService.userId() + '/photos',
      authToken: 'Bearer ' + this.environmentService.authToken(),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024,

    });

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;

    this.response = '';

    this.uploader.response.subscribe(res => this.response = res);

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const res: Photo = JSON.parse(response);
        /*const photo = {
          id: res.id,
          url: res.url,
          dataAdded: res.dateAdded,
          description: res.description,
          isMain: res.isMain
        };*/

        this.photos.push(res);


      }
    };
  }
  //
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
  //
  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
  //
  setMainPhoto(photo: Photo) {
    this.usersService.setMainPhoto(this.authService.userId(), photo.id).subscribe(
      () => {
        console.log('Set main photo');
        this.currentMain = this.photos.filter(p => p.isMain)[0];
        this.currentMain.isMain = false;
        photo.isMain = true;
        const user = this.environmentService.getUser();
        user.photoUrl = photo.url;
        this.environmentService.setUser(user);

      },
      error => {
        this.alertifyService.error('There has been and error when try set main photo');
      }

    );
  }
  //
  deletePhoto(photoId: number) {
    this.alertifyService.confirm('Are you sure you want to delete this photo?',
      () => {

        this.usersService.deletePhoto(this.authService.userId(), photoId).subscribe(
          () => {
            this.photos.splice(this.photos.findIndex(p => p.id === photoId), 1);
            this.alertifyService.success('Photo has been deleted');
          },
          error => {
            this.alertifyService.error('There has been and error when try to delete photo');
          });
      }
    );
  }
}
