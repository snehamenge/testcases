import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let de:DebugElement
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de=fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test the counter', () => {
  const h1=de.query(By.css('h1'));
  const btn=de.query(By.css('#btn1'));
  btn.triggerEventHandler('click', {})
  fixture.detectChanges();
  expect(component.displayCount).toEqual(parseInt(h1.nativeElement.innerText))
  });
});
