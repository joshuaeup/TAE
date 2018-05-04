//File for creating and posting new data
import { Component } from "@angular/core";
import { WebService } from "./web.service";
@Component({
  selector: "new-solution",
  template: `
    <mat-card class="card">
        <mat-card-content>
            <mat-input-container>
                <input [(ngModel)]="solution.type" matInput placeholder="Type">
            </mat-input-container>
            <mat-input-container>
                <input [(ngModel)]="solution.error" matInput placeholder="Error">
            </mat-input-container>
            <mat-input-container>
                <textarea [(ngModel)]="solution.solution" matInput placeholder="Solution"></textarea>
            </mat-input-container>
            <mat-card-actions>
                <button (click)="post()" mat-button color="primary">POST</button>
            </mat-card-actions>
            </mat-card-content>
    </mat-card>`
  
    // [(ngModel)] Is used for 2 way binding. does not set static value like value="" does
})
export class NewSolutionComponent {

    //Dont add costly request inside the constructor because it would delay the app starting until data comes in.
    constructor(private webService: WebService) {}
   
    solution = {
        type: "",
        error: "",
        solution: "",
        
    }


    post() {
        //using web service to post to back end
        this.webService.postSolution(this.solution);
    }

}
