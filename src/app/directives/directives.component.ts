import { Component, OnInit } from '@angular/core';
import {Person} from '../person';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  title: string = 'Directives';
  dataText: string = '';
  isRed: boolean = false;
  red: boolean = false;
  green: boolean = false;
  blue: boolean = false;
  person: Person[] = [
      new Person('Shifra', 44, 'Eilat'),
      new Person('Tal', 39, 'Hod Hasharon'),
      new Person('Shir', 38, 'Haifa'),
      new Person('Itzik', 52, 'kfar saba'),
      new Person('Doron', 55, 'Kadima')
  ];
  constructor() { }

  setText(data: string) : void {
    this.dataText = data;
    if(this.dataText.length > 5) {
      this.isRed = true;
    } else {
      this.isRed = false;
    }
  }

  setColor(data: string) : void {
    switch (data) {
        case 'red':
          this.red = !this.red;
          break;
        case 'green':
          this.green = !this.green;
          break;
        case 'blue':
            this.blue = !this.blue;
            break;
    }
  }
  ngOnInit() {
  }

}
