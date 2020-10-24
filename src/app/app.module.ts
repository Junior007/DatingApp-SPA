import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
//
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ValueComponent } from './components/values/value.component';

import { MemberListComponent } from './components/members/member-list/member-list.component';
import { MemberCardComponent } from './components/members/member-card/member-card.component';
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
      MemberCardComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            tokenGetter: (request) => environmentService.authToken(),
            allowedDomains: [environmentService.baseUrlClient()],
            disallowedRoutes: [environmentService.baseUrlClient() + 'api/auth']
         }
      }

      )
   ],
   providers: [
      AuthService,
      ValuesService,
      EnvironmentService,
      UrlInterceptorProvider,
      SecurityInterceptorProvider,
      ErrorInterceptorProvider,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
