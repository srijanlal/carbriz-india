import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ProductsService } from 'src/app/services/product-services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})



export class ProductsComponent {
  products: any[] = [];
  isLoading: boolean = true;

  dummyProducts: any[]=[1, 2, 3, 4, 5, 6, 7, 8, 9]

  constructor(
    
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    initFlowbite()
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

  getAllProducts(){
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

  getProductsByCategory(category: any) {
    this.productService.getProductsByCategory(category).subscribe(
      (data) => {
        this.products = data;
        console.log(JSON.stringify(data));
      },
      (error) => {
        console.log('Error getting products by Category : ', error);
      }
    );
  }



  // this.productService.getAllProducts().subscribe(
  //   (data) => {
  //     this.products = data;
  //     this.isLoading = false;
  //     console.log(this.products);
  //   },
  //   (error) => {
  //     console.log('Error fetching products: ', error);
  //   }
  // );
  // getAllCategories() {
  //   this.productService.getAllProducts().subscribe(
  //     (data) => {
  //       this.products = data;
  //       console.log(this.products);
  //     },
  //     (error) => {
  //       console.log('Error fetching products: ', error);
  //     }
  //   );
  // }

  // getProductsByCategory(category: any) {
  //   this.productService.getProductsByCategory(category).subscribe(
  //     (data) => {
  //       this.products = data;
  //       console.log(data);
  //     },
  //     (error) => {
  //       console.log('Error getting products by Category : ', error);
  //     }
  //   );
  // }
}
