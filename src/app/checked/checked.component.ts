import { Component, OnInit } from '@angular/core';
import { MyCheckService } from '../my-check.service';

@Component({
  selector: 'app-checked',
  templateUrl: './checked.component.html',
  styleUrls: ['./checked.component.css']
})
export class CheckedComponent implements OnInit {

  constructor(private myChecked:MyCheckService) { }

  ngOnInit(): void {
  }

  checkedOrNot(){
  if(this.myChecked.authenticated()){
    return 'Yes I am authorised'
  }
  return 'Not authorised'
  }

}
