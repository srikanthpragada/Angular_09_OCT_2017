import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

// import { LoginComponent } from './forms/login.component'; 
import { RLoginComponent } from './forms/rlogin.component'; 
import { BooksComponent } from './http/books.component'; 
import { HttpGitComponent } from './http/httpgit.component'; 

 @NgModule({
  declarations: [HttpGitComponent ],
  imports: [
    BrowserModule, ReactiveFormsModule , HttpModule
  ],
  providers: [ ],
  bootstrap: [HttpGitComponent ]
})
export class AppModule { }
 