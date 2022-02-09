import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to the ninja directory.......";
  // @Input() ninja: any;

  ninja = {
    name: "Tolani",
    belt: "Black"
  };

  // myString = "I like chicken";
  // myBoolean = false;

  // alertMe(val: any){
  //   alert(val);
  // }



  constructor() { }

  ngOnInit(): void {
  }

}
