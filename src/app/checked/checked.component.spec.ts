import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyCheckService } from '../my-check.service';

import { CheckedComponent } from './checked.component';

describe('CheckedComponent', () => {
  let component: CheckedComponent;
  let fixture: ComponentFixture<CheckedComponent>;
  let myCheckService:MyCheckService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckedComponent ],
      providers:[MyCheckService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedComponent);
    component = fixture.componentInstance;
    myCheckService =TestBed.get(MyCheckService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if authorised ', () => {
   spyOn(myCheckService,'authenticated').and.returnValue(true)
   let ifChecked=component.checkedOrNot();
   expect(ifChecked).toEqual('Yes I am authorised');
   expect(myCheckService.authenticated).toHaveBeenCalled()
  });
});
