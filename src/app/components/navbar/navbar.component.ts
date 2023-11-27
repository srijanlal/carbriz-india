import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls:['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarOpened : boolean= false;
  hideNavbar: string ='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
  showNavbar: string ='items-center justify-between w-full md:flex md:w-auto md:order-1'
  screenWidth: number;

  customer : any={
    imageUrl: '../../../assets/images/srijan.jpg'
  }

  constructor() {
    // Initialize the screenWidth property
    this.screenWidth = window.innerWidth;
    if(this.screenWidth>= 767){
      this.isNavbarOpened= true;
    }
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // Update the screenWidth property when the window is resized
    this.screenWidth = window.innerWidth;
    
    // You can add additional logic based on the screen size here
    if (this.screenWidth >= 768) {
      this.isNavbarOpened= true
      // Do something for smaller screens
    } else {
      this.isNavbarOpened = false;
      // Do something for larger screens
    }
  }
  toggleNavbar(){
    if(this.screenWidth>=767)return;
    this.isNavbarOpened = !this.isNavbarOpened;
  }

isAdmin(){
  return true;
}
}
