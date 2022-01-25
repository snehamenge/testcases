import { Component, OnInit } from '@angular/core';
import { MyCheckService } from '../my-check.service';

@Component({
  selector: 'app-detect-changes',
  templateUrl: './detect-changes.component.html',
  styleUrls: ['./detect-changes.component.css']
})
export class DetectChangesComponent implements OnInit {
  isAuthenticated!: string;
  constructor(private myChecked:MyCheckService) { }

  ngOnInit(): void {
  }

  checkedOrNot(){
  if(this.myChecked.authenticated()){
    this.isAuthenticated='Yes I am authorised';
  }else{
    this.isAuthenticated='Not authorised';
  }
  }


}
