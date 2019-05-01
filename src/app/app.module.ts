import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ValueComponent } from './value/value.component';
//
import { ErrorInterceptorProvide } from './_services/error.interceptor';
import { AuthService } from './_services/auth.service';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      RegisterComponent,
      ValueComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvide
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
