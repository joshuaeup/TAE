//File For the webservice Methods
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";
//used to let angular know this is a service
import { Injectable } from "@angular/core";
//A Subject allows Observers to subscribe to it.
//Instead of making the array public to all components
import { Subject } from "rxjs/Rx";
import { MatSnackBar } from  "@angular/material";

//used to tell angular this is a service
@Injectable()
export class WebService {
    //base url for api
    BASE_URL = "http://localhost:3000/api"

    //Private Array that will hold data that is pulled from api and data that is stored with input fields.
    //Value is passed to subject where observers can view when data is updated.
    private solutionStore = []


    //Creating a new Subject and storing it inside solutionsSubject
    private solutionSubject = new Subject();

    //storing subject in solutions variable asObservable so it cannot be edited outside of class
    solutions = this.solutionSubject.asObservable();
    

    //constructor with http needed in order to use http in class
    constructor(private http: Http, private sb : MatSnackBar) {
        this.getSolution();
    }

    //Try Catch only works with async and await functions

    async getSolution(type) {
        type = (type) ? '/' + type : '';
        //using http to grab data from selected route and ustilize promise to wait for response.
        //waiting for solutions to be received from the api then storing in the response variable.
        this.http.get(this.BASE_URL + "/solutions").subscribe(response => {
            //storing the response in json format in the solutionStore variable.
            this.solutionStore = response.json();

            //Passes value into subject to let observables know there may be an update
            this.solutionSubject.next(this.solutionStore);

        }, error => {
           this.handleError("Unable to get messages");
        });
    }

    //using http to post data from seleted route. second param is object being posted
    async postSolution(solution) {
        //try posting if cannot post console.log error
        try {
        //using http to grab data from selected route and ustilize promise to wait for response.
        //waiting for solutions to be received from the api then storing in the response variable.
        let response = await this.http.post(this.BASE_URL + "/solutions", solution).toPromise();
        //storing the response in json format in the solutions variable.
        this.solutionStore.push(response.json());
        //updates solutions subject with value inside solutionsStore that is updated above.
        this.solutionSubject.next(this.solutionStore);
        } catch (error) {
            this.handleError("Unable to post message");
        }
    }

    private handleError(error) {
         //Log error in console.
         console.error(error);
         //Use MatSnackBar to display error then close server after 2000 seconds
         this.sb.open(error, "close", {duration: 2000});
    }
}