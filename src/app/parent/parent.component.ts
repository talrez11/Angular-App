import { Component, OnInit } from '@angular/core';
import {Person2} from '../person2';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  dataFromChild: string = '';
  parentPerson: Person2 = new Person2();
  constructor() { }

  getDataFromChild(data: string) : void {
    this.dataFromChild = data;
  }

  ngOnInit() {
  }

}
