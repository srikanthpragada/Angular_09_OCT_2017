import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// import { LoginComponent } from './forms/login.component'; 
import { RLoginComponent } from './forms/rlogin.component'; 

 @NgModule({
  declarations: [RLoginComponent ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [RLoginComponent ]
})
export class AppModule { }
 