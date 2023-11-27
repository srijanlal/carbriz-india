import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-cart-table',
  templateUrl: './product-cart-table.component.html',
  styleUrls: ['./product-cart-table.component.css']
})
export class ProductCartTableComponent {
  @Input() cart : any

}
