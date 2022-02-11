import { Component } from '@angular/core';
import {HomeComponent} from './home/index';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [HomeComponent, ROUTER_DIRECTIVES ]

})
export class AppComponent {
  title = 'angular-ninja-project ';
  name = 'Ninja';

  ninja = {
    name: "Tolani",
    belt: "Black"
  };

  yell(e: any){
    alert("I am yelling");
  }
}
