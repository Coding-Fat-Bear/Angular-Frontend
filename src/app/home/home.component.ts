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


inqcre(): void{
  window.location.href='http://192.168.0.10:8080/mavenspring/inqcre?weblng=EN&emnum=1&bodybgc=%23F4F6F9&headbgc=%232a377b&tablinkbgc=%23555555&tabcontbgc=%235e849c&tablebgc=%23555555&ccd=JA01';
}
inqchn(): void{
  window.location.href='http://192.168.0.10:8080/mavenspring/inqcha?weblng=EN&emnum=1&bodybgc=%23F4F6F9&headbgc=%232a377b&tablinkbgc=%23555555&tabcontbgc=%235e849c&tablebgc=%23555555&ccd=JA01';
}
inqdis(): void{
  window.location.href='http://192.168.0.10:8080/mavenspring/inqdis?weblng=EN&emnum=1&bodybgc=%23F4F6F9&headbgc=%232a377b&tablinkbgc=%23555555&tabcontbgc=%235e849c&tablebgc=%23555555&ccd=JA01';
}
inqdel(): void{
  window.location.href='http://192.168.0.10:8080/mavenspring/inqdel?weblng=EN&emnum=1&bodybgc=%23F4F6F9&headbgc=%232a377b&tablinkbgc=%23555555&tabcontbgc=%235e849c&tablebgc=%23555555&ccd=JA01';
}

biscre(): void{
  window.location.href='http://192.168.0.10:8080/mavenspring/bpmcre?weblng=EN&emnum=1&bodybgc=%23F4F6F9&headbgc=%232a377b&tablinkbgc=%23555555&tabcontbgc=%235e849c&tablebgc=%23555555&ccd=JA01';
}
bischn(): void{
  window.location.href='http://192.168.0.10:8080/mavenspring/bpmcha?weblng=EN&emnum=1&bodybgc=%23F4F6F9&headbgc=%232a377b&tablinkbgc=%23555555&tabcontbgc=%235e849c&tablebgc=%23555555&ccd=JA01';
}
bisdis(): void{
  window.location.href='http://192.168.0.10:8080/mavenspring/bpmdis?weblng=EN&emnum=1&bodybgc=%23F4F6F9&headbgc=%232a377b&tablinkbgc=%23555555&tabcontbgc=%235e849c&tablebgc=%23555555&ccd=JA01';
}
bisdel(): void{
  window.location.href='http://192.168.0.10:8080/mavenspring/bpmdel?weblng=EN&emnum=1&bodybgc=%23F4F6F9&headbgc=%232a377b&tablinkbgc=%23555555&tabcontbgc=%235e849c&tablebgc=%23555555&ccd=JA01';
}

authcre(): void{
  window.location.href='http://192.168.0.10:8080/mavenspring/authcre?weblng=EN&emnum=1&bodybgc=%23F4F6F9&headbgc=%232a377b&tablinkbgc=%23555555&tabcontbgc=%235e849c&tablebgc=%23555555&ccd=JA01';
}
authchn(): void{
  window.location.href='http://192.168.0.10:8080/mavenspring/authcha?weblng=EN&emnum=1&bodybgc=%23F4F6F9&headbgc=%232a377b&tablinkbgc=%23555555&tabcontbgc=%235e849c&tablebgc=%23555555&ccd=JA01';
}
authdis(): void{
  window.location.href='http://192.168.0.10:8080/mavenspring/authdis?weblng=EN&emnum=1&bodybgc=%23F4F6F9&headbgc=%232a377b&tablinkbgc=%23555555&tabcontbgc=%235e849c&tablebgc=%23555555&ccd=JA01';
}
authdel(): void{
  window.location.href='http://192.168.0.10:8080/mavenspring/authdel?weblng=EN&emnum=1&bodybgc=%23F4F6F9&headbgc=%232a377b&tablinkbgc=%23555555&tabcontbgc=%235e849c&tablebgc=%23555555&ccd=JA01';
}

pocre(): void{
  window.location.href='http://192.168.0.10:8080/mavenspring/pocre?weblng=EN&emnum=1&bodybgc=%23F4F6F9&headbgc=%232a377b&tablinkbgc=%23555555&tabcontbgc=%235e849c&tablebgc=%23555555&ccd=JA01';
}
pochn(): void{
  window.location.href='http://192.168.0.10:8080/mavenspring/pocha?weblng=EN&emnum=1&bodybgc=%23F4F6F9&headbgc=%232a377b&tablinkbgc=%23555555&tabcontbgc=%235e849c&tablebgc=%23555555&ccd=JA01';
}
podis(): void{
  window.location.href='http://192.168.0.10:8080/mavenspring/podis?weblng=EN&emnum=1&bodybgc=%23F4F6F9&headbgc=%232a377b&tablinkbgc=%23555555&tabcontbgc=%235e849c&tablebgc=%23555555&ccd=JA01';
}
podel(): void{
  window.location.href='http://192.168.0.10:8080/mavenspring/podel?weblng=EN&emnum=1&bodybgc=%23F4F6F9&headbgc=%232a377b&tablinkbgc=%23555555&tabcontbgc=%235e849c&tablebgc=%23555555&ccd=JA01';
}

poapp(): void{
  window.location.href='http://192.168.0.10:8080/mavenspring/appscr?weblng=EN&emnum=1&bodybgc=%23F4F6F9&headbgc=%232a377b&tablinkbgc=%23555555&tabcontbgc=%235e849c&tablebgc=%23555555&ccd=JA01';
}

timesheet(): void{
  window.location.href='http://localhost:4200/timesheet/1/2022-12-17T00:00:00.000Z';
}

monthsheet(): void{
  window.location.href='http://192.168.0.10:8080/mavenspring/appscr?weblng=EN&emnum=1&bodybgc=%23F4F6F9&headbgc=%232a377b&tablinkbgc=%23555555&tabcontbgc=%235e849c&tablebgc=%23555555&ccd=JA01';
}

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
