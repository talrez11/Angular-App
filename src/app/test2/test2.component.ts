import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  dataText: string = '';
  isRed: boolean = false;
  constructor() { }

  setText(data: string) :void {
    this.dataText = data;
    if(this.dataText.length > 5) {
      this.isRed = true;
    } else {
      this.isRed = false;
    }
  }
  ngOnInit() {
  }

}
