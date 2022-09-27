import { ApplicationRef, Component } from "@angular/core";
import { Product } from "./product.model";
import { Model } from "./repository.model";

@Component({
  selector: "app",
  templateUrl: "template.html"
})
export class ProductComponent {
  model: Model = new Model();

  constructor(ref: ApplicationRef) {
    (<any>window).appRef = ref;
    (<any>window).model = this.model;
  }
  getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
  }
  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }
  getProducts(): Product[] {
    return this.model.getProducts();
  }
  getProductCount(): number {
    console.log("Wywołanie metody getProductCount().")
    return this.getProducts().length;
  }

  getKey(index: number, product: Product){
    return product.id;
  }

  targetName: string = "Kajak";

  counter: number = 1;

  // get nextProduct(): Product{
  //   return this.model.getProducts().shift();
  // }

  getProductPrice(index:number):number{
    return Math.floor(this.getProduct(index).price);
  }

  selectedProduct: string;

  getSelected(product: Product): boolean{
    return product.name == this.selectedProduct;
  }
}