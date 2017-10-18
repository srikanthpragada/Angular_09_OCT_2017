import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Routing 
import { RouterModule, Routes } from '@angular/router';

/*
import { LoginComponent } from './forms/login.component'; 
import { RLoginComponent } from './forms/rlogin.component'; 
import { BooksComponent } from './http/books.component'; 
import { HttpGitComponent } from './http/httpgit.component'; 
import { AddBookComponent } from './http/add-book.component'; 
import { WebBooksComponent } from './http/webbooks.component'; 
import {  BooksService } from './services/BooksService'; 

*/
import {  ListComponent } from './route/list.component'; 
import {  DetailsComponent } from './route/details.component'; 
import {  MainComponent } from './route/main.component'; 
import {  AddComponent } from './route/add.component'; 
import {  DeleteComponent } from './route/delete.component'; 


const appRoutes: Routes = [
   { path: 'list', component: ListComponent },
   { path: 'add', component: AddComponent },
   { path: 'details/:code', component: DetailsComponent },
   { path: 'delete/:code', component: DeleteComponent },
   { path: '', component : ListComponent, pathMatch: 'full'},
   { path: '**', component: ListComponent}
];

 @NgModule({
  declarations: [DeleteComponent, AddComponent,
                 ListComponent, DetailsComponent, 
                 MainComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ ],
  bootstrap: [ MainComponent ]
})
export class AppModule { }
 