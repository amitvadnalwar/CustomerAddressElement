import { Component, OnInit, Input , EventEmitter, Output } from '@angular/core';
import { Address } from './Models/Address';     // used to set control data with model data
import { ViewModel } from './Models/ViewModel'; // used for setting control properties based on country


@Component({
  selector: 'app-address',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  ngOnInit() {

  }

}

