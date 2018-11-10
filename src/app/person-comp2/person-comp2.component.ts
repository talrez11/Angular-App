import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-comp2',
  templateUrl: './person-comp2.component.html',
  styleUrls: ['./person-comp2.component.css']
})
export class PersonComp2Component implements OnInit {
  dataText1: string = '';
  dataText2: string = '';
  dataText3: string = '';
  dataRadio: boolean = false;

  constructor() {

  }

  setText1(data: string) : void {
    this.dataText1 = data;
    this.setText3();
  }

  setText2(data: string) : void {
      this.dataText2 = data;
      this.setText3();
  }

  setText3() : void {
    this.dataText3 = this.dataText1 + this.dataText2;
    if(this.dataText3.length > 6) {
      this.swap();
    }
  }

  swap() : void {
    let temp: string = this.dataText1;
    this.dataText1 = this.dataText2;
    this.dataText2 = temp;
  }

  radioChecked() : void {
    this.dataRadio = !this.dataRadio;
  }

    ngOnInit() {
  }

}
