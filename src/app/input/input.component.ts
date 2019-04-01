import { Component, OnInit ,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'input-box',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() public label: string;
  @Input() public type: string;
  @Input() public id: string;
  @Input() public visible: boolean; 
  @Input() public props: any; 
  @Input()  public disable: boolean; 
  public inputvalue:string;
 // attach an output event for user action
 @Output('InputValueChange') InputValueChange = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }

   // used to bind model with selected data which will be passed to parent component
  setValue() {
    this.InputValueChange.emit({ model: this.id, value: this.inputvalue });
}
}
