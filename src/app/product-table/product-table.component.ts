import { Component, Input, OnInit } from '@angular/core';
import { DiscountService } from '../discount.service';
import { Product } from '../product.model';
import { Model } from '../repository.model';

@Component({
  selector: 'paProductTable',
  templateUrl: "product-table.component.html"
})
export class ProductTableComponent {
  // discounter: DiscountService = new DiscountService();
  
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

  selectMap = {
    "Sporty wodne": "będzie mokro...",
    "Piłka nożna": "będą bramki...",
    "other": "będzie dobra zabawa..."

  }


}


