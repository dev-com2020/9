import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'paProductForm',
  templateUrl: "product-form.component.html",
  // styleUrls: ["product-form.component.css"],
  // encapsulation: ViewEncapsulation.Emulated
})
export class ProductFormComponent {
  newProduct: Product = new Product();

  @Output("paNewProduct")
  newProductEvent = new EventEmitter<Product>();

  submitForm(form: any){
    this.newProductEvent.emit(this.newProduct);
    this.newProduct = new Product();
    form.reset();
  }
  
}
