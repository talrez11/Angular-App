import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-comp',
  templateUrl: './person-comp.component.html',
  styleUrls: ['./person-comp.component.css']
})
export class PersonCompComponent implements OnInit {
  name: any;
  age: any;
  title: string;

  constructor() {
    this.name = 'Tal';
    this.age = 39;
    this.title = 'Excercise 1';
  }

  swap() {
    this.name = 39;
    this.age = 'Tal';
  }

  ngOnInit() {
  }

}
