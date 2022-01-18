import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authenticate.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  salSlip:any;
  constructor(private authService:AuthenticationService ) { 
    this.authService.authenticate()
  }

  ngOnInit(): void {
  }

  getSalSlip(){
    if( this.authService.checkAuthentication()){
     return this.salSlip='Salslip'
    }
   return this.salSlip='Not Authenticated'
  }

}
