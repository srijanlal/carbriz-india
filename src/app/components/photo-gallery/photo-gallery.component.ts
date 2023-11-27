import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { ProductService } from 'src/app/services/product-services/products.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit{
products: any
constructor(private dataService : DataServiceService, private productService : ProductService){

}

ngOnInit(): void {
  this.products = this.dataService.products
  console.log(this.products)
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
