// import { HttpClient } from '@angular/common/http';
// import { Injectable, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
// import { BaseUrlService } from '../data-services/base-url.service';


// @Injectable({
//   providedIn: 'root'
// })
// export class ProductsService{
//   private productsUrl = this.baseUrl.url


//   constructor( private http: HttpClient , private baseUrl : BaseUrlService ){}
//   getAllProducts(): Observable<any>{
//     return this.http.get<any>(`${this.productsUrl}/products`);
//   }
// }

// product.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseUrlService } from '../data-services/base-url.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = this.url.url ; // replace with your actual backend server URL

  constructor(
    private http: HttpClient,
    private url : BaseUrlService) { }

  // Insert a new product
  addProduct(product: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/products`, product);
  }

  // Update an existing product
  updateProduct(productId: number, product: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/products/${productId}`, product);
  }

  // Delete a product
  deleteProduct(productId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/products/${productId}`);
  }

  // Get all products
  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products`);
  }

  // Get products by category
  getProductsByCategory(category: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/category/${category}`);
  }
}



























// // products.service.ts

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { BaseUrlService } from '../data-services/base-url.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class ProductsService {



//   private apiUrl = this.baseurl.url; // Replace with your actual API endpoint

//   constructor(
//     private http: HttpClient,
//      private baseurl : BaseUrlService) {}

//      getAllProducts(): Observable<any>{
//       return this.http.get<any>(`${this.baseurl}/products`);
//     }

//   getProductsByCategory(category: string): Observable<Product[]> {
//     const url = `${this.apiUrl}/category/${category}`;
//     return this.http.get<Product[]>(url);
//   }

//   getProductsByProductCode(productCode: string): Observable<Product> {
//     const url = `${this.apiUrl}/code/${productCode}`;
//     return this.http.get<Product>(url);
//   }

//   getProductByProductTitle(productTitle: string): Observable<Product[]> {
//     const url = `${this.apiUrl}/title/${productTitle}`;
//     return this.http.get<Product[]>(url);
//   }

//   getProductByProductPrice(price: number): Observable<Product[]> {
//     const url = `${this.apiUrl}/price/${price}`;
//     return this.http.get<Product[]>(url);
//   }
// }

// interface Product {
//   id: number;
//   title: string;
//   category: string;
//   code: string;
//   price: number;
//   // Add other properties as needed
// }
