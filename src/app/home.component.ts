//Main File for the FrontEnd Template
import { Component } from '@angular/core';
import { Solutions } from "./solutions.component";
import { NewSolutionComponent } from "./new-solution.component";

@Component({
  selector: 'home',
  // templateUrl: './app.component.html',
  template: `
  <new-solution></new-solution>
  <Solutions></Solutions>`,
  styleUrls: ['./app.component.css']
})

//Deleted
//<new-solution (onPosted)="onPosted($event)"></new-solution>


//(onPosted)="onPosted($event)" is responsible for specifying where the data is coming from so the event can listen.
//$event = event payload
export class HomeComponent {

  //viewchild decorator paramater is used to specify component we will be accessing.
  //Watches component that is passed in.

  // @ViewChild(Solutions) solutions : Solutions;
  //@ViewChild(Solutions) - Watches Solutions Component
  //solutions - Name given to viewchild method
  //: Solutions; - Specifying Type with intellisense

  // onPosted(solution) {
  //   this.solutions.solutions.push(solution)
  // }
}
