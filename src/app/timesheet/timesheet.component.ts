import { Timesheet } from './../Models/Timesheet.model';
import { TimesheetService } from './../Services/timesheet.service';
import {timeRangeValidator } from './../validators/timeRangeValidator';
import {timeOrderValidator } from './../validators/timeOrderValidator';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { timeToDate_Def } from '../tools/timeToDate_Def';
import { dateToHM } from '../tools/dateToHM';
import { breakOrderValidator} from '../validators/breakOrderValidator';
import { otTimeOrderValidator } from '../validators/otTimeOrderValidator';
import { otTimeRangeValidator } from '../validators/otTimeRangeValidator';
import { oTbreakOrderValidator } from '../validators/oTbreakOrderValidator';
import { btTimeRangeValidator } from '../validators/btTimeRangeValidator';
import { btOtTimeRangeValidator } from '../validators/btOtTimeRangeValidator';
import { timesheetcalc } from '../Models/timesheetcalc.model';
import { dateInterval } from '../tools/dateInterval';
@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  /////////////initialization
   selected :Date;
   is_create = true;
   res = new Timesheet()
   thc = new timesheetcalc();
   timesheet = new Timesheet();
   dayTypes = [
    {id:0,name:'none',type:'none'},
    {id:1,name:'AM Leave',type:'halffirs'},
    {id:2,name:'PM Leave',type:'halfseco'},
    {id:3,name:'Holiday',type:'fullpaid'},
    {id:4,name:'Leave',type:'fullunpd'},
    {id:5,name:'Absence',type:'fullunpd'},
    {id:6,name:'Relocation',type:'fullunpd'},
    {id:7,name:'Menstrual Leave (Paid)',type:'fullpaid'},
    {id:17,name:'Menstrual Leave (unpaid)',type:'fullunpd'},
    {id:8,name:'New Year Holiday',type:'fullunpd'},
    {id:9,name:'Child Nursing Leave',type:'fullunpd'},
    {id:10,name:'Maternity leave',type:'fullpaid'},
    {id:11,name:'Disater',type:'fullpaid'},
    {id:12,name:'Industrial Accident',type:'fullpaid'},
    {id:13,name:'Summer Vacation',type:'fullpaid'},
    {id:14,name:'Paid Holiday',type:'fullpaid'},
    {id:15,name:'Special Absence',type:'fullpaid'},
    {id:16,name:'Medical Examination',type:'fullpaid'},]
  checkinTime = 9;
  checkoutTime = 18;
  OtStartTime = 18;
  OtEndTime = 23;
  BtOtStartTime =18;
  BtOtEndTime= 23;
  BtStartTime = 18;
  BtEndTime = 23;
  ////////////formcontrol

  timesheetForm = this.fb.group({
    dayType : ['none'],
    checkin :  ['',[Validators.required,timeRangeValidator]],
    checkout :  ['',[Validators.required,timeRangeValidator]],
    breakSkip : [false],
    comment : [''],
    totalhours : [''],
    OtStart :['',[otTimeRangeValidator]],
    OtEnd :['',[otTimeRangeValidator]],
    isBreaktime :[false],
    isOtBreaktime :[false,],
    BtOtStart :['',[btOtTimeRangeValidator]],
    BtOtEnd : ['',[btOtTimeRangeValidator]],
    BtStart :['',[btTimeRangeValidator]],
    BtEnd : ['',[btTimeRangeValidator]]
  },{validator : [breakOrderValidator,timeOrderValidator,oTbreakOrderValidator,otTimeOrderValidator]})
 
  //////////constructor
  constructor(private TimesheetService:TimesheetService,
    private route :ActivatedRoute,
    private fb : FormBuilder
    ) {

  }
/////////////// onInint
  ngOnInit(): void {
    // this.checkin.
    const date = this.route.snapshot.params['date'];
   this.selected = new Date(date);
   this.fetchTimesheet(1,this.selected);
   
   
  }
/////////////// function start

///////////////display button  -dev satge
  displayLog(){
    // console.log(this.timesheet);
    // console.log(timeToDate_Def(this.selected,this.timesheetForm.get('checkin')?.value));
    // this.thc.checkin = timeToDate_Def(this.selected,this.timesheetForm.get('checkin')?.value);
    // this.thc.checkout = timeToDate_Def(this.selected,this.timesheetForm.get('checkout')?.value);
    // this.thc.otstart = timeToDate_Def(this.selected,this.timesheetForm.get('OtStart')?.value);
    // this.thc.otend = timeToDate_Def(this.selected,this.timesheetForm.get('OtEnd')?.value);
    // this.thc.otbtstart = timeToDate_Def(this.selected,this.timesheetForm.get('BtOtStart')?.value);
    // this.thc.otbtend = timeToDate_Def(this.selected,this.timesheetForm.get('BtOtEnd')?.value);
    // this.thc.btstart = timeToDate_Def(this.selected,this.timesheetForm.get('BtStart')?.value);
    // this.thc.btend = timeToDate_Def(this.selected,this.timesheetForm.get('BtEnd')?.value);
    // console.log();
    // console.log((dateInterval(this.thc.checkin,this.thc.checkout)+dateInterval(this.thc.otstart,this.thc.otend)-
    // dateInterval(this.thc.btstart,this.thc.btend)-dateInterval(this.thc.otbtstart,this.thc.otbtend))/(1000*60*60));
    console.log(this.totalhourCal());
    
    
    // console.log(JSON.stringify(this.timesheet));
    // console.log(this.timesheetForm.errors);
    // console.log(this.is_create);
    // console.log(this.selected.getMonth()+1);
    
    // console.log((this.selected.getMonth()+1)<10?"0"+(this.selected.getMonth()+1):this.selected.getMonth()+1);
    // const month = (this.selected.getMonth()+1)<10?"0"+this.selected.getMonth()+1:this.selected.getMonth()+1;
    
    // console.log( (this.selected.getDate())<10?"0"+this.selected.getDate():this.selected.getDate());
    // const date_v = (this.selected.getDate())<10?"0"+this.selected.getDate():this.selected.getDate();
  }


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
    return this.TimesheetService.fetchById(id,date).subscribe(data=>{
      console.log(data);
      console.log(data.hasOwnProperty("error"));
      
        this.timesheet = data as Timesheet;
        !(this.timesheet.checkin)?this.timesheetForm.get('checkin')?.setValue(""):this.timesheetForm.get('checkin')?.setValue(dateToHM(this.timesheet.checkin));
        !(this.timesheet.checkout)?this.timesheetForm.get('checkout')?.setValue(""):this.timesheetForm.get('checkout')?.setValue(dateToHM(this.timesheet.checkout));
        !(this.timesheet.daytype)?this.timesheetForm.get('dayType')?.setValue("none"):this.timesheetForm.get('dayType')?.setValue((this.timesheet.daytype));
        !(this.timesheet.breakflag)?this.timesheetForm.get('breakSkip')?.setValue(false):this.timesheetForm.get('breakSkip')?.setValue((this.timesheet.breakflag));
        !(this.timesheet.comment)?this.timesheetForm.get('comment')?.setValue(""):this.timesheetForm.get('comment')?.setValue((this.timesheet.comment));
        !(this.timesheet.otstart)?this.timesheetForm.get('OtStart')?.setValue(""):this.timesheetForm.get('OtStart')?.setValue(dateToHM(this.timesheet.otstart));
        !(this.timesheet.otend)?this.timesheetForm.get('OtEnd')?.setValue(""):this.timesheetForm.get('OtEnd')?.setValue(dateToHM(this.timesheet.otend));
        !(this.timesheet.otbtstart)?this.timesheetForm.get('BtOtStart')?.setValue(""):this.timesheetForm.get('BtOtStart')?.setValue(dateToHM(this.timesheet.otbtstart));
        !(this.timesheet.otbtend)?this.timesheetForm.get('BtOtEnd')?.setValue(""):this.timesheetForm.get('BtOtEnd')?.setValue(dateToHM(this.timesheet.otbtend));
        !(this.timesheet.btstart)?this.timesheetForm.get('BtStart')?.setValue(""):this.timesheetForm.get('BtStart')?.setValue(dateToHM(this.timesheet.btstart));
        !(this.timesheet.btend)?this.timesheetForm.get('BtEnd')?.setValue(""):this.timesheetForm.get('BtEnd')?.setValue(dateToHM(this.timesheet.btend));
        !(this.timesheet.totalhours)?this.timesheetForm.get('totalhours')?.setValue(""):this.timesheetForm.get('totalhours')?.setValue(dateToHM(this.timesheet.totalhours));
        if (data.hasOwnProperty("error")) {
        this.is_create = true
      } else {
        this.is_create = false;
      }
      
    })
    
  }
  /////////////calender output control
  calChange(event: Date){
    console.log(event);
    this.selected.setMilliseconds(0);
    this.selected.setMinutes(0);
    this.selected.setSeconds(0);
   this.fetchTimesheet(1,this.selected);
  }

  onBreaktime(){
    console.log(this.timesheetForm.get('isBreaktime')?.value);
    this.timesheetForm.get('isBreaktime')?.setValue(!this.timesheetForm.get('isBreaktime')?.value)
    console.log(this.timesheetForm.get('isBreaktime')?.value);
    
  }

  onOtBreaktime(){
    console.log(this.timesheetForm.get('isOtBreaktime')?.value);
    this.timesheetForm.get('isOTBreaktime')?.setValue(!this.timesheetForm.get('isOTBreaktime')?.value)
    console.log(this.timesheetForm.get('isOTBreaktime')?.value);
    
  }
  regTimesheet(){
    // console.log(this.timesheetForm.get('checkin')?.value);
    this.res.LOGINID = this.route.snapshot.params['id'];
    this.res.checkin = !(this.timesheetForm.get('checkin')?.value)?null:timeToDate_Def(this.selected,this.timesheetForm.get('checkin')?.value).toJSON();
    this.res.checkout =  !(this.timesheetForm.get('checkout')?.value)?null:timeToDate_Def(this.selected,this.timesheetForm.get('checkout')?.value).toJSON();
    // console.log(!(this.timesheetForm.get('checkin')?.value)?null:timeToDate(this.timesheetForm.get('checkin')?.value).toJSON());
    
    this.res.btstart = !(this.timesheetForm.get('BtStart')?.value)?null:timeToDate_Def(this.selected,this.timesheetForm.get('BtStart')?.value).toJSON();
    this.res.btend= !(this.timesheetForm.get('BtEnd')?.value)?null:timeToDate_Def(this.selected,this.timesheetForm.get('BtEnd')?.value).toJSON();

    this.res.otstart = !(this.timesheetForm.get('OtStart')?.value)?null:timeToDate_Def(this.selected,this.timesheetForm.get('OtStart')?.value).toJSON();
    this.res.otend = !(this.timesheetForm.get('OtEnd')?.value)?null:timeToDate_Def(this.selected,this.timesheetForm.get('OtEnd')?.value).toJSON();

    this.res.otbtstart = !(this.timesheetForm.get('BtOtStart')?.value)?null:timeToDate_Def(this.selected,this.timesheetForm.get('BtOtStart')?.value).toJSON();
    this.res.otbtend = !(this.timesheetForm.get('BtOtEnd')?.value)?null:timeToDate_Def(this.selected,this.timesheetForm.get('BtOtEnd')?.value).toJSON();
    this.res.breakflag = this.timesheetForm.get('breakSkip')?.value;
    this.res.comment = this.timesheetForm.get('comment')?.value;
    this.selected.setMilliseconds(0);
    this.selected.setSeconds(0);
    this.selected.setMinutes(0);
    this.selected.setHours(9);
    this.res.tsdate = this.selected.toJSON();
    this.res.totalhours = this.totalhourCal();
    this.res.daytype = this.timesheetForm.get('dayType')?.value;
    console.log(this.res);
    if (this.is_create) {
      this.TimesheetService.createById(this.res,this.route.snapshot.params['id']).subscribe(data=>{
        console.log(data);
      })

    } else {
      this.TimesheetService.updateById(this.res,this.route.snapshot.params['id'],this.selected).subscribe(data=>{
        console.log(data);
      })
    }
    
   
    
  }
  totalhourCal(){
    this.thc.checkin = timeToDate_Def(this.selected,this.timesheetForm.get('checkin')?.value);
    this.thc.checkout = timeToDate_Def(this.selected,this.timesheetForm.get('checkout')?.value);
    this.thc.otstart = timeToDate_Def(this.selected,this.timesheetForm.get('OtStart')?.value);
    this.thc.otend = timeToDate_Def(this.selected,this.timesheetForm.get('OtEnd')?.value);
    this.thc.otbtstart = timeToDate_Def(this.selected,this.timesheetForm.get('BtOtStart')?.value);
    this.thc.otbtend = timeToDate_Def(this.selected,this.timesheetForm.get('BtOtEnd')?.value);
    this.thc.btstart = timeToDate_Def(this.selected,this.timesheetForm.get('BtStart')?.value);
    this.thc.btend = timeToDate_Def(this.selected,this.timesheetForm.get('BtEnd')?.value);
    return (dateInterval(this.thc.checkin,this.thc.checkout)+dateInterval(this.thc.otstart,this.thc.otend)-
    dateInterval(this.thc.btstart,this.thc.btend)-dateInterval(this.thc.otbtstart,this.thc.otbtend))/(1000*60*60)
    
    // this.thc.totalhours = this.thc.checkin + 
  }
  
  cusbtcheck():boolean {return true}
  cusotbtcheck():boolean {return true}
  cusotcheck():boolean {return true}
}
