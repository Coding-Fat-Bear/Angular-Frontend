import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../../Models/Login.model';
import { Token } from '../../Models/Token.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  loginByUsernameAndPassword(login:Login):Observable<any>{
    return this.httpClient.post<Token>(`${this.baseUrl}/api/login`,login)
  }
  fetchLoginById(Id:number):Observable<any>{
    const token  = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    headers.set('Access-Control-Allow-Origin','*');
    return this.httpClient.get<Login>(`${this.baseUrl}/api/fetch/${Id}`, { headers: headers })
  }
}
