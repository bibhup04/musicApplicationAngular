import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponentComponent } from './base-component/base-component.component';
import { RegisterComponent } from './loginAndRegister/register/register.component';
import { LoginComponent } from './loginAndRegister/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from './HttpInterceptorService';
import { HomeComponent } from './HomePage/home/home.component';
import { AdminComponent } from './HomePage/admin/admin.component';
import { UnauthorizedComponentComponent } from './unauthorized-component/unauthorized-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponentComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    UnauthorizedComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
