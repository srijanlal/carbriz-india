import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroSectionComponent } from './components/shared/hero-section/hero-section.component';
import { HomeComponent } from './components/home/home.component';
import { ProductCardComponent } from './components/shared/card/product/product-card/product-card.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ApplyForDealershipComponent } from './components/apply-for-dealership/apply-for-dealership.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { ProductSearchComponent } from './components/shared/search/product-search/product-search.component';
import { HttpClientModule } from '@angular/common/http';
import { InstagramPostComponent } from './components/instagram-post/instagram-post.component';
import { InstaPostCardComponent } from './components/shared/card/insta-post-card/insta-post-card.component';
import { ContentSectionComponent } from './components/content-section/content-section.component';
import { UpdateProductComponent } from './components/admin/update-product/update-product.component';
import { UpdateUserComponent } from './components/admin/update-user/update-user.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './components/authentication/login-page/login-page.component';
import { SignupPageComponent } from './components/authentication/signup-page/signup-page.component';
import { ForgotPassPageComponent } from './components/authentication/forgot-pass-page/forgot-pass-page.component';
import { VerifyCodeComponent } from './components/authentication/verify-code/verify-code.component';
import { ResetPasswordComponent } from './components/authentication/reset-password/reset-password.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { TeamCardComponent } from './components/shared/card/team-card/team-card.component';
import { PopupCardsComponent } from './components/shared/card/popup-cards/popup-cards.component';
import { DealOfTheDayComponent } from './components/shared/card/popup-cards/deal-of-the-day/deal-of-the-day.component';
import { HeadingSectionComponent } from './components/shared/heading-section/heading-section.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HeroSectionComponent,
    HomeComponent,
    ProductCardComponent,
    ProductsComponent,
    AboutComponent,
    ContactUsComponent,
    ApplyForDealershipComponent,
    AdminComponent,
    DashboardComponent,
    OrdersComponent,
    CouponsComponent,
    ProductSearchComponent,
    InstagramPostComponent,
    InstaPostCardComponent,
    ContentSectionComponent,
    UpdateProductComponent,
    UpdateUserComponent,
    LoginPageComponent,
    SignupPageComponent,
    ForgotPassPageComponent,
    VerifyCodeComponent,
    ResetPasswordComponent,
    OurTeamComponent,
    TeamCardComponent,
    PopupCardsComponent,
    DealOfTheDayComponent,
    HeadingSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
