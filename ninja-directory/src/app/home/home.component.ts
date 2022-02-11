import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to the ninja directory.......";
  @Input() ninja: any;
  @Output() onYell = new EventEmitter();

  fireYellEvent(e: any){
    this.onYell.emit(e);
  }

  // ninja = {
  //   name: "Tolani",
  //   belt: "Black"
  // };

  // myString = "I like chicken";
  // myBoolean = false;

  // alertMe(val: any){
  //   alert(val);
  // }



  constructor() { }

  ngOnInit(): void {
  }

}
