import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtract',
  templateUrl: './subtract.component.html',
  styleUrls: ['./subtract.component.css']
})
export class SubtractComponent implements OnInit {
  firstnumber1:any;
  secondnumber2:any;
  output2:any;
  entername = "sri";
  childdata = "";
  public sub() {
    this.output2 = this.firstnumber1 - this.secondnumber2;
    this.childdata = this.entername;
  }
  constructor() { }

  ngOnInit(): void {
  }
 


}

