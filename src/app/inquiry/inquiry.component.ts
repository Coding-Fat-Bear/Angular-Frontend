import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inquiry } from '../Models/inquiry.model';
import { Language, Module } from '../Models/child.model';

import { ChildService } from '../Services/Child/child.service';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {
  id: number;
  FLG:any;
  inquiry : Inquiry;
  module:Module[];
  updbut:boolean = false;
  getbut:boolean = false;
  delbut:boolean = false;
  crebut:boolean = false;
  FRMDT_I :any;
  TODT_I :any;
  lang:Language[];
  constructor(private router:Router,
              private ChildService: ChildService,
              private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.inquiry = new Inquiry;
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
    this.ChildService.modulgetall(this.id).subscribe(data=>{
      this.module = data.data;
    });

    this.ChildService.langugetall(this.id).subscribe(data=>{
      console.log(data);
      
      this.lang = data.data;
    });
    
  }
  
  bth(){
    this.id = this.route.snapshot.params['id'];
    this.router.navigate(['/home',this.id]);
  }

  getinq(){
  }

  creinq(){

  }

  delinq(){

  }

  updinq(){
  }
}
