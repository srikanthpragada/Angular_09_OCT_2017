import { Component, OnInit } from '@angular/core';
import { Book } from './Book';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Component({
    selector: 'st-books',
    templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {
    books: Book[];
    books2 : Book[];
    constructor(private http: Http) {
    }

    ngOnInit() {
       this.getBooksWithObservable();
       this.getBooksWithPromise();
    }

    getBooksWithObservable() {
         this.http.get("assets/books.json")
                  .map(resp => resp.json()) // convert to JSON
                  .subscribe( resp => this.books2= <Book[]> resp);
    }

    getBooksWithPromise() {
         
         this.http.get("assets/books.json")
             .toPromise()
             .then(response => this.books = response.json());
    }


}