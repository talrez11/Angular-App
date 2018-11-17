import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex4-parent',
  templateUrl: './ex4-parent.component.html',
  styleUrls: ['./ex4-parent.component.css']
})
export class Ex4ParentComponent implements OnInit {
  persons: any[] = [];

  constructor() { }

  add(fname: string, lname: string, city: string ): void {
    let object = {
      'fName': fname,
      'lName': lname,
      'city' : city
    };
    this.persons.push(object);
  }

  ngOnInit() {
  }

}
