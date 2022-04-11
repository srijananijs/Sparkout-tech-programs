import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.css']
})
export class ProductIdComponent implements OnInit {
  
  queryParams = '';
  
  
  
  constructor(private activatedRoute:ActivatedRoute){
     this.activatedRoute.params.subscribe(data=>{
       this.queryParams = data['id'];
     });
  } 

  ngOnInit(): void {
  }

}
