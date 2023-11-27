import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Customer } from 'src/app/models/customer.model';
import { ProductService } from 'src/app/services/product-services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any
  isLoading: boolean = true;
  user_image : string = '../../../assets/images/srijan.jpg'

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    initFlowbite();
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.isLoading = true;
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
        this.isLoading = false;
      },
      (error) => {
        console.log('Error fetching products: ', error);
      }
    );
  }

  loadProductsByCategory(category: any) {
    // this.isLoading = true;
    this.productService.getProductsByCategory(category).subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.log('Error getting products by Category : ', error);
      }
    );
  }
}
