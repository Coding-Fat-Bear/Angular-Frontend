import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Login } from '../Models/login.model';
import { LoginService } from '../Services/login.service';
import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents/dist/TimePicker.js";
import { AuthorizationService } from '../Services/authorization/authorization.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id : any;
  tileoff:boolean = true;
  chldtiloff:boolean = false;
  rtnbutoff:boolean = false;

  tileoffin:boolean = true;
  chldtiloffin:boolean = false;
  rtnbutoffin:boolean = false;

  tileoffbis:boolean = true;
  chldtiloffbis:boolean = false;
  rtnbutoffbis:boolean = false;

  tileoffauth:boolean = true;
  chldtiloffauth:boolean = false;
  rtnbutoffauth:boolean = false;

  tileoffpo:boolean = true;
  chldtiloffpo:boolean = false;
  rtnbutoffpo:boolean = false;

  tileoffpoa:boolean = true;
  chldtiloffpoa:boolean = false;
  rtnbutoffpoa:boolean = false;

  @Input() time:any;
  login = new Login();

  constructor(private loginService :LoginService,
    private router:Router,
    private route :ActivatedRoute,
    private authorizationService :AuthorizationService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.loginService.fetchLoginById(this.id).subscribe(data=>{
      console.log(data);
      this.login = data;
    })
  }
  display_time()
  {
    console.log(this.time);
    
  }

  empcre(){
    this.id = this.route.snapshot.params['id'];
    console.log(this.router.url);
    console.log(navigator.languages);
    this.authorizationService.appauthcheck(this.id,"EM","C").subscribe(data =>{

      console.log(data.success);
      if(data.success == 1){
        this._snackBar.open("You have access","OK",{duration:2000});
        console.log("here");
        
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


inqdis(): void{
  this.id = this.route.snapshot.params['id'];
  console.log(this.router.url);
  console.log(navigator.languages);
  this.authorizationService.appauthcheck(this.id,"EM","R").subscribe(data =>{

    console.log(data.success);
    if(data.success == 1){
      this._snackBar.open("You have access","OK",{duration:2000});
      console.log("here");
      
      this.router.navigate(['/inq_info',this.id,"R"]);
    }else{
      this._snackBar.open("You don't have access","OK",{duration:2000});
    }

  });
  }
inqchn(): void{
}
inqcre(): void{
}
inqdel(): void{
}

biscre(): void{
}
bischn(): void{
}
bisdis(): void{
}
bisdel(): void{
 }

authcre(): void{
 }
authchn(): void{
}
authdis(): void{
}
authdel(): void{
 }

pocre(): void{
}
pochn(): void{
 }
podis(): void{
}
podel(): void{
}

poapp(): void{
}

timesheet(): void{
  window.location.href='http://localhost:4200/timesheet/1/2022-12-17T00:00:00.000Z';
}

monthsheet(): void{
  window.location.href='http://localhost:4200/monthsheet/1/2022/12'}

emptile(){
  this.tileoff = !this.tileoff;
  this.chldtiloff = !this.chldtiloff;
  this.rtnbutoff = !this.rtnbutoff;
}
inqtile(){
  this.tileoffin = !this.tileoffin;
  this.chldtiloffin = !this.chldtiloffin;
  this.rtnbutoffin = !this.rtnbutoffin;
}

bistile(){
  this.tileoffbis = !this.tileoffbis;
  this.chldtiloffbis = !this.chldtiloffbis;
  this.rtnbutoffbis = !this.rtnbutoffbis;
}

authtile(){
  this.tileoffauth = !this.tileoffauth;
  this.chldtiloffauth = !this.chldtiloffauth;
  this.rtnbutoffauth = !this.rtnbutoffauth;
}

potile(){
  this.tileoffpo = !this.tileoffpo;
  this.chldtiloffpo = !this.chldtiloffpo;
  this.rtnbutoffpo = !this.rtnbutoffpo;
}

poatile(){
  this.tileoffpoa = !this.tileoffpoa;
  this.chldtiloffpoa = !this.chldtiloffpoa;
  this.rtnbutoffpoa = !this.rtnbutoffpoa;
}

retn(){
  this.tileoff = !this.tileoff;
  this.chldtiloff = !this.chldtiloff;
  this.rtnbutoff = !this.rtnbutoff;
}



retnin(){
  this.tileoffin = !this.tileoffin;
  this.chldtiloffin = !this.chldtiloffin;
  this.rtnbutoffin = !this.rtnbutoffin;
}

retnbis(){
  this.tileoffbis = !this.tileoffbis;
  this.chldtiloffbis = !this.chldtiloffbis;
  this.rtnbutoffbis = !this.rtnbutoffbis;
}

retnauth(){
  this.tileoffauth = !this.tileoffauth;
  this.chldtiloffauth = !this.chldtiloffauth;
  this.rtnbutoffauth = !this.rtnbutoffauth;
}

retnpo(){
  this.tileoffpo = !this.tileoffpo;
  this.chldtiloffpo = !this.chldtiloffpo;
  this.rtnbutoffpo = !this.rtnbutoffpo;
}


}
