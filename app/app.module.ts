import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProductsListComponent } from './icc/products-list.component';
import { ProductDetailsComponent } from './icc/product-details.component';

import { UseLogComponent } from './services/use-log.component';
import { LogService } from './services/log.service';
 
@NgModule({
  declarations: [
     UseLogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LogService ],
  bootstrap: [UseLogComponent]
})
export class AppModule { }
