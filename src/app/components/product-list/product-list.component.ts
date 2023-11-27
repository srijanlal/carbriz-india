import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product-services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent {

  products: any[] = [];
  isLoading: boolean = true;

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
      this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
        this.isLoading = false;
        console.log(this.products);
      },
      (error) => {
        console.log('Error fetching products: ', error);
      }
    );
  }

}
