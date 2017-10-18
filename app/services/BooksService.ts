import { Injectable } from "@angular/core";
import { WebBook } from 'app/http/Webbook';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {Observable} from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';

@Injectable()
export class BooksService {
    URL : string = "http://test.srikanthpragada.com/api/books";
    constructor(private http: Http) {
    }

    getBooks() : Observable<WebBook[]>
    {
        return this.http.get(this.URL)
                  .map(resp => <WebBook[]> resp.json());
    }

    getBook(id : number) : Observable<WebBook>
    {
        return this.http.get(this.URL + "/" + id)
                  .map(resp => <WebBook> resp.json()) // convert to JSON
    }
    
}