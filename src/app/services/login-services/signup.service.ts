import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrlService } from '../data-services/base-url.service';

interface SignupResponse{
  isAccountCreated: boolean;
}
@Injectable({
  providedIn: 'root'
})


export class SignupService {

  private apiUrl = this.baseUrl.url; // Replace with your Node.js server API URL

  constructor(private http: HttpClient, private baseUrl : BaseUrlService) {}


  signup(name: string, username: string, email: string, password: string, mobile:number, state:string):Observable<SignupResponse>{
    return this.http.post<SignupResponse>(`${this.apiUrl}/signup`,{name, username, email, password, mobile, state});
  }


}
