import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { Model } from '../repository.model';

@Component({
  selector: 'paProductTable',
  templateUrl: "product-table.component.html"
})
export class ProductTableComponent {
  @Input("model")
  dataModel: Model;

  getProduct(key: number): Product {
    return this.dataModel.getProduct(key);
  }
  getProducts(): Product[] {
    return this.dataModel.getProducts();
  }
  deleteProduct(key: number) {
    this.dataModel.deleteProduct(key);
  }

  showTable: boolean = true;

  taxRate: number = 0;
  categoryFilter: string;
  itemCount: 3;
}


