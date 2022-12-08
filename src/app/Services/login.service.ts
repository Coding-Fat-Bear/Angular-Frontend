import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Login } from '../Models/login.model';
import { Token } from '../Models/Token.model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
 private baseUrl = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  loginByUsernameAndPassword(login:Login):Observable<any>{
    return this.httpClient.post<Token>(`${this.baseUrl}/login/login`,login)
  }

  fetchLoginById(Id:number):Observable<any>{
    const token  = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<Login>(`${this.baseUrl}/login/fetch/${Id}`, { headers: headers })
  }
}
