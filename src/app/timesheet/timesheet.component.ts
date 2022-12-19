import { Timesheet } from './../Models/Timesheet.model';
import { TimesheetService } from './../Services/timesheet.service';
import {timeRangeValidator } from './../validators/timeRangeValidator';
import {timeOrderValidator } from './../validators/timeOrderValidator';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, ResolveEnd } from '@angular/router';
import { timeToDate } from '../tools/timeToDate';
@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  /////////////initialization
  selected = new Date();
  timesheet = new Timesheet();
  checkinTime = 9;
  checkoutTime = 18;
  ////////////formcontrol

timesheetForm = this.fb.group({
  checkin :  ['',[Validators.required,timeRangeValidator]],
  checkout :  ['',[Validators.required,timeRangeValidator]]
},{validator :timeOrderValidator})
  //////////constructor
  constructor(private TimesheetService:TimesheetService,
    private route :ActivatedRoute,
    private fb : FormBuilder
    ) {

  }
/////////////// onInint
  async ngOnInit() {

    // this.checkin.
  // await this.fetchTimesheet(1,this.selected);
  }
/////////////// function start

///////////////display button  -dev satge
  displayLog(){
    console.log(this.selected);
    console.log(JSON.stringify(this.timesheet));
    console.log(this.timesheetForm.errors);

  }

  //  timeOrderValidator(control: any) {

  //   const checkin = control.get('checkin');
  //   const checkout = control.get("checkout");

  //   const [hours, minutes] = checkin.value.split(":").map(Number);
  //   const date1 = new Date();
  //   date1.setHours(hours);
  //   date1.setMinutes(minutes);

  //   const [hours2, minutes2] = checkout.value.split(":").map(Number);
  //   const date2 = new Date();
  //   date2.setHours(hours2);
  //   date2.setMinutes(minutes2);

  // //  const date1 = this.timeToDate(checkin)
  // //  const date2 = this.timeToDate(checkout)
  //  if(date2 >date1){
  //      return {dateOrder: true}
  //  }else{
  //      return null
  //  }
  //  }

    timeToDate (time :any) {
    const [hours, minutes] = time.split(":").map(Number);
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    return date;
}

/////////////// service for fetching timesheet
  async fetchTimesheet(id:number,date:Date){
    console.log("fetching");
    return this.TimesheetService.fetchById(id,date).then(data=>{
      console.log(data);
    })
  }
  /////////////calender output control
  calChange(event: Date){
    console.log(event);
  }



    // timeOrderValidator(control1: FormControl,control2: FormControl) {
    //   const d1= timeToDate(control1.value);
    //   const d2 = timeToDate(control2.value);

    //     if (d2 >d1) {
    //       return  true;
    //     }
    //     else{
    //       return null;
    //     }

    //   }

      //  timeToDate(time :any) {
      //   const [hours, minutes] = time.split(":").map(Number);
      //   const date = new Date();
      //   date.setHours(hours);
      //   date.setMinutes(minutes);
      //   return date;
      // }

  checkinUpdate()
  {

  }

  checkOutUpdate()
  {

  }

  btstartUpdate()
  {

  }

btendUpdate()
  {

  }

otstartUpdate()
  {

  }

otbtstartUpdate()
  {

  }

otbtendUpdate()
  {

  }

  cusbtcheck():boolean {return true}
  cusotbtcheck():boolean {return true}
  cusotcheck():boolean {return true}
}
