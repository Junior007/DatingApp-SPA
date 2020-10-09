import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {appRoutes} from './routes';
import { AppComponent } from './app.component';
//
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ValueComponent } from './components/values/value.component';
//
import { AuthService } from './_services/auth/auth.service';
//
import { ErrorInterceptorProvider } from './_interceptors/error/error.interceptor';
import { SecurityInterceptorProvider } from './_interceptors/security/security.interceptor';
import { UrlInterceptorProvider } from './_interceptors/url/url.interceptor';
import { ValuesService } from './_services/values/values.service';
import { EnvironmentService } from './_services/environment/environment.service';
import { SampleComponent } from './components/sample/sample.component';
import { Router, RouterModule } from '@angular/router';


@NgModule({
   declarations: [
      SampleComponent,
      AppComponent,
      NavComponent,
      RegisterComponent,
      ValueComponent,
      HomeComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      //RouterModule.forRoot(appRoutes),
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
