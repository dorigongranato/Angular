import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './shared/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { CpfFormatDirective } from './directives/cpf-format.directive';
import { HttpInterceptorService } from './interceptor/http-interceptor.service';
import { LoginService } from './services/login.service';


registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CpfFormatDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, deps:[LoginService], multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
