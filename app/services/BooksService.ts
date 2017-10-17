import { Injectable } from "@angular/core";
import { WebBook } from 'app/http/Webbook';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';

@Injectable()
export class BooksService {
    books : WebBook[];
    URL : string = "http://test.srikanthpragada.com/api/books";
    constructor(private http: Http) {
    }

    getBooks() : WebBook[]
    {
        console.log("getBooks()");
        // var books :  WebBook[];
        this.http.get(this.URL)
                  .map(resp => resp.json()) // convert to JSON
                  .subscribe( resp => this.books = <WebBook[]> resp ,
                              error => this.books = null
                  );
        console.log(this.books);
        return  this.books; 
    }

    getBook(id : number) : WebBook
    {
        var book :  WebBook;
        this.http.get(this.URL + "/" + id)
                  .map(resp => resp.json()) // convert to JSON
                  .subscribe( resp => book = <WebBook> resp,
                              error => book = null
                  );
                  
        return  book; 
    }
    
}