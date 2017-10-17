import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

// import { LoginComponent } from './forms/login.component'; 
import { RLoginComponent } from './forms/rlogin.component'; 
import { BooksComponent } from './http/books.component'; 
import { HttpGitComponent } from './http/httpgit.component'; 
import { AddBookComponent } from './http/add-book.component'; 
import { WebBooksComponent } from './http/webbooks.component'; 
import {  BooksService } from './services/BooksService'; 

import {  ListComponent } from './route/list.component'; 
import {  DetailsComponent } from './route/details.component'; 
import {  MainComponent } from './route/main.component'; 
import {  AddComponent } from './route/add.component'; 

//Routing 
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
   { path: 'list', component: ListComponent },
   { path: 'add', component: AddComponent },
   { path: 'details/:id', component: DetailsComponent },
   { path: '', component : ListComponent, pathMatch: 'full'},
   { path: '**', component: ListComponent}
];


 @NgModule({
  declarations: [WebBooksComponent, AddComponent, ListComponent, DetailsComponent, MainComponent],
  imports: [
    BrowserModule, FormsModule , HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BooksService ],
  bootstrap: [WebBooksComponent ]
})
export class AppModule { }
 