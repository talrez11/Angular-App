import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  dataText1: string = '';
  dataText2: string = '';
  dataChecked: boolean: false;
  constructor() { }

  setText1(data: string) : void {
    this.dataText1 = data;
    if(this.dataText1.length > 5) {
      this.swap();
    }
  }

  setText2(data: string) : void {
      this.dataText2 = data;
      if(this.dataText2.length > 5) {
          this.swap();
      }
  }

  swap() : void {
    let temp = this.dataText1;
    this.dataText1 = this.dataText2;
    this.dataText2 = temp;
  }

  check() {
    this.dataChecked = !this.dataChecked;
  }

  ngOnInit() {
  }

}
