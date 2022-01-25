import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import {AuthenticationService} from '../authenticate.service'

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let authService: AuthenticationService
  let  h1:HTMLElement
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      providers:[AuthenticationService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    authService= TestBed.get(AuthenticationService)
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1=fixture.nativeElement.querySelector('h1')
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shouldreturn salary slip', () => {
  spyOn(authService ,'checkAuthentication').and.returnValue(true)
   let salslip= component.getSalSlip()
       expect(salslip).toBe('Salslip');
       expect(authService.checkAuthentication).toHaveBeenCalled()
  });

  it('should check if salslip is returned', () => {
    component.getSalSlip();
    fixture.detectChanges()
    expect(h1.textContent).toBe(component.salSlip)
  });
});
