import { Component, OnInit ,Input ,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'dropdown-box',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() public label: string;
  @Input() public type: string;
  @Input() public id: string;
  @Input() public visible: boolean; 
  @Input() public dropdownInput :any; // used for dynamically binding dropdown
  
  // attach an output event for user action
  @Output('InputValueChange') InputValueChange = new EventEmitter<any>();

  public inputvalue:string;

  constructor() { }

  ngOnInit() {

    
  }

  // used to bind model with selected data which will be passed to parent component
  setValue() {
    this.InputValueChange.emit({ model: this.id, value: this.inputvalue });
}
}