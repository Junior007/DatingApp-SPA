import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MemberEditComponent } from '../components/members/member-edit/member-edit.component';


@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<MemberEditComponent> {


  constructor() {

  }

  canDeactivate(
    memberEditComponent: MemberEditComponent): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    {

      if (memberEditComponent.editForm.dirty) {
        return confirm('Are you sure you want to continue? Any unsaved changes will be lost');
      }

      return true;
    }

  }
}