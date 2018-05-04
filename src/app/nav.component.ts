//File for retrieving data and sending to main template
import { Component } from "@angular/core";
@Component({
  selector: "Nav",
  // templateUrl: './app.component.html',
  //routerLink is used to assign route to button
  template: `
    <mat-toolbar color="primary">
        <button mat-button routerLink="/" >Trial and Error</button>
        <button mat-button routerLink="/solutions" >Solutions</button>
    </mat-toolbar>
  `
})
export class NavComponent {
    //Dont add costly request inside the constructor because it would delay the app starting until data comes in.
    constructor() {}
    //Gets called when component is done initializing and after constructor is called. 
    //to use await(Wait for response) it must be within an async function
  
  

}
