import { Component  } from '@angular/core';
import { BracketsPipe  } from './brackets.pipe';

@Component({
    selector: 'st-pipes',
    template: `
        <h1>
           {{ name | brackets }}
           <p></p>
           {{ name | brackets : 'u' }}
           <p></p>
           {{ today  | date : 'longDate'}}
           <p></p>
           {{ today  | date : 'dd-MM-y'}}
           <p></p>
           {{ amount | currency : 'INR': true :'10.2-2' }}
           <p></p>
           {{ amount | currency  }}
           <p></p>
           {{ amount | number : '8.2-4' }}
           <p></p>
           {{ 0.1234 | percent }}
           <p></p>
           {{ name  | uppercase  }}
           <p></p>
           {{ name  | slice : -5  | uppercase  }}
           <p></p>
           {{ person | json }}
           <p></p>
         

         </h1>
    `
})
export class PipesDemoComponent   {
   today : Date;
   amount : number;
   name : string;
   person  = { "name" : "Steve", "phone" : "393939393"};

   constructor() {
       this.today = new Date();
       this.amount = 23939393.398;
       this.name ="Srikanth Technologies";
   }
}