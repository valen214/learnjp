
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message1;

  constructor(
    private route: ActivatedRoute,
  ){
    console.log("HomeComponent.constructor invoked")
  }

  ngOnInit(){
    console.log("HomeComponent.ngOnInit() invoked");
    this.message1 = this.route.snapshot.paramMap.get("urlParam");
    this.route.paramMap.subscribe(params => {
      this.message1 = params.get("urlParam") || "PLZ";
    })
  }

  get msg1(){
    return "WORKS!";
  }
}
