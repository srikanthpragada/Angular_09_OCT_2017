import { Component  } from '@angular/core';

@Component({
    selector: 'st-binding',
    templateUrl: './binding.component.html'
})
export class BindingComponent  {
   bright : boolean = true;
   bold : boolean = true;

   myclasses = {"bright" : true, "bold" : true};

   toggleBright() {
       this.bright = ! this.bright;
       this.myclasses["bright"] = !this.myclasses["bright"];
   }

   dummy() {

   }
    
}