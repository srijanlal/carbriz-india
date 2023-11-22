import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form, NgForm } from '@angular/forms';
import { SignupService } from 'src/app/services/login-services/signup.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit{

  username!:string
  email!:string
  password!:string
  mobile!:number
  state!:string
  form: Form | undefined

  constructor(private router: Router, private http: HttpClient, private signupService : SignupService) {}

  signUp(form: { resetForm: () => void; }): void {
    
    this.signupService.signup(this.username, this.email, this.password, this.mobile, this.state)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/products'])
        // Handle success, e.g., redirect to login page
      }, error => {
        console.error(error);
        // Handle error, e.g., display an error message
      });
      form
  }

  ngOnInit(): void {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
