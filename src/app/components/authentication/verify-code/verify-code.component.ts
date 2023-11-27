import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VerifyCodeService } from 'src/app/services/login-services/verify-code.service';
import { CustomerDataService } from 'src/app/services/login-services/customer-data.service';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.scss']
})
export class VerifyCodeComponent {
  code: string=''
  isCodeValid: boolean = false;
  verificationErrorMsg: string=''

  constructor(
    private router : Router,
    private customerData : CustomerDataService,
    private verificationCodeService : VerifyCodeService
    ) {}




    verifyCode(){
      if (this.code==='' && this.customerData.userCredential===''){
        console.log('No, Input Found !!')
        return;
      }
      console.log("Verify Code Clicked!")
      this.verificationCodeService.verifyCode (this.customerData.userCredential , this.code).subscribe(
        (response)=>{
          // console.log(response)
        if(response.isCodeValid){
          this.router.navigate(['./reset-password'])
          console.log('Verification Successfull !!!')
        }else{
          console.log("Verification Unsucessfull !!!");
        }
        }
      )
    }

}
