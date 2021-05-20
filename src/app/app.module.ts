import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
//
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ValueComponent } from './components/values/value.component';
//
import { MemberListComponent } from './components/members/member-list/member-list.component';
import { MemberCardComponent } from './components/members/member-card/member-card.component';
import { MemberDetailComponent } from './components/members/member-detail/member-detail.component';
//
import { ErrorInterceptorProvider } from './_interceptors/error/error.interceptor';
import { SecurityInterceptorProvider } from './_interceptors/security/security.interceptor';
import { UrlInterceptorProvider } from './_interceptors/url/url.interceptor';
//
import { AuthService } from './_services/auth/auth.service';
import { ValuesService } from './_services/values/values.service';
import { EnvironmentService } from './_services/environment/environment.service';
import { AppRoutingModule } from './app-routing.module';
import { appRoutes } from './routes';
import { MemberDetailedResolve } from './_resolver/member-detailed.resolver';
import { MemberListResolve } from './_resolver/member-list.resolver';
import { UsersService } from './_services/users/users.service';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { MemberEditComponent } from './components/members/member-edit/member-edit.component';
import { MemberEditResolve } from './_resolver/member-edit.resolver';
import { PreventUnsavedChangesGuard } from './_guards/prevent-unsaved-changes.guard';
import { PhotoEditorComponent } from './components/members/photo-editor/photo-editor.component';
import { FileUploadModule } from 'ng2-file-upload';





const environmentService = new EnvironmentService();

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      RegisterComponent,
      ValueComponent,
      HomeComponent,
      LoginComponent,
      MemberListComponent,
      MemberCardComponent,
      MemberDetailComponent,
      MemberEditComponent,
      PhotoEditorComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      RouterModule.forRoot(appRoutes),
      HttpClientModule,
      FileUploadModule,
      JwtModule.forRoot({
         config: {
            tokenGetter: (request) => environmentService.authToken(),
            allowedDomains: [environmentService.baseUrlClient()],
            disallowedRoutes: [environmentService.baseUrlClient() + 'api/auth']
         }
      }

      ),
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),
      NgxGalleryModule

   ],
   providers: [
      UrlInterceptorProvider,
      SecurityInterceptorProvider,
      ErrorInterceptorProvider,
      PreventUnsavedChangesGuard,
      AuthService,
      ValuesService,
      UsersService,
      EnvironmentService,
      MemberEditResolve,
      MemberDetailedResolve,
      MemberListResolve,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
