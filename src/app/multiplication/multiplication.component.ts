import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  multiplication(a:number,b:number){
   return a*b;
  }

}
