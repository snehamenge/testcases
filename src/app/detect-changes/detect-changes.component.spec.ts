import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectChangesComponent } from './detect-changes.component';

describe('DetectChangesComponent', () => {
  let component: DetectChangesComponent;
  let fixture: ComponentFixture<DetectChangesComponent>;
  let h1:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1=fixture.nativeElement.querySelector('h1')
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('change detection in component', () => {
    component.checkedOrNot();
    fixture.detectChanges()
    expect(h1.textContent).toBe(component.isAuthenticated);
  });
});
