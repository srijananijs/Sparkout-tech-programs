import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-data-binding',
  templateUrl:'./data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  
  public text = 'string';
  public value = 'Angular';
  public name = 'Sri';
  public no = '2002';
  //isdisabled = "true";
  ischanged = "";
  classes = 'special';
  linkStyle = 'underline';
  greetUser(){
        return "Welcome " + this.name;
  }

  itemImageUrl = "imgurl";
  interpolationTitle = "Angualr Concepts";
  propertyTitle = "Property";

  clicked(){
    alert('You have clicked the button')
  }

  twoway : string = "Sri";

  public myId = "testId";

  showMsg = true;
  displayMsg = false;

  switchValue = 2378;
  //switchValue = 23780;

  users = [
    {id: 101,name: 'Sri'},
    {id: 102, name: 'Kasi'},
    {id: 103, name: 'Sasi'},
    
  ];
  
  onSubmit(user: any){
     console.log(user);
  }

  classname1 = 'one';
  classname2 = 'two';

  person = {
    userId : '19EC027',
    firstName:'Sri',
    lastName: 'Janani',
    DOB:'9/3/2002',
    salary:1200000

  };

  constructor() { }

  ngOnInit(): void {
    
  }
  
}
