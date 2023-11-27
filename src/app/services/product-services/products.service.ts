import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseUrlService } from '../data-services/base-url.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // private apiUrl = this.baseUrl.url; // Replace with your Node.js server API URL
      private apiUrl = this.baseUrl.url; // Replace with your Node.js server API URL

  constructor(private http: HttpClient, private baseUrl : BaseUrlService) {}

  // Insert a new product
  addProduct(productData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/products`, productData);
  }

  // Update an existing product
  updateProduct(productId: string, productData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/products/${productId}`, productData);
  }

  // Delete a product
  deleteProduct(productId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/products/${productId}`);
  }

  // Get all products
  getAllProducts(): Observable<any> {
    console.log(this.apiUrl)
    return this.http.get(`${this.apiUrl}/products`);
  }

  // Get products by category
  getProductsByCategory(category: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/products/category/${category}`);
  }
}
