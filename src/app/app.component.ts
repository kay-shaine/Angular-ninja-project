import { Component } from '@angular/core';
import {HomeComponent} from './home/index';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'angular-ninja-project ';
  name = 'Ninja';

  // ninja = {
  //   name: "Tolani",
  //   belt: "Black"
  // };
}
