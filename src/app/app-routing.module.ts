import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { MonthsheetComponent } from './monthsheet/monthsheet.component';
import { EmployeeMasterComponent } from './employee-master/employee-master.component';
import { InquiryComponent } from './inquiry/inquiry.component';
const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'timesheet/:id/:date',component: TimesheetComponent},
  {path:'home/:id',component: HomeComponent},
  {path:'monthsheet/:id/:year/:month',component: MonthsheetComponent},
  {path:'emp_info/:id/:FLG',component: EmployeeMasterComponent},
  {path:'inq_info/:id/:FLG',component: InquiryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
