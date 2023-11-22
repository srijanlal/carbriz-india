// forgot-pass-page.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerDataService } from 'src/app/services/login-services/customer-data.service';
import { ForgotPasswordService } from 'src/app/services/login-services/forgot-password.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-pass-page.component.html',
  styleUrls: ['./forgot-pass-page.component.scss']
})

export class ForgotPassPageComponent {
  userCredential:string=''
  email:string=''
  username:string =''
  isMailSent: boolean = false;
  mailSentMsg: string = '';
  mailNotSentMsg: string = '';

  constructor(
    private router: Router,
    private forgotPasswordService: ForgotPasswordService,
    private customerData : CustomerDataService
  ) {}

  sendVerificationCode() {
    
    console.log(this.userCredential)
    if(this.username){
      this.customerData.userCredential = this.username
      this.userCredential= this.username;
    }else if(this.email){
      this.customerData.userCredential = this.email
      this.userCredential= this.email;
    }else{
      console.log("Enter any value! Either username or email.")
      return;
    }
    console.log(this.userCredential)
    this.forgotPasswordService.sendVerificationCode(this.userCredential).subscribe(
      (response) => {
        this.isMailSent = true;
        this.mailSentMsg = response.message;
        this.router.navigate(['./verify-code']);
      },
      (error) => {
        this.isMailSent = false;
        this.mailNotSentMsg = 'Error sending verification code. Please try again.';
        console.error('Error sending verification code:', error);
      }
    );
  }
}
