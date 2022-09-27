import { Component } from "@angular/core";
import { Model } from "./repository.model";

@Component({
  selector: "app",
  templateUrl: "template.html"
})
export class ProductComponent {
  model: Model = new Model();

  // getClasses(): string{
  //   return this.model.getProducts().length == 5 ? "bg-success": "bg-warning";
  // }

  getClasses(key: number): string {
    let product = this.model.getProduct(key);
    return "p-2 " + (product.price < 50 ? "bg-info" : "bg-warning");
  }
}
