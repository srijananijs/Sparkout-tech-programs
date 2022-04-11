import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  paramQuery1 = '';
  paramQuery2 = '';
  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe(data=> {
    this.paramQuery1 = data['id1'];
    this.paramQuery2 = data['id2'];
  });
}

  ngOnInit(): void {
  }

}
