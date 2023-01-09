import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {
  private baseUrl = "http://localhost:3000";
  private data : any;
  constructor(private httpClient: HttpClient) { }

  appauthcheck(id:number,APPMASTER:string,AUTHFLG:string):Observable<any>{
    const token  = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get(`${this.baseUrl}/api/auth_chk/${id}&${APPMASTER}&${AUTHFLG}`, { headers: headers })
  }

}
