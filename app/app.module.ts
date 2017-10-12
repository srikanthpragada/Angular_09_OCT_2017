import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CourseComponent } from './course.component';
import { BindingComponent } from './binding.component';
import { DirComponent } from './dir.component';
import { PipesDemoComponent } from './pipes/pipesdemo.component';

@NgModule({
  declarations: [
    PipesDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PipesDemoComponent]
})
export class AppModule { }
