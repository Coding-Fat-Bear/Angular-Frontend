import { Component,OnInit, ViewChild } from '@angular/core';
import { Bank,
         Business_Line,
         Country,
         Currency,
         Programming_Language,
         Language,
         Department,
         Employee_Type,
         Gender,
         Module,
         Rank_emp } from '../Models/child.model';
import{ Employee }from '../Models/employee.model';
import { ChildService } from '../Services/Child/child.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from '../Services/employee/employee.service';
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS
} from "@angular/material/core";




@Component({
  selector: 'app-employee-master',
  templateUrl: './employee-master.component.html',
  styleUrls: ['./employee-master.component.scss']
})



export class EmployeeMasterComponent implements OnInit {
  id:any;
  FLG:any;
  bank : Bank[];
  buslin:Business_Line[];
  cntry:Country[];
  pgmlng:Programming_Language[];
  dept:Department[];
  emptyp:Employee_Type[];
  gndr:Gender[];
  modul:Module[];
  rnkemp:Rank_emp[];
  langu:Language[];
  public showPassword: boolean = false;
  pipe = new DatePipe('en-JP');
  employee : Employee;
  CREDAT:Date;
  DOB:Date;
  STRDT:Date;
  ENDDT:Date;
  employeeForm:FormGroup;
  updbut:boolean = false;
  getbut:boolean = false;
  delbut:boolean = false;
  crebut:boolean = false;

  constructor(private ChildService: ChildService,
              private employeeService: EmployeeService,
              private router:Router,
              private route :ActivatedRoute,
              private _snackBar: MatSnackBar
              // private datePipe: DatePipe 
              ){}

  ngOnInit(): void {
    this.employee = new Employee();
    this.FLG = this.route.snapshot.params['FLG'];
    if(this.FLG == "C"){
      this.crebut = true;
      this.getbut = false;
      this.delbut = false;
      this.updbut = false;
    };
    if(this.FLG == "R"){
      this.getbut = true;
      this.crebut = false;
      this.delbut = false;
      this.updbut = false;
    };
    if(this.FLG == "U"){
      this.getbut = true;
      this.crebut = false;
      this.delbut = false;
      this.updbut = false;
    };
    if(this.FLG == "D"){
      this.getbut = true;
      this.crebut = false;
      this.delbut = false;
      this.updbut = false;
    };
    this.id = this.route.snapshot.params['id'];
    this.ChildService.bankgetall(this.id).subscribe(data=>{

        this.bank = data.data;

    },error=>{
      console.log(error);
      this._snackBar.open("Something went wrong Login again!","OK",{duration:2000});
      this.router.navigate(['/login']);
    });

    this.ChildService.bslngetall(this.id).subscribe(data=>{
      this.buslin = data.data;
    });

    this.ChildService.deptgetall(this.id).subscribe(data=>{
      this.dept = data.data;
    });

    this.ChildService.emptypgetall(this.id).subscribe(data=>{
      this.emptyp = data.data;
    });

    this.ChildService.rnkempgetall(this.id).subscribe(data=>{
      this.rnkemp = data.data;
    });

    this.ChildService.modulgetall(this.id).subscribe(data=>{
      this.modul = data.data;
    });

    this.ChildService.pgmlnggetall(this.id).subscribe(data=>{
      this.pgmlng = data.data;
    });

    this.ChildService.pgmlnggetall(this.id).subscribe(data=>{
      this.pgmlng = data.data;
    });

    this.ChildService.cntrygetall(this.id).subscribe(data=>{
      this.cntry = data.data;
    });

    this.ChildService.langugetall(this.id).subscribe(data=>{
      this.langu = data.data;
    });

    this.ChildService.gndrgetall(this.id).subscribe(data=>{
      this.gndr = data.data;
    });

  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }


  getemp(){
    if(this.employee.EMPCOD){
      this.id = this.route.snapshot.params['id'];
      this.employeeService.empget(this.id,"EM","R",this.employee).subscribe(data =>{
        console.log(data.result);
        if(data.result.success > 0){
          this.CREDAT = new Date(data.result.data.CREDT);
          this.DOB = new Date(data.result.data.EMPDOB);
          this.STRDT = new Date(data.result.data.ACTSTRDT);
          this.ENDDT = new Date(data.result.data.ACTENDT);
          this.employee = data.result.data;
          this.FLG = this.route.snapshot.params['FLG'];
          if(this.employee.EMPNAM){
            if(this.FLG == "U"){
              this.updbut = true;
            };
            if(this.FLG == "D"){
              this.delbut = true;
            }
          }
        }else{
          this.employee = new Employee();
          this.updbut = false;
          this.delbut = false;
          this.DOB = new Date("");
          this.STRDT = new Date("");
          this.ENDDT = new Date("");
          this.CREDAT = new Date("");
          this.employee.BASSAL = "0.00"
          this.employee.INCNT = "0.00"
          this.employee.BONUS = "0.00"
          this.employee.SOCINS = "0.00"
          this.employee.HELINS = "0.00"
          this.employee.STATBEN = "0.00"
          this.employee.CONALW = "0.00"
          this.employee.HRALW = "0.00"
          this.employee.TAX = "0.00"
          this.employee.PENSION = "0.00"
          this.employee.LOAN = "0.00"
          this.employee.BILRATE = "0.00"
          this._snackBar.open(data.result.data,"OK",{duration:2000});
        }

      });
    }
  }

  bth(){
    this.id = this.route.snapshot.params['id'];
    this.router.navigate(['/home',this.id]);
  }

  creemp(){

  }

  delemp(){

  }

  updemp(){
    this.employeeService.empupd(this.id,"EM","U",this.employee).subscribe(data =>{
      console.log(data);

      this.employee = new Employee();
          this.updbut = false;
          this.DOB = new Date("");
          this.STRDT = new Date("");
          this.ENDDT = new Date("");
          this.CREDAT = new Date("");
          this.employee.BASSAL = "0.00"
          this.employee.INCNT = "0.00"
          this.employee.BONUS = "0.00"
          this.employee.SOCINS = "0.00"
          this.employee.HELINS = "0.00"
          this.employee.STATBEN = "0.00"
          this.employee.CONALW = "0.00"
          this.employee.HRALW = "0.00"
          this.employee.TAX = "0.00"
          this.employee.PENSION = "0.00"
          this.employee.LOAN = "0.00"
          this.employee.BILRATE = "0.00"
          this._snackBar.open(data.data,"OK",{duration:2000});
    });

  }


}
