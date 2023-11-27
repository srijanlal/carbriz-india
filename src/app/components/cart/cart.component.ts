import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {


  cart: any=[
    {
      cartItemTitle : 'Coating',
      cartItemPrice: '424',
      cartItemImageUrl: '../../../assets/images/6.png'
    },
    {
      cartItemTitle : 'Coating',
      cartItemPrice: '424',
      cartItemImageUrl: '../../../assets/images/5.png'
    },
    {
      cartItemTitle : 'Coating',
      cartItemPrice: '424',
      cartItemImageUrl: '../../../assets/images/7.png'
    }
  ]

}
