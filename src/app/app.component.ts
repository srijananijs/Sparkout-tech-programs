import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Angular-practise session';
  firstnumber:any;
  secondnumber:any;
  output:any;
  public add() {
    this.output = this.firstnumber + this.secondnumber;
  }

  user = {
    name: 'Kasi',
    std: 11,
    school : 'Reliance',
    dob:'10/05/2005' };

  test = new Date();
  ex = 2345895678;
  

}
