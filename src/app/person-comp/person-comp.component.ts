import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-comp',
  templateUrl: './person-comp.component.html',
  styleUrls: ['./person-comp.component.css']
})
export class PersonCompComponent implements OnInit {
  name: string;
  age: string;
  title: string;
  dataText1: string = '';
  dataText2: string = '';
  checked: boolean = false;

  constructor() {
      this.title = 'Basic Components';
      this.name = 'Tal';
      this.age = '39';
  }

  swap() : void {
      let temp: string;
      temp = this.age;
      this.age = this.name;
      this.name = temp;
  }

  setText1(data: string) : void {
      this.dataText1 = data;
      if(this.dataText1.length > 4) {
          this.swap2();
      }
  }

    setText2(data: string) : void {
        this.dataText2 = data;
        if(this.dataText2.length > 4) {
            this.swap2();
        }
    }

    swap2() : void {
      let temp: string;
      temp = this.dataText1;
      this.dataText1 = this.dataText2;
      this.dataText2 = temp;
    }

    changeCheck() : void {
      this.checked = !this.checked;
    }

  ngOnInit() {
  }

}
