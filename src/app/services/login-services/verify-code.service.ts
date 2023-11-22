import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrlService } from '../data-services/base-url.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyCodeService {

  constructor(private http: HttpClient, private baseUrl : BaseUrlService) { }


  private verifyCodeUrl = this.baseUrl.url;




  verifyCode(userCredential:string, code:string):Observable<{isCodeValid: boolean}>{
    return this.http.post<{isCodeValid:boolean}>(`${this.verifyCodeUrl}/verify-code`, {userCredential, code});
  }
}
