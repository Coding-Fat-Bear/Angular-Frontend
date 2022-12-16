import { Timesheet } from './../Models/Timesheet.model';
import { TimesheetService } from './../Services/timesheet.service';
// import { LoginService } from './../Services/login.service';
import { Component, OnInit } from '@angular/core';
import { Clock } from "../Models/Clock.model";
import { DateTime } from 'luxon';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ResolveEnd } from '@angular/router';
@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  id : any;
  date:any;
  otbkdischk :boolean = true;
  selectbt: number;
  now = new Date();
   selected = new Date();
  
  timedate = new Date();
  checkinClock = new Clock("00","00");
  checkOutClock = new Clock("00","00");
  otbtendClock = new Clock("00","00");
  otbtstartClock = new Clock("00","00");
  btstartClock = new Clock("00","00");
  btendClock = new Clock("00","00");
  otstartClock = new Clock("00","00");
  otendClock = new Clock("00","00");
  timesheet = new Timesheet();
  calChange(event: DateTime){
    console.log(this.selected.toISOString());
    const hi : Date = DateTime.fromJSDate(this.selected).toJSDate();
    console.log(hi);
  }
  constructor(private TimesheetService:TimesheetService,
    private snackBar: MatSnackBar,
    private route :ActivatedRoute) {
    
  }

  async ngOnInit() {
    console.log();
    
    this.id = this.route.snapshot.params['id'];
    this.date = this.route.snapshot.params['date'];
  
  this.checkinClock.setDate(this.selected)
  ////CheckOut
  await this.fetchTimesheet(1,this.selected);
  
      // console.log(promise);
   this.fetchTimesheet(1,this.selected)
   this.checkOutClock.setDate(this.timesheet.checkout)
  // console.log(this.timesheet.checkin.getHours().toString());
  // console.log(this.timesheet.checkin.getMinutes().toString());
  // this.checkinClock.hour = this.timesheet.checkin.getHours().toString();
  // this.checkinClock.min = this.timesheet.checkin.getMinutes().toString();
  // this.checkOutClock.hour = this.timesheet.checkout.getHours().toString();
  // this.checkOutClock.min = this.timesheet.checkout.getMinutes().toString();
  }

  displayLog(){
    // console.log(this.selected);
    console.log(this.timesheet);
    console.log("IN");
    console.log(this.checkinClock.getDate());
    this.timesheet.checkin = this.checkinClock.getDate();
    console.log(this.timesheet.checkin);
    console.log("OUT");
    console.log(this.checkOutClock.getDate());

    // console.log(this.timesheet);
  }

  // Services
  // fetchTimesheet(id:number,date:Date){
  //   console.log("fetching");
    
  //   console.log(id);
  //   console.log(date);
  //   return this.TimesheetService.fetchById(id,date).subscribe(data=>{
  //     console.log(data);
  //     this.timesheet.LOGINID = data.LOGINID;
  //     this.timesheet.checkin = new Date(data.checkin);
  //     this.timesheet.checkout = new Date(data.checkout);
  //     this.timesheet.tsdate = data.tsdate;
  //     console.log(this.timesheet);
      
  //   })
  // }
  async fetchTimesheet(id:number,date:Date){
    console.log("fetching");
    
    console.log(id);
    console.log(date);
    return this.TimesheetService.fetchById(id,date).then(data=>{
      console.log("time");
      
      console.log(data?.checkout);
      
      this.timesheet.LOGINID = data?.LOGINID as Number;
      this.timesheet.checkin = new Date(data?.checkin as Date);
      this.timesheet.checkout = new Date(data?.checkout as Date);
      this.timesheet.tsdate = data?.tsdate as Date;
      console.log(this.timesheet);
      this.checkOutClock.setDate(this.timesheet.checkout)
      this.checkinClock.setDate(this.timesheet.checkin)
    })
  }
  

  checkinUpdate()
  {
    this.timesheet.checkin = this.checkinClock.dateParse(this.checkinClock.hour,this.checkinClock.min);
    console.log(this.timesheet.checkin );
    
  }
 
  checkOutUpdate()
  {
    this.timesheet.checkout = this.checkinClock.dateParse(this.checkOutClock.hour,this.checkOutClock.min);
    console.log(this.timesheet.checkout );
  }

  btstartUpdate()
  {
    this.timesheet.btstart = this.btstartClock.dateParse(this.btstartClock.hour,this.btstartClock.min);
    console.log(this.timesheet.btstart );
  }

btendUpdate()
  {
    this.timesheet.btend = this.btendClock.dateParse(this.btendClock.hour,this.btendClock.min);
    console.log(this.timesheet.btend );
  }

otstartUpdate()
  {
    this.timesheet.otstart = this.otstartClock.dateParse(this.otstartClock.hour,this.otstartClock.min);
    console.log(this.timesheet.otstart );
  }

otbtstartUpdate()
  {
    this.timesheet.otbtstart = this.otbtstartClock.dateParse(this.otbtstartClock.hour,this.otbtstartClock.min);
    console.log(this.timesheet.otbtstart );
  }

otbtendUpdate()
  {
    this.timesheet.otbtend = this.otbtendClock.dateParse(this.otbtendClock.hour,this.otbtendClock.min);
    console.log(this.timesheet.otbtend );
  }

  

  cusbtcheck():boolean {return true}
  cusotbtcheck():boolean {return true}
  cusotcheck():boolean {return true}
}
