import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeeMasterComponent } from './employee-master/employee-master.component';
const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'home/:id',component: HomeComponent},
  {path:'emp_info/:id/:FLG',component: EmployeeMasterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
