import { Component } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html'
})
export class CourseComponent {
  title : string = 'Angular Course';
  duration: number =  12; 
  topics : string[] = ["Directives", "Servies", "Ajax","Routing"];
  message : string = "";

  addTopic(newtopic :string) {
      this.message = "";
      for(let topic of this.topics)
      {
          if (topic == newtopic)
          {
            this.message = "Sorry! Duplicate Topic!";
            return; 
          }
      }

      this.topics.push(newtopic);
  }

  deleteTopic(topic :string) {
      this.message = "";
      for(let index in this.topics)
      {
          if ( this.topics[index] == topic)
          {
            // remove element at index 
            this.topics.splice( parseInt(index),1); 
            return; 
          }
      }

      this.message = "Sorry! Topic not found!";
  }


}
