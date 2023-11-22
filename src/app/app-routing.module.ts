import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ApplyForDealershipComponent } from './components/apply-for-dealership/apply-for-dealership.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { InstagramPostComponent } from './components/instagram-post/instagram-post.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginPageComponent } from './components/authentication/login-page/login-page.component';
import { SignupPageComponent } from './components/authentication/signup-page/signup-page.component';
import { VerifyCodeComponent } from './components/authentication/verify-code/verify-code.component';
import { ForgotPassPageComponent } from './components/authentication/forgot-pass-page/forgot-pass-page.component';
import { ResetPasswordComponent } from './components/authentication/reset-password/reset-password.component';

const routes: Routes = [
  { path : '', component: HomeComponent},
  { path : 'home', component : HomeComponent},
  { path : 'products', component : ProductsComponent},
  { path : 'about', component : AboutComponent},
  { path : 'contact-us', component : ContactUsComponent},
  { path : 'apply-for-dealership', component : ApplyForDealershipComponent},
  { path : 'admin', component : AdminComponent},
  { path : 'dashboard', component : DashboardComponent},
  { path : 'orders', component : OrdersComponent},
  { path : 'coupons', component : CouponsComponent},
  { path : 'instagram-post', component : InstagramPostComponent},
  { path : 'cart', component : CartComponent},
  { path : 'login', component : LoginPageComponent},
  { path : 'signup', component : SignupPageComponent},
  { path : 'verify-code', component : VerifyCodeComponent},
  { path : 'forgot-password', component : ForgotPassPageComponent},
  { path : 'reset-password', component : ResetPasswordComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
