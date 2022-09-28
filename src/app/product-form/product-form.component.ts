import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

import { Product } from '../product.model';
import { Model } from '../repository.model';

@Component({
  selector: 'paProductForm',
  templateUrl: "product-form.component.html",
  // styleUrls: ["product-form.component.css"],
  // encapsulation: ViewEncapsulation.Emulated
})
export class ProductFormComponent {
  newProduct: Product = new Product();
  constructor(private model: Model){}

  // @Output("paNewProduct")
  // newProductEvent = new EventEmitter<Product>();

  submitForm(form: any){
    // this.newProductEvent.emit(this.newProduct);
    this.model.saveProduct(this.newProduct);
    this.newProduct = new Product();
    form.reset();
  }
  
}
