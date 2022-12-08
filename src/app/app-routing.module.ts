import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TimesheetComponent } from './timesheet/timesheet.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  
  {path:'', redirectTo:'timesheet',pathMatch:'full'},
  {path:'timesheet',component: TimesheetComponent},
  {path:'home/:id',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
