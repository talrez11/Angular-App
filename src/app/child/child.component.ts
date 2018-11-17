import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Person2} from '../person2';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  childPerson: Person2 = new Person2();

  @Output()
  stringPass: EventEmitter<string> = new EventEmitter();

  sendData(data: string) : void {
    this.stringPass.emit(data);
  }
  constructor() { }

  ngOnInit() {
  }

}
