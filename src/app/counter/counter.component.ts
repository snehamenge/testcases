import { Component, DebugElement, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  displayCount: number=0;
  de:DebugElement | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  addCounter(){
   this.displayCount++;
  }

  removeCounter(){
    this.displayCount--;
  }
}
