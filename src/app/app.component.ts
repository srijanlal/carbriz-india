import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ProductService } from './services/product-services/products.service';
import { DataServiceService } from './services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'carbriz-india-client';

  constructor(
    private productService : ProductService,
    private dataService : DataServiceService
    ){}



  ngOnInit(): void {
    initFlowbite();
    this.getAllProducts()
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(
      (data)=>{
        this.dataService.products = data;
        console.log(this.dataService.products)
      }
    )
  }
}
