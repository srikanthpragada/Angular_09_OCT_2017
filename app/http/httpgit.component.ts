import { Component } from '@angular/core';
import { GitUser } from './GitUser';
import { GitRepo } from './GitRepo';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';


@Component(
    {
        selector: 'git-user',
        templateUrl: './httpgit.component.html'
    })
export class HttpGitComponent {
    public user: GitUser;
    public repos : GitRepo[];
    private url: string = "https://api.github.com/users/";
    public isLoading: boolean = false;
    public message: string = null;

    constructor(private http: Http) {
    }

    getDetails(username: string): void {
        this.user = null;
        this.message = null;
        this.isLoading = true; 

        this.http.get(this.url + username)
            .map( resp => resp.json())
            .finally( () => this.isLoading = false)
            .subscribe(resp => this.user = <GitUser> resp,
                       error => this.message = "Sorry! User Not Found!");
    }

    showDetails( value : any) {
       console.log(value);
       this.user = <GitUser> value; 
       console.log(this.user);
    }

    getRepos(username: string): void {
        this.http.get(this.url + username + "/repos")
            .map( resp => resp.json())
            .finally( () => this.isLoading = false)
            .subscribe(resp => this.repos = <GitRepo[]> resp,
                       error => this.message = "Sorry! User Not Found!");

    }

     
}
