import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { AllowanceComponent } from './allowance/allowance.component';
import { CheckedComponent } from './checked/checked.component';
import { DetectChangesComponent } from './detect-changes/detect-changes.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    MultiplicationComponent,
    AllowanceComponent,
    CheckedComponent,
    DetectChangesComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
