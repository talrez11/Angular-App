import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ex4-child',
  templateUrl: './ex4-child.component.html',
  styleUrls: ['./ex4-child.component.css']
})
export class Ex4ChildComponent implements OnInit {
  @Input()
  pers: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
