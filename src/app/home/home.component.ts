import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HostListener } from '@angular/core';
import { AuthorizationService } from '../Services/authorization/authorization.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  id:any;
  constructor(
    private router:Router,private route :ActivatedRoute,
    private authorizationService :AuthorizationService,
    private _snackBar: MatSnackBar) { }

    tileoff:boolean = true;
  chldtiloff:boolean = false;
  rtnbutoff:boolean = false;

  huname:String
  hpword:String
  ngOnInit(): void {


  }

  @HostListener('contextmenu', ['$event'])
  onLeftClick(_event:any){
      alert("Left click is working");
  }


  emptile(){
    this.tileoff = !this.tileoff;
    this.chldtiloff = !this.chldtiloff;
    this.rtnbutoff = !this.rtnbutoff;

  }

  retn(){
    this.tileoff = !this.tileoff;
    this.chldtiloff = !this.chldtiloff;
    this.rtnbutoff = !this.rtnbutoff;

  }

  empcre(){
    this.id = this.route.snapshot.params['id'];
    console.log(this.router.url);
    console.log(navigator.languages);
    this.authorizationService.appauthcheck(this.id,"EM","C").subscribe(data =>{

      console.log(data.success);
      if(data.success == 1){
        this._snackBar.open("You have access","OK",{duration:2000});
        this.router.navigate(['/emp_info',this.id,"C"]);
      }else{
        this._snackBar.open("You don't have access","OK",{duration:2000});
      }

    });


  }

  empcha(){
    this.id = this.route.snapshot.params['id'];
    this.authorizationService.appauthcheck(this.id,"EM","U").subscribe(data =>{

      console.log(data.success);
      if(data.success == 1){
        this._snackBar.open("You have access","OK",{duration:2000});
        this.router.navigate(['/emp_info',this.id,"U"]);
      }else{
        this._snackBar.open("You don't have access","OK",{duration:2000});
      }

    });
  }

  empdis(){
    this.id = this.route.snapshot.params['id'];
    this.authorizationService.appauthcheck(this.id,"EM","R").subscribe(data =>{

      if(data.success == 1){
        this._snackBar.open("You have access","OK",{duration:2000});
        this.router.navigate(['/emp_info',this.id,"R"]);
      }else{
        this._snackBar.open("You don't have access","OK",{duration:2000});
      }

    });
  }

  empdel(){
    this.id = this.route.snapshot.params['id'];
    this.authorizationService.appauthcheck(this.id,"EM","D").subscribe(data =>{

      console.log(data.success);
      if(data.success == 1){
        this._snackBar.open("You have access","OK",{duration:2000});
        this.router.navigate(['/emp_info',this.id,"D"]);
      }else{
        this._snackBar.open("You don't have access","OK",{duration:2000});
      }

    });
  }

}
