import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login-services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';
  username: string = '';
  showErrorMessage: boolean = false;
  userCredential: string = '';

  constructor(private router: Router, private loginService: LoginService) {}

  login() {
    if (this.email) this.userCredential = this.email;
    else if (this.username) this.userCredential = this.username;
    else {
      console.log('Please enter either usename or email');
      this.showErrorMessage = true;
      return;
    }
    this.loginService.login(this.userCredential, this.password).subscribe(
      (response) => {
        this.router.navigate(['/home'])
        console.log(response)
      },
      (error) => {
        console.log('Login Unsuccessfull', error);
        this.showErrorMessage = true;
      }
    );
  }

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }
}
