import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrlService } from '../data-services/base-url.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyCodeService {


  private apiUrl = this.baseUrl.url; // Replace with your Node.js server API URL

  constructor(private http: HttpClient, private baseUrl : BaseUrlService) {}




  verifyCode(userCredential:string, code:string):Observable<{isCodeValid: boolean}>{
    return this.http.post<{isCodeValid:boolean}>(`${this.apiUrl}/verify-code`, {userCredential, code});
  }
}
