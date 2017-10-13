import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';

@Component({
    selector: 'st-log',
    template: `
    
    `
})
export class UseLogComponent  {
    
    // Depedency Injection 
    constructor(private log : LogService) { 
    }
    
    ngOnInit() {
       this.log.log("This is to test!");
       this.log.error("This is an error!");
    }
  
}