import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyCheckService {

  constructor() { }

  authenticated(){
    return true;
  }
}
