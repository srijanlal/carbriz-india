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

  constructor(private http : HttpClient, private baseUrl : BaseUrlService) { }

  private signupUrl = this.baseUrl.url;

  signup(username: string, email: string, password: string, mobile:number, state:string):Observable<SignupResponse>{
    return this.http.post<SignupResponse>(`${this.signupUrl}/signup`,{username, email, password, mobile, state});
  }


}
