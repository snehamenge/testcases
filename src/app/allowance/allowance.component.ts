import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allowance',
  templateUrl: './allowance.component.html',
  styleUrls: ['./allowance.component.css']
})
export class AllowanceComponent implements OnInit {
  childAge=10;
  constructor() { }

  ngOnInit(): void {
  }

  childAllowApplicable(){
    let childAllowance=true;
    if(this.childAge>10){
    return true
    }
    else{
    return false
    }
  }

}
