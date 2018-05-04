//File for retrieving data and sending to main template
import { Component } from "@angular/core";
import { WebService } from "./web.service";
//gives access to rout paramaters
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "Solutions",
  // templateUrl: './app.component.html',
  template: `
  <div *ngFor="let solution of webService.solutions | async">
        <mat-card class="card">
            <mat-card-title [routerLink]="['/solutions', solution.type]" style="cursor: pointer;">{{solution.type}}</mat-card-title>
            <mat-card-content>
                Error: {{solution.error}} 
            </mat-card-content>
            <mat-card-content>
                Solution: {{solution.solution}}
            </mat-card-content>
        </mat-card>
    </div>
    `
  // styleUrls: ['./app.component.css']
})
// (|) Pipe takes in data as input and transforms to a desired output 
// In the example above it is transforming data into async so that it waits until data arrives
//[routerLink]="['/solutions', solution.type]"
//2 way binding - route - param to add
export class Solutions {
    //Local solutions variable
    // solutions;

    //Dont add costly request inside the constructor because it would delay the app starting until data comes in.
    constructor(private webService: WebService, private route: ActivatedRoute) {}
    //Gets called when component is done initializing and after constructor is called. 
    //to use await(Wait for response) it must be within an async function
  
    ngOnInit() {
        //grabbing type paramater and storing it in the "type" variable
        let type = this.route.snapshot.params.type;
        this.webService.getSolution(type);

        //accessing the solutionSubject from the webservice
        //then subscribing to any update that comes in.
        //then setting the value of the local variable to the value from the solutionSubject
        // this.webService.solutions.subscribe(solutions => {
        //     this.solutions = solutions;
        // })
    }
  

}
