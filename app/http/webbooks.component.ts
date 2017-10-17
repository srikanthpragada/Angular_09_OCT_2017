import { Component, OnInit } from '@angular/core';
import { WebBook } from './WebBook';
import { BooksService } from 'app/services/BooksService';

@Component({
    selector: 'st-books',
    templateUrl: './webbooks.component.html'
})
export class WebBooksComponent implements OnInit {
    books: WebBook[];
    constructor(private booksService:BooksService) {
    }

    ngOnInit() {
       this.books = this.booksService.getBooks();
       console.log(this.books)
    }
}