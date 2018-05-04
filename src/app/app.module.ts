//Main File with all the Imports and Declarations
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule } from "@angular/material";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { Solutions } from "./solutions.component";
import { WebService } from "./web.service";
import { HttpModule } from "@angular/http";
import { NewSolutionComponent } from "./new-solution.component";
import { NavComponent } from "./nav.component";
import { HomeComponent } from "./home.component";
import { RegisterComponent } from "./register.component";

var routes = [
  {
  path: "", 
  component: HomeComponent
  },
  {
    path: "solutions", 
    component: Solutions
  },
  {
    path: "solutions/:type", 
    component: Solutions
  },
  {
    path: "register",
    component: RegisterComponent
  }
]

@NgModule({
  declarations: [
    AppComponent, Solutions, NewSolutionComponent, NavComponent, HomeComponent, RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    HttpModule,
    FormsModule,
    //forRoot is used to pass route into routerModule
    //router for frontend
    RouterModule.forRoot(routes)
  ],
  providers: [
    WebService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
