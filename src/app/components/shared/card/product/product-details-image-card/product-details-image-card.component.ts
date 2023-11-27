import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-details-image-card',
  templateUrl: './product-details-image-card.component.html',
  styleUrls: ['./product-details-image-card.component.css']
})
export class ProductDetailsImageCardComponent {
@Input() product : any
}
